interface SlideArrowProps {
  className?: string; // 추가 클래스
  children?: React.ReactNode; // 기본은 →, 다른 아이콘도 가능
  onClick?: () => void;
}

const SlideArrow = ({
  className = "",
  children = "→",
  onClick,
}: SlideArrowProps) => {
  return (
    <span
      onClick={onClick}
      className={`transform translate-x-0 translate-y-[0.4px] opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ${className}`}
    >
      {children}
    </span>
  );
};

export default SlideArrow;
