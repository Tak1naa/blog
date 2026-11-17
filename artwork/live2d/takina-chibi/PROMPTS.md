# Reference restyle prompts — 2026-11-17

Method: built-in image_gen, transparent_background=true; no API/CLI generation or video generation. Every call used base-transparent.png as its sole reference. Raw outputs remain intact. build-reference-layers.sh restores original visible paint and uses these generated plates for hidden regions and the organic fringe matte.

Saved project assets:

- `hair-reference-full.raw.png`: continuous hair backing plate.
- `front-reference.raw.png`: organic front-hair matte; visible colour is restored from the reference.
- `face-reference.raw.png`: blank skin underpaint.

Original reference: `base-transparent.png`, SHA-256 `afff1c0da36b94209334bbcad077451dc2c77823e3e9d6938d07a6529e84a5a1`.

## full_hair

Use case: identity-preserve / technical Live2D cutout and hidden-area completion. Input image 1 is the exact original Takina chibi artwork, NOT just a general style reference. Create one isolated FULL HAIR layer from this artwork on a truly transparent 1024 x 1536 portrait canvas, preserving original registration and scale. Keep the entire original glossy blue-black long hair with EXACT original outer contour, original crown at x~510,y~8, side extent x~130..900, original hair-tip height y~950, and the exact original LONG STRAIGHT POINTED BANGS (not a rounded bob wig, no new haircut). Preserve the reference's hard blue-gray cel-shaded highlights and every visible lock as closely as possible. Remove the face, eyes, ears, neck, clothing, hands, body, legs and shoes COMPLETELY. Fill only the newly exposed central region behind the removed face and upper torso with plausible continuous dark hair, so this is a single connected full hair piece, with no face-shaped transparent hole. All area outside the hair must be actual alpha transparency, no glow/background/shadow/checkerboard. Do not change the hairstyle, simplify it, make it matte, add ornaments, rearrange strands, or add text. Keep hair in the same position on the ORIGINAL FULL CANVAS with empty transparent lower half, do not center/enlarge/crop the hair to fill the image. Deliver just this ONE full-hair cutout, no labels, no montage.

## front

Use case: identity-preserve / exact technical Live2D extraction. Input image 1 is the exact character design target. Extract ONLY the FRONT HAIR CAP AND LONG STRAIGHT POINTED BANGS from the original reference. Preserve the original crown, bangs shapes, hard blue-gray glossy highlights, dark ink outlines, colors, scale and position EXACTLY; this is a cutout, not a redesign. Transparent 1024x1536 full original canvas, hair crown near (510,8), front-cap sides near x180..840, long central fringe tips near y435. Remove EVERYTHING ELSE: no face, skin slivers, eyes, eyebrows, ears, neck, body, clothes, long hair below the front-cap fringe. The openings between the bangs and all exterior must be genuinely transparent. Use the original individual long angular fringe tips; do not replace with a rounded bob wig or shorter/matte bangs. Preserve all visible reference pixels as faithfully as possible. Do not recenter, resize or crop the extracted object to fill the canvas. Only one front-hair cutout, no text, diagrams or background.

## face

Use case: identity-preserve / Live2D hidden-region completion. Input image 1 is the exact character design target. Produce ONLY a blank FACE SKIN PLATE, with the reference's identical face outline, warm peach skin gradients, rounded cheeks and original chin location. Keep it on a transparent 1024x1536 full original canvas in exactly the original coordinates: visible face roughly x290..731,y275..661, chin y660. Preserve the original facial proportions, cheek fullness and shading. Remove all hair, eyes, eyelashes, eyebrows, mouth, nose, ears outside the face contour, neck and body. Complete the skin behind the removed eyes, mouth and bangs with smooth consistent skin, including a full rounded forehead up to about y260. This is a technical blank underpaint for separate original eye and mouth layers, not a new character face. Preserve original visible face shape and colors, do not change size or placement, do not make it matte/white/pink, no hair or bangs painted into the skin. Actual transparent exterior, no glow, shadows, background or checkerboard. One blank skin plate, no text. Leave all the unused original canvas transparent; do not crop or center.
