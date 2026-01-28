import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProjectList from "./components/ProjectList";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import { PROJECTS } from "./data/projects";
import Home from "./components/Home";

const MENU_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Tech Stack" },
];

export default function Portfolio() {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } =
    {
      home: homeRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

  // 새로고침 시 맨 위로 고정
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const item of MENU_ITEMS) {
        const ref = sectionRefs[item.id];
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetHeight = ref.current.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setSelectedMenu(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <div className="bg-gradient-to-br from-white via-blue-100 to-blue-500 text-primary min-h-screen flex flex-col">
      <Header
        menuItems={MENU_ITEMS}
        selectedMenu={selectedMenu}
        sectionRefs={sectionRefs}
      />

      {/* 메인 */}
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 space-b-32">
        <Home refProp={homeRef} sectionRefs={sectionRefs} />
        <Experience refProp={experienceRef} />
        <ProjectList refProp={projectsRef} projects={PROJECTS} />
        <Tech refProp={contactRef} />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 sm:py-4 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} 창은 오 — Built with TypeScript + React +
        Tailwind
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
