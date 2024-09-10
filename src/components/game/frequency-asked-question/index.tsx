import React from 'react';
import {FAQListSection} from "@/components/game/frequency-asked-question/faq/FAQListSection";

export const FAQSection = () => {
  return (
      <section id={"gameFaq"} className={"relative"}>
        <div id={"gameFaq"} className={"w-full flex justify-center"}>
          <div className={"flex flex-col gap-[40px] min-w-[328px] w-full max-w-[820px] mx-auto my-0 py-[100px]"}>
            <h2 className={"relative font-[700] text-[32px] leading-[45px] mb-[20px] whitespace-pre-wrap text-[rgb(20,22,23)]"}>자주 묻는 질문</h2>
            <FAQListSection />
            <section className={`w-full flex py-[16px] pr-[16px] pl-[20px] justify-between items-center self-stretch rounded-[12px] bg-[rgb(242,246,248)]`}>
              <p className={"text-[rgb(95,102,107)] font-[400] text-[16px] leading-[26px] mr-[10px]"}>아직 궁금증이 풀리지 않았다면?</p>
              <button className={"overflow-visible text-[rgb(58,62,65)] flex-nowrap bg-white border-[1px] border-[rgb(215,224,230)] flex items-center justify-center font-[600] text-[14px] leading-[22px] min-w-[70px] py-[11px] px-[14px] rounded-[8px]"}>1:1 채팅 문의하기</button>
            </section>
          </div>
        </div>
      </section>
  );
};
