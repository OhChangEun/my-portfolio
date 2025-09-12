import type { Project } from "../types/Project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EVER",
    description:
      "현대 오토에버 모빌리티 SW 스쿨 교육생 관리를 위한 ERP 프로그램",
    tech: ["React", "TCP/IP", "WinForms"],
    link: "#",
    detail:
      "실시간 데이터 모니터링, 로그 분석, 시리얼 통신 플로우 관리까지 가능.",
    background:
      "교육생 정보를 효율적으로 관리하기 위해 개발. ERP 환경에서 실시간 데이터 모니터링 필요.",
    meaning:
      "ERP 프로그램 구조와 실시간 통신 흐름 이해. C#과 React 연동 경험을 습득.",
    setup: "# Install Packages\nnpm install\n\n# Run App\nnpm start",
  },
  {
    id: 2,
    title: "EOL DB Manager",
    description:
      "공정 데이터 수집 및 시각화용 DB 관리 도구. SQLite 기반 UX 제공.",
    tech: ["SQLite", "Electron", "TypeScript"],
    link: "#",
    detail:
      "자동 데이터 수집, 시각화 대시보드 제공. 쿼리 최소화 UX로 사용자가 쉽게 관리 가능.",
    background:
      "공정 데이터를 쉽게 관리하고 분석할 수 있는 툴 필요성에서 시작.",
    meaning: "데이터베이스 UX 설계와 시각화 경험 습득. Electron 앱 제작 경험.",
    setup: "# Install Packages\nnpm install\n\n# Run App\nnpm start",
  },
  {
    id: 3,
    title: "React Portfolio",
    description: "개인 포트폴리오 템플릿 — 깔끔하고 가독성 좋은 UI.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "#",
    detail:
      "Tailwind + Framer Motion 기반, 인터랙티브 UI. 프로젝트 카드 hover 및 모달 제공.",
    background:
      "개인 프로젝트와 포트폴리오를 한눈에 보기 좋게 보여주기 위해 제작.",
    meaning: "React와 Tailwind, Framer Motion을 활용한 UI/UX 경험 습득.",
    setup:
      "# Install Packages\nnpm install\n\n# Run Frontend Server\nnpm run dev",
  },
  {
    id: 4,
    title: "Smart Vehicle Monitor",
    description: "차량 ECU 데이터 수집 및 상태 모니터링 웹 대시보드.",
    tech: ["Spring Boot", "React", "WebSocket"],
    link: "#",
    detail:
      "실시간 센서 데이터 시각화, 오류 코드(DTC) 알림, 차량별 통신 로그 관리 기능 포함.",
    background:
      "차량 상태 모니터링과 센서 데이터 실시간 시각화 필요성에서 개발.",
    meaning: "Spring Boot와 WebSocket을 활용한 실시간 데이터 처리 경험.",
    setup:
      "# Install Packages\nnpm install\n\n# Run Backend Server\nnpm run backend\n# Run Frontend\nnpm run dev",
  },
  {
    id: 5,
    title: "IoT Home Gateway",
    description: "스마트홈 기기들을 제어하는 게이트웨이 프로그램.",
    tech: ["C++", "MQTT", "Linux"],
    link: "#",
    detail:
      "IoT 디바이스 상태 수집, MQTT 기반 메시징, REST API로 외부 서비스 연동.",
    background:
      "다양한 스마트홈 디바이스를 통합 관리하고 자동화 기능 제공 필요성에서 개발.",
    meaning: "MQTT 프로토콜 기반 통신 경험과 Linux 환경 개발 경험 습득.",
    setup: "# Compile Program\nmake build\n# Run Gateway\n./gateway",
  },
  {
    id: 6,
    title: "Code Review Helper",
    description: "코드 리뷰 과정을 효율화하는 웹 애플리케이션.",
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    link: "#",
    detail: "자동 코드 분석, 개선 포인트 제안, 협업용 댓글 시스템 탑재.",
    background: "팀 내 코드 리뷰 효율화와 반복 작업 최소화 필요성에서 개발.",
    meaning:
      "OpenAI API를 활용한 자동 코드 분석 경험과 Next.js 기반 웹 개발 경험 습득.",
    setup: "# Install Packages\nnpm install\n\n# Run Frontend\nnpm run dev",
  },
  {
    id: 7,
    title: "Task Scheduler CLI",
    description: "자동화 작업 스케줄링을 지원하는 CLI 툴.",
    tech: ["Python", "Click", "SQLite"],
    link: "#",
    detail: "크론탭 대체용 스케줄러, 로그 저장 및 실패 시 알림 기능 제공.",
    background: "정기적인 반복 작업을 관리하고 자동화하기 위해 개발.",
    meaning: "Python CLI 개발과 SQLite 연동, 스케줄링 로직 구현 경험 습득.",
    setup:
      "# Install Packages\npip install -r requirements.txt\n# Run CLI\npython scheduler.py",
  },
  {
    id: 8,
    title: "EduQuiz App",
    description: "사용자 맞춤형 학습 퀴즈 앱.",
    tech: ["Kotlin", "Android", "Firebase"],
    link: "#",
    detail:
      "실시간 퀴즈 문제 제공, 사용자 통계 분석, Firebase 기반 푸시 알림 지원.",
    background:
      "맞춤형 학습 환경 제공과 실시간 퀴즈 경험 제공 필요성에서 개발.",
    meaning:
      "Firebase와 Kotlin 기반 Android 앱 개발 경험 습득, 실시간 데이터 처리 경험.",
    setup: "# Open in Android Studio\n# Build & Run App\n",
  },
];
