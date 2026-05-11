import { useEffect, useRef, useState } from "react";

import { useI18n, LOCALES } from "./i18n/index.jsx";
import {
  bilibiliEmbedUrl,
  resolveTrailer,
  selfHostPoster,
  selfHostSources,
  vimeoEmbedUrl,
  youtubeEmbedUrl,
} from "./i18n/trailers.js";

const SCREENSHOT_BASE = "/assets/screenshots";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  return (
    <label className="lang-switcher" aria-label={t("topbar.languageLabel")}>
      <span className="vros-sr-only">{t("topbar.languageLabel")}</span>
      <select
        className="lang-select"
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
      >
        {Object.entries(LOCALES).map(([code, info]) => (
          <option key={code} value={code}>
            {info.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function SelfHostedTrailer({ locale, config, t }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setPlaying(false);
    setFailed(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [locale]);

  if (failed) return <ScreenshotFallback t={t} />;

  const handlePlay = () => {
    const node = videoRef.current;
    if (!node) return;
    node.play().then(() => setPlaying(true)).catch(() => setFailed(true));
  };

  const sources = selfHostSources(locale);
  const poster = config.poster || selfHostPoster(locale);

  return (
    <>
      <video
        ref={videoRef}
        className="hero-media-video"
        playsInline
        controls={playing}
        preload="metadata"
        poster={poster}
        onEnded={() => setPlaying(false)}
        onError={() => setFailed(true)}
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
        {(config.captions || []).map((track) => (
          <track
            key={track.src}
            kind="subtitles"
            src={track.src}
            srcLang={track.srclang}
            label={track.label}
            default={track.default}
          />
        ))}
      </video>
      {!playing && (
        <button type="button" className="hero-media-play" onClick={handlePlay} aria-label={t("hero.media.playLabel")}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          <span>{t("hero.media.playLabel")}</span>
        </button>
      )}
    </>
  );
}

function EmbedTrailer({ locale, config, t }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(false);
  }, [locale]);

  let embedUrl = null;
  if (config.kind === "youtube") embedUrl = youtubeEmbedUrl(config.id, { autoplay: true });
  else if (config.kind === "bilibili") embedUrl = bilibiliEmbedUrl(config.bvid, { autoplay: true });
  else if (config.kind === "vimeo") embedUrl = vimeoEmbedUrl(config.id, { autoplay: true });
  if (!embedUrl) return <ScreenshotFallback t={t} />;

  const poster = config.poster || `${SCREENSHOT_BASE}/hero/hero-product-shot.jpg`;

  if (active) {
    return (
      <iframe
        className="hero-media-iframe"
        src={embedUrl}
        title={t("hero.media.title")}
        loading="lazy"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <>
      <img className="hero-media-fallback" src={poster} alt={t("hero.media.posterAlt")} />
      <button
        type="button"
        className="hero-media-play"
        onClick={() => setActive(true)}
        aria-label={t("hero.media.playLabel")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
        <span>{t("hero.media.playLabel")}</span>
      </button>
    </>
  );
}

function ScreenshotFallback({ t }) {
  return (
    <img
      className="hero-media-fallback"
      src={`${SCREENSHOT_BASE}/hero/hero-product-shot.jpg`}
      alt={t("hero.media.posterAlt")}
    />
  );
}

function HeroMedia() {
  const { locale, t } = useI18n();
  const resolved = resolveTrailer(locale);

  return (
    <aside className="hero-frame vros-card" data-raised="true">
      <div className="hero-frame-head">
        <div>
          <p className="type-micro frame-eyebrow">{t("hero.media.eyebrow")}</p>
          <h2 className="type-h2">{t("hero.media.title")}</h2>
        </div>
      </div>
      <div className="hero-media-stage">
        {resolved == null ? (
          <ScreenshotFallback t={t} />
        ) : resolved.config.kind === "self" ? (
          <SelfHostedTrailer locale={resolved.locale} config={resolved.config} t={t} />
        ) : (
          <EmbedTrailer locale={resolved.locale} config={resolved.config} t={t} />
        )}
      </div>
      <p className="type-small hero-media-caption">{t("hero.media.caption")}</p>
    </aside>
  );
}

export default function App() {
  const { t } = useI18n();
  const releaseSignals = t("hero.signals");
  const capabilityCards = t("features.cards");
  const workflowCards = t("workflows.cards");
  const compatibilityRows = t("compatibility.rows");

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-link" href="/" aria-label="vrOS home">
          <img className="brand-mark" src="/assets/vros-logo.png" alt="" />
          <div>
            <p className="type-micro brand-kicker">{t("topbar.kicker")}</p>
            <strong className="brand-name">{t("topbar.name")}</strong>
          </div>
        </a>
        <div className="topbar-tools">
          <nav className="nav-links" aria-label="Primary">
            <a href="#features">{t("topbar.nav.features")}</a>
            <a href="#workflows">{t("topbar.nav.workflows")}</a>
            <a href="#compatibility">{t("topbar.nav.compatibility")}</a>
            <a href="#release">{t("topbar.nav.release")}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="vros-badge" data-tone="success">
                {t("hero.badge")}
              </span>
              <span className="type-mono hero-meta">{t("hero.meta")}</span>
            </div>
            <h1 className="type-display hero-title">{t("hero.title")}</h1>
            <p className="type-body hero-body">{t("hero.body")}</p>
            <div className="hero-actions">
              <a
                className="vros-btn"
                data-variant="primary"
                data-size="lg"
                href="https://store.steampowered.com/app/3873610"
                target="_blank"
                rel="noreferrer"
              >
                <span className="vros-btn-label">{t("hero.cta.steam")}</span>
              </a>
              <a className="vros-btn" data-variant="secondary" data-size="lg" href="https://docs.vros.cat/">
                <span className="vros-btn-label">{t("hero.cta.docs")}</span>
              </a>
              <a className="vros-btn" data-variant="ghost" data-size="lg" href="https://support.vros.cat/">
                <span className="vros-btn-label">{t("hero.cta.support")}</span>
              </a>
            </div>
            <div className="signal-strip">
              {releaseSignals.map((signal) => (
                <article className="signal-item vros-card" key={signal.label}>
                  <p className="type-micro signal-label">{signal.label}</p>
                  <p className="type-small signal-detail">{signal.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <HeroMedia />
        </section>

        <section className="section-block" id="features">
          <div className="section-heading">
            <p className="type-micro">{t("features.eyebrow")}</p>
            <h2 className="type-h1">{t("features.title")}</h2>
            <p className="type-body section-copy">{t("features.copy")}</p>
          </div>
          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article className="vros-card capability-card" data-raised="true" key={card.title}>
                <p className="type-micro">{card.eyebrow}</p>
                <h3 className="type-h2">{card.title}</h3>
                <p className="type-body">{card.copy}</p>
                <ul className="detail-list">
                  {card.bullets.map((bullet) => (
                    <li className="type-small" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band" id="workflows">
          <div className="section-heading">
            <p className="type-micro">{t("workflows.eyebrow")}</p>
            <h2 className="type-h1">{t("workflows.title")}</h2>
          </div>
          <div className="workflow-grid">
            {workflowCards.map((workflow) => (
              <article className="workflow-card vros-card" key={workflow.title}>
                <h3 className="type-h2">{workflow.title}</h3>
                <p className="type-body">{workflow.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="compatibility">
          <div className="section-heading">
            <p className="type-micro">{t("compatibility.eyebrow")}</p>
            <h2 className="type-h1">{t("compatibility.title")}</h2>
          </div>
          <div className="compatibility-card vros-card" data-raised="true">
            {compatibilityRows.map(([label, value]) => (
              <div className="compatibility-row" key={label}>
                <span className="type-label">{label}</span>
                <span className="type-body">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="release-strip" id="release">
          <article className="release-callout vros-card" data-raised="true">
            <div>
              <p className="type-micro">{t("release.eyebrow")}</p>
              <h2 className="type-h1">{t("release.title")}</h2>
              <p className="type-body">{t("release.copy")}</p>
            </div>
            <div className="release-actions">
              <a className="vros-btn" data-variant="secondary" href="https://docs.vros.cat/">
                <span className="vros-btn-label">{t("release.cta.docs")}</span>
              </a>
              <a className="vros-btn" data-variant="secondary" href="https://support.vros.cat/">
                <span className="vros-btn-label">{t("release.cta.support")}</span>
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="type-micro">{t("footer.kicker")}</p>
          <p className="type-small">{t("footer.tagline")}</p>
        </div>
        <div className="footer-links">
          <a href="https://docs.vros.cat/">{t("footer.links.docs")}</a>
          <a href="https://support.vros.cat/">{t("footer.links.support")}</a>
          <a href="https://store.steampowered.com/app/3873610" target="_blank" rel="noreferrer">
            {t("footer.links.steam")}
          </a>
        </div>
      </footer>
    </div>
  );
}
