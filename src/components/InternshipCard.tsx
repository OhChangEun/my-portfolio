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
      className="bg-white rounded-lg border p-6 mb-8"
    >
      {/* 헤더 */}
      <div
        className="flex items-start justify-between cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="mb-1 text-xl font-bold text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-secondary mb-1">{project.team}</p>
          </div>
          <p className="text-sm text-gray-800">{project.overview}</p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 mt-1"
        >
          <FiChevronDown className="text-xl text-secondary" />
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
        <div className="mt-6 space-y-5 border-t border-gray-100 pt-6">
          {/* 설명 */}
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 담당 업무 */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary">
              담당 업무
            </h4>
            <ul className="space-y-2">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="text-blue-600 font-bold min-w-fit">•</span>
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 성과 */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary">
              주요 성과
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-transparent p-3 rounded border-l-2 border-blue-600"
                >
                  <p className="text-sm text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary">
              사용 기술
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 프로젝트 이미지 갤러리 */}
          {project.images && project.images.length > 0 && (
            <div className="flex pt-4 border-t border-gray-100">
              <ProjectImageGallery images={project.images} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InternshipCard;
