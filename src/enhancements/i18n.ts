import { loadLocale, saveLocale } from "./storage";

/**
 * Every UI string of the enhancement layer. Keys are flat and dotted by
 * component, so a locale pack is a plain JSON object and `t()` stays typed.
 * Values may contain `{name}` placeholders filled from `t(key, params)`.
 */
export interface TranslationSchema {
  // Shared media controls (bento audio card, dock and player).
  "media.play": string;
  "media.pause": string;
  "media.openPlayer": string;
  "media.closePlayer": string;

  // Bento grid.
  "bento.label": string;
  "bento.featured.eyebrow": string;
  "bento.featured.title": string;
  "bento.featured.description": string;
  "bento.featured.technologies": string;
  /** Params: `{from}`, `{to}` in milliseconds. */
  "bento.featured.latencyChart": string;
  "bento.featured.latencyUnit": string;
  "bento.featured.throughputUnit": string;
  "bento.featured.cta": string;
  "bento.bio.eyebrow": string;
  "bento.bio.name": string;
  "bento.bio.tagline": string;
  "bento.bio.description": string;
  "bento.bio.focusLabel": string;
  "bento.bio.focus.distributedSystems": string;
  "bento.bio.focus.frontendCraft": string;
  "bento.bio.focus.webPerformance": string;
  "bento.audio.eyebrow": string;
  "bento.audio.idleTitle": string;
  "bento.audio.playing": string;
  "bento.audio.paused": string;
  "bento.audio.unavailable": string;
  "bento.audio.player": string;
  "bento.writing.eyebrow": string;
  "bento.writing.archive": string;
  "bento.writing.epigraph": string;
  "bento.writing.epigraphAuthor": string;
  "bento.writing.browseAll": string;
  "bento.writing.untitled": string;

  // Unified dock.
  "dock.label": string;
  "dock.background.label": string;
  "dock.background.video": string;
  "dock.background.wallpaper": string;
  "dock.background.unavailable": string;
  "dock.theme.label": string;
  "dock.theme.toLight": string;
  "dock.theme.toDark": string;
  "dock.top": string;
  "dock.companion.label": string;
  "dock.companion.call": string;
  "dock.companion.dismiss": string;

  // Music player.
  "music.title": string;
  "music.hint": string;
  "music.ready": string;
  "music.instrumental": string;
  "music.coverAlt": string;
  "music.togglePlaylist": string;
  "music.progress": string;
  "music.previous": string;
  "music.next": string;
  "music.volume": string;
  "music.playlist": string;
  "music.order.toggle": string;
  /** Params: `{mode}`, already translated via `music.order.<mode>`. */
  "music.order.current": string;
  "music.order.list": string;
  "music.order.loop": string;
  "music.order.single": string;
  "music.order.random": string;

  // Settings panel.
  "settings.trigger": string;
  "settings.title": string;
  "settings.video": string;
  "settings.carousel": string;
  "settings.effects": string;
  "settings.live2d": string;
  "settings.overlay": string;
  "settings.mode.wallpaper": string;
  "settings.mode.video": string;
  "settings.language": string;

  // Live2D companion.
  "live2d.dragTitle": string;
  "live2d.canvasLabel": string;
  "live2d.loadFailed": string;
  "live2d.unavailable": string;

  // Quotes and app shell.
  /** Params: `{work}`, `{character}`. */
  "quotes.source": string;
  "quotes.sourceTitle": string;
  "app.initFailed": string;

  // Theme-rendered markup (see theme-i18n.ts). English values must match what
  // Hexo renders from _config.solitude.yml and the theme's languages/en.yml,
  // because that text is how each node is bound to its key.
  // Navbar menu (also the mobile sidebar menu) and navbar buttons.
  "nav.home": string;
  "nav.articles": string;
  "nav.archives": string;
  "nav.categories": string;
  "nav.tags": string;
  "nav.community": string;
  "nav.links": string;
  "nav.profile": string;
  "nav.music": string;
  "nav.about": string;
  "nav.backHome": string;
  "nav.backToTop": string;
  "nav.randomPost": string;
  "nav.search": string;

