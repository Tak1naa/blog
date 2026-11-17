import { expect, test } from "@playwright/test";

test("mobile filters have no overlapping desktop More action", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one mobile-width regression");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [613, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/archives/", "/categories/Infrastructure/"]) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
      await expect(page.locator("#category-bar .category-bar-more-group")).toBeHidden();
      expect(await page.locator("#category-bar-items").evaluate(element => getComputedStyle(element).overflowX)).toBe("auto");
    }
  }
});

test("archive filtering and PJAX retain the shared article-section layout", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one low-memory PJAX workflow");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 613, height: 900 });
  await page.goto("/archives/");
  await expect(page.locator(".archive-page-item")).toHaveCount(1);
  await expect(page.locator("#archives-page > .home-category-bar")).toHaveCount(1);
  const year = page.locator('.archive-year-button[data-year="2026"]');
  await year.click();
  await expect(year).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".archive-page-item")).toHaveCount(1);
  await year.focus();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(year).toHaveCSS("outline-width", "2px");
  await page.locator('#category-bar a[href^="/categories/"]').first().click();
  await expect(page.locator("#category #category-bar")).toHaveCount(1);
  await expect(page.locator("#category .recent-post-item")).toHaveCount(1);
  await page.locator('#footer a[href="/tags/"]').click();
  await expect(page.locator("#page > .category-lists")).toBeVisible();
  await page.locator("#page .tag-cloud-list a").first().click();
  await expect(page.locator("#tag #tag-page-tags")).toHaveCount(1);
  await page.locator('#footer a[href="/archives/"]').click();
  await expect(page.locator("#archives-page > .home-category-bar")).toHaveCount(1);
  await expect(page.locator(".archive-page-item")).toHaveCount(1);
  await expect(page.locator(".ff-music-player")).toHaveCount(1);
});

test("archives categories and tags have transparent inner filter surfaces", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "serial surface-state matrix");
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const routes = ["/archives/", "/archives/2026/", "/archives/2026/11/", "/categories/", "/categories/Infrastructure/", "/tags/", ...["Networking", "Campus", "Infrastructure"].map(tag => `/tags/${tag}/`)];
  const selectors = ".home-category-bar, #category-bar, #category-bar-items, #tag-page-tags, #page > .category-lists, #page > .category-lists > .tag-cloud-list, .archive-page-shell";
  for (const width of [1440, 613, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ["light", "dark"]) {
      for (const route of routes) {
        await page.goto(route);
        await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
        await page.evaluate(theme => {
          document.documentElement.setAttribute("data-theme", theme);
          for (const animation of document.getAnimations()) {
            if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
          }
        }, theme);
        const surfaces = page.locator(selectors);
        expect(await surfaces.count()).toBeGreaterThan(0);
        await surfaces.first().hover();
        const styles = await surfaces.evaluateAll(elements => elements.map(element => {
          const style = getComputedStyle(element);
          return { background: style.backgroundColor, image: style.backgroundImage, border: style.borderTopWidth, shadow: style.boxShadow, blur: style.backdropFilter };
        }));
        for (const style of styles) {
          expect(style.background, `${route} ${width} ${theme}`).toBe("rgba(0, 0, 0, 0)");
          expect(style.image).toBe("none");
          expect(style.border).toBe("0px");
          expect(style.shadow).toBe("none");
          expect(style.blur).toBe("none");
        }
        const outer = page.locator("#page, #category, #tag").first();
        expect(await outer.evaluate(element => getComputedStyle(element).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
        const mainBox = (await page.locator("#content-inner").boundingBox())!;
        expect((await outer.boundingBox())!.y, `${route} top alignment`).toBeCloseTo(mainBox.y, 0);
        const controls = page.locator("#category-bar .category-bar-item a, #tag-page-tags a, #page > .category-lists .tag-cloud-list a, .archive-year-button");
        const controlStyles = await controls.evaluateAll(elements => elements.map(element => {
          const style = getComputedStyle(element);
          return { height: element.getBoundingClientRect().height, size: style.fontSize, line: style.lineHeight, margin: style.margin, radius: style.borderRadius };
        }));
        expect(controlStyles.length).toBeGreaterThan(0);
        for (const style of controlStyles) {
          expect(style.height, `${route} control height`).toBeCloseTo(44, 0);
          expect(style.size).toBe("16px");
          expect(style.line).toBe("24px");
          expect(style.margin).toBe("0px");
          expect(style.radius).toBe("10px");
        }
        if (width === 613 && theme === "dark" && ["/archives/", "/categories/Infrastructure/", "/tags/Networking/"].includes(route)) {
          await page.screenshot({ path: testInfo.outputPath(`surface-${route.replaceAll("/", "-")}.png`) });
        }
      }
    }
  }
});

