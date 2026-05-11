const ja = {
  meta: {
    title: "vrOS | VRオーバーレイとデスクトップ・コントロールセンター",
    description:
      "vrOSは、デスクトップウィンドウの取り込み、キャプチャ、キーボード、クリエイター向けワークフローをデスクトップ起点のランタイムとSteamVRオーバーレイでVRに持ち込みます。",
  },
  topbar: {
    kicker: "vrOS / リリース",
    name: "SteamVRオーバーレイ + クリエイターツール",
    nav: {
      features: "機能",
      workflows: "ワークフロー",
      compatibility: "対応環境",
      release: "リリース",
    },
    languageLabel: "言語",
  },
  hero: {
    badge: "Steamで配信中",
    meta: "Windows + SteamVR",
    title: "クリエイター向けツールを備えたSteamVRオーバーレイシステム。",
    body: "vrOSなら、デスクトップウィンドウをVRに持ち込み、VRキーボードを使い、デスクトップからもヘッドセット内からもオーバーレイを管理できます。OBS・Twitch・VRChat向けツールも必要なときに使えます。",
    cta: {
      steam: "Steamで見る",
      docs: "ドキュメントを読む",
      support: "サポートを開く",
    },
    signals: [
      { label: "オーバーレイシステム", detail: "デスクトップウィンドウとツールをVRに表示。" },
      { label: "デスクトップ + VR", detail: "デスクトップで設定し、ヘッドセットで使用。" },
      { label: "クリエイターツール", detail: "OBS・Twitch・VRChatに必要なときアクセス。" },
    ],
    media: {
      eyebrow: "トレーラー",
      title: "vrOSの動作を見る",
      caption: "オーバーレイ・キャプチャ・キーボード・クリエイターツールを実演。",
      playLabel: "トレーラーを再生",
      posterAlt: "vrOSトレーラーのポスター",
    },
  },
  features: {
    eyebrow: "機能",
    title: "vrOSはまずオーバーレイシステムです。",
    copy: "VR内のウィンドウ、確実に動く入力、そしてクリエイター向けの追加ツール。",
    cards: [
      {
        eyebrow: "オーバーレイ",
        title: "デスクトップアプリをVRに持ち込む。",
        copy: "ウィンドウやディスプレイをキャプチャし、好きな場所に配置して使い続けられます。",
        bullets: ["ウィンドウとディスプレイのキャプチャ", "VR内での配置", "安定したオーバーレイ描画"],
      },
      {
        eyebrow: "コントロール",
        title: "デスクトップからもVRからも管理。",
        copy: "デスクトップコントロールセンターとVRオーバーレイが同じシステムを使うため、設定と実利用が同期します。",
        bullets: ["デスクトップコントロールセンター", "ダッシュボードオーバーレイ", "設定の保存"],
      },
      {
        eyebrow: "入力",
        title: "ヘッドセット内でも入力を実用的に。",
        copy: "VRキーボードとフォーカスを意識した入力ルーティングで、作業を中断せずに使えます。",
        bullets: ["VRキーボード", "ポインターとフォーカスのルーティング", "素早いレイアウト変更"],
      },
      {
        eyebrow: "クリエイター",
        title: "制作ツールを同じ空間に。",
        copy: "ストリームやコミュニティのツールをオーバーレイの近くに集約し、他のウィンドウに散らばらせません。",
        bullets: ["OBSコントロール", "Twitchチャット", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "ユースケース",
    title: "日常的なVR利用とクリエイター環境のために。",
    cards: [
      { title: "ストリーミング", copy: "OBS・チャット・キャプチャ画面を同じVRシーンの近くにまとめる。" },
      { title: "VRでの作業", copy: "アプリを空間に固定し、キーボードオーバーレイを使い、レイアウトをまずデスクトップから管理。" },
      { title: "制作ツール", copy: "コアのオーバーレイ設定を変えずに、必要なときだけクリエイター向けツールを追加。" },
    ],
  },
  compatibility: {
    eyebrow: "対応環境",
    title: "リリース範囲",
    rows: [
      ["主要プラットフォーム", "Windows 11"],
      ["VRランタイム", "SteamVR"],
      ["コントロール", "デスクトップコントロールセンター + VRオーバーレイ"],
      ["コアツール", "キャプチャ・ダッシュボード・キーボード・チャット・ユーティリティ"],
      ["クリエイター向け追加機能", "OBS・Twitch・VRChat OSC"],
      ["ヘルプ", "ドキュメントとサポートサイト"],
    ],
  },
  release: {
    eyebrow: "リリース経路",
    title: "インストールはSteam。必要なときにドキュメントとサポート。",
    copy: "公開サイトでは基本に絞っています:vrOSとは何か、どうやってインストールするか、ヘルプの場所。",
    cta: { docs: "ドキュメントセンター", support: "サポートセンター" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "SteamVRオーバーレイ。任意でクリエイターツール。",
    links: { docs: "ドキュメント", support: "サポート", steam: "Steam" },
  },
};

export default ja;
