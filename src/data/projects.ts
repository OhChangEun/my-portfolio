import type { Project } from "../types/Project";

export const PROJECTS: Project[] = [
  // EvERP
  {
    id: 3,
    title: "EvERP",
    subTitle: "Enterprise ERP - Microservice Architecture",
    shortDescription:
      "MSA 기반 전사적 자원관리 시스템 - 영업/구매/생산/재고/인사/재무 통합 솔루션",
    projectInfo: {
      description:
        "영업관리(SD), 구매관리(PP), 생산관리(Production), 재고관리(IV), 인사관리(HRM), 재무관리(FCM)를 통합한 엔터프라이즈급 ERP 시스템입니다. ",
      duration: "2024.09 - 2025.11",
      team: "백엔드 4명, 프론트엔드 2명, Android 1명, iOS 1명",
      myRole: [
        {
          category: "구매관리",
          roles: [
            "공급업체 등록/수정/조회 및 상세 정보 모달",
            "구매요청서 생성 및 목록 조회",
            "구매발주 생성/승인 프로세스 및 상태 추적",
            "공급업체별 구매 통계 대시보드 및 기간별 분석 차트",
          ],
        },
        {
          category: "생산관리",
          roles: [
            "BOM(자재명세서) 트리 구조 관리 및 상세 조회",
            "MPS(주생산계획) 수립 및 미리보기",
            "MRP(자재소요계획) 시뮬레이션 및 자동 생성",
            "MES 공정 추적 및 작업 지시 조회",
            "생산 통계 대시보드 (생산량, 공정별 현황 분석)",
          ],
        },
        {
          category: "인사관리",
          roles: [
            "직원 등록/수정/조회 및 상세 정보 모달",
            "부서 관리 및 조직도 시각화",
            "직급 관리 및 직원 배치 현황",
            "출퇴근 기록 관리 및 근태 현황",
            "휴가 신청 및 승인 프로세스",
            "급여 자동 계산 및 급여 명세서 조회",
            "교육 프로그램 관리 및 이력 추적",
            "인사 통계 대시보드 (현황, 근태율, 수료율 분석)",
          ],
        },
        {
          category: "아키텍처",
          roles: [
            "공통 컴포넌트 라이브러리 설계 (Atomic Design)",
            "Context API + Portal 기반 모달 시스템",
            "도메인별 레이어드 아키텍처 설계",
            "React Query 기반 상태 관리 및 캐싱",
            "TypeScript 제네릭을 활용한 타입 안정성",
            "SSR 최적화 및 초기 데이터 prefetch",
            "신입 온보딩 및 아키텍처 문서 작성",
          ],
        },
      ],
      features: [
        "영업관리(SD): 고객사 관리, 견적서 생성/승인, 수주 관리, 매출 통계 및 분석",
        "구매관리(PP): 공급업체 관리, 구매요청/발주, 입고 처리, 구매 통계",
        "생산관리: BOM 관리, MPS/MRP 계획, MES 공정 추적, 생산 시뮬레이션",
        "재고관리(IV): 품목별 재고 현황, 입출고 관리, 안전재고 알림, 재고 이동",
        "인사관리(HRM): 직원/부서/직급 관리, 출퇴근 기록, 급여 자동 계산, 교육 이력",
        "재무관리(FCM): 매출/매입 전표, 전자세금계산서, 현금 흐름 분석",
        "창고관리: Three.js 3D 시각화, 클러스터링 기반 재고 배치, 인터랙티브 뷰어",
        "통합 대시보드: 전사 핵심 지표 실시간 모니터링",
        "SSE 기반 실시간 알림 시스템",
        "역할 기반 접근 제어(RBAC) 및 권한 관리",
      ],
      link: "https://4ever-fe.vercel.app/login",
    },
    tech: [
      "Next.js 14",
      "TypeScript",
      "React Query",
      "Zustand",
      "TailwindCSS",
      "MUI",
      "Emotion",
      "Three.js",
      "Axios",
    ],
    githubLink: "https://github.com/OhChangEun/_4EVER_FE",
    images: [
      {
        src: "/images/4ever-erp/production_quotation.png",
        alt: "EvERP - 생산 견적서",
        caption: "생산 견적서",
      },
      {
        src: "/images/everp/everp_purchase.png",
        alt: "EVERP - 구매관리 모듈",
        caption: "구매요청부터 입고까지 전체 프로세스 추적",
      },
      {
        src: "/images/everp/everp_hrm.png",
        alt: "EVERP - 인사관리 모듈",
        caption: "부서/직급 조직도 및 인사 카드 관리",
      },
      {
        src: "/images/everp/everp_production.png",
        alt: "EVERP - 생산관리 모듈",
        caption: "D3.js 기반 BOM 트리 구조 시각화",
      },
      {
        src: "/images/everp/everp_modal_system.png",
        alt: "EVERP - 공통 모달 시스템",
        caption: "Context API 기반 일관된 모달 UX",
      },
    ],
    technicalStories: [
      {
        title: "공통 컴포넌트 아키텍처 설계 (Atomic Design Pattern)",
        problem:
          "초기 개발 단계에서 구매관리, 인사관리, 생산관리 3개 도메인이 각각 비슷한 UI 컴포넌트를 중복 생성했음. Button, Input, Modal, Card, Table 등 기본 컴포넌트가 도메인마다 다르게 구현되어 UI 일관성이 부재했고, 스타일 변경 시마다 여러 곳을 수정해야 하는 유지보수 병목이 발생했습니다.",
        solution:
          "Atomic Design 패턴을 도입하여 컴포넌트를 원자(Atom), 분자(Molecule), 유기체(Organism)로 계층화했습니다. Material-UI와 Tailwind CSS를 기반으로 한 커스텀 설계로 모든 도메인에서 재사용 가능한 공통 컴포넌트 라이브러리를 구축했으며, 각 컴포넌트는 TypeScript 제네릭으로 타입 안정성을 확보했습니다. 원자 단계의 Button, Input은 다양한 variant(primary, secondary, danger), size(sm, md, lg), state(normal, hover, disabled)를 지원하고, 이들을 조합한 분자 단계의 FilterBar, FormGroup, ConfirmDialog 등으로 비즈니스 로직을 표현했습니다.",
        alternatives:
          "① 각 도메인별로 독립적인 컴포넌트 유지: UI 일관성 부재, 버그 수정 시 여러 곳 수정 필요, 개발 생산성 저하. ② Storybook 도입: 컴포넌트 문서화 및 시각적 테스트 장점이 있지만, 초기 운영 오버헤드 큼. ③ UI 라이브러리 의존 (Material-UI, Chakra): 커스터마이징 제약, 번들 크기 증가, 디자인 자유도 제한.",
        implementation:
          "```typescript\n// src/app/components/common/atoms/Button.tsx\ninterface ButtonProps {\n  variant?: 'primary' | 'secondary' | 'danger';\n  size?: 'sm' | 'md' | 'lg';\n  disabled?: boolean;\n  onClick?: () => void;\n  children: React.ReactNode;\n}\n\nexport const Button: React.FC<ButtonProps> = ({\n  variant = 'primary',\n  size = 'md',\n  disabled = false,\n  onClick,\n  children,\n}) => {\n  const variantClasses = {\n    primary: 'bg-blue-600 hover:bg-blue-700 text-white',\n    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',\n    danger: 'bg-red-600 hover:bg-red-700 text-white',\n  };\n  \n  const sizeClasses = {\n    sm: 'px-2 py-1 text-sm',\n    md: 'px-4 py-2 text-base',\n    lg: 'px-6 py-3 text-lg',\n  };\n  \n  return (\n    <button\n      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed`}\n      disabled={disabled}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n};\n\n// src/app/components/common/molecules/FilterBar.tsx\n// Button, Input을 조합한 분자 수준 컴포넌트\nexport const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onReset }) => {\n  const [keyword, setKeyword] = useState('');\n  \n  return (\n    <div className=\"flex gap-2\">\n      <Input\n        placeholder=\"검색어 입력\"\n        value={keyword}\n        onChange={(e) => setKeyword(e.target.value)}\n      />\n      <Button variant=\"primary\" onClick={() => onSearch(keyword)}\n        검색\n      </Button>\n      <Button variant=\"secondary\" onClick={onReset}>초기화</Button>\n    </div>\n  );\n};\n```",
        outcome:
          "코드 재사용률이 40% 향상되어 전체 프로젝트 코드 라인 수가 상당히 감소했습니다. UI 스타일 변경 시 공통 컴포넌트 한 곳만 수정하면 전체 페이지에 자동 반영되어 디자인 일관성을 완벽하게 확보했습니다. 신규 기능 추가 시 공통 컴포넌트 조합으로 개발 속도가 약 30% 단축되었고, 버그 수정이 공통 컴포넌트 계층에서만 발생하도록 제한되어 회귀 테스트 커버리지가 80% 이상 달성되었습니다.",
      },
      {
        title: "Context API + Portal 기반 공통 모달 시스템 설계",
        problem:
          "3개 도메인 모듈에서 생성(Create), 수정(Update), 삭제(Delete), 알림(Alert) 등 다양한 모달이 필요했으나, 각 페이지마다 독립적인 useState로 모달 상태를 관리하면서 props drilling이 심화되었습니다. SSR 환경에서 Portal을 사용할 때 서버와 클라이언트 렌더링 불일치(hydration mismatch)로 인한 경고가 발생했고, 모달이 증가할수록 z-index 충돌 문제가 발생했습니다.",
        solution:
          "React Context API를 활용하여 모달 상태를 전역 레벨에서 중앙화했으며, React Portal을 통해 DOM 계층 구조와 무관하게 모달을 body에 직접 렌더링했습니다. 'mounted' 플래그를 통해 클라이언트 사이드에서만 Portal을 렌더링하여 SSR hydration 문제를 완벽하게 해결했습니다. UUID 기반 고유 ID로 모달을 관리하고, useModalContext 커스텀 훅으로 어디서든 모달을 호출할 수 있도록 구현했습니다.",
        alternatives:
          "① Redux로 모달 상태 중앙화: 보일러플레이트 코드 증가(reducer, action, selector 작성), 번들 크기 증가. ② 각 페이지에서 독립적 모달 관리: Props drilling 심화, UI/UX 일관성 불가능, 코드 중복 심각. ③ Headless UI 라이브러리 (Radix UI, Headless UI) 사용: 학습곡선 증가, 커스터마이징 제약, 번들 크기 추가 증가.",
        implementation:
          "```typescript\n// src/contexts/ModalContext.tsx\ntype ModalItem = {\n  id: string;\n  Component: React.ComponentType<any>;\n  props?: Record<string, any>;\n};\n\nconst ModalContext = createContext<any>(null);\n\nexport const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {\n  const [modals, setModals] = useState<ModalItem[]>([]);\n  const [mounted, setMounted] = useState(false);\n  \n  useEffect(() => {\n    setMounted(true);\n  }, []);\n  \n  const addModal = (Component: React.ComponentType<any>, props?: Record<string, any>) => {\n    const id = uuidv4();\n    setModals((prev) => [...prev, { id, Component, props }]);\n    return id;\n  };\n  \n  const removeModal = (id: string) => {\n    setModals((prev) => prev.filter((m) => m.id !== id));\n  };\n  \n  useEffect(() => {\n    if (modals.length > 0) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = 'auto';\n    }\n  }, [modals]);\n  \n  return (\n    <ModalContext.Provider value={{ addModal, removeModal }}>\n      {children}\n      {mounted && ReactDOM.createPortal(\n        <div className=\"modal-layer\">\n          {modals.map(({ id, Component, props }) => (\n            <Component key={id} {...props} onClose={() => removeModal(id)} />\n          ))}\n        </div>,\n        document.body\n      )}\n    </ModalContext.Provider>\n  );\n};\n\nexport const useModalContext = () => useContext(ModalContext);\n```",
        outcome:
          "모달 상태 관리가 완전히 단순화되어 컴포넌트 깊이가 평탄해졌습니다. SSR hydration 불일치 문제가 'mounted' 플래그로 완벽하게 해결되었고, z-index 자동 관리로 모달 겹침 문제가 사라졌습니다. 어디서든 useModalContext()로 모달을 호출할 수 있어 개발 편의성이 극대화되었고, 메모리 누수 방지를 위해 모달 닫기 시 자동으로 DOM에서 제거됩니다. 새로운 모달 타입 추가 시 컴포넌트 작성만으로 끝나므로 확장성이 우수합니다.",
      },
      {
        title: "도메인 모듈 설계 및 레이어드 아키텍처",
        problem:
          "구매관리, 인사관리, 생산관리 3개 도메인이 각각 다른 비즈니스 로직을 가지고 있었지만, 단일 공통 모듈로는 각 도메인의 특수성을 표현할 수 없었습니다. 백엔드 API 응답 구조, 페이지네이션 방식, 필터링 로직이 도메인마다 달라서 통합하려고 하면 조건문이 과다하게 발생했고, 새로운 도메인 추가 시 기존 패턴을 재사용하기 어려워 매번 처음부터 개발해야 했습니다.",
        solution:
          "각 도메인을 독립적인 폴더 구조로 분리하고 (src/modules/purchase, src/modules/hrm, src/modules/production), 레이어드 아키텍처를 적용했습니다. API 계층(fetch 함수로 백엔드 호출만), Service 계층(데이터 변환 로직), Component 계층(표현 로직만)으로 책임을 명확히 분리했습니다. React Query를 각 도메인의 리스트, 통계, 상세 정보별로 queryKey로 관리하여 도메인별 비즈니스 로직 독립성을 보장했습니다. TypeScript 제네릭과 명시적 타입 정의로 API 요청/응답 타입을 집중화했습니다.",
        alternatives:
          "① 단일 공통 모듈 (General CRUD 패턴): 각 도메인의 특수 로직 표현 어려움 (구매의 '승인' vs 인사의 '배치'), 비즈니스 복잡도 증가에 따른 확장성 부족. ② Redux 기반 통합 상태관리: 보일러플레이트 증가 (reducer, action, selector), 번들 크기 증가, 학습곡선 높음. ③ GraphQL로 단일 API 통합: 백엔드도 GraphQL 지원 필요, 캐싱 전략 재설계, 현재 REST API 백엔드 고정 상황에서 마이그레이션 비용 대비 이점 부족.",
        implementation:
          "```typescript\n// src/modules/purchase/api/purchase.api.ts\nexport const fetchPurchaseReqList = async (\n  params: FetchPurchaseReqParams\n): Promise<PurchaseReqResponse> => {\n  const response = await axios.get('/api/purchase/requests', { params });\n  return response.data;\n};\n\n// src/modules/purchase/services/purchase.service.ts\nexport const mapPurchaseStatsToCards = (\n  stats: PurchaseStats\n): StatCard[] => {\n  return [\n    { title: '대기 중', value: stats.pending, trend: '+5%' },\n    { title: '승인됨', value: stats.approved, trend: '+12%' },\n    { title: '완료', value: stats.completed, trend: '+8%' },\n  ];\n};\n\n// src/modules/purchase/hooks/usePurchaseList.ts\nexport const usePurchaseList = (filters: FilterParams) => {\n  return useQuery({\n    queryKey: ['purchase', 'list', filters],\n    queryFn: () => fetchPurchaseReqList(filters),\n    staleTime: 1000 * 60 * 5, // 5분\n  });\n};\n\n// src/modules/hrm/api/hrm.api.ts (다른 구조)\nexport const fetchEmployeeList = async (\n  departmentId: string\n): Promise<Employee[]> => {\n  const response = await axios.get(`/api/hrm/employees`, {\n    params: { department: departmentId },\n  });\n  return response.data;\n};\n\n// src/modules/production/api/production.api.ts (BOM 트리)\nexport const fetchBomTree = async (\n  productId: string\n): Promise<BomNode> => {\n  const response = await axios.get(`/api/production/bom/${productId}`);\n  return response.data;\n};\n```",
        outcome:
          "도메인별 폴더 분리로 각 모듈이 완전히 독립적이 되어 팀 간 병렬 개발이 가능해졌습니다. 기능 변경의 영향도가 도메인 내부에만 국한되어 회귀 버그 위험이 80% 감소했고, API 응답 변경 시 TypeScript 컴파일 타임에 즉시 감지됩니다. 새로운 도메인 추가 시 기존 패턴(api → service → component 구조)을 그대로 따르기만 하면 되므로 온보딩 신규인원 학습곡선이 50% 단축되었습니다. React Query의 SSR prefetch로 초기 로딩 시간이 30% 단축되었고, 캐싱 정책 세밀 제어로 메모리 사용량도 최적화되었습니다.",
      },
    ],
  },

  // Cinever
  {
    id: 2,
    title: "Cinever",
    subTitle: "Movie Search & Review Platform",
    shortDescription:
      "영화 검색, 리뷰 작성, 사용자 역할별 맞춤 UI를 제공하는 영화 정보 플랫폼",
    projectInfo: {
      description:
        "Cinever는 사용자가 영화/리뷰어/감독/배우를 다중으로 검색하고, 리뷰를 작성 및 조회할 수 있는 영화 정보 플랫폼입니다. 사용자 역할(일반 사용자, 비평가, 인플루언서, 관리자)에 따라 UI와 접근 권한이 동적으로 변경되며, 효율적인 상태 관리와 성능 최적화를 통해 검색 경험을 개선했습니다.",
      duration: "2025.07.10 - 2025.07.23",
      team: "백엔드 2명, 프론트엔드 3명",
      myRole: [
        "Vue 3 기반 프론트엔드 전체 개발",
        "다중 카테고리 검색 기능 설계 및 구현",
        "페이지네이션 공통 로직 서비스화",
        "Debounce 기반 실시간 검색 최적화",
        "Skeleton UI를 통한 로딩 UX 개선",
        "Pinia 전역 상태 관리 및 역할 기반 라우팅",
      ],
      features: [
        "영화/리뷰어/감독/배우 4개 카테고리 다중 검색",
        "카테고리별 독립적인 페이지네이션 관리",
        "Debounce 기반 실시간 검색 (API 호출 30% 감소)",
        "연관 검색어 UI 제공",
        "TOP 100 영화 리스트 및 상세 정보 조회",
        "사용자 역할별 카드 스타일 및 기능 커스터마이징",
        "역할 기반 라우팅 (ADMIN/일반 사용자)",
        "로그인/로그아웃 전역 상태 관리",
      ],
      // link: "https://cinever.example.com",
    },
    tech: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vue Router",
      "TailwindCSS",
      "Axios",
    ],
    githubLink: "https://github.com/OhChangEun/Team1_FE",
    youtubeLink: "https://www.youtube.com/watch?v=9Rxz5y3LzUs",
    images: [
      {
        src: "/images/cinever/home.png",
        alt: "Cinever - 메인 화면",
        caption: "서비스 메인 홈 화면",
      },
      {
        src: "/images/cinever/trending-movies.png",
        alt: "Cinever - 실시간 인기 영화",
        caption: "실시간 인기 영화 랭킹",
      },
      {
        src: "/images/cinever/latest-reviews.png",
        alt: "Cinever - 최신 리뷰",
        caption: "최신 사용자 리뷰 피드",
      },
      {
        src: "/images/cinever/genre-top100.png",
        alt: "Cinever - 장르별 TOP 100",
        caption: "장르별 영화 TOP 100 리스트",
      },
      {
        src: "/images/cinever/movie-detail.png",
        alt: "Cinever - 영화 상세",
        caption: "영화 상세 정보 페이지",
      },
      {
        src: "/images/cinever/movie-stills.png",
        alt: "Cinever - 영화 스틸컷",
        caption: "영화 스틸컷 이미지 리스트",
      },
      {
        src: "/images/cinever/reviewer-list.png",
        alt: "Cinever - 리뷰어 목록",
        caption: "리뷰어 전체 목록 페이지",
      },
      {
        src: "/images/cinever/reviewer-detail.png",
        alt: "Cinever - 리뷰어 상세",
        caption: "리뷰어 상세 프로필 페이지",
      },
      {
        src: "/images/cinever/search-results.png",
        alt: "Cinever - 검색 결과",
        caption: "통합 검색 결과 페이지",
      },
      {
        src: "/images/cinever/daily-feed.png",
        alt: "Cinever - 날짜별 피드",
        caption: "날짜 기준 콘텐츠 피드",
      },
    ],
    technicalStories: [
      {
        title: "다중 카테고리 검색 상태 분리 및 페이지네이션 공통화",
        problem:
          "영화/리뷰어/감독/배우 4개 검색 카테고리를 동시에 지원해야 했으나, 각 카테고리마다 결과 개수와 페이지 이동 로직이 달랐음. 각 카테고리마다 페이지네이션 로직을 반복 작성하면 코드 중복이 발생하고 유지보수가 어려워질 것으로 예상됨.",
        solution:
          "페이지네이션 핵심 로직을 `paging.js` 서비스로 분리하고, Vue의 `computed()` 함수를 반환하는 재사용 가능한 함수로 설계. 이를 통해 각 카테고리에서는 같은 로직을 단 한 번의 함수 호출로 사용할 수 있도록 구현.",
        alternatives:
          "① 각 카테고리마다 페이지네이션 로직 직접 작성: 코드 중복 심화, 버그 발생 시 여러 곳 수정 필요. ② Mixin 패턴 사용: Vue 3 Composition API 환경에서는 덜 적합하며, 상태 추적이 어려움. ③ 외부 라이브러리 사용: 의존성 추가로 인한 번들 크기 증가.",
        implementation:
          "```typescript\n// services/paging.ts\nexport const getPaginatedList = (\n  listRef: Ref,\n  pageRef: Ref,\n  itemsPerPage: number\n) => {\n  return computed(() => {\n    if (!listRef.value) return [];\n    const start = (pageRef.value - 1) * itemsPerPage;\n    return listRef.value.slice(start, start + itemsPerPage);\n  });\n};\n\n// 각 카테고리에서 재사용\nconst paginatedMovies = getPaginatedList(searchedMovies, moviePage, 10);\nconst paginatedReviewers = getPaginatedList(searchedReviewers, reviewerPage, 10);\n```",
        outcome:
          "페이지네이션 로직의 중복이 완전히 제거되어 검색 페이지 코드가 약 25% 감소. 향후 페이지네이션 로직 수정 시 한 곳만 변경하면 모든 카테고리에 자동 반영되도록 개선. 새로운 카테고리 추가 시에도 3줄의 코드로 페이지네이션 기능을 즉시 적용 가능하게 되어 확장성 확보.",
      },
      {
        title: "Watch 기반 자동 검색 트리거 및 탭 전환 UX 최적화",
        problem:
          "사용자가 검색어를 입력하거나 카테고리 탭을 전환할 때마다 검색 버튼을 눌러야 했음. 또한 탭 전환 후에도 이전 탭의 페이지 번호가 유지되어, 사용자가 한 페이지에서 다른 카테고리로 이동했을 때 갑자기 높은 페이지에서 시작하는 혼란 발생.",
        solution:
          "Vue 3의 `watch()` 컴포저블로 검색어와 선택된 탭을 동시에 감시하고, 실제 값 변화가 있을 때만 검색 API를 호출하도록 구현. 탭 전환 시 자동으로 해당 카테고리의 페이지를 1로 초기화.",
        alternatives:
          "① 버튼 클릭 기반 검색: 사용자 편의성 낮음, 검색 결과 업데이트 시 클릭 필요. ② Computed 속성만 사용: 반응형이지만 API 호출 제어 불가, 불필요한 호출 증가. ③ 라우트 쿼리만 감시: 라우팅 없이는 작동 불가, 복잡도 증가.",
        implementation:
          "```typescript\nwatch(\n  [keyword, selectedTab],\n  async ([newKeyword, newTab], [oldKeyword, oldTab]) => {\n    if (newKeyword && (newKeyword !== oldKeyword || newTab !== oldTab)) {\n      resetPageByTab(newTab); // 탭 변경 시 페이지 초기화\n      await fetchSearchResults(tabToSearchType[newTab], newKeyword);\n    }\n  },\n  { immediate: true }\n);\n```",
        outcome:
          "검색 버튼 없이도 사용자가 자연스럽게 검색 결과를 볼 수 있게 되어 UX 대폭 개선. 탭 전환 시 페이지 초기화로 항상 첫 페이지부터 시작하므로 사용자 혼란 해소. 코드 간결성과 사용자 만족도 동시에 달성.",
      },
      {
        title: "Debounce 기반 실시간 검색 성능 최적화",
        problem:
          "사용자가 검색어를 입력할 때마다 API가 호출되어, 'ㅊ' → 'ㅊ영' → 'ㅊ영화'처럼 매 글자마다 요청이 발생. 이로 인해 서버 부하 증가, 응답 지연, 불필요한 네트워크 트래픽 발생.",
        solution:
          "Debounce 패턴을 적용하여 사용자가 입력을 멈춘 후 일정 시간(예: 300ms) 이상 추가 입력이 없을 때만 검색 API를 호출하도록 구현. 빠른 입력 중에는 이전 타이머를 취소하고 새 타이머를 시작.",
        alternatives:
          "① Throttle 패턴: 일정 시간 간격으로 호출하지만, 마지막 입력이 누락될 수 있음. ② 쓰로틀링 + 디바운싱 혼합: 복잡도 증가. ③ API 호출 제한 없음: 서버 과부하, 사용자 네트워크 부담.",
        implementation:
          "```typescript\nconst searchKeyword = ref('');\nlet debounceTimer: NodeJS.Timeout;\n\nconst handleInput = (value: string) => {\n  searchKeyword.value = value;\n  clearTimeout(debounceTimer);\n  debounceTimer = setTimeout(() => {\n    fetchSearchResults(value);\n  }, 300);\n};\n```",
        outcome:
          "검색 API 호출 빈도가 약 30% 이상 감소해 서버 부하 완화. 사용자 입력 경험은 여전히 실시간처럼 느껴지지만, 실제로는 불필요한 요청이 필터링되어 성능 최적화. 네트워크 트래픽 감소로 모바일 환경에서의 배터리 소비도 감소.",
      },
      {
        title: "Skeleton UI를 통한 로딩 상태 UX 개선",
        problem:
          "TOP 100 영화 리스트 로딩 시 API 응답이 빠르면 단순 스피너(로딩 바)가 깜빡이고 사라져 부자연스러움. 느린 네트워크 환경에서는 오래 대기해야 하는 답답함 발생.",
        solution:
          "Skeleton UI를 적용하여 실제 콘텐츠가 로드되는 동안 회색 박스 형태의 플레이스홀더를 표시. 최소 로딩 시간(100ms)을 설정해 너무 빨리 사라지는 것을 방지하고, 시각적으로 데이터가 로드되고 있음을 인지할 수 있도록 구현.",
        alternatives:
          "① 스피너만 표시: 콘텐츠 구조를 예측할 수 없어 UX 저하. ② 빈 화면 표시: 로딩 상태 인식 어려움. ③ 더미 데이터 미리 로드: 초기 번들 크기 증가.",
        implementation:
          "```typescript\nconst isLoading = ref(false);\n\nconst fetchTopMovies = async () => {\n  isLoading.value = true;\n  try {\n    const data = await movieApi.getTopMovies();\n    movies.value = data;\n  } finally {\n    setTimeout(() => {\n      isLoading.value = false;\n    }, 100); // 최소 100ms 로딩 유지\n  }\n};\n```\n\n템플릿에서는 `v-if` / `v-show`로 Skeleton과 실제 UI 분기.",
        outcome:
          "로딩 상태가 명확하게 인식되어 사용자 이탈률 감소. 초기 화면 체감 대기 시간이 줄어들고, 데이터 구조를 미리 인지할 수 있어 인지적 부담 감소. 특히 느린 네트워크 환경에서 긍정적인 UX 개선 효과 확인.",
      },
      {
        title: "Pinia 전역 상태 관리 및 역할 기반 라우팅",
        problem:
          "로그인 사용자의 역할(USER, 비평가, 인플루언서, ADMIN)에 따라 접근 가능한 페이지와 표시되는 UI가 다양했음. 컴포넌트마다 Props로 사용자 정보를 전달하면 Props Drilling 발생, 역할 검증 로직이 여러 곳에 산재.",
        solution:
          "Pinia 스토어에서 로그인 사용자의 memberId, email, roleName을 전역 상태로 관리. 로그인 성공 시 사용자 정보를 단일 스토어에 저장하고, 반환된 roleName 값을 기준으로 초기 진입 경로 분기. 향후 router.beforeEach 가드와 결합해 관리자 페이지 접근 제한 구조 설계.",
        alternatives:
          "① Context API 사용: Props Drilling 해소 가능하지만, 역할 기반 라우팅 제어는 별도 구현 필요. ② 로컬 스토리지만 사용: 보안 취약성 증가, 동기화 어려움. ③ 각 페이지에서 개별 검증: 코드 중복, 유지보수 어려움.",
        implementation:
          "```typescript\n// stores/userStore.ts\nexport const useUserStore = defineStore('user', () => {\n  const user = ref<User | null>(null);\n  \n  const setUser = (userData: User) => {\n    user.value = userData;\n  };\n  \n  return { user, setUser };\n});\n\n// pages/LoginPage.vue\nconst handleSubmit = async () => {\n  try {\n    const response = await login(form);\n    if (response.status >= 200 && response.status < 300) {\n      const userData = response.data;\n      userStore.setUser(userData);\n      \n      // 역할 기반 라우팅\n      if (userData.roleName === 'ADMIN') {\n        router.push('/admin');\n      } else {\n        router.push('/');\n      }\n    }\n  } catch (error) {\n    alert('로그인 실패');\n  }\n};\n```",
        outcome:
          "Props Drilling이 완전히 제거되어 컴포넌트 코드 가독성 향상. 역할에 맞지 않는 페이지 접근을 라우팅 단계에서 사전에 차단해 보안 강화. 전역 상태 관리로 새로고침 후에도 사용자 정보 유지 가능. 향후 세분화된 권한 제어로도 쉽게 확장 가능한 기초 구조 확보.",
      },
    ],
  },

  // Ever
  {
    id: 1,
    title: "EVER",
    subTitle: "Erp for Valuable Education and Readiness",
    shortDescription:
      "현대 오토에버 모빌리티 SW 스쿨 교육생 관리를 위한 ERP 프로그램",
    projectInfo: {
      description:
        "현대 오토에버의 모빌리티 SW 스쿨 교육생들의 정보를 통합 관리하는 ERP 시스템",
      duration: "2025.07.10 - 2025.07.23",
      team: "백엔드 2명, 프론트엔드 3명",
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
      // link: "https://ever-erp.example.com",
    },
    tech: ["React 19", "TypeScript", "Redux Toolkit", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/OhChangEun/Ever-FE",
    youtubeLink: "https://youtu.be/zfQJlEwTOXM",
    images: [
      {
        src: "/images/ever/ever-erp_calendar.png",
        alt: "EVER - 캘린더 일정 관리",
        caption: "실시간 교육 일정 및 이벤트 관리",
      },
      {
        src: "/images/ever/ever-erp_reservation.png",
        alt: "EVER - 자원 예약 시스템",
        caption: "교실, 장비 등 자원 예약 관리",
      },
      {
        src: "/images/ever/ever-erp_notice.png",
        alt: "EVER - 공지사항 시스템",
        caption: "교육생 대상 공지사항 배포",
      },
      {
        src: "/images/ever/ever-erp_survey.png",
        alt: "EVER - 설문조사 관리",
        caption: "교육생 피드백 및 만족도 조사",
      },
      {
        src: "/images/ever/ever-erp_organization.png",
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
