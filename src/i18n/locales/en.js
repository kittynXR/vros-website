const en = {
  meta: {
    title: "vrOS | VR overlays and desktop control center",
    description:
      "vrOS brings desktop control, capture, keyboard, and creator workflows into VR with a desktop-first runtime and SteamVR overlays.",
  },
  topbar: {
    kicker: "vrOS / release",
    name: "SteamVR overlays + creator tools",
    nav: {
      features: "Features",
      workflows: "Workflows",
      compatibility: "Compatibility",
      release: "Release",
    },
    languageLabel: "Language",
  },
  hero: {
    badge: "Available on Steam",
    meta: "Windows + SteamVR",
    title: "A SteamVR overlay system with extra tools for creators.",
    body: "vrOS lets you bring desktop windows into VR, use a VR keyboard, and manage overlays from desktop or in-headset. OBS, Twitch, and VRChat tools are there when you want them.",
    cta: {
      steam: "View on Steam",
      docs: "Read the docs",
      support: "Open support",
    },
    signals: [
      { label: "Overlay system", detail: "Put desktop windows and tools into VR." },
      { label: "Desktop + VR", detail: "Set up on desktop, then use it in-headset." },
      { label: "Creator tools", detail: "OBS, Twitch, and VRChat are there when you need them." },
    ],
    media: {
      eyebrow: "Trailer",
      title: "See vrOS in action",
      caption: "Overlays, capture, keyboard, and creator tools — running live.",
      playLabel: "Play trailer",
      posterAlt: "vrOS trailer poster",
    },
  },
  features: {
    eyebrow: "Features",
    title: "vrOS is an overlay system first.",
    copy: "Windows in VR, input that works, and a few extra tools for creators.",
    cards: [
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
    ],
  },
  workflows: {
    eyebrow: "Use cases",
    title: "Built for everyday VR use and creator setups.",
    cards: [
      { title: "Streaming", copy: "Keep OBS, chat, and capture surfaces close to the same VR scene." },
      { title: "Work in VR", copy: "Pin apps in space, use the keyboard overlay, and manage layouts from desktop first." },
      { title: "Creative tools", copy: "Add creator-facing tools only when you need them, without changing the core overlay setup." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibility",
    title: "Release scope",
    rows: [
      ["Primary platform", "Windows 11"],
      ["VR runtime", "SteamVR"],
      ["Control", "Desktop control center + VR overlays"],
      ["Core tools", "Capture, dashboard, keyboard, chat, utilities"],
      ["Creator extras", "OBS, Twitch, VRChat OSC"],
      ["Help", "Docs and support sites"],
    ],
  },
  release: {
    eyebrow: "Release path",
    title: "Steam for install. Docs and support when needed.",
    copy: "The public site is focused on the basics: what vrOS is, how to install it, and where to get help.",
    cta: { docs: "Docs center", support: "Support center" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "SteamVR overlays with optional creator tools.",
    links: { docs: "Docs", support: "Support", steam: "Steam" },
  },
};

export default en;
