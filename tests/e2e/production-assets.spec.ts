import { expect, test } from "@playwright/test";

for (const width of [1365, 393]) {
  test(`production images load after fresh navigation at ${width}px`, async ({ page, baseURL }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    if (baseURL?.startsWith("http://127.0.0.1:")) {
      // Static preview has no API containers; keep API validation for production.
      await page.route("**/blog/api/music/playlist", route => route.fulfill({ json: { tracks: [] } }));
    }
    const failures: string[] = [];
    const origin = new URL(baseURL!).origin;
    page.on("response", response => {
      if (response.url().startsWith(`${origin}/blog/`) && response.status() >= 400) {
        failures.push(`${response.status()} ${response.url()}`);
      }
    });
    page.on("pageerror", error => failures.push(error.message));

    for (let pass = 0; pass < 2; pass++) {
      const response = await page.goto(baseURL!);
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
      const selectors = width > 768 ? [".post_bg", 'img[alt="头像"]'] : [".post_bg"];
      for (const selector of selectors) {
        const img = page.locator(selector).first();
        await img.scrollIntoViewIfNeeded();
        await expect.poll(() => img.evaluate((element: HTMLImageElement) =>
          element.complete && element.naturalWidth > 0
          && !element.currentSrc.includes("placeholder")
          && (!element.dataset.lazySrc || element.getAttribute("src") === element.dataset.lazySrc),
        )).toBe(true);
      }
    }
    await page.screenshot({ path: testInfo.outputPath("images-loaded.png"), fullPage: true });
    expect(failures).toEqual([]);
  });
}
