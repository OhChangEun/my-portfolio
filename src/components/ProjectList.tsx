import { useState } from "react";
import type { Project } from "../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectsDetail";

interface ProjectsProps {
  refProp: React.RefObject<HTMLDivElement | null>;
  projects: Project[];
}

const ProjectList = ({ refProp, projects }: ProjectsProps) => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section ref={refProp} id="projects" className="scroll-mt-24">
      <h2 className="text-2xl mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      {/* 상세 카드 */}
      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default ProjectList;
