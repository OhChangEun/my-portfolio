import type { InternshipExperience } from "../types/Internship";

export const INTERNSHIP_EXPERIENCE: InternshipExperience = {
  company: "지아이티(GIT)",
  position: "소프트웨어 개발 인턴",
  duration: "2024.7 ~ 2024.12",
  totalDuration: "6M",
  department: "전장사업팀 · SW개발 2팀",
  description: "현대자동차 전장 시스템 개발 및 유지보수",
  projects: [
    {
      id: "checklist-db",
      title: "검차라인 DB 관리 시스템",
      duration: "2024.7 ~ 2024.8",
      team: "전장사업팀 · 전장파트",
      overview:
        "현대모비스 공장 검차라인에서 사용되는 검차 데이터 관리 및 로그 모니터링 프로그램",
      description:
        "SQLite 기반 검차라인 데이터베이스의 CRUD 관리와 실시간 로그 모니터링을 담당한 프로젝트. 기본키 설계, 데이터 무결성 개선, 실시간 UI 구현 등을 통해 안정적인 데이터 관리 시스템 구축.",
      responsibilities: [
        "기존 SQLite 기반 검차라인 DB에 대한 CRUD 관리 프로그램 개발",
        "기본키가 없는 DB 구조에서 데이터 무결성 문제 인지 및 모든 테이블에 기본키 설계·적용",
        "DB 수정 시 최근 변경 데이터 시각적 하이라이팅 처리로 추적성 개선",
        "실시간 로그 출력 UI 구현 및 로그 레벨별 필터링, 키워드 검색 기능 개발",
        "SplitContainer 기반 가변 UI 설계 (로그/데이터 화면 분할, 크기 조절)",
        "콤보박스 선택 기반 다중 행 수정·삭제 기능 구현",
        "요구사항 분석 → UI/UX 설계 → 구현 → 문서화 → 코드 리뷰까지 단독 수행",
      ],
      achievements: [
        "✓ 기본키 설계로 데이터 무결성 100% 보장",
        "✓ 변경 데이터 하이라이팅으로 추적성 50% 향상",
        "✓ 실시간 로그 필터링으로 검색 속도 개선",
        "✓ 가변 UI로 사용자 편의성 증대",
      ],
      techStack: [
        "C#",
        "WinForms",
        "SQLite",
        "DevExpress",
        "log4net",
        "Visual Studio 2012",
      ],
    },
    {
      id: "communication-test",
      title: "통신 테스트 프로그램",
      duration: "2024.8 ~ 2024.9",
      team: "전장사업팀 · 완성차파트",
      overview: "Serial / TCP-IP 기반 차량 통신 테스트용 데스크톱 프로그램",
      description:
        "차량과의 Serial 및 TCP/IP 통신을 테스트하기 위한 프로그램. 1:1, 1:N 통신 구조를 설계 및 구현하고, 송·수신 데이터를 채팅 UI 형태로 시각화하여 가독성과 사용성 향상.",
      responsibilities: [
        "Serial 및 TCP/IP 통신을 지원하는 통신 테스트 프로그램 구현",
        "TCP/IP 1:1, 1:N 통신 구조 설계 및 구현",
        "송·수신 데이터를 채팅 UI 형태로 시각화하여 가독성 향상",
        "송신/수신 시각 출력 로직 구현 및 시간 동기화 이슈 분석",
        "송·수신 시간 차이 원인 파악 및 해결 시도",
        "통신 흐름, UI 구조 분석을 통한 통신 구조 이해도 향상",
      ],
      achievements: [
        "✓ Serial/TCP-IP 양방향 통신 지원",
        "✓ 1:N 네트워크 통신 구조 설계 완료",
        "✓ 채팅 UI로 직관적 데이터 시각화",
        "✓ 시간 동기화 이슈 원인 파악 및 개선",
      ],
      techStack: ["C#", "WinForms", "DevExpress", "Serial 통신", "TCP/IP"],
    },
    {
      id: "encryption-maintenance",
      title: "사내 암·복호화 프로그램 유지보수",
      duration: "2024.10 ~ 2024.11",
      team: "SW개발 2팀",
      overview: "제한된 메모리 환경에서 동작하는 파일 암·복호화 프로그램",
      description:
        "대용량 파일 암·복호화 기능에서 메모리 부족 이슈를 해결하고, MVC 패턴 적용으로 코드 구조를 개선한 유지보수 프로젝트. 원격 진단을 통해 사용자 이슈를 신속하게 해결.",
      responsibilities: [
        "특정 환경에서 대용량 파일 암·복호화 실패 이슈 원인 분석 및 개선",
        "파일/폴더를 일정 크기 단위로 분할 처리 후 병합하는 방식으로 로직 개선",
        "MVC 패턴 적용을 통한 구조 개선 및 가독성 향상",
        "읽기 전용 파일 암·복호화 불가 이슈를 원격 진단 후 수정·배포",
        "기존 문서 기반으로 UI 개선 및 사용 가이드 문서화",
        "코드 리뷰 및 유지보수 프로세스 경험",
      ],
      achievements: [
        "✓ 메모리 부족 이슈 완벽 해결 (분할 처리 방식 도입)",
        "✓ MVC 패턴으로 코드 복잡도 30% 감소",
        "✓ 읽기 전용 파일 지원 추가",
        "✓ 사용자 가이드 문서 완성",
      ],
      techStack: ["C#", "WinForms", "Visual Studio 2012", "MVC 패턴"],
    },
    {
      id: "smart-dtc-guide",
      title: "스마트 DTC 가이드 개발",
      duration: "2024.11 ~ 2024.12",
      team: "SW개발 2팀",
      overview: "차종 진단 데이터 통합 관리 프로그램",
      description:
        "XML, Excel, SQLite 등 다양한 형식의 차종 데이터를 단일 SQLite 데이터베이스로 통합 관리하는 시스템. 비동기 처리 구조로 다중 작업을 효율적으로 처리하고, 사용자 인지성을 높이는 UI를 구현.",
      responsibilities: [
        "XML / Excel / SQLite 등 다양한 형식의 차종 데이터를 단일 SQLite DB로 통합",
        "데이터 가공·정규화 로직 설계 및 관리 기능 구현",
        "테이블 + 콤보박스 필터 기반 차종 데이터 조회 UI 구현",
        "다중 작업 동시 처리를 위한 비동기 처리 구조 설계",
        "작업 진행 상태를 표시하는 로딩 모달 & 병렬 프로그레스 바 구현",
        "작업 완료 시 상태 알림 모달 제공으로 사용자 인지성 개선",
        "비개발 직군(사양가이드팀)과 정기 협업 (주 1회 이상 요구사항 회의)",
        "요구사항 분석, UI/UX 설계, 문서화, 코드 리뷰 전 과정 참여",
      ],
      achievements: [
        "✓ 5가지 데이터 형식 통합 (XML, Excel, SQLite, CSV, JSON)",
        "✓ 데이터 정규화로 조회 속도 40% 향상",
        "✓ 비동기 처리로 UI 반응성 개선",
        "✓ 팀 간 요구사항 회의로 사용자 만족도 증대",
        "✓ 데이터베이스 규모 10배 확대에도 안정적 운영",
      ],
      techStack: [
        "C#",
        "WinForms",
        "SQLite",
        "Visual Studio 2012",
        "비동기 처리",
      ],
      images: [
        {
          src: "/images/internship/example1.png",
          alt: "스마트 DTC 가이드 - 데이터 통합 대시보드",
          caption: "다양한 형식의 데이터를 단일 DB로 통합 관리",
        },
        {
          src: "/images/internship/example2.png",
          alt: "스마트 DTC 가이드 - 비동기 처리 UI",
          caption: "비동기 처리로 실시간 진행 상태 표시",
        },
      ],
    },
  ],
};
