"use strict";

// Render the persistent hero before the first paint. The enhancement layer
// reuses this DOM instead of shifting all articles when config.json arrives.
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

hexo.extend.filter.register("after_render:html", (html) => {
  if (!html.includes('id="home_top"') || html.includes('class="ff-hero-copy"')) return html;
  const data = hexo.locals.get("data");
  const quote = data.anime_quotes?.[0];
  if (!quote || !data.experience?.site?.title) return html;
  const hero = `<div class="ff-hero-copy"><strong>${escape(data.experience.site.title)}</strong>` +
    `<span class="ff-quote-ja" lang="ja">${escape(quote.ja)}</span>` +
    `<span class="ff-quote-zh" lang="zh-CN">${escape(quote.text)}</span>` +
    `<a class="ff-quote-source" href="${escape(quote.originalSource ?? quote.source)}" target="_blank" rel="noopener noreferrer" title="查看语录出处（中文译法可能因版本不同而异）">` +
    `《${escape(quote.work)}》 · ${escape(quote.character)}</a></div>`;
  return html.replace(/<div\b[^>]*\bid="home_top"[^>]*>/, (opening) => opening + hero);
});
