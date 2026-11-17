import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { prepare } from "./prepare-subpath.mjs";

const root = resolve("artifacts/pages");
if (!existsSync("deploy/_config.github-pages.yml")) throw Error("Run from the blog repository root");
rmSync(root, { recursive: true, force: true });
const run = (command, args) => execFileSync(command, args, { stdio: "inherit" });
run(resolve("node_modules/.bin/vite"), ["build"]);
run(resolve("node_modules/.bin/hexo"), ["generate", "--config", "_config.yml,deploy/_config.github-pages.yml"]);
prepare(join(root, "raw"), join(root, "site"), "/blog/");
const site = join(root, "site/blog");
const config = JSON.parse(readFileSync(join(site, "custom/config.json"), "utf8"));
if (config.music.apiBase !== "" || config.music.localTracks.length < 1) throw Error("Pages must use local music without a backend");

function addCommentLinks(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) addCommentLinks(path);
    else if (entry.name.endsWith(".html")) {
      let html = readFileSync(path, "utf8");
      if (!html.includes('id="post"')) continue;
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
      if (!canonical) throw Error(`Article has no canonical URL: ${path}`);
      const target = new URL(new URL(canonical[1]).pathname, "https://tak1na.top");
      target.hash = "post-comment";
      const link = `<div class="ff-pages-comments"><a href="${target.href}" data-i18n="pages.comments">Comment on the server edition</a></div>`;
      html = html.includes('<div class="ff-visit-stats"')
        ? html.replace('<div class="ff-visit-stats"', link + '<div class="ff-visit-stats"')
        : html.replace("</footer>", link + "</footer>");
      writeFileSync(path, html);
    }
  }
}
addCommentLinks(site);
writeFileSync(join(site, ".nojekyll"), "");
const commit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
writeFileSync(join(site, "release.json"), JSON.stringify({ target: "github-pages", sourceCommit: commit }, null, 2) + "\n");
run(process.execPath, ["tools/verify-subpath.mjs", join(root, "site"), "--static"]);
console.log(`GitHub Pages artifact: ${site}`);
