"use client";
import React from 'react';
import {useDeadlineTimer} from "@/hooks/shared/useDeadlineTimer";

export const RecruitmentDeadlineTimer = () => {
  const deadline = new Date('2024-09-12T23:59:59');
  const {days, hours, minutes, seconds} = useDeadlineTimer(deadline);
  return (
      <div className={"leading-[150%] font-[700] flex justify-center items-center text-[28px] lg:text-[40px] text-white lg:m-0 my-[20px]"}>
        <div className={"w-[88px] lg:w-[117px] h-[54px] lg:h-[76px] lg:mr-[12px] mr-[12px] lg:ml-[4px] ml-0 py-[6px] lg:py-[8px] rounded-[6px] text-[rgb(20,22,23)] flex text-center justify-center items-center bg-white"}>{days}일</div>
        <div className={"w-[54px] h-[54px] lg:w-[76px] lg:h-[76px] py-[6px] lg:py-[8px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>{hours >= 10 ? `${hours}` : `0${hours}` }</div>
        :
        <div className={"w-[54px] h-[54px] lg:w-[76px] lg:h-[76px] py-[6px] lg:py-[8px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>{minutes>=10? `${minutes}`: `0${minutes}`}</div>
        :
        <div className={"w-[54px] h-[54px] lg:w-[76px] lg:h-[76px] py-[6px] lg:py-[8px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>{seconds>=10? `${seconds}`: `0${seconds}`}</div>
      </div>
  );
};

