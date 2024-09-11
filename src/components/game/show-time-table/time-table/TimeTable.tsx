import React from 'react';
import Image from "next/image";
import TimeTableImage from "@/assets/images/game/information/time-table/pc/timetable.webp"
import {InformationByTime} from "@/components/game/show-time-table/time-table/InformationByTime";
export const TimeTable = () => {
  return (
      <section className={"flex gap-[60px]"}>
        <section className={"flex flex-col gap-[60px] w-full lg:w-[432px]"}>
          <div className={"flex flex-col gap-[12px] w-full"}>
            <h3 className={"relative text-[rgb(255,108,122)] text-center lg:text-start text-[16px] lg:text-[20px] leading-[22px] lg:leading-[26px] font-[600]"}>학습 시간표</h3>
            <h2 className={"relative text-[rgb(20,22,23)] whitespace-pre-wrap text-[24px] lg:text-[32px] leading-[34px] lg:leading-[45px] text-center lg:text-start font-[700]"}>
              내일배움캠프의
              <br/>
              하루를 소개합니다.
            </h2>
          </div>
          <InformationByTime/>
        </section>
        <Image src={TimeTableImage} alt={"내일배움캠프 일정표"} width={328} height={654} className={"text-transparent hidden lg:max-w-full lg:h-auto"}/>
      </section>
  );
};