  // Mobile sidebar.
  "sidebar.function": string;
  "sidebar.displayMode": string;
  "sidebar.tags": string;

  // Home category bar.
  "categoryBar.featured": string;
  "categoryBar.featuredTip": string;
  "categoryBar.allPosts": string;
  "categoryBar.allPostsTip": string;
  "categoryBar.more": string;
  "categoryBar.moreTip": string;
  /** Params: `{name}`, the category name. */
  "categoryBar.categoryTip": string;

  // Aside author card, recent posts and site info.
  "aside.greeting.morning": string;
  "aside.greeting.noon": string;
  "aside.greeting.afternoon": string;
  "aside.greeting.night": string;
  "aside.greeting.goodnight": string;
  /** Params: `{name}`, the returning commenter's nickname. */
  "aside.greeting.longTimeNoSee": string;
  /** Params: `{name}`, the returning commenter's nickname. */
  "aside.greeting.welcomeBack": string;
  "aside.avatarAlt": string;
  "aside.bioDescription": string;
  "aside.bioTagline": string;
  "aside.recentPosts": string;
  "aside.postsCount": string;
  "aside.runtime": string;
  "aside.lastUpdate": string;
  /** Params: `{count}`; the whole phrase, so the unit can sit on either side. */
  "aside.daysUnit": string;

  // Relative dates written by the theme (aside "Last update" and post cards).
  "time.justNow": string;
  /** Params: `{count}`. */
  "time.minutesAgo": string;
  /** Params: `{count}`. */
  "time.hoursAgo": string;
  /** Params: `{count}`. */
  "time.daysAgo": string;
  /** Params: `{count}`. */
  "time.monthsAgo": string;

  // Post cards.
  "post.new": string;
  "post.unread": string;

  // Footer.
  "footer.navigation": string;
  "footer.resources": string;
  "footer.archives": string;
  "footer.tags": string;
  "footer.about": string;
  "footer.credits": string;
  /** Params: `{years}`, e.g. `2026` or `2024 - 2026`; the author link follows. */
  "footer.copyright": string;
  /** Params: `{name}`. */
  "footer.framework": string;
  /** Params: `{name}`. */
  "footer.theme": string;
  "visits.label": string;
  "visits.today": string;
  "visits.total": string;
  "visits.unit": string;
  "visits.loading": string;
  "visits.ready": string;
  "visits.local": string;
  "visits.unavailable": string;
  "pages.comments": string;
}

export type TranslationKey = keyof TranslationSchema;
export type TranslationParams = Record<string, string | number>;

export const DEFAULT_LOCALE = "en";

