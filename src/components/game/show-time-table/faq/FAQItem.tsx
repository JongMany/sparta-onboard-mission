import React from 'react';
import {DownArrow} from "@/components/shared/icon/DownArrow";
import {UpArrow} from "@/components/shared/icon/UpArrow";

type Props = {
  question: string;
  answers: string[];
  isOpened: boolean;
}
export const FAQItem = ({question, answers, isOpened}: Props) => {
  return (
      <div className={"flex flex-col gap-[12px] cursor-pointer break-keep"}>
        <div className={"flex font-[600] text-[16px] leading-[26px] text-[rgb(20,22,23)]"}>
          <p className={"text-[rgb(255,108,122)]"}>Q.</p>
          <p className={"w-full mr-[12px] ml-[8px] text-[rgb(58,62,65)]"}>{question}</p>
          {isOpened ? <UpArrow/> : <DownArrow/>}
        </div>
        {/* 숨은 아이템 */}
        {isOpened && <div className={"flex flex-col gap-[4px] pl-[22px]"}>
          {answers.map((answer) => <p
              className={"text-[rgb(129,137,143)] text-[16px] leading-[26px] whitespace-pre-wrap"}>{answer}</p>)}
        </div>}
      </div>
  );
};

