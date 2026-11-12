import { describe, expect, it } from "vitest";
// Deployment utility is plain Node ESM and has no browser or SDK dependency.
// @ts-expect-error JavaScript deploy utility has no declaration file.
import { prefixPath, prefixText } from "../../tools/prepare-subpath.mjs";

describe("subpath deployment", () => {
  it("prefixes local media and home paths once, preserves remote URLs", () => {
    for (const path of ["/", "/media/a.png", "/api/comment", "/vendor/core.js?x=1"]) expect(prefixPath(path, "/blog/")).toBe(`/blog/${path.slice(1)}`);
    for (const path of ["/blog/a", "//cdn.example/a", "https://example.com/a"]) expect(prefixPath(path, "/blog/")).toBe(path);
  });
  it("updates HTML, inline theme data, CSS and JS strings without regex damage", () => {
    const input = '<img src="/media/a.png"><script>fetch("/custom/config.json");const core="/vendor/core.js";const re=/^\\/foo/;</script><style>a{background:url(/img/a.png)}</style>';
    const result = prefixText(input, "/blog/");
    expect(result).toContain('src="/blog/media/a.png"');
    expect(result).toContain('fetch("/blog/custom/config.json")');
    expect(result).toContain('"/blog/vendor/core.js"');
    expect(result).toContain("url(/blog/img/a.png)");
    expect(result).toContain("const re=/^\\/foo/");
    expect(prefixText(result, "/blog/")).toBe(result);
  });
});
