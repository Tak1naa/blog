import { describe, expect, it } from "vitest";
import { lyricAt, parseLrc } from "../../src/enhancements/lrc";

describe("LRC parser", () => {
  it("parses, expands and sorts timestamps", () => {
    const lines = parseLrc("[00:03.50][00:07.5]同一句\n[00:01.00]开始\n[ar:demo]");
    expect(lines).toEqual([
      { time: 1, text: "开始" },
      { time: 3.5, text: "同一句" },
      { time: 7.5, text: "同一句" },
    ]);
  });

  it("selects the active line", () => {
    const lines = parseLrc("[00:01]一\n[00:02]二");
    expect(lyricAt(lines, 0.5)).toBe(-1);
    expect(lyricAt(lines, 1.5)).toBe(0);
    expect(lyricAt(lines, 2)).toBe(1);
  });
});
