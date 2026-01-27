import profileImg from "../assets/images/profile.png";
import { SiGithub, SiNotion } from "react-icons/si";

interface HomeProps {
  refProp: React.RefObject<HTMLDivElement | null>;
  sectionRefs?: { [key: string]: React.RefObject<HTMLDivElement | null> };
}

const Home = ({ refProp, sectionRefs }: HomeProps) => {
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs?.[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      ref={refProp}
      id="home"
      className="min-h-screen flex justify-center py-20"
    >
      <div className="flex min-w-7/12 items-center justify-between gap-12">
        {/* 왼쪽: 소개글 */}
        <div className="max-w-3xl text-left flex flex-col gap-8">
          <div>
            {/* 주요 정보 섹션 */}
            <div className="space-y-6">
              <div className="space-y-2">
                {/* 한글 소개 */}
                <p className="text-2xl font-semibold text-primary">
                  자동차 도메인에서의 경험을 바탕으로
                </p>
                <p className="text-2xl font-semibold text-primary">
                  사용자 중심의 UI/UX를 고민하는 개발자 오창은입니다.
                </p>
              </div>

              {/* 영문 소개 */}
              <div className="text-lg text-gray-500 leading-relaxed space-y-1">
                <p>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 font-inherit"
                  >
                    6 months
                  </button>{" "}
                  automotive internship at GIT
                </p>
                <p>
                  <a
                    href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11890887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Capstone design project paper
                  </a>{" "}
                  author and award recipient
                </p>

                <p>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 font-inherit"
                  >
                    3-time
                  </button>{" "}
                  project award winner · Completed Hyundai AutoEver Mobility
                  School
                </p>

                <p>
                  <a
                    href="https://solved.ac/profile/dwc07109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Gold I
                  </a>{" "}
                  in BOJ
                </p>
              </div>
            </div>
          </div>

          {/* 소셜 링크 */}
          <div className="flex gap-3 pt-6">
            <a
              href="https://github.com/OhChangEun"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-blue-400"
              title="GitHub"
            >
              <SiGithub
                size={24}
                className="text-gray-700 group-hover:text-gray-600 transition-colors"
              />
            </a>
            <a
              href="https://blog.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-red-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-red-400"
              title="Blog"
            >
              <SiNotion
                size={24}
                className="text-gray-700 group-hover:text-red-500 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* 오른쪽: 프로필 이미지 */}
        <div className="flex justify-center bg-transparent">
          <img
            src={profileImg}
            alt="Profile"
            className="w-91 h-119 rounded-sm object-cover drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
