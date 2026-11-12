import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
const root = resolve(process.argv[2]);
let pages = 0;
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) walk(filename);
    else if (entry.name.endsWith(".html")) {
      pages++;
      const text = readFileSync(filename, "utf8");
      assert(!text.includes("/blog/blog/"), "No doubled base prefix");
      for (const [, url] of text.matchAll(/(?:src|href|data-solitude-fallback)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
        if (url.startsWith("//") || url.startsWith("/blog/api/")) continue;
        assert(url.startsWith("/blog/"), `Escaped blog subpath: ${url}`);
        const target = resolve(root, "." + decodeURIComponent(url));
        assert(existsSync(target) || existsSync(join(target, "index.html")), `Missing asset: ${url}`);
      }
    }
  }
}
walk(join(root, "blog"));
const config = JSON.parse(readFileSync(join(root, "blog/custom/config.json"), "utf8"));
assert.equal(config.site.homePath, "/blog/");
assert.equal(config.music.apiBase, "/blog/api/music");
for (const url of [config.live2d.modelPaths[0], config.music.localTracks[0].url, ...config.background.wallpapers.map(w => w.src)]) assert(url.startsWith("/blog/"));
console.log(`Verified ${pages} HTML pages and subpath asset/config contracts.`);
