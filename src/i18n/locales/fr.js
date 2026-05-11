const fr = {
  meta: {
    title: "vrOS | Overlays VR et centre de contrôle bureau",
    description:
      "vrOS amène les fenêtres du bureau, la capture, un clavier VR et les flux créateurs dans SteamVR, avec un runtime orienté bureau.",
  },
  topbar: {
    kicker: "vrOS / sortie",
    name: "Overlays SteamVR + outils créateurs",
    nav: {
      features: "Fonctionnalités",
      workflows: "Workflows",
      compatibility: "Compatibilité",
      release: "Sortie",
    },
    languageLabel: "Langue",
  },
  hero: {
    badge: "Disponible sur Steam",
    meta: "Windows + SteamVR",
    title: "Un système d'overlays SteamVR, avec des outils en plus pour les créateurs.",
    body: "vrOS amène les fenêtres du bureau en VR avec un clavier VR pour la saisie. Le centre de contrôle bureau regroupe les réglages, les préférences, un soundboard et un onglet live pour les streamers. Les outils OBS, Twitch et VRChat sont là quand vous en avez besoin.",
    cta: {
      steam: "Voir sur Steam",
      docs: "Lire la documentation",
      support: "Ouvrir le support",
    },
    signals: [
      { label: "Overlays en VR", detail: "Affichez fenêtres et tableaux de bord du bureau dans la VR." },
      { label: "Centre de contrôle bureau", detail: "Réglages, soundboard et onglet live — tout sur le bureau." },
      { label: "Outils créateurs", detail: "OBS, Twitch et VRChat à portée quand il le faut." },
    ],
    media: {
      eyebrow: "Bande-annonce",
      title: "Découvrez vrOS en action",
      caption: "Overlays, capture, clavier et outils créateurs en fonctionnement.",
      playLabel: "Lire la bande-annonce",
      posterAlt: "Affiche de la bande-annonce vrOS",
    },
  },
  features: {
    eyebrow: "Fonctionnalités",
    title: "vrOS est avant tout un système d'overlays.",
    copy: "Des fenêtres en VR, une saisie qui fonctionne et quelques outils en plus pour les créateurs.",
    cards: [
      {
        eyebrow: "Overlays",
        title: "Affichez vos applications de bureau en VR.",
        copy: "Capturez des fenêtres ou des écrans, placez-les où vous voulez, et pilotez-les depuis les overlays du tableau de bord en VR.",
        bullets: ["Capture de fenêtres et d'écrans", "Placement en VR", "Overlays du tableau de bord pour le pilotage en VR"],
      },
      {
        eyebrow: "Bureau",
        title: "Réglages et outils créateurs, tout sur le bureau.",
        copy: "Le centre de contrôle bureau réunit l'ensemble des réglages et préférences, un soundboard intégré et un onglet live pour les streamers. Tout se règle hors VR, puis vous mettez le casque.",
        bullets: ["Tous les réglages et préférences", "Soundboard intégré", "Onglet live pour les streamers"],
      },
      {
        eyebrow: "Saisie",
        title: "Une saisie utilisable dans le casque.",
        copy: "Utilisez le clavier VR et un routage d'entrée conscient du focus, sans casser votre flux de travail.",
        bullets: ["Clavier VR", "Routage pointeur et focus", "Changements rapides de disposition"],
      },
      {
        eyebrow: "Créateur",
        title: "Vos outils créatifs dans le même espace.",
        copy: "Gardez les outils de stream et de communauté près de vos overlays, plutôt qu'éparpillés dans d'autres fenêtres.",
        bullets: ["Contrôles OBS", "Chat Twitch", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "Cas d'usage",
    title: "Pensé pour la VR au quotidien et les configurations créateurs.",
    cards: [
      { title: "Streaming", copy: "Gardez OBS, le chat et les surfaces de capture proches de la même scène VR." },
      { title: "Travailler en VR", copy: "Épinglez vos applis dans l'espace, utilisez le clavier VR, et ajustez le placement depuis les overlays en VR." },
      { title: "Outils créatifs", copy: "Ajoutez les outils créateurs uniquement quand vous en avez besoin, sans toucher à la configuration principale des overlays." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilité",
    title: "Périmètre de sortie",
    rows: [
      ["Plateforme principale", "Windows 11"],
      ["Runtime VR", "SteamVR"],
      ["Overlays", "Capture de fenêtres/écrans, placement en VR, overlays du tableau de bord"],
      ["Saisie", "Clavier VR, routage pointeur et focus"],
      ["Centre de contrôle bureau", "Réglages, préférences, soundboard, onglet live"],
      ["Extras créateurs", "OBS, Twitch, VRChat OSC"],
      ["Aide", "Sites de documentation et de support"],
    ],
  },
  release: {
    eyebrow: "Voie de sortie",
    title: "Steam pour l'installation. Docs et support quand nécessaire.",
    copy: "Le site public va à l'essentiel : ce qu'est vrOS, comment l'installer et où trouver de l'aide.",
    cta: { docs: "Centre de documentation", support: "Centre de support" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "Overlays SteamVR, outils créateurs en option.",
    links: { docs: "Docs", support: "Support", steam: "Steam" },
  },
};

export default fr;
