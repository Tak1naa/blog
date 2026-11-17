import { en, t, translateDom, type TranslationKey, type TranslationParams } from "./i18n";

/**
 * Translates the static markup Hexo + Solitude render (navbar, category bar,
 * aside, post cards, footer). Nodes carry no i18n hooks, so each slot (label
 * text or a tooltip/alt attribute) is bound to a key by matching its English
 * text against the candidate keys of its region. The key is tagged on the
 * element (`data-theme-i18n-<slot>`), so later locale switches re-render from
 * the key instead of re-matching translated text. When the theme rewrites a
 * slot itself (PJAX refresh, a new greeting), it is matched again.
 */

type Slot = "text" | "title" | "heotip" | "alt";

interface ThemeBinding {
  selector: string;
  /** Child holding the label; otherwise the element's own text is used. */
  label?: string;
  /** Translate attributes only, e.g. buttons whose text is the site title. */
  attributesOnly?: boolean;
  keys: TranslationKey[];
}

const ATTRIBUTES: Slot[] = ["title", "heotip", "alt"];

const NAV_MENU: TranslationKey[] = [
  "nav.home", "nav.articles", "nav.archives", "nav.categories", "nav.tags",
  "nav.community", "nav.links", "nav.profile", "nav.music", "nav.about",
];
const TIME: TranslationKey[] = ["time.justNow", "time.minutesAgo", "time.hoursAgo", "time.daysAgo", "time.monthsAgo"];

// Selectors mirror public/index.html as rendered by hexo-theme-solitude 4.0.0.
export const THEME_BINDINGS: ThemeBinding[] = [
  {
    selector: "#nav .menus_items a.site-page, #sidebar-menus .menus_items a.site-page",
    label: ":scope > span",
    keys: NAV_MENU,
  },
  {
    selector: "#site-name, #page-name-text, #randomPost_button > a, #search-button > a, #nav-totop",
    attributesOnly: true,
    keys: ["nav.backHome", "nav.backToTop", "nav.randomPost", "nav.search"],
  },
  { selector: "#sidebar-menus .site-data .headline", keys: ["nav.archives", "nav.categories", "nav.tags"] },
  { selector: "#sidebar-menus > .sidebar-menu-item-title", keys: ["sidebar.function", "sidebar.tags"] },
  { selector: "#sidebar-menus .darkmode_switchbutton > span", keys: ["sidebar.displayMode"] },
  {
    selector: "#category-bar .category-bar-item > a, #category-bar .category-bar-more",
    label: ":scope > span:not(.category-bar-link-icon)",
    keys: [
      "categoryBar.featured", "categoryBar.featuredTip", "categoryBar.allPosts", "categoryBar.allPostsTip",
      "categoryBar.more", "categoryBar.moreTip", "categoryBar.categoryTip",
    ],
  },
  {
    selector: "#aside-content #sayhi",
    keys: [
      "aside.greeting.morning", "aside.greeting.noon", "aside.greeting.afternoon", "aside.greeting.night",
      "aside.greeting.goodnight", "aside.greeting.longTimeNoSee", "aside.greeting.welcomeBack",
    ],
  },
  { selector: "#aside-content .card-info .avatar img", attributesOnly: true, keys: ["aside.avatarAlt"] },
  { selector: "#aside-content .card-info .description", keys: ["aside.bioDescription"] },
  { selector: "#aside-content .card-info .bottom-group .desc", keys: ["aside.bioTagline"] },
  { selector: "#aside-content .card-recent-post .item-headline > span", keys: ["aside.recentPosts"] },
  { selector: "#aside-content .webinfo-item .item-name", keys: ["aside.postsCount", "aside.runtime", "aside.lastUpdate"] },
  { selector: "#aside-content #runtimeshow", keys: ["aside.daysUnit"] },
  { selector: "#aside-content .webinfo-item time, #recent-posts .post-meta-date time", keys: TIME },
  { selector: "#recent-posts .recent-post-info-top-tips > span.original", keys: ["post.new"] },
  { selector: "#recent-posts .recent-post-info-top-tips > .unvisited-post", keys: ["post.unread"] },
  { selector: "#st-footer .footer-title", keys: ["footer.navigation", "footer.resources"] },
  { selector: "#st-footer .footer-item", keys: ["footer.archives", "footer.tags", "footer.about", "footer.credits"] },
  { selector: "#footer_mini_logo, #footer_mini_logo img", attributesOnly: true, keys: ["nav.backToTop"] },
  { selector: "#footer-bar .copyright", keys: ["footer.copyright"] },
  { selector: "#footer-bar .beian-group > .footer-bar-link", keys: ["footer.framework", "footer.theme"] },
];

interface Match {
  key: TranslationKey;
  params?: TranslationParams;
}

/** Last value written per element and slot, to tell our writes from the theme's. */
const rendered = new WeakMap<Element, Map<Slot, string>>();
const patterns = new Map<TranslationKey, { regex: RegExp; names: string[] }>();

