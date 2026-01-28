import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { InternshipProject } from "../types/Internship";
import ProjectImageGallery from "./ProjectImageGallery";

interface InternshipCardProps {
  project: InternshipProject;
  index?: number;
}

const InternshipCard = ({ project, index = 0 }: InternshipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.1, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: index * 0.2,
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
      className="bg-white rounded-lg border p-4 sm:p-6 mb-6 sm:mb-8"
    >
      {/* 헤더 */}
      <div
        className="flex items-start justify-between cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="mb-2 sm:mb-3">
            <h3 className="mb-1 text-base sm:text-lg md:text-xl font-bold text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-secondary mb-1">
              {project.team}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-800">{project.overview}</p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 sm:ml-4 mt-1"
        >
          <FiChevronDown className="text-lg sm:text-xl text-secondary" />
        </motion.div>
      </div>

      {/* 펼쳐진 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5 border-t border-gray-100 pt-4 sm:pt-6">
          {/* 설명 */}
          <div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 담당 업무 */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-primary">
              담당 업무
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 sm:gap-3 text-xs sm:text-sm"
                >
                  <span className="text-blue-600 font-bold min-w-fit">•</span>
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 성과 */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-primary">
              주요 성과
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {project.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-transparent p-2.5 sm:p-3 rounded border-l-2 border-blue-600"
                >
                  <p className="text-xs sm:text-sm text-gray-700">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-primary">
              사용 기술
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-[10px] sm:text-xs font-medium rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 프로젝트 이미지 갤러리 */}
          {project.images && project.images.length > 0 && (
            <div className="flex pt-3 sm:pt-4 border-t border-gray-100">
              <ProjectImageGallery images={project.images} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InternshipCard;
