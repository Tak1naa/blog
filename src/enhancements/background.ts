import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import type { ExperienceConfig, UserSettings, BackgroundMode } from "./types";

export class MediaBackgroundManager {
  private readonly root = document.createElement("div");
  private readonly viewport = document.createElement("div");
  private readonly container = document.createElement("div");
  private readonly overlay = document.createElement("div");
  private embla?: EmblaCarouselType;
  private autoplay?: ReturnType<typeof Autoplay>;
  private video?: HTMLVideoElement;
  private hls?: { destroy(): void };
  private loadTimer?: number;
  private mode: BackgroundMode;
  private settings: UserSettings;
  private readonly isMobile: boolean;
  private readonly reducedMotion: boolean;
  private readonly onVisibility = () => this.handleVisibility();

  constructor(
    private readonly config: ExperienceConfig,
    settings: UserSettings,
    private readonly onFallback: () => void,
  ) {
    this.settings = settings;
    this.mode = settings.backgroundMode;
    this.isMobile = matchMedia(`(max-width: ${config.mobile.breakpoint - 1}px)`).matches;
    this.reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.root.id = "ff-media-background";
    this.root.setAttribute("aria-hidden", "true");
    this.viewport.className = "ff-wallpaper-viewport";
    this.container.className = "ff-wallpaper-container";
    this.overlay.className = "ff-background-overlay";
    this.overlay.style.setProperty("--ff-overlay", String(settings.overlayOpacity));
    this.viewport.append(this.container);
    this.root.append(this.viewport, this.overlay);
    document.body.prepend(this.root);
    this.createSlides();
    document.addEventListener("visibilitychange", this.onVisibility);
    this.applyMode(this.allowedMode(this.mode));
  }

  updateSettings(settings: UserSettings): void {
    const carouselChanged = settings.carousel !== this.settings.carousel;
    this.settings = settings;
    this.overlay.style.setProperty("--ff-overlay", String(settings.overlayOpacity));
    if (carouselChanged) {
      this.embla?.destroy();
      this.container.replaceChildren();
      this.createSlides();
    }
    this.applyMode(this.allowedMode(settings.backgroundMode));
  }

  getMode(): BackgroundMode {
    return this.mode;
  }

  destroy(): void {
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.destroyVideo();
    this.embla?.destroy();
    this.root.remove();
  }

  private allowedMode(requested: BackgroundMode): BackgroundMode {
    return resolveBackgroundMode(requested, {
      enabled: this.config.background.video.enabled,
      userEnabled: this.settings.video,
      mobileBlocked: this.isMobile && !this.config.mobile.video,
      reducedMotion: this.reducedMotion,
    });
  }

  private createSlides(): void {
    const staticOnly = this.reducedMotion || (this.isMobile && !this.config.mobile.carousel);
    const wallpapers = staticOnly ? this.config.background.wallpapers.slice(0, 1) : this.config.background.wallpapers;
    for (const wallpaper of wallpapers) {
      const slide = document.createElement("div");
      slide.className = "ff-wallpaper-slide";
      const image = document.createElement("img");
      image.src = wallpaper.src;
      image.alt = wallpaper.alt;
      image.decoding = "async";
      image.addEventListener("error", () => slide.classList.add("is-failed"), { once: true });
      slide.append(image);
      this.container.append(slide);
    }
    const allowAutoplay =
      this.settings.carousel &&
      !this.reducedMotion &&
      (!this.isMobile || this.config.mobile.carousel);
    const plugins = [Fade()];
    if (allowAutoplay) {
      this.autoplay = Autoplay({ delay: this.config.background.intervalMs, stopOnInteraction: false });
      plugins.push(this.autoplay);
    } else {
      this.autoplay = undefined;
    }
    this.embla = EmblaCarousel(this.viewport, { loop: true }, plugins);
  }

  private applyMode(mode: BackgroundMode): void {
    this.mode = mode;
    this.root.dataset.mode = mode;
    if (mode === "video") this.createVideo();
    else this.destroyVideo();
  }

  private createVideo(): void {
    if (this.video) return;
    const video = document.createElement("video");
    video.className = "ff-background-video";
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = this.config.background.video.poster;
    const hlsSource = this.config.background.video.sources.find((source) =>
      source.src.toLowerCase().includes(".m3u8"),
    );
    if (hlsSource) void this.attachHls(video, hlsSource.src);
    else {
      for (const sourceConfig of this.config.background.video.sources) {
        const source = document.createElement("source");
        source.src = sourceConfig.src;
        source.type = sourceConfig.type;
        video.append(source);
      }
    }
    video.addEventListener("playing", () => this.clearTimer(), { once: true });
    video.addEventListener("error", () => this.fallbackToWallpaper(), { once: true });
    this.loadTimer = window.setTimeout(
      () => this.fallbackToWallpaper(),
      this.config.background.video.timeoutMs,
    );
    this.root.insertBefore(video, this.overlay);
    this.video = video;
    void video.play().catch(() => this.fallbackToWallpaper());
  }

  private async attachHls(video: HTMLVideoElement, source: string): Promise<void> {
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      return;
    }
    const { default: Hls } = await import("hls.js");
    if (!Hls.isSupported() || this.video !== video) return this.fallbackToWallpaper();
    const hls = new Hls({ enableWorker: true });
    hls.loadSource(source);
    hls.attachMedia(video);
    hls.on(Hls.Events.ERROR, (_event, data) => {
      if (data.fatal) this.fallbackToWallpaper();
    });
    this.hls = hls;
  }

  private fallbackToWallpaper(): void {
    this.applyMode("wallpaper");
    this.onFallback();
  }

  private destroyVideo(): void {
    this.clearTimer();
    this.hls?.destroy();
    this.hls = undefined;
    if (this.video) {
      this.video.pause();
      this.video.removeAttribute("src");
      this.video.querySelectorAll("source").forEach((source) => source.remove());
      this.video.load();
      this.video.remove();
      this.video = undefined;
    }
  }

  private clearTimer(): void {
    if (this.loadTimer !== undefined) window.clearTimeout(this.loadTimer);
    this.loadTimer = undefined;
  }

  private handleVisibility(): void {
    if (document.hidden) this.autoplay?.stop();
    else this.autoplay?.play();
    if (!this.video) return;
    if (document.hidden) this.video.pause();
    else if (this.mode === "video") void this.video.play().catch(() => this.fallbackToWallpaper());
  }
}

export function resolveBackgroundMode(
  requested: BackgroundMode,
  options: { enabled: boolean; userEnabled: boolean; mobileBlocked: boolean; reducedMotion: boolean },
): BackgroundMode {
  return requested === "video" &&
    (!options.enabled || !options.userEnabled || options.mobileBlocked || options.reducedMotion)
    ? "wallpaper"
    : requested;
}
