import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

// 프로젝트 타입
type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  detail?: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CommMaster - 통신 테스트툴",
    description:
      "C# 기반 다중 TCP/시리얼 통신 테스트 툴. 실시간 로그, 파일 전송 기능 포함.",
    tech: ["C#", "TCP/IP", "WinForms"],
    link: "#",
    detail:
      "실시간 데이터 모니터링, 로그 분석, 시리얼 통신 플로우 관리까지 가능.",
  },
  {
    id: 2,
    title: "EOL DB Manager",
    description:
      "공정 데이터 수집 및 시각화용 DB 관리 도구. SQLite 기반 UX 제공.",
    tech: ["SQLite", "Electron", "TypeScript"],
    link: "#",
    detail:
      "자동 데이터 수집, 시각화 대시보드 제공. 쿼리 최소화 UX로 사용자가 쉽게 관리 가능.",
  },
  {
    id: 3,
    title: "React Portfolio",
    description: "이 포트폴리오 템플릿 자체 — 깔끔하고 가독성 좋은 UI.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "#",
    detail:
      "Tailwind + framer-motion 기반, 인터랙티브 UI. 프로젝트 카드 hover 및 모달 제공.",
  },
];

function CustomInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  isReadonly = false,
  error,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  isReadonly?: boolean;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const showLabel = focused || value.length > 0;

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-sm font-medium text-primary">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        readOnly={isReadonly}
        className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

function ContactForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("올바른 이메일 주소를 입력하세요.");
      return;
    }
    setError("");
    alert(`전송 완료!\n이메일: ${email}\n메시지: ${msg}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-md"
    >
      <CustomInput
        label="이메일"
        value={email}
        onChange={setEmail}
        error={error}
      />
      <CustomInput label="메시지" value={msg} onChange={setMsg} type="text" />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition"
      >
        보내기
      </button>
    </form>
  );
}

const MENU_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [selectedMenu, setSelectedMenu] = useState("projects");

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } =
    {
      projects: projectsRef,
      about: aboutRef,
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
    <div className="bg-tertiary text-primary font-sans min-h-screen flex flex-col">
      <Header
        menuItems={MENU_ITEMS}
        selectedMenu={selectedMenu}
        sectionRefs={sectionRefs}
      />

      {/* 메인 */}
      <main className="flex-1 container mx-auto px-6 space-y-20">
        <Intro />

        {/* Projects */}
        <section ref={projectsRef} id="projects">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="bg-white shadow hover:shadow-lg cursor-pointer rounded-lg p-6 transition"
              >
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-secondary mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-tertiary text-primary text-xs px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          ref={aboutRef}
          id="about"
          className="h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-secondary leading-relaxed text-center max-w-xl">
            안녕하세요 — 프론트엔드 지망 개발자입니다.
            <br />
            깔끔하고 가독성 좋은 UI/UX와 효율적인 코드 작성에 집중하고 있습니다.
          </p>
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          id="contact"
          className="h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} 창은 오 — Built with TypeScript + React +
        Tailwind
      </footer>
    </div>
  );
}
