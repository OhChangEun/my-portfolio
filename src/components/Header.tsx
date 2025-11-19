import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

interface HeaderProps {
  menuItems: { id: string; label: string }[];
  selectedMenu: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> };
}

const Header = ({ menuItems, selectedMenu, sectionRefs }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-100 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center gap-16 pt-4 pb-4 px-16">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          창은 포트폴리오
        </h1>

        <HeaderNav
          menuItems={menuItems}
          selectedMenu={selectedMenu}
          handleMenuClick={handleMenuClick}
        />
      </div>
    </header>
  );
};

export default Header;
