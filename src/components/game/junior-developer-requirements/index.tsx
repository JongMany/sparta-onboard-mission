import React from 'react';
export const JuniorDeveloperRequirements = () => {
  return (
      <section id={"gameTrailer"} className={`relative`}>
        <section className={"py-[100px] bg-[rgb(20,22,23)]"}>
          <section className={"w-[796px] max-w-none mx-auto my-0"}>
            <h2 className={"font-[700] text-[32px] leading-[45px] relative text-white mb-[40px]"}>
              게임 업계에서 원하는
              <br/>
              주니어 개발자의 조건
            </h2>
            <article className={"w-full flex items-center gap-[40px]"}>
              <div className={"overflow-hidden rounded-[8px] w-[388px] h-[236px]"}>
                <iframe src="https://www.youtube.com/embed/JLKETuTRmNA?autoplay=1&mute=1" width={"100%"} height={"100%"} />
              </div>
              <section className={"flex flex-col gap-[12px] text-white"}>
                <p>
                  시니어 개발자가 밝히는 함께 하고 싶은 주니어 개발자는
                  <br/>
                  유저 경험에 대해 충분히 고민하고, 개선해 본 지원자입니다.
                </p>
                <p>
                  스파르타 내일배움캠프에서는 실제 런칭을 통한 유저
                  <br/>
                  피드백을 받아보면서 게임 기획, 개발부터 개선까지 경험할
                  <br/>
                  수 있습니다.
                </p>
                <p>
                  경쟁력 있는 포트폴리오를 갖춰 채용 시장에서 주목받는
                  <br/>
                  인재가 되어보세요.
                </p>
              </section>
            </article>
          </section>
        </section>
      </section>
  );
};

