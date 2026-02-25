export type TechnicalStory = {
  title: string; // 기술 주제
  problem: string; // ① 문제 상황
  solution: string; // ② 기술적 선택의 이유
  alternatives?: string; // ③ 고려했던 대안과 트레이드오프
  implementation: string; // ④ 실제 구현 방식
  outcome: string; // ⑤ 기술적 가치
};

export type RoleCategory = {
  category: string; // 카테고리명 (예: "구매관리", "인사관리" 등)
  roles: string[]; // 해당 카테고리의 역할 목록
};

export type ProjectInfo = {
  description: string; // 서비스 설명
  duration: string; // 작업 기간 (예: "6개월", "2024.01 - 2024.06")
  team: string; // 구성원 (예: "백엔드 2명, 프론트엔드 2명, 디자인 1명")
  myRole: string[] | RoleCategory[]; // 나의 담당 역할 (리스트 또는 카테고리별)
  features: string[]; // 주요 기능 목록
  link?: string; // 프로젝트 웹사이트 주소
};

export type Project = {
  id: number;
  title: string;
  subTitle?: string;
  shortDescription: string; // 카드에 표시되는 짧은 설명
  projectInfo: ProjectInfo; // 프로젝트 정보
  tech: string[];
  githubLink?: string; // GitHub 링크
  youtubeLink?: string; // YouTube 링크
  images?: Array<{ src: string; alt: string; caption?: string }>;
  technicalStories?: TechnicalStory[]; // 기술적 의사결정 스토리
};
