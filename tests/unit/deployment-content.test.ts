import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { parse } from "yaml";

describe("production content and redirect contracts", () => {
  it("only publishes the requested article and points the homepage to it", () => {
    expect(readdirSync("source/_posts").filter(name => name.endsWith(".md"))).toEqual(["tak1na-speedtest.md"]);
    const post = readFileSync("source/_posts/tak1na-speedtest.md", "utf8");
    const metadata = parse(post.split("---")[1]!);
    expect(metadata.title).toBe("Tak1na 自建测速");
    expect(metadata.abbrlink).toBe("tak1na-speedtest");
    expect(post).toContain("[开始测速](https://tak1na.top/speedtest/)");
    expect(post).toContain("~~大概可能应该有空~~");
    const theme = parse(readFileSync("_config.solitude.yml", "utf8"));
    expect(theme.hometop.recommendList[0].url).toBe(`/posts/${metadata.abbrlink}/`);
  });

  it("keeps redirects relative behind the TLS terminator without removing admin protection", () => {
    const config = readFileSync("deploy/server.nginx.conf", "utf8");
    expect(config).toMatch(/^\s*absolute_redirect off;/m);
    expect(config).toContain("location = /blog { return 308 /blog/; }");
    expect(config).toContain("(?:ui|user|token|oauth)");
    expect(config).toContain("{ return 403; }");
  });
});
