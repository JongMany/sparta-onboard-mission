import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Collaboration from "@/assets/images/collaboration.webp"
import PcCardAnimation from "@/components/game/main-banner/card-animation/PcCardAnimation";

export const MainBanner = () => {
  return (
      <section className={"relative"}>
        <section
            className={"flex justify-start items-center z-0 overflow-hidden relative h-[733px] bg-mainBannerRadialGradient"}>
          <div
              className={"w-[100%] relative flex flex-col text-center items-center justify-center gap-[16px] -translate-y-[66px]"}>
            <Image src={Collaboration} alt={"고용노동부 x 내일배움캠프"} width={247} height={26}/>
            <h1 className={"relative h-[140px] text-white text-[50px] font-[700] leading-[140%] mt-0"}>
              게임 업계 취업
              <br/>
              <span className={"text-blushRed"}>4개월</span>
              만에 현실로
            </h1>
            <Link href={"/apply?tack-game"}
                  className={"bg-mainRed z-10 font-[600] text-[16px] leading-[26px] rounded-[8px] text-white mt-4 flex justify-center items-center gap-[10px] w-[212px] h-[56px] px-[16px] py-[20px] "}>참가
              신청하기</Link>
            {/* PC Card Animation*/}
            <PcCardAnimation/>
          </div>
          {/* Mobile Card Animation*/}
          <div></div>
          {/* Introduction */}
          <div className={"w-full absolute bottom-0 left-0"}>
            <div className={"bg-[rgba(0,0,0,0.24)] backdrop-blur-[20px] h-[126px]"}>
              <div className={"mx-auto px-[16px] py-[26px] w-[1024px]"}>
                <div className={"h-auto flex justify-between gap-[24px] w-full "}>
                  <div className={"flex break-keep flex-col gap-[8px] text-center whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-full text-center"}>교육
                      기간
                    </div>
                    <div className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor"}>
                      24.09.09(월) ~ 25.01.21(화)
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"h-auto w-[1px] bg-white opacity-[0.24]"} />
                  <div className={"flex break-keep flex-col gap-[8px] text-center whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-full text-center"}>교육
                      방법
                    </div>
                    <div
                        className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px]"}>
                      <span>100% 온라인</span>
                      <span>(평일 오전 9시 ~ 오후 9시)</span>
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"h-auto w-[1px] bg-white opacity-[0.24]"} />
                  <div className={"flex break-keep flex-col gap-[8px] text-center whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-full text-center"}>수강료
                    </div>
                    <div
                        className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px]"}>
                      <span>전액 무료</span>
                      <span>(내일배움카드 국비지원)</span>
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"h-auto w-[1px] bg-white opacity-[0.24]"} />
                  <div className={"flex break-keep flex-col gap-[8px] text-center whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-full text-center"}>모집
                      마감
                    </div>
                    <div className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor"}>24.09.12(목)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  );
};

