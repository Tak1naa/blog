import "./styles.css";
import { MediaBackgroundManager } from "./background";
import { EffectsManager } from "./effects";
import type { Live2DManager } from "./live2d";
import { MusicPlayer } from "./music";
import { loadSettings } from "./storage";
import { SettingsPanel } from "./settings";
import { showQuoteSource } from "./quotes";
import type { BlogExperience, ExperienceConfig, UserSettings } from "./types";

class ExperienceApp implements BlogExperience {
  private background: MediaBackgroundManager;
  private music?: MusicPlayer;
  private live2d?: Live2DManager;
  private live2dGeneration = 0;
  private effects?: EffectsManager;
  private settingsPanel: SettingsPanel;
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
    this.applyEffects();
    void this.applyLive2D();
    this.bindLifecycle();
  }

  refreshPage(): void {
    this.ensureHomeHero();
    this.effects?.refreshPage();
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
    this.background.destroy();
    this.music?.destroy();
    this.live2dGeneration++;
    this.live2d?.stop();
    this.effects?.stop();
    this.settingsPanel.destroy();
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
      this.live2d = new Live2DManager(this.config.live2d);
      await this.live2d.start();
    } catch (error) {
      console.warn("看板娘暂不可用，其他功能不受影响。", error);
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
    if (!response.ok) throw new Error(`配置请求失败: ${response.status}`);
    const config = (await response.json()) as ExperienceConfig;
    window.__fireflyEnhancements = new ExperienceApp(config);
    document.documentElement.classList.add("ff-enhancements-ready");
  } catch (error) {
    console.error("动态体验初始化失败，站点将继续以基础模式运行。", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => void bootstrap(), { once: true });
} else {
  void bootstrap();
}
