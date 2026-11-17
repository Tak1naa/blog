import { describe, expect, it } from "vitest";
import { recedeProgress, resolveBackgroundMode } from "../../src/enhancements/background";

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

describe("stage recede", () => {
  it("maps hero scroll to 0..1 and clamps", () => {
    expect(recedeProgress(0, 600)).toBe(0);
    expect(recedeProgress(300, 600)).toBe(0.5);
    expect(recedeProgress(900, 600)).toBe(1);
    expect(recedeProgress(-40, 600)).toBe(0);
  });

  it("tolerates a zero-height hero", () => {
    expect(recedeProgress(10, 0)).toBe(1);
  });
});
