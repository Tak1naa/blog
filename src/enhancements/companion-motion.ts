export interface Point { x: number; y: number }
export interface TrailPoint extends Point { time: number }
export interface Flight extends Point { vx: number; vy: number }
export interface Bounds { width: number; height: number; viewportWidth: number; viewportHeight: number }
export interface Obstacle { left: number; right: number; top: number; bottom: number }

export function releaseVelocity(trail: TrailPoint[], now: number): Point {
  const recent = trail.filter(sample => now - sample.time <= 120);
  const first = recent[0], last = recent.at(-1);
  if (!first || !last || now - last.time > 65 || last.time - first.time < 12) return { x: 0, y: 0 };
  const seconds = (last.time - first.time) / 1000;
  const x = (last.x - first.x) / seconds, y = (last.y - first.y) / seconds;
  const speed = Math.hypot(x, y);
  const scale = speed ? Math.min(1, 1400 / speed) : 0;
  return { x: x * scale, y: y * scale };
}

/** Bounded substeps prevent fast throws tunnelling through the Dock. No gravity:
 * the visitor can also leave her on a freely chosen spot when auto-return is off. */
export function stepFlight(state: Flight, elapsed: number, bounds: Bounds, dock?: Obstacle): { state: Flight; hit: boolean; resting: boolean } {
  const next = { ...state };
  const dt = Math.max(0, Math.min(0.05, elapsed));
  const count = Math.max(1, Math.ceil(Math.hypot(next.vx, next.vy) * dt / 8));
  let hit = false;
  const maxX = Math.max(0, bounds.viewportWidth - bounds.width);
  const maxY = Math.max(0, bounds.viewportHeight - bounds.height);
  for (let i = 0; i < count; i++) {
    const oldX = next.x, oldY = next.y, step = dt / count;
    next.vx *= Math.exp(-2.8 * step); next.vy *= Math.exp(-2.8 * step);
    next.x += next.vx * step; next.y += next.vy * step;
    if (next.x < 0 || next.x > maxX) { next.x = Math.max(0, Math.min(maxX, next.x)); next.vx *= -0.42; hit = true; }
    if (next.y < 0 || next.y > maxY) { next.y = Math.max(0, Math.min(maxY, next.y)); next.vy *= -0.42; hit = true; }
    if (dock && next.x + bounds.width > dock.left && next.x < dock.right && next.y + bounds.height > dock.top && next.y < dock.bottom) {
      if (oldY + bounds.height <= dock.top) { next.y = dock.top - bounds.height; next.vy = -Math.abs(next.vy) * 0.36; }
      else if (oldY >= dock.bottom) { next.y = dock.bottom; next.vy = Math.abs(next.vy) * 0.36; }
      else if (oldX + bounds.width <= dock.left) { next.x = dock.left - bounds.width; next.vx = -Math.abs(next.vx) * 0.36; }
      else if (oldX >= dock.right) { next.x = dock.right; next.vx = Math.abs(next.vx) * 0.36; }
      else continue;
      next.x = Math.max(0, Math.min(maxX, next.x)); next.y = Math.max(0, Math.min(maxY, next.y)); hit = true;
    }
  }
  const resting = Math.hypot(next.vx, next.vy) < 12;
  if (resting) next.vx = next.vy = 0;
  return { state: next, hit, resting };
}

/** Volume-preserving jelly impulse; one compositor owns rotation AND scale. */
export function squishAt(seconds: number, depth = 0.16): Point {
  const squash = seconds >= 0 && seconds < 0.8 ? depth * Math.exp(-7 * seconds) * Math.cos(seconds * 23) : 0;
  const y = Math.max(0.78, Math.min(1.18, 1 - squash));
  return { x: 1 / Math.sqrt(y), y };
}
