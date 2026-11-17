// @vitest-environment jsdom
import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { parse } from "yaml";
import type { TranslationKey } from "../../src/enhancements/i18n";

// Pseudo-locale "xx" renders every key as "[xx] <key>" so bindings are visible; no real translations.
type I18n = typeof import("../../src/enhancements/i18n");
type ThemeI18n = typeof import("../../src/enhancements/theme-i18n");

const fixture = readFileSync("tests/unit/fixtures/solitude-home.html", "utf8");
let i18n: I18n;
let theme: ThemeI18n;

function pseudo(keys: string[]): Record<string, string> {
  return Object.fromEntries(keys.map((key) => [key, `[xx] ${key}`]));
}

const $ = (selector: string) => document.querySelector(selector)!;
const text = (selector: string) => $(selector).textContent!.replace(/\s+/g, " ").trim();
const attr = (selector: string, name: string) => $(selector).getAttribute(name);

/** What Solitude.refresh() writes from JavaScript (setTimeState, addRuntime, changeTimeFormat). */
function runThemeScripts(): void {
  $("#sayhi").textContent = "🍲 Lunch break";
  $("#runtimeshow").textContent = "56 days";
  $(".webinfo-item time").textContent = "now";
  $(".post-meta-date time").textContent = "6  days ago";
}

beforeEach(async () => {
  vi.resetModules();
  localStorage.clear();
  document.body.innerHTML = fixture;
  i18n = await import("../../src/enhancements/i18n");
  theme = await import("../../src/enhancements/theme-i18n");
  const keys = Object.keys(i18n.en).filter((key) => !key.startsWith("time."));
  i18n.registerLocale("xx", "Pseudo", {
    ...pseudo(keys),
    "categoryBar.categoryTip": "[xx] {name}",
    "aside.greeting.longTimeNoSee": "[xx] hi {name}",
    "aside.daysUnit": "[xx] {count}d",
    "time.justNow": "[xx] now",
    "time.daysAgo": "[xx] -{count}d",
    "footer.copyright": "[xx] © {years}",
    "footer.framework": "[xx] fw {name}",
    "footer.theme": "[xx] th {name}",
  });
});

