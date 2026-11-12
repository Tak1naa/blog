import { saveSettings } from "./storage";
import type { UserSettings } from "./types";

export class SettingsPanel {
  private readonly root = document.createElement("aside");

  constructor(
    private settings: UserSettings,
    private readonly onChange: (settings: UserSettings) => void,
  ) {
    this.root.className = "ff-settings";
    this.root.innerHTML = `
      <button class="ff-settings-trigger" type="button" aria-label="动态体验设置" aria-expanded="false">✦</button>
      <div class="ff-settings-panel" hidden>
        <strong>动态体验</strong>
        <label><span>背景视频</span><input type="checkbox" data-setting="video"></label>
        <label><span>壁纸轮播</span><input type="checkbox" data-setting="carousel"></label>
        <label><span>装饰动效</span><input type="checkbox" data-setting="effects"></label>
        <label><span>看板娘（默认关闭）</span><input type="checkbox" data-setting="live2d"></label>
        <label><span>背景遮罩</span><input type="range" min="0" max="85" data-setting="overlayOpacity"></label>
        <div class="ff-settings-mode">
          <button type="button" data-mode="wallpaper">壁纸</button>
          <button type="button" data-mode="video">视频</button>
        </div>
      </div>`;
    document.body.append(this.root);
    this.sync();
    this.bind();
  }

  destroy(): void {
    this.root.remove();
  }

  setVideoFallback(): void {
    this.settings = { ...this.settings, backgroundMode: "wallpaper" };
    this.commit();
  }

  private bind(): void {
    const trigger = this.root.querySelector<HTMLButtonElement>(".ff-settings-trigger");
    const panel = this.root.querySelector<HTMLElement>(".ff-settings-panel");
    trigger?.addEventListener("click", () => {
      if (!panel) return;
      panel.hidden = !panel.hidden;
      trigger.setAttribute("aria-expanded", String(!panel.hidden));
    });
    this.root.querySelectorAll<HTMLInputElement>("[data-setting]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.setting;
        if (key === "overlayOpacity") this.settings.overlayOpacity = Number(input.value) / 100;
        else if (key === "video") this.settings.video = input.checked;
        else if (key === "carousel") this.settings.carousel = input.checked;
        else if (key === "effects") this.settings.effects = input.checked;
        else if (key === "live2d") this.settings.live2d = input.checked;
        this.commit();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        this.settings.backgroundMode = button.dataset.mode === "video" ? "video" : "wallpaper";
        this.commit();
      });
    });
  }

  private commit(): void {
    saveSettings(this.settings);
    this.sync();
    this.onChange({ ...this.settings });
  }

  private sync(): void {
    for (const key of ["video", "carousel", "effects", "live2d"] as const) {
      const input = this.root.querySelector<HTMLInputElement>(`[data-setting=${key}]`);
      if (input) input.checked = this.settings[key];
    }
    const overlay = this.root.querySelector<HTMLInputElement>("[data-setting=overlayOpacity]");
    if (overlay) overlay.value = String(Math.round(this.settings.overlayOpacity * 100));
    this.root.querySelectorAll<HTMLElement>("[data-mode]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.mode === this.settings.backgroundMode);
    });
  }
}
