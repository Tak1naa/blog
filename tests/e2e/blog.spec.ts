import { expect, test } from "@playwright/test";

// Rig-specific regressions explicitly opt in; ordinary visitors now default off.
test.beforeEach(async ({ page }, testInfo) => {
  if (!/Live2D|Solitude layout separates/.test(testInfo.title)) return;
  await page.addInitScript(() => localStorage.setItem("blog-experience:v1", JSON.stringify({ schema: 1, effects: true, live2d: true })));
});

test("tag navigation cards and pagination have responsive breathing room", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one serial responsive tag regression");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 613, 393]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/tags/%E9%85%8D%E7%BD%AE/");
    await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
    const panel = page.locator("#tag"), tags = panel.locator("#tag-page-tags");
    const card = panel.locator(".recent-post-item").first(), pagination = panel.locator("#pagination");
    await card.scrollIntoViewIfNeeded();
    await page.evaluate(() => {
      for (const animation of document.getAnimations()) {
        if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
      }
    });
    const p = (await panel.boundingBox())!, t = (await tags.boundingBox())!;
    const c = (await card.boundingBox())!;
    const gap = width < 768 ? 16 : 24;
    expect(t.y - p.y).toBeGreaterThanOrEqual(gap);
    expect(c.y - t.y - t.height).toBeGreaterThanOrEqual(gap);
    if (width >= 768) {
      const n = (await pagination.boundingBox())!;
      expect(n.y - c.y - c.height).toBeGreaterThanOrEqual(gap);
      expect(p.y + p.height - n.y - n.height).toBeGreaterThanOrEqual(gap);
    } else {
      await expect(pagination).toBeHidden();
      expect(p.y + p.height - c.y - c.height).toBeGreaterThanOrEqual(gap);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await page.screenshot({ path: testInfo.outputPath(`tag-spacing-${width}.png`) });
  }
});

test("Live2D head angles stay continuous when hover and drag ownership changes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop head motion regression");
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  const shell = page.locator(".ff-live2d-shell"), canvas = shell.locator("canvas");
  await page.evaluate(() => {
    const samples: number[][] = [];
    (window as unknown as { headSamples: number[][] }).headSamples = samples;
    const sample = () => {
      samples.push((document.querySelector<HTMLElement>(".ff-live2d-shell")?.dataset.headPose ?? "0,0,0").split(",").map(Number));
      if (samples.length < 180) requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await page.mouse.move(10, 10);
  await page.waitForTimeout(300);
  await canvas.hover();
  await page.mouse.down();
  await page.mouse.move(1050, 400, { steps: 10 });
  await page.waitForTimeout(400);
  await page.mouse.up();
  await page.mouse.move(10, 10);
  await page.waitForTimeout(1400);
  const samples = await page.evaluate(() => (window as unknown as { headSamples: number[][] }).headSamples);
  expect(samples.length).toBeGreaterThan(20);
  const largestStep = Math.max(...samples.slice(1).flatMap((pose, index) => pose.map((value, axis) => Math.abs(value - samples[index]![axis]!))));
  expect(largestStep).toBeLessThan(3);
  expect(samples.every(([x, y, z]) => Math.abs(x!) <= 6.01 && Math.abs(y!) <= 5.01 && Math.abs(z!) <= 9)).toBe(true);
  await shell.screenshot({ path: testInfo.outputPath("first-edition-face.png") });
});

test("category article banners have space inside the outer glass panel", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one serial responsive category regression");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 613, 393]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/categories/%E9%9A%8F%E7%AC%94/");
    const panel = page.locator("#category");
    const card = panel.locator(".recent-post-item").first();
    await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
    await card.scrollIntoViewIfNeeded();
    await expect(card.locator("img")).toHaveAttribute("src", "/media/takina/aquarium.jpg");
    await page.waitForTimeout(600);
    const outer = (await panel.boundingBox())!;
    const inner = (await card.boundingBox())!;
    const spacing = width < 768 ? 16 : 24;
    expect(inner.y - outer.y).toBeGreaterThanOrEqual(spacing);
    expect(inner.x - outer.x).toBeGreaterThanOrEqual(spacing);
    expect(outer.x + outer.width - inner.x - inner.width).toBeGreaterThanOrEqual(spacing);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await page.screenshot({ path: testInfo.outputPath(`category-spacing-${width}.png`) });
  }
});

