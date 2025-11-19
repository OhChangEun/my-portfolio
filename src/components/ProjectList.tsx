import type { Project } from "../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectsDetail";
import { useModal } from "./public/modals/useModal";

interface ProjectsProps {
  refProp: React.RefObject<HTMLDivElement | null>;
  projects: Project[];
}

const ProjectList = ({ refProp, projects }: ProjectsProps) => {
  const { openModal } = useModal();

  const viewProjectDetailModal = (projectId: number, projectTitle: string) => {
    openModal(ProjectDetail, { title: projectTitle, projectId });
  };

  return (
    <section ref={refProp} id="projects" className="scroll-mt-24">
      <h2 className="text-2xl mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={() => viewProjectDetailModal(p.id, p.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
