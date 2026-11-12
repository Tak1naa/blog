import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: ["subpath.spec.ts", "production-assets.spec.ts", "runtime-hardening.spec.ts"],
  timeout: 60_000,
  workers: 1,
  retries: 0,
  outputDir: "artifacts/qa/2026-11-09/subpath",
  use: {
    ...devices["Desktop Chrome"],
    baseURL: process.env.PRODUCTION_BASE_URL || "http://127.0.0.1:4011/blog/",
    trace: "retain-on-failure",
    launchOptions: {
      ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
        ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {}),
      // Opt-in, process-local campus DNS mapping; keeps the real Host/SNI and
      // certificate verification. Never alter the system resolver or VPN.
      ...(process.env.PLAYWRIGHT_HOST_RESOLVER_RULES
        ? { args: ["--no-proxy-server", `--host-resolver-rules=${process.env.PLAYWRIGHT_HOST_RESOLVER_RULES}`] } : {}),
    },
  },
});