test("home hero is present before configuration loads without shifting content", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "first-paint mobile regression");
  let release = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.route("**/custom/config.json", async route => { await gate; await route.continue(); });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".ff-hero-copy")).toHaveCount(1);
  const before = await page.locator("#content-inner").boundingBox();
  release();
  await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
  expect(Math.abs((await page.locator("#content-inner").boundingBox())!.y - before!.y)).toBeLessThan(2);
  await expect(page.locator(".ff-hero-copy")).toHaveCount(1);
});

test("article navigation stays above comments in document flow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one serial responsive regression");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 908, 393]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/posts/tak1na-speedtest/");
    const nav = page.locator("#post #pagination.pagination-post");
    const comments = page.locator("#post-comment");
    await comments.scrollIntoViewIfNeeded();
    // Also exercise the theme observer's floating-window state explicitly.
    await nav.evaluate(element => element.classList.add("show-window"));
    const before = await nav.boundingBox();
    const commentBox = await comments.boundingBox();
    expect(before).not.toBeNull();
    expect(commentBox).not.toBeNull();
    expect(before!.y + before!.height).toBeLessThanOrEqual(commentBox!.y);
    expect(await nav.evaluate(element => getComputedStyle(element).position)).toBe("static");
    // Scroll upward: at the end of a short article there may be <100px left
    // below comments, so downward scrolling can legitimately be clamped.
    await page.evaluate(() => window.scrollTo({ top: Math.max(0, window.scrollY - 100), behavior: "instant" }));
    await expect.poll(async () => (await nav.boundingBox())!.y).toBeGreaterThan(before!.y + 50);
    await expect(nav.locator("a").first()).toHaveAttribute("href", /\/posts\//);
    await page.screenshot({ path: testInfo.outputPath(`comment-navigation-${width}.png`) });
  }
});

test("centered bilingual hero retains attribution and intentional round cover", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const hero = page.locator(".ff-hero-copy");
  await expect(hero.locator("strong")).toHaveText("Takina Ying");
  await expect(hero.locator(".ff-hero-character")).toHaveCount(0);
  await expect(hero.locator(".ff-quote-ja")).toHaveText("真実はいつもひとつ！！");
  await expect(hero.locator(".ff-quote-zh")).toHaveText("真相永远只有一个！");
  await expect(hero.locator(".ff-quote-source")).toHaveAttribute("href", "https://www.conan-portal.com/");
  const values = await hero.evaluate((element) => {
    const ja = element.querySelector(".ff-quote-ja")!;
    const zh = element.querySelector(".ff-quote-zh")!;
    const link = element.querySelector(".ff-quote-source")!;
    return {align: getComputedStyle(element).textAlign, jaSize: parseFloat(getComputedStyle(ja).fontSize),
      zhSize: parseFloat(getComputedStyle(zh).fontSize), jaBottom: ja.getBoundingClientRect().bottom,
      zhTop: zh.getBoundingClientRect().top, linkTop: link.getBoundingClientRect().top,
      zhBottom: zh.getBoundingClientRect().bottom, events: getComputedStyle(link).pointerEvents};
  });
  expect(values.align).toBe("center");
  expect(values.jaSize).toBeGreaterThan(values.zhSize);
  expect(values.jaBottom).toBeLessThanOrEqual(values.zhTop);
  expect(values.zhBottom).toBeLessThanOrEqual(values.linkTop);
  expect(values.events).toBe("auto");
  await expect(page.locator(".ff-music-cover")).toHaveCSS("border-radius", "50%");
  await expect(page.locator("#site-name")).toHaveCSS("border-radius", "10px");
  await page.locator("#site-name").hover();
  await expect(page.locator("#site-name")).toHaveCSS("border-radius", "10px");
  await expect(page.locator("#footer_deal .deal_link")).toHaveCount(0);
});

