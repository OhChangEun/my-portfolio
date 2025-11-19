import { motion, AnimatePresence } from "framer-motion";

interface ModalContainerProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

const ModalContainer = ({ children, title, onClose }: ModalContainerProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-9999 inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative p-4 w-[40vw] max-w-[1200px] h-[90vh] border border-gray-100 bg-white rounded-xl shadow-xl"
        >
          <div className="flex flex-col h-full">
            {/* 헤더: title + 닫기 버튼 */}
            <div className="flex justify-between items-center">
              <h2 className="pl-3 pt-2 py-1 text-gray-800 text-2xl font-semibold">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="px-2 py-1 mb-1 rounded-md text-gray-600 hover:bg-gray-100 dark:hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>
            {/* 모달 본문 */}
            <div className="pt-4 p-2 scrollbar-custom overflow-auto">
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalContainer;
