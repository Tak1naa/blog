import { describe, expect, it } from "vitest";
import { createApp } from "../../services/music-bridge/src/app";
import type { BridgeConfig } from "../../services/music-bridge/src/config";
import { loadConfig } from "../../services/music-bridge/src/config";
import {
  MetingUpstreamError,
  type BridgeTrack,
  type MusicProvider,
} from "../../services/music-bridge/src/meting-client";

const config: BridgeConfig = {
  PORT: 3000,
  NETEASE_PLAYLIST_ID: "123",
  UPSTREAM_TIMEOUT_MS: 1000,
  METADATA_TTL_SECONDS: 1,
  STALE_TTL_SECONDS: 5,
};

function provider(playlist: () => Promise<BridgeTrack[]>): MusicProvider {
  return {
    playlist,
    streamUrl: async () => "https://example.com/audio.mp3",
    lyric: async () => "[00:00.00]test",
    pictureUrl: async () => "https://example.com/cover.jpg",
  };
}

describe("music bridge degradation", () => {
  it("accepts Compose's empty optional playlist and serves an empty local-first queue", async () => {
    const unconfigured = loadConfig({ NETEASE_PLAYLIST_ID: "" });
    expect(unconfigured.NETEASE_PLAYLIST_ID).toBeUndefined();
    const response = await createApp(unconfigured).request("/playlist");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({ tracks: [], stale: false }));
  });
  it("reports when NetEase authentication is required", async () => {
    const app = createApp(config, {
      client: provider(async () => {
        throw new MetingUpstreamError("netease_auth_required", "cookie required");
      }),
    });

    const response = await app.request("/playlist");
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      tracks: [],
      stale: false,
      error: "netease_auth_required",
      requiresCookie: true,
    });
  });

  it("serves stale playlist metadata after an upstream failure", async () => {
    let clock = 0;
    let calls = 0;
    const app = createApp(config, {
      now: () => clock,
      client: provider(async () => {
        calls += 1;
        if (calls > 1) throw new Error("upstream down");
        return [{
          id: "netease-42",
          source: "netease",
          neteaseId: "42",
          title: "cached track",
          artists: ["artist"],
        }];
      }),
    });

    expect((await app.request("/playlist")).status).toBe(200);
    clock = 1500;
    const response = await app.request("/playlist");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({ stale: true }));
    expect(calls).toBe(2);
  });
});
