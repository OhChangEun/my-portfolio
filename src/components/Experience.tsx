import { INTERNSHIP_EXPERIENCE } from "../data/internship";
import InternshipCard from "./InternshipCard";

interface ExperienceProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

const Experience = ({ refProp }: ExperienceProps) => {
  return (
    <section
      ref={refProp}
      id="experience"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <div className="pl-1 mb-8">
        <div className="items-baseline space-x-2 mb-2">
          <h2 className="text-3xl font-bold ">
            {INTERNSHIP_EXPERIENCE.company}
          </h2>
          <div className="text-gray-700 text-sm">
            차량 통신 기반 진단 솔루션 기업
          </div>
        </div>
        <p className="text-gray-400 text-base">
          {INTERNSHIP_EXPERIENCE.duration}
        </p>
      </div>

      <div className="space-y-6">
        {INTERNSHIP_EXPERIENCE.projects.map((project) => (
          <InternshipCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
