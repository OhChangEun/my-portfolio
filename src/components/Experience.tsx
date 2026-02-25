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
      className="min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20"
    >
      <div className="pl-1 mb-6 sm:mb-8">
        <div className="items-baseline space-x-2 mb-2">
          <h2 className="text-2xl sm:text-3xl font-bold ">
            {INTERNSHIP_EXPERIENCE.company}
          </h2>
          <div className="text-gray-700 text-xs sm:text-sm">
            차량 통신 기반 진단 솔루션 기업
          </div>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          {INTERNSHIP_EXPERIENCE.duration}
        </p>
      </div>

      <div className="relative">
        {/* 타임라인 수직선 */}
        <div className="absolute left-3.5 top-0 bottom-4 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

        {INTERNSHIP_EXPERIENCE.projects.map((project, index) => (
          <div key={project.id} className="relative">
            {/* 타임라인 점 */}
            <div className="absolute left-3.5 top-10 sm:top-15 -translate-x-1/2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full border-2 sm:border-4 border-blue-200 shadow-md"></div>
            </div>

            {/* 날짜 (왼쪽) */}
            <div className="hidden sm:block absolute -left-15 top-13 text-right pr-6 w-20">
              <p className="text-xs font-semibold text-blue-600">
                {project.duration}
              </p>
            </div>

            {/* 카드 */}
            <div className="ml-10 sm:ml-16">
              <InternshipCard project={project} index={index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