export const en: TranslationSchema = {
  "media.play": "Play",
  "media.pause": "Pause",
  "media.openPlayer": "Open music player",
  "media.closePlayer": "Close music player",

  "bento.label": "Highlights",
  "bento.featured.eyebrow": "Featured Project",
  "bento.featured.title": "High-Performance Self-Hosted Speedtest Architecture",
  "bento.featured.description":
    "Browser-side measurement in Web Workers, HAProxy TLS termination and Redis rate limiting, tuned for gigabit local links.",
  "bento.featured.technologies": "Technologies",
  "bento.featured.latencyChart": "Latency trending down from {from} to {to} milliseconds",
  "bento.featured.latencyUnit": "ms p50",
  "bento.featured.throughputUnit": "Mbps",
  "bento.featured.cta": "Read the architecture",
  "bento.bio.eyebrow": "About Me",
  "bento.bio.name": "Takina",
  "bento.bio.tagline": "Developer · Tinkerer",
  "bento.bio.description": "Writing down things I've built, broken, and figured out along the way.",
  "bento.bio.focusLabel": "Interests",
  "bento.bio.focus.distributedSystems": "Systems & Infra",
  "bento.bio.focus.frontendCraft": "Web & UI",
  "bento.bio.focus.webPerformance": "Self-Hosting",
  "bento.audio.eyebrow": "Now Playing",
  "bento.audio.idleTitle": "Ambient soundtrack",
  "bento.audio.playing": "Playing",
  "bento.audio.paused": "Paused",
  "bento.audio.unavailable": "Audio unavailable",
  "bento.audio.player": "Player",
  "bento.writing.eyebrow": "Recent Writing",
  "bento.writing.archive": "Archive →",
  "bento.writing.epigraph": "“Make it work, make it right, make it fast.”",
  "bento.writing.epigraphAuthor": "Kent Beck",
  "bento.writing.browseAll": "Browse all articles",
  "bento.writing.untitled": "Untitled",

  "dock.label": "Quick controls",
  "dock.background.label": "Video background",
  "dock.background.video": "Video background (switch to wallpaper)",
  "dock.background.wallpaper": "Wallpaper background (switch to video)",
  "dock.background.unavailable": "Video background unavailable",
  "dock.theme.label": "Dark theme",
  "dock.theme.toLight": "Switch to light theme",
  "dock.theme.toDark": "Switch to dark theme",
  "dock.top": "Back to top",
  "dock.companion.label": "Takina companion",
  "dock.companion.call": "Call Takina",
  "dock.companion.dismiss": "Dismiss Takina",

  "music.title": "Music Player",
  "music.hint": "Click to play",
  "music.ready": "Ready",
  "music.instrumental": "Instrumental",
  "music.coverAlt": "Current Track Cover",
  "music.togglePlaylist": "Toggle playlist",
  "music.progress": "Track progress",
  "music.previous": "Previous Track",
  "music.next": "Next Track",
  "music.volume": "Volume",
  "music.playlist": "Playlist",
  "music.order.toggle": "Toggle Playback Mode",
  "music.order.current": "Playback Mode: {mode}",
  "music.order.list": "list",
  "music.order.loop": "loop",
  "music.order.single": "single",
  "music.order.random": "random",

  "settings.trigger": "Visual & Motion Settings",
  "settings.title": "Atmosphere & Motion",
  "settings.video": "Background Video",
  "settings.carousel": "Wallpaper Carousel",
  "settings.effects": "Ambient Effects",
  "settings.live2d": "Companion Widget (Off by default)",
  "settings.overlay": "Overlay Dimming",
  "settings.mode.wallpaper": "Wallpaper",
  "settings.mode.video": "Video",
  "settings.language": "Language",

  "live2d.dragTitle": "Drag companion",
  "live2d.canvasLabel": "Companion widget: drag to reposition, hover or focus to toggle expression",
  "live2d.loadFailed": "Live2D failed to load, downgraded gracefully.",
  "live2d.unavailable": "Companion widget unavailable, other features unaffected.",

  "quotes.source": "《{work}》 · {character}",
  "quotes.sourceTitle": "View quote source and original work",
  "app.initFailed": "Dynamic experience failed to initialize, running in fallback mode.",

  "nav.home": "Home",
  "nav.articles": "Articles",
  "nav.archives": "Archives",
  "nav.categories": "Categories",
  "nav.tags": "Tags",
  "nav.community": "Community",
  "nav.links": "Links",
  "nav.profile": "Profile",
  "nav.music": "Music",
  "nav.about": "About",
  "nav.backHome": "Back to home",
  "nav.backToTop": "Back to top",
  "nav.randomPost": "Random post",
  "nav.search": "Search",

  "sidebar.function": "Function",
  "sidebar.displayMode": "Display mode",
  "sidebar.tags": "Tags",

  "categoryBar.featured": "Featured",
  "categoryBar.featuredTip": "View all recommended posts",
  "categoryBar.allPosts": "All posts",
  "categoryBar.allPostsTip": "View all posts",
  "categoryBar.more": "More",
  "categoryBar.moreTip": "View all categories",
  "categoryBar.categoryTip": "View posts in {name}",

  "aside.greeting.morning": "✨ Good morning, ready for a new day",
  "aside.greeting.noon": "🍲 Lunch break",
  "aside.greeting.afternoon": "🌞 Good afternoon",
  "aside.greeting.night": "🌙 Welcome back into the night",
  "aside.greeting.goodnight": "Good night 😴",
  "aside.greeting.longTimeNoSee": "Long time no see, {name}",
  "aside.greeting.welcomeBack": "Welcome back, {name}",
  "aside.avatarAlt": "Avatar",
  "aside.bioDescription": "A personal space for code, anime, and daily life.",
  "aside.bioTagline": "Building tools, breaking things, and taking notes.",
  "aside.recentPosts": "Recent posts",
  "aside.postsCount": "Posts:",
  "aside.runtime": "Runtime:",
  "aside.lastUpdate": "Last update:",
  "aside.daysUnit": "{count} days",

  "time.justNow": "now",
  "time.minutesAgo": "{count} minutes ago",
  "time.hoursAgo": "{count} hours ago",
  "time.daysAgo": "{count} days ago",
  "time.monthsAgo": "{count} months ago",

  "post.new": "New",
  "post.unread": "Unread",

  "footer.navigation": "Navigation",
  "footer.resources": "Resources",
  "footer.archives": "Archives",
  "footer.tags": "Tags",
  "footer.about": "About",
  "footer.credits": "Credits",
  "footer.copyright": "© {years} By",
  "footer.framework": "Framework: {name}",
  "footer.theme": "Theme: {name}",
  "visits.label": "Site visits",
  "visits.today": "Today’s visits",
  "visits.total": "Total visits",
  "visits.unit": "views",
  "visits.loading": "Loading visit counts…",
  "visits.ready": "Site-wide page views · Busuanzi",
  "visits.local": "Local previews are not counted. Visit counts appear on the public domain.",
  "visits.unavailable": "Visit counts are temporarily unavailable.",
  "pages.comments": "Comment on the server edition",
};

