import React from 'react';
import SharedLink from "@/assets/images/shared/share-link.webp";
import Image from "next/image";

export const SharedLinkButton = () => {
  return (
      <div className={"min-w-[70px] lg:min-w-[153px] py-[11px] px-[14px] lg:h-[44px] flex justify-center items-center rounded-[8px] bg-white w-fit gap-[4px] cursor-pointer font-[600] text-[14px] leading-[22px] text-[rgb(58,62,65)]"}>
        지인에게 공유하기
        <Image src={SharedLink} alt={"링크 공유하기 버튼"} width={11} height={11} className={"text-transparent"}/>
      </div>
  );
};

