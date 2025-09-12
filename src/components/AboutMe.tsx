import SlideArrow from "./public/SlideArrow";

interface AboutMeItem {
  value: string;
  title: string;
}

const ABOUT_ME_DATA: AboutMeItem[] = [
  { value: "1", title: "Experience" },
  { value: "3", title: "Awards" },
  { value: "1", title: "Achievements" },
  { value: "6", title: "Projects" },
];

interface AboutProps {
  refProp: React.RefObject<HTMLDivElement | null>;
}

const AboutMe = ({ refProp }: AboutProps) => {
  return (
    <section
      ref={refProp}
      id="about"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-32">
        {ABOUT_ME_DATA.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center gap-3 group"
          >
            <span className="text-5xl text-primary font-light">
              {item.value}
            </span>
            <span className="pl-3 text-sm text-secondary font-light cursor-pointer inline-flex items-baseline gap-0.5">
              {item.title}
              {/* <span className="transform translate-x-0 translate-y-[0.4px] opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300">
                →
              </span> */}
              <SlideArrow />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
