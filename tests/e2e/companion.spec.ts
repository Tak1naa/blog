import { expect, test, type Page } from "@playwright/test";
import { quietCompanionBackdrop } from "./companion-setup";

const shell = (page: Page) => page.locator(".ff-live2d-shell");
const canvas = (page: Page) => shell(page).locator("canvas");
async function menu(page: Page): Promise<void> {
  await canvas(page).focus(); await page.keyboard.press("Shift+F10");
  await expect(page.getByRole("menu")).toBeVisible();
}
async function choose(page: Page, action: string): Promise<void> { await menu(page); await page.locator(`[data-companion-action="${action}"]`).click(); }
async function open(page: Page): Promise<void> {
  await page.goto("/"); await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 25000 });
  await expect(shell(page)).toHaveCSS("opacity", "1");
}

test.beforeEach(async ({ page }) => {
  await quietCompanionBackdrop(page);
  await page.addInitScript(() => {
    localStorage.setItem("blog-experience:v1", JSON.stringify({ schema: 1, effects: true, live2d: true, carousel: false }));
    localStorage.setItem("blog-locale:v1", "zh-CN");
    if (!localStorage.getItem("takina-companion:v1")) localStorage.setItem("takina-companion:v1", JSON.stringify({ schema: 1, autoReturn: true, random: false, roam: false, city: "", tasks: [] }));
  });
});

test("companion hover keeps neutral eyes and preserves manually selected wink", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await open(page);
  await canvas(page).focus(); await page.keyboard.press("Escape");
  const expression = () => shell(page).evaluate(node => ({ action: (node as HTMLElement).dataset.action, expression: (node as HTMLElement).dataset.expression }));
  for (let entry = 0; entry < 3; entry++) {
    await page.mouse.move(10, 10); await canvas(page).hover();
    expect(await expression()).toEqual({ action: "idle", expression: "neutral" });
    await page.mouse.move(10, 10);
    expect(await expression()).toEqual({ action: "idle", expression: "neutral" });
  }
  await choose(page, "wink");
  await expect(shell(page)).toHaveAttribute("data-expression", "wink");
  await page.mouse.move(10, 10); await canvas(page).hover();
  expect(await expression()).toEqual({ action: "wink", expression: "wink" });
  await canvas(page).focus(); await page.keyboard.press("Escape");
  await expect(shell(page)).toHaveAttribute("data-expression", "neutral");
  await page.mouse.move(10, 10); await canvas(page).hover();
  expect(await expression()).toEqual({ action: "idle", expression: "neutral" });
});

test("companion video actions use real alpha, reset, and keep one model", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); const errors: string[] = []; page.on("pageerror", error => errors.push(error.message));
  await open(page);
  for (const action of ["stretch", "think", "look"]) {
    await choose(page, action);
    await expect(shell(page)).toHaveClass(/is-video-playing/, { timeout: 10000 });
    await expect(shell(page)).toHaveAttribute("data-video-action", action);
    expect(await page.locator(".ff-companion-video").evaluate((video: HTMLVideoElement) => {
      const probe = document.createElement("canvas"); probe.width = probe.height = 1;
      const ctx = probe.getContext("2d")!; ctx.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
      return ctx.getImageData(0, 0, 1, 1).data[3];
    })).toBe(0);
    await expect(canvas(page)).toHaveCount(1);
    if (action === "stretch") await page.screenshot({ path: info.outputPath("transparent-stretch.png") });
    await expect(shell(page)).not.toHaveClass(/is-video-playing/, { timeout: 11000 });
    await expect(shell(page)).toHaveAttribute("data-action", "idle");
  }
  expect(errors).toEqual([]);
});

