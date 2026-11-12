import { describe, expect, it } from "vitest";
import { nextTrackIndex } from "../../src/enhancements/music";

describe("playlist order", () => {
  it("advances and wraps loop mode", () => {
    expect(nextTrackIndex(0, 3, "loop", false)).toBe(1);
    expect(nextTrackIndex(2, 3, "loop", true)).toBe(0);
  });

  it("stops list mode when a track naturally ends", () => {
    expect(nextTrackIndex(2, 3, "list", true)).toBe(-1);
    expect(nextTrackIndex(2, 3, "list", false)).toBe(0);
  });

  it("uses the supplied random source", () => {
    expect(nextTrackIndex(0, 4, "random", false, () => 0.75)).toBe(3);
  });
});
