import {CareerPathCard} from "@/components/game/career-path/card/CareerPathCard";
import DeveloperRtan from "@/assets/images/game/information/career-path/developer.webp";
import PmRtan from "@/assets/images/game/information/career-path/developer.webp";
import QaRtan from "@/assets/images/game/information/career-path/developer.webp";

export const CareerPathSection = () => {
  return <section id={"gameCareerPathComponent"} className={"relative"}>
    <section id={"game-career-path"} className={"py-[100px] bg-[rgb(32,44,58)] overflow-hidden"}>
      <section className={"flex flex-col gap-[40px] min-w-[328px] overflow-visible w-[796px] max-w-none mx-auto"}>
        <div>
          <h3 className={"relative font-[600] text-[20px] leading-[26px] text-[rgb(255,108,122)]"}>커리어 패스</h3>
          <h2 className={"text-white font-[700] text-[32px] leading-[45px] pt-[12px]"}>4개월 뒤, 이런 직군으로 취업할 수 있어요.</h2>
        </div>
        <div className={"flex gap-[20px] overflow-hidden w-[100vw] mx-auto static"}>
          <CareerPathCard imageUrl={DeveloperRtan} jobName={"게임 개발자"} jobIntroduction={"개발 엔진을 사용하여 게임 개발"}
                                  jobWorks={["기능, 시스템, 물리 엔진, 그래픽스 개발", "C# 또는 UnityScript와 같은 스크립팅 언어를 사용한 로직 작성 및 구현", "게임의 에셋, 애니메이션, 사운드, 텍스처 등 리소스의 효율적 관리 및 사용"]}/>
          <CareerPathCard imageUrl={PmRtan} jobName={"게임 Tech PM"} jobIntroduction={"프로젝트의 기술적 목표 및 실행 계획 수립"}
                                  jobWorks={["개발자와 협업하여 원활한 프로젝트 진행 보장", "프로젝트의 일정, 예산, 리소스, 위험 요소 등을 관리하고, 진행 상황을 모니터링"]}/>
          <CareerPathCard imageUrl={QaRtan} jobName={"게임 QA"} jobIntroduction={"테스트 및 검증 작업을 통한 게임 품질 보증"}
                                  jobWorks={["버그와 문제를 발견하고 보고하여, 사용자 경험 향상을 도모", "테스트 방법, 시나리오, 환경 등을 기반으로 테스트 계획과 전략을 수립"]}/>
        </div>
      </section>
    </section>
  </section>
}