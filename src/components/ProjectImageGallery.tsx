import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { createPortal } from "react-dom";

interface ProjectImageGalleryProps {
  images?: Array<{ src: string; alt: string; caption?: string }>;
}

const PLACEHOLDER_SVG = "/images/no_prepared_image.png";

const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [erroredImages, setErroredImages] = useState<Set<number>>(new Set());

  const handleImageError = (idx: number) => {
    setErroredImages((prev) => new Set(prev).add(idx));
  };

  if (!images || images.length === 0) return null;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length,
    );
  };

  return (
    <>
      {/* 갤러리 미리보기 */}
      <div>
        <h4 className="font-semibold text-sm mb-4 text-primary">
          프로젝트 스크린샷
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={erroredImages.has(idx) ? PLACEHOLDER_SVG : image.src}
                alt={image.alt}
                className={`w-full h-48 transition-transform duration-300 ${
                  erroredImages.has(idx)
                    ? "object-contain bg-gray-100"
                    : "object-cover group-hover:scale-105"
                }`}
                onError={() => handleImageError(idx)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-primary">확대보기</p>
                </div>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-3">
                  <p className="text-xs text-white">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 풀스크린 모달 - Portal로 렌더링 */}
      {selectedIndex !== null &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-9999 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 이미지 + 네비게이션 버튼 */}
                <div className="flex items-center gap-3">
                  {/* 왼쪽 버튼 */}
                  {images.length > 1 ? (
                    <motion.button
                      onClick={goToPrevious}
                      className="flex-shrink-0 cursor-pointer bg-white/50 hover:bg-white/70 text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiChevronLeft className="text-2xl" />
                    </motion.button>
                  ) : (
                    <div className="flex-shrink-0 w-12" />
                  )}

                  {/* 이미지 */}
                  <div className="relative bg-black rounded-lg overflow-hidden flex-1">
                    <img
                      src={
                        erroredImages.has(selectedIndex)
                          ? PLACEHOLDER_SVG
                          : images[selectedIndex].src
                      }
                      alt={images[selectedIndex].alt}
                      className="w-full max-h-[80vh] object-contain bg-gray-100"
                      onError={() => handleImageError(selectedIndex)}
                    />
                  </div>

                  {/* 오른쪽 버튼 */}
                  {images.length > 1 ? (
                    <motion.button
                      onClick={goToNext}
                      className="flex-shrink-0 cursor-pointer bg-white/50 hover:bg-white/70 text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiChevronRight className="text-2xl" />
                    </motion.button>
                  ) : (
                    <div className="flex-shrink-0 w-12" />
                  )}
                </div>

                {/* 캡션 */}
                <div className="text-center mt-4">
                  <p className="text-white text-sm">
                    {images[selectedIndex].alt}
                  </p>
                  {images[selectedIndex].caption && (
                    <p className="text-gray-300 text-xs mt-2">
                      {images[selectedIndex].caption}
                    </p>
                  )}
                </div>

                {/* 이미지 인디케이터 */}
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedIndex === idx
                          ? "bg-white w-6"
                          : "bg-gray-500 hover:bg-gray-400"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default ProjectImageGallery;
