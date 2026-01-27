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
      className="h-screen flex flex-col justify-center"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {INTERNSHIP_EXPERIENCE.company}
        </h2>
        <p className="text-secondary text-lg">
          {INTERNSHIP_EXPERIENCE.position} • {INTERNSHIP_EXPERIENCE.duration}
        </p>
        <p className="text-secondary text-sm mt-2">
          {INTERNSHIP_EXPERIENCE.department}
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
