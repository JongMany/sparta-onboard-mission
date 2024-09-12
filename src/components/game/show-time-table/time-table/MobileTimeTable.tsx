"use client";
import React, {useState} from 'react';

import {ScheduleItem} from "@/components/game/show-time-table/time-table/ScheduleItem";
import {mobileTimeList} from "@/constants/game";


export const MobileTimeTable = () => {
  const [openStatus, setOpenStatus] = useState(() => Array(mobileTimeList.length).fill(false));
  const toggleOpenStatus = (num: number) => () => {
    setOpenStatus(prev => prev.map((item, idx) => idx === num ? !item : item));
  }
  return (
      <div className={"lg:hidden block"}>
        <div className={"flex gap-[8px] flex-col"}>
          {mobileTimeList.map((item, idx) => <ScheduleItem key={item.title} item={item} isOpen={openStatus[idx]}
                                                           toggleOpen={toggleOpenStatus(idx)}/>)}
        </div>
        <p className={"w-full text-center mt-[24px] font-[400] text-[12px] leading-[18px] text-[rgb(157,167,174)]"}>
          *시간대 별 항목은 커리큘럼 주차에 따라 달라질 수 있습니다.
        </p>
      </div>
  );
};

