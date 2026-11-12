import { expect, test } from "@playwright/test";

test("subpath assets, desktop Live2D and persistent PJAX navigation", async ({ page, baseURL }, testInfo) => {
  const escapes: string[] = [];
  const errors: string[] = [];
  const origin = new URL(baseURL!).origin;
  page.on("request", request => {
    const url = new URL(request.url());
    if (url.origin === origin && !url.pathname.startsWith("/blog/")) escapes.push(url.pathname);
  });
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(baseURL!);
  await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(0);
  await page.locator(".ff-settings-trigger").click();
  await page.locator('[data-setting="live2d"]').check();
  await page.locator(".ff-settings-trigger").click();
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 25_000 });
  await expect(page.locator(".ff-hero-copy strong")).toHaveText("Takina Ying");
  await page.locator(".ff-live2d-shell canvas").evaluate(canvas => { canvas.setAttribute("data-persistent", "yes"); });
  for (const route of ["archives/", "tags/", "about/", "archives/"]) {
    await page.locator(`#footer a[href="/blog/${route}"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`/blog/${route}$`));
    await expect(page.locator(".ff-music-player")).toHaveCount(1);
    await expect(page.locator('.ff-live2d-shell canvas[data-persistent="yes"]')).toHaveCount(1);
  }
  await page.locator('#category-bar a[href^="/blog/categories/"]').first().click();
  await expect(page.locator("#category .recent-post-item")).toHaveCount(1);
  await page.locator('#footer a[href="/blog/archives/"]').click();
  await page.locator('.archive-page-item[href="/blog/posts/tak1na-speedtest/"]').click();
  await expect(page.locator("#post")).toBeVisible();
  await expect(page.locator("#post")).toContainText("鉴于南航搭建了自己的测速节点");
  await expect(page.locator('#post a[href="https://tak1na.top/speedtest/"]').first()).toHaveText("开始测速");
  expect(escapes).toEqual([]);
  expect(errors).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath("article.png"), fullPage: true });
});

test("published content replaces both demo posts in all indexes", async ({ request, baseURL }) => {
  const root = new URL(baseURL!);
  for (const path of ["", "archives/", "categories/自建服务/", "tags/测速/", "search.xml"]) {
    const response = await request.get(new URL(path, root).href);
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("Tak1na 自建测速");
    expect(text).not.toMatch(/posts\/(?:hello-solitude|dynamic-experience-guide)\//);
  }
  for (const slug of ["hello-solitude", "dynamic-experience-guide"]) {
    const response = await request.get(new URL(`posts/${slug}/`, root).href);
    expect(response.status()).toBe(404);
  }
});

test("HTTPS ingress redirects preserve public origin without internal port", async ({ request, baseURL }) => {
  test.skip(!baseURL?.startsWith("https://"), "requires deployed HTTPS reverse proxy");
  const root = new URL(baseURL!);
  for (const path of ["/blog", "/blog/archives"]) {
    const response = await request.get(new URL(path, root).href, { maxRedirects: 0 });
    expect([301, 308]).toContain(response.status());
    const location = response.headers().location;
    expect(location).toBe(`${path}/`);
    expect(new URL(location!, root).origin).toBe(root.origin);
  }
});

test("subpath mobile reduced-motion avoids model/video downloads", async ({ page, baseURL }, testInfo) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const forbidden: string[] = [];
  page.on("request", request => {
    if (/model3\.json|live2dcubismcore|texture_00|\.mp4|\.webm/.test(request.url())) forbidden.push(request.url());
  });
  await page.goto(baseURL!);
  await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
  await expect(page.locator(".ff-music-player")).toHaveCount(1);
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(0);
  expect(forbidden).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(393);
  await page.screenshot({ path: testInfo.outputPath("mobile.png"), fullPage: true });
});
