"use strict";

// A delayed CDN import may finish after PJAX removed its original page. Never
// initialize Waline against a missing element or against another page's path.
// Keep this compatibility guard in the custom layer, not in the theme package.
hexo.extend.filter.register("after_render:html", html => {
  if (html.includes("const walineTarget =")) return html;
  return html.replace("function initWaline(initFn) {", `const walineTarget = document.getElementById('waline-wrap');
        const walinePath = window.location.pathname;
        function initWaline(initFn) {
            if (!walineTarget || !walineTarget.isConnected || window.location.pathname !== walinePath) return;`);
});
