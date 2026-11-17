import type { I18nOptions } from "./i18n";

export type PlaybackOrder = "list" | "loop" | "single" | "random";
export type BackgroundMode = "wallpaper" | "video";

export interface LocalTrack {
  id: string;
  source: "local";
  title: string;
  artists: string[];
  url: string;
  cover?: string;
  lyric?: string;
}

export interface NeteaseTrack {
  id: string;
  source: "netease";
  neteaseId: string;
  title: string;
  artists: string[];
  album?: string;
  cover?: string;
}

export type Track = LocalTrack | NeteaseTrack;

export interface AnimeQuote {
  text: string;
  ja?: string;
  originalSource?: string;
  work: string;
  character: string;
  source: string;
}

export interface ExperienceConfig {
  version: number;
  site: {
    homePath: string;
    title: string;
    subtitle: AnimeQuote[];
  };
  background: {
    defaultMode: BackgroundMode;
    intervalMs: number;
    transitionMs: number;
    overlayOpacity: number;
    wallpapers: Array<{ src: string; alt: string }>;
    video: {
      enabled: boolean;
      sources: Array<{ src: string; type: string }>;
      poster: string;
      timeoutMs: number;
    };
  };
  music: {
    enabled: boolean;
    apiBase: string;
    initialVolume: number;
    order: PlaybackOrder;
    localTracks: LocalTrack[];
  };
  live2d: {
    enabled: boolean;
    defaultEnabled: boolean;
    modelPaths: string[];
    welcomeMessages: string[];
    idleMessages: string[];
    videos?: Partial<Record<"stretch" | "think" | "look", string>>;
  };
  effects: {
    enabled: boolean;
    typewriter: boolean;
    sakura: boolean;
    maxParticles: number;
  };
  mobile: {
    breakpoint: number;
    live2d: boolean;
    video: boolean;
    carousel: boolean;
  };
  /** Optional: added by the build when locale packs exist in source/_data/locales. */
  i18n?: I18nOptions;
}

export interface UserSettings {
  schema: 1;
  backgroundMode: BackgroundMode;
  carousel: boolean;
  video: boolean;
  overlayOpacity: number;
  effects: boolean;
  live2d: boolean;
}

declare global {
  interface Window {
    __fireflyEnhancements?: BlogExperience;
  }
}

export interface BlogExperience {
  destroy(): void;
  refreshPage(): void;
}
