import React from 'react';
import {GoDotFill} from "react-icons/go";

type Props = {
  title: string;
  information: string[];
}
export const DetailInformation = ({title, information}: Props) => {
  return (
      <div className={"rounded-[8px] bg-[rgb(246,249,250)] p-[24px] mt-[28px]"}>
        <p className={"break-keep text-[rgb(20,22,23)] leading-[26px] text-[16px] "}>{title}</p>
        <ul className={"flex flex-col text-[rgb(129,137,143)] mt-[12px] ml-[20px] gap-[4px] text-[14px] leading-[22px] font-[400]"}>
          {information.map((item) => <li className={"break-keep"}>
            <span className={"text-[18px]"}>• </span>{item}</li>)}
        </ul>
      </div>
  );
};

