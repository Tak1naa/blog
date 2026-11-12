import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";

// Run after PSD2Live export: deterministic Cubism expressions, no baked images
// or runtime-only pretend labels. All values target parameters in the MOC.
const directory = process.argv[2];
if (!directory) throw new Error("Usage: node finalize-model.mjs EXPORT_DIRECTORY");
const presets = {
  neutral: { ParamEyeLOpen: 1, ParamEyeROpen: 1, ParamMouthForm: 0, ParamEyeBallX: 0, ParamEyeBallY: 0 },
  smile: { ParamEyeLOpen: 0.85, ParamEyeROpen: 0.85, ParamMouthForm: 0.9, ParamEyeBallX: 0, ParamEyeBallY: 0 },
  wink: { ParamEyeLOpen: 0, ParamEyeROpen: 1, ParamMouthForm: 0.7, ParamEyeBallX: 0.2, ParamEyeBallY: 0 },
  curious: { ParamEyeLOpen: 1, ParamEyeROpen: 1, ParamMouthForm: -0.3, ParamEyeBallX: 0.6, ParamEyeBallY: 0.3 },
  sleepy: { ParamEyeLOpen: 0.45, ParamEyeROpen: 0.45, ParamMouthForm: -0.2, ParamEyeBallX: 0, ParamEyeBallY: -0.4 },
  carried: { ParamEyeLOpen: 0.7, ParamEyeROpen: 0.7, ParamMouthForm: -0.6, ParamEyeBallX: -0.3, ParamEyeBallY: -0.2 },
  laugh: { ParamEyeLOpen: 0.65, ParamEyeROpen: 0.65, ParamMouthForm: 1, ParamMouthOpenY: 0.85, ParamEyeBallX: 0, ParamEyeBallY: 0 },
  surprised: { ParamEyeLOpen: 1, ParamEyeROpen: 1, ParamMouthForm: -1, ParamMouthOpenY: 1, ParamEyeBallX: 0, ParamEyeBallY: 0.2 },
  pout: { ParamEyeLOpen: 0.8, ParamEyeROpen: 0.8, ParamMouthForm: -1, ParamMouthOpenY: 0.16, ParamEyeBallX: -0.2, ParamEyeBallY: 0 },
  speaking: { ParamEyeLOpen: 1, ParamEyeROpen: 1, ParamMouthForm: 0.3, ParamMouthOpenY: 0.45, ParamEyeBallX: 0.2, ParamEyeBallY: 0 },
};
// Reset the mouth opening in every closed-mouth preset; never retain the last
// open expression when a user leaves the model or starts dragging.
for (const parameters of Object.values(presets)) parameters.ParamMouthOpenY ??= 0;
const configPath = resolve(directory, "takina-chibi.model3.json");
const config = JSON.parse(readFileSync(configPath, "utf8"));
// Exported models keep stable names. Version the binary/atlas references so a
// refreshed browser cannot combine new geometry with an old opaque texture.
const version = file => {
  const clean = file.split("?")[0];
  const hash = createHash("sha256").update(readFileSync(resolve(directory, clean))).digest("hex").slice(0, 12);
  return `${clean}?v=${hash}`;
};
config.FileReferences.Moc = version(config.FileReferences.Moc);
config.FileReferences.Textures = config.FileReferences.Textures.map(version);
config.FileReferences.Expressions = Object.entries(presets).map(([Name, parameters]) => {
  const File = `takina-chibi.${Name}.exp3.json`;
  writeFileSync(resolve(directory, File), JSON.stringify({
    Type: "Live2D Expression", FadeInTime: 0.25, FadeOutTime: 0.3,
    Parameters: Object.entries(parameters).map(([Id, Value]) => ({ Id, Value, Blend: "Overwrite" })),
  }, null, 2) + "\n");
  return { Name, File };
});
writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Registered ${Object.keys(presets).length} Cubism expressions`);
