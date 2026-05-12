// Per-locale screenshot paths. Catalan has no source assets and falls back to en.
// Output of scripts/convert-screenshots.sh.

const SUPPORTED = new Set(["en", "ja", "es", "fr", "de", "it", "ru", "ko", "zh-Hans"]);

function pick(locale) {
  return SUPPORTED.has(locale) ? locale : "en";
}

export function heroShot(locale) {
  return `/assets/screenshots/hero/${pick(locale)}.jpg`;
}

export function featureShot(category, locale) {
  return `/assets/screenshots/features/${category}/${pick(locale)}.jpg`;
}

export function workflowShot(category, locale) {
  return `/assets/screenshots/workflows/${category}/${pick(locale)}.jpg`;
}

// Slug used by site.css for each card so we can address per-card screenshots
// from the locale dicts. Must match keys passed in feature/workflow dicts.
export const FEATURE_SLUGS = ["overlays", "desktop", "input", "creator"];
export const WORKFLOW_SLUGS = ["streaming", "work", "creative"];
