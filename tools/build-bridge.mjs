import { createRequire } from "node:module";
import { resolve } from "node:path";
// Reuse Vite's locked esbuild dependency; no new dependency or remote install.
const require = createRequire(import.meta.resolve("vite"));
const { build } = require("esbuild");
const output = process.argv[2];
if (!output) throw Error("Usage: node tools/build-bridge.mjs OUTPUT_DIRECTORY");
await build({ entryPoints: ["services/music-bridge/src/server.ts"], outfile: resolve(output, "server.cjs"), bundle: true, platform: "node", target: "node22", format: "cjs", sourcemap: false });
