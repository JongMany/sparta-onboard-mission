import React from 'react';
import Image from "next/image";
import {BiCheck} from "react-icons/bi";

type Props = {
  imageUrl: string;
  jobName: string;
  jobIntroduction: string;
  jobWorks: string[];
  className?: string;
}
export const CareerPathCard = ({imageUrl, jobName, jobIntroduction, jobWorks, className=""}: Props) => {
  return (
      <div
          className={`w-[280px] lg:w-[252px] p-[24px] lg:py-[24px] lg:px-[16px] border-[1px] rounded-[12px] border-[rgb(168,43,62)] bg-[rgb(52,45,60)] ${className}`}>
        <Image src={imageUrl} alt={"커리어 패스"} className={"text-transparent"} width={56} height={56}/>
        <div className={"text-white mt-[12px] mb-[8px]"}>{jobName}</div>
        <div className={"text-white text-[13px] leading-[20px]"}>{jobIntroduction}</div>
        <div className={"mt-[24px] text-[13px] leading-[20px] flex flex-col gap-[8px]"}>
          {jobWorks.map((work) => <div
              className={"text-[12px] leading-[18px] flex gap-[6.5px] text-[rgb(255,158,169)] fill-[rgb(255,158,169)]"}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66565 8L5.99898 11.3333L13.3323 4" stroke="#FF6C7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className={"w-[195px] whitespace-pre-wrap"}>{work}</p>
          </div>)}
        </div>
      </div>
  );
};

