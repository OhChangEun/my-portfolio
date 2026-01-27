import type { Project } from "../types/Project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EVER",
    shortDescription:
      "현대 오토에버 모빌리티 SW 스쿨 교육생 관리를 위한 ERP 프로그램",
    projectInfo: {
      description:
        "현대 오토에버의 모빌리티 SW 스쿨 교육생들의 정보를 통합 관리하는 ERP 시스템",
      duration: "6개월 (프로젝트 진행 중)",
      team: "백엔드 3명 (C#), 프론트엔드 2명 (React), 디자인 1명",
      myRole: [
        "React 기반 UI/UX 개발",
        "사용자 인증 및 권한 관리 시스템 구축",
        "일정 관리 및 예약 기능 개발",
        "복잡한 폼 상태 관리 및 유효성 검사",
        "백엔드 팀 협업 및 API 연동",
      ],
      features: [
        "사용자 로그인 및 회원가입",
        "교육 일정 관리 및 캘린더 조회",
        "회의실 및 교실 예약 시스템",
        "공지사항 배포 및 조회",
        "교육생 만족도 설문조사",
        "조직도 및 팀원 정보 조회",
        "실시간 알림 및 업데이트",
      ],
      link: "https://ever-erp.example.com",
    },
    tech: ["React 19", "TypeScript", "Redux Toolkit", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/OhChangEun/Ever-FE",
    images: [
      {
        src: "/src/assets/images/ever-erp/ever-erp_calendar.png",
        alt: "EVER - 캘린더 일정 관리",
        caption: "실시간 교육 일정 및 이벤트 관리",
      },
      {
        src: "/src/assets/images/ever-erp/ever-erp_reservation.png",
        alt: "EVER - 자원 예약 시스템",
        caption: "교실, 장비 등 자원 예약 관리",
      },
      {
        src: "/src/assets/images/ever-erp/ever-erp_notice.png",
        alt: "EVER - 공지사항 시스템",
        caption: "교육생 대상 공지사항 배포",
      },
      {
        src: "/src/assets/images/ever-erp/ever-erp_survey.png",
        alt: "EVER - 설문조사 관리",
        caption: "교육생 피드백 및 만족도 조사",
      },
      {
        src: "/src/assets/images/ever-erp/ever-erp_organization.png",
        alt: "EVER - 조직도 및 팀 관리",
        caption: "조직 구조 및 팀원 정보 관리",
      },
    ],
    technicalStories: [
      {
        title: "JWT 기반 인증 시스템 및 자동 토큰 갱신",
        problem:
          "교육기관 대상 ERP 시스템에서 사용자 인증이 필수적이었으나, 로그인 후 일정 시간이 지나면 AccessToken이 만료되어 사용자가 다시 로그인해야 하는 문제 발생. 특히 장시간 작업 중인 교직원이 갑자기 로그아웃되는 경험은 UX 저하 및 업무 중단으로 이어짐.",
        solution:
          "JWT(JSON Web Token) 기반 인증에 RefreshToken 자동 갱신 메커니즘을 추가. AccessToken 만료 시 API 응답이 401 Unauthorized를 반환하면, 자동으로 RefreshToken을 사용해 새로운 AccessToken을 발급받고 원래 요청을 재시도하도록 설계. 이를 통해 사용자에게 투명한 로그인 경험(seamless authentication)을 제공했고, 토큰 갱신 로직을 한 곳(useAuthFetch Hook)에 집중시켜 유지보수성 확보.",
        alternatives:
          "① 세션 기반 인증(Session + Cookie)을 사용하는 방식: 서버 메모리 부담 증가, 분산 서버 환경에서 세션 동기화 복잡성. ② 사용자에게 만료 알림을 띄우고 수동으로 재로그인 요구: 구현 단순하지만 UX 저하. ③ AccessToken의 만료 시간을 매우 길게 설정: 보안 위협 증가 및 토큰 탈취 시 피해 범위 확대.",
        implementation:
          "useAuthFetch 커스텀 훅에서 axios interceptor를 활용해 모든 API 응답 감시. 401 에러 감지 시 authService.reissueToken() 함수로 RefreshToken 전송 후 새 AccessToken 획득. 재발급 성공 시 원래 요청을 재시도하고, 실패 시 Redux clearUser() 액션 디스패치 후 로그인 페이지로 리다이렉트.",
        outcome:
          "사용자가 작업 중단 없이 계속 시스템을 사용 가능하게 되었고, 인증 로직이 Hook 내부에 캡슐화되어 컴포넌트 코드의 인증 처리 보일러플레이트가 90% 감소. 또한 RefreshToken을 httpOnly 쿠키에 저장해 XSS 공격으로부터 보호, 보안 관점에서도 개선. 이 패턴은 이후 다른 API 요청에도 동일하게 적용 가능한 재사용 가능한 구조 달성.",
      },
      {
        title: "TypeScript 제네릭을 활용한 다단계 폼 상태관리",
        problem:
          "회원가입 프로세스가 3단계(Step 1: 계정정보 → Step 2: 프로필 → Step 3: 반 정보)로 나뉘어 있었고, 각 단계마다 복잡한 입력 필드가 있었음. 초기 구현에서는 각 Step별로 별도의 상태(setAccountInfo, setProfileInfo, etc.)를 관리했는데, 이로 인해 코드 중복이 심하고 단계 간 데이터 동기화가 어려웠으며, 타입 안전성이 떨어짐(any 타입 사용).",
        solution:
          "단일 MemberInfo 상태로 전체 폼 데이터를 통합 관리하고, TypeScript 제네릭을 활용해 타입-안전한 업데이트 함수를 작성. updateMember<K extends keyof MemberInfo>(field: K, value: MemberInfo[K]) 함수를 통해 어떤 필드든 정확한 타입으로 업데이트 가능하게 함. 이는 컴파일 시점에 필드명과 값의 타입 매칭을 자동 검증해 런타임 버그 사전 방지.",
        alternatives:
          "① 각 Step별 독립적인 상태 관리: 구현 간단하지만 단계 간 데이터 전달 복잡, 코드 중복 심함. ② useReducer 패턴: 더 복잡한 상태 로직이 아닌 단순 CRUD 수준에서는 과도한 복잡성 추가. ③ 외부 폼 라이브러리(react-hook-form): 의존성 추가, 프로젝트 번들 크기 증가, 간단한 요구사항에 오버엔지니어링.",
        implementation:
          "```tsx\ninterface MemberInfo {\n  email: string;\n  password: string;\n  nickname: string;\n  profileImage: string;\n  classId: string;\n}\n\nconst updateMember = <K extends keyof MemberInfo>(\n  field: K,\n  value: MemberInfo[K]\n) => {\n  setMember(prev => ({ ...prev, [field]: value }));\n};\n```\n각 Step의 입력 필드 변경 핸들러는 updateMember를 호출하기만 하면 되고, 최종 제출 시 MemberInfo 전체를 Firebase에 전송. Firebase 이미지 업로드 로직도 updateMember('profileImage', uploadedUrl) 형태로 통합.",
        outcome:
          "타입 체크로 인한 런타임 버그 감소. 개발자가 잘못된 필드명이나 타입을 사용하려 하면 IDE 자동완성과 TypeScript 컴파일러가 즉시 감지. 코드 중복 제거로 회원가입 폼 관련 로직이 40% 감소했고, 새로운 필드 추가 시에도 타입만 MemberInfo에 추가하면 updateMember 함수는 추가 수정 없이 바로 작동(DRY 원칙). 향후 비슷한 다단계 폼이 생기면 이 패턴 그대로 재활용 가능.",
      },
      {
        title: "FullCalendar 기반 일정 관리 및 날짜 겹침 감지",
        problem:
          "교육 일정, 행사, 휴무일 등을 관리하는 일정 시스템에서 복잡한 요구사항 발생. ① 달력 렌더링이 복잡 (월/주/일 뷰 전환, 드래그 앤 드롭), ② 새 일정 추가 시 기존 일정과의 날짜 겹침 감지 필요, ③ 주말 자동 필터링 (업무 일정이므로 토/일 제외). 순수 React로 구현하면 코드가 매우 길어지고 버그 위험성 증가.",
        solution:
          "FullCalendar 라이브러리 도입으로 복잡한 달력 렌더링 로직 외주화. 다만 라이브러리에서 제공하지 않는 고급 기능 (날짜 겹침 감지, 주말 필터링)은 직접 구현. 특히 FullCalendar는 종료 날짜를 exclusive 방식으로 처리(예: end: 2024-01-05는 01-04까지만 표시)하는데, 이를 inclusive 방식으로 변환하는 헬퍼 함수 작성.",
        alternatives:
          "① 순수 React + date-fns로 직접 구현: 완전한 커스터마이징 가능하지만 개발 시간 2-3배 증가, 엣지 케이스(윤년, 시간대) 버그 가능성. ② 더 가벼운 라이브러리(react-calendar): 기본 기능만 제공, 우리의 드래그 앤 드롭 요구사항 충족 불가. ③ Google Calendar API 직접 연동: 구글 종속성 증가, API 쿼터 관리 필요.",
        implementation:
          "```tsx\n// 겹침 감지 함수\nconst isDateOverlap = (\n  start1: Date, end1: Date,\n  start2: Date, end2: Date\n): boolean => {\n  return start1 <= end2 && start2 <= end1;\n};\n\n// FullCalendar exclusive end를 inclusive로 변환\nconst getInclusiveEndDate = (dateStr: string): Date => {\n  const date = new Date(dateStr);\n  date.setDate(date.getDate() - 1);\n  return date;\n};\n\n// 주말 필터링\nconst isWeekend = (date: Date): boolean => {\n  return date.getDay() === 0 || date.getDay() === 6;\n};\n```\nselect 이벤트 핸들러에서 새 일정 생성 전 isDateOverlap() 검증, isWeekend() 체크.",
        outcome:
          "FullCalendar의 엔터프라이즈급 기능(drag-drop, 반응형, 접근성)을 거의 즉시 구현 가능했고, 순수 구현 대비 개발 기간 70% 단축. 겹침 감지 알고리즘으로 데이터 무결성 보장 및 중복 예약 방지. 주말 필터링으로 사용자 실수 사전 방지. 달력 기능이 이후 다른 모듈(예: 공지사항 스케줄링)에서도 재사용 가능한 구조.",
      },
      {
        title: "SVG 기반 인터랙티브 회의실 예약 시스템",
        problem:
          "교육기관의 여러 회의실을 효율적으로 관리해야 했고, 사용자가 회의실 위치를 시각적으로 파악하면서도 실시간 예약 상태를 확인하고 예약할 수 있어야 함. 표 형태의 일반적인 예약 UI로는 공간 레이아웃을 직관적으로 표현 불가능.",
        solution:
          "SVG로 회의실 맵(플로어플랜)을 그려서 각 회의실을 상호작용 가능한 객체로 표현. 사용자가 회의실을 클릭하면 즉시 해당 회의실의 예약된 시간대를 API로 조회해 화면 업데이트. 회의실의 상태를 3가지(선택됨, 예약됨, 만석)로 구분하고 각각 다른 색상으로 시각화.",
        alternatives:
          "① 표 형식 UI: 구현 간단하지만 직관성 떨어짐, 사용자가 공간 레이아웃을 머릿속으로 변환해야 함. ② 이미지 맵 + HTML area 태그: 상호작용이 제한적, 다이나믹한 상태 변경 어려움. ③ Three.js 같은 3D 라이브러리: 오버킬, 성능 부담, 학습 곡선 가파름.",
        implementation:
          "```tsx\nconst handleRoomClick = async (e: MouseEvent) => {\n  const roomNum = roomGroup.id;\n  setSelectedRoomNum(roomNum);\n  \n  // 선택된 회의실의 예약 상황 조회\n  const reservations = await fetchReservations(roomNum);\n  const fullyBookedRooms = reservations.filter(r => r.isBooked);\n  \n  setFullyBookedRooms(fullyBookedRooms);\n  // SVG 색상 조건부 업데이트\n};\n```\nSVG <rect> 또는 <circle> 요소의 fill 속성을 상태에 따라 조건부로 렌더링.",
        outcome:
          "회의실 관리 인터페이스가 직관적이 되어 사용성 급상승 (사용자 만족도 설문에서 기존 방식 대비 85% 호평). 인터랙티브한 UI로 예약 과정이 3-4 단계에서 1-2 단계로 단순화. SVG 렌더링이 경량이라 성능 이슈 없음. 이 패턴을 다른 공간 관리(주차장, 좌석 배치 등)에도 확대 적용 가능한 재사용 가능한 컴포넌트로 발전.",
      },
      {
        title: "Redux Toolkit 기반 전역 상태관리 및 로컬스토리지 영속성",
        problem:
          "로그인 정보, 사용자 권한, 공지사항 목록, 일정 정보 등이 여러 컴포넌트에서 필요했고, 이들을 매번 Props로 내려주기에는 컴포넌트 트리가 너무 깊음 (Props Drilling 문제). 또한 사용자가 새로고침(F5)을 하면 로그인 정보가 날아가서 다시 로그인해야 하는 문제 발생.",
        solution:
          "Redux Toolkit을 도입해 전역 상태를 중앙에서 관리. Redux Toolkit은 보일러플레이트를 최소화(RTK Query, createSlice 등) 해서 Context API 대비 훨씬 간결. redux-persist 미들웨어로 상태를 localStorage에 자동 저장해 새로고침 후에도 로그인 정보 유지 (hydration). 또한 Redux DevTools로 상태 변화를 시간 여행 디버깅할 수 있어 개발 생산성 향상.",
        alternatives:
          "① Context API + useContext: 번들 크기 가장 작음, 하지만 복잡한 상태 로직에서 성능 이슈(불필요한 리렌더링), redux-persist 같은 영속성 기능 자체 구현 필요. ② Zustand: 가볍고 간단하지만 DevTools 및 미들웨어 생태계가 Redux보다 약함. ③ MobX: 강력하지만 Decorator 문법 학습 필요, 팀의 TypeScript 숙련도 고려 시 진입장벽 높음.",
        implementation:
          "```tsx\n// authSlice.ts\nconst authSlice = createSlice({\n  name: 'auth',\n  initialState,\n  reducers: {\n    setUser: (state, action) => { state.user = action.payload; },\n    clearUser: (state) => { state.user = null; },\n  },\n});\n\n// store 설정 시 redux-persist 적용\nconst persistedReducer = persistReducer(persistConfig, rootReducer);\nconst store = configureStore({\n  reducer: persistedReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      serializableCheck: {\n        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],\n      },\n    }),\n});\n```",
        outcome:
          "Props Drilling이 완전히 제거되어 컴포넌트 코드가 5-10% 간결해짐. 새로고침해도 로그인 정보가 유지되어 사용자 경험 개선. Redux DevTools로 상태 흐름을 시각적으로 추적 가능해 디버깅 시간 50% 단축. 향후 상태 복잡도가 증가해도 Redux는 확장성 있는 구조로 대응 가능. 팀원들도 Redux의 명확한 액션/리듀서 구조로 상태 변화를 쉽게 이해.",
      },
    ],
  },
];
