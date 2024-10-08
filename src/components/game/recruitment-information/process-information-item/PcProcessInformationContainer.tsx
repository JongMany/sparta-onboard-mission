import React, {PropsWithChildren} from 'react';
import Image, {StaticImageData} from "next/image";
import {
  PcAdditionalInformation
} from "@/components/game/recruitment-information/process-information-item/PcAdditionalInformation";

type Props = {
  icon: StaticImageData;
  step: string;
  description: string;
}
export const PcProcessInformationContainer = ({icon, step, description, children}: PropsWithChildren<Props>) => {
  return (
      <div className={"hidden lg:flex flex-col w-[175px] items-center justify-center"}>
        <Image src={icon} alt={"서류지원"} width={50} height={50}/>
        <h4 className={"text-white mt-[24px] leading-[29px] text-[18px] font-[600]"}>{step}</h4>
        {children}
        <p className={"whitespace-pre-wrap mt-[12px] text-[rgb(157,167,174)] text-center leading-[22px] text-[14px] font-[400]"}>{description}</p>
      </div>
  );
};

PcProcessInformationContainer.AdditionalInformation = PcAdditionalInformation;

