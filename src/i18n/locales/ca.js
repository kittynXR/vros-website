const ca = {
  meta: {
    title: "vrOS | Overlays de VR i centre de control d'escriptori",
    description:
      "vrOS porta les finestres de l'escriptori, la captura, un teclat de VR i els fluxos per a creadors a SteamVR amb un runtime centrat en l'escriptori.",
  },
  topbar: {
    kicker: "vrOS / llançament",
    name: "Overlays de SteamVR + eines per a creadors",
    nav: {
      features: "Funcions",
      workflows: "Fluxos de treball",
      compatibility: "Compatibilitat",
      release: "Llançament",
    },
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Disponible a Steam",
    meta: "Windows + SteamVR",
    title: "Un sistema d'overlays per a SteamVR amb eines extres per a creadors.",
    body: "vrOS porta les finestres de l'escriptori a la VR i, per a l'entrada, ofereix un teclat de VR. El centre de control d'escriptori reuneix la configuració i les preferències, una taula de sons integrada i una pestanya en directe per a streamers. Les eines d'OBS, Twitch i VRChat hi són quan les necessites.",
    cta: {
      steam: "Veure a Steam",
      docs: "Llegir la documentació",
      support: "Obrir el suport",
    },
    signals: [
      { label: "Overlays dins la VR", detail: "Porta finestres i taulers de l'escriptori dins la VR." },
      { label: "Centre de control d'escriptori", detail: "Configuració, taula de sons i pestanya en directe — tot a l'escriptori." },
      { label: "Eines de creador", detail: "OBS, Twitch i VRChat quan en tinguis necessitat." },
    ],
    media: {
      eyebrow: "Tràiler",
      title: "Mira el vrOS en acció",
      caption: "Overlays, captura, teclat i eines de creador funcionant en directe.",
      playLabel: "Reprodueix el tràiler",
      posterAlt: "Cartell del tràiler de vrOS",
    },
  },
  features: {
    eyebrow: "Funcions",
    title: "vrOS és, abans de tot, un sistema d'overlays.",
    copy: "Finestres dins la VR, una entrada que funciona i unes quantes eines extres per a creadors.",
    cards: [
      {
        eyebrow: "Overlays",
        title: "Porta les apps de l'escriptori a la VR.",
        copy: "Captura finestres o pantalles, col·loca-les on vulguis i gestiona-les des dels overlays del tauler dins la VR.",
        bullets: ["Captura de finestres i pantalles", "Col·locació dins la VR", "Overlays del tauler per controlar des de la VR"],
      },
      {
        eyebrow: "Escriptori",
        title: "Configuració i eines de creador, tot a l'escriptori.",
        copy: "El centre de control d'escriptori reuneix tota la configuració i les preferències, una taula de sons integrada i una pestanya en directe per a streamers. Ajusta-ho tot fora de la VR i, després, posa't les ulleres.",
        bullets: ["Tota la configuració i les preferències", "Taula de sons integrada", "Pestanya en directe per a streamers"],
      },
      {
        eyebrow: "Entrada",
        title: "Una entrada utilitzable també amb les ulleres.",
        copy: "Fes servir el teclat de VR i l'enrutament d'entrada conscient del focus sense trencar el flux de treball.",
        bullets: ["Teclat de VR", "Enrutament de punter i focus", "Canvis ràpids de disposició"],
      },
      {
        eyebrow: "Creador",
        title: "Les eines creatives al mateix espai.",
        copy: "Mantén les eines d'streaming i de comunitat a prop dels overlays, en comptes d'escampades per altres finestres.",
        bullets: ["Controls d'OBS", "Xat de Twitch", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "Casos d'ús",
    title: "Pensat per a l'ús quotidià de la VR i per a configuracions de creadors.",
    cards: [
      { title: "Streaming", copy: "Tingues OBS, el xat i les superfícies de captura a prop de la mateixa escena VR." },
      { title: "Treballar amb VR", copy: "Fixa apps en l'espai, fes servir el teclat de VR i ajusta la col·locació des dels overlays dins la VR." },
      { title: "Eines creatives", copy: "Afegeix eines de creador només quan en necessitis, sense canviar la configuració principal dels overlays." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilitat",
    title: "Abast del llançament",
    rows: [
      ["Plataforma principal", "Windows 11"],
      ["Runtime de VR", "SteamVR"],
      ["Overlays", "Captura de finestres/pantalles, col·locació dins la VR, overlays del tauler"],
      ["Entrada", "Teclat de VR, enrutament de punter i focus"],
      ["Centre de control d'escriptori", "Configuració, preferències, taula de sons, pestanya en directe"],
      ["Extres per a creadors", "OBS, Twitch, VRChat OSC"],
      ["Ajuda", "Llocs de documentació i suport"],
    ],
  },
  release: {
    eyebrow: "Camí de llançament",
    title: "Steam per instal·lar. Documentació i suport quan calguin.",
    copy: "El lloc públic se centra en l'essencial: què és vrOS, com instal·lar-lo i on trobar ajuda.",
    cta: { docs: "Centre de documentació", support: "Centre de suport" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "Overlays de SteamVR amb eines de creador opcionals.",
    links: { docs: "Documentació", support: "Suport", steam: "Steam" },
  },
};

export default ca;