test("the requested Dog Days track replaces the local demo audio", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop audio smoke test");
  await page.goto("/");
  const player = page.locator("#ff-music-player");
  await expect(player.locator(".ff-music-meta strong")).toHaveText("Dog Days");
  const audioResponse = page.waitForResponse((response) =>
    response.url().endsWith("/media/music/dog-days.mp3"));
  await player.locator('[data-action="toggle"]').click();
  expect((await audioResponse).status()).toBe(200);
  await expect(player).toHaveClass(/is-playing/);
});

test("Solitude layout separates title, banner and article cards", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop layout test");
  await page.goto("/");
  await expect(page.locator("#ff-media-background")).toHaveCount(1);
  await expect(page.locator("#ff-music-player")).toHaveCount(1);
  await expect(page.locator(".ff-settings")).toHaveCount(1);

  const hero = await page.locator(".ff-hero-copy").boundingBox();
  const banner = await page.locator("#home_center").boundingBox();
  const cards = await page.locator(".recent-post-item").first().boundingBox();
  const sidebar = await page.locator("#aside-content").boundingBox();
  expect(hero).not.toBeNull();
  expect(banner).not.toBeNull();
  expect(cards).not.toBeNull();
  expect(sidebar).not.toBeNull();
  expect((hero?.y ?? 0) + (hero?.height ?? 0)).toBeLessThan(banner?.y ?? 0);
  expect((banner?.y ?? 0) + (banner?.height ?? 0)).toBeLessThan(cards?.y ?? 0);
  expect((sidebar?.x ?? 0)).toBeLessThan(cards?.x ?? 0);
  await expect(page.locator(".ff-hero-copy strong")).toHaveText("Takina Ying");

  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  await page.locator(".ff-live2d-shell canvas").evaluate(canvas => Object.assign(canvas, { __persistentModel: true }));
  await page.evaluate(() => Object.assign(window, { __pjaxMarker: "kept" }));
  for (let index = 0; index < 20; index += 1) {
    const target = index % 2 === 0 ? "/about/" : "/";
    await page.evaluate((url) => {
      (window as Window & { Solitude?: { navigate?: (path: string) => void } }).Solitude?.navigate?.(url);
    }, target);
    await page.waitForURL(`**${target}`);
  }
  await expect(page.locator("#ff-media-background")).toHaveCount(1);
  await expect(page.locator("#ff-music-player")).toHaveCount(1);
  await expect(page.locator(".ff-hero-copy")).toHaveCount(1);
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(1);
  expect(await page.locator(".ff-live2d-shell canvas").evaluate(canvas =>
    (canvas as HTMLCanvasElement & { __persistentModel?: boolean }).__persistentModel)).toBe(true);
  expect(await page.evaluate(() => (window as Window & { __pjaxMarker?: string }).__pjaxMarker)).toBe("kept");
});

