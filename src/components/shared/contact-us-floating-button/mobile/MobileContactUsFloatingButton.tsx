import React from 'react';
import Image from "next/image";
import MobileContactUs from "@/assets/images/contact-us/mobile-contact-us.webp";

export const MobileContactUsFloatingButton = () => {
  return (
      <div className={"flex w-[84px] min-w-[84px] justify-between"}>
        <div className={"w-[10px] h-[10px]"}></div>
        <div className={"cursor-pointer drop-shadow-floating-button"}>
          <Image src={MobileContactUs} alt={"르탄이 문의하기"} width={64} height={70}
                 className={"aspect-floatingButtonRatio"}/>
        </div>
      </div>
  );
};

