import { motion } from "framer-motion";
import type { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.005,
        y: -2,
        boxShadow: "0px 5px 10px rgba(59, 130, 246, 0.3)",
        borderColor: "rgb(138, 160, 255)",
        transition: {
          duration: 0.1,
        },
      }}
      animate={{
        // 기본 상태로 돌아갈 때
        scale: 1,
        y: 0,
        boxShadow: "0px 0px 0px rgba(59, 130, 246, 0)",
        borderColor: "rgb(174, 187, 255, 0.7)",
        transition: { duration: 0.2 },
      }}
      className="group rounded-lg p-6 bg-white border flex flex-col justify-between cursor-pointer"
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
        <h3 className="text-lg font-bold text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-secondary line-clamp-2">
          {project.shortDescription}
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 10).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 10 && (
          <span className="text-xs px-2 py-0.5 text-gray-500">
            +{project.tech.length - 10}
          </span>
        )}
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-end items-center">
        {/* <SlideArrow className="pr-1 text-lg text-blue-600" /> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