describe("theme DOM bindings", () => {
  it("matches every binding selector in the rendered Solitude markup", () => {
    for (const binding of theme.THEME_BINDINGS) {
      expect(document.querySelectorAll(binding.selector).length, binding.selector).toBeGreaterThan(0);
    }
  });

  it("leaves English untouched and tags each node with its key", () => {
    runThemeScripts();
    const before = document.body.innerHTML.replace(/ data-theme-i18n-[\w-]+="[^"]*"/g, "");
    theme.translateTheme();
    expect(attr("#nav .menus_items a[href='/archives/']", "data-theme-i18n-text")).toBe("nav.archives");
    expect(attr("#nav .menus_items a[href='/archives/']", "data-theme-i18n-heotip")).toBe("nav.archives");
    expect(attr("#category-bar-home > a", "data-theme-i18n-heotip")).toBe("categoryBar.featuredTip");
    expect(attr("#category-bar #Infrastructure > a", "data-theme-i18n-heotip-params")).toBe('{"name":"Infrastructure"}');
    expect(attr("#Infrastructure > a", "data-theme-i18n-text")).toBeNull();
    expect(attr("#sayhi", "data-theme-i18n-text")).toBe("aside.greeting.noon");
    // Only the theme's double space in "6  days ago" is normalized.
    expect(document.body.innerHTML.replace(/ data-theme-i18n-[\w-]+="[^"]*"/g, ""))
      .toBe(before.replace("6  days ago", "6 days ago"));
  });

  it("translates the navbar, mobile sidebar and their tooltips", async () => {
    theme.translateTheme();
    await i18n.setLocale("xx");
    theme.translateTheme();
    const menu = [...document.querySelectorAll("#nav .menus_items a.site-page > span")].map((span) => span.textContent);
    expect(menu).toEqual([
      "home", "articles", "archives", "categories", "tags", "community", "links", "profile", "music", "about",
    ].map((name) => `[xx] nav.${name}`));
    const about = "#nav a[href='/about/']";
    expect(attr(about, "title")).toBe("[xx] nav.about");
    expect(attr(about, "heotip")).toBe("[xx] nav.about");
    expect($(about).querySelector("i.fa-user")).not.toBeNull();
    expect(text("#sidebar-menus a[href='/music/']")).toBe("[xx] nav.music");
    expect(attr("#site-name", "heotip")).toBe("[xx] nav.backHome");
    expect(text("#site-name .title")).toBe("Takina");
    expect(attr("#page-name-text", "title")).toBe("[xx] nav.backToTop");
    expect(text("#page-name-text")).toBe("Takina");
    expect(attr("#randomPost_button > a", "heotip")).toBe("[xx] nav.randomPost");
    expect(attr("#search-button > a", "title")).toBe("[xx] nav.search");
    expect(attr("#nav-totop", "heotip")).toBe("[xx] nav.backToTop");
    expect(text("#sidebar-menus .site-data a[href='/categories/'] .headline")).toBe("[xx] nav.categories");
    expect(text("#sidebar-menus .site-data a[href='/categories/'] .length-num")).toBe("1");
    expect([...document.querySelectorAll("#sidebar-menus > .sidebar-menu-item-title")].map((el) => el.textContent))
      .toEqual(["[xx] sidebar.function", "[xx] sidebar.tags"]);
    expect(text(".darkmode_switchbutton")).toBe("[xx] sidebar.displayMode");
  });

  it("translates the category bar, aside, post card meta and footer", async () => {
    runThemeScripts();
    theme.translateTheme();
    await i18n.setLocale("xx");
    theme.translateTheme();

    expect(text("#category-bar-home > a")).toBe("[xx] categoryBar.featured");
    expect(attr("#category-bar-home > a", "title")).toBe("[xx] categoryBar.featured");
    expect(attr("#category-bar-home > a", "heotip")).toBe("[xx] categoryBar.featuredTip");
    expect(text("#category-bar #archives > a")).toBe("[xx] categoryBar.allPosts");
    expect(attr("#category-bar #archives > a", "heotip")).toBe("[xx] categoryBar.allPostsTip");
    expect(text(".category-bar-more")).toBe("[xx] categoryBar.more");
    expect(attr(".category-bar-more", "heotip")).toBe("[xx] categoryBar.moreTip");
    expect(text("#Infrastructure > a")).toBe("Infrastructure");
    expect(attr("#Infrastructure > a", "heotip")).toBe("[xx] Infrastructure");

    expect(text("#sayhi")).toBe("[xx] aside.greeting.noon");
    expect(attr(".card-info .avatar img", "alt")).toBe("[xx] aside.avatarAlt");
    expect(text(".card-info .description")).toBe("[xx] aside.bioDescription");
    expect(text(".card-info .bottom-group .desc")).toBe("[xx] aside.bioTagline");
    expect(text(".card-info .bottom-group .name")).toBe("Takina");
    expect(text(".card-recent-post .item-headline")).toBe("[xx] aside.recentPosts");
    expect([...document.querySelectorAll(".webinfo-item .item-name")].map((el) => el.textContent))
      .toEqual(["[xx] aside.postsCount", "[xx] aside.runtime", "[xx] aside.lastUpdate"]);
    expect(text("#runtimeshow")).toBe("[xx] 56d");
    expect(text(".webinfo-item time")).toBe("[xx] now");

    expect([...document.querySelectorAll(".recent-post-info-top-tips > span.original")].map((el) => el.textContent))
      .toEqual(["Infrastructure", "[xx] post.new"]);
    expect(text(".unvisited-post")).toBe("[xx] post.unread");
    expect(attr(".unvisited-post", "title")).toBe("[xx] post.unread");
    expect(text(".post-meta-date time")).toBe("[xx] -6d");

    expect([...document.querySelectorAll("#st-footer .footer-title")].map((el) => el.textContent))
      .toEqual(["[xx] footer.navigation", "[xx] footer.resources"]);
    expect([...document.querySelectorAll("#st-footer .footer-item")].map((el) => el.textContent)).toEqual([
      "[xx] footer.archives", "[xx] footer.tags", "[xx] footer.about", "Solitude", "Firefly", "[xx] footer.credits",
    ]);
    expect(attr("#st-footer a[href='/credits/']", "title")).toBe("[xx] footer.credits");
    expect(attr("#footer_mini_logo", "heotip")).toBe("[xx] nav.backToTop");
    expect(attr("#footer_mini_logo img", "alt")).toBe("[xx] nav.backToTop");
    expect(text("#footer-bar .copyright")).toBe("[xx] © 2026Takina");
    expect(text("#footer-bar .copyright > a")).toBe("Takina");
    const [framework, themeLink] = document.querySelectorAll("#footer-bar .beian-group > a");
    expect([framework!.textContent, framework!.getAttribute("heotip")]).toEqual(["[xx] fw Hexo", "[xx] fw Hexo"]);
    expect(themeLink!.getAttribute("title")).toBe("[xx] th Solitude");
  });

  it("switches back and forth without losing the bound keys", async () => {
    runThemeScripts();
    const snapshot = () => [
      text("#nav a[href='/tags/']"), attr("#category-bar-home > a", "heotip"), text("#sayhi"),
      text("#runtimeshow"), attr("#Infrastructure > a", "heotip"), text("#footer-bar .copyright"),
    ];
    theme.translateTheme();
    const english = snapshot();
    for (let round = 0; round < 2; round++) {
      await i18n.setLocale("xx");
      theme.translateTheme();
      expect(snapshot()).toEqual([
        "[xx] nav.tags", "[xx] categoryBar.featuredTip", "[xx] aside.greeting.noon",
        "[xx] 56d", "[xx] Infrastructure", "[xx] © 2026Takina",
      ]);
      await i18n.setLocale("en");
      theme.translateTheme();
      expect(snapshot()).toEqual(english);
    }
    expect(english).toEqual(["Tags", "View all recommended posts", "🍲 Lunch break", "56 days", "View posts in Infrastructure", "© 2026 ByTakina"]);
  });

  it("rebinds when the theme rewrites a node and releases it for unknown text", async () => {
    runThemeScripts();
    await i18n.setLocale("xx");
    theme.translateTheme();
    expect(text("#sayhi")).toBe("[xx] aside.greeting.noon");

    // setTimeState() for a returning commenter, then changeWittyWord() on click.
    $("#sayhi").textContent = "Long time no see, Ada";
    theme.translateTheme();
    expect(text("#sayhi")).toBe("[xx] hi Ada");
    expect(attr("#sayhi", "data-theme-i18n-text")).toBe("aside.greeting.longTimeNoSee");
    $("#sayhi").textContent = "Stay curious every day";
    theme.translateTheme();
    expect(text("#sayhi")).toBe("Stay curious every day");
    expect(attr("#sayhi", "data-theme-i18n-text")).toBeNull();

    // A PJAX swap brings fresh English markup.
    document.body.innerHTML = fixture;
    theme.translateTheme();
    expect(text("#nav a[href='/links/']")).toBe("[xx] nav.links");
  });

  it("catches theme writes that land after a refresh", async () => {
    await i18n.setLocale("xx");
    const translator = new theme.ThemeTranslator();
    translator.refresh();
    runThemeScripts();
    await vi.waitFor(() => expect(text("#sayhi")).toBe("[xx] aside.greeting.noon"));
    expect(text("#runtimeshow")).toBe("[xx] 56d");
    expect(text(".post-meta-date time")).toBe("[xx] -6d");
    translator.destroy();
    $("#sayhi").textContent = "🌞 Good afternoon";
    await Promise.resolve();
    expect(text("#sayhi")).toBe("🌞 Good afternoon");
  });
});

describe("English source contract", () => {
  // Bindings match on English text, so the defaults must equal what Hexo renders.
  const site = parse(readFileSync("_config.solitude.yml", "utf8"));
  const lang = parse(readFileSync("node_modules/hexo-theme-solitude/languages/en.yml", "utf8"));
  const en = () => i18n.en;
  const clean = (value: string) => value.trim().replace(/\$\{(\w+)\}/g, "{$1}");

  it("mirrors the theme configuration", () => {
    const menu = site.nav.menu as Record<string, string | Record<string, string>>;
    const labels = Object.entries(menu).flatMap(([name, value]) =>
      [name, ...(typeof value === "object" ? Object.keys(value) : [])]);
    expect(labels.map((label) => en()[`nav.${label[0]!.toLowerCase()}${label.slice(1)}` as TranslationKey]))
      .toEqual(labels);
    const card = site.aside.my_card;
    for (const [state, value] of Object.entries(card.state as Record<string, string>)) {
      expect(en()[`aside.greeting.${state}` as TranslationKey]).toBe(value);
    }
    expect(en()["aside.bioDescription"]).toBe(card.content);
    expect(en()["aside.bioTagline"]).toBe(card.description);
    const groups = site.footer.group as Record<string, Record<string, string>>;
    expect(Object.keys(groups)).toEqual([en()["footer.navigation"], en()["footer.resources"]]);
    expect(Object.keys(groups.Navigation!)).toEqual([en()["footer.archives"], en()["footer.tags"], en()["footer.about"]]);
    expect(Object.keys(groups.Resources!)).toContain(en()["footer.credits"]);
  });

  it("mirrors the theme language file", () => {
    const pairs: Array<[TranslationKey, string]> = [
      ["nav.backHome", lang.nav.site_name_title], ["nav.backToTop", lang.nav.backtop],
      ["nav.randomPost", lang.nav.randompost], ["nav.search", lang.nav.search],
      ["sidebar.function", lang.sidebar.function], ["sidebar.displayMode", lang.sidebar.darkmode],
      ["sidebar.tags", lang.page.tag],
      ["categoryBar.featured", lang.home.home], ["categoryBar.featuredTip", lang.tooltip.home],
      ["categoryBar.allPosts", lang.home.archives], ["categoryBar.allPostsTip", lang.tooltip.archives],
      ["categoryBar.more", lang.more], ["categoryBar.moreTip", lang.tooltip.categories],
      ["categoryBar.categoryTip", lang.tooltip.category],
      ["aside.greeting.longTimeNoSee", `${lang.aside.hello}{name}`],
      ["aside.greeting.welcomeBack", `${lang.aside.back}{name}`],
      ["aside.avatarAlt", lang.aside.avatar], ["aside.recentPosts", lang.aside.newpost],
      ["aside.postsCount", lang.aside.postcount], ["aside.runtime", lang.aside.runtime],
      ["aside.lastUpdate", lang.aside.updatetime], ["aside.daysUnit", `{count}${lang.day}`],
      ["time.justNow", lang.time.just], ["time.minutesAgo", `{count}${lang.time.min}`],
      ["time.hoursAgo", `{count}${lang.time.hour}`], ["time.daysAgo", `{count}${lang.time.day}`],
      ["time.monthsAgo", `{count}${lang.time.month}`],
      ["post.new", lang.home.new], ["post.unread", lang.home.read],
      ["footer.framework", `${lang.framework_by}{name}`], ["footer.theme", `${lang.theme_by}{name}`],
    ];
    for (const [key, value] of pairs) expect(en()[key], key).toBe(clean(value));
  });
});
