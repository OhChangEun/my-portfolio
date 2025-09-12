import { useEffect } from "react";
import type { Project } from "../types/Project";
import ProjectImageSlider from "./ProjectImageSlider";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  // 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 원복
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-lg w-full max-w-4xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 내부 스크롤 영역 */}
        <div className="max-h-[90vh] overflow-y-auto py-16 px-12">
          {/* 제목 */}
          <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>

          {/* 간단 설명 */}
          <p className="text-secondary mb-4">{project.description}</p>

          {/* 사용 기술 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-tertiary text-primary text-xs px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* 배경 */}
          {project.background && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Background</h4>
              <p className="text-gray-700">{project.background}</p>
            </div>
          )}

          {/* 의미 */}
          {project.meaning && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Meaning</h4>
              <p className="text-gray-700">{project.meaning}</p>
            </div>
          )}

          {/* 설치 및 실행 */}
          {project.setup && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Setup & Usage</h4>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {project.setup}
              </pre>
            </div>
          )}

          {/* 이미지 슬라이더 */}
          <ProjectImageSlider />
        </div>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-7 text-lg text-secondary hover:text-primary"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
