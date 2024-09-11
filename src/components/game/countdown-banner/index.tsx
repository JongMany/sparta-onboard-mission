import React from 'react';
import {RecruitmentDeadlineTimer} from "@/components/game/countdown-banner/timer/RecruitmentDeadlineTimer";

// 9월 12일 목 24:00까지
export const CountdownBanner = () => {
  return (
      <section className={"relative"}>
        <section className={"bg-[rgb(20,22,23)] lg:py-[100px] lg:px-[0px] py-[80px] px-[16px] block"}>
          <main className={"flex flex-col lg:flex-row  mx-auto justify-center lg:justify-between max-w-[328px] lg:max-w-[796px] items-start lg:items-center"}>
            <div>
              <h1 className={"relative font-[700] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[45px] text-left text-white"}>⏰ 모집 마감 임박 ⏰</h1>
              <div className={"hidden lg:text-[18px] lg:leading-[29px] lg:mt-[8px] lg:text-[rgb(157,167,174)] lg:opacity-80 lg:whitespace-pre-wrap"}>곧 올해 마지막 모집이 마감됩니다.</div>
            </div>
            <RecruitmentDeadlineTimer />
            <div className={"lg:hidden block text-[14px] leading-[22px] mt-[8px] text-[rgb(157,167,174)] opacity-80 whitespace-pre-wrap"}>곧 올해 마지막 모집이 마감됩니다.</div>
          </main>
        </section>
      </section>
  );
};

