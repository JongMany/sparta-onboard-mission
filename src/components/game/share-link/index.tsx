import React from 'react';
import {SharedLinkButton} from "@/components/shared/button";

export const ShareLinkSection = () => {
  return (
      <section id={"gameShareLink1"} className={"relative"}>
        <section className={"flex justify-center items-center bg-[rgb(20,22,23)] pt-[40px] pb-[100px]"}>
          <section className={"flex w-full min-w-[328px] gap-[20px] max-w-[820px] m-0 flex-row items-center"}>
            <section className={"w-full flex flex-col items-start gap-[16px]"}>
              <h2 className={"relative font-[600] text-[20px] leading-[26px] text-start whitespace-pre-wrap text-white"}>
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

