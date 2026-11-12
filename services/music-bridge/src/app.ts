import { Hono } from "hono";
import type { BridgeConfig } from "./config.js";
import { StaleCache } from "./cache.js";
import {
  MetingClient,
  MetingUpstreamError,
  type BridgeTrack,
  type MusicProvider,
} from "./meting-client.js";

export interface AppDependencies {
  client: MusicProvider;
  fetcher: typeof fetch;
  now: () => number;
}

export function createApp(config: BridgeConfig, partial: Partial<AppDependencies> = {}): Hono {
  const app = new Hono();
  const client = partial.client ?? new MetingClient(config.NETEASE_COOKIE);
  const fetcher = partial.fetcher ?? fetch;
  const now = partial.now ?? Date.now;
  const playlistCache = new StaleCache<BridgeTrack[]>();
  const valueCache = new StaleCache<string>();
  const freshMs = config.METADATA_TTL_SECONDS * 1000;
  const staleMs = config.STALE_TTL_SECONDS * 1000;
  let inFlightPlaylist: Promise<{ tracks: BridgeTrack[]; stale: boolean }> | undefined;

  const loadPlaylist = async (): Promise<{ tracks: BridgeTrack[]; stale: boolean }> => {
    if (!config.NETEASE_PLAYLIST_ID) return { tracks: [], stale: false };
    const key = `playlist:${config.NETEASE_PLAYLIST_ID}`;
    const cached = playlistCache.getFresh(key, now());
    if (cached) return { tracks: exposeTracks(cached), stale: false };
    if (inFlightPlaylist) return inFlightPlaylist;
    inFlightPlaylist = withTimeout(
      client.playlist(config.NETEASE_PLAYLIST_ID),
      config.UPSTREAM_TIMEOUT_MS,
    ).then((tracks) => {
      playlistCache.set(key, tracks, freshMs, staleMs, now());
      return { tracks: exposeTracks(tracks), stale: false };
    }).catch((error: unknown) => {
      const stale = playlistCache.getStale(key, now());
      if (stale) return { tracks: exposeTracks(stale), stale: true };
      throw error;
    }).finally(() => {
      inFlightPlaylist = undefined;
    });
    return inFlightPlaylist;
  };

  const allowedTrack = async (id: string): Promise<BridgeTrack | undefined> => {
    const result = await loadPlaylist();
    const cached = playlistCache.getStale(`playlist:${config.NETEASE_PLAYLIST_ID ?? ""}`, now());
    return cached?.find((track) => track.neteaseId === id) ??
      result.tracks.find((track) => track.neteaseId === id);
  };

  app.get("/healthz", (context) => context.json({
    status: "ok",
    configured: Boolean(config.NETEASE_PLAYLIST_ID),
    cookieConfigured: Boolean(config.NETEASE_COOKIE),
  }));

  app.get("/playlist", async (context) => {
    try {
      const result = await loadPlaylist();
      return context.json({ ...result, updatedAt: new Date(now()).toISOString() });
    } catch (error) {
      const code = musicErrorCode(error);
      return context.json({
        tracks: [],
        stale: false,
        error: code,
        requiresCookie: code === "netease_auth_required",
      }, 503);
    }
  });

  app.get("/tracks/:id/lyric", async (context) => {
    const track = await safelyResolveTrack(allowedTrack, context.req.param("id"));
    if (track === "metadata_unavailable") return context.json({ error: "playlist_metadata_unavailable" }, 503);
    if (!track) return context.json({ error: "track_not_allowed" }, 404);
    try {
      const lyric = await cachedValue(
        valueCache,
        `lyric:${track.neteaseId}`,
        () => withTimeout(client.lyric(track.lyricId ?? track.neteaseId), config.UPSTREAM_TIMEOUT_MS),
        freshMs,
        staleMs,
        now,
      );
      return context.json({ lyric });
    } catch {
      return context.json({ lyric: "", error: "lyric_unavailable" }, 503);
    }
  });

  app.get("/tracks/:id/cover", async (context) => {
    const track = await safelyResolveTrack(allowedTrack, context.req.param("id"));
    if (track === "metadata_unavailable") return context.json({ error: "playlist_metadata_unavailable" }, 503);
    if (!track) return context.json({ error: "track_not_allowed" }, 404);
    try {
      const url = await cachedValue(
        valueCache,
        `cover:${track.neteaseId}`,
        () => withTimeout(client.pictureUrl(track.pictureId ?? track.neteaseId), config.UPSTREAM_TIMEOUT_MS),
        freshMs,
        staleMs,
        now,
      );
      return proxyResponse(fetcher, url, context.req.raw.headers, config.UPSTREAM_TIMEOUT_MS, false);
    } catch {
      return context.json({ error: "cover_unavailable" }, 503);
    }
  });

  app.get("/tracks/:id/stream", async (context) => {
    const track = await safelyResolveTrack(allowedTrack, context.req.param("id"));
    if (track === "metadata_unavailable") return context.json({ error: "playlist_metadata_unavailable" }, 503);
    if (!track) return context.json({ error: "track_not_allowed" }, 404);
    try {
      const url = await cachedValue(
        valueCache,
        `stream:${track.neteaseId}`,
        () => withTimeout(client.streamUrl(track.urlId ?? track.neteaseId), config.UPSTREAM_TIMEOUT_MS),
        8 * 60 * 1000,
        20 * 60 * 1000,
        now,
      );
      return proxyResponse(fetcher, url, context.req.raw.headers, config.UPSTREAM_TIMEOUT_MS, true);
    } catch {
      return context.json({ error: "stream_unavailable" }, 503);
    }
  });

  app.notFound((context) => context.json({ error: "not_found" }, 404));
  app.onError((error, context) => {
    console.error("music-bridge request failed", { path: context.req.path, message: error.message });
    return context.json({ error: "internal_error" }, 500);
  });
  return app;
}

