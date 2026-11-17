import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page, baseURL }) => {
  test.skip(!baseURL?.endsWith("/blog/"), "Run with the Pages configuration and artifact");
  await page.route("**/blog/custom/config.json", async route => {
    const response = await route.fetch(); const config = await response.json();
    config.effects.sakura = false; config.effects.typewriter = false;
    config.background.wallpapers = config.background.wallpapers.slice(0, 1);
    await route.fulfill({ response, json: config });
  });
  await page.addInitScript(() => {
    localStorage.setItem("blog-locale:v1", "zh-CN");
    localStorage.setItem("blog-experience:v1", JSON.stringify({ schema: 1, effects: true, live2d: true, carousel: false }));
    localStorage.setItem("takina-companion:v1", JSON.stringify({ schema: 1, random: false, roam: false, autoReturn: true, city: "", tasks: [] }));
  });
});

test("Pages preserves local music, companion video and PJAX without backend requests", async ({ page, baseURL }, info) => {
  test.skip(info.project.name !== "desktop");
  const errors: string[] = [], api: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("request", request => { if (new URL(request.url()).pathname.startsWith("/blog/api/")) api.push(request.url()); });
  await page.goto(baseURL!);
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 25000 });
  const shell = page.locator(".ff-live2d-shell"), canvas = shell.locator("canvas");
  await canvas.focus(); await page.keyboard.press("Escape"); await canvas.hover();
  await expect(shell).toHaveAttribute("data-expression", "neutral");
  await canvas.focus(); await page.keyboard.press("Shift+F10");
  await page.locator('[data-companion-action="stretch"]').click();
  await expect(shell).toHaveClass(/is-video-playing/, { timeout: 10000 });
  await expect(shell).not.toHaveClass(/is-video-playing/, { timeout: 11000 });
  const audio = page.waitForResponse(response => response.url().includes("/blog/media/music/") && [200, 206].includes(response.status()));
  await page.locator('.ff-dock [data-dock="play"]').click(); await audio;
  await expect(page.locator(".ff-music-player")).toHaveClass(/is-playing/);
  await canvas.evaluate(node => node.dataset.pagesProbe = "original");
  await page.evaluate(() => (window as unknown as { Solitude: { navigate(url: string): void } }).Solitude.navigate("/blog/posts/speedtest-architecture/"));
  await expect(page).toHaveURL(/\/blog\/posts\/speedtest-architecture\/$/, { timeout: 25000 });
  await expect(page.locator(".ff-pages-comments a")).toHaveAttribute("href", "https://tak1na.top/blog/posts/speedtest-architecture/#post-comment");
  await expect(page.locator(".ff-pages-comments a")).toHaveText("前往服务器版参与评论");
  await expect(page.locator("#waline-wrap")).toHaveCount(0);
  await expect(canvas).toHaveAttribute("data-pages-probe", "original");
  await page.locator("[data-visit-stats]").scrollIntoViewIfNeeded();
  await page.screenshot({ path: info.outputPath("pages-footer.png") });
  expect(api).toEqual([]); expect(errors).toEqual([]);
});

test("Pages mobile reduced motion keeps the footer and avoids model or video downloads", async ({ page, baseURL }, info) => {
  test.skip(info.project.name !== "mobile"); await page.emulateMedia({ reducedMotion: "reduce" });
  const forbidden: string[] = [];
  page.on("request", request => { if (/model3\.json|live2dcubismcore|texture_00|\.mp4|\.webm/.test(request.url())) forbidden.push(request.url()); });
  await page.goto(baseURL!); await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(0);
  await expect(page.locator("[data-visit-stats]")).toHaveCount(1);
  await page.locator("[data-visit-stats]").scrollIntoViewIfNeeded();
  await page.screenshot({ path: info.outputPath("pages-mobile.png") });
  expect(forbidden).toEqual([]);
});
