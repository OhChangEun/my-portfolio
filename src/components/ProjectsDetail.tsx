import { PROJECTS } from "../data/projects";
import ProjectImageSlider from "./ProjectImageSlider";
import type { ModalProps } from "./public/modals/types";

interface ProjectDetailProps extends ModalProps {
  projectId: number;
}

const ProjectDetail = ({ projectId }: ProjectDetailProps) => {
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div className="text-sm">
      {/* 내부 스크롤 영역 */}
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
  );
};

export default ProjectDetail;
