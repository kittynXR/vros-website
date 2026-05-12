const zhHans = {
  meta: {
    title: "vrOS | VR 叠加层与桌面控制中心",
    description:
      "vrOS 通过桌面优先的运行时,把桌面窗口、画面捕获、VR 键盘和创作者工作流带入 SteamVR。",
  },
  topbar: {
    kicker: "vrOS / 发布",
    name: "SteamVR 叠加层 + 创作者工具",
    nav: {
      features: "功能",
      workflows: "工作流",
      compatibility: "兼容性",
      release: "发布",
    },
    languageLabel: "语言",
  },
  hero: {
    badge: "在 Steam 上线",
    meta: "Windows + SteamVR",
    title: "一套面向创作者、附加额外工具的 SteamVR 叠加层系统。",
    body: "vrOS 把桌面窗口带进 VR,并提供 VR 键盘用于输入。桌面控制中心集中了所有设置与偏好,内置一块声音面板和一个面向直播的实时标签页。OBS、Twitch、VRChat 工具按需可用。",
    cta: {
      steam: "在 Steam 查看",
      docs: "阅读文档",
      support: "打开支持",
    },
    signals: [
      { label: "VR 中的叠加层", detail: "把桌面窗口与仪表盘放入 VR。" },
      { label: "桌面控制中心", detail: "设置、声音面板与实时标签页,全部在桌面。" },
      { label: "创作者工具", detail: "需要时随手用 OBS、Twitch、VRChat。" },
    ],
    media: {
      eyebrow: "宣传片",
      title: "观看 vrOS 实机演示",
      caption: "叠加层、捕获、键盘与创作者工具——实时运行。",
      playLabel: "播放宣传片",
      posterAlt: "vrOS 宣传片封面",
    },
  },
  features: {
    eyebrow: "功能",
    title: "vrOS 首先是一套叠加层系统。",
    copy: "VR 中的窗口、可用的输入,以及为创作者准备的少量额外工具。",
    cards: [
      {
        eyebrow: "叠加层",
        title: "把桌面应用放进 VR。",
        copy: "捕获窗口或显示器,放在想要的位置,并通过 VR 中的仪表盘叠加层直接管理。",
        bullets: ["窗口与显示器捕获", "VR 内放置", "用于 VR 内控制的仪表盘叠加层"],
      },
      {
        eyebrow: "桌面",
        title: "设置与创作者工具,全部在桌面端。",
        copy: "桌面控制中心集中了所有设置与偏好,加上一块内置声音面板和一个面向直播的实时标签页。先在 VR 外面调好,再戴上头显。",
        bullets: ["所有设置与偏好", "内置声音面板", "面向直播的实时标签页"],
      },
      {
        eyebrow: "输入",
        title: "头显内也能正常输入。",
        copy: "使用 VR 键盘和具备焦点感知的输入路由,不会打断你的工作流。",
        bullets: ["VR 键盘", "指针与焦点路由", "快速布局切换"],
      },
      {
        eyebrow: "创作者",
        title: "创作工具放在同一空间。",
        copy: "把直播与社群工具放在叠加层旁边,而不是散落在别的窗口里。",
        bullets: ["OBS 控制", "Twitch 聊天", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "使用场景",
    title: "面向日常 VR 使用与创作者配置。",
    cards: [
      { title: "直播", copy: "把 OBS、聊天和捕获画面放在同一个 VR 场景附近。" },
      { title: "在 VR 中工作", copy: "把应用固定在空间中,使用 VR 键盘,通过 VR 内的叠加层调整位置。" },
      { title: "创作工具", copy: "只在需要时才加入创作者工具,不改动核心叠加层配置。" },
    ],
  },
  compatibility: {
    eyebrow: "兼容性",
    title: "发布范围",
    rows: [
      ["主要平台", "Windows 10 / 11"],
      ["VR 运行时", "SteamVR"],
      ["叠加层", "窗口/显示器捕获、VR 内放置、仪表盘叠加层"],
      ["输入", "VR 键盘、指针与焦点路由"],
      ["桌面控制中心", "设置、偏好、声音面板、实时标签页"],
      ["创作者扩展", "OBS、Twitch、VRChat OSC"],
      ["帮助", "文档与支持网站"],
    ],
  },
  release: {
    eyebrow: "发布路径",
    title: "用 Steam 安装。文档与支持随时备用。",
    copy: "官方网站只聚焦最基本的事:vrOS 是什么、如何安装、去哪里获取帮助。",
    cta: { docs: "文档中心", support: "支持中心" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "SteamVR 叠加层,可选附带创作者工具。",
    links: { docs: "文档", support: "支持", steam: "Steam" },
  },
};

export default zhHans;
