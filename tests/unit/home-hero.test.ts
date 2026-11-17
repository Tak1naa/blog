import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

describe("build-time home hero", () => {
  it("renders bilingual copy safely once and leaves article pages alone", () => {
    let render: (html: string) => string = value => value;
    runInNewContext(readFileSync("scripts/home-hero.js", "utf8"), {
      hexo: {
        extend: { filter: { register: (_name: string, callback: typeof render) => { render = callback; } } },
        locals: { get: () => ({ experience: { site: { title: "Takina <Ying>" } }, anime_quotes: [{
          ja: "Itemはいつもひとつ！！", text: "There is always only one truth!", work: "Detective Conan", character: "Conan Edogawa", source: "https://www.conan-portal.com/",
        }] }) },
      },
    });
    const result = render('<div id="home_top"><div>banner</div></div>');
    expect(result).toContain("Takina &lt;Ying&gt;");
    expect(result).toContain('lang="ja">Itemはいつもひとつ！！');
    expect(result).toContain('lang="zh-CN">There is always only one truth!');
    expect(result).toContain("《Detective Conan》 · Conan Edogawa");
    expect(render(result)).toBe(result);
    expect(render('<main id="post">article</main>')).toBe('<main id="post">article</main>');
  });
});
