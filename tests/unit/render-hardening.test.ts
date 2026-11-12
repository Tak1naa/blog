import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it, vi } from "vitest";
import { loadSettings } from "../../src/enhancements/storage";

describe("native image and critical icon rendering", () => {
  it("uses official inline icons, intrinsic image dimensions and a native footer button", () => {
    let render: (html: string) => string = html => html;
    runInNewContext(readFileSync("scripts/render-hardening.js", "utf8"), {
      require, hexo: { source_dir: "source", extend: { filter: { register: (_: string, fn: typeof render) => { render = fn; } } } },
    });
    const input = '<i class="solitude fas fa-bars"></i><div class="footer_mini_logo" id="footer_mini_logo"><img src="/media/takina/avatar.png"></div>';
    const output = render(input);
    expect(output).toContain('class="ff-svg-icon solitude fas fa-bars"');
    expect(output).toContain('<svg aria-hidden="true"');
    expect(output).toContain('<button type="button"');
    expect(output).toContain('width="400" height="400"');
    expect(output).not.toContain("data-lazy-src");
    expect(render(output)).toBe(output);
  });
  it("keeps Live2D off when legacy settings contain only the old effects flag", () => {
    const defaults = { schema: 1 as const, backgroundMode: "wallpaper" as const, carousel: true, video: true, overlayOpacity: 0.38, effects: true, live2d: false };
    vi.stubGlobal("localStorage", { getItem: () => JSON.stringify({ schema: 1, effects: true }) });
    try { expect(loadSettings(defaults).live2d).toBe(false); }
    finally { vi.unstubAllGlobals(); }
  });
});
