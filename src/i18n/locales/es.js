const es = {
  meta: {
    title: "vrOS | Overlays de VR y centro de control de escritorio",
    description:
      "vrOS lleva el control del escritorio, la captura, el teclado y los flujos de trabajo de creadores a la realidad virtual, con un runtime de escritorio y overlays de SteamVR.",
  },
  topbar: {
    kicker: "vrOS / lanzamiento",
    name: "Overlays de SteamVR + herramientas para creadores",
    nav: {
      features: "Características",
      workflows: "Flujos de trabajo",
      compatibility: "Compatibilidad",
      release: "Lanzamiento",
    },
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Disponible en Steam",
    meta: "Windows + SteamVR",
    title: "Un sistema de overlays para SteamVR con herramientas extra para creadores.",
    body: "vrOS te permite llevar las ventanas del escritorio a la VR, usar un teclado en VR y gestionar overlays desde el escritorio o dentro del casco. OBS, Twitch y VRChat están disponibles cuando los necesites.",
    cta: {
      steam: "Ver en Steam",
      docs: "Leer la documentación",
      support: "Abrir soporte",
    },
    signals: [
      { label: "Sistema de overlays", detail: "Lleva ventanas y herramientas del escritorio a la VR." },
      { label: "Escritorio + VR", detail: "Configúralo en el escritorio y úsalo con el casco." },
      { label: "Herramientas de creador", detail: "OBS, Twitch y VRChat cuando los necesites." },
    ],
    media: {
      eyebrow: "Tráiler",
      title: "Mira vrOS en acción",
      caption: "Overlays, captura, teclado y herramientas para creadores funcionando en directo.",
      playLabel: "Reproducir tráiler",
      posterAlt: "Póster del tráiler de vrOS",
    },
  },
  features: {
    eyebrow: "Características",
    title: "vrOS es ante todo un sistema de overlays.",
    copy: "Ventanas en VR, entrada que funciona y algunas herramientas adicionales para creadores.",
    cards: [
      {
        eyebrow: "Overlays",
        title: "Lleva las apps del escritorio a la VR.",
        copy: "Captura ventanas o pantallas, colócalas donde quieras y mantenlas usables.",
        bullets: ["Captura de ventanas y pantallas", "Colocación dentro de VR", "Renderizado estable de overlays"],
      },
      {
        eyebrow: "Control",
        title: "Gestiónalo desde el escritorio o desde VR.",
        copy: "El centro de control de escritorio y los overlays de VR usan el mismo sistema, así que la configuración y el uso en directo se mantienen sincronizados.",
        bullets: ["Centro de control de escritorio", "Overlays del panel", "Ajustes guardados"],
      },
      {
        eyebrow: "Entrada",
        title: "Entrada usable también con el casco.",
        copy: "Usa el teclado en VR y el enrutamiento de entrada consciente del foco sin romper tu flujo de trabajo.",
        bullets: ["Teclado en VR", "Enrutamiento de puntero y foco", "Cambios rápidos de disposición"],
      },
      {
        eyebrow: "Creador",
        title: "Lleva las herramientas creativas al mismo espacio.",
        copy: "Mantén las herramientas de stream y comunidad cerca de tus overlays, en lugar de dispersas por otras ventanas.",
        bullets: ["Controles de OBS", "Chat de Twitch", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "Casos de uso",
    title: "Pensado para el uso diario de VR y para configuraciones de creadores.",
    cards: [
      { title: "Streaming", copy: "Mantén OBS, el chat y las superficies de captura cerca de la misma escena VR." },
      { title: "Trabajar en VR", copy: "Fija apps en el espacio, usa el overlay de teclado y gestiona disposiciones desde el escritorio." },
      { title: "Herramientas creativas", copy: "Añade herramientas para creadores solo cuando las necesites, sin cambiar la configuración principal de overlays." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilidad",
    title: "Alcance del lanzamiento",
    rows: [
      ["Plataforma principal", "Windows 11"],
      ["Runtime de VR", "SteamVR"],
      ["Control", "Centro de control de escritorio + overlays de VR"],
      ["Herramientas principales", "Captura, panel, teclado, chat, utilidades"],
      ["Extras para creadores", "OBS, Twitch, VRChat OSC"],
      ["Ayuda", "Sitios de documentación y soporte"],
    ],
  },
  release: {
    eyebrow: "Ruta de lanzamiento",
    title: "Steam para instalar. Documentación y soporte cuando los necesites.",
    copy: "El sitio público se centra en lo básico: qué es vrOS, cómo instalarlo y dónde conseguir ayuda.",
    cta: { docs: "Centro de documentación", support: "Centro de soporte" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "Overlays de SteamVR con herramientas opcionales para creadores.",
    links: { docs: "Documentación", support: "Soporte", steam: "Steam" },
  },
};

export default es;
