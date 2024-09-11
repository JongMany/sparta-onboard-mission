import React, {PropsWithChildren} from 'react';
import Image from "next/image";
import {
  MobileAdditionalInformation
} from "@/components/game/recruitment-information/process-information-item/MobileAdditionalInformation";


type Props = {
  icon: string;
  step: string;
  description: string;
}
export const MobileProcessInformationContainer = ({icon, step, description, children}: PropsWithChildren<Props>) => {
  return (
      <div className={"lg:hidden flex gap-[20px] tablet:gap-[32px] w-full h-[100px]"}>
        <Image src={icon} alt={"서류지원"} width={50} height={50} className={"w-[50px] h-[50px]"}/>
        <div>
          <h4 className={"text-white leading-[22px] text-[16px] font-[600]"}>{step}</h4>
          {children}
          <p className={"font-[400] text-[13px] leading-[21px] whitespace-pre-wrap mt-[12px] text-[rgb(157,167,174)]"}>{description}</p>
        </div>
      </div>
  );
};

MobileProcessInformationContainer.AdditionalInformation = MobileAdditionalInformation;

