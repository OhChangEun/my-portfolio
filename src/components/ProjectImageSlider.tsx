import { useState } from "react";
import { EVER_ERP_IMAGES } from "../assets/images/ever-erp";

const images = Object.values(EVER_ERP_IMAGES); // 이미지 객체를 배열로 변환

const ProjectImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* 이미지 슬라이드 영역 */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="w-full flex-shrink-0"
            />
          ))}
          {/* <img
            key={1}
            src={img1}
            alt={`slide-${1}`}
            className="w-full flex-shrink-0"
          /> */}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 px-3 py-1 cursor-pointer"
      >
        <span className="text-xl">←</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 cursor-pointer"
      >
        <span className="text-xl">→</span>
      </button>

      {/* 점 표시 */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-secondary" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageSlider;
