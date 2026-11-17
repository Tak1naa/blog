import { describe, expect, it } from "vitest";
import { parseCompanionState } from "../../src/enhancements/companion-data";
import { releaseVelocity, squishAt, stepFlight } from "../../src/enhancements/companion-motion";

describe("companion motion", () => {
  const bounds = { width: 180, height: 225, viewportWidth: 1200, viewportHeight: 800 };
  it("estimates capped release speed but discards stale and tiny samples", () => {
    const velocity = releaseVelocity([{ x: 0, y: 0, time: 0 }, { x: 600, y: 800, time: 100 }], 110);
    expect(velocity.x).toBeCloseTo(840); expect(velocity.y).toBeCloseTo(1120);
    expect(releaseVelocity([{ x: 0, y: 0, time: 0 }, { x: 100, y: 100, time: 100 }], 200)).toEqual({ x: 0, y: 0 });
    expect(releaseVelocity([{ x: 0, y: 0, time: 0 }, { x: 100, y: 100, time: 1 }], 1)).toEqual({ x: 0, y: 0 });
  });
  it("bounces at screen corners and eventually rests inside the viewport", () => {
    let state = { x: 1010, y: 570, vx: 1400, vy: 1200 };
    const first = stepFlight(state, 0.05, bounds);
    expect(first.hit).toBe(true); expect(first.state.vx).toBeLessThan(0); expect(first.state.vy).toBeLessThan(0);
    state = first.state;
    for (let i = 0; i < 400; i++) state = stepFlight(state, 1 / 60, bounds).state;
    expect(state.x).toBeGreaterThanOrEqual(0); expect(state.x).toBeLessThanOrEqual(1020);
    expect(state.y).toBeGreaterThanOrEqual(0); expect(state.y).toBeLessThanOrEqual(575);
    expect(state.vx).toBe(0); expect(state.vy).toBe(0);
  });
  it("does not tunnel through the Dock at high speed", () => {
    const result = stepFlight({ x: 500, y: 400, vx: 0, vy: 1400 }, 0.05, bounds, { left: 400, right: 800, top: 650, bottom: 700 });
    expect(result.hit).toBe(true); expect(result.state.vy).toBeLessThan(0); expect(result.state.y + bounds.height).toBeLessThanOrEqual(650);
  });
  it("keeps small viewports finite and jelly transforms bounded and reset", () => {
    const result = stepFlight({ x: 100, y: 100, vx: 1400, vy: 1400 }, 10, { ...bounds, viewportWidth: 100, viewportHeight: 100 });
    expect(result.state.x).toBe(0); expect(result.state.y).toBe(0);
    for (let i = 0; i < 100; i++) { const scale = squishAt(i / 100); expect(scale.y).toBeGreaterThanOrEqual(0.78); expect(Number.isFinite(scale.x)).toBe(true); }
    expect(squishAt(1)).toEqual({ x: 1, y: 1 });
  });
});

describe("local companion data", () => {
  it("defaults safely and validates untrusted storage without losing valid tasks", () => {
    expect(parseCompanionState(null).autoReturn).toBe(true);
    const state = parseCompanionState({ schema: 1, autoReturn: "false", random: false, city: "a".repeat(100), tasks: [null,
      { id: "a", title: " task ", dueAt: "invalid", done: true }, { id: "a", title: "duplicate" }, { id: "b", title: "   " },
      { id: "c", title: "<script>literal text</script>", dueAt: "2026-11-16T12:00:00Z" }] });
    expect(state.autoReturn).toBe(true); expect(state.random).toBe(false); expect(state.city).toHaveLength(80);
    expect(state.tasks).toHaveLength(2); expect(state.tasks[0]).toEqual({ id: "a", title: "task", done: true, reminded: false });
    expect(state.tasks[1]?.title).toContain("<script>"); expect(state.tasks[1]?.dueAt).toBe("2026-11-16T12:00:00.000Z");
  });
  it("caps stored task lists at fifty entries", () => {
    expect(parseCompanionState({ schema: 1, tasks: Array.from({ length: 100 }, (_, i) => ({ id: String(i), title: "task" })) }).tasks).toHaveLength(50);
  });
});
