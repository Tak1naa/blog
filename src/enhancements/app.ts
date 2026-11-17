import "./styles.css";
import { MediaBackgroundManager } from "./background";
import { BentoGrid } from "./bento";
import { Dock } from "./dock";
import { EffectsManager } from "./effects";
import { initI18n, onLocaleChange, t } from "./i18n";
import type { Live2DManager } from "./live2d";
import { MusicPlayer } from "./music";
import { clearCompanionPosition, loadSettings } from "./storage";
import { PostBilingualManager } from "./post-bilingual";
import { SettingsPanel } from "./settings";
import { refreshQuoteSources, showQuoteSource } from "./quotes";
import { ThemeTranslator } from "./theme-i18n";
import { VisitStats } from "./visit-stats";
import type { BlogExperience, ExperienceConfig, UserSettings } from "./types";

class ExperienceApp implements BlogExperience {
  private background: MediaBackgroundManager;
  private music?: MusicPlayer;
  private live2d?: Live2DManager;
  private live2dGeneration = 0;
  private effects?: EffectsManager;
  private settingsPanel: SettingsPanel;
  private dock: Dock;
  private bento: BentoGrid;
  private readonly themeI18n = new ThemeTranslator();
  private readonly postBilingual = new PostBilingualManager();
  private readonly visitStats = new VisitStats();
  private settings: UserSettings;
  private disposers: Array<() => void> = [];
  private readonly reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  private readonly isMobile: boolean;

  constructor(private readonly config: ExperienceConfig) {
    this.ensureHomeHero();
    this.isMobile = matchMedia(`(max-width: ${config.mobile.breakpoint - 1}px)`).matches;
    const defaults: UserSettings = {
      schema: 1,
      backgroundMode: config.background.defaultMode,
      carousel: true,
      video: config.background.video.enabled,
      overlayOpacity: config.background.overlayOpacity,
      effects: config.effects.enabled,
      live2d: config.live2d.defaultEnabled,
    };
    this.settings = loadSettings(defaults);
    this.background = new MediaBackgroundManager(config, this.settings, () =>
      this.settingsPanel?.setVideoFallback(),
    );
    if (config.music.enabled) this.music = new MusicPlayer(config.music);
    // Keep the panel's editable draft separate from the previous app snapshot.
    this.settingsPanel = new SettingsPanel({ ...this.settings }, (settings) => this.applySettings(settings));
    this.dock = new Dock({
      toggleBackground: () => this.toggleBackground(),
      toggleCompanion: () => this.toggleCompanion(),
    }, this.music);
    this.dock.onMove(() => this.live2d?.followPerch());
    this.bento = new BentoGrid(config.site.homePath, this.music);
    this.bento.refresh();
    this.syncDock();
    this.applyEffects();
    void this.applyLive2D();
    this.bindLifecycle();
    this.themeI18n.refresh();
    this.visitStats.refresh();
    this.disposers.push(onLocaleChange(() => {
      refreshQuoteSources();
      this.themeI18n.refresh();
    }));
  }

  refreshPage(): void {
    this.ensureHomeHero();
    this.bento.refresh();
    this.effects?.refreshPage();
    this.dock.refresh();
    // Also runs on solitude:afterNavigate, once the theme has rewritten greetings and dates.
    this.themeI18n.refresh();
    this.postBilingual.refresh();
    this.visitStats.refresh();
    requestAnimationFrame(() => this.music?.alignToSidebar());
  }

  private ensureHomeHero(): void {
    const homeTop = document.querySelector<HTMLElement>("#home_top");
    if (!homeTop || homeTop.querySelector(".ff-hero-copy")) return;
    const hero = document.createElement("div");
    hero.className = "ff-hero-copy";
    const title = document.createElement("strong");
    title.textContent = this.config.site.title;
    const subtitle = document.createElement("span");
    subtitle.className = "ff-quote-zh";
    subtitle.lang = "zh-CN";
    const original = document.createElement("span");
    original.className = "ff-quote-ja";
    original.lang = "ja";
    const quote = this.config.site.subtitle[0];
    if (!quote) return;
    subtitle.textContent = quote.text;
    original.textContent = quote.ja ?? "";
    const source = document.createElement("a");
    source.className = "ff-quote-source";
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    hero.append(title, original, subtitle, source);
    showQuoteSource(hero, quote);
    homeTop.prepend(hero);
  }

