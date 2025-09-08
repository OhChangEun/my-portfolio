import { useEffect, useState } from "react";

interface HeaderProps {
  menuItems: { id: string; label: string }[];
  selectedMenu: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

function Header({ menuItems, selectedMenu, sectionRefs }: HeaderProps) {
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
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-100 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center gap-16 pt-4 pb-4 px-16">
        <h1
          className="text-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          창은 포트폴리오
        </h1>
        <nav className="flex gap-6 text-sm font-light">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`px-2 py-1 rounded hover:text-primary ${
                selectedMenu === item.id
                  ? "text-primary font-normal"
                  : "text-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
