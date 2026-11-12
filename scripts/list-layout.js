"use strict";

// Solitude renders category controls outside the padded category panel, unlike
// tag controls. Keep controls/list/pagination in the same flow so their shared
// gap cannot be doubled by panel padding. Static HTML also works during PJAX.
hexo.extend.filter.register("after_render:html", (html) => {
  if (html.includes("layout--archive")) {
    return html.replace(
      /(<main\b[^>]*class="[^"]*\blayout--archive\b[^"]*"[^>]*>)(<div class="home-category-bar\b[\s\S]*?)(<div class="archive-layout-row"><div id="page"><div class="archive-page-shell"[^>]*>)/,
      "$1$3$2",
    );
  }
  if (!html.includes("layout--category")) return html;
  return html.replace(
    /(<main\b[^>]*class="[^"]*\blayout--category\b[^"]*"[^>]*>)(<div class="home-category-bar\b[\s\S]*?)(<div class="home-layout-row"><div id="category">)/,
    "$1$3$2",
  );
});