  destroy(): void {
    this.disposers.forEach((dispose) => dispose());
    this.bento.destroy();
    this.dock.destroy();
    this.background.destroy();
    this.music?.destroy();
    this.live2dGeneration++;
    this.live2d?.stop();
    this.effects?.stop();
    this.settingsPanel.destroy();
    this.themeI18n.destroy();
    this.postBilingual.destroy();
    this.visitStats.destroy();
    delete window.__fireflyEnhancements;
  }

  private applySettings(settings: UserSettings): void {
    const effectsChanged = settings.effects !== this.settings.effects;
    const live2dChanged = settings.live2d !== this.settings.live2d;
    this.settings = settings;
    this.background.updateSettings(settings);
    if (effectsChanged) {
      this.applyEffects();
    }
    if (effectsChanged || live2dChanged) {
      this.live2d?.stop();
      this.live2d = undefined;
      void this.applyLive2D();
    }
    this.syncDock();
  }

  private get videoAvailable(): boolean {
    return this.config.background.video.enabled &&
      !this.reducedMotion &&
      !(this.isMobile && !this.config.mobile.video);
  }

  private get companionAvailable(): boolean {
    return this.config.live2d.enabled && !this.reducedMotion && !(this.isMobile && !this.config.mobile.live2d);
  }

  private syncDock(): void {
    this.dock.sync({
      backgroundMode: this.background.getMode(),
      videoAvailable: this.videoAvailable,
      companion: this.settings.live2d && this.settings.effects,
      companionAvailable: this.companionAvailable,
    });
  }

  private toggleBackground(): void {
    if (this.background.getMode() === "video") this.settingsPanel.patch({ backgroundMode: "wallpaper" });
    else this.settingsPanel.patch({ backgroundMode: "video", video: true });
  }

  private toggleCompanion(): void {
    if (this.settings.live2d && this.settings.effects) {
      this.settingsPanel.patch({ live2d: false });
      return;
    }
    // Called from the dock, she comes back to her perch even if she was carried away.
    clearCompanionPosition();
    // The companion is part of the ambient effects layer, so calling her enables both.
    this.settingsPanel.patch({ live2d: true, effects: true });
  }

  private applyEffects(): void {
    this.effects?.stop();
    this.effects = undefined;
    if (!this.settings.effects || this.reducedMotion || this.isMobile) return;
    this.effects = new EffectsManager(this.config);
    this.effects.start();
  }

  private async applyLive2D(): Promise<void> {
    const generation = ++this.live2dGeneration;
    if (
      !this.settings.live2d ||
      !this.settings.effects ||
      !this.config.live2d.enabled ||
      this.reducedMotion ||
      (this.isMobile && !this.config.mobile.live2d)
    ) return;
    try {
      const { Live2DManager } = await import("./live2d");
      if (generation !== this.live2dGeneration) return;
      this.live2d = new Live2DManager(this.config.live2d, { perch: () => this.dock.anchor() });
      await this.live2d.start();
    } catch (error) {
      console.warn(t("live2d.unavailable"), error);
    }
  }

  private bindLifecycle(): void {
    const before = () => this.effects?.beforeNavigate();
    const after = () => this.refreshPage();
    document.addEventListener("solitude:beforeNavigate", before);
    document.addEventListener("solitude:afterNavigate", after);
    window.addEventListener("pjax:send", before);
    document.addEventListener("pjax:complete", after);
    this.disposers.push(
      () => document.removeEventListener("solitude:beforeNavigate", before),
      () => document.removeEventListener("solitude:afterNavigate", after),
      () => window.removeEventListener("pjax:send", before),
      () => document.removeEventListener("pjax:complete", after),
    );
  }
}

async function bootstrap(): Promise<void> {
  if (window.__fireflyEnhancements) return;
  try {
    const response = await fetch("/custom/config.json", {
      headers: { Accept: "application/json" },
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(`Configuration request failed: ${response.status}`);
    const config = (await response.json()) as ExperienceConfig;
    // Resolve the locale (and fetch its pack) first, so nothing renders in English and then flips.
    await initI18n(config.i18n);
    window.__fireflyEnhancements = new ExperienceApp(config);
    document.documentElement.classList.add("ff-enhancements-ready");
  } catch (error) {
    console.error(t("app.initFailed"), error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => void bootstrap(), { once: true });
} else {
  void bootstrap();
}
