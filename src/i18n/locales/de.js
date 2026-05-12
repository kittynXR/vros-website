const de = {
  meta: {
    title: "vrOS | VR-Overlays und Desktop-Kontrollzentrum",
    description:
      "vrOS bringt Desktop-Fenster, Aufnahme, eine VR-Tastatur und Creator-Workflows in SteamVR — mit einer Desktop-zuerst-Laufzeit.",
  },
  topbar: {
    kicker: "vrOS / Release",
    name: "SteamVR-Overlays + Creator-Tools",
    nav: {
      features: "Funktionen",
      workflows: "Workflows",
      compatibility: "Kompatibilität",
      release: "Release",
    },
    languageLabel: "Sprache",
  },
  hero: {
    badge: "Auf Steam verfügbar",
    meta: "Windows + SteamVR",
    title: "Ein SteamVR-Overlay-System mit zusätzlichen Tools für Creator.",
    body: "vrOS bringt Desktop-Fenster in die VR und stellt für die Eingabe eine VR-Tastatur bereit. Das Desktop-Kontrollzentrum bündelt Einstellungen und Präferenzen, ergänzt um ein Soundboard und einen Live-Tab für Streamer. OBS-, Twitch- und VRChat-Tools sind da, wenn du sie brauchst.",
    cta: {
      steam: "Auf Steam ansehen",
      docs: "Doku lesen",
      support: "Support öffnen",
    },
    signals: [
      { label: "Overlays in VR", detail: "Desktop-Fenster und Dashboards in der VR platzieren." },
      { label: "Desktop-Kontrollzentrum", detail: "Einstellungen, Soundboard und Live-Tab — alles am Desktop." },
      { label: "Creator-Tools", detail: "OBS, Twitch und VRChat zur Hand, wenn nötig." },
    ],
    media: {
      eyebrow: "Trailer",
      title: "vrOS in Aktion sehen",
      caption: "Overlays, Aufnahme, Tastatur und Creator-Tools — live im Einsatz.",
      playLabel: "Trailer abspielen",
      posterAlt: "vrOS-Trailer-Poster",
    },
  },
  features: {
    eyebrow: "Funktionen",
    title: "vrOS ist zuerst ein Overlay-System.",
    copy: "Fenster in der VR, eine Eingabe, die funktioniert, und einige Extra-Tools für Creator.",
    cards: [
      {
        eyebrow: "Overlays",
        title: "Desktop-Apps in die VR bringen.",
        copy: "Erfasse Fenster oder Bildschirme, platziere sie, wo du willst, und steuere sie über Dashboard-Overlays direkt aus der VR.",
        bullets: ["Fenster- und Bildschirmerfassung", "Platzierung in der VR", "Dashboard-Overlays zur Steuerung in der VR"],
      },
      {
        eyebrow: "Desktop",
        title: "Einstellungen und Creator-Tools — alles am Desktop.",
        copy: "Das Desktop-Kontrollzentrum bündelt sämtliche Einstellungen und Präferenzen sowie ein integriertes Soundboard und einen Live-Tab für Streamer. Alles außerhalb der VR vorbereiten, dann das Headset aufsetzen.",
        bullets: ["Alle Einstellungen und Präferenzen", "Integriertes Soundboard", "Live-Tab für Streamer"],
      },
      {
        eyebrow: "Eingabe",
        title: "Eingabe, die auch im Headset funktioniert.",
        copy: "Nutze die VR-Tastatur und fokusbewusstes Eingabe-Routing, ohne deinen Workflow zu unterbrechen.",
        bullets: ["VR-Tastatur", "Pointer- und Fokus-Routing", "Schnelle Layoutwechsel"],
      },
      {
        eyebrow: "Creator",
        title: "Kreative Tools in denselben Raum.",
        copy: "Stream- und Community-Tools nahe an den Overlays halten, statt verstreut in anderen Fenstern.",
        bullets: ["OBS-Steuerung", "Twitch-Chat", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "Anwendungsfälle",
    title: "Gebaut für VR-Alltag und Creator-Setups.",
    cards: [
      { title: "Streaming", copy: "OBS, Chat und Aufnahmen nah an der gleichen VR-Szene halten." },
      { title: "Arbeiten in VR", copy: "Apps im Raum fixieren, die VR-Tastatur nutzen und die Platzierung über die Overlays in der VR anpassen." },
      { title: "Kreative Tools", copy: "Creator-Tools nur dann hinzufügen, wenn sie gebraucht werden — ohne das Kern-Overlay-Setup anzufassen." },
    ],
  },
  compatibility: {
    eyebrow: "Kompatibilität",
    title: "Release-Umfang",
    rows: [
      ["Primärplattform", "Windows 10 / 11"],
      ["VR-Laufzeit", "SteamVR"],
      ["Overlays", "Fenster-/Bildschirmerfassung, Platzierung in VR, Dashboard-Overlays"],
      ["Eingabe", "VR-Tastatur, Pointer- und Fokus-Routing"],
      ["Desktop-Kontrollzentrum", "Einstellungen, Präferenzen, Soundboard, Live-Tab"],
      ["Creator-Extras", "OBS, Twitch, VRChat OSC"],
      ["Hilfe", "Doku- und Support-Seiten"],
    ],
  },
  release: {
    eyebrow: "Release-Pfad",
    title: "Steam zur Installation. Docs und Support, wenn nötig.",
    copy: "Die öffentliche Seite konzentriert sich aufs Wesentliche: Was vrOS ist, wie man es installiert und wo man Hilfe bekommt.",
    cta: { docs: "Doku-Center", support: "Support-Center" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "SteamVR-Overlays mit optionalen Creator-Tools.",
    links: { docs: "Docs", support: "Support", steam: "Steam" },
  },
};

export default de;
