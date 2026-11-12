"use strict";

const { createHash } = require("node:crypto");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

// Stable Vite entry names need a content version: reloads must not retain an
// earlier stylesheet/module after a new static build. Hashed imports stay intact.
hexo.extend.filter.register("after_render:html", html => html.replace(
  /((?:href|src)="\/custom\/enhancements\.(?:css|js))"/g,
  (attribute) => {
    const file = attribute.split("/custom/")[1].slice(0, -1);
    const hash = createHash("sha256").update(readFileSync(join(hexo.source_dir, "custom", file))).digest("hex").slice(0, 12);
    return `${attribute.slice(0, -1)}?v=${hash}"`;
  },
));
