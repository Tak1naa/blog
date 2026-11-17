#!/usr/bin/env bash
set -euo pipefail

here=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
source_png="$here/base-transparent.png"
parts="$here/layers"
mkdir -p "$parts"
export MAGICK_THREAD_LIMIT=1
export MAGICK_MEMORY_LIMIT=192MiB
export MAGICK_MAP_LIMIT=256MiB

# Restore visible reference paint wherever isolated. Generated plates provide
# hidden hair/skin and an organic fringe matte in the original coordinates.
magick "$source_png" -alpha extract -threshold 50% "$parts/reference-alpha.png"
magick "$here/hair-reference-full.raw.png" -channel A -level 40%,90% +channel "$parts/reference-hair-fill.png"
magick "$here/front-reference.raw.png" -channel A -level 40%,90% +channel -alpha extract "$parts/reference-fringe-alpha.png"
magick "$source_png" -alpha off \
  -fx 'j<965 && (j<600 || i<390 || i>640) && r<0.52 && g<r*1.18+0.018 && b-g<0.17 && b>r*0.85 ? 1 : 0' \
  -colorspace gray "$parts/reference-hair-colour.png"
magick "$parts/reference-hair-colour.png" "$parts/reference-alpha.png" \
  -compose Multiply -composite "$parts/reference-visible-hair.png"
magick "$source_png" "$parts/reference-visible-hair.png" \
  -compose CopyOpacity -composite "$parts/reference-hair-paint.png"

# The front matte separates the bangs from eyes. Visible side locks stay over
# the original uniform; continuous rear paint provides motion overlap.
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 0,600 1023,964' "$parts/reference-side-support.png"
magick "$parts/reference-fringe-alpha.png" "$parts/reference-side-support.png" \
  -colorspace gray -evaluate-sequence Max "$parts/reference-front-support.png"
magick "$parts/reference-front-support.png" "$parts/reference-visible-hair.png" \
  -compose Multiply -composite "$parts/reference-front-alpha.png"
magick "$source_png" "$parts/reference-front-alpha.png" \
  -compose CopyOpacity -composite -trim "$parts/front-hair.png"
magick "$parts/reference-hair-fill.png" "$parts/reference-hair-paint.png" \
  -compose Over -composite \
  \( "$parts/reference-hair-fill.png" -alpha extract "$parts/reference-alpha.png" -compose Multiply -composite \) \
  -compose CopyOpacity -composite -trim "$parts/back-hair.png"

# Blank skin replaces the old face with hair baked into its forehead. Only
# original skin (including ears/nose) is restored; eyes/mouth remain separate.
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 511,607 44,14 0,360' "$parts/mouth-mask.png"
magick "$source_png" -alpha off \
  -fx 'j>=260 && j<664 && i>210 && i<815 && r>0.55 && r-b>0.12 ? 1 : 0' \
  -colorspace gray \( "$parts/mouth-mask.png" -negate \) -compose Multiply -composite \
  "$parts/reference-alpha.png" -compose Multiply -composite "$parts/reference-skin-alpha.png"
# Close tiny matte seams and recover the reference's dark jaw outline. The
# mouth stays blank underneath its independent opening/closing artwork.
magick "$parts/reference-skin-alpha.png" -morphology Close Disk:2 -morphology Dilate Disk:3 \
  \( "$parts/mouth-mask.png" -negate \) -compose Multiply -composite "$parts/reference-skin-alpha.png"
magick "$source_png" "$parts/reference-skin-alpha.png" -compose CopyOpacity -composite "$parts/reference-skin-paint.png"
magick "$here/face-reference.raw.png" -channel A -level 40%,90% +channel \
  "$parts/reference-skin-paint.png" -compose Over -composite "$parts/reference-face-fill.png"
magick -size 1024x1536 xc:black -colorspace gray -fill white -draw 'rectangle 0,0 1023,549' \
  "$parts/reference-skin-alpha.png" "$parts/mouth-mask.png" -colorspace gray \
  -evaluate-sequence Add "$parts/reference-face-contour.png"
