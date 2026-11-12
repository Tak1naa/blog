import { Howl, Howler } from "howler";
import { lyricAt, parseLrc, type LyricLine } from "./lrc";
import { loadMusicState, saveMusicState, type MusicState } from "./storage";
import type { ExperienceConfig, PlaybackOrder, Track } from "./types";

interface PlaylistResponse {
  tracks: Track[];
  stale?: boolean;
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
  private readonly onResize = () => this.alignToSidebar();

  constructor(private readonly config: ExperienceConfig["music"]) {
    this.state = loadMusicState(config.initialVolume, config.order);
    Howler.volume(this.state.volume);
    this.root.id = "ff-music-player";
    this.root.className = "ff-music-player";
    this.root.setAttribute("aria-label", "音乐播放器");
    this.root.innerHTML = `
      <button class="ff-music-cover" type="button" data-action="expand" aria-label="展开播放列表">
        <img alt="当前歌曲封面" src="/media/takina/avatar.png">
      </button>
      <div class="ff-music-main">
        <div class="ff-music-meta"><strong>音乐播放器</strong><span>点击播放</span></div>
        <div class="ff-music-lyric" aria-live="polite">准备就绪</div>
        <input class="ff-music-progress" type="range" min="0" max="1000" value="0" aria-label="播放进度">
        <div class="ff-music-controls">
          <button type="button" data-action="previous" aria-label="上一首">⏮</button>
          <button type="button" data-action="toggle" aria-label="播放">▶</button>
          <button type="button" data-action="next" aria-label="下一首">⏭</button>
          <button type="button" data-action="order" aria-label="切换播放模式">↻</button>
          <input class="ff-music-volume" type="range" min="0" max="100" aria-label="音量">
        </div>
      </div>
      <div class="ff-music-list" aria-label="播放列表"></div>`;
    document.body.append(this.root);
    this.alignToSidebar();
    window.addEventListener("resize", this.onResize);
    this.bind();
    void this.loadPlaylist();
  }

  destroy(): void {
    window.removeEventListener("resize", this.onResize);
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.sound?.unload();
    this.root.remove();
  }

  alignToSidebar(): void {
    const card = window.innerWidth > 1200
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

  private toggle(): void {
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
    this.setButton("⏸", "暂停");
    if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
    this.tick();
  }

  private onPause(): void {
    this.root.classList.remove("is-playing");
    this.setButton("▶", "播放");
    if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
    this.persist();
  }

  private tick = (): void => {
    const seek = Number(this.sound?.seek() ?? 0);
    const duration = this.sound?.duration() ?? 0;
    const progress = this.root.querySelector<HTMLInputElement>(".ff-music-progress");
    if (progress && duration > 0) progress.value = String(Math.round((seek / duration) * 1000));
    const lineIndex = lyricAt(this.lyrics, seek);
    const lyric = this.root.querySelector<HTMLElement>(".ff-music-lyric");
    if (lyric) lyric.textContent = this.lyrics[lineIndex]?.text ?? (this.lyrics.length ? "♪" : "暂无歌词");
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
    const button = this.root.querySelector<HTMLElement>("[data-action=order]");
    if (button) button.title = `播放模式：${this.state.order}`;
    this.persist();
  }

  private renderTrack(): void {
    const track = this.tracks[this.currentIndex];
    if (!track) return;
    const title = this.root.querySelector(".ff-music-meta strong");
    const artist = this.root.querySelector(".ff-music-meta span");
    const cover = this.root.querySelector<HTMLImageElement>(".ff-music-cover img");
    if (title) title.textContent = track.title;
    if (artist) artist.textContent = track.artists.join(" / ");
    if (cover) cover.src = track.cover ?? "/media/takina/avatar.png";
    this.state.trackId = track.id;
    this.persist();
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

  private setButton(text: string, label: string): void {
    const button = this.root.querySelector<HTMLButtonElement>("[data-action=toggle]");
    if (!button) return;
    button.textContent = text;
    button.setAttribute("aria-label", label);
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
