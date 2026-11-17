import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { parse } from "yaml";

describe("production content and redirect contracts", () => {
  it("only publishes the requested article and points the homepage to it", () => {
    expect(readdirSync("source/_posts").filter(name => name.endsWith(".md"))).toEqual(["speedtest-architecture.md"]);
    const post = readFileSync("source/_posts/speedtest-architecture.md", "utf8");
    const metadata = parse(post.split("---")[1]!);
    expect(metadata.title).toBe("High-Performance Self-Hosted Speedtest Architecture");
    expect(metadata.abbrlink).toBe("speedtest-architecture");
    expect(post).toContain("## Overview");
    expect(post).toContain("## Implementation & Security Boundaries");
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