test("music aligns with the sidebar and text panels stay translucent", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop visual layout test");
  await page.goto("/");
  await expect(page.locator(".ff-waves")).toHaveCount(0);

  const sidebar = page.locator("#aside-content .card-widget").first();
  const player = page.locator("#ff-music-player");
  await expect.poll(async () => {
    const cardBox = await sidebar.boundingBox();
    const playerBox = await player.boundingBox();
    return Math.abs((cardBox?.x ?? 0) - (playerBox?.x ?? 0));
  }).toBeLessThan(2);
  const cardBox = await sidebar.boundingBox();
  const playerBox = await player.boundingBox();
  expect(Math.abs((cardBox?.width ?? 0) - (playerBox?.width ?? 0))).toBeLessThan(2);

  await page.locator("html").evaluate((html) => html.setAttribute("data-theme", "dark"));
  for (const selector of [".home-center-content", ".home-center-right", ".recent-post-item", ".card-widget", "#ff-music-player"]) {
    const background = await page.locator(selector).first().evaluate((element) =>
      getComputedStyle(element).backgroundColor,
    );
    expect(background, `${selector} should have a translucent background`).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);
  }

  await page.goto("/posts/tak1na-speedtest/");
  await page.locator("html").evaluate((html) => html.setAttribute("data-theme", "dark"));
  for (const selector of [
    "#post",
    "#post blockquote",
    "#post figure.highlight",
    "#post .highlight-tools",
    "#post p code",
    "#post .post-copyright",
  ]) {
    const background = await page.locator(selector).first().evaluate((element) =>
      getComputedStyle(element).backgroundColor,
    );
    expect(background, `${selector} should have a translucent background`).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);
  }
  await expect.poll(() => page.locator("#post h2").first().evaluate((element) =>
    getComputedStyle(element).color,
  )).toBe("rgb(241, 245, 255)");
});

test("scrolled navigation keeps the back-to-top arrow centered", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop navigation test");
  await page.goto("/");
  await page.evaluate(() => window.scrollTo(0, 900));
  const button = page.locator("#nav-totop");
  await expect(button).toBeVisible();
  await button.hover();
  const buttonBox = await button.boundingBox();
  const arrowBox = await button.locator("i.fa-arrow-up").boundingBox();
  expect(buttonBox).not.toBeNull();
  expect(arrowBox).not.toBeNull();
  const buttonCenter = (buttonBox?.x ?? 0) + (buttonBox?.width ?? 0) / 2;
  const arrowCenter = (arrowBox?.x ?? 0) + (arrowBox?.width ?? 0) / 2;
  expect(Math.abs(buttonCenter - arrowCenter)).toBeLessThan(2);

  await page.locator("html").evaluate((html) => html.setAttribute("data-theme", "dark"));
  for (const selector of ['#nav [id="blog_name"]', "#nav-right", "#nav-totop .totopbtn"]) {
    const background = await page.locator(selector).evaluate((element) => {
      const style = getComputedStyle(element);
      return { color: style.backgroundColor, image: style.backgroundImage };
    });
    expect(background.image, `${selector} should not use the theme's black gradient`).toBe("none");
    expect(background.color, `${selector} should be translucent`).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);
  }
  const pageNameBackground = await page.locator("#page-name").evaluate((element) => {
    const style = getComputedStyle(element, "::before");
    return { color: style.backgroundColor, image: style.backgroundImage };
  });
  expect(pageNameBackground.image).toBe("none");
  expect(pageNameBackground.color).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);

  for (const selector of ['#nav [id="blog_name"]', "#page-name", "#nav-right", "#nav-totop .totopbtn"]) {
    await expect.poll(() => page.locator(selector).evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        border: style.borderTopWidth,
        radius: Number.parseFloat(style.borderTopLeftRadius),
        shadow: style.boxShadow,
      };
    })).toEqual({ border: "0px", radius: 10, shadow: "none" });
  }
});

