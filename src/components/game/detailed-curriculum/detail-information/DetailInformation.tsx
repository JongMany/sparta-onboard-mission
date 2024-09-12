import React from 'react';
import {ListBullet} from "@/components/shared/list/ListBullet";

type Props = {
  title: string;
  information: string[];
}
export const DetailInformation = ({title, information}: Props) => {
  return (
      <div className={"rounded-[8px] bg-[rgb(246,249,250)] p-[20px] lg:p-[24px] mt-[16px] lg:mt-[28px]"}>
        <p className={"break-keep text-[rgb(20,22,23)] leading-[21px] lg:leading-[26px] text-[13px] lg:text-[16px] whitespace-pre-wrap lg:whitespace-normal"}>{title}</p>
        <ul className={"flex flex-col text-[rgb(129,137,143)] mt-[8px] ml-[8px] lg:mt-[12px] lg:ml-[20px] gap-[2px] lg:gap-[4px] text-[12px] lg:text-[14px] leading-[18px] lg:leading-[22px] font-[400]"}>
          {information.map((item) => <li key={item} className={"break-keep lg:whitespace-pre-wrap whitespace-normal list-none"}>
            <ListBullet/>{item}</li>)}
        </ul>
      </div>
  );
};