test("companion random actions and PJAX navigation preserve a single companion", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await page.clock.install(); await open(page);
  await choose(page, "random"); await page.clock.fastForward(27_000);
  await expect(shell(page)).not.toHaveAttribute("data-action", "idle");
  await menu(page); await page.keyboard.press("Escape");
  await canvas(page).evaluate(node => node.dataset.persistenceProbe = "original");
  await page.evaluate(() => (window as unknown as { Solitude: { navigate(url: string): void } }).Solitude.navigate("/posts/speedtest-architecture/"));
  await expect(page).toHaveURL(/\/posts\/speedtest-architecture\/$/);
  await expect(canvas(page)).toHaveCount(1); await expect(canvas(page)).toHaveAttribute("data-persistence-probe", "original");
  await expect(page.locator(".ff-companion-tools")).toHaveCount(1);
});

test("companion menu supports keyboard, themes, rest and interruption", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await open(page);
  await canvas(page).click({ button: "right" }); await expect(page.getByRole("menu")).toBeVisible(); await page.keyboard.press("Escape");
  for (const theme of ["light", "dark"]) {
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await menu(page); await page.keyboard.press("ArrowDown");
    await expect(page.locator('[data-companion-action="think"]')).toBeFocused();
    const box = (await page.getByRole("menu").boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0); expect(box.y + box.height).toBeLessThanOrEqual(960);
    await page.screenshot({ path: info.outputPath(`menu-${theme}.png`) });
    await page.keyboard.press("Escape"); await expect(canvas(page)).toBeFocused();
  }
  await choose(page, "think"); await expect(shell(page)).toHaveClass(/is-video-playing/, { timeout: 10000 });
  await canvas(page).click(); await expect(shell(page)).not.toHaveClass(/is-video-playing/);
  await expect.poll(() => canvas(page).evaluate(node => getComputedStyle(node).transform)).not.toBe("none");
  await choose(page, "sleep"); await expect(shell(page)).toHaveClass(/is-sleeping/);
  await canvas(page).click(); await expect(shell(page)).not.toHaveClass(/is-sleeping/);
  await choose(page, "tools"); await expect(page.getByRole("dialog")).toBeVisible();
  await page.screenshot({ path: info.outputPath("tools-dark.png") });
  await page.keyboard.press("Escape"); await expect(page.getByRole("dialog")).toBeHidden();
});

test("companion throws, returns to Dock, and persists free positions when requested", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await open(page);
  const dragTo = async (x: number, y: number) => {
    const box = (await canvas(page).boundingBox())!;
    await page.mouse.move(box.x + box.width * 0.62, box.y + box.height * 0.44);
    await page.mouse.down(); await page.mouse.move(x, y, { steps: 8 });
    await expect(shell(page)).toHaveClass(/is-carried/); await page.mouse.up(); await page.mouse.move(10, 300);
  };
  await dragTo(500, 350);
  await expect(shell(page)).toHaveClass(/is-perched/, { timeout: 8000 });
  await choose(page, "autoReturn"); await dragTo(450, 350);
  await expect.poll(() => page.evaluate(() => localStorage.getItem("takina-live2d-position-v1")), { timeout: 8000 }).not.toBeNull();
  await expect(shell(page)).not.toHaveClass(/is-perched/);
  const before = (await shell(page).boundingBox())!;
  expect(before.x).toBeGreaterThanOrEqual(0); expect(before.y).toBeGreaterThanOrEqual(0);
  expect(before.x + before.width).toBeLessThanOrEqual(1441); expect(before.y + before.height).toBeLessThanOrEqual(961);
  await page.reload(); await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 25000 });
  const after = (await shell(page).boundingBox())!;
  expect(Math.abs(before.x - after.x)).toBeLessThan(3); expect(Math.abs(before.y - after.y)).toBeLessThan(3);
  await choose(page, "home"); await expect(shell(page)).toHaveClass(/is-perched/);
});

