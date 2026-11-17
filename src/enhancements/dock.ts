import { onLocaleChange, t, translateDom } from "./i18n";
import type { MusicPlayer, MusicSnapshot } from "./music";
import type { BackgroundMode } from "./types";

export interface DockState {
  backgroundMode: BackgroundMode;
  videoAvailable: boolean;
  companion: boolean;
  companionAvailable: boolean;
}

export interface DockActions {
  toggleBackground(): void;
  toggleCompanion(): void;
}

interface SolitudeTheme {
  switchDarkMode?: () => void;
}

const HIDE_AFTER = 160;
const HIDE_DELTA = 12;
const SHOW_DELTA = 6;

/**
 * One capsule for page-level controls: audio, atmosphere, back to top and the
 * companion. It is mounted once on body and survives PJAX swaps; refresh()
 * re-attaches it if a navigation ever replaced body content.
 */
export class Dock {
  private readonly root = document.createElement("nav");
  private readonly moveListeners = new Set<() => void>();
  private readonly reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  private readonly themeObserver: MutationObserver;
  private unsubscribeMusic?: () => void;
  private readonly unsubscribeLocale: () => void;
  private state?: DockState;
  private snapshot?: MusicSnapshot;
  private hidden = false;
  private lastScrollY = window.scrollY;
  private travel = 0;
  private scrollFrame?: number;

  constructor(
    private readonly actions: DockActions,
    private readonly music?: MusicPlayer,
  ) {
    this.root.className = "ff-dock";
    this.root.dataset.i18nAttr = "aria-label:dock.label";
    this.root.innerHTML = `
      <div class="ff-dock-slot ff-dock-audio" data-slot="audio">
        <button type="button" data-dock="play" data-i18n-attr="aria-label:media.play">▶</button>
        <div class="ff-dock-marquee"><span></span></div>
        <button type="button" data-dock="expand" data-i18n-attr="aria-label:media.openPlayer"
          aria-controls="ff-music-player" aria-expanded="false">⌃</button>
      </div>
      <div class="ff-dock-slot" data-slot="atmosphere">
        <button type="button" data-dock="background" data-i18n-attr="aria-label:dock.background.label" aria-pressed="false">◉</button>
        <button type="button" data-dock="theme" data-i18n-attr="aria-label:dock.theme.label" aria-pressed="false">☾</button>
      </div>
      <div class="ff-dock-slot" data-slot="top">
        <button type="button" data-dock="top" data-i18n-attr="aria-label:dock.top">↑</button>
      </div>
      <div class="ff-dock-slot" data-slot="companion">
        <button type="button" data-dock="companion" data-i18n-attr="aria-label:dock.companion.label" aria-pressed="false">
          <img alt="" src="/media/takina/avatar.png" width="28" height="28">
        </button>
      </div>`;
    if (!music) this.root.querySelector("[data-slot=audio]")?.remove();
    document.body.append(this.root);

    this.root.addEventListener("click", this.onClick);
    this.root.addEventListener("transitionend", this.onTransitionEnd);
    document.addEventListener("keydown", this.onKeydown);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.notifyMove, { passive: true });
    this.themeObserver = new MutationObserver(() => this.syncTheme());
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    translateDom(this.root);
    this.syncTheme();
    this.unsubscribeLocale = onLocaleChange(() => this.renderLocale());

