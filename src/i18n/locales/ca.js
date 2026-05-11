const ca = {
  meta: {
    title: "vrOS | Overlays de VR i centre de control d'escriptori",
    description:
      "vrOS porta el control de l'escriptori, la captura, el teclat i els fluxos de treball per a creadors a la VR amb un runtime centrat en l'escriptori i overlays de SteamVR.",
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
    body: "vrOS et permet portar les finestres de l'escriptori a la VR, fer servir un teclat dins la VR i gestionar overlays des de l'escriptori o des de les ulleres. Les eines d'OBS, Twitch i VRChat hi són quan les necessites.",
    cta: {
      steam: "Veure a Steam",
      docs: "Llegir la documentació",
      support: "Obrir el suport",
    },
    signals: [
      { label: "Sistema d'overlays", detail: "Porta finestres i eines de l'escriptori a la VR." },
      { label: "Escriptori + VR", detail: "Configura-ho a l'escriptori i fes-ho servir amb les ulleres." },
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
        copy: "Captura finestres o pantalles, col·loca-les on vulguis i continuen sent usables.",
        bullets: ["Captura de finestres i pantalles", "Col·locació dins la VR", "Renderitzat estable d'overlays"],
      },
      {
        eyebrow: "Control",
        title: "Gestiona-ho des de l'escriptori o des de la VR.",
        copy: "El centre de control d'escriptori i els overlays de VR fan servir el mateix sistema, així que la configuració i l'ús en directe es mantenen sincronitzats.",
        bullets: ["Centre de control d'escriptori", "Overlays del tauler", "Configuració desada"],
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
      { title: "Treballar amb VR", copy: "Fixa apps en l'espai, fes servir l'overlay de teclat i gestiona disposicions des de l'escriptori primer." },
      { title: "Eines creatives", copy: "Afegeix eines de creador només quan en necessitis, sense canviar la configuració principal dels overlays." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilitat",
    title: "Abast del llançament",
    rows: [
      ["Plataforma principal", "Windows 11"],
      ["Runtime de VR", "SteamVR"],
      ["Control", "Centre de control d'escriptori + overlays de VR"],
      ["Eines principals", "Captura, tauler, teclat, xat, utilitats"],
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
