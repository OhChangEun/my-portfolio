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
      <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white px-6 py-6 sm:py-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-sm font-semibold tracking-wide text-white">
              오창은 · Frontend Developer
            </span>
            <span className="text-xs text-gray-400">dwc07109@gmail.com</span>
          </div>
          <div className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} — Built with{" "}
            <span className="text-blue-400">TypeScript</span> +{" "}
            <span className="text-blue-400">React</span> +{" "}
            <span className="text-blue-400">Tailwind</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <a
              href="https://github.com/OhChangEun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.notion.so/s-207e4e4f965780c28a75e68a3a6f4060?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Notion
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
