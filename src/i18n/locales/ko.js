const ko = {
  meta: {
    title: "vrOS | VR 오버레이 및 데스크톱 컨트롤 센터",
    description:
      "vrOS는 데스크톱 우선 런타임으로 데스크톱 창, 캡처, VR 키보드, 크리에이터 워크플로우를 SteamVR에 가져옵니다.",
  },
  topbar: {
    kicker: "vrOS / 릴리스",
    name: "SteamVR 오버레이 + 크리에이터 도구",
    nav: {
      features: "기능",
      workflows: "워크플로우",
      compatibility: "호환성",
      release: "릴리스",
    },
    languageLabel: "언어",
  },
  hero: {
    badge: "Steam에서 만나보세요",
    meta: "Windows + SteamVR",
    title: "크리에이터용 추가 도구를 갖춘 SteamVR 오버레이 시스템.",
    body: "vrOS는 데스크톱 창을 VR로 가져오고, 입력에는 VR 키보드를 제공합니다. 데스크톱 컨트롤 센터에는 설정과 환경 설정, 내장 사운드보드, 스트리머용 라이브 탭이 함께 들어 있습니다. OBS, Twitch, VRChat 도구도 필요할 때 바로 사용할 수 있습니다.",
    cta: {
      steam: "Steam에서 보기",
      docs: "문서 보기",
      support: "지원 열기",
    },
    signals: [
      { label: "VR 안의 오버레이", detail: "데스크톱 창과 대시보드를 VR 안으로." },
      { label: "데스크톱 컨트롤 센터", detail: "설정, 사운드보드, 라이브 탭 — 모두 데스크톱에서." },
      { label: "크리에이터 도구", detail: "필요할 때 OBS, Twitch, VRChat에 바로." },
    ],
    media: {
      eyebrow: "트레일러",
      title: "vrOS의 실제 동작 보기",
      caption: "오버레이, 캡처, 키보드, 크리에이터 도구가 실시간으로 작동합니다.",
      playLabel: "트레일러 재생",
      posterAlt: "vrOS 트레일러 포스터",
    },
  },
  features: {
    eyebrow: "기능",
    title: "vrOS는 무엇보다도 오버레이 시스템입니다.",
    copy: "VR 안의 창, 제대로 동작하는 입력, 그리고 크리에이터를 위한 몇 가지 추가 도구.",
    cards: [
      {
        eyebrow: "오버레이",
        title: "데스크톱 앱을 VR 안으로.",
        copy: "창이나 디스플레이를 캡처해 원하는 위치에 두고, VR 안의 대시보드 오버레이에서 직접 관리하세요.",
        bullets: ["창과 디스플레이 캡처", "VR 내 배치", "VR 안에서 조작하는 대시보드 오버레이"],
      },
      {
        eyebrow: "데스크톱",
        title: "설정과 크리에이터 도구, 전부 데스크톱에서.",
        copy: "데스크톱 컨트롤 센터에는 모든 설정과 환경 설정, 내장 사운드보드, 스트리머용 라이브 탭이 모여 있습니다. VR 밖에서 조정한 뒤 헤드셋을 쓰세요.",
        bullets: ["모든 설정과 환경 설정", "내장 사운드보드", "스트리머용 라이브 탭"],
      },
      {
        eyebrow: "입력",
        title: "헤드셋에서도 쓸 만한 입력.",
        copy: "VR 키보드와 포커스를 인식하는 입력 라우팅으로 작업 흐름을 끊지 않습니다.",
        bullets: ["VR 키보드", "포인터 및 포커스 라우팅", "빠른 레이아웃 변경"],
      },
      {
        eyebrow: "크리에이터",
        title: "창작 도구를 같은 공간 안에.",
        copy: "스트림과 커뮤니티 도구를 다른 창에 흩어두지 말고 오버레이 가까이에 두세요.",
        bullets: ["OBS 제어", "Twitch 채팅", "VRChat OSC"],
      },
    ],
  },
  workflows: {
    eyebrow: "사용 사례",
    title: "일상적인 VR 사용과 크리에이터 세팅을 위한.",
    cards: [
      { title: "스트리밍", copy: "OBS, 채팅, 캡처 화면을 동일한 VR 장면 가까이에 배치." },
      { title: "VR에서 작업", copy: "공간에 앱을 고정하고, VR 키보드를 사용하며, 배치는 VR 안의 오버레이에서 조정." },
      { title: "창작 도구", copy: "핵심 오버레이 설정을 바꾸지 않고 필요할 때만 크리에이터 도구를 추가." },
    ],
  },
  compatibility: {
    eyebrow: "호환성",
    title: "릴리스 범위",
    rows: [
      ["주요 플랫폼", "Windows 10 / 11"],
      ["VR 런타임", "SteamVR"],
      ["오버레이", "창/디스플레이 캡처, VR 내 배치, 대시보드 오버레이"],
      ["입력", "VR 키보드, 포인터 및 포커스 라우팅"],
      ["데스크톱 컨트롤 센터", "설정, 환경 설정, 사운드보드, 라이브 탭"],
      ["크리에이터 추가 기능", "OBS, Twitch, VRChat OSC"],
      ["도움말", "문서 및 지원 사이트"],
    ],
  },
  release: {
    eyebrow: "릴리스 경로",
    title: "설치는 Steam에서. 문서와 지원은 필요할 때.",
    copy: "공개 사이트는 기본에 집중합니다: vrOS는 무엇인지, 어떻게 설치하는지, 어디서 도움을 받는지.",
    cta: { docs: "문서 센터", support: "지원 센터" },
  },
  footer: {
    kicker: "vrOS",
    tagline: "선택적 크리에이터 도구를 갖춘 SteamVR 오버레이.",
    links: { docs: "문서", support: "지원", steam: "Steam" },
  },
};

export default ko;
