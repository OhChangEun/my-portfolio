import { FiSearch } from "react-icons/fi";
import IconButton from "./Button";

const colors = ["gray", "blue", "red"] as const;
const variants = [
  "primary",
  "secondary",
  "outline",
  "whiteOutline",
  "ghost",
  "soft",
] as const;

export default function ButtonPreview() {
  return (
    <div className="space-y-10 p-6">
      {colors.map((color) => (
        <div key={color}>
          <h2 className="text-xl font-bold mb-3">{color.toUpperCase()}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 아이콘만 */}
            <div>
              <p className="text-sm font-medium mb-2">Icon Only</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <IconButton
                    key={variant}
                    icon={<FiSearch />}
                    variant={variant}
                    color={color}
                    rounded="rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* 아이콘 + 라벨 */}
            <div>
              <p className="text-sm font-medium mb-2">Icon + Label</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <IconButton
                    key={variant}
                    icon={<FiSearch />}
                    label="검색"
                    variant={variant}
                    color={color}
                  />
                ))}
              </div>
            </div>

            {/* 라벨만 */}
            <div>
              <p className="text-sm font-medium mb-2">Label Only</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <IconButton
                    key={variant}
                    label="검색"
                    variant={variant}
                    color={color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
