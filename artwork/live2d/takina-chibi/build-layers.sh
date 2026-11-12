#!/usr/bin/env bash
set -euo pipefail

here=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
source_png="$here/base-transparent.png"
parts="$here/layers"
mkdir -p "$parts"
export MAGICK_THREAD_LIMIT=1

# Independent cutouts restore the paint hidden behind face and fringe.
# Register real alpha assets; never approximate hair edges with polygons.
register() {
  magick "$here/$1-v3.raw.png" -channel A -level 40%,90% +channel -trim +repage \
    -resize "$2!" -background none -gravity northwest -splice "$3" \
    -extent 1024x1536 -trim "$parts/$1.png"
}
# Lower both hair layers by 32 source pixels relative to the unchanged face.
# Keeping the crown and rear hair together avoids a doubled cap edge.
register back-hair 790x950 117x36
register front-hair 668x435 178x37
magick "$here/face-restored.raw.png" -channel A -level 40%,90% +channel -trim +repage \
  -resize '436x390!' -background none -gravity northwest -splice 294x270 \
  -extent 1024x1536 -trim "$parts/face.png"
# Reuse the first edition's painted skin, instead of a newly generated face.
# The existing organic alpha supplies registration; the lowered front hair
# covers the original backpaint's fringe at the top of the face.
magick "$parts/face.png" -background none -flatten "$parts/face-alpha-reference.png"
magick "$here/face-backpaint.png" \( "$parts/face-alpha-reference.png" -alpha extract \) \
  -compose CopyOpacity -composite -trim "$parts/face.png"
magick "$here/mouth-open.raw.png" -trim +repage -resize '74x32!' \
  -background none -gravity northwest -splice 475x597 -extent 1024x1536 -trim "$parts/mouth-open.png"

# Keep each generated layer at the same canvas size so PSD2Live retains the
# registration of the face, eyes, and body. Preserve the source alpha rather
# than replacing it: CopyOpacity alone turns transparent margins into a box.
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 0,690 1023,1535' "$parts/body-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'rectangle 430,650 590,689' "$parts/neck-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 378,480 88,72 0,360' "$parts/eye-r-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 632,480 88,72 0,360' "$parts/eye-l-mask.png"
magick -size 1024x1536 xc:black -fill white -draw 'ellipse 511,607 44,14 0,360' "$parts/mouth-mask.png"

for part in body neck eye-r eye-l mouth; do
  input="$source_png"
  if [[ "$part" == body || "$part" == neck ]]; then
    input="$here/matte-body-backpaint.png"
  fi
  # Opaque character segmentation excludes the generator's faint exterior glow.
  magick "$input" \( +clone -alpha extract -threshold 50% "$parts/$part-mask.png" -compose Multiply -composite \) \
    -compose CopyOpacity -composite -trim "$parts/$part.png"
done
# Keep first-edition eye artwork and original registration, with no inset shift.
magick "$source_png" -crop 20x30+500+550 -trim "$parts/face-detail.png"
magick -size 1024x1536 xc:none "$parts/face.png" "$parts/face-detail.png" \
  -background none -layers merge -trim "$parts/face.png"
# A white merge background is easy to miss on the PSD preview. Fail before
# export if any exterior corner became opaque again.
face_corner_alpha=$(magick "$parts/face.png" \
  -format '%[fx:p{0,0}.a+p{w-1,0}.a+p{0,h-1}.a+p{w-1,h-1}.a]' info:)
if [[ "$face_corner_alpha" != "0" ]]; then
  echo "Face cutout has an opaque exterior corner; refusing to export" >&2
  exit 1
fi

magick -size 1024x1536 xc:none "$parts/back-hair.png" "$parts/body.png" \
  "$parts/neck.png" "$parts/face.png" "$parts/eye-r.png" "$parts/eye-l.png" \
  "$parts/mouth.png" "$parts/face-detail.png" "$parts/front-hair.png" -background none -layers merge "$here/composite-v3.png"
magick \
  "$here/composite-v3.png" \
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
