import type { Page } from "@playwright/test";

/** Keep this suite focused on the companion on machines using software WebGL.
 * The production configuration and the blog's background tests are untouched. */
export async function quietCompanionBackdrop(page: Page): Promise<void> {
  await page.route("**/custom/config.json", async route => {
    const response = await route.fetch();
    const config = await response.json();
    config.effects.sakura = false;
    config.effects.typewriter = false;
    config.background.wallpapers = config.background.wallpapers.slice(0, 1);
    await route.fulfill({ response, json: config });
  });
}
