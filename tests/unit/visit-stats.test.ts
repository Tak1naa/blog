// @vitest-environment jsdom
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { registerLocale, setLocale } from "../../src/enhancements/i18n";
import { parseVisitCounts, VisitStats } from "../../src/enhancements/visit-stats";

function renderFooter(enabled = true): (html: string) => string {
  let render = (html: string) => html;
  runInNewContext(readFileSync("scripts/visit-stats.js", "utf8"), { hexo: {
    locals: { get: () => ({ visit_stats: { enabled } }) },
    extend: { filter: { register: (_: string, filter: typeof render) => { render = filter; } } },
  } });
  return render;
}

let stats: VisitStats;
beforeEach(async () => {
  await setLocale("en");
  document.body.innerHTML = renderFooter()('<footer id="footer"><div>Copyright</div></footer>');
  vi.stubGlobal("location", new URL("https://visits.test/"));
  stats = new VisitStats();
});
afterEach(() => { stats.destroy(); vi.unstubAllGlobals(); document.body.replaceChildren(); });

describe("shared footer visits", () => {
  it("accepts real zero and integer strings, rejects missing, unsafe or inconsistent counts", () => {
    expect(parseVisitCounts({ busuanzi_today_pv: 0, busuanzi_site_pv: "12806" })).toEqual({ today: 0, total: 12806 });
    for (const today of [null, -1, "", "1.5", "<img>", true, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
      expect(parseVisitCounts({ busuanzi_today_pv: today, busuanzi_site_pv: 100 })).toBeUndefined();
    }
    expect(parseVisitCounts({ busuanzi_today_pv: 4, busuanzi_site_pv: 3 })).toBeUndefined();
    expect(parseVisitCounts({ error: "unavailable" })).toBeUndefined();
  });

  it("renders exactly once at the bottom and respects the configuration switch", () => {
    const input = '<footer id="footer"><div>Copyright</div></footer>';
    const output = renderFooter()(input);
    expect(output).toContain('data-visit-today>—</span>');
    expect(output).toMatch(/data-visit-stats[\s\S]*<\/div><\/footer>$/);
    expect(renderFooter()(output)).toBe(output);
    expect(renderFooter(false)(input)).toBe(input);
  });

  it("counts each navigation once, strips sensitive URL data and only reformats on locale changes", async () => {
    vi.stubGlobal("location", new URL("https://visits.test/?token=private#secret"));
    const request = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ busuanzi_today_pv: 41, busuanzi_site_pv: "12806" }) });
    vi.stubGlobal("fetch", request);
    stats.refresh(); stats.refresh();
    await vi.waitFor(() => expect(document.querySelector("[data-visit-stats]")?.getAttribute("data-status")).toBe("ready"));
    expect(request).toHaveBeenCalledTimes(1);
    expect(JSON.parse(request.mock.calls[0]![1].body)).toEqual({ url: "https://visits.test/", referrer: "" });
    expect(request.mock.calls[0]![1]).toMatchObject({ credentials: "omit", referrerPolicy: "no-referrer" });
    expect(document.querySelector("[data-visit-total]")?.textContent).toBe("12,806");
    registerLocale("xx", "Fixture", { "visits.today": "[xx] Today" }); await setLocale("xx");
    expect(document.querySelector('[data-i18n="visits.today"]')?.textContent).toBe("[xx] Today");
    expect(request).toHaveBeenCalledTimes(1);
    vi.stubGlobal("location", new URL("https://visits.test/posts/article/")); stats.refresh(); stats.refresh();
    await vi.waitFor(() => expect(request).toHaveBeenCalledTimes(2));
  });

  it("does not count local previews or turn provider failures into zero", async () => {
    const request = vi.fn().mockRejectedValue(new Error("offline")); vi.stubGlobal("fetch", request);
    vi.stubGlobal("location", new URL("http://127.0.0.1:4014/")); stats.refresh();
    expect(request).not.toHaveBeenCalled();
    expect(document.querySelector("[data-visit-stats]")?.getAttribute("data-status")).toBe("local");
    vi.stubGlobal("location", new URL("https://visits.test/")); stats.refresh();
    await vi.waitFor(() => expect(document.querySelector("[data-visit-stats]")?.getAttribute("data-status")).toBe("unavailable"));
    expect(document.querySelector("[data-visit-total]")?.textContent).toBe("—");
    expect(document.querySelector("[data-visit-today]")?.textContent).toBe("—");
  });
});
