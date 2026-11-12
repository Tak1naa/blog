import { describe, expect, it } from "vitest";
import { StaleCache } from "../../services/music-bridge/src/cache";

describe("stale cache", () => {
  it("distinguishes fresh, stale and expired entries", () => {
    const cache = new StaleCache<string>();
    cache.set("track", "value", 100, 300, 1000);
    expect(cache.getFresh("track", 1099)).toBe("value");
    expect(cache.getFresh("track", 1100)).toBeUndefined();
    expect(cache.getStale("track", 1200)).toBe("value");
    expect(cache.getStale("track", 1300)).toBeUndefined();
  });
});