function musicErrorCode(error: unknown): string {
  return error instanceof MetingUpstreamError ? error.code : "netease_unavailable";
}

async function safelyResolveTrack(
  resolver: (id: string) => Promise<BridgeTrack | undefined>,
  id: string,
): Promise<BridgeTrack | undefined | "metadata_unavailable"> {
  try {
    return await resolver(id);
  } catch {
    return "metadata_unavailable";
  }
}

function exposeTracks(tracks: BridgeTrack[]): BridgeTrack[] {
  return tracks.map((track) => ({
    id: track.id,
    source: track.source,
    neteaseId: track.neteaseId,
    title: track.title,
    artists: track.artists,
    album: track.album,
    cover: `/api/music/tracks/${encodeURIComponent(track.neteaseId)}/cover`,
  }));
}

async function cachedValue(
  cache: StaleCache<string>,
  key: string,
  loader: () => Promise<string>,
  freshMs: number,
  staleMs: number,
  now: () => number,
): Promise<string> {
  const fresh = cache.getFresh(key, now());
  if (fresh) return fresh;
  try {
    const value = await loader();
    cache.set(key, value, freshMs, staleMs, now());
    return value;
  } catch (error) {
    const stale = cache.getStale(key, now());
    if (stale) return stale;
    throw error;
  }
}

async function proxyResponse(
  fetcher: typeof fetch,
  url: string,
  requestHeaders: Headers,
  timeoutMs: number,
  includeRange: boolean,
): Promise<Response> {
  const headers = new Headers();
  if (includeRange) {
    const range = requestHeaders.get("range");
    if (range) headers.set("range", range);
  }
  const upstream = await fetcher(url, {
    headers,
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!upstream.ok && upstream.status !== 206) throw new Error(`upstream_${upstream.status}`);
  const responseHeaders = new Headers();
  for (const key of ["content-type", "content-length", "content-range", "accept-ranges", "etag", "last-modified"]) {
    const value = upstream.headers.get(key);
    if (value) responseHeaders.set(key, value);
  }
  responseHeaders.set("cache-control", includeRange ? "private, max-age=300" : "public, max-age=21600");
  return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  let timer: NodeJS.Timeout | undefined;
  const timeout = new Promise<never>((_resolve, reject) => {
    timer = setTimeout(() => reject(new Error("upstream_timeout")), timeoutMs);
  });
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}