magick "$parts/reference-face-fill.png" \
  \( +clone -alpha extract "$parts/reference-face-contour.png" -compose Multiply -composite \) \
  -compose CopyOpacity -composite -trim "$parts/face.png"

# Restore the reference's glossy uniform, hands and legs; retain existing
# hidden sleeve/neck backpaint behind hair for small-angle soft-joint movement.
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 0,650 1023,1535' \
  \( "$parts/reference-visible-hair.png" -negate \) -compose Multiply -composite \
  "$parts/reference-alpha.png" -compose Multiply -composite \
  \( "$here/matte-body-backpaint.png" -alpha extract -threshold 50% \) \
  -compose Multiply -composite "$parts/reference-body-alpha.png"
magick "$source_png" "$parts/reference-body-alpha.png" -compose CopyOpacity -composite "$parts/reference-body-paint.png"
magick "$here/matte-body-backpaint.png" -channel A -level 40%,90% +channel \
  "$parts/reference-body-paint.png" -compose Over -composite "$parts/reference-body-fill.png"
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 0,690 1023,1535' "$parts/body-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 430,650 590,689' "$parts/neck-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 378,480 88,72 0,360' "$parts/eye-r-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 632,480 88,72 0,360' "$parts/eye-l-mask.png"
for part in body neck eye-r eye-l mouth; do
  input="$source_png"
  if [[ "$part" == body || "$part" == neck ]]; then input="$parts/reference-body-fill.png"; fi
  magick "$input" \( +clone -alpha extract -threshold 50% "$parts/$part-mask.png" -compose Multiply -composite \) \
    -compose CopyOpacity -composite -trim "$parts/$part.png"
done
magick "$here/mouth-open.raw.png" -trim +repage -resize '74x32!' \
  -background none -gravity northwest -splice 475x597 -extent 1024x1536 -trim "$parts/mouth-open.png"

# Mixed RGB/gray inputs to evaluate-sequence can produce coloured masks. Those
# become partial alpha in CopyOpacity, causing a dark cheek stripe/mouth halo.
for mask in reference-front-support reference-face-contour; do
  spread=$(magick "$parts/$mask.png" -fx 'max(r,max(g,b))-min(r,min(g,b))' -format '%[fx:maxima]' info:)
  if [[ "$spread" != 0 ]]; then echo "Non-gray alpha mask: $mask" >&2; exit 1; fi
done
read -r face_x face_y < <(magick "$parts/face.png" -format '%X %Y\n' info:)
for y in 530 550 580 607 640; do
  alpha=$(magick "$parts/face.png" -format "%[fx:p{$((512-face_x)),$((y-face_y))}.a]" info:)
  if [[ "$alpha" != 1 ]]; then echo "Unexpected transparent face interior at 512,$y" >&2; exit 1; fi
done
mouth_alpha=$(magick "$parts/face.png" +repage \
  -crop "120x60+$((452-face_x))+$((578-face_y))" -alpha extract -format '%[fx:minima]' info:)
if [[ "$mouth_alpha" != 1 ]]; then echo 'Mouth underpaint contains a translucent rim' >&2; exit 1; fi

magick -size 1024x1536 xc:none "$parts/back-hair.png" "$parts/body.png" \
  "$parts/neck.png" "$parts/face.png" "$parts/eye-r.png" "$parts/eye-l.png" \
  "$parts/mouth.png" "$parts/front-hair.png" -background none -layers merge "$here/composite-reference.png"
magick "$here/composite-reference.png" \
  \( "$parts/back-hair.png" -set label 'back hair' \) \
  \( "$parts/body.png" -set label 'topwear body' \) \
  \( "$parts/neck.png" -set label 'neck' \) \
  \( "$parts/face.png" -set label 'face' \) \
  \( "$parts/eye-r.png" -set label 'eyewhite-r' \) \
  \( "$parts/eye-l.png" -set label 'eyewhite-l' \) \
  \( "$parts/mouth.png" -set label 'mouth close' \) \
  \( "$parts/mouth-open.png" -set label 'mouth open' \) \
  \( "$parts/front-hair.png" -set label 'front hair' \) \
  -depth 8 "$here/takina-chibi.psd"
echo "$here/takina-chibi.psd"
