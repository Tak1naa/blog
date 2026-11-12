import { describe, expect, it } from "vitest";
import { resolveBackgroundMode } from "../../src/enhancements/background";

describe("background policy", () => {
  const available = { enabled: true, userEnabled: true, mobileBlocked: false, reducedMotion: false };

  it("allows video when every policy allows it", () => {
    expect(resolveBackgroundMode("video", available)).toBe("video");
  });

  it.each(["enabled", "userEnabled"] as const)("falls back when %s is false", (key) => {
    expect(resolveBackgroundMode("video", { ...available, [key]: false })).toBe("wallpaper");
  });

  it("falls back for mobile and reduced motion", () => {
    expect(resolveBackgroundMode("video", { ...available, mobileBlocked: true })).toBe("wallpaper");
    expect(resolveBackgroundMode("video", { ...available, reducedMotion: true })).toBe("wallpaper");
  });
});
