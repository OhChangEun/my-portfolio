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
    <section
      ref={refProp}
      id="projects"
      className="min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20"
    >
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
