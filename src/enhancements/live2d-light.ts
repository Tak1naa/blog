/** Version-scoped adapter for l2d-widget 0.1.2's Cubism wrapper.
 * No global prototype patch: unavailable adapters safely retain normal rendering.
 */
interface ColorOverrides {
  setDrawableScreenColorEnabled(index: number, enabled: boolean): void;
  setDrawableScreenColorByRGBA(index: number, r: number, g: number, b: number, a: number): void;
}
interface CubismModel {
  getDrawableCount(): number;
  getDrawableId(index: number): { getString(): string };
  getDrawableVertexUvs(index: number): Float32Array;
  getOverrideMultiplyAndScreenColor(): ColorOverrides;
}
interface WidgetInternals {
  _state?: { l2d6Model?: { _subdelegates?: Array<{
    getLive2DManager(): { _models?: Array<{ getModel(): CubismModel }> };
  }> } };
}

export function attachHairLight(l2d: unknown): ((position: number) => void) | undefined {
  try {
    const model = (l2d as WidgetInternals)._state?.l2d6Model?._subdelegates?.[0]
      ?.getLive2DManager()._models?.[0]?.getModel();
    if (!model) return;
    const colors = model.getOverrideMultiplyAndScreenColor();
    const hair: Array<{ index: number; min: number; max: number }> = [];
    for (let index = 0; index < model.getDrawableCount(); index += 1) {
      if (/Hair/.test(model.getDrawableId(index).getString())) {
        colors.setDrawableScreenColorEnabled(index, true);
        const uvs = model.getDrawableVertexUvs(index);
        let min = 1, max = 0;
        for (let vertex = 0; vertex < uvs.length; vertex += 2) {
          min = Math.min(min, uvs[vertex]!);
          max = Math.max(max, uvs[vertex]!);
        }
        hair.push({ index, min, max });
      }
    }
    return (position) => {
      // Shader light follows gaze/drag; the atlas/mesh itself supplies the mask.
      const phase = Math.max(0.08, Math.min(0.9, position));
      for (const { index, min, max } of hair) {
        // Each atlas island has its own UV range; never assume the hair occupies
        // the left half of a texture after repacking.
        colors.setDrawableScreenColorByRGBA(index, 0.008, 0.012, 0.024, Math.min(0.98, min + (max - min) * phase));
      }
    };
  } catch {
    return;
  }
}
