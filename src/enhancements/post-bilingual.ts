import { getLocale, onLocaleChange, setLocale } from "./i18n";

/**
 * Manages in-article bilingual sections (`[data-post-lang]`) and their header
 * switcher links (`[data-switch-lang]`), keeping the active post language in
 * sync with the site-wide i18n state and URL hash.
 */
export class PostBilingualManager {
  private readonly unsubscribeLocale: () => void;

  constructor() {
    document.addEventListener("click", this.onClick);
    this.unsubscribeLocale = onLocaleChange((locale) => {
      this.sync(this.normalizeLang(locale));
    });
    this.refresh();
  }

  refresh(): void {
    const hashLang = this.langFromHash();
    const target = hashLang ?? this.normalizeLang(getLocale());
    this.sync(target);
  }

  destroy(): void {
    document.removeEventListener("click", this.onClick);
    this.unsubscribeLocale();
  }

  private readonly onClick = (event: MouseEvent): void => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("[data-switch-lang]");
    if (!link) return;
    const lang = link.dataset.switchLang;
    if (!lang) return;
    event.preventDefault();
    const normalized = this.normalizeLang(lang);
    this.sync(normalized);
    if (history.replaceState) {
      history.replaceState(null, "", `#${normalized}`);
    }
    void setLocale(normalized);
  };

  private langFromHash(): string | undefined {
    const raw = window.location.hash.replace(/^#/, "").trim();
    if (!raw) return undefined;
    const normalized = this.normalizeLang(raw);
    return document.querySelector(`[data-post-lang="${normalized}"]`) ? normalized : undefined;
  }

  private normalizeLang(lang: string): string {
    const lower = lang.toLowerCase();
    if (lower.startsWith("zh")) return "zh-CN";
    return "en";
  }

  private sync(activeLang: string): void {
    const blocks = [...document.querySelectorAll<HTMLElement>("[data-post-lang]")];
    if (blocks.length === 0) return;

    const available = new Set(blocks.map((el) => el.dataset.postLang));
    const chosen = available.has(activeLang) ? activeLang : (blocks[0]?.dataset.postLang ?? "en");

    for (const block of blocks) {
      const match = block.dataset.postLang === chosen;
      block.hidden = !match;
    }

    document.querySelectorAll<HTMLAnchorElement>("[data-switch-lang]").forEach((link) => {
      const match = this.normalizeLang(link.dataset.switchLang ?? "") === chosen;
      link.classList.toggle("is-active", match);
      link.setAttribute("aria-current", match ? "true" : "false");
    });
  }
}