function normalize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function pattern(key: TranslationKey): { regex: RegExp; names: string[] } {
  let cached = patterns.get(key);
  if (!cached) {
    const names: string[] = [];
    const source = normalize(en[key]).split(/(\{\w+\})/).map((part) => {
      const name = /^\{(\w+)\}$/.exec(part)?.[1];
      if (!name) return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      names.push(name);
      return "(.+?)";
    }).join("");
    cached = { regex: new RegExp(`^${source}$`), names };
    patterns.set(key, cached);
  }
  return cached;
}

/** Match the theme's English output against candidate templates, extracting placeholders. */
export function matchEnglish(value: string, keys: readonly TranslationKey[]): Match | undefined {
  const text = normalize(value);
  if (!text) return undefined;
  for (const key of keys) {
    const { regex, names } = pattern(key);
    const found = regex.exec(text);
    if (!found) continue;
    if (!names.length) return { key };
    return { key, params: Object.fromEntries(names.map((name, index) => [name, found[index + 1]!])) };
  }
  return undefined;
}

/** A label element, or the first non-blank text node beside markup (`© 2026 By<a>`). */
function labelOf(element: Element, binding: ThemeBinding): Element | Text | undefined {
  if (binding.attributesOnly) return undefined;
  if (binding.label) {
    const label = element.querySelector(binding.label);
    if (label) return label;
  }
  if (!element.children.length) return element;
  return [...element.childNodes].find((node): node is Text =>
    node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()));
}

function read(element: Element, slot: Slot, label?: Element | Text): string | null {
  if (slot !== "text") return element.getAttribute(slot);
  return label?.textContent ?? null;
}

function write(element: Element, slot: Slot, value: string, label?: Element | Text): void {
  if (slot !== "text") element.setAttribute(slot, value);
  else if (label) label.textContent = value;
}

function tagName(slot: Slot): string {
  return `data-theme-i18n-${slot}`;
}

function translateSlot(element: Element, slot: Slot, keys: readonly TranslationKey[], label?: Element | Text): void {
  const raw = read(element, slot, label);
  if (raw === null) return;
  const current = normalize(raw);
  const last = rendered.get(element)?.get(slot);
  const tag = tagName(slot);
  let key = element.getAttribute(tag) as TranslationKey | null;
  let params = parseParams(element.getAttribute(`${tag}-params`));

  // Our own previous output: keep the tagged key. Anything else came from the theme.
  if (!key || last !== current) {
    const match = matchEnglish(current, keys);
    if (match) {
      key = match.key;
      params = match.params;
      element.setAttribute(tag, key);
      if (params) element.setAttribute(`${tag}-params`, JSON.stringify(params));
      else element.removeAttribute(`${tag}-params`);
    } else if (last !== undefined || !key || !(key in en)) {
      // The theme replaced our text with something unknown (e.g. a witty word): let it be.
      element.removeAttribute(tag);
      element.removeAttribute(`${tag}-params`);
      rendered.get(element)?.delete(slot);
      return;
    }
  }

  const value = t(key, params);
  if (raw !== value) write(element, slot, value, label);
  let slots = rendered.get(element);
  if (!slots) rendered.set(element, slots = new Map());
  slots.set(slot, normalize(value));
}

function parseParams(value: string | null): TranslationParams | undefined {
  if (!value) return undefined;
  try {
    return JSON.parse(value) as TranslationParams;
  } catch {
    return undefined;
  }
}

/** Bind (on first sight) and translate every theme-rendered node under `root`. */
export function translateTheme(root: ParentNode = document): void {
  for (const binding of THEME_BINDINGS) {
    for (const element of root.querySelectorAll(binding.selector)) {
      const label = labelOf(element, binding);
      if (label) translateSlot(element, "text", binding.keys, label);
      for (const slot of ATTRIBUTES) translateSlot(element, slot, binding.keys);
    }
  }
}

/** Nodes the theme fills in from JavaScript, possibly after the enhancements boot. */
const THEME_WRITTEN = "#sayhi, #runtimeshow, .webinfo-item time, .post-meta-date time";

/**
 * Keeps the theme markup translated: `refresh()` after boot, locale switches
 * and PJAX navigation; in between, late theme writes are caught by an observer.
 */
export class ThemeTranslator {
  private readonly observer = new MutationObserver(() => this.schedule());
  private scheduled = false;

  refresh(): void {
    translateTheme();
    document.querySelectorAll(".ff-pages-comments").forEach(translateDom);
    // PJAX swaps #body-wrap, so re-target the observer at the current nodes.
    this.observer.disconnect();
    for (const node of document.querySelectorAll(THEME_WRITTEN)) {
      this.observer.observe(node, { childList: true, characterData: true, subtree: true });
    }
  }

  destroy(): void {
    this.observer.disconnect();
  }

  private schedule(): void {
    if (this.scheduled) return;
    this.scheduled = true;
    queueMicrotask(() => {
      this.scheduled = false;
      // Our own writes match what was rendered, so this settles after one pass.
      translateTheme();
    });
  }
}