test("upward scroll keeps the central navigation translucent on home and post", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop navigation test");
  for (const route of ["/", "/posts/tak1na-speedtest/"]) {
    for (const theme of ["light", "dark"]) {
      await page.goto(route);
      await page.locator("html").evaluate((html, value) => html.setAttribute("data-theme", value), theme);
      await page.evaluate(() => window.scrollTo({ top: 1000, behavior: "instant" }));
      await expect(page.locator("#page-header")).toHaveClass(/nav-fixed/);
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
      await page.evaluate(() => window.scrollTo({ top: 400, behavior: "instant" }));
      await expect(page.locator("#page-header")).toHaveClass(/nav-visible/);

      await expect.poll(() => page.locator("#menus > .menus_items").evaluate((element) =>
        getComputedStyle(element).backgroundColor,
      )).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);

      const menu = await page.locator("#menus > .menus_items").evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          color: style.backgroundColor,
          image: style.backgroundImage,
          radius: Number.parseFloat(style.borderTopLeftRadius),
          border: style.borderTopWidth,
          shadow: style.boxShadow,
        };
      });
      expect(menu.image, `${route} ${theme}: no black gradient`).toBe("none");
      expect(menu.color, `${route} ${theme}: glass surface`).toMatch(/^rgba\(.+, 0\.[0-9]+\)$/);
      expect(menu.radius).toBe(10);
      expect(menu.border).toBe("0px");
      expect(menu.shadow).toBe("none");
    }
  }
});

test("article navigation and sidebar copy remain readable", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop reading layout test");
  await page.goto("/posts/tak1na-speedtest/");
  const navTextColor = await page.locator("#blog_name a").evaluate((element) => getComputedStyle(element).color);
  expect(navTextColor).toBe("rgb(36, 51, 75)");
  const name = page.locator(".card-info .bottom-group .name");
  const nameHeight = await name.evaluate((element) => element.getBoundingClientRect().height);
  const lineHeight = await name.evaluate((element) => Number.parseFloat(getComputedStyle(element).lineHeight));
  expect(nameHeight).toBeLessThanOrEqual(lineHeight + 2);
  const descriptionOpacity = await page.locator(".card-info .bottom-group .desc").evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).opacity),
  );
  expect(descriptionOpacity).toBeGreaterThanOrEqual(0.85);
});

test("light and dark themes use the blue-violet palette", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop palette test");
  await page.goto("/");
  for (const [theme, accent] of [["light", "#4a56c9"], ["dark", "#a1a6ff"]] as const) {
    await page.locator("html").evaluate((html, value) => html.setAttribute("data-theme", value), theme);
    const currentAccent = await page.locator("html").evaluate((element) =>
      getComputedStyle(element).getPropertyValue("--efu-theme").trim(),
    );
    expect(currentAccent).toBe(accent);
    await expect.poll(() => page.locator("#category-bar .category-bar-item.select a").evaluate((element) =>
      getComputedStyle(element).backgroundColor,
    )).toBe(theme === "light" ? "rgba(255, 255, 255, 0.88)" : "rgba(161, 166, 255, 0.36)");
  }
  await page.goto("/posts/tak1na-speedtest/");
  await page.locator("html").evaluate((html) => html.setAttribute("data-theme", "dark"));
  const stringColor = await page.locator("#post figure.highlight .string").first().evaluate((element) =>
    getComputedStyle(element).color,
  );
  expect(stringColor).toBe("rgb(198, 181, 255)");
});

