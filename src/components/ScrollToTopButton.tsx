import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

type Props = {
  /** 스크롤이 이 값(px) 이상일 때 버튼이 보임. 기본 50px */
  threshold?: number;
  /** 버튼 크기 (Tailwind width/height 값) */
  sizeClass?: string;
  /** 추가 클래스 이름 */
  className?: string;
  /** 배경을 투명하게 하고 싶을 때 */
  transparent?: boolean;
};

// 기본적으로 Tailwind를 사용하는 깔끔한 Scroll-to-Top 버튼 컴포넌트
const ScrollToTopButton = ({
  threshold = 150,
  sizeClass = "w-11 h-11",
  className = "",
  transparent = false,
}: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > threshold);
    };

    // 초기 상태 체크
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    // 부드럽게 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label={visible ? "맨 위로 이동" : "맨 위로 이동 버튼 숨김"}
      onClick={scrollToTop}
      onKeyDown={(e) => {
        if (e.key === "Enter") scrollToTop();
      }}
      // 화면 오른쪽 아래 고정
      className={`fixed bottom-6 right-6 z-50 ${sizeClass} cursor-pointer flex items-center justify-center rounded-full shadow-lg focus:outline-none transition-transform transform ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
      } ${transparent ? "bg-transparent" : "bg-primary"} ${className}`}
      // 숨김 상태일 때 시각적으로는 보이지 않게, 스크린리더에는 적절히 설명되도록 처리
      aria-hidden={!visible}
    >
      <IoIosArrowRoundUp className="text-white text-3xl font-light" />
    </button>
  );
};

export default ScrollToTopButton;
