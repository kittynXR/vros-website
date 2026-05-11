const it = {
  meta: {
    title: "vrOS | Overlay VR e centro di controllo desktop",
    description:
      "vrOS porta in VR il controllo del desktop, la cattura, la tastiera e i flussi di lavoro per creator, con un runtime desktop-first e overlay SteamVR.",
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
    body: "vrOS ti permette di portare le finestre del desktop in VR, usare una tastiera VR e gestire gli overlay dal desktop o dal visore. Gli strumenti OBS, Twitch e VRChat sono lì quando ti servono.",
    cta: {
      steam: "Vedi su Steam",
      docs: "Leggi la documentazione",
      support: "Apri il supporto",
    },
    signals: [
      { label: "Sistema di overlay", detail: "Porta finestre e strumenti del desktop nella VR." },
      { label: "Desktop + VR", detail: "Configuri dal desktop, lo usi nel visore." },
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
        copy: "Cattura finestre o display, posizionali dove vuoi e continuano a essere utilizzabili.",
        bullets: ["Cattura di finestre e display", "Posizionamento in VR", "Rendering overlay stabile"],
      },
      {
        eyebrow: "Controllo",
        title: "Gestisci dal desktop o dalla VR.",
        copy: "Il centro di controllo desktop e gli overlay VR usano lo stesso sistema: configurazione e uso live restano sincronizzati.",
        bullets: ["Centro di controllo desktop", "Overlay della dashboard", "Impostazioni salvate"],
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
      { title: "Lavorare in VR", copy: "Fissa le app nello spazio, usa l'overlay tastiera e gestisci i layout prima dal desktop." },
      { title: "Strumenti creativi", copy: "Aggiungi strumenti per creator solo quando servono, senza cambiare la configurazione principale degli overlay." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilità",
    title: "Ambito della release",
    rows: [
      ["Piattaforma principale", "Windows 11"],
      ["Runtime VR", "SteamVR"],
      ["Controllo", "Centro di controllo desktop + overlay VR"],
      ["Strumenti principali", "Cattura, dashboard, tastiera, chat, utility"],
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
