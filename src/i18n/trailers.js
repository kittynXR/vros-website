// Per-locale trailer source config.
//
// Supported kinds:
//   { kind: "self" }                       → /assets/trailers/{locale}/trailer-{locale}-1080p.{webm,mp4}
//   { kind: "youtube", id: "VIDEOID" }     → privacy-friendly youtube-nocookie embed
//   { kind: "bilibili", bvid: "BV..." }    → bilibili player (China)
//   { kind: "vimeo", id: "12345" }         → vimeo player
//
// Optional shared overrides on any kind:
//   poster:   "/assets/trailers/{locale}/custom-poster.jpg"   override poster image
//   captions: [{ srclang: "en", src: "/path.vtt", label: "English" }]   self-host only
//
// Fallback order at runtime:
//   1. requested locale entry
//   2. en entry
//   3. static hero screenshot (handled in component)

export const TRAILERS = {
  en: { kind: "self" },
  ja: { kind: "self" },
  es: { kind: "self" },
  fr: { kind: "self" },
  de: { kind: "self" },
  it: { kind: "self" },
  ru: { kind: "self" },
  ko: { kind: "self" },
  "zh-Hans": { kind: "self" },
  ca: { kind: "self" },
};

export function selfHostSources(locale) {
  return [
    { src: `/assets/trailers/${locale}/trailer-${locale}-1080p.webm`, type: "video/webm" },
    { src: `/assets/trailers/${locale}/trailer-${locale}-1080p.mp4`, type: "video/mp4" },
  ];
}

export function selfHostPoster(locale) {
  return `/assets/trailers/${locale}/poster-${locale}.jpg`;
}

export function youtubeEmbedUrl(id, { autoplay = false } = {}) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function bilibiliEmbedUrl(bvid, { autoplay = false } = {}) {
  const params = new URLSearchParams({
    bvid,
    page: "1",
    high_quality: "1",
    danmaku: "0",
    autoplay: autoplay ? "1" : "0",
  });
  return `https://player.bilibili.com/player.html?${params.toString()}`;
}

export function vimeoEmbedUrl(id, { autoplay = false } = {}) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

export function resolveTrailer(locale) {
  const fallbackLocale = "en";
  const requested = TRAILERS[locale];
  if (requested) return { locale, config: requested };
  if (TRAILERS[fallbackLocale]) return { locale: fallbackLocale, config: TRAILERS[fallbackLocale] };
  return null;
}
