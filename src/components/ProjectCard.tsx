import type { Project } from "../types/Project";
import SlideArrow from "./public/SlideArrow";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className="h-72 rounded-md p-6 bg-white shadow group flex flex-col justify-between">
      <img />
      {/* 제목 + 설명 */}
      <div className="flex-1">
        <h3 className="text-2xl mb-2">{project.title}</h3>
        <p className="text-sm text-secondary">{project.description}</p>
      </div>

      <div className="flex justify-end ">
        <SlideArrow
          className="text-xl p-2 pl-5 pt-5 cursor-pointer"
          onClick={onClick}
        />
      </div>
      {/* 아이콘 (하단 고정) */}
      {/* <div className="flex gap-1 mt-4">
        <SliderIcon Icon={SiFigma} label="Figma" />
        <SliderIcon Icon={SiReact} label="React" />
        <SliderIcon Icon={SiTypescript} label="TypeScript" />
      </div> */}
    </div>
  );
};

export default ProjectCard;