    if (music) {
      music.setDocked(true);
      this.unsubscribeMusic = music.subscribe((snapshot) => {
        this.snapshot = snapshot;
        this.renderMusic();
      });
    }
  }

  /** The capsule's live box (including the hide transform) for anything perched on it. */
  anchor(): DOMRect | null {
    return this.root.isConnected ? this.root.getBoundingClientRect() : null;
  }

  onMove(listener: () => void): () => void {
    this.moveListeners.add(listener);
    return () => this.moveListeners.delete(listener);
  }

  sync(state: DockState): void {
    this.state = state;
    const background = this.button("background");
    if (background) {
      const video = state.backgroundMode === "video";
      background.disabled = !state.videoAvailable;
      background.textContent = video ? "◉" : "▦";
      background.setAttribute("aria-pressed", String(video));
      background.title = t(state.videoAvailable
        ? (video ? "dock.background.video" : "dock.background.wallpaper")
        : "dock.background.unavailable");
    }
    const companion = this.button("companion");
    if (companion) {
      companion.closest<HTMLElement>(".ff-dock-slot")!.hidden = !state.companionAvailable;
      companion.setAttribute("aria-pressed", String(state.companion));
      companion.title = t(state.companion ? "dock.companion.dismiss" : "dock.companion.call");
    }
    this.root.classList.toggle("has-companion", state.companionAvailable && state.companion);
    this.notifyMove();
  }

  /** PJAX lifecycle hook: re-attach if needed and reveal the dock on the new page. */
  refresh(): void {
    if (!this.root.isConnected) document.body.append(this.root);
    this.lastScrollY = window.scrollY;
    this.travel = 0;
    this.setHidden(false);
    this.updateMarquee();
  }

  destroy(): void {
    this.root.removeEventListener("click", this.onClick);
    this.root.removeEventListener("transitionend", this.onTransitionEnd);
    document.removeEventListener("keydown", this.onKeydown);
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.notifyMove);
    if (this.scrollFrame !== undefined) cancelAnimationFrame(this.scrollFrame);
    this.themeObserver.disconnect();
    this.unsubscribeLocale();
    this.unsubscribeMusic?.();
    this.music?.setDocked(false);
    this.moveListeners.clear();
    this.root.remove();
  }

  private readonly onClick = (event: MouseEvent): void => {
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-dock]");
    if (!target || target.disabled) return;
    const action = target.dataset.dock;
    if (action === "play") this.music?.toggle();
    if (action === "expand") this.music?.setOpen(!this.music.isOpen());
    if (action === "background") this.actions.toggleBackground();
    if (action === "theme") this.toggleTheme();
    if (action === "top") this.toTop();
    if (action === "companion") this.actions.toggleCompanion();
  };

  private readonly onKeydown = (event: KeyboardEvent): void => {
    if (event.key !== "Escape" || !this.music?.isOpen()) return;
    this.music.setOpen(false);
    this.button("expand")?.focus();
  };

  private readonly onScroll = (): void => {
    if (this.scrollFrame !== undefined) return;
    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = undefined;
      const y = window.scrollY;
      const delta = y - this.lastScrollY;
      this.lastScrollY = y;
      // Accumulate travel in one direction so trackpad jitter cannot flicker the dock.
      this.travel = Math.sign(delta) === Math.sign(this.travel) ? this.travel + delta : delta;
      const pinned = this.root.matches(":focus-within") || this.music?.isOpen();
      if (y < HIDE_AFTER || pinned || this.travel < -SHOW_DELTA) this.setHidden(false);
      else if (this.travel > HIDE_DELTA) this.setHidden(true);
    });
  };

  private readonly onTransitionEnd = (event: TransitionEvent): void => {
    if (event.target === this.root) this.notifyMove();
  };

  private readonly notifyMove = (): void => {
    this.moveListeners.forEach((listener) => listener());
  };

  private setHidden(hidden: boolean): void {
    if (hidden === this.hidden) return;
    this.hidden = hidden;
    this.root.classList.toggle("is-hidden", hidden);
    this.notifyMove();
  }

  /** Re-apply every translated string; widths change, so the marquee is re-measured. */
  private renderLocale(): void {
    translateDom(this.root);
    this.syncTheme();
    if (this.state) this.sync(this.state);
    this.renderMusic();
    this.updateMarquee();
  }

  private renderMusic(): void {
    const snapshot = this.snapshot;
    if (!snapshot) return;
    const play = this.button("play");
    if (play) {
      play.textContent = snapshot.playing ? "⏸" : "▶";
      play.setAttribute("aria-label", t(snapshot.playing ? "media.pause" : "media.play"));
    }
    const expand = this.button("expand");
    if (expand) {
      expand.setAttribute("aria-expanded", String(snapshot.open));
      expand.setAttribute("aria-label", t(snapshot.open ? "media.closePlayer" : "media.openPlayer"));
    }
    const label = this.root.querySelector<HTMLElement>(".ff-dock-marquee span");
    const text = snapshot.artists ? `${snapshot.title} · ${snapshot.artists}` : snapshot.title;
    if (label && label.textContent !== text) {
      label.textContent = text;
      this.updateMarquee();
    }
    this.root.classList.toggle("is-playing", snapshot.playing);
    if (snapshot.open) this.setHidden(false);
  }

  /** Scroll the title only when it overflows, by exactly the overflow distance. */
  private updateMarquee(): void {
    const marquee = this.root.querySelector<HTMLElement>(".ff-dock-marquee");
    const label = marquee?.querySelector<HTMLElement>("span");
    if (!marquee || !label) return;
    const overflow = label.scrollWidth - marquee.clientWidth;
    marquee.classList.toggle("is-overflowing", overflow > 1);
    marquee.style.setProperty("--ff-marquee-distance", `${-Math.ceil(Math.max(0, overflow))}px`);
    marquee.style.setProperty("--ff-marquee-duration", `${Math.max(6, overflow / 18 + 4).toFixed(1)}s`);
  }

  private toggleTheme(): void {
    const solitude = (window as Window & { Solitude?: SolitudeTheme }).Solitude;
    if (solitude?.switchDarkMode) solitude.switchDarkMode();
    else {
      const html = document.documentElement;
      html.setAttribute("data-theme", html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }
  }

  private syncTheme(): void {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    const theme = this.button("theme");
    if (!theme) return;
    theme.textContent = dark ? "☾" : "☀";
    theme.setAttribute("aria-pressed", String(dark));
    theme.title = t(dark ? "dock.theme.toLight" : "dock.theme.toDark");
  }

  private toTop(): void {
    window.scrollTo({ top: 0, behavior: this.reducedMotion.matches ? "auto" : "smooth" });
  }

  private button(name: string): HTMLButtonElement | null {
    return this.root.querySelector<HTMLButtonElement>(`[data-dock=${name}]`);
  }
}
