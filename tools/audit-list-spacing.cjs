/* eslint @typescript-eslint/no-require-imports: "off" */
// A manual diagnostic, outside Hexo's auto-loaded scripts directory.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('@playwright/test');
const output = process.argv[2] || 'artifacts/qa/2026-10-06/list-spacing/before.json';
const routes = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === 'index.html') routes.push('/' + path.relative('public', path.dirname(file)).replaceAll(path.sep, '/') + '/');
  }
}
walk('public');
(async () => {
  const browser = await chromium.launch();
  const results = [];
  try {
    fs.mkdirSync(path.dirname(output), { recursive: true });
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    for (const width of [1440, 908, 613, 393]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ['light', 'dark']) {
      for (const raw of routes.sort()) {
        const route = raw === '//' ? '/' : raw;
        await page.goto('http://127.0.0.1:4000' + route);
        await page.waitForSelector('html.ff-enhancements-ready');
        await page.evaluate(theme => {
          document.documentElement.setAttribute('data-theme', theme);
          for (const animation of document.getAnimations()) {
            if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
          }
        }, theme); // Settle finite theme entrances; reduced-motion alone does not disable them.
        const data = await page.evaluate(() => {
          const box = selector => {
            const element = document.querySelector(selector);
            if (!element) return null;
            const r = element.getBoundingClientRect(), s = getComputedStyle(element);
            return { x:r.x, y:r.y, width:r.width, height:r.height, display:s.display, padding:s.padding, margin:s.margin, gap:s.gap, fontSize:s.fontSize, lineHeight:s.lineHeight, background:s.backgroundColor, border:s.borderTopWidth, radius:s.borderRadius };
          };
          const selectors = ['#content-inner', '#category-bar', '#home', '#category', '#tag', '#tag-page-tags', '#recent-posts', '#recent-posts > .recent-post-item', '#recent-posts > .recent-post-item:last-of-type', '#pagination', '.archive-layout-row', '.archive-page-shell', '.archive-page-section-toolbar', '.archive-page-section-list', '.archive-page-item', '.archive-page-item:last-child', '.archive-page-section-pagination'];
          selectors.push('#page', '.category-lists', '.tag-cloud-list', '.tag-cloud-list > a', '#category-bar-items', '.category-bar-item a', '#tag-page-tags a', '.archive-year-button', '.archive-page-item-title', '.recent-post-info .article-title', '.recent-post-info', '.archive-page-item-meta');
          return { boxes: Object.fromEntries(selectors.map(selector => [selector, box(selector)])), overflow: document.documentElement.scrollWidth > innerWidth };
        });
        results.push({ route, width, theme, ...data });
        if (path.basename(output) === 'after.json' && [1440, 613, 393].includes(width) && ['/archives/', '/categories/随笔/', '/tags/配置/'].includes(route)) {
          const name = route.replaceAll('/', '-');
          await page.screenshot({ path: path.join(path.dirname(output), `${name}-${width}-${theme}.png`), fullPage: true });
        }
      }
      console.log(`Measured ${routes.length} pages at ${width}px ${theme}`);
      }
    }
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, JSON.stringify(results, null, 2) + '\n');
    console.log(output);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
