import React from 'react';
import Link from "next/link";
import {DropdownMenuContainer} from "@/components/shared/main-header/dropdown-menu/DropdownMenuContainer";

type Props = {
  isHover: boolean;
}
export const CustomerCenterDropdownMenu = ({isHover}:Props) => {
  return (
      <DropdownMenuContainer isHover={isHover}>
        <div className={"flex w-[140px] flex-col items-start gap-[6px]"}>
          <Link
              href={'https://support.spartacodingclub.kr/faqs?product=%EB%82%B4%EC%9D%BC%EB%B0%B0%EC%9B%80%EC%BA%A0%ED%94%84'}
              target={"_blank"}
              className={"w-full font-[400] text-[14px] leading-[22px] text-[#3A3E41] py-[6px] flex items-center gap-[4px]"}>
            취업 후기
          </Link>
          <Link href={''}
                target={"_blank"}
                className={"w-full font-[400] text-[14px] leading-[22px] text-[#3A3E41] py-[6px] flex items-center gap-[4px]"}>
            문의하기
          </Link>
        </div>
      </DropdownMenuContainer>
  );
};

