import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Collaboration from "@/assets/images/collaboration.webp"
import PcCardAnimation from "@/components/game/main-banner/card-animation/PcCardAnimation";
import {MobileCardAnimation} from "@/components/game/main-banner/card-animation/MobileCardAnimation";
import MobileBackgroundImage from "@/assets/images/game/main-banner/mobile/bg.webp";
import PcBackgroundImage from "@/assets/images/game/main-banner/pc/bg.webp";

export const MainBanner = () => {
  return (
      <section className={"relative"}>
        <section
            className={"flex flex-col lg:flex-row lg:justify-start lg:items-center z-0 overflow-hidden relative h-[733px] bg-mainBannerRadialGradient"}>
          <Image src={MobileBackgroundImage} alt={"배경이미지"} width={1024} height={656} className={"text-transparent flex absolute bottom-[77px] left-[50%] translate-x-[-50%] lg:hidden"}/>
          <Image src={PcBackgroundImage} alt={"배경이미지"} width={1920} height={966} className={"absolute text-transparent hidden lg:flex lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] max-w-none"}/>
          <div
              className={"w-[100%] relative flex flex-col text-center items-center justify-center gap-[12px] lg:gap-[16px] lg:-translate-y-[66px]"}>
            <Image src={Collaboration} alt={"고용노동부 x 내일배움캠프"} width={247} height={26} className={"text-transparent mt-[120px] lg:mt-0"}/>
            <h1 className={"relative h-[78px] lg:h-[140px] text-white text-[28px] lg:text-[50px] font-[700] text-center leading-[39px] lg:leading-[140%] mt-0 whitespace-pre-wrap"}>
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
          {/*<div></div>*/}
          <MobileCardAnimation/>
          {/* Introduction */}
          <div className={"w-full absolute bottom-0 left-0 h-fit box-border"}>
            <div className={"bg-[rgba(20,22,23,0.64)] lg:bg-[rgba(0,0,0,0.24)] backdrop-blur-[8px] lg:backdrop-blur-[20px] h-fit lg:h-[126px] flex justify-center items-center overflow-hidden "}>
              <div className={"mx-auto px-[16px] py-[32px] lg:py-[26px] min-w-[360px lg:w-[1024px]"}>
                <div className={"h-auto flex flex-col lg:flex-row lg:justify-between gap-[12px] lg:gap-[24px] lg:w-full"}>
                  <div className={"flex break-keep flex-row lg:flex-col gap-[20px] lg:gap-[8px] text-center whitespace-nowrap lg:whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-[52px] lg:w-full lg:text-center whitespace-nowrap break-keep text-left"}>
                      교육 기간
                    </div>
                    <div className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px] lg:text-center"}>
                      24.09.09(월) ~ 25.01.21(화)
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"hidden lg:h-auto lg:w-[1px] lg:bg-white lg:opacity-[0.24]"} />
                  <div className={"flex break-keep flex-row lg:flex-col gap-[20px] lg:gap-[8px] text-center whitespace-nowrap lg:whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-[52px] lg:w-full lg:text-center whitespace-nowrap break-keep text-left"}>
                      교육 방법
                    </div>
                    <div
                        className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px] lg:whitespace-pre-wrap lg:text-center"}>
                      {"100% 온라인\n(평일 오전 9시 ~ 오후 9시)"}
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"hidden lg:h-auto lg:w-[1px] lg:bg-white lg:opacity-[0.24]"} />
                  <div className={"flex break-keep flex-row lg:flex-col gap-[20px] lg:gap-[8px] text-center whitespace-nowrap lg:whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-[52px] lg:w-full lg:text-center  whitespace-nowrap break-keep text-left"}>수강료
                    </div>
                    <div
                        className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px] lg:whitespace-pre-wrap lg:text-center"}>
                      {"전액 무료\n(내일배움카드 국비지원)"}
                    </div>
                  </div>
                  {/* 경계선 */}
                  <div className={"hidden lg:h-auto lg:w-[1px] lg:bg-white lg:opacity-[0.24]"} />
                  <div className={"flex break-keep flex-row lg:flex-col gap-[20px] lg:gap-[8px] text-center whitespace-nowrap lg:whitespace-pre-wrap"}>
                    <div className={"text-subTextColor font-[400] text-[14px] leading-[22px] w-[52px] lg:w-full lg:text-center whitespace-nowrap break-keep text-left"}>
                      모집 마감
                    </div>
                    <div className={"font-[500] text-[14px] leading-[22px] text-lightGrayColor flex flex-col gap-[2px] lg:whitespace-pre-wrap lg:text-center"}>24.09.12(목)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  );
};

