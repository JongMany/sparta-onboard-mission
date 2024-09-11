'use client';

import {useState} from "react";
import Image from "next/image";

import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";

import PcCareerProgramImage1 from "@/assets/images/game/information/portfolio-process/career_program_1_pc.webp"
import PcCareerProgramImage2 from "@/assets/images/game/information/portfolio-process/career_program_2_pc.webp"
import PcCareerProgramImage3 from "@/assets/images/game/information/portfolio-process/career_program_3_pc.webp"
import PcCareerProgramImage4 from "@/assets/images/game/information/portfolio-process/career_program_4_pc.webp"
import {PcPortfolioAccordion} from "@/components/game/portfolio-process/accordion/pc/PcPortfolioAccordion";
import {MobilePortfolioAccordion} from "@/components/game/portfolio-process/accordion/mobile/MobilePortfolioAccordion";

export type PortfolioProcessItem = {
  title: string,
  description: string,
  figCaption?: string
}
export const portfolioProcessList: PortfolioProcessItem[] = [
  {
    title: '이력서 포트폴리오 완성',
    description: '커리어 매니저와 현업 개발자의 1:1 이력서 코칭으로, 채용 담당자가 주목하는 이력서와 포트폴리오를 완성합니다.',
    figCaption: '*실제 수료생의 이력서 첨삭 멘토링 화면입니다.',
  },
  {
    title: '기술 면접 준비',
    description: '카카오, 마이크로소프트, NHN 등에 재직 중인 시니어 개발자에게 1:1 면접 코칭을 받습니다.'
  },
  {
    title: '채용 설명회',
    description: '현업에서 ‘스파르타 출신은 다르다.’ 는 입소문이 돌면서, 내일배움캠프 수료생 채용을 원하는 기업들이 채용 설명회를 진행합니다.'
  },
  {
    title: '채용 연계 시스템',
    description: '단순 입사지원만으로는 단기간 취업이 어렵습니다. 커리어 매니저를 통해 직접 기업에 매칭됩니다. (매칭률 80.7%)'
  }
]

export const PortfolioProcessAccordion = () => {
  const [selectedItemNumber, setSelectedItemNumber] = useState(0);

  const toggleSelectedItemNumberHandler = (number: number) => () => {
    setSelectedItemNumber(number);
  }

  return (<section className={"flex lg:gap-[40px]"}>
    <PcPortfolioAccordion/>
    <MobilePortfolioAccordion/>
  </section>)
}

