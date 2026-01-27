import profileImg from "/images/profile.png";
import { SiGithub, SiNotion } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";

interface HomeProps {
  refProp: React.RefObject<HTMLDivElement | null>;
  sectionRefs?: { [key: string]: React.RefObject<HTMLDivElement | null> };
}

const Home = ({ refProp, sectionRefs }: HomeProps) => {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs?.[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = async () => {
    const email = "dwc07109@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage("이메일이 복사되었습니다");
      setTimeout(() => setCopyMessage(null), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <section
      ref={refProp}
      id="home"
      className="min-h-screen flex justify-center pb-16"
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
                    className="text-2xl text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 font-inherit"
                  >
                    6 months
                  </button>{" "}
                  automotive internship at GIT
                </p>
                <p>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-2xl text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 font-inherit"
                  >
                    3-time
                  </button>{" "}
                  project award winner · Completed Hyundai AutoEver Mobility
                  School
                </p>
                <p>
                  Capstone Design Paper –{" "}
                  <a
                    href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11890887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Authored
                  </a>{" "}
                  & Awarded
                </p>

                {/* <p>
                  <a
                    href="https://solved.ac/profile/dwc07109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 hover:underline decoration-1 underline-offset-3 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Gold I
                  </a>{" "}
                  in BOJ
                </p> */}
              </div>
            </div>
          </div>

          {/* 소셜 링크 */}
          <div className="flex gap-3 pt-6">
            <a
              href="https://github.com/OhChangEun"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-2xl transition-all duration-300 border border-gray-500 hover:border-gray-700 hover:bg-gray-700"
              title="GitHub"
            >
              <SiGithub
                size={24}
                className="text-gray-700 group-hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.notion.so/s-207e4e4f965780c28a75e68a3a6f4060?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-2xl transition-all duration-300 border border-gray-500 hover:border-gray-700 hover:bg-gray-700"
              title="notion"
            >
              <SiNotion
                size={25}
                className="text-gray-700 group-hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href="https://solved.ac/profile/dwc07109"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-2xl transition-all duration-300 border border-gray-500 hover:border-gray-700 hover:bg-gray-700"
              title="BOJ"
            >
              <FaCode
                size={28}
                className="text-gray-700 group-hover:text-white transition-colors duration-300"
              />
            </a>
            <button
              onClick={handleCopyEmail}
              className="group relative p-3 cursor-pointer rounded-2xl transition-all duration-300 border border-gray-500 hover:border-gray-700 hover:bg-gray-700"
              title="Email"
            >
              <SiGmail
                size={24}
                className="text-gray-700 group-hover:text-white transition-colors duration-300"
              />
              {copyMessage && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                  {copyMessage}
                </div>
              )}
            </button>
          </div>
        </div>

        {/* 오른쪽: 프로필 이미지 */}
        <div className="flex justify-center bg-transparent">
          <img
            src={profileImg}
            alt="Profile"
            className="w-91 h-119 rounded-sm object-cover drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
