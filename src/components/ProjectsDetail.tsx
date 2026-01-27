import { useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectImageGallery from "./ProjectImageGallery";
import TechnicalStoryCard from "./TechnicalStoryCard";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import type { ModalProps } from "./public/modals/types";

interface ProjectDetailProps extends ModalProps {
  projectId: number;
}

type TabType = "info" | "features" | "technical" | "gallery";

const ProjectDetail = ({ projectId }: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("info");
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) return null;

  const tabs: Array<{ id: TabType; label: string; icon: string }> = [
    { id: "info", label: "프로젝트 정보", icon: "📋" },
    { id: "features", label: "기능 & 기술", icon: "🛠️" },
    { id: "technical", label: "기술적 의사결정", icon: "🔧" },
    ...(project.images && project.images.length > 0
      ? [{ id: "gallery" as TabType, label: "프로젝트 스크린샷", icon: "📸" }]
      : []),
  ];

  return (
    <div className="space-y-4">
      {/* 헤더 - 제목과 링크 */}
      <div className="flex items-center justify-between pb-2 gap-2 flex-wrap">
        <div className="flex gap-2">
          {project.projectInfo.link && project.projectInfo.link !== "#" && (
            <a
              href={project.projectInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors"
            >
              <FiGlobe className="text-sm" />
              Website
            </a>
          )}
          {project.githubLink && project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 hover:bg-gray-700 text-white rounded text-xs font-medium transition-colors"
            >
              <FiGithub className="text-sm" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-all relative whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            <span className="flex items-center gap-2">
              {tab.icon} {tab.label}
            </span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="tabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="pt-2"
      >
        {/* 탭 1: 프로젝트 정보 */}
        {activeTab === "info" && (
          <div className="space-y-4">
            {/* 서비스 설명 */}
            <div>
              <h4 className="font-semibold text-xs text-gray-500 uppercase mb-2">
                서비스 설명
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {project.projectInfo.description}
              </p>
            </div>

            {/* 작업 기간, 구성원 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-xs text-blue-600 uppercase mb-1">
                  작업 기간
                </h4>
                <p className="text-sm text-gray-700 font-medium">
                  {project.projectInfo.duration}
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-xs text-purple-600 uppercase mb-1">
                  구성원
                </h4>
                <p className="text-sm text-gray-700 font-medium">
                  {project.projectInfo.team}
                </p>
              </div>
            </div>

            {/* 나의 담당 역할 */}
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h4 className="font-semibold text-xs text-green-600 uppercase mb-2">
                나의 담당 역할
              </h4>
              <ul className="space-y-1">
                {Array.isArray(project.projectInfo.myRole) ? (
                  project.projectInfo.myRole.map((role, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">▪</span>
                      <span>{role}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-700">
                    {project.projectInfo.myRole}
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* 탭 2: 주요 기능 & 기술 스택 */}
        {activeTab === "features" && (
          <div className="space-y-4">
            {/* 주요 기능 */}
            <div>
              <h4 className="font-semibold text-sm text-primary mb-3">
                주요 기능
              </h4>
              <ul className="space-y-2">
                {project.projectInfo.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-blue-600 font-bold min-w-fit">
                      {idx + 1}.
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 기술 스택 */}
            <div>
              <h4 className="font-semibold text-sm text-primary mb-3">
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 탭 3: 기술적 의사결정 */}
        {activeTab === "technical" && (
          <div>
            {project.technicalStories && project.technicalStories.length > 0 ? (
              <div className="space-y-2">
                {project.technicalStories.map((story, idx) => (
                  <TechnicalStoryCard key={idx} story={story} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-secondary text-center py-8">
                기술적 의사결정 내용이 없습니다.
              </p>
            )}
          </div>
        )}

        {/* 탭 4: 프로젝트 스크린샷 */}
        {activeTab === "gallery" &&
          project.images &&
          project.images.length > 0 && (
            <ProjectImageGallery images={project.images} />
          )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