test("category and tag landing pages share responsive spacing in both themes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one serial landing-page matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 908, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ["light", "dark"]) {
      for (const route of ["/categories/", "/tags/"]) {
        await page.goto(route);
        await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
        const values = await page.evaluate(theme => {
          document.documentElement.setAttribute("data-theme", theme);
          for (const animation of document.getAnimations()) {
            if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
          }
          const panel = document.querySelector("#page")!;
          const title = panel.querySelector(".page-title")!;
          const cloud = panel.querySelector(".tag-cloud-list")!;
          const links = [...cloud.querySelectorAll("a")];
          return {
            inset: parseFloat(getComputedStyle(panel).paddingTop),
            gap: cloud.getBoundingClientRect().top - title.getBoundingClientRect().bottom,
            buttonGap: parseFloat(getComputedStyle(cloud).gap),
            bottomInset: panel.getBoundingClientRect().bottom - cloud.getBoundingClientRect().bottom,
            heights: links.map(a => a.getBoundingClientRect().height),
            hrefs: links.map(a => a.getAttribute("href")),
            overflow: document.documentElement.scrollWidth > innerWidth,
          };
        }, theme);
        const gap = width < 768 ? 16 : 24;
        expect(values.inset).toBe(gap);
        expect(values.gap).toBeCloseTo(gap, 0);
        expect(values.buttonGap).toBe(8);
        expect(values.bottomInset).toBeCloseTo(gap + 1, 0);
        for (const height of values.heights) expect(height).toBeGreaterThanOrEqual(44);
        expect(values.hrefs.length).toBe(route === "/categories/" ? 2 : 5);
        for (const href of values.hrefs) expect(href).toMatch(new RegExp(`^${route}`));
        expect(values.overflow).toBe(false);
        await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll("/", "")}-${theme}-${width}.png`) });
      }
    }
  }
  await page.locator("#page .tag-cloud-list a").first().click();
  await expect(page.locator("#tag #recent-posts .recent-post-item")).toHaveCount(1);
});

test("listing gaps are consistent across every listing route and viewport", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "serial responsive matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const routes = ["/", "/categories/Infrastructure/", ...["Networking", "Campus", "Infrastructure"].map(tag => `/tags/${tag}/`), "/archives/", "/archives/2026/", "/archives/2026/11/"];
  for (const width of [1440, 908, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
      const gaps = await page.evaluate(() => {
        for (const animation of document.getAnimations()) {
          if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
        }
        const distance = (a: Element, b: Element) => b.getBoundingClientRect().top - a.getBoundingClientRect().bottom;
        const cards = [...document.querySelectorAll("#recent-posts > .recent-post-item")];
        const bar = document.querySelector("#tag-page-tags") || document.querySelector("#category-bar");
        const result: number[] = [];
        if (cards.length && bar) result.push(distance(bar, cards[0]!));
        for (let i = 1; i < cards.length; i++) result.push(distance(cards[i - 1]!, cards[i]!));
        const pager = document.querySelector("#recent-posts > #pagination");
        if (cards.length && pager?.getBoundingClientRect().height) result.push(distance(cards.at(-1)!, pager));
        const toolbar = document.querySelector(".archive-page-section-toolbar");
        const list = document.querySelector(".archive-page-section-list");
        if (toolbar && list) result.push(distance(toolbar, list));
        const rows = [...document.querySelectorAll(".archive-page-item")];
        for (let i = 1; i < rows.length; i++) result.push(distance(rows[i - 1]!, rows[i]!));
        return result;
      });
      expect(gaps.length, route).toBeGreaterThan(0);
      for (const gap of gaps) expect(gap, `${route} at ${width}px`).toBeCloseTo(width < 768 ? 16 : 24, 0);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
    await page.screenshot({ path: testInfo.outputPath(`listing-${width}.png`), fullPage: true });
  }
});