/** A locale pack as shipped in JSON files or `window.__NOVA_LOCALES__`. */
export interface LocalePack {
  label: string;
  messages: Partial<TranslationSchema>;
}

/** External packs announced by the build (`custom/config.json`), fetched on first use. */
export interface RemoteLocale {
  code: string;
  label: string;
  url: string;
}

export interface I18nOptions {
  defaultLocale?: string;
  locales?: RemoteLocale[];
}

export interface LocaleInfo {
  code: string;
  label: string;
}

interface LocaleEntry {
  label: string;
  /** Layered by registerLocale(); wins over the fetched pack. */
  messages: Partial<TranslationSchema>;
  /** Fetched from a remote pack on first use. */
  pack?: Partial<TranslationSchema>;
  load?: () => Promise<unknown>;
  pending?: Promise<boolean>;
}

const LOCALE_PATTERN = /^[a-z]{2,3}(-[a-z0-9]{2,8})*$/i;
// The built-in dictionary is the final fallback inside t(), so the "en" entry only holds overrides.
const registry = new Map<string, LocaleEntry>([[DEFAULT_LOCALE, { label: "English", messages: {} }]]);
const localeListeners = new Set<(locale: string) => void>();
const registryListeners = new Set<() => void>();
let active = DEFAULT_LOCALE;
let switchToken = 0;

/** Canonical BCP 47 casing: `pt_br` → `pt-BR`, `zh-hant-tw` → `zh-Hant-TW`. */
export function normalizeLocale(locale: string): string {
  const code = locale.trim().replace(/_/g, "-");
  if (!LOCALE_PATTERN.test(code)) throw new TypeError(`Invalid locale code: "${locale}"`);
  return code.split("-").map((part, index) => {
    if (index === 0) return part.toLowerCase();
    if (part.length === 2) return part.toUpperCase();
    if (part.length === 4) return part[0]!.toUpperCase() + part.slice(1).toLowerCase();
    return part.toLowerCase();
  }).join("-");
}