test("archive category buttons share the glass surface without a gradient", async ({ page }) => {
  await page.goto("/archives/");
  await expect(page.locator("#ff-media-background")).toHaveCount(1);

  for (const theme of ["light", "dark"]) {
    await page.locator("html").evaluate((html, value) => html.setAttribute("data-theme", value), theme);
    for (const selector of ["#category-bar-home a", "#自建服务 a"]) {
      const button = page.locator(selector);
      await expect.poll(() => page.evaluate((target) => {
        const button = document.querySelector(target);
        const nav = document.querySelector('#nav [id="blog_name"]');
        return Boolean(button && nav && getComputedStyle(button).backgroundColor === getComputedStyle(nav).backgroundColor);
      }, selector)).toBe(true);
      const style = await button.evaluate((element) => {
        const current = getComputedStyle(element);
        const overlay = getComputedStyle(element, "::after");
        return {
          image: current.backgroundImage,
          radius: current.borderTopLeftRadius,
          shadow: current.boxShadow,
          overlay: overlay.content,
        };
      });
      expect(style).toEqual({ image: "none", radius: "10px", shadow: "none", overlay: "none" });
    }
    const selected = page.locator("#archives a");
    await expect.poll(() => selected.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe(
      theme === "light" ? "rgba(255, 255, 255, 0.88)" : "rgba(161, 166, 255, 0.36)",
    );
    expect(await selected.evaluate((element) => getComputedStyle(element).boxShadow)).toBe("none");
  }
});

test("settings slider stays on one line and music progress clears controls", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop controls layout test");
  await page.goto("/");
  await page.locator(".ff-settings-trigger").click();
  const label = page.locator(".ff-settings-panel label").filter({ hasText: "背景遮罩" });
  const textBox = await label.locator("span").boundingBox();
  const sliderBox = await label.locator('input[type="range"]').boundingBox();
  const labelBox = await label.boundingBox();
  expect(labelBox?.height ?? 0).toBeLessThan(40);
  expect((sliderBox?.x ?? 0) - ((textBox?.x ?? 0) + (textBox?.width ?? 0))).toBeGreaterThanOrEqual(8);
  expect((sliderBox?.x ?? 0) + (sliderBox?.width ?? 0)).toBeLessThanOrEqual(
    (labelBox?.x ?? 0) + (labelBox?.width ?? 0) + 1,
  );

  const progress = await page.locator(".ff-music-progress").boundingBox();
  const controls = await page.locator(".ff-music-controls").boundingBox();
  expect((controls?.y ?? 0) - ((progress?.y ?? 0) + (progress?.height ?? 0))).toBeGreaterThanOrEqual(3);
  const player = await page.locator("#ff-music-player").boundingBox();
  for (const selector of [".ff-music-progress", ".ff-music-controls", ".ff-music-volume"]) {
    const box = await page.locator(selector).boundingBox();
    expect((box?.x ?? 0) + (box?.width ?? 0), `${selector} should fit inside the player`).toBeLessThanOrEqual(
      (player?.x ?? 0) + (player?.width ?? 0) - 5,
    );
  }
});

test("Live2D neck does not follow head and hair tips deform independently", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop Cubism integration");
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  const result = await page.evaluate(async () => {
    interface NativeModel {
      parameters: { ids: string[]; values: Float32Array; defaultValues: Float32Array };
      drawables: { ids: string[]; vertexPositions: Float32Array[] };
      update(): void;
      release(): void;
    }
    const core = (window as unknown as { Live2DCubismCore: {
      Moc: { fromArrayBuffer(buffer: ArrayBuffer): { _release(): void } };
      Model: { fromMoc(moc: unknown): NativeModel };
    } }).Live2DCubismCore;
    const response = await fetch("/media/live2d/takina-chibi/takina-chibi.moc3");
    const moc = core.Moc.fromArrayBuffer(await response.arrayBuffer());
    const model = core.Model.fromMoc(moc);
    const snapshot = (id: string) => {
      const vertices = model.drawables.vertexPositions[model.drawables.ids.indexOf(id)];
      if (!vertices) throw new Error(`Missing drawable: ${id}`);
      return Array.from(vertices);
    };
    const reset = () => { model.parameters.values.set(model.parameters.defaultValues); model.update(); };
    const set = (id: string, value: number) => { model.parameters.values[model.parameters.ids.indexOf(id)] = value; model.update(); };
    const change = (before: number[], after: number[]) => Math.max(...before.map((value, index) => Math.abs(value - after[index]!)));
    reset();
    const neck = snapshot("ArtMeshNeck"), face = snapshot("ArtMeshFace");
    set("ParamAngleX", 30);
    set("ParamAngleZ", 12);
    const neckDelta = change(neck, snapshot("ArtMeshNeck"));
    const faceDelta = change(face, snapshot("ArtMeshFace"));
    reset();
    const hair = snapshot("ArtMeshBackHair"), body = snapshot("ArtMeshTopwear");
    set("ParamHairBack", 15);
    const hairDelta = change(hair, snapshot("ArtMeshBackHair"));
    const bodyDelta = change(body, snapshot("ArtMeshTopwear"));
    model.release(); moc._release();
    return { neckDelta, faceDelta, hairDelta, bodyDelta };
  });
  expect(result.neckDelta).toBeLessThan(0.00001);
  expect(result.bodyDelta).toBeLessThan(0.00001);
  expect(result.faceDelta).toBeGreaterThan(0.0001);
  expect(result.hairDelta).toBeGreaterThan(0.0001);
});

