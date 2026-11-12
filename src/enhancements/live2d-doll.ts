/** Small, bounded soft-joint rig. No physics engine or extra WebGL resources. */
export type DollPose = [number, number, number, number];
export class DollJoints {
  readonly angles: DollPose = [0, 0, 0, 0];
  private readonly velocities: DollPose = [0, 0, 0, 0];
  step(targets: DollPose, delta: number): DollPose {
    const step = Math.max(0, Math.min(2, delta));
    for (let joint = 0; joint < 4; joint++) {
      const limit = joint < 2 ? 24 : 12;
      this.velocities[joint] = (this.velocities[joint]! + (targets[joint]! - this.angles[joint]!) * 0.065 * step) * Math.pow(0.83, step);
      this.angles[joint] = Math.max(-limit, Math.min(limit, this.angles[joint]! + this.velocities[joint]! * step));
    }
    return this.angles;
  }
  reset(): void { this.angles.fill(0); this.velocities.fill(0); }
  get moving(): boolean { return this.angles.some((value, i) => Math.abs(value) + Math.abs(this.velocities[i]!) > 0.05); }
}

interface Model {
  getDrawableCount(): number;
  getDrawableId(index: number): { getString(): string };
  getDrawableVertices(index: number): Float32Array;
}
interface Owner { getModel(): Model; doDraw(): void }
interface Internals { _state?: { l2d6Model?: { _subdelegates?: Array<{ getLive2DManager(): { _models?: Owner[] } }> } } }
const unit = (value: number) => Math.max(0, Math.min(1, value));

/** Deform painted limb regions around shoulder/hip anchors after Cubism update.
 * Version scoped to our PSD2Live Topwear mesh and l2d-widget 0.1.2. The torso,
 * face, neck and hair are untouched. Restore SDK vertices after each draw so
 * offsets cannot accumulate, and restore the instance method on disposal.
 */
export function attachDollRig(l2d: unknown): { pose(value: DollPose, aperture?: number): void; destroy(): void } | undefined {
  const owner = (l2d as Internals)._state?.l2d6Model?._subdelegates?.[0]?.getLive2DManager()._models?.[0];
  if (!owner || typeof owner.doDraw !== "function") return;
  const model = owner.getModel();
  let index = -1;
  for (let i = 0; i < model.getDrawableCount(); i++) if (/^ArtMeshTopwear/.test(model.getDrawableId(i).getString())) { index = i; break; }
  if (index < 0) return;
  const reference = new Float32Array(model.getDrawableVertices(index));
  if (reference.length < 8) return;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < reference.length; i += 2) {
    minX = Math.min(minX, reference[i]!); maxX = Math.max(maxX, reference[i]!);
    minY = Math.min(minY, reference[i + 1]!); maxY = Math.max(maxY, reference[i + 1]!);
  }
  const width = maxX - minX, height = maxY - minY;
  if (width <= 0 || height <= 0) return;
  const original = owner.doDraw;
  const saved = new Float32Array(reference.length);
  const mouths: Array<{ index: number; saved: Float32Array }> = [];
  for (let i = 0; i < model.getDrawableCount(); i++) {
    if (/^ArtMeshMouthOpen/.test(model.getDrawableId(i).getString())) mouths.push({ index: i, saved: new Float32Array(model.getDrawableVertices(i).length) });
  }
  let angles: DollPose = [0, 0, 0, 0];
  let aperture = 0;
  const draw = function (this: Owner) {
    const vertices = model.getDrawableVertices(index);
    saved.set(vertices);
    for (let i = 0; i < vertices.length; i += 2) {
      const u = (reference[i]! - minX) / width, v = (maxY - reference[i + 1]!) / height;
      let joint: number, weight: number, pivotU: number, pivotV: number;
      if (v > 0.64) {
        joint = u < 0.5 ? 2 : 3; pivotU = u < 0.5 ? 0.38 : 0.62; pivotV = 0.64;
        weight = unit((v - 0.64) / 0.14);
      } else {
        joint = u < 0.5 ? 0 : 1; pivotU = u < 0.5 ? 0.27 : 0.73; pivotV = 0.07;
        weight = unit((Math.abs(u - 0.5) - 0.17) / 0.15) * unit(v / 0.12) * unit((0.57 - v) / 0.08);
      }
      const rotation = angles[joint]! * weight * Math.PI / 180;
      if (!rotation) continue;
      const px = minX + pivotU * width, py = maxY - pivotV * height;
      const dx = saved[i]! - px, dy = saved[i + 1]! - py;
      vertices[i] = px + dx * Math.cos(rotation) - dy * Math.sin(rotation);
      vertices[i + 1] = py + dx * Math.sin(rotation) + dy * Math.cos(rotation);
    }
    // PSD2Live fits the open artwork to the original narrow closed seam.
    // Expand only an open mouth, using one shared pivot for cavity and lips.
    let mouthMinX = Infinity, mouthMaxX = -Infinity, mouthMinY = Infinity, mouthMaxY = -Infinity;
    for (const mouth of mouths) {
      mouth.saved.set(model.getDrawableVertices(mouth.index));
      for (let i = 0; i < mouth.saved.length; i += 2) {
        mouthMinX = Math.min(mouthMinX, mouth.saved[i]!); mouthMaxX = Math.max(mouthMaxX, mouth.saved[i]!);
        mouthMinY = Math.min(mouthMinY, mouth.saved[i + 1]!); mouthMaxY = Math.max(mouthMaxY, mouth.saved[i + 1]!);
      }
    }
    for (const mouth of mouths) {
      const positions = model.getDrawableVertices(mouth.index);
      const cx = (mouthMinX + mouthMaxX) / 2, cy = (mouthMinY + mouthMaxY) / 2;
      for (let i = 0; i < positions.length; i += 2) {
        positions[i] = cx + (mouth.saved[i]! - cx) * (1 + 1.1 * aperture);
        positions[i + 1] = cy + (mouth.saved[i + 1]! - cy) * (1 + 0.8 * aperture);
      }
    }
    try { original.call(this); } finally {
      vertices.set(saved);
      for (const mouth of mouths) model.getDrawableVertices(mouth.index).set(mouth.saved);
    }
  };
  owner.doDraw = draw;
  return { pose: (value, opening = 0) => { angles = [...value]; aperture = unit(opening); }, destroy: () => { if (owner.doDraw === draw) owner.doDraw = original; } };
}
