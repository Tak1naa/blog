# 本轮 imagegen 素材生成记录

## 恢复旧脸与独立口腔（2026-10-06）

输入 `matte-face-backpaint.png`，透明背景。输出 `exec-86d49736-12f9-468c-aa7e-45518188cf81.png` 复制为 `face-restored.raw.png`，原始输出保留在上述Codex生成目录。生成未精确保持注册；脚本去除外围低alpha晕光、裁边后注册436×390于294,270。

Edit this image for a layered 2D animation asset. Extract ONLY the exact original peach skin FACE shape from this existing character; preserve the old gently tapering cheeks and chin exactly, do not redesign or make rounder/wider. Remove all black hair, neck, body and clothes; everything except the face must be genuine transparent alpha. Keep the face at its original pixel position and size on the 1024x1536 canvas. Fill in the hidden forehead behind the bangs smoothly up to y270, face ends at the exact original chin about y660. No eyes, eyebrows, nose or mouth (source face already blank). No border, no halo, no shadows outside face. Same original matte peach skin painting and subtle cheek blush; preserve original face identity and contour precisely. Single face cutout for compositing over original eyes and mouth, not a new character portrait.

独立口腔，无参考输入，透明背景。输出 `exec-5961aea8-a35b-46a8-8841-dce3c9f2f2b8.png` 复制为 `mouth-open.raw.png`；裁边注册74×32于475,597。

Create a single tiny open smiling anime mouth cutout for a matte chibi Takina Inoue Live2D character. Only the mouth, genuine transparent background, centered on square canvas. Wide soft U shaped small dark reddish brown oral cavity, very fine warm brown lip outline, subtle pink tongue at bottom and thin white upper teeth; flat hand painted cel shading, not glossy. Width about twice height. No face, skin rectangle, nose, eyes, text, shadow, surrounding glow or other objects. This mouth will be registered at about 74x38 source pixels and deformed with ParamMouthOpenY/ParamMouthForm to laugh, speak, pout and gasp.

## v3 独立透明发片与脸部（2026-10-05）

三张参考输入均为 `matte-transparent.png`，要求透明背景。生成未保持精确注册，因此脚本按实际 alpha 裁边后注册到1024×1536：后发790×950位于117,4；刘海668×435位于178,5；脸440×390位于292,270。原始输出保留在本地生成器工作目录，下列工作副本已复制到本目录。

### back-hair-v3.raw.png

原始输出：`exec-b85ee8ed-b4a3-44fe-a9a4-a92b76894451.png`。

Use case: precise-object-edit. Technical Live2D back-hair-only layer, registered 1024x1536 canvas. Image is edit target and exact placement reference. Keep the exact black-blue matte anime hair outer silhouette at original pixel position from crown y5 through long curled ends y950. REMOVE entire face, eyes, ears, bangs, neck, clothes and body. BACKPAINT the area formerly hidden behind face and neck with continuous near-black hair, from crown to shoulder blades y950: there must be a full uninterrupted hair curtain behind the head, not a face-shaped empty hole. Maintain subtle longitudinal hair strands, matte cel shading and clean smooth tapered tips. This is ONLY hair on true transparent background: no skin, no clothing, no eyes, no mouth, no white/black backdrop, NO glow or halo. Do not move or resize the silhouette. Transparent outside actual hair, solid hair behind formerly occluded face and neck.

### front-hair-v3.raw.png

原始输出：`exec-829bb0fe-67ad-4e70-ac14-57bdde27b7dd.png`。

Technical Live2D asset extraction: ONLY the top crown and front bangs from the reference girl, no other elements. Preserve this specific near-black blue-violet matte cel anime hairstyle and jagged rounded individual fringe tips. Outer dome starts at original image top, bangs end at original y435; EXCLUDE long side hair, all eyes/eyebrows, face, ears, neck, clothes, body. Transparent in every gap between fringe strands, even tiny V-shaped gaps. No peach skin fringe stuck to black hair. Clean crisp tapered tips with natural anti-aliased alpha; no glow or exterior halo. 1024x1536 transparent canvas, keep hair crown in top 440 pixels at x180..844 and lower 1000 pixels empty. No background, text, shadow, backdrop. This is a real cutout layer for the existing registered model, not a new full character.

### face-v3.raw.png

原始输出：`exec-2f9ac1ac-a119-4f37-a853-567d0d1d11d0.png`。

Technical Live2D face underpaint extraction. ONLY a blank face base of this exact chibi girl, pale peach matte cel shading, rounded cheeks and subtly tapered chin. Include complete forehead hidden behind bangs. Remove ALL hair, ears, eyes, eyebrows, nose marks, mouth, neck, clothes and body. No dark stray hairs or highlights around edge. A clean full blank peach head/face shape on actual transparent background. Keep original face contour and skin color, no plastic lighting, no glow. This will be positioned behind separate eyes and front bangs. No backdrop or text. Use 1024x1536 canvas, blank face occupying original x294..730 and y270..660 if possible. Outer alpha accurately follows actual smooth face shape.

输入：`base-transparent.png`，后两张以第一张结果为参考；生成器要求透明背景。工作副本仅用于 PSD 分层，原始生成输出未删除。

## 哑光原画 → matte-transparent.png

Edit this exact full-body chibi Takina Inoue artwork for a 2D Live2D blog mascot. Preserve EXACT canvas 1024x1536, character size, pose, silhouette and positions of all facial features and clothing. Change rendering only: matte hand-drawn anime cel shading, soft restrained shadows, clean subtle outlines, NO plastic toy sheen, NO shiny hard bands or highlights in the black hair. Hair should be near-black with subtle blue-violet diffuse shading, no specular painted shine; separate moving light will be added at runtime. Skin matte not waxy, navy uniform with gray panels and subdued teal bow. Full transparent background, no base, no backdrop, no text. This is a registered artwork edit; do not move or scale character.

## 眼口补底 → matte-face-backpaint.png

Technical Live2D face backpaint. Preserve exact 1024x1536 image and exact face/head/body/clothing/hair silhouette, outlines, position and flat cel colors of this artwork. Remove both eyes including eyebrows eyelashes white sclera and purple irises, nose mark and mouth from the face only, replace with continuous flat peach skin same color without any marks; preserve face outline and bangs exactly. Every other pixel unchanged. Keep transparent background; no glow or backdrop. Do not rescale or move anything.

## 衣袖与脖子补底 → matte-body-backpaint.png

Create a registered body-only Live2D layer from this exact image. Exact canvas 1024x1536. Keep the uniform torso, skirt, bow, arms, hands, legs and shoes at their EXACT original positions and sizes; preserve linework and matte colors. Remove entire head including face and ALL black hair, including side locks and tips overlapping shoulders and arms. Repaint the uniform shoulders/sleeves where hair previously occluded them, navy cloth continuations, keep original neckline and a small visible neck from y650 to690. Do not move body upward to fill removed head. Upper 650 pixels completely transparent; surrounding body completely transparent, no halo/glow/background. Only the registered body and small neck remain.

生成不能保证逐像素注册或完全无晕光；脚本分层后仍需运行时验收。此次保留原图以便追溯。
