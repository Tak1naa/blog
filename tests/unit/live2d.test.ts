import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { attachHairLight } from "../../src/enhancements/live2d-light";
import { attachDollRig, DollJoints } from "../../src/enhancements/live2d-doll";

describe("Live2D independent rig and masked light", () => {
  it("registers ten real Cubism expressions with supported parameters", () => {
    const directory = "source/media/live2d/takina-chibi/";
    const config = JSON.parse(readFileSync(directory + "takina-chibi.model3.json", "utf8"));
    const ids = JSON.parse(readFileSync(directory + "takina-chibi.cdi3.json", "utf8")).Parameters.map((parameter: { Id: string }) => parameter.Id);
    expect(config.FileReferences.Expressions.map((item: { Name: string }) => item.Name)).toEqual(["neutral", "smile", "wink", "curious", "sleepy", "carried", "laugh", "surprised", "pout", "speaking"]);
    for (const { File } of config.FileReferences.Expressions) {
      const expression = JSON.parse(readFileSync(directory + File, "utf8"));
      expect(expression.Type).toBe("Live2D Expression");
      for (const parameter of expression.Parameters) expect(ids).toContain(parameter.Id);
      expect(expression.Parameters.some((parameter: { Id: string }) => parameter.Id === "ParamMouthOpenY")).toBe(true);
    }
  });
  it("bounds four soft joints and settles every limb without retained velocity", () => {
    const joints = new DollJoints();
    for (let i = 0; i < 80; i++) joints.step([300, -300, 300, -300], 20);
    expect(joints.angles.every((value, i) => Math.abs(value) <= (i < 2 ? 24 : 12))).toBe(true);
    for (let i = 0; i < 300; i++) joints.step([0, 0, 0, 0], 1);
    expect(joints.moving).toBe(false);
    joints.reset();
    expect(joints.angles).toEqual([0, 0, 0, 0]);
  });
  it("moves actual limb vertices during draw, preserves torso and restores the SDK buffer", () => {
    const vertices = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0, 0.5, 0.7]);
    let drawn: number[] = [];
    const model = { getDrawableCount: () => 1, getDrawableId: () => ({ getString: () => "ArtMeshTopwear" }), getDrawableVertices: () => vertices };
    const owner = { getModel: () => model, doDraw: () => { drawn = [...vertices]; } };
    const original = owner.doDraw;
    const rig = attachDollRig({ _state: { l2d6Model: { _subdelegates: [{ getLive2DManager: () => ({ _models: [owner] }) }] } } });
    rig?.pose([10, -10, 8, -8]); owner.doDraw();
    expect(drawn[4]).not.toBe(0);
    expect(drawn.slice(8)).toEqual([0.5, vertices[9]]);
    expect([...vertices]).toEqual([0, 1, 1, 1, 0, 0, 1, 0, 0.5, vertices[9]]);
    rig?.destroy(); expect(owner.doDraw).toBe(original);
    expect(attachDollRig({})).toBeUndefined();
  });
  it("expands open mouth and lips together, leaves closed mouth unchanged and restores buffers", () => {
    const body = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]);
    const mouth = new Float32Array([0.4, 0.7, 0.6, 0.7, 0.4, 0.6, 0.6, 0.6]);
    const closed = new Float32Array(mouth);
    const snapshot = [...mouth];
    const buffers = [body, mouth, closed];
    let width = 0;
    const model = { getDrawableCount: () => 3,
      getDrawableId: (i: number) => ({ getString: () => ["ArtMeshTopwear", "ArtMeshMouthOpen", "ArtMeshMouthClose"][i]! }),
      getDrawableVertices: (i: number) => buffers[i]! };
    const owner = { getModel: () => model, doDraw: () => { width = mouth[2]! - mouth[0]!; expect([...closed]).toEqual(snapshot); } };
    const rig = attachDollRig({ _state: { l2d6Model: { _subdelegates: [{ getLive2DManager: () => ({ _models: [owner] }) }] } } });
    rig?.pose([0, 0, 0, 0], 1); owner.doDraw();
    expect(width).toBeCloseTo(0.42);
    expect([...mouth]).toEqual(snapshot);
    rig?.pose([0, 0, 0, 0], 0); owner.doDraw();
    expect(width).toBeCloseTo(0.2);
    rig?.destroy();
  });
  it("exports a neck and both hair physics groups", () => {
    const report = JSON.parse(readFileSync("source/media/live2d/takina-chibi/takina-chibi.psd2live.json", "utf8"));
    expect(report.layers.map((layer: { tag: string }) => layer.tag)).toEqual(expect.arrayContaining(["neck", "front hair", "back hair", "topwear"]));
    expect(report.physics.frontHair).toBe(true);
    expect(report.physics.backHair).toBe(true);
    expect(report.config.atlasSize).toBe(2048);
  });
  it("changes only hair screen colors and bounds the shader phase", () => {
    const calls: number[][] = [];
    const model = {
      getDrawableCount: () => 3,
      getDrawableId: (index: number) => ({ getString: () => ["ArtMeshFace", "ArtMeshFrontHair", "ArtMeshBackHair"][index] }),
      getDrawableVertexUvs: () => new Float32Array([0, 0, 1, 1]),
      getOverrideMultiplyAndScreenColor: () => ({
        setDrawableScreenColorEnabled: () => {},
        setDrawableScreenColorByRGBA: (...values: number[]) => calls.push(values),
      }),
    };
    const update = attachHairLight({ _state: { l2d6Model: { _subdelegates: [{
      getLive2DManager: () => ({ _models: [{ getModel: () => model }] }),
    }] } } });
    update?.(4);
    expect(calls.map(call => call[0])).toEqual([1, 2]);
    expect(calls.every(call => call[4] === 0.9)).toBe(true);
    expect(attachHairLight({})).toBeUndefined();
  });
});
