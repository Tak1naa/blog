import { describe, expect, it } from "vitest";
import {
  MetingUpstreamError,
  normalizePlaylistResponse,
} from "../../services/music-bridge/src/meting-client";

describe("Meting playlist normalization", () => {
  it("maps a raw NetEase playlist response", () => {
    const tracks = normalizePlaylistResponse({
      code: 200,
      playlist: {
        tracks: [{
          id: 42,
          name: "测试曲目",
          ar: [{ name: "歌手甲" }, { name: "歌手乙" }],
          al: { name: "测试专辑", picUrl: "https://example.com/cover.jpg", pic: 99 },
        }],
      },
    });

    expect(tracks).toEqual([expect.objectContaining({
      id: "netease-42",
      neteaseId: "42",
      title: "测试曲目",
      artists: ["歌手甲", "歌手乙"],
      album: "测试专辑",
      cover: "https://example.com/cover.jpg",
      pictureId: "99",
    })]);
  });

  it("turns an anonymous 401 into an actionable error", () => {
    try {
      normalizePlaylistResponse({ code: 401 });
      throw new Error("expected normalization to reject code 401");
    } catch (error) {
      expect(error).toBeInstanceOf(MetingUpstreamError);
      expect((error as MetingUpstreamError).code).toBe("netease_auth_required");
    }
  });
});
