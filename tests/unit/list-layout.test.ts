import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

describe("category listing flow", () => {
  it("moves only category controls into their panel once without losing links", () => {
    let render: (html: string) => string = value => value;
    runInNewContext(readFileSync("scripts/list-layout.js", "utf8"), {
      hexo: { extend: { filter: { register: (_name: string, fn: typeof render) => { render = fn; } } } },
    });
    const bar = '<div class="home-category-bar category-in-bar"><a href="/archives/">全部文章</a></div>';
    const input = `<main class="layout layout--category" id="content-inner">${bar}<div class="home-layout-row"><div id="category"><div id="recent-posts">cards</div></div></div></main>`;
    const result = render(input);
    expect(result).toContain(`<div id="category">${bar}<div id="recent-posts">`);
    expect(render(result)).toBe(result);
    expect(render(input.replace("layout--category", "layout--home"))).toBe(input.replace("layout--category", "layout--home"));
    const archive = `<main class="layout layout--archive">${bar}<div class="archive-layout-row"><div id="page"><div class="archive-page-shell" id="archives-page"><div class="archive-page-toolbar">years</div></div></div></div></main>`;
    const archiveResult = render(archive);
    expect(archiveResult).toContain(`<div class="archive-page-shell" id="archives-page">${bar}<div class="archive-page-toolbar">`);
    expect(render(archiveResult)).toBe(archiveResult);
  });
});
