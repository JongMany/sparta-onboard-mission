import React from 'react';
import {DropdownMenuContainer} from "@/components/shared/main-header/dropdown-menu/DropdownMenuContainer";
import Link from "next/link";

type Props = {
  isHover: boolean;
}
export const ReviewAndBlogDropdownMenu = ({isHover}: Props) => {
  return (
      <DropdownMenuContainer isHover={isHover} >
        <div className={"flex w-[140px] flex-col items-start gap-[6px]"}>
          <Link
              href={'https://nbcamp.spartacodingclub.kr/blog/category/%EC%B7%A8%EC%97%85%EC%84%B1%EA%B3%B5%ED%9B%84%EA%B8%B0'}
              target={"_blank"}
              className={"w-full font-[400] text-[14px] leading-[22px] text-[#3A3E41] py-[6px] flex items-center gap-[4px]"}>
            취업 후기
          </Link>
          <Link href={'https://nbcamp.spartacodingclub.kr/blog/category/%EB%A9%98%ED%86%A0%EC%9D%B8%ED%84%B0%EB%B7%B0'}
                target={"_blank"}
                className={"w-full font-[400] text-[14px] leading-[22px] text-[#3A3E41] py-[6px] flex items-center gap-[4px]"}>
            멘토 인터뷰
          </Link>
          <Link
              href={'https://nbcamp.spartacodingclub.kr/blog/category/%EB%82%B4%EB%B0%B0%EC%BA%A0-%EC%9D%B4%EC%95%BC%EA%B8%B0'}
              target={"_blank"}
              className={"w-full font-[400] text-[14px] leading-[22px] text-[#3A3E41] py-[6px] flex items-center gap-[4px]"}>
            내일배움캠프 블로그
          </Link>
        </div>
      </DropdownMenuContainer>
  );
};

