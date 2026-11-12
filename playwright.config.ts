import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  retries: 1,
  use: {
    baseURL: "http://127.0.0.1:4000",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "./node_modules/.bin/hexo clean && ./node_modules/.bin/vite build && ./node_modules/.bin/hexo generate && python3 -m http.server 4000 --directory public",
    url: "http://127.0.0.1:4000/",
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
