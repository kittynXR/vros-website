#!/usr/bin/env bash
# Convert release screenshots from C:\art_files\vrOS_screencaps\vros_v1_release
# into web-optimized 1600w JPGs under public/assets/screenshots/.
#
# Source layout uses lowercase 2-letter locale codes (cn, de, en, es, fr, it,
# ja, ko, ru) except MultiView_A_full_dash_kb which uses uppercase
# {LOCALE}_full_dash_kb.png. We map "cn" -> "zh-Hans" on output. Catalan (ca)
# has no source assets and falls back to en at runtime.

set -euo pipefail

SRC_ROOT="/c/art_files/vrOS_screencaps/vros_v1_release"
DEST_ROOT="public/assets/screenshots"
LOCALES=(cn de en es fr it ja ko ru)
WIDTH=1600
QUALITY=4

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg required" >&2
  exit 1
fi

map_locale_out() {
  case "$1" in
    cn) echo "zh-Hans" ;;
    *)  echo "$1" ;;
  esac
}

# category : source_dir : filename_template_lowercase : filename_template_uppercase
declare -a JOBS=(
  "hero|MultiView_A_full_dash_kb|UPPER|_full_dash_kb.png"
  "features/overlays|compact_dash|LOWER|.png"
  "features/desktop|settings_desktop|LOWER|.png"
  "features/input|settings_keyboard|LOWER|.png"
  "features/creator|obs_view|LOWER|.png"
  "workflows/streaming|streams_view|LOWER|.jpg"
  "workflows/work|alerts_xso|LOWER|.png"
  "workflows/creative|twitch_addons|LOWER|.png"
)

total=0
for job in "${JOBS[@]}"; do
  IFS="|" read -r category src_dir case_mode ext <<<"$job"
  dest_dir="${DEST_ROOT}/${category}"
  mkdir -p "$dest_dir"

  for locale in "${LOCALES[@]}"; do
    if [[ "$case_mode" == "UPPER" ]]; then
      locale_token="${locale^^}"
    else
      locale_token="$locale"
    fi
    src_path="${SRC_ROOT}/${src_dir}/${locale_token}${ext}"
    out_locale=$(map_locale_out "$locale")
    out_path="${dest_dir}/${out_locale}.jpg"

    if [[ ! -f "$src_path" ]]; then
      echo "SKIP missing: $src_path" >&2
      continue
    fi

    ffmpeg -y -loglevel error -i "$src_path" -vf "scale=${WIDTH}:-1" -q:v "$QUALITY" "$out_path"
    bytes=$(stat -c%s "$out_path" 2>/dev/null || wc -c <"$out_path")
    printf "  %-30s %s -> %s (%s bytes)\n" "$category" "$locale" "$out_locale" "$bytes"
    total=$((total + 1))
  done
done

echo "Converted $total screenshots into $DEST_ROOT"
