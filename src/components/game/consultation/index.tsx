import React from 'react';
import Link from "next/link";

export const ConsultationSection = () => {
  return (
      <section id={"gameConsultation"} className={"relative"}>
        <section className={"py-[80px] px-[16px]  lg:py-[100px] lg:px-0 flex justify-center items-center bg-[rgb(20,22,23)]"}>
          <section className={"flex justify-center items-center w-full min-w-[328px] max-w-[600px] lg:max-w-[820px] mx-[16px] lg:m-0"}>
            <div className={"flex flex-col items-center"}>
              <h2 className={"relative font-[600] text-[18px] lg:text-[20px] leading-[25px] lg:leading-[26px] text-white whitespace-pre-wrap text-center mb-[20px]"}>맞춤형으로 학습을 시작하고 싶다면?</h2>
              <Link href={"https://nbcamp.spartacodingclub.kr/consulting-bootcamp"} target={"_blank"} className={"flex min-w-[70px] py-[13px] px-[14px] justify-center items-center font-[600] text-[14px] leading-[22px] rounded-[8px] border-[1px] border-[rgb(215,224,230)] bg-white text-[rgb(58,62,65)]"}>1:1 취업 컨설팅 받아보기(무료)</Link>
            </div>
          </section>
        </section>
      </section>
  );
};

