import React from 'react';
import ProjectResultCarousel from "@/components/game/show-project-result/carousel/ProjectResultCarousel";
export const ShowProjectResultSection = () => {
  return (
      <section id={"gameProject"} className={`relative`}>
        <section className={"bg-cover w-full overflow-hidden bg-rgb(20,22,23)] bg-showProjectResultTexture"}>
          <section className={"relative flex flex-col w-full my-0 mx-auto gap-[60px] max-w-[600px] min-w-[820px]  py-[100px]"}>
            <div className={"w-full"}>
              <h3 className={"relative text-[20px] leading-[26px] font-[600] text-[rgb(255,108,122)]"}>프로젝트 결과물</h3>
              <h2 className={"text-white font-[700] text-[32px] leading-[45px] pt-[12px]"}>
                현직 개발자도 주목하는<br/>
                완성도 높은 게임을 만듭니다.
              </h2>
              <h3 className={"font-[400] text-[14px] leading-[22px] pt-[12px] text-subTextColor"}>
                팀 프로젝트를 통해 게임 개발의 전과정을 경험하고
                <br/>
                독보적인 포트폴리오를 완성하세요.
              </h3>
            </div>
            <ProjectResultCarousel/>
          </section>

        </section>
      </section>
  );
};

