import Meting from "@meting/core";

export interface BridgeTrack {
  id: string;
  source: "netease";
  neteaseId: string;
  title: string;
  artists: string[];
  album?: string;
  cover?: string;
  pictureId?: string;
  lyricId?: string;
  urlId?: string;
}

interface RawTrack {
  id?: string | number;
  name?: string;
  artist?: string | string[];
  album?: string;
  ar?: Array<{ name?: string }>;
  al?: { name?: string; picUrl?: string; pic_str?: string; pic?: string | number };
  pic_id?: string | number;
  lyric_id?: string | number;
  url_id?: string | number;
}

export interface MusicProvider {
  playlist(id: string): Promise<BridgeTrack[]>;
  streamUrl(id: string): Promise<string>;
  lyric(id: string): Promise<string>;
  pictureUrl(id: string): Promise<string>;
}

export type MetingErrorCode = "netease_auth_required" | "netease_invalid_response" | "netease_upstream_error";

export class MetingUpstreamError extends Error {
  constructor(public readonly code: MetingErrorCode, message: string) {
    super(message);
    this.name = "MetingUpstreamError";
  }
}

export class MetingClient implements MusicProvider {
  private readonly formattedClient: Meting;
  private readonly rawClient: Meting;

  constructor(cookie?: string) {
    this.formattedClient = new Meting("netease");
    this.formattedClient.format(true);
    this.rawClient = new Meting("netease");
    this.rawClient.format(false);
    if (cookie) {
      this.formattedClient.cookie(cookie);
      this.rawClient.cookie(cookie);
    }
  }

  async playlist(id: string): Promise<BridgeTrack[]> {
    return normalizePlaylistResponse(parseJson(await this.rawClient.playlist(id)));
  }

  async streamUrl(id: string): Promise<string> {
    const raw = parseJson(await this.formattedClient.url(id, 320));
    const item = Array.isArray(raw) ? raw[0] : raw;
    const url = getString(item, "url");
    if (!url || !/^https?:\/\//.test(url)) throw new Error("MusicService");
    return url;
  }

  async lyric(id: string): Promise<string> {
    const raw = parseJson(await this.formattedClient.lyric(id));
    if (typeof raw === "string") return raw;
    return getString(raw, "lyric") ?? getString(raw, "lrc") ?? "";
  }

  async pictureUrl(id: string): Promise<string> {
    const raw = parseJson(await this.formattedClient.pic(id, 500));
    if (typeof raw === "string" && /^https?:\/\//.test(raw)) return raw;
    const url = getString(raw, "url");
    if (!url || !/^https?:\/\//.test(url)) throw new Error("MusicService");
    return url;
  }
}

export function normalizePlaylistResponse(raw: unknown): BridgeTrack[] {
  assertSuccessfulResponse(raw);
  const rows = Array.isArray(raw) ? raw : extractArray(raw);
  if (!rows.length) {
    throw new MetingUpstreamError("netease_invalid_response", "MusicService");
  }

  return rows.flatMap((item) => {
    const track = item as RawTrack;
    const trackId = String(track.id ?? track.url_id ?? "");
    if (!trackId || !track.name) return [];
    const rawArtists = track.ar?.map((artist) => artist.name).filter((name): name is string => Boolean(name));
    const artists = rawArtists?.length
      ? rawArtists
      : Array.isArray(track.artist)
        ? track.artist.map(String)
        : [String(track.artist ?? "MusicService")];
    const pictureId = track.pic_id ?? track.al?.pic_str ?? track.al?.pic ?? trackId;
    return [{
      id: `netease-${trackId}`,
      source: "netease" as const,
      neteaseId: trackId,
      title: track.name,
      artists,
      album: track.album ?? track.al?.name,
      cover: track.al?.picUrl,
      pictureId: String(pictureId),
      lyricId: String(track.lyric_id ?? trackId),
      urlId: String(track.url_id ?? trackId),
    }];
  });
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function extractArray(value: unknown): unknown[] {
  if (!value || typeof value !== "object") return [];
  const playlist = (value as Record<string, unknown>).playlist;
  if (playlist && typeof playlist === "object") {
    const tracks = (playlist as Record<string, unknown>).tracks;
    if (Array.isArray(tracks)) return tracks;
  }
  for (const key of ["songs", "tracks", "playlist", "data"]) {
    const candidate = (value as Record<string, unknown>)[key];
    if (Array.isArray(candidate)) return candidate;
  }
  return [];
}

function assertSuccessfulResponse(value: unknown): void {
  if (!value || typeof value !== "object") return;
  const code = (value as Record<string, unknown>).code;
  if (code === 200 || code === undefined) return;
  if (code === 401 || code === 301) {
    throw new MetingUpstreamError(
      "netease_auth_required",
      `MusicService（code=${String(code)}），MusicService NETEASE_COOKIE`,
    );
  }
  throw new MetingUpstreamError("netease_upstream_error", `MusicService code=${String(code)}`);
}

function getString(value: unknown, key: string): string | undefined {
  if (!value || typeof value !== "object") return undefined;
  const candidate = (value as Record<string, unknown>)[key];
  return typeof candidate === "string" ? candidate : undefined;
}
