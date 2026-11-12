import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

test("localhost serves the current versioned enhancement assets", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one asset contract check");
  const html = await (await request.get("http://localhost:4000/archives/")).text();
  for (const extension of ["css", "js"]) {
    const file = `enhancements.${extension}`;
    const bytes = readFileSync(`public/custom/${file}`);
    const hash = createHash("sha256").update(bytes).digest("hex");
    expect(html).toContain(`/custom/${file}?v=${hash.slice(0, 12)}`);
    const response = await request.get(`http://localhost:4000/custom/${file}?v=${hash.slice(0, 12)}`);
    expect(response.ok()).toBe(true);
    expect(createHash("sha256").update(await response.body()).digest("hex")).toBe(hash);
  }
});

test("ordinary page text and comments have responsive panel insets on localhost", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "serial responsive inset matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 613, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ["light", "dark"]) {
      for (const route of ["about", "links", "music", "credits"]) {
        await page.goto(`http://localhost:4000/${route}/`);
        await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
        await page.evaluate(theme => {
          document.documentElement.setAttribute("data-theme", theme);
          for (const animation of document.getAnimations()) {
            if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
          }
        }, theme);
        const panel = (await page.locator("#page").boundingBox())!;
        const content = (await page.locator("#page > .article-container").boundingBox())!;
        const inset = width < 768 ? 16 : 24;
        expect(content.x - panel.x, `${route} left inset`).toBeGreaterThanOrEqual(inset);
        expect(content.y - panel.y, `${route} top inset`).toBeGreaterThanOrEqual(inset);
        expect(panel.x + panel.width - content.x - content.width).toBeGreaterThanOrEqual(inset);
        const comments = page.locator("#page > #post-comment");
        if (await comments.count()) {
          const box = (await comments.boundingBox())!;
          expect(box.x - panel.x).toBeGreaterThanOrEqual(inset);
          expect(box.y - content.y - content.height).toBeGreaterThanOrEqual(inset);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        if (theme === "dark" && route !== "credits") await page.screenshot({ path: testInfo.outputPath(`${route}-${width}.png`), fullPage: true });
      }
    }
  }
});

test("Live2D rendered Cubism head follows the pointer across the left half of the page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop actual Cubism parameter check");
  await page.addInitScript(() => localStorage.setItem("blog-experience:v1", JSON.stringify({ schema: 1, effects: true, live2d: true })));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:4000/");
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  // A dark backdrop also exposes opaque white cutout corners in the screenshots.
  await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
  const readAngle = () => page.evaluate(() => {
    const app = window.__fireflyEnhancements as unknown as {
      live2d: { instance: { l2d: { getParams(): Array<{ id: string; value: number }> } } };
    };
    return app.live2d.instance.l2d.getParams().find(parameter => parameter.id === "ParamAngleX")!.value;
  });
  await page.mouse.move(15, 180);
  await expect.poll(readAngle).toBeLessThan(-5);
  const left = await readAngle();
  await page.mouse.move(650, 180);
  await expect.poll(readAngle).toBeGreaterThan(left + 2);
  const middle = await readAngle();
  await page.locator(".ff-live2d-shell").screenshot({ path: testInfo.outputPath("look-left.png") });
  await page.mouse.move(1430, 180);
  await expect.poll(readAngle).toBeGreaterThan(4);
  expect(middle).toBeLessThan(0);
  await page.locator(".ff-live2d-shell").screenshot({ path: testInfo.outputPath("look-right.png") });
});