/** Keep only known keys with string values, so a stray pack cannot inject anything else. */
function sanitize(messages: unknown): Partial<TranslationSchema> {
  const result: Partial<TranslationSchema> = {};
  if (!messages || typeof messages !== "object") return result;
  for (const [key, value] of Object.entries(messages)) {
    if (key in en && typeof value === "string") result[key as TranslationKey] = value;
  }
  return result;
}

function notifyRegistry(): void {
  registryListeners.forEach((listener) => {
    try {
      listener();
    } catch (error) {
      console.error(error);
    }
  });
}

function notifyLocale(): void {
  localeListeners.forEach((listener) => {
    try {
      listener(active);
    } catch (error) {
      console.error(error);
    }
  });
}

/**
 * Add a locale, or layer more messages onto an existing one. Missing keys fall
 * back to the base language (`pt` for `pt-BR`) and then to English.
 */
export function registerLocale(locale: string, label: string, messages: Partial<TranslationSchema> = {}): void {
  const code = normalizeLocale(locale);
  const existing = registry.get(code);
  registry.set(code, {
    ...existing,
    label: label || existing?.label || code,
    messages: { ...existing?.messages, ...sanitize(messages) },
  });
  notifyRegistry();
  if (fallbackChain().includes(code)) notifyLocale();
}

/**
 * Announce a pack that is fetched only when its locale (or a locale falling
 * back to it) is first selected. It may also extend an existing locale.
 */
export function registerRemoteLocale(locale: RemoteLocale): void {
  const code = normalizeLocale(locale.code);
  const existing = registry.get(code);
  registry.set(code, {
    ...existing,
    label: locale.label || existing?.label || code,
    messages: existing?.messages ?? {},
    load: () => fetchPack(locale.url),
  });
  notifyRegistry();
}

export function listLocales(): LocaleInfo[] {
  return [...registry].map(([code, entry]) => ({ code, label: entry.label }));
}

export function getLocale(): string {
  return active;
}

/** Switch locale and remember the choice. Resolves `false` for unknown or unloadable locales. */
export function setLocale(locale: string): Promise<boolean> {
  return applyLocale(locale, true);
}

async function applyLocale(locale: string, persist: boolean): Promise<boolean> {
  const code = resolveLocale(locale);
  if (!code) return false;
  const token = ++switchToken;
  let changed = false;
  // Fetch the whole fallback chain up front; only the requested pack is required.
  const [own, ...rest] = fallbackChain(code).map((item) => ensureLoaded(item));
  const fallbacks = Promise.all(rest.map((pending) => pending.catch(() => false)));
  try {
    changed = await own!;
  } catch (error) {
    console.warn(`Locale "${code}" could not be loaded, keeping "${active}".`, error);
    return false;
  }
  changed = (await fallbacks).includes(true) || changed;
  // A later switch started while packs were downloading; it wins.
  if (token !== switchToken) return false;
  if (persist) saveLocale(code);
  if (code === active && !changed) return true;
  active = code;
  notifyLocale();
  return true;
}

/** Resolves `true` when a pack was fetched just now. Failed loads can be retried. */
function ensureLoaded(code: string): Promise<boolean> {
  const entry = registry.get(code);
  if (!entry?.load) return Promise.resolve(false);
  entry.pending ??= entry.load().then((pack) => {
    const messages = pack && typeof pack === "object" && "messages" in pack ? pack.messages : pack;
    const latest = registry.get(code)!;
    latest.pack = sanitize(messages);
    delete latest.load;
    delete latest.pending;
    return true;
  }, (error: unknown) => {
    delete registry.get(code)?.pending;
    throw error;
  });
  return entry.pending;
}

function fallbackChain(code = active): string[] {
  return [...new Set([code, baseLanguage(code), DEFAULT_LOCALE])];
}

function resolveLocale(locale: string): string | undefined {
  let code: string;
  try {
    code = normalizeLocale(locale);
  } catch {
    return undefined;
  }
  if (registry.has(code)) return code;
  const base = baseLanguage(code);
  return registry.has(base) ? base : undefined;
}

