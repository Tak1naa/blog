import { Howl, Howler } from "howler";
import { onLocaleChange, t, translateDom } from "./i18n";
import { lyricAt, parseLrc, type LyricLine } from "./lrc";
import { loadMusicState, saveMusicState, type MusicState } from "./storage";
import type { ExperienceConfig, PlaybackOrder, Track } from "./types";

interface PlaylistResponse {
  tracks: Track[];
  stale?: boolean;
}

export interface MusicSnapshot {
  title: string;
  artists: string;
  playing: boolean;
  open: boolean;
}

export class MusicPlayer {
  private readonly root = document.createElement("section");
  private tracks: Track[] = [];
  private currentIndex = 0;
  private sound?: Howl;
  private state: MusicState;
  private lyrics: LyricLine[] = [];
  private frame?: number;
  private expanded = false;
  private docked = false;
  private open = false;
  private readonly listeners = new Set<(snapshot: MusicSnapshot) => void>();
  private readonly onResize = () => this.alignToSidebar();
  private readonly unsubscribeLocale: () => void;

  constructor(private readonly config: ExperienceConfig["music"]) {
    this.state = loadMusicState(config.initialVolume, config.order);
    Howler.volume(this.state.volume);
    this.root.id = "ff-music-player";
    this.root.className = "ff-music-player";
    this.root.dataset.i18nAttr = "aria-label:music.title";
    // Elements marked data-i18n hold placeholder copy until a track replaces it.
    this.root.innerHTML = `
      <button class="ff-music-cover" type="button" data-action="expand" data-i18n-attr="aria-label:music.togglePlaylist">
        <img data-i18n-attr="alt:music.coverAlt" src="/media/takina/avatar.png">
      </button>
      <div class="ff-music-main">
        <div class="ff-music-meta"><strong data-i18n="music.title"></strong><span data-i18n="music.hint"></span></div>
        <div class="ff-music-lyric" aria-live="polite" data-i18n="music.ready"></div>
        <input class="ff-music-progress" type="range" min="0" max="1000" value="0" data-i18n-attr="aria-label:music.progress">
        <div class="ff-music-controls">
          <button type="button" data-action="previous" data-i18n-attr="aria-label:music.previous">⏮</button>
          <button type="button" data-action="toggle">▶</button>
          <button type="button" data-action="next" data-i18n-attr="aria-label:music.next">⏭</button>
          <button type="button" data-action="order" data-i18n-attr="aria-label:music.order.toggle">↻</button>
          <input class="ff-music-volume" type="range" min="0" max="100" data-i18n-attr="aria-label:music.volume">
        </div>
      </div>
      <div class="ff-music-list" data-i18n-attr="aria-label:music.playlist"></div>`;
    this.renderLocale();
    this.unsubscribeLocale = onLocaleChange(() => this.renderLocale());
    document.body.append(this.root);
    this.alignToSidebar();
    window.addEventListener("resize", this.onResize);
    this.bind();
    void this.loadPlaylist();
  }

  destroy(): void {
    window.removeEventListener("resize", this.onResize);
    this.unsubscribeLocale();
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.sound?.unload();
    this.listeners.clear();
    this.root.remove();
  }

  /** Listeners receive the current snapshot immediately, then every change. */
  subscribe(listener: (snapshot: MusicSnapshot) => void): () => void {
    this.listeners.add(listener);
    listener(this.snapshot());
    return () => this.listeners.delete(listener);
  }

  /** A docked player is a popover of the dock, hidden until opened. */
  setDocked(docked: boolean): void {
    this.docked = docked;
    this.root.classList.toggle("is-docked", docked);
    if (!docked) this.setOpen(false);
    this.alignToSidebar();
  }

  setOpen(open: boolean): void {
    this.open = open && this.docked;
    this.root.classList.toggle("is-open", this.open);
    this.emit();
  }

  isOpen(): boolean {
    return this.open;
  }

  alignToSidebar(): void {
    const card = !this.docked && window.innerWidth > 1200
      ? document.querySelector<HTMLElement>("#aside-content .card-widget")
      : null;
    const rect = card?.getBoundingClientRect();
    if (!rect?.width) {
      this.root.style.removeProperty("left");
      this.root.style.removeProperty("width");
      return;
    }
    this.root.style.left = `${Math.round(rect.left)}px`;
    this.root.style.width = `${Math.round(rect.width)}px`;
  }

