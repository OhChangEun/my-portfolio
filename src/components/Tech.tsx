import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiVercel,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiMysql,
  SiSpringboot,
  SiGithub,
  SiNotion,
  SiPostman,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { FaJava, FaWindows } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

interface TechItem {
  name: string;
  icon?: React.ReactNode;
  color: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const TECH_DATA: TechCategory[] = [
  {
    title: "Strong",
    items: [
      { name: "JavaScript(ES6+)", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34C26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { name: "REST API", icon: <FiCode />, color: "#6366F1" },
      { name: "C#", icon: <TbBrandCSharp />, color: "#239120" },
      { name: "Winform", icon: <FaWindows />, color: "#512BD4" },
    ],
  },
  {
    title: "Knowledgeable",
    items: [
      { name: "Axios", icon: <SiAxios />, color: "#5C2D91" },
      { name: "Vercel", icon: <SiVercel />, color: "#000000" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "SQL(MySQL)", icon: <SiMysql />, color: "#00758F" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Network(TCP/IP, Socket)", icon: <FiCode />, color: "#FF6B6B" },
    ],
  },
  {
    title: "ETC",
    items: [
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Notion", icon: <SiNotion />, color: "#000000" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "VS Code", icon: <FiCode />, color: "#007ACC" },
      { name: "Copilot", icon: <FiCode />, color: "#0EA5E9" },
      { name: "정보처리기사", icon: <FiCode />, color: "#FF6B35" },
      { name: "ADSP", icon: <FiCode />, color: "#4F46E5" },
    ],
  },
];

interface TechProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

const Tech = ({ refProp }: TechProps) => {
  return (
    <section
      ref={refProp}
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
      </div>

      <div className="space-y-12">
        {TECH_DATA.map((category, idx) => (
          <div key={idx}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.items.map((tech, techIdx) => (
                <div
                  key={techIdx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full"
                >
                  {tech.icon && (
                    <div className="text-lg" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                  )}
                  <span className="text-sm font-medium text-primary">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
