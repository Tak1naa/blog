import { expect, test, type Page } from "@playwright/test";

const fixture = "http://visits.test";
async function fixtureSite(page: Page, preview: string): Promise<void> {
  // Every fixture-domain request is fulfilled from our loopback build; no
  // production domain is contacted or counted by these browser checks.
  await page.route(`${fixture}/**`, async route => {
    const url = new URL(route.request().url());
    const response = await route.fetch({ url: new URL(url.pathname + url.search, preview).href });
    if (url.pathname === "/custom/config.json") {
      const config = await response.json(); config.effects.enabled = false;
      config.background.wallpapers = config.background.wallpapers.slice(0, 1);
      await route.fulfill({ response, json: config });
    } else await route.fulfill({ response });
  });
  await page.addInitScript(() => localStorage.setItem("blog-locale:v1", "zh-CN"));
  await page.emulateMedia({ reducedMotion: "reduce" });
}

test("footer visits show shared counts, survive PJAX and translate without extra counting", async ({ page, baseURL }, info) => {
  await fixtureSite(page, baseURL!); let requests = 0;
  await page.route("https://cdn.busuanzi.cc/api.php", route => {
    requests++;
    return route.fulfill({ json: { busuanzi_today_pv: 40 + requests, busuanzi_site_pv: 12805 + requests } });
  });
  await page.goto(fixture + "/");
  const stats = page.locator("[data-visit-stats]");
  await expect(stats).toHaveAttribute("data-status", "ready");
  await expect(stats).toContainText("今日访问次数"); await expect(stats).toContainText("累计访问次数");
  await expect(stats.locator("[data-visit-today]")).toHaveText("41");
  await expect(stats.locator("[data-visit-total]")).toHaveText("12,806");
  expect(await stats.evaluate(node => node === node.parentElement?.lastElementChild)).toBe(true);
  await stats.scrollIntoViewIfNeeded();
  expect(await stats.evaluate(node => {
    const rect = node.getBoundingClientRect(), viewport = window.visualViewport!;
    return rect.left >= viewport.offsetLeft - 1 && rect.right <= viewport.offsetLeft + viewport.width + 1 &&
      rect.top >= viewport.offsetTop - 1 && rect.bottom <= viewport.offsetTop + viewport.height + 1;
  })).toBe(true);
  for (const theme of ["dark", "light"]) {
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    // Mobile visualViewport can pan independently on this existing page.
    // A viewport capture includes the actual footer; element clips do not.
    await page.screenshot({ path: info.outputPath(`footer-visits-${theme}.png`) });
  }
  expect(await stats.evaluate(node => node.scrollWidth <= node.clientWidth + 1)).toBe(true);
  await page.evaluate(() => window.__NOVA_I18N__?.setLocale("en"));
  await expect(stats).toContainText("Today’s visits"); expect(requests).toBe(1);
  await page.evaluate(() => (window as unknown as { Solitude: { navigate(url: string): void } }).Solitude.navigate("/posts/speedtest-architecture/"));
  await expect(page).toHaveURL(/\/posts\/speedtest-architecture\/$/);
  await expect(stats.locator("[data-visit-today]")).toHaveText("42");
  await expect(stats).toHaveCount(1); expect(requests).toBe(2);
});

test("footer visits handle provider failure and exclude localhost previews", async ({ page, baseURL }) => {
  await fixtureSite(page, baseURL!); let requests = 0;
  await page.route("https://cdn.busuanzi.cc/api.php", route => { requests++; return route.fulfill({ status: 503, json: { error: "offline" } }); });
  await page.goto(fixture + "/");
  const stats = page.locator("[data-visit-stats]");
  await expect(stats).toHaveAttribute("data-status", "unavailable");
  await expect(stats.locator("[data-visit-total]")).toHaveText("—");
  await page.goto(baseURL!);
  await expect(stats).toHaveAttribute("data-status", "local");
  await expect(stats.locator("[data-visit-today]")).toHaveText("—"); expect(requests).toBe(1);
});
