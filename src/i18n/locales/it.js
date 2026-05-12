const it = {
  meta: {
    title: "vrOS | Overlay VR e centro di controllo desktop",
    description:
      "vrOS porta le finestre del desktop, la cattura, una tastiera VR e i flussi per creator in SteamVR, con un runtime desktop-first.",
  },
  topbar: {
    kicker: "vrOS / release",
    name: "Overlay SteamVR + strumenti per creator",
    nav: {
      features: "Funzionalità",
      workflows: "Flussi di lavoro",
      compatibility: "Compatibilità",
      release: "Release",
    },
    languageLabel: "Lingua",
  },
  hero: {
    badge: "Disponibile su Steam",
    meta: "Windows + SteamVR",
    title: "Un sistema di overlay SteamVR con strumenti aggiuntivi per i creator.",
    body: "vrOS porta le finestre del desktop in VR con una tastiera VR per l'input. Il centro di controllo desktop raccoglie impostazioni, preferenze, una soundboard integrata e una scheda live per gli streamer. Gli strumenti OBS, Twitch e VRChat sono lì quando ti servono.",
    cta: {
      steam: "Vedi su Steam",
      docs: "Leggi la documentazione",
      support: "Apri il supporto",
    },
    signals: [
      { label: "Overlay in VR", detail: "Porta finestre e dashboard del desktop nella VR." },
      { label: "Centro di controllo desktop", detail: "Impostazioni, soundboard e scheda live — tutto sul desktop." },
      { label: "Strumenti per creator", detail: "OBS, Twitch e VRChat quando ti servono." },
    ],
    media: {
      eyebrow: "Trailer",
      title: "Guarda vrOS in azione",
      caption: "Overlay, cattura, tastiera e strumenti per creator — in funzione.",
      playLabel: "Riproduci trailer",
      posterAlt: "Locandina del trailer di vrOS",
    },
  },
  features: {
    eyebrow: "Funzionalità",
    title: "vrOS è anzitutto un sistema di overlay.",
    copy: "Finestre in VR, input che funziona e qualche strumento in più per i creator.",
    cards: [
      {
        eyebrow: "Overlay",
        title: "Porta le app del desktop in VR.",
        copy: "Cattura finestre o display, posizionali dove vuoi e gestiscili dagli overlay della dashboard direttamente in VR.",
        bullets: ["Cattura di finestre e display", "Posizionamento in VR", "Overlay della dashboard per il controllo in VR"],
      },
      {
        eyebrow: "Desktop",
        title: "Impostazioni e strumenti per creator, tutti sul desktop.",
        copy: "Il centro di controllo desktop riunisce tutte le impostazioni e le preferenze, una soundboard integrata e una scheda live per gli streamer. Regola tutto fuori dalla VR e poi metti il visore.",
        bullets: ["Tutte le impostazioni e le preferenze", "Soundboard integrata", "Scheda live per gli streamer"],
      },
      {
        eyebrow: "Input",
        title: "Input utilizzabile anche nel visore.",
        copy: "Usa la tastiera VR e il routing dell'input consapevole del focus, senza interrompere il flusso di lavoro.",
        bullets: ["Tastiera VR", "Routing di puntatore e focus", "Cambi di layout rapidi"],
      },
      {
        eyebrow: "Creator",
        title: "Strumenti creativi nello stesso spazio.",
        copy: "Tieni gli strumenti di streaming e community vicino ai tuoi overlay, invece di sparpagliati in altre finestre.",
        bullets: ["Controlli OBS", "Chat Twitch", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "Casi d'uso",
    title: "Pensato per l'uso quotidiano in VR e per setup da creator.",
    cards: [
      { title: "Streaming", copy: "Tieni OBS, chat e superfici di cattura vicino alla stessa scena VR." },
      { title: "Lavorare in VR", copy: "Fissa le app nello spazio, usa la tastiera VR e regola la posizione dagli overlay in VR." },
      { title: "Strumenti creativi", copy: "Aggiungi strumenti per creator solo quando servono, senza cambiare la configurazione principale degli overlay." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilità",
    title: "Ambito della release",
    rows: [
      ["Piattaforma principale", "Windows 10 / 11"],
      ["Runtime VR", "SteamVR"],
      ["Overlay", "Cattura di finestre/display, posizionamento in VR, overlay della dashboard"],
      ["Input", "Tastiera VR, routing di puntatore e focus"],
      ["Centro di controllo desktop", "Impostazioni, preferenze, soundboard, scheda live"],
      ["Extra per creator", "OBS, Twitch, VRChat OSC"],
      ["Aiuto", "Siti di documentazione e supporto"],
    ],
  },
  release: {
    eyebrow: "Percorso di release",
    title: "Steam per installare. Docs e supporto quando servono.",
    copy: "Il sito pubblico si concentra sull'essenziale: cos'è vrOS, come installarlo e dove trovare aiuto.",
    cta: { docs: "Centro documentazione", support: "Centro supporto" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "Overlay SteamVR con strumenti per creator opzionali.",
    links: { docs: "Docs", support: "Supporto", steam: "Steam" },
  },
};

export default it;
