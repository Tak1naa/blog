import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
describe("deferred comment initialization", () => {
  it("guards removed PJAX targets once and leaves other pages unchanged", () => {
    let render: (html: string) => string = x => x;
    runInNewContext(readFileSync("scripts/comments-lifecycle.js", "utf8"), {
      hexo: { extend: { filter: { register: (_: string, callback: typeof render) => { render = callback; } } } },
    });
    const output = render("function initWaline(initFn) { return initFn({}); }");
    expect(output).toContain("!walineTarget.isConnected");
    expect(output).toContain("window.location.pathname !== walinePath");
    expect(render(output)).toBe(output);
    expect(render("<main>archive</main>")).toBe("<main>archive</main>");
  });
});
