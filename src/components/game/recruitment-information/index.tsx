import React from 'react';
import Image from "next/image";

import {
  RecruitmentInformationItem
} from "@/components/game/recruitment-information/recruitment-information-item/RecruitmentInformationItem";

import PcLineImage from "@/assets/images/game/information/recruitment-information/pc.webp"
import MobileLineImage from "@/assets/images/game/information/recruitment-information/mobile.webp";
import {
  PcProcessInformationContainer
} from "@/components/game/recruitment-information/process-information-item/PcProcessInformationContainer";
import {
  MobileProcessInformationContainer
} from "@/components/game/recruitment-information/process-information-item/MobileProcessInformationContainer";
import {applicationProcessList, recruitmentInformationList} from "@/constants/game";

export const RecruitmentInformationSection = () => {
  return (
      <section id={"gameRecruitmentInfo"} className={"relative"}>
        <section id={"gameOverview"} className={"bg-[rgb(20,22,23)] lg:py-[100px] lg:px-0 py-[60px] px-[16px]"}>
          <section className={"min-w-[328px] w-full mx-auto my-0 flex flex-col gap-[60px] max-w-[600px] lg:max-w-[820px]"}>
            <section className={"w-full flex flex-col gap-[40px] lg:gap-[60px]"}>
              <div className={"flex flex-col gap-[16px] lg:gap-[20px]"}>
                <h2 className={"relative font-[700] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[45px] whitespace-pre-wrap text-white"}>
                  게임 개발 부트캠프
                  <br/>
                  모집 개요
                </h2>
                <p className={"text-[rgb(157,167,174)] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] font-[400]"}>
                  * 훈련을 위한 장비 대여 필요 시, 내부 대여 절차를 통해 대여가 가능합니다.
                </p>
              </div>
              <div className={"flex flex-col gap-[24px]"}>
                {recruitmentInformationList.map((item, index) => <RecruitmentInformationItem key={item.label} information={item}
                                                                                             isLast={index === recruitmentInformationList.length - 1}/>)}
              </div>
            </section>
            <section className={"w-full flex flex-col gap-[40px]"}>
              <h4 className={"whitespace-pre-wrap text-white font-[700] text-[32px] leading-[45px]"}>지원 절차</h4>
              <div className={"flex gap-[40px] w-full relative flex-col lg:flex-row"}>
                <Image src={PcLineImage} alt={""} width={820} height={50}
                       className={"hidden lg:absolute lg:text-transparent lg:block"}/>
                {/* 모바일 */}
                <Image src={MobileLineImage} alt={""} width={50} height={520} className={"lg:hidden block absolute text-transparent"}/>
                {
                  applicationProcessList.map((item, index) => <MobileProcessInformationContainer key={item.description} icon={item.icon} step={item.step} description={item.description}>
                    <MobileProcessInformationContainer.AdditionalInformation className={`${index === 0 ? "text-[rgb(255,108,122)]" : "text-white"} text-[12px] leading-[18px] font-[400] mt-[6px]`} information={item.additionalInformation} />
                  </MobileProcessInformationContainer>)
                }
                {
                  applicationProcessList.map((item, index) => <PcProcessInformationContainer key={item.description} icon={item.icon} step={item.step} description={item.description}>
                    <PcProcessInformationContainer.AdditionalInformation className={`${index === 0 ? "text-[rgb(255,108,122)]" : "text-white"} text-[12px] leading-[18px] font-[400] mt-[6px]`} information={item.additionalInformation} />
                  </PcProcessInformationContainer>)
                }
              </div>
            </section>
          </section>
        </section>
      </section>
  );
};

