const releaseSignals = [
  {
    label: "Desktop-first runtime",
    detail: "Operate vrOS from the control center even when SteamVR is not front-and-center.",
  },
  {
    label: "Overlay stack",
    detail: "Capture, keyboard, dashboard, HUD, chat, and creator tools share one system.",
  },
  {
    label: "Creator wiring",
    detail: "OBS, Twitch, and VRChat OSC stay close to the same control surface.",
  },
];

const capabilityCards = [
  {
    eyebrow: "Capture",
    title: "Bring real windows into VR without losing the desktop.",
    copy: "Capture monitors or app windows, position them in-space, and keep interaction and focus routing on the same track.",
    bullets: ["Window and display capture", "Pointer forwarding", "Throttle-aware overlay rendering"],
  },
  {
    eyebrow: "Control",
    title: "Switch between desktop and in-VR control instead of picking one.",
    copy: "The desktop control center and VR overlays mirror the same system so setup, debugging, and live use all stay coherent.",
    bullets: ["Desktop control center", "Dashboard and tools overlays", "Settings and state persistence"],
  },
  {
    eyebrow: "Input",
    title: "Keep typing and interaction usable in a headset.",
    copy: "vrOS includes an in-VR keyboard, focus-aware routing, and overlay interaction patterns built for longer sessions.",
    bullets: ["In-VR keyboard", "Focus-visible interaction states", "Layout and theme configuration"],
  },
  {
    eyebrow: "Creator",
    title: "Run stream and community workflows without alt-tabbing out of VR.",
    copy: "Chat, OBS control, automation, and VRChat OSC integrations sit close to your overlays instead of living in separate tools.",
    bullets: ["OBS scenes and actions", "Twitch chat surfaces", "VRChat OSC integration"],
  },
];

const workflowCards = [
  {
    title: "Streaming",
    copy: "Keep OBS control, Twitch chat, audio control, and capture panels near the same scene instead of juggling windows across monitors.",
  },
  {
    title: "Work in VR",
    copy: "Pin captured apps, use the keyboard overlay, and manage layouts from the desktop control center before you put the headset on.",
  },
  {
    title: "Automation",
    copy: "Use scripts, panels, and integrations as repeatable control surfaces for scenes, chat, overlays, and utility actions.",
  },
];

