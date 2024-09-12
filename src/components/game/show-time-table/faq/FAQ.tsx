"use client";

import React, {useState} from 'react';
import {FAQItem} from "@/components/game/show-time-table/faq/FAQItem";
import {timeTableFAQList} from "@/constants/game";


export const FAQ = () => {
  const [allShow, setAllShow] = useState(false);
  const [toggleFAQState, setToggleFAQState] = useState([false, false, false, false, false, false]);
  const toggleAllShow = () => {
    if (allShow) {
      setToggleFAQState(prev => prev.map(() => false))
    } else {
      setToggleFAQState(prev => prev.map(() => true))
    }
    setAllShow(prev => !prev);
  }

  const toggleFAQStateHandler = (num: number) => () => {
    setToggleFAQState((prev) => prev.map((state, index) => index === num ? !state : state))
  }


  return (
      <section className={"flex flex-col gap-[40px] mt-[40px] lg:mt-[100px] pt-[20px] px-[4px] lg:px-[16px]"}>
        <section className={"flex justify-between"}>
          <h4 className={"font-[600] text-[18px] leading-[29px] text-[rgb(20,22,23)]"}>관련 자주 묻는 질문</h4>
          <div
              className={"flex justify-between items-center gap-[8px] font-[400] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
          >
            전체 펼치기
            <div
                className={`w-[40px] h-[24px] p-[2px] rounded-[14px] transition duration-500 ease-in-out cursor-pointer flex items-center ${allShow ? "bg-[rgb(232,52,78)]" : "bg-[rgb(180,191,198)]"}`}
                onClick={toggleAllShow}
            >
              <div
                  className={`w-[20px] h-[20px] rounded-[12px] bg-[rgb(255,255,255)] transition duration-300 ease-in-out ${allShow ? 'translate-x-[16px]' : 'translate-x-0'}`}></div>
            </div>
          </div>
        </section>
        <section className={"flex flex-col gap-[20px]"}>
          {timeTableFAQList.map((item, index) => <FAQItem key={item.question} question={item.question} answers={item.answers}
                                                 isOpened={toggleFAQState[index]}
                                                 isLast={index === timeTableFAQList.length - 1}
                                                 onClick={toggleFAQStateHandler(index)}/>)}
        </section>
      </section>
  );
};


