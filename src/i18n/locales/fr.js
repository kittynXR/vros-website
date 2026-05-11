const fr = {
  meta: {
    title: "vrOS | Overlays VR et centre de contrôle bureau",
    description:
      "vrOS apporte le contrôle du bureau, la capture, le clavier et les outils créateurs en VR, grâce à un runtime orienté bureau et à des overlays SteamVR.",
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
    body: "vrOS permet d'amener les fenêtres du bureau en VR, d'utiliser un clavier VR et de gérer les overlays depuis le bureau ou dans le casque. Les outils OBS, Twitch et VRChat sont là quand vous en avez besoin.",
    cta: {
      steam: "Voir sur Steam",
      docs: "Lire la documentation",
      support: "Ouvrir le support",
    },
    signals: [
      { label: "Système d'overlays", detail: "Affichez fenêtres et outils du bureau dans la VR." },
      { label: "Bureau + VR", detail: "Configurez depuis le bureau, utilisez dans le casque." },
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
        copy: "Capturez des fenêtres ou des écrans, placez-les où vous voulez et continuez à les utiliser.",
        bullets: ["Capture de fenêtres et d'écrans", "Placement en VR", "Rendu stable des overlays"],
      },
      {
        eyebrow: "Contrôle",
        title: "Pilotez depuis le bureau ou la VR.",
        copy: "Le centre de contrôle bureau et les overlays VR partagent le même système : configuration et utilisation en direct restent synchronisées.",
        bullets: ["Centre de contrôle bureau", "Overlays du tableau de bord", "Réglages enregistrés"],
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
      { title: "Travailler en VR", copy: "Épinglez vos applis dans l'espace, utilisez l'overlay clavier et gérez les dispositions d'abord depuis le bureau." },
      { title: "Outils créatifs", copy: "Ajoutez les outils créateurs uniquement quand vous en avez besoin, sans toucher à la configuration principale des overlays." },
    ],
  },
  compatibility: {
    eyebrow: "Compatibilité",
    title: "Périmètre de sortie",
    rows: [
      ["Plateforme principale", "Windows 11"],
      ["Runtime VR", "SteamVR"],
      ["Contrôle", "Centre de contrôle bureau + overlays VR"],
      ["Outils principaux", "Capture, tableau de bord, clavier, chat, utilitaires"],
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
