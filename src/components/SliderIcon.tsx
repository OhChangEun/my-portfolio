import { useState } from "react";
import SlideArrow from "./public/SlideArrow";

interface Icon {
  Icon: React.ElementType; // 아이콘 컴포넌트를 프롭스로 받음
  size?: number; // 아이콘 크기
  label: string; // hover 시 나타날 텍스트
  href?: string; // 클릭 시 이동할 URL
}

const SliderIcon = ({
  Icon,
  size = 20,
  label,
  href = "https://www.naver.com",
}: Icon) => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank"); // 새 탭으로 이동
    }
  };

  return (
    <div
      className=" flex justify-center items-center rounded-full cursor-pointer border border-transparent hover:border-primary hover:shadow-md transition-all duration-400 ease-in-out text-secondary"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
    >
      {/* 아이콘 */}
      <div
        className="flex-shrink-0 flex items-center justify-center "
        style={{ width: size + 12, height: size + 12 }} // 패딩 포함 원형
      >
        <Icon size={size} color="currentColor" />
      </div>

      {/* 슬라이드 텍스트 */}
      <span
        className={`relative flex items-center text-sm font-medium whitespace-nowrap transition-all duration-500 ${
          isHover ? "pr-3 max-w-[200px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {label} {/* <GoLinkExternal className="ml-1" size={14} /> */}
        <SlideArrow />
      </span>
    </div>
  );
};

export default SliderIcon;