function baseLanguage(code: string): string {
  return code.split("-")[0]!;
}

/** Live updates: called with the new locale after every switch or active-pack change. */
export function onLocaleChange(listener: (locale: string) => void): () => void {
  localeListeners.add(listener);
  return () => localeListeners.delete(listener);
}

/** Called whenever the set of registered locales changes (e.g. for the selector). */
export function onLocalesChange(listener: () => void): () => void {
  registryListeners.add(listener);
  return () => registryListeners.delete(listener);
}

export function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.hasOwn(params, name) ? String(params[name]) : match);
}

export function t(key: TranslationKey, params?: TranslationParams): string {
  for (const code of fallbackChain()) {
    const entry = registry.get(code);
    const value = entry?.messages[key] ?? entry?.pack?.[key];
    if (value !== undefined) return interpolate(value, params);
  }
  return interpolate(en[key] ?? key, params);
}

/**
 * Translate declarative markup inside `root`:
 * `data-i18n="key"` sets text, `data-i18n-attr="aria-label:key;title:key"` sets
 * attributes and `data-i18n-params='{"n":1}'` supplies placeholders for both.
 * `root` is a component root and also receives the active `lang`.
 */
export function translateDom(root: Element): void {
  root.setAttribute("lang", active);
  const elements = [root, ...root.querySelectorAll("[data-i18n], [data-i18n-attr]")];
  for (const element of elements) {
    if (!(element instanceof HTMLElement || element instanceof SVGElement)) continue;
    const params = parseParams(element.dataset.i18nParams);
    const key = element.dataset.i18n;
    if (key && key in en) element.textContent = t(key as TranslationKey, params);
    for (const pair of element.dataset.i18nAttr?.split(";") ?? []) {
      const [attribute, attrKey] = pair.split(":").map((part) => part.trim());
      if (attribute && attrKey && attrKey in en) element.setAttribute(attribute, t(attrKey as TranslationKey, params));
    }
  }
}

function parseParams(value?: string): TranslationParams | undefined {
  if (!value) return undefined;
  try {
    return JSON.parse(value) as TranslationParams;
  } catch {
    return undefined;
  }
}

async function fetchPack(url: string): Promise<unknown> {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new Error(`Locale request failed: ${response.status}`);
  return response.json();
}

declare global {
  interface Window {
    /** Packs injected by a script before the enhancements boot. */
    __NOVA_LOCALES__?: Record<string, LocalePack>;
    /** Runtime API for packs added after boot. */
    __NOVA_I18N__?: {
      registerLocale: typeof registerLocale;
      setLocale: typeof setLocale;
      getLocale: typeof getLocale;
      listLocales: typeof listLocales;
      t: typeof t;
    };
  }
}

/**
 * Register injected and build-time packs, then restore the visitor's choice
 * (or the configured default) before any component renders.
 */
export async function initI18n(options: I18nOptions = {}): Promise<void> {
  const injected = typeof window === "undefined" ? undefined : window.__NOVA_LOCALES__;
  for (const [code, pack] of Object.entries(injected ?? {})) {
    try {
      registerLocale(code, pack.label, pack.messages);
    } catch (error) {
      console.warn("Ignoring invalid injected locale pack.", error);
    }
  }
  for (const remote of options.locales ?? []) {
    try {
      registerRemoteLocale(remote);
    } catch (error) {
      console.warn("Ignoring invalid locale pack entry.", error);
    }
  }
  if (typeof window !== "undefined") {
    window.__NOVA_I18N__ = { registerLocale, setLocale, getLocale, listLocales, t };
  }
  const saved = loadLocale();
  if (saved && await applyLocale(saved, false)) return;
  if (options.defaultLocale && await applyLocale(options.defaultLocale, false)) return;
  // Still apply English so an "en" pack (site-specific copy) is loaded too.
  await applyLocale(DEFAULT_LOCALE, false);
}
