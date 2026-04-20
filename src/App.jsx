const releaseSignals = [
  {
    label: "Overlay system",
    detail: "Put desktop windows and tools into VR.",
  },
  {
    label: "Desktop + VR",
    detail: "Set up on desktop, then use it in-headset.",
  },
  {
    label: "Creator tools",
    detail: "OBS, Twitch, and VRChat are there when you need them.",
  },
];

const capabilityCards = [
  {
    eyebrow: "Overlays",
    title: "Put desktop apps into VR.",
    copy: "Capture windows or displays, place them where you want, and keep them usable.",
    bullets: ["Window and display capture", "In-VR placement", "Stable overlay rendering"],
  },
  {
    eyebrow: "Control",
    title: "Manage it from desktop or VR.",
    copy: "The desktop control center and VR overlays use the same system, so setup and live use stay in sync.",
    bullets: ["Desktop control center", "Dashboard overlays", "Saved settings"],
  },
  {
    eyebrow: "Input",
    title: "Keep input usable in-headset.",
    copy: "Use the VR keyboard and focus-aware input routing without breaking your workflow.",
    bullets: ["VR keyboard", "Pointer and focus routing", "Quick layout changes"],
  },
  {
    eyebrow: "Creator",
    title: "Bring creative tools into the same space.",
    copy: "Keep stream and community tools close to your overlays instead of scattered across other windows.",
    bullets: ["OBS controls", "Twitch chat", "VRChat OSC"],
  },
];

const workflowCards = [
  {
    title: "Streaming",
    copy: "Keep OBS, chat, and capture surfaces close to the same VR scene.",
  },
  {
    title: "Work in VR",
    copy: "Pin apps in space, use the keyboard overlay, and manage layouts from desktop first.",
  },
  {
    title: "Creative tools",
    copy: "Add creator-facing tools only when you need them, without changing the core overlay setup.",
  },
];

const compatibilityRows = [
  ["Primary platform", "Windows 11"],
  ["VR runtime", "SteamVR"],
  ["Control", "Desktop control center + VR overlays"],
  ["Core tools", "Capture, dashboard, keyboard, chat, utilities"],
  ["Creator extras", "OBS, Twitch, VRChat OSC"],
  ["Help", "Docs and support sites"],
];

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-link" href="/" aria-label="vrOS home">
          <img className="brand-mark" src="/assets/vros-logo.png" alt="" />
          <div>
            <p className="type-micro brand-kicker">vrOS / release</p>
            <strong className="brand-name">SteamVR overlays + creator tools</strong>
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
              <span className="type-mono hero-meta">Windows + SteamVR</span>
            </div>
            <h1 className="type-display hero-title">
              A SteamVR overlay system with extra tools for creators.
            </h1>
            <p className="type-body hero-body">
              vrOS lets you bring desktop windows into VR, use a VR keyboard, and manage overlays
              from desktop or in-headset. OBS, Twitch, and VRChat tools are there when you want them.
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
                <p className="type-micro frame-eyebrow">At a glance</p>
                <h2 className="type-h2">What ships</h2>
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
                  <strong className="type-h3">One mark, one public surface set</strong>
                </div>
                <p className="type-small">
                  The site, docs, and support center now match the desktop app.
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
            <p className="type-micro">Features</p>
            <h2 className="type-h1">vrOS is an overlay system first.</h2>
            <p className="type-body section-copy">
              Windows in VR, input that works, and a few extra tools for creators.
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
            <p className="type-micro">Use cases</p>
            <h2 className="type-h1">Built for everyday VR use and creator setups.</h2>
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
            <h2 className="type-h1">Release scope</h2>
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
              <h2 className="type-h1">Steam for install. Docs and support when needed.</h2>
              <p className="type-body">
                The public site is focused on the basics: what vrOS is, how to install it, and where to get help.
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
          <p className="type-small">SteamVR overlays with optional creator tools.</p>
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
