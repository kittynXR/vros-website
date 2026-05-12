import { useEffect, useRef, useState } from "react";

import { useI18n, LOCALES } from "./i18n/index.jsx";
import { Flag } from "./i18n/flags.jsx";
import {
  FEATURE_SLUGS,
  WORKFLOW_SLUGS,
  featureShot,
  heroShot,
  workflowShot,
} from "./i18n/screenshots.js";
import {
  bilibiliEmbedUrl,
  resolveTrailer,
  selfHostPoster,
  selfHostSources,
  vimeoEmbedUrl,
  youtubeEmbedUrl,
} from "./i18n/trailers.js";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onDocPointer(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALES[locale];

  return (
    <div className="lang-switcher" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("topbar.languageLabel")}: ${current.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag locale={locale} className="lang-flag" />
        <span className="lang-trigger-name">{current.name}</span>
        <svg className="lang-chevron" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t("topbar.languageLabel")}>
          {Object.entries(LOCALES).map(([code, info]) => (
            <li key={code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className="lang-menu-item"
                data-active={code === locale}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
              >
                <Flag locale={code} className="lang-flag" />
                <span>{info.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
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

  if (failed) return <ScreenshotFallback locale={locale} t={t} />;

  const handlePlay = () => {
    const node = videoRef.current;
    if (!node) return;
    node.play().then(() => setPlaying(true)).catch(() => setFailed(true));
  };

  const sources = selfHostSources(locale);
  const poster = config.poster || heroShot(locale);

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
  if (!embedUrl) return <ScreenshotFallback locale={locale} t={t} />;

  const poster = config.poster || heroShot(locale);

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

function ScreenshotFallback({ locale, t }) {
  return (
    <img
      className="hero-media-fallback"
      src={heroShot(locale)}
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
          <ScreenshotFallback locale={locale} t={t} />
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
  const { locale, t } = useI18n();
  const releaseSignals = t("hero.signals");
  const capabilityCards = t("features.cards");
  const workflowCards = t("workflows.cards");
  const compatibilityRows = t("compatibility.rows");

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-link" href="/" aria-label="vrOS home">
          <img className="brand-mark" src="/assets/vros-logo-128.png" width="42" height="42" alt="" />
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
            {capabilityCards.map((card, index) => {
              const slug = FEATURE_SLUGS[index];
              return (
                <article className="vros-card capability-card" data-raised="true" key={card.title}>
                  {slug && (
                    <div className="card-shot">
                      <img src={featureShot(slug, locale)} alt={card.title} loading="lazy" />
                    </div>
                  )}
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
              );
            })}
          </div>
        </section>

        <section className="section-band" id="workflows">
          <div className="section-heading">
            <p className="type-micro">{t("workflows.eyebrow")}</p>
            <h2 className="type-h1">{t("workflows.title")}</h2>
          </div>
          <div className="workflow-grid">
            {workflowCards.map((workflow, index) => {
              const slug = WORKFLOW_SLUGS[index];
              return (
                <article className="workflow-card vros-card" key={workflow.title}>
                  {slug && (
                    <div className="card-shot">
                      <img src={workflowShot(slug, locale)} alt={workflow.title} loading="lazy" />
                    </div>
                  )}
                  <h3 className="type-h2">{workflow.title}</h3>
                  <p className="type-body">{workflow.copy}</p>
                </article>
              );
            })}
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
