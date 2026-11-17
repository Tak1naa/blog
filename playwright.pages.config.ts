import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "pages.spec.ts",
  timeout: process.env.PAGES_BASE_URL ? 90000 : 60000,
  workers: 1,
  retries: 0,
  outputDir: "test-results/github-pages",
  use: {
    baseURL: process.env.PAGES_BASE_URL || "http://127.0.0.1:4017/blog/",
    trace: "off",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {},
  },
  webServer: process.env.PAGES_BASE_URL ? undefined : {
    command: "python3 -m http.server 4017 --bind 127.0.0.1 --directory artifacts/pages/site",
    url: "http://127.0.0.1:4017/blog/",
    reuseExistingServer: false,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 960 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