  private async loadPlaylist(): Promise<void> {
    this.tracks = [...this.config.localTracks];
    try {
      if (this.config.apiBase) {
        const response = await fetch(`${this.config.apiBase}/playlist`, {
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(6000),
        });
        if (response.ok) {
          const remote = (await response.json()) as PlaylistResponse;
          const ids = new Set(this.tracks.map((track) => `${track.source}:${track.id}`));
          for (const track of remote.tracks ?? []) {
            const key = `${track.source}:${track.id}`;
            if (!ids.has(key)) this.tracks.push(track);
          }
        }
      }
    } catch {
      // Local tracks are the intentional offline fallback.
    }
    const restored = this.tracks.findIndex((track) => track.id === this.state.trackId);
    this.currentIndex = restored >= 0 ? restored : 0;
    this.renderTrack();
    this.renderList();
  }

  private bind(): void {
    this.root.addEventListener("click", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-action]");
      if (!target) return;
      const action = target.dataset.action;
      if (action === "toggle") this.toggle();
      if (action === "previous") this.previous();
      if (action === "next") this.next(false);
      if (action === "order") this.cycleOrder();
      if (action === "expand") this.setExpanded(!this.expanded);
      if (action === "select") this.select(Number(target.dataset.index));
    });
    this.root.querySelector<HTMLInputElement>(".ff-music-volume")?.addEventListener("input", (event) => {
      this.state.volume = Number((event.target as HTMLInputElement).value) / 100;
      Howler.volume(this.state.volume);
      this.persist();
    });
    this.root.querySelector<HTMLInputElement>(".ff-music-progress")?.addEventListener("change", (event) => {
      const duration = this.sound?.duration() ?? 0;
      if (duration > 0) this.sound?.seek((Number((event.target as HTMLInputElement).value) / 1000) * duration);
    });
    const volume = this.root.querySelector<HTMLInputElement>(".ff-music-volume");
    if (volume) volume.value = String(Math.round(this.state.volume * 100));
    this.installMediaSession();
  }

  toggle(): void {
    if (!this.tracks.length) return;
    if (!this.sound) {
      void this.loadCurrent(true);
      return;
    }
    if (this.sound.playing()) this.sound.pause();
    else this.sound.play();
  }

  private async loadCurrent(autoplay: boolean): Promise<void> {
    const track = this.tracks[this.currentIndex];
    if (!track) return;
    this.sound?.unload();
    const src = track.source === "local"
      ? track.url
      : `${this.config.apiBase}/tracks/${encodeURIComponent(track.neteaseId)}/stream`;
    this.sound = new Howl({
      src: [src],
      html5: true,
      volume: this.state.volume,
      onplay: () => this.onPlay(),
      onpause: () => this.onPause(),
      onstop: () => this.onPause(),
      onend: () => this.next(true),
      onloaderror: () => this.skipUnavailable(),
      onplayerror: () => this.onPause(),
    });
    await this.loadLyrics(track);
    this.renderTrack();
    this.updateMediaMetadata(track);
    if (autoplay) this.sound.play();
  }

  private async loadLyrics(track: Track): Promise<void> {
    const url = track.source === "local" ? track.lyric : `${this.config.apiBase}/tracks/${track.neteaseId}/lyric`;
    if (!url) {
      this.lyrics = [];
      return;
    }
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
      const value = response.headers.get("content-type")?.includes("json")
        ? ((await response.json()) as { lyric?: string }).lyric ?? ""
        : await response.text();
      this.lyrics = parseLrc(value);
    } catch {
      this.lyrics = [];
    }
  }

  private onPlay(): void {
    this.root.classList.add("is-playing");
    this.renderToggle(true);
    if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
    this.emit();
    this.tick();
  }

  private onPause(): void {
    this.root.classList.remove("is-playing");
    this.renderToggle(false);
    if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
    this.persist();
    this.emit();
  }

  private tick = (): void => {
    const seek = Number(this.sound?.seek() ?? 0);
    const duration = this.sound?.duration() ?? 0;
    const progress = this.root.querySelector<HTMLInputElement>(".ff-music-progress");
    if (progress && duration > 0) progress.value = String(Math.round((seek / duration) * 1000));
    this.renderLyric(seek);
    if (this.sound?.playing()) this.frame = requestAnimationFrame(this.tick);
  };

  private previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    void this.loadCurrent(true);
  }

  private next(fromEnded: boolean): void {
    if (!this.tracks.length) return;
    if (fromEnded && this.state.order === "single") return void this.loadCurrent(true);
    const next = nextTrackIndex(this.currentIndex, this.tracks.length, this.state.order, fromEnded);
    if (next === -1) return this.onPause();
    this.currentIndex = next;
    void this.loadCurrent(true);
  }

  private select(index: number): void {
    if (!Number.isInteger(index) || index < 0 || index >= this.tracks.length) return;
    this.currentIndex = index;
    void this.loadCurrent(true);
  }

  private skipUnavailable(): void {
    if (this.tracks.length <= 1) return this.onPause();
    this.next(false);
  }

  private cycleOrder(): void {
    const orders: PlaybackOrder[] = ["list", "loop", "single", "random"];
    const current = orders.indexOf(this.state.order);
    this.state.order = orders[(current + 1) % orders.length] ?? "loop";
    this.renderOrder();
    this.persist();
  }

  private renderTrack(): void {
    const track = this.tracks[this.currentIndex];
    if (!track) return;
    const title = this.root.querySelector<HTMLElement>(".ff-music-meta strong");
    const artist = this.root.querySelector<HTMLElement>(".ff-music-meta span");
    const cover = this.root.querySelector<HTMLImageElement>(".ff-music-cover img");
    if (title) {
      delete title.dataset.i18n;
      title.textContent = track.title;
    }
    if (artist) {
      delete artist.dataset.i18n;
      artist.textContent = track.artists.join(" / ");
    }
    if (cover) cover.src = track.cover ?? "/media/takina/avatar.png";
    this.state.trackId = track.id;
    this.persist();
    this.emit();
  }

  private renderList(): void {
    const list = this.root.querySelector<HTMLElement>(".ff-music-list");
    if (!list) return;
    list.replaceChildren();
    this.tracks.forEach((track, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.action = "select";
      button.dataset.index = String(index);
      button.textContent = `${track.title} · ${track.artists.join(" / ")}`;
      list.append(button);
    });
  }

  private setExpanded(expanded: boolean): void {
    this.expanded = expanded;
    this.root.classList.toggle("is-expanded", expanded);
  }

  private renderLocale(): void {
    translateDom(this.root);
    this.renderToggle();
    this.renderOrder();
    if (this.sound) this.renderLyric(Number(this.sound.seek() ?? 0));
    this.emit();
  }

  private renderToggle(playing = this.sound?.playing() ?? false): void {
    const button = this.root.querySelector<HTMLButtonElement>("[data-action=toggle]");
    if (!button) return;
    button.textContent = playing ? "⏸" : "▶";
    button.setAttribute("aria-label", t(playing ? "media.pause" : "media.play"));
  }

  private renderOrder(): void {
    const button = this.root.querySelector<HTMLElement>("[data-action=order]");
    const mode = t(`music.order.${this.state.order}` as const);
    if (button) button.title = t("music.order.current", { mode });
  }

  private renderLyric(seek: number): void {
    const lyric = this.root.querySelector<HTMLElement>(".ff-music-lyric");
    if (!lyric) return;
    delete lyric.dataset.i18n;
    const line = this.lyrics[lyricAt(this.lyrics, seek)]?.text;
    lyric.textContent = line ?? (this.lyrics.length ? "♪" : t("music.instrumental"));
  }

  private snapshot(): MusicSnapshot {
    const track = this.tracks[this.currentIndex];
    return {
      title: track?.title ?? t("music.title"),
      artists: track?.artists.join(" / ") ?? "",
      playing: this.sound?.playing() ?? false,
      open: this.open,
    };
  }

  private emit(): void {
    const snapshot = this.snapshot();
    this.listeners.forEach((listener) => listener(snapshot));
  }

  private persist(): void {
    saveMusicState({ ...this.state, seek: Number(this.sound?.seek() ?? 0) });
  }

  private installMediaSession(): void {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.setActionHandler("play", () => this.toggle());
    navigator.mediaSession.setActionHandler("pause", () => this.toggle());
    navigator.mediaSession.setActionHandler("previoustrack", () => this.previous());
    navigator.mediaSession.setActionHandler("nexttrack", () => this.next(false));
  }

  private updateMediaMetadata(track: Track): void {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artists.join(" / "),
      album: track.source === "netease" ? track.album : "Takina Ying",
      artwork: track.cover ? [{ src: track.cover }] : undefined,
    });
  }
}

export function nextTrackIndex(
  current: number,
  total: number,
  order: PlaybackOrder,
  fromEnded: boolean,
  random = Math.random,
): number {
  if (total <= 0) return -1;
  if (order === "single" && fromEnded) return current;
  if (order === "random") return Math.floor(random() * total);
  if (current + 1 < total) return current + 1;
  if (order === "list" && fromEnded) return -1;
  return 0;
}
