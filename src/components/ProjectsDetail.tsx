import { useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectImageGallery from "./ProjectImageGallery";
import TechnicalStoryCard from "./TechnicalStoryCard";
import { FiGithub, FiGlobe, FiChevronDown, FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
import type { ModalProps } from "./public/modals/types";
import type { RoleCategory } from "../types/Project";

interface ProjectDetailProps extends ModalProps {
  projectId: number;
}

type TabType = "info" | "myRole" | "technical" | "gallery";

const ProjectDetail = ({ projectId }: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("info");
  const [expandedRoleCategory, setExpandedRoleCategory] = useState<
    string | null
  >(null);
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) return null;

  const tabs: Array<{ id: TabType; label: string }> = [
    { id: "info", label: "프로젝트 정보" },
    { id: "myRole", label: "담당 역할" },
    { id: "technical", label: "기술적 의사결정" },
    ...(project.images && project.images.length > 0
      ? [{ id: "gallery" as TabType, label: "스크린샷" }]
      : []),
  ];

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 헤더 - 제목과 링크 */}
      <div className="flex items-center justify-between pb-2 gap-2 flex-wrap">
        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
          {project.projectInfo.link && project.projectInfo.link !== "#" && (
            <a
              href={project.projectInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] sm:text-xs font-medium transition-colors"
            >
              <FiGlobe className="text-xs sm:text-sm" />
              Website
            </a>
          )}
          {project.githubLink && project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900 hover:bg-gray-700 text-white rounded text-[10px] sm:text-xs font-medium transition-colors"
            >
              <FiGithub className="text-xs sm:text-sm" />
              GitHub
            </a>
          )}
          {project.youtubeLink && project.youtubeLink !== "#" && (
            <a
              href={project.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-[10px] sm:text-xs font-medium transition-colors"
            >
              <FiYoutube className="text-xs sm:text-sm" />
              YouTube
            </a>
          )}
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex gap-1 sm:gap-2 border-b border-gray-200 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all relative whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            {tab.label}
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
          <div className="space-y-3 sm:space-y-4">
            {/* 서비스 설명 */}
            <div>
              <h4 className="font-semibold text-[10px] sm:text-xs text-gray-500 uppercase mb-1.5 sm:mb-2">
                서비스 설명
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {project.projectInfo.description}
              </p>
            </div>

            {/* 작업 기간, 구성원 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-blue-50 p-2.5 sm:p-3 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-[10px] sm:text-xs text-blue-600 uppercase mb-1">
                  작업 기간
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  {project.projectInfo.duration}
                </p>
              </div>
              <div className="bg-purple-50 p-2.5 sm:p-3 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-[10px] sm:text-xs text-purple-600 uppercase mb-1">
                  구성원
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  {project.projectInfo.team}
                </p>
              </div>
            </div>

            {/* 주요 기능 */}
            <div>
              <h4 className="font-semibold text-[10px] sm:text-xs text-gray-500 uppercase mb-1.5 sm:mb-2">
                주요 기능
              </h4>
              <ul className="space-y-1 sm:space-y-1.5">
                {project.projectInfo.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="text-blue-600 font-bold">▪</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 기술 스택 */}
            <div>
              <h4 className="font-semibold text-[10px] sm:text-xs text-gray-500 uppercase mb-1.5 sm:mb-2">
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium rounded-full border border-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 탭 2: 담당 역할 */}
        {activeTab === "myRole" && (
          <div className="space-y-2 sm:space-y-3">
            {/* 담당 역할 */}
            <div>
              <h4 className="font-semibold text-xs sm:text-sm text-primary mb-2 sm:mb-3">
                담당 역할
              </h4>
              {Array.isArray(project.projectInfo.myRole) &&
              project.projectInfo.myRole.length > 0 &&
              typeof project.projectInfo.myRole[0] === "object" &&
              "category" in project.projectInfo.myRole[0] ? (
                // 카테고리별 역할 (토글)
                <div className="space-y-1.5 sm:space-y-2">
                  {(project.projectInfo.myRole as RoleCategory[]).map(
                    (item) => (
                      <div
                        key={item.category}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedRoleCategory(
                              expandedRoleCategory === item.category
                                ? null
                                : item.category,
                            )
                          }
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <span className="font-medium text-xs sm:text-sm text-blue-900">
                            {item.category}
                          </span>
                          <FiChevronDown
                            className={`text-blue-600 transition-transform ${
                              expandedRoleCategory === item.category
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedRoleCategory === item.category && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-3 sm:px-4 py-2 sm:py-3 bg-white border-t border-gray-200"
                          >
                            <ul className="space-y-1.5 sm:space-y-2">
                              {item.roles.map((role, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700"
                                >
                                  <span className="text-blue-600 font-bold min-w-fit">
                                    •
                                  </span>
                                  <span>{role}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    ),
                  )}
                </div>
              ) : (
                // 일반 역할 리스트
                <ul className="space-y-1.5 sm:space-y-2">
                  {Array.isArray(project.projectInfo.myRole) ? (
                    (project.projectInfo.myRole as string[]).map(
                      (role, idx) => (
                        <li
                          key={idx}
                          className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm"
                        >
                          <span className="text-blue-600 font-bold min-w-fit">
                            {idx + 1}.
                          </span>
                          <span className="text-gray-700">{role}</span>
                        </li>
                      ),
                    )
                  ) : (
                    <li className="text-xs sm:text-sm text-gray-700">
                      {project.projectInfo.myRole}
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* 탭 3: 기술적 의사결정 */}
        {activeTab === "technical" && (
          <div>
            {project.technicalStories && project.technicalStories.length > 0 ? (
              <div className="space-y-1.5 sm:space-y-2">
                {project.technicalStories.map((story, idx) => (
                  <TechnicalStoryCard key={idx} story={story} />
                ))}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-secondary text-center py-6 sm:py-8">
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
