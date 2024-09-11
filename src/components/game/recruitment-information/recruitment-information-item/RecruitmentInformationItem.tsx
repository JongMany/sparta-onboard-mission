import React from 'react';
import {type RecruitmentInformation} from "@/components/game/recruitment-information";

type Props = {
  isLast: boolean;
  information: RecruitmentInformation;
}
export const RecruitmentInformationItem = ({information, isLast}: Props) => {
  return (
      <>
        <div className={"flex gap-[10px] tablet:gap-[32px] lg:gap-[8px]"}>
          <p className={"text-[rgb(255,108,122)] w-[60px] tablet:w-fit lg:w-[120px] text-[13px] lg:text-[16px] leading-[21px] lg:leading-[26px] font-[600]"}>{information.label}</p>
          <div className={"flex flex-col gap-[4px]"}>
            <div className={"relative text-[rgb(242,246,248)] font-[500] lg:font-[600] text-[13px] lg:text-[16px] leading-[21px] lg:leading-[26px]"}>{information.mainInformation}</div>
            {information.additionalInformation.map((additionalItem) => <>
              <p className={"text-[14px] font-[400] leading-[22px] whitespace-pre-wrap text-[rgb(157,167,174)]"}>{additionalItem}</p>
            </>)}
          </div>
        </div>
        {!isLast && <div className={"w-full min-h-[1px] bg-[rgb(58,62,65)]"}></div>}
      </>
  );
};

