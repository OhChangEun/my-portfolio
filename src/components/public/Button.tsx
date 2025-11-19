import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode; // ← optional 로 변경
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "whiteOutline"
    | "ghost"
    | "soft";
  size?: "sm" | "md" | "lg";
  color?: "gray" | "blue" | "red";
  fontWeight?: "normal" | "medium";
  rounded?: string;
}

export default function IconButton({
  icon,
  label,
  variant = "primary",
  size = "sm",
  color = "gray",
  fontWeight = "medium",
  className = "",
  rounded,
  ...props
}: IconButtonProps) {
  const base =
    "inline-flex items-center justify-center focus:outline-none transition cursor-pointer whitespace-nowrap";

  const radiusClass = rounded || "rounded-md"; // 기본 rounded-md, 없으면 prop으로 덮어쓰기

  const palette = {
    gray: {
      bg: "bg-gray-700",
      text: "text-gray-700",
      border: "border-gray-500",
      hover: "hover:opacity-85",
      hoverBg50: "hover:bg-gray-50",
      hoverBg100: "hover:bg-gray-100",
      soft: "bg-gray-100 text-gray-600 hover:bg-gray-200",
    },
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-500",
      hover: "hover:opacity-85",
      hoverBg50: "hover:bg-blue-50",
      hoverBg100: "hover:bg-blue-100",
      soft: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    },
    red: {
      bg: "bg-red-600",
      text: "text-red-600",
      border: "border-red-500",
      hover: "hover:opacity-85",
      hoverBg50: "hover:bg-red-50",
      hoverBg100: "hover:bg-red-100",
      soft: "bg-red-100 text-red-600 hover:bg-red-200",
    },
  };

  const p = palette[color];

  const variants = {
    primary: `${p.bg} text-white ${p.hover}`,
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: `${p.border} ${p.text} border bg-transparent ${p.hoverBg50}`,
    whiteOutline:
      "bg-white border border-gray-300 text-gray-500/70 hover:bg-gray-50",
    ghost: `bg-transparent ${p.text} ${p.hoverBg100}`,
    soft: `${p.soft}`,
  };

  const sizes = {
    sm: { px: "px-2", py: "py-1.5", text: "text-sm", square: "w-8 h-8" },
    md: { px: "px-3", py: "py-1.5", text: "text-base", square: "w-10 h-10" },
    lg: { px: "px-4", py: "py-2", text: "text-lg", square: "w-12 h-12" },
  };

  const fontMap = {
    normal: "font-normal",
    medium: "font-medium",
  };

  const isIconOnly = !label && icon; // 아이콘만 있을 때
  const isLabelOnly = label && !icon; // 아이콘만 있을 때

  const hasIcon = Boolean(icon);

  const disabledClasses =
    "bg-gray-400 text-gray-800 opacity-30 pointer-events-none";

  return (
    <button
      className={`
        ${base}
        ${radiusClass} 
        ${fontMap[fontWeight]}
        ${
          isIconOnly
            ? `${sizes[size].square} p-2`
            : `${sizes[size].px} ${sizes[size].py}`
        }
        ${sizes[size].text}
        ${props.disabled ? disabledClasses : variants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* 아이콘 있으면 출력 + margin 적용 */}
      {hasIcon && (
        <span className={`flex items-center ${label ? "mr-1" : ""}`}>
          {icon}
        </span>
      )}

      {/* label 있으면만 출력 */}
      {label && <span className={isLabelOnly ? "" : "mr-0.5"}>{label}</span>}
    </button>
  );
}
