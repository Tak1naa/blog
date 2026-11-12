"use strict";

const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const iconNames = ["dice-d6", "magnifying-glass", "bars", "arrow-up"];
const icons = new Map(iconNames.map(name => [name, readFileSync(join(hexo.source_dir,
  `vendor/fontawesome-7.3.0/svgs/solid/${name}.svg`), "utf8")
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace("<svg ", '<svg aria-hidden="true" focusable="false" ')]));

hexo.extend.filter.register("after_render:html", html => {
  // Critical navigation glyphs use the same official Font Awesome artwork,
  // inline: they remain visible even when a stylesheet or font cannot load.
  html = html.replace(/<i\b([^>]*\bclass="[^"]*\bfa-(dice-d6|magnifying-glass|bars|arrow-up)\b[^"]*"[^>]*)><\/i>/g,
    (_match, attrs, name) => `<i${attrs.replace('class="', 'class="ff-svg-icon ')}>${icons.get(name)}</i>`);
  // Native image sources must work without executing theme JavaScript.
  html = html.replace(/<img\b[^>]*>/g, tag => {
    const avatar = /\/media\/takina\/avatar\.png/.test(tag);
    const landscape = /\/media\/takina\/(?:aquarium|night-action)\.jpg/.test(tag);
    if (!/\bdecoding=/.test(tag)) tag = tag.replace("<img", '<img decoding="async"');
    if ((avatar || landscape) && !/\bwidth=/.test(tag)) {
      tag = tag.replace("<img", avatar ? '<img width="400" height="400"' : '<img width="1200" height="675"');
    }
    if (!/\bloading=/.test(tag) && !/\bnolazyload\b/.test(tag)) tag = tag.replace("<img", '<img loading="lazy"');
    return tag;
  });
  return html.replace(/<div\b([^>]*\bid="footer_mini_logo"[^>]*)>(<img\b[^>]*>)<\/div>/g,
    '<button type="button"$1>$2</button>');
});
