import React from 'react';
import Image from "next/image";
import PCContactUs from "@/assets/images/contact-us/pc-contact-us.webp";

export const PcContactUsFloatingButton = () => {
  return (
      <div className={"cursor-pointer h-[90px] fixed bottom-[100px] right-[1%]"}>
        <Image src={PCContactUs} alt={"르탄이 문의하기"} width={186} height={72}  className={"aspect-floatingButtonRatio"} />
      </div>
  );
};