const compatibilityRows = [
  ["Primary platform", "Windows 11"],
  ["VR runtime", "SteamVR"],
  ["Control surfaces", "Desktop control center + in-VR overlays"],
  ["Core overlay types", "Capture, dashboard, HUD, keyboard, chat, utilities"],
  ["Launch integrations", "OBS, Twitch, VRChat OSC"],
  ["Docs and support", "Dedicated docs and support centers for release"],
];

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-link" href="/" aria-label="vrOS home">
          <img className="brand-mark" src="/assets/vros-logo.png" alt="" />
          <div>
            <p className="type-micro brand-kicker">vrOS / release track</p>
            <strong className="brand-name">VR overlays and desktop control center</strong>
          </div>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#workflows">Workflows</a>
          <a href="#compatibility">Compatibility</a>
          <a href="#release">Release</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="vros-badge" data-tone="primary">
                Preparing the final release
              </span>
              <span className="type-mono hero-meta">Windows + SteamVR + creator tooling</span>
            </div>
            <h1 className="type-display hero-title">
              Build your overlay stack once, then control it from the desktop or from inside VR.
            </h1>
            <p className="type-body hero-body">
              vrOS is a desktop-first runtime with in-VR overlays for capture, keyboard input,
              chat, utilities, and creator workflows. It is designed to stay readable, stable,
              and close to the work you are already doing in SteamVR.
            </p>
            <div className="hero-actions">
              <a
                className="vros-btn"
                data-variant="primary"
                data-size="lg"
                href="https://store.steampowered.com/app/3873610"
                target="_blank"
                rel="noreferrer"
              >
                <span className="vros-btn-label">View on Steam</span>
              </a>
              <a className="vros-btn" data-variant="secondary" data-size="lg" href="https://docs.vros.cat/">
                <span className="vros-btn-label">Read the docs</span>
              </a>
              <a className="vros-btn" data-variant="ghost" data-size="lg" href="https://support.vros.cat/">
                <span className="vros-btn-label">Open support</span>
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

          <aside className="hero-frame vros-card" data-raised="true">
            <div className="hero-frame-head">
              <div>
                <p className="type-micro frame-eyebrow">Launch deck</p>
                <h2 className="type-h2">Release surface map</h2>
              </div>
              <span className="vros-badge" data-tone="success">
                Docs + support ready
              </span>
            </div>
            <div className="hero-brand-panel" aria-label="vrOS release brand panel">
              <div className="hero-brand-row">
                <span className="vros-badge" data-tone="primary">
                  Canonical mark
                </span>
                <span className="type-mono hero-brand-meta">desktop + VR + release</span>
              </div>
              <div className="hero-brand-stage">
                <div className="hero-brand-halo" aria-hidden="true" />
                <img className="hero-brand-image" src="/assets/vros-logo.png" alt="vrOS app icon" />
              </div>
              <div className="hero-brand-copy">
                <div>
                  <p className="type-micro">Release identity</p>
                  <strong className="type-h3">One mark across every public surface</strong>
                </div>
                <p className="type-small">
                  The landing site, docs center, and support center now share the same app mark as
                  the desktop runtime.
                </p>
              </div>
            </div>
            <div className="frame-grid">
              <article className="frame-tile">
                <p className="type-micro">Capture</p>
                <strong className="type-h3">Desktop windows in-space</strong>
              </article>
              <article className="frame-tile">
                <p className="type-micro">Input</p>
                <strong className="type-h3">Keyboard + focus routing</strong>
              </article>
              <article className="frame-tile">
                <p className="type-micro">Automation</p>
                <strong className="type-h3">Scripts, tools, and panels</strong>
              </article>
              <article className="frame-tile">
                <p className="type-micro">Creator</p>
                <strong className="type-h3">OBS, Twitch, VRChat OSC</strong>
              </article>
            </div>
          </aside>
        </section>

        <section className="section-block" id="features">
          <div className="section-heading">
            <p className="type-micro">Feature map</p>
            <h2 className="type-h1">A release site built around the product people actually touch.</h2>
            <p className="type-body section-copy">
              The release story centers on the real control surfaces: the runtime, the desktop
              control center, and the overlay stack you bring into SteamVR.
            </p>
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
            <p className="type-micro">Workflow lanes</p>
            <h2 className="type-h1">Streaming, utility, and long-session VR work all share the same grammar.</h2>
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
            <p className="type-micro">Compatibility</p>
            <h2 className="type-h1">The release scope is explicit.</h2>
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
              <p className="type-micro">Release path</p>
              <h2 className="type-h1">Launch with docs, support, and clear upgrade paths already attached.</h2>
              <p className="type-body">
                The release stack now has a dedicated landing page, docs center, and support hub so
                users have a stable place to install, learn, and get unstuck.
              </p>
            </div>
            <div className="release-actions">
              <a className="vros-btn" data-variant="secondary" href="https://docs.vros.cat/">
                <span className="vros-btn-label">Docs center</span>
              </a>
              <a className="vros-btn" data-variant="secondary" href="https://support.vros.cat/">
                <span className="vros-btn-label">Support center</span>
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="type-micro">vrOS</p>
          <p className="type-small">SteamVR overlays, creator control, and desktop-first setup.</p>
        </div>
        <div className="footer-links">
          <a href="https://docs.vros.cat/">Docs</a>
          <a href="https://support.vros.cat/">Support</a>
          <a href="https://store.steampowered.com/app/3873610" target="_blank" rel="noreferrer">
            Steam
          </a>
        </div>
      </footer>
    </div>
  );
}
