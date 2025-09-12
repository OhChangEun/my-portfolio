export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string; // 배포 URL 또는 GitHub 링크
  detail?: string; // 간단 설명
  background?: string; // 프로젝트 배경
  meaning?: string; // 프로젝트 의미, 학습 내용
  setup?: string; // 설치 및 실행 방법
};
