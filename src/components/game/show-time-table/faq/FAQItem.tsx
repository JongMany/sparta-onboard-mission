import React from 'react';
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";

type Props = {
  question: string;
  answers: string[];
  isOpened: boolean;
  onClick: () => void;
}
export const FAQItem = ({question, answers, isOpened, onClick}: Props) => {
  return (
      <div className={"flex flex-col gap-[12px] cursor-pointer break-keep"}>
        <div className={"flex font-[600] text-[16px] leading-[26px] text-[rgb(20,22,23)]"} onClick={onClick}>
          <p className={"text-[rgb(255,108,122)]"}>Q.</p>
          <p className={"w-full mr-[12px] ml-[8px] text-[rgb(58,62,65)]"}>{question}</p>
          {isOpened ? <UpArrowIcon/> : <DownArrowIcon/>}
        </div>
        {/* 숨은 아이템 */}
        {isOpened && <div className={"flex flex-col gap-[4px] pl-[22px]"}>
          {answers.map((answer) => <p
              className={"text-[rgb(129,137,143)] text-[16px] leading-[26px] whitespace-pre-wrap"}>{answer}</p>)}
        </div>}
      </div>
  );
};

