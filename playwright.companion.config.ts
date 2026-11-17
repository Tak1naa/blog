import { defineConfig, devices } from "@playwright/test";

// Separate loopback preview so tests cannot accidentally target another checkout
// already using Hexo's conventional port 4000. Run `pnpm build` first.
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  retries: 0,
  workers: 1,
  outputDir: "test-results/companion-v1",
  use: {
    baseURL: "http://127.0.0.1:4014",
    trace: "retain-on-failure",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {},
  },
  webServer: {
    command: "python3 -m http.server 4014 --bind 127.0.0.1 --directory public",
    url: "http://127.0.0.1:4014/", reuseExistingServer: true,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 960 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
