import profileImg from "../assets/images/profile.png";

function Intro() {
  return (
    <section id="about" className="h-screen flex items-center justify-center">
      <div className="flex min-w-7/12 items-center justify-between">
        {/* 왼쪽: 소개글 */}
        <div className="max-w-md text-left flex flex-col gap-3">
          <h2 className="text-6xl font-normal mb-4">developer</h2>
          <p className="text-lg font-normal text-secondary leading-relaxed">
            안녕하세요. <br />
            일상 속 작은 문제를 발견하고, <br />
            해답을 찾기 위해 노력하는 개발자 오창은입니다
          </p>
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
}
export default Intro;
