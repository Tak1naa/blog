import { getLocale, listLocales, onLocaleChange, onLocalesChange, setLocale, translateDom } from "./i18n";
import { saveSettings } from "./storage";
import type { UserSettings } from "./types";

export class SettingsPanel {
  private readonly root = document.createElement("aside");
  private readonly disposers: Array<() => void> = [];

  constructor(
    private settings: UserSettings,
    private readonly onChange: (settings: UserSettings) => void,
  ) {
    this.root.className = "ff-settings";
    this.root.innerHTML = `
      <button class="ff-settings-trigger" type="button" data-i18n-attr="aria-label:settings.trigger" aria-expanded="false">✦</button>
      <div class="ff-settings-panel" hidden>
        <strong data-i18n="settings.title"></strong>
        <label><span data-i18n="settings.video"></span><input type="checkbox" data-setting="video"></label>
        <label><span data-i18n="settings.carousel"></span><input type="checkbox" data-setting="carousel"></label>
        <label><span data-i18n="settings.effects"></span><input type="checkbox" data-setting="effects"></label>
        <label><span data-i18n="settings.live2d"></span><input type="checkbox" data-setting="live2d"></label>
        <label><span data-i18n="settings.overlay"></span><input type="range" min="0" max="85" data-setting="overlayOpacity"></label>
        <label class="ff-settings-locale" hidden><span data-i18n="settings.language"></span><select data-locale></select></label>
        <div class="ff-settings-mode">
          <button type="button" data-mode="wallpaper" data-i18n="settings.mode.wallpaper"></button>
          <button type="button" data-mode="video" data-i18n="settings.mode.video"></button>
        </div>
      </div>`;
    translateDom(this.root);
    this.renderLocales();
    document.body.append(this.root);
    this.sync();
    this.bind();
    this.disposers.push(
      onLocaleChange(() => {
        translateDom(this.root);
        this.renderLocales();
      }),
      onLocalesChange(() => this.renderLocales()),
    );
  }

  destroy(): void {
    this.disposers.forEach((dispose) => dispose());
    this.root.remove();
  }

  /** External controls (the dock) change settings through the same commit path. */
  patch(changes: Partial<Omit<UserSettings, "schema">>): void {
    this.settings = { ...this.settings, ...changes };
    this.commit();
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
    const locale = this.root.querySelector<HTMLSelectElement>("[data-locale]");
    locale?.addEventListener("change", () => {
      void setLocale(locale.value).then((ok) => {
        if (!ok) locale.value = getLocale();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        this.settings.backgroundMode = button.dataset.mode === "video" ? "video" : "wallpaper";
        this.commit();
      });
    });
  }

  /** One option per registered locale; the row stays hidden until there is a choice. */
  private renderLocales(): void {
    const row = this.root.querySelector<HTMLElement>(".ff-settings-locale");
    const select = row?.querySelector<HTMLSelectElement>("select");
    if (!row || !select) return;
    const locales = listLocales();
    row.hidden = locales.length < 2;
    select.replaceChildren(...locales.map(({ code, label }) => {
      const option = document.createElement("option");
      option.value = code;
      option.lang = code;
      option.textContent = label === code ? code : `${label} (${code})`;
      return option;
    }));
    select.value = getLocale();
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
