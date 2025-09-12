import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import { PROJECTS } from "./data/projects";

const MENU_ITEMS = [
  { id: "aboutMe", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [selectedMenu, setSelectedMenu] = useState("aboutMe");

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } =
    {
      aboutMe: aboutMeRef,
      projects: projectsRef,
      contact: contactRef,
    };

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
  }, []);

  return (
    <div className="bg-tertiary text-primary min-h-screen flex flex-col">
      <Header
        menuItems={MENU_ITEMS}
        selectedMenu={selectedMenu}
        sectionRefs={sectionRefs}
      />

      {/* 메인 */}
      <main className="flex-1 container mx-auto px-6 md:px-12 lg:px-32 space-y-32">
        <Intro />

        <AboutMe refProp={aboutMeRef} />
        <ProjectList refProp={projectsRef} projects={PROJECTS} />

        {/* Contact */}
        <section
          ref={contactRef}
          id="contact"
          className="h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} 창은 오 — Built with TypeScript + React +
        Tailwind
      </footer>

      <ScrollToTopButton />
    </div>
  );
}
