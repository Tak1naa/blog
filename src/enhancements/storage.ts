import type { UserSettings } from "./types";

const SETTINGS_KEY = "blog-experience:v1";
const MUSIC_KEY = "blog-music:v1";
const LOCALE_KEY = "blog-locale:v1";

export function loadSettings(defaults: UserSettings): UserSettings {
  try {
    const value = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "null") as Partial<UserSettings> | null;
    if (!value || value.schema !== 1) return defaults;
    return {
      ...defaults,
      ...value,
      schema: 1,
      overlayOpacity: clamp(Number(value.overlayOpacity ?? defaults.overlayOpacity), 0, 0.85),
    };
  } catch {
    return defaults;
  }
}

export function saveSettings(settings: UserSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Storage is an enhancement; private browsing must not break the site.
  }
}

export interface MusicState {
  trackId?: string;
  volume: number;
  order: "list" | "loop" | "single" | "random";
  seek: number;
}

export function loadMusicState(defaultVolume: number, defaultOrder: MusicState["order"]): MusicState {
  try {
    const value = JSON.parse(localStorage.getItem(MUSIC_KEY) ?? "null") as Partial<MusicState> | null;
    return {
      trackId: value?.trackId,
      volume: clamp(Number(value?.volume ?? defaultVolume), 0, 1),
      order: value?.order ?? defaultOrder,
      seek: Math.max(0, Number(value?.seek ?? 0)),
    };
  } catch {
    return { volume: defaultVolume, order: defaultOrder, seek: 0 };
  }
}

export function saveMusicState(state: MusicState): void {
  try {
    localStorage.setItem(MUSIC_KEY, JSON.stringify(state));
  } catch {
    // Ignore unavailable storage.
  }
}

export function loadLocale(): string | undefined {
  try {
    return localStorage.getItem(LOCALE_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

export function saveLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // Ignore unavailable storage.
  }
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export const COMPANION_POSITION_KEY = "takina-live2d-position-v1"; // gitleaks:allow -- Public localStorage preference name.

/** Forget a dragged companion position so she returns to her dock perch. */
export function clearCompanionPosition(): void {
  try {
    localStorage.removeItem(COMPANION_POSITION_KEY);
  } catch {
    // Without storage there is no saved position to clear.
  }
}
