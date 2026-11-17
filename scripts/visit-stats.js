"use strict";

// Render once at the very bottom, independently of the enhancement bootstrap.
hexo.extend.filter.register("after_render:html", html => {
  if (!hexo.locals.get("data").visit_stats?.enabled || html.includes("data-visit-stats")) return html;
  const markup = '<div class="ff-visit-stats" data-visit-stats data-status="loading" role="group" aria-label="Site visits" data-i18n-attr="aria-label:visits.label">' +
    '<span class="ff-visit-stat"><span data-i18n="visits.today">Today’s visits</span><span class="ff-visit-value" data-visit-today>—</span><span data-i18n="visits.unit">views</span></span>' +
    '<span class="ff-visit-stat"><span data-i18n="visits.total">Total visits</span><span class="ff-visit-value" data-visit-total>—</span><span data-i18n="visits.unit">views</span></span>' +
    '<noscript>Enable JavaScript to load visit counts.</noscript></div>';
  return html.replace(/(<footer\b[^>]*\bid="footer"[^>]*>)([\s\S]*?)(<\/footer>)/,
    (_match, opening, content, closing) => opening + content + markup + closing);
});
