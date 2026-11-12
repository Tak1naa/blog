import { describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import { parse } from "yaml";
import { QuoteSource } from "../../src/enhancements/quotes";
import type { AnimeQuote, ExperienceConfig } from "../../src/enhancements/types";

const catalog = parse(readFileSync("source/_data/anime_quotes.yml", "utf8")) as AnimeQuote[];
const site: ExperienceConfig["site"] = { homePath: "/", title: "Takina Ying", subtitle: catalog };

describe("reviewed anime quote catalog", () => {
  it("contains distinct short quotes with inspectable attribution", () => {
    expect(catalog.length).toBeGreaterThan(10);
    expect(new Set(catalog.map((quote) => quote.text)).size).toBe(catalog.length);
    for (const quote of catalog) {
      expect(quote.text.length).toBeGreaterThanOrEqual(3);
      expect(quote.text.length).toBeLessThanOrEqual(60);
      expect(quote.work).toBeTruthy();
      expect(quote.character).toBeTruthy();
      expect(new URL(quote.source).protocol).toBe("https:");
      if (quote.ja) {
        expect(quote.ja).toMatch(/[\u3040-\u30ff]/);
        expect(new URL(quote.originalSource ?? quote.source).protocol).toBe("https:");
      }
    }
  });

  it("cycles through the full catalog and wraps without making remote requests", async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error("unexpected remote quote request"));
    vi.stubGlobal("fetch", fetcher);
    try {
      const source = new QuoteSource(site);
      for (let index = 1; index <= catalog.length * 2; index += 1) {
        expect(await source.next()).toEqual(catalog[index % catalog.length]);
      }
      expect(fetcher).not.toHaveBeenCalled();
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
