const de = {
  meta: {
    title: "vrOS | VR-Overlays und Desktop-Kontrollzentrum",
    description:
      "vrOS bringt Desktop-Steuerung, Aufnahme, Tastatur und Creator-Workflows in die VR — mit einer Desktop-zuerst-Laufzeit und SteamVR-Overlays.",
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
    body: "Mit vrOS bringst du Desktop-Fenster in die VR, nutzt eine VR-Tastatur und verwaltest Overlays vom Desktop oder im Headset. OBS-, Twitch- und VRChat-Tools sind da, wenn du sie brauchst.",
    cta: {
      steam: "Auf Steam ansehen",
      docs: "Doku lesen",
      support: "Support öffnen",
    },
    signals: [
      { label: "Overlay-System", detail: "Desktop-Fenster und -Tools in der VR platzieren." },
      { label: "Desktop + VR", detail: "Am Desktop einrichten, im Headset nutzen." },
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
        copy: "Erfasse Fenster oder Bildschirme, platziere sie, wo du willst, und nutze sie weiter wie gewohnt.",
        bullets: ["Fenster- und Bildschirmerfassung", "Platzierung in der VR", "Stabiles Overlay-Rendering"],
      },
      {
        eyebrow: "Kontrolle",
        title: "Vom Desktop oder aus der VR steuern.",
        copy: "Desktop-Kontrollzentrum und VR-Overlays nutzen dasselbe System — Einrichtung und Live-Nutzung bleiben synchron.",
        bullets: ["Desktop-Kontrollzentrum", "Dashboard-Overlays", "Gespeicherte Einstellungen"],
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
      { title: "Arbeiten in VR", copy: "Apps im Raum fixieren, Tastatur-Overlay nutzen und Layouts zuerst am Desktop verwalten." },
      { title: "Kreative Tools", copy: "Creator-Tools nur dann hinzufügen, wenn sie gebraucht werden — ohne das Kern-Overlay-Setup anzufassen." },
    ],
  },
  compatibility: {
    eyebrow: "Kompatibilität",
    title: "Release-Umfang",
    rows: [
      ["Primärplattform", "Windows 11"],
      ["VR-Laufzeit", "SteamVR"],
      ["Steuerung", "Desktop-Kontrollzentrum + VR-Overlays"],
      ["Kern-Tools", "Aufnahme, Dashboard, Tastatur, Chat, Werkzeuge"],
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
