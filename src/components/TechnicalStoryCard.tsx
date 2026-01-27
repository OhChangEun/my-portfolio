import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { TechnicalStory } from "../types/Project";

interface TechnicalStoryCardProps {
  story: TechnicalStory;
}

const TechnicalStoryCard = ({ story }: TechnicalStoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h4 className="font-semibold text-sm text-primary text-left">{story.title}</h4>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-gray-500" />
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-gray-100"
      >
        <div className="px-4 py-3 space-y-3 text-xs leading-relaxed">
          {/* 문제 상황 */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">① 문제 상황</p>
            <p className="text-gray-600">{story.problem}</p>
          </div>

          {/* 기술적 선택 */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">② 기술적 선택</p>
            <p className="text-gray-600">{story.solution}</p>
          </div>

          {/* 고려했던 대안 */}
          {story.alternatives && (
            <div>
              <p className="font-semibold text-gray-700 mb-1">③ 고려했던 대안</p>
              <p className="text-gray-600">{story.alternatives}</p>
            </div>
          )}

          {/* 실제 구현 */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">④ 실제 구현</p>
            <div className="bg-gray-50 p-2 rounded border border-gray-200 max-h-48 overflow-y-auto scrollbar-custom">
              <pre className="text-xs text-gray-700 font-mono whitespace-pre-wrap break-words">
                {story.implementation}
              </pre>
            </div>
          </div>

          {/* 기술적 가치 */}
          <div>
            <p className="font-semibold text-gray-700 mb-1">⑤ 기술적 가치</p>
            <p className="text-gray-600">{story.outcome}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechnicalStoryCard;