test("Live2D cycles hover expressions and resets on leave", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop model interaction");
  const loaded = new Set<string>();
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("response", response => { if (response.ok() && response.url().endsWith(".exp3.json")) loaded.add(response.url()); });
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  const shell = page.locator(".ff-live2d-shell");
  await shell.locator("canvas").hover();
  for (const name of ["smile", "wink", "curious", "sleepy", "laugh", "surprised", "pout", "speaking"]) {
    await expect(shell).toHaveAttribute("data-expression", name, { timeout: 5000 });
    await page.waitForTimeout(650); // Capture the actual faded-in pose, not its previous expression.
    await page.screenshot({ path: testInfo.outputPath(`expression-${name}.png`) });
  }
  await page.mouse.move(10, 300);
  await expect(shell).toHaveAttribute("data-expression", "neutral");
  await page.waitForTimeout(3800);
  await expect(shell).toHaveAttribute("data-expression", "neutral");
  expect(loaded.size).toBe(10);
  expect(errors).toEqual([]);
});

test("Live2D moves when its canvas is dragged directly", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop Live2D test");
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("html"), errors.join("\n")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  const shell = page.locator(".ff-live2d-shell");
  const canvas = shell.locator("canvas");
  await expect(canvas).toHaveCount(1);
  await expect(page.locator(".ff-live2d-drag")).toHaveCount(0);
  await expect(shell).toBeVisible();
  await expect(shell).toHaveAttribute("data-hair-light", "masked");
  await expect(shell).toHaveAttribute("data-doll-rig", "soft-joints");
  await expect.poll(() => shell.evaluate(element => Number(getComputedStyle(element).opacity))).toBe(1);
  const before = await shell.boundingBox();
  const box = await canvas.boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move((box?.x ?? 0) + 100, (box?.y ?? 0) + 100);
  await page.mouse.down();
  await page.mouse.move((box?.x ?? 0) + 20, (box?.y ?? 0) + 40, { steps: 8 });
  await expect(shell).toHaveClass(/is-carried/);
  await expect.poll(() => canvas.evaluate(element => getComputedStyle(element).transform)).not.toBe("none");
  await expect.poll(() => canvas.evaluate(element => Math.abs(new DOMMatrix(getComputedStyle(element).transform).b))).toBeGreaterThan(0.35);
  await expect.poll(() => shell.getAttribute("data-limb-pose").then(value => (value ?? "").split(",").filter(number => Math.abs(Number(number)) > 1).length)).toBe(4);
  await page.screenshot({ path: testInfo.outputPath("takina-carried.png") });
  await page.mouse.up();
  const after = await shell.boundingBox();
  expect((after?.x ?? 0)).toBeLessThan((before?.x ?? 0) - 40);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("takina-live2d-position-v1"))).not.toBeNull();
  expect(errors).toEqual([]);
  await expect(shell).not.toHaveClass(/is-settling/, { timeout: 5000 });
  await expect.poll(() => canvas.evaluate(element => getComputedStyle(element).transform)).toBe("none");
  await page.screenshot({ path: testInfo.outputPath("takina-live2d.png") });
  await page.locator(".ff-settings-trigger").click();
  await page.locator('[data-setting="effects"]').uncheck();
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(0);
  await expect(page.locator("html")).not.toHaveClass(/ff-live2d-ready/);
  await page.locator('[data-setting="effects"]').check();
  await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 20_000 });
  await expect(page.locator(".ff-live2d-shell canvas")).toHaveCount(1);
});

