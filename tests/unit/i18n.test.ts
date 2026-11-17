// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";

// Fixture locales use a pseudo-locale code ("xx") and bracketed English, never real translations.
type I18n = typeof import("../../src/enhancements/i18n");

let i18n: I18n;

beforeEach(async () => {
  // Every test gets a fresh registry, active locale and listener set.
  vi.resetModules();
  localStorage.clear();
  delete window.__NOVA_LOCALES__;
  delete window.__NOVA_I18N__;
  i18n = await import("../../src/enhancements/i18n");
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.replaceChildren();
});

describe("default English dictionary", () => {
  it("is complete and active by default", () => {
    expect(i18n.getLocale()).toBe("en");
    expect(i18n.listLocales()).toEqual([{ code: "en", label: "English" }]);
    for (const [key, value] of Object.entries(i18n.en)) {
      expect(value, key).toMatch(/\S/);
    }
    expect(i18n.t("settings.title")).toBe("Atmosphere & Motion");
  });

  it("keeps every component string in the dictionary instead of inline", () => {
    for (const file of ["bento", "dock", "music", "settings", "theme-i18n"]) {
      const source = readFileSync(`src/enhancements/${file}.ts`, "utf8");
      expect(source, file).not.toMatch(/aria-label="[A-Za-z]/);
      expect(source, file).not.toMatch(/(textContent|title) = "[A-Za-z]/);
    }
  });
});

describe("template interpolation", () => {
  it("fills named placeholders and leaves unknown ones visible", () => {
    expect(i18n.t("music.order.current", { mode: "loop" })).toBe("Playback Mode: loop");
    expect(i18n.t("bento.featured.latencyChart", { from: 14, to: 6 }))
      .toBe("Latency trending down from 14 to 6 milliseconds");
    expect(i18n.interpolate("{a} and {b}", { a: 1 })).toBe("1 and {b}");
    expect(i18n.interpolate("{toString}", {})).toBe("{toString}");
  });
});

describe("registration and fallback", () => {
  it("falls back key by key to English for partial packs", async () => {
    i18n.registerLocale("xx", "Pseudo", { "media.play": "[xx] Play" });
    expect(await i18n.setLocale("xx")).toBe(true);
    expect(i18n.getLocale()).toBe("xx");
    expect(i18n.t("media.play")).toBe("[xx] Play");
    expect(i18n.t("media.pause")).toBe("Pause");
  });

  it("falls back through the base language before English", async () => {
    i18n.registerLocale("xx", "Pseudo", { "media.play": "[xx] Play", "media.pause": "[xx] Pause" });
    i18n.registerLocale("xx_yy", "Pseudo (YY)", { "media.play": "[xx-YY] Play" });
    expect(i18n.listLocales().map((locale) => locale.code)).toEqual(["en", "xx", "xx-YY"]);
    await i18n.setLocale("xx-YY");
    expect(i18n.t("media.play")).toBe("[xx-YY] Play");
    expect(i18n.t("media.pause")).toBe("[xx] Pause");
    expect(i18n.t("dock.top")).toBe("Back to top");
  });

  it("resolves an unregistered region to its base language and rejects unknown locales", async () => {
    i18n.registerLocale("xx", "Pseudo", {});
    expect(await i18n.setLocale("xx-ZZ")).toBe(true);
    expect(i18n.getLocale()).toBe("xx");
    expect(await i18n.setLocale("yy")).toBe(false);
    expect(await i18n.setLocale("not a locale")).toBe(false);
    expect(i18n.getLocale()).toBe("xx");
    expect(() => i18n.registerLocale("<script>", "Bad", {})).toThrow(TypeError);
  });

  it("layers repeated registrations and ignores unknown keys or non-string values", async () => {
    i18n.registerLocale("xx", "Pseudo", { "media.play": "[xx] Play" });
    i18n.registerLocale("xx", "", { "media.pause": "[xx] Pause", ...({ "nope": "x", "dock.top": 3 } as object) });
    await i18n.setLocale("xx");
    expect(i18n.listLocales()).toContainEqual({ code: "xx", label: "Pseudo" });
    expect(i18n.t("media.play")).toBe("[xx] Play");
    expect(i18n.t("media.pause")).toBe("[xx] Pause");
    expect(i18n.t("dock.top")).toBe("Back to top");
  });

  it("lets a pack override English copy", () => {
    i18n.registerLocale("en", "English", { "bento.bio.name": "Site Owner" });
    expect(i18n.t("bento.bio.name")).toBe("Site Owner");
    expect(i18n.t("media.play")).toBe("Play");
  });
});

describe("reactive updates", () => {
  it("notifies subscribers on switch, on active-pack changes and stops after unsubscribe", async () => {
    const seen: string[] = [];
    const unsubscribe = i18n.onLocaleChange((locale) => seen.push(`${locale}:${i18n.t("media.play")}`));
    i18n.registerLocale("xx", "Pseudo", { "media.play": "[xx] Play" });
    expect(seen).toEqual([]);
    await i18n.setLocale("xx");
    await i18n.setLocale("xx");
    i18n.registerLocale("xx", "Pseudo", { "media.play": "[xx] Play 2" });
    unsubscribe();
    await i18n.setLocale("en");
    expect(seen).toEqual(["xx:[xx] Play", "xx:[xx] Play 2"]);
  });

  it("isolates a throwing subscriber from the others", async () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const after = vi.fn();
    i18n.onLocaleChange(() => { throw new Error("boom"); });
    i18n.onLocaleChange(after);
    i18n.registerLocale("xx", "Pseudo", {});
    await i18n.setLocale("xx");
    expect(after).toHaveBeenCalledWith("xx");
    error.mockRestore();
  });

  it("notifies registry listeners when locales are added", () => {
    const listener = vi.fn();
    i18n.onLocalesChange(listener);
    i18n.registerLocale("xx", "Pseudo", {});
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("re-translates declarative markup", async () => {
    const root = document.createElement("div");
    root.innerHTML = `<span data-i18n="media.play"></span>
      <svg data-i18n-attr="aria-label:bento.featured.latencyChart;title:dock.top" data-i18n-params='{"from":2,"to":1}'></svg>`;
    i18n.translateDom(root);
    expect(root.querySelector("span")!.textContent).toBe("Play");
    expect(root.querySelector("svg")!.getAttribute("aria-label")).toBe("Latency trending down from 2 to 1 milliseconds");
    i18n.registerLocale("xx", "Pseudo", { "media.play": "<b>[xx]</b>", "dock.top": "[xx] Top" });
    await i18n.setLocale("xx");
    i18n.translateDom(root);
    expect(root.lang).toBe("xx");
    expect(root.querySelector("span")!.textContent).toBe("<b>[xx]</b>");
    expect(root.querySelector("b")).toBeNull();
    expect(root.querySelector("svg")!.getAttribute("title")).toBe("[xx] Top");
  });

  it("updates a mounted component live and renders the locale selector", async () => {
    const { SettingsPanel } = await import("../../src/enhancements/settings");
    const settings = {
      schema: 1 as const, backgroundMode: "wallpaper" as const, carousel: true, video: true,
      overlayOpacity: 0.4, effects: true, live2d: false,
    };
    const panel = new SettingsPanel(settings, () => undefined);
    const title = () => document.querySelector(".ff-settings-panel > strong")!.textContent;
    const row = document.querySelector<HTMLElement>(".ff-settings-locale")!;
    expect(title()).toBe("Atmosphere & Motion");
    expect(row.hidden).toBe(true);

    i18n.registerLocale("xx", "Pseudo", { "settings.title": "[xx] Atmosphere" });
    expect(row.hidden).toBe(false);
    const select = row.querySelector("select")!;
    expect([...select.options].map((option) => option.textContent)).toEqual(["English (en)", "Pseudo (xx)"]);

    select.value = "xx";
    select.dispatchEvent(new Event("change"));
    await vi.waitFor(() => expect(title()).toBe("[xx] Atmosphere"));
    expect(document.querySelector(".ff-settings-trigger")!.getAttribute("aria-label")).toBe("Visual & Motion Settings");
    expect(localStorage.getItem("blog-locale:v1")).toBe("xx");
    panel.destroy();
  });
});

describe("external locale packs", () => {
  const pack = { code: "xx", label: "Pseudo", messages: { "media.play": "[xx] Play" } };

  it("registers window.__NOVA_LOCALES__ packs and exposes the runtime API", async () => {
    window.__NOVA_LOCALES__ = { xx: { label: "Pseudo", messages: { "media.play": "[xx] Play" } } };
    await i18n.initI18n();
    expect(i18n.listLocales()).toContainEqual({ code: "xx", label: "Pseudo" });
    expect(i18n.getLocale()).toBe("en");
    expect(await window.__NOVA_I18N__!.setLocale("xx")).toBe(true);
    expect(window.__NOVA_I18N__!.t("media.play")).toBe("[xx] Play");
  });

  it("fetches build-time packs lazily, only when selected", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify(pack)));
    vi.stubGlobal("fetch", fetcher);
    await i18n.initI18n({ locales: [{ code: "xx", label: "Pseudo", url: "/custom/locales/xx.json" }] });
    expect(fetcher).not.toHaveBeenCalled();
    expect(i18n.listLocales()).toContainEqual({ code: "xx", label: "Pseudo" });
    expect(await i18n.setLocale("xx")).toBe(true);
    expect(fetcher).toHaveBeenCalledWith("/custom/locales/xx.json", expect.anything());
    expect(i18n.t("media.play")).toBe("[xx] Play");
    await i18n.setLocale("en");
    await i18n.setLocale("xx");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("restores the saved locale (or the configured default) before rendering", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify(pack))));
    localStorage.setItem("blog-locale:v1", "xx");
    await i18n.initI18n({ locales: [{ code: "xx", label: "Pseudo", url: "/custom/locales/xx.json" }] });
    expect(i18n.getLocale()).toBe("xx");
    expect(i18n.t("media.play")).toBe("[xx] Play");

    vi.resetModules();
    localStorage.clear();
    const fresh: I18n = await import("../../src/enhancements/i18n");
    await fresh.initI18n({ defaultLocale: "xx", locales: [{ code: "xx", label: "Pseudo", url: "/x.json" }] });
    expect(fresh.getLocale()).toBe("xx");
    // A default is not a visitor choice, so it is not persisted.
    expect(localStorage.getItem("blog-locale:v1")).toBeNull();
  });

  it("keeps the current locale when a pack fails to load", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("", { status: 404 })));
    i18n.registerRemoteLocale({ code: "xx", label: "Pseudo", url: "/missing.json" });
    expect(await i18n.setLocale("xx")).toBe(false);
    expect(i18n.getLocale()).toBe("en");
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it("lets the latest switch win while a pack is still downloading", async () => {
    let release!: (response: Response) => void;
    vi.stubGlobal("fetch", vi.fn(() => new Promise<Response>((resolve) => { release = resolve; })));
    i18n.registerRemoteLocale({ code: "xx", label: "Pseudo", url: "/slow.json" });
    i18n.registerLocale("zz", "Other", {});
    const slow = i18n.setLocale("xx");
    expect(await i18n.setLocale("zz")).toBe(true);
    release(new Response(JSON.stringify(pack)));
    expect(await slow).toBe(false);
    expect(i18n.getLocale()).toBe("zz");
  });
});
