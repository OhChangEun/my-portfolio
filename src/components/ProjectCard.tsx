import { motion } from "framer-motion";
import type { Project } from "../types/Project";
import SlideArrow from "./public/SlideArrow";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group rounded-lg p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-gray-100 hover:border-red-200 cursor-pointer"
      onClick={onClick}
    >
      {/* 이미지 또는 아이콘 영역 */}
      <div className="mb-4 h-64 bg-gradient-to-r from-blue-50 to-red-50 rounded-md flex items-center justify-center overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0].src}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-3xl opacity-20">📦</div>
        )}
      </div>

      {/* 제목 + 설명 */}
      <div className="flex-1 mb-3">
        <h3 className="text-lg font-bold text-primary group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-secondary line-clamp-2">
          {project.shortDescription}
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 2).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 2 && (
          <span className="text-xs px-2 py-0.5 text-gray-500">
            +{project.tech.length - 2}
          </span>
        )}
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-end items-center">
        <SlideArrow className="text-lg text-red-600" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
