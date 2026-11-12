import { expect, test } from "@playwright/test";

for (const width of [1365, 393]) {
  test(`default-lightweight rendering and intact controls at ${width}px`, async ({ page, baseURL }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    const modelRequests: string[] = [];
    page.on("request", r => {
      if (/live2dcubismcore|\/live2d\/|\/assets\/live2d-|\/assets\/index-/.test(r.url())) modelRequests.push(r.url());
    });
    // Verify that critical navigation works even with all external CDNs blocked.
    await page.route(/https:\/\/(?:cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com)\//, route => route.abort());
    await page.goto(baseURL!);
    await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
    await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(0);
    expect(modelRequests).toEqual([]);
    await expect(page.locator("#nav-right .fa-dice-d6 svg")).toBeVisible();
    await expect(page.locator("#nav-right .fa-magnifying-glass svg")).toBeVisible();
    const cover = page.locator(".post_cover").first();
    await cover.scrollIntoViewIfNeeded();
    await expect.poll(() => cover.locator("img").evaluate((i: HTMLImageElement) => i.naturalWidth)).toBeGreaterThan(0);
    const cardBox = (await cover.locator("..").boundingBox())!;
    const coverBox = (await cover.boundingBox())!;
    const imageBox = (await cover.locator("img").boundingBox())!;
    expect(imageBox.height).toBeCloseTo(coverBox.height, 0);
    expect(imageBox.width).toBeCloseTo(coverBox.width, 0);
    if (width > 768) expect(Math.abs(cardBox.height - coverBox.height)).toBeLessThanOrEqual(2);
    await page.screenshot({ path: testInfo.outputPath("home.png") });
    await page.goto(new URL("posts/tak1na-speedtest/", baseURL!).href);
    const footer = page.locator("#footer_mini_logo");
    await expect(footer).toHaveAttribute("type", "button");
    await footer.evaluate(e => e.scrollIntoView({ behavior: "instant", block: "center" }));
    // Images have real sources without waiting for theme lazyload initialization.
    await expect.poll(() => footer.locator("img").evaluate((i: HTMLImageElement) => i.naturalWidth)).toBeGreaterThan(0);
    for (const theme of ["light", "dark"]) {
      await page.evaluate(theme => document.documentElement.setAttribute("data-theme", theme), theme);
      const buttonBox = (await footer.boundingBox())!;
      const imgBox = (await footer.locator("img").boundingBox())!;
      expect(buttonBox.width).toBeCloseTo(buttonBox.height, 1);
      expect(imgBox.width).toBeCloseTo(imgBox.height, 1);
      expect(imgBox.height).toBeCloseTo(buttonBox.height, 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await page.screenshot({ path: testInfo.outputPath("footer.png"), fullPage: true });
    await footer.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(10);
  });
}