test("companion tasks stay local, escape markup, support edits and due reminders", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await page.clock.install(); await open(page); await choose(page, "tools");
  const panel = page.getByRole("dialog");
  await panel.getByLabel("待办内容").fill("<script>literal task</script>");
  await panel.getByLabel("到期时间（可选）").fill("2020-01-01T12:00");
  await panel.getByRole("button", { name: "添加", exact: true }).click();
  await expect(panel.locator(".ff-companion-tasks")).toContainText("<script>literal task</script>");
  await expect(panel.locator("script")).toHaveCount(0);
  await panel.getByRole("button", { name: "编辑", exact: true }).click(); await panel.getByLabel("待办内容").fill("Read one article");
  await panel.getByRole("button", { name: "保存修改", exact: true }).click();
  await page.clock.fastForward(31_000);
  await expect(page.locator(".ff-companion-bubble")).toContainText("1 项待办已到期");
  await panel.getByRole("checkbox").check(); await expect(panel.locator(".is-done")).toContainText("Read one article");
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("takina-companion:v1")!).tasks);
  expect(saved[0].done).toBe(true); expect(saved[0].title).toBe("Read one article");
  await panel.getByRole("button", { name: "删除", exact: true }).click(); await expect(panel).toContainText("还没有待办");
});

test("companion weather requests are explicit, select cities, and show failures", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); const requests: string[] = [];
  page.on("request", request => { if (request.url().includes("open-meteo.com")) requests.push(request.url()); });
  await page.route("https://geocoding-api.open-meteo.com/**", route => route.fulfill({ json: { results: [{ name: "北京", country: "中国", latitude: 39.9, longitude: 116.4 }] } }));
  await page.route("https://api.open-meteo.com/**", route => route.fulfill({ json: { current: { temperature_2m: 12, apparent_temperature: 10, relative_humidity_2m: 40, wind_speed_10m: 8, weather_code: 0, time: "2026-11-16T12:00" } } }));
  await open(page); await choose(page, "tools"); const panel = page.getByRole("dialog");
  expect(requests).toEqual([]);
  await panel.getByLabel("城市", { exact: true }).fill("北京"); await panel.getByRole("button", { name: "查询天气", exact: true }).click();
  await panel.getByRole("button", { name: "北京 · 中国" }).click();
  await expect(panel).toContainText("北京：晴，12.0°C"); await expect(panel).toContainText("湿度 40%");
  expect(requests).toHaveLength(2);
  await page.route("https://geocoding-api.open-meteo.com/**", route => route.fulfill({ status: 503, body: "unavailable" }));
  await panel.getByRole("button", { name: "查询天气", exact: true }).click(); await expect(panel).toContainText("天气查询失败");
});

test("companion video failure falls back and toggling off disposes every owned UI", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop"); await page.route("**/media/companion/*.webm", route => route.abort());
  await open(page); await choose(page, "stretch"); await expect(page.locator(".ff-companion-bubble")).toContainText("暂不可用");
  await expect(shell(page)).not.toHaveClass(/is-video-playing/); await expect(canvas(page)).toBeVisible();
  await page.locator(".ff-settings-trigger").click(); await page.locator('[data-setting="live2d"]').uncheck();
  await expect(canvas(page)).toHaveCount(0); await expect(page.locator(".ff-companion-tools")).toHaveCount(0);
  await expect(page.locator(".ff-companion-menu")).toHaveCount(0); await expect(page.locator(".ff-companion-video")).toHaveCount(0);
  await page.locator('[data-setting="live2d"]').check(); await expect(page.locator("html")).toHaveClass(/ff-live2d-ready/, { timeout: 25000 });
  await expect(canvas(page)).toHaveCount(1); await expect(page.locator(".ff-companion-tools")).toHaveCount(1);
});

test("companion stays off on mobile and reduced-motion without video downloads", async ({ page }, info) => {
  if (info.project.name === "desktop") await page.emulateMedia({ reducedMotion: "reduce" });
  const media: string[] = []; page.on("request", r => { if (/\/media\/(companion|live2d)\//.test(r.url())) media.push(r.url()); });
  await page.goto("/"); await expect(page.locator("html")).toHaveClass(/ff-enhancements-ready/);
  await expect(canvas(page)).toHaveCount(0); expect(media).toEqual([]);
  await expect(page.locator(".ff-companion-tools")).toHaveCount(0);
  await page.screenshot({ path: info.outputPath("reduced-or-mobile.png") });
});