test("design review screenshots cover both themes and three viewport sizes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one serial screenshot matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 908, 393]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/posts/tak1na-speedtest/"]) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let top = 0; top < height; top += 700) {
        await page.evaluate(value => window.scrollTo(0, value), top);
        await page.waitForTimeout(100);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);
      for (const theme of ["light", "dark"]) {
        await page.locator("html").evaluate((html, value) => html.setAttribute("data-theme", value), theme);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        await page.screenshot({ path: testInfo.outputPath(`${width}-${route === "/" ? "home" : "post"}-${theme}.png`), fullPage: true });
      }
    }
  }
});

test("mobile does not request video or Live2D assets", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile policy test");
  const forbidden: string[] = [];
  page.on("request", (request) => {
    if (/flower\.mp4|model\.json|model3\.json|live2dcubismcore|texture_\d+\.png|sakura\.worker/.test(request.url())) forbidden.push(request.url());
  });
  await page.goto("/");
  await page.waitForTimeout(1000);
  expect(forbidden).toEqual([]);
  await expect(page.locator("video.ff-background-video")).toHaveCount(0);
  await expect(page.locator(".ff-sakura-canvas")).toHaveCount(0);
});

test("narrow screens separate the hero and keep floating controls apart", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile layout test");
  for (const width of [320, 393]) {
    await page.setViewportSize({ width, height: 852 });
    await page.goto("/");
    const hero = await page.locator(".ff-hero-copy").boundingBox();
    const banner = await page.locator("#home_center").boundingBox();
    expect((banner?.y ?? 0) - ((hero?.y ?? 0) + (hero?.height ?? 0))).toBeGreaterThan(0);
    const player = await page.locator("#ff-music-player").boundingBox();
    const settings = await page.locator(".ff-settings-trigger").boundingBox();
    expect((player?.x ?? 0) + (player?.width ?? 0)).toBeLessThan(width - 70);
    expect((settings?.y ?? 0) + (settings?.height ?? 0)).toBeLessThan(player?.y ?? 0);
  }
});

test("tablet player is compact without a sidebar", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "tablet layout test");
  await page.setViewportSize({ width: 820, height: 1000 });
  await page.goto("/");
  const player = await page.locator("#ff-music-player").boundingBox();
  const settings = await page.locator(".ff-settings-trigger").boundingBox();
  expect(player?.width ?? 0).toBeLessThanOrEqual(240);
  expect(player?.height ?? 0).toBeLessThanOrEqual(70);
  expect((settings?.y ?? 0) + (settings?.height ?? 0)).toBeLessThan(player?.y ?? 0);
});

test("mobile article exposes its content in the first viewport", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile reading layout test");
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto("/posts/tak1na-speedtest/");
  const header = await page.locator("#page-header.post-bg").boundingBox();
  const article = await page.locator("#post").boundingBox();
  expect(header?.height ?? 0).toBeLessThanOrEqual(350);
  expect(article?.y ?? 0).toBeLessThan(500);
  await page.locator("html").evaluate((html) => html.setAttribute("data-theme", "dark"));
  await expect.poll(() => page.locator("#page-header.post-bg").evaluate((element) =>
    getComputedStyle(element, "::before").backgroundColor,
  )).toBe("rgb(52, 70, 120)");
  const titleColor = await page.locator("#post-info .post-title").evaluate((element) => getComputedStyle(element).color);
  expect(titleColor).toBe("rgb(255, 255, 255)");
});

test("reduced motion keeps a static title and disables decoration", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop reduced motion test");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".ff-hero-copy strong")).toHaveText("Takina Ying");
  await expect(page.locator(".ff-sakura-canvas")).toHaveCount(0);
  await expect(page.locator("video.ff-background-video")).toHaveCount(0);
  await expect(page.locator(".ff-hero-copy span.ff-typing-subtitle")).toHaveCount(0);
});
