import React from 'react';
import {SharedLinkButton} from "@/components/shared/button";

export const ShareLinkSection = () => {
  return (
      <section id={"gameShareLink1"} className={"relative"}>
        <section className={"flex justify-center items-center bg-[rgb(20,22,23)] pt-[40px] pb-[80px] lg:pb-[100px]"}>
          <section className={"flex w-full min-w-[328px] gap-[20px] max-w-[600px] lg:max-w-[820px] mx-[16px] lg:m-0 flex-col lg:flex-row items-center"}>
            <section className={"w-full flex flex-col items-center lg:items-start gap-[8px] lg:gap-[16px]"}>
              <h2 className={"relative font-[600] text-[18px] lg:text-[20px] leading-[25px] lg:leading-[26px] text-center lg:text-start whitespace-pre-wrap text-white"}>
                주변에 게임 개발자를
                <br/>
                꿈꾸는 사람이 있다면?
              </h2>
              <p className={"text-[rgb(157,167,174)] text-start leading-[22px] text-[14px] font-[400]"}>공유받은 링크로 지원 시, 서류 전형 가산점을 드립니다.</p>
            </section>
            <SharedLinkButton />
          </section>
        </section>
      </section>
  );
};

