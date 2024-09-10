import React, {PropsWithChildren} from 'react';
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";

type Props = {
  question: string;
  isOpened: boolean;
  onClick: () => void;
  isLast: boolean;
}
export const FAQItem = ({question, isOpened, onClick, children, isLast}: PropsWithChildren<Props>) => {
  return (
      <div className={"flex flex-col gap-[10px]"}>
        <div className={`rounded-[12px] flex flex-col justify-center p-[20px] gap-[20px] ${isOpened?"bg-[rgb(246,249,250)]":""}`}>
          <div className={"w-full flex flex-row items-center justify-between cursor-pointer"} onClick={onClick}>
            <div className={"flex flex-row gap-[8px]"}>
              <p className={"text-[rgb(255,108,122)] font-[600] text-[20px] leading-[28px]"}>Q.</p>
              <p className={"break-keep text-[rgb(20,22,23)] font-[600] text-[20px] leading-[28px]"}>{question}</p>
            </div>
            <div>
              {isOpened ? <UpArrowIcon/> : <DownArrowIcon/>}
            </div>
          </div>
          {/* 숨은 아이템 */}
          <div className={`${isOpened ? "flex flex-col gap-[8px]" : "hidden"}`}>
            {isOpened && children}
          </div>
        </div>

        {!isLast && <div
            className={`${isOpened ? "opacity-0" : "flex h-[1px] border-none bg-[rgb(228,235,240)] mb-[10px]"}`}></div>}
      </div>
  );
};

