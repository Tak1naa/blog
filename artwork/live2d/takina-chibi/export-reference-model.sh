#!/usr/bin/env bash
set -euo pipefail
here=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
project=$(cd "$here/../../.." && pwd)
app=${PSD2LIVE_APP_DIR:?Set PSD2LIVE_APP_DIR to the extracted PSD2Live 1.4.2 lib/app directory}
output=$(mktemp -d "${TMPDIR:-/tmp}/takina-reference-export.XXXXXXXX")
trap 'rm -rf -- "$output"' EXIT

bash "$here/build-layers.sh"
java -Xmx512m -XX:ActiveProcessorCount=2 -Djava.awt.headless=true \
  -Djava.util.prefs.userRoot="$output/prefs" -cp "$app/*" io.github.psd2live.MainKt \
  --input "$here/takina-chibi.psd" --output "$output/model" --atlas 2048 \
  --head-strength 0.045 --body-strength 0.025 --no-cmo3 --lang en
node "$here/finalize-model.mjs" "$output/model"

target="$project/source/media/live2d/takina-chibi"
backup="$here/archive/before-export-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup"
cp -a "$target" "$backup/"
cp -a "$project/source/_data/experience.yml" "$backup/"
cp -a "$output/model/." "$target/"
node --input-type=module - "$target/takina-chibi.model3.json" "$project/source/_data/experience.yml" <<'NODE'
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
const [model, config] = process.argv.slice(2);
const version = createHash("sha256").update(readFileSync(model)).digest("hex").slice(0, 12);
const previous = readFileSync(config, "utf8");
const next = previous.replace(/takina-chibi\.model3\.json(?:\?v=[^\s]+)?/, `takina-chibi.model3.json?v=reference-${version}`);
if (previous === next && !previous.includes(`reference-${version}`)) throw Error("Model entry not found in experience.yml");
writeFileSync(config, next);
console.log(`Activated reference model ${version}; rebuild the site before previewing.`);
NODE
