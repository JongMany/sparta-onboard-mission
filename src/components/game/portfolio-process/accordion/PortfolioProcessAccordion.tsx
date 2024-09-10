'use client';

import {useState} from "react";
import Image from "next/image";

import {UpArrow} from "@/components/shared/icon/UpArrow";
import {DownArrow} from "@/components/shared/icon/DownArrow";

import PcCareerProgramImage1 from "@/assets/images/game/information/portfolio-process/career_program_1_pc.webp"
import PcCareerProgramImage2 from "@/assets/images/game/information/portfolio-process/career_program_2_pc.webp"
import PcCareerProgramImage3 from "@/assets/images/game/information/portfolio-process/career_program_3_pc.webp"
import PcCareerProgramImage4 from "@/assets/images/game/information/portfolio-process/career_program_4_pc.webp"

type PortfolioProcessItem = {
  title: string,
  description: string,
  figCaption?: string
}
const portfolioProcessList: PortfolioProcessItem[] = [
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

  return (<section className={"flex gap-[40px]"}>
    <div className={"flex flex-col gap-[6px] w-full"}>
      {portfolioProcessList.map((item, index) => <div
          className={`flex gap-[14px] break-keep ${index === selectedItemNumber ? '' : 'cursor-pointer'}`}
          onClick={toggleSelectedItemNumberHandler(index)}>
        <div className={`flex flex-col gap-[14px] items-center`}>
          <div
              className={`min-w-[12px] min-h-[12px] mt-[6px] rounded-[50%] border-[2px] duration-[400ms] ${selectedItemNumber === index ? "border-[rgb(255,108,122)] bg-[rgb(255,108,122)]" : "border-[rgb(199,210,216)]"}`}></div>
          <div
              className={`${index === selectedItemNumber ? "bg-[rgb(255,108,122)]" : "bg-[rgb(199,210,216)]"} transition-all w-[2px] h-full min-h-[28px] duration-[400ms] rounded-[100px]`}></div>
        </div>
        {/* 3번째 높이만 120*/}
        <div
            className={`flex flex-col gap-[16px] w-full ${index === selectedItemNumber ? 'h-[110px]' : 'h-[62px]'} transition-all duration-[400ms] overflow-hidden ease`}>
          <div className={"flex gap-[12px] w-full"}>
            <div className={"flex flex-col gap-[6px] w-full"}>
              <h1 className={`relative font-[600] text-[18px] leading-[25px] ${index === selectedItemNumber ? 'text-[rgb(58,62,65)]' : 'text-[rgb(157,167,174)]'}`}>{item.title}</h1>
              <ul className={`overflow-hidden ${index === selectedItemNumber ? 'opacity-100' : 'opacity-0'} transition-all duration-[400ms] break-words list-none`}>
                <li className={"text-[14px] leading-[22px] text-[rgb(129,137,143)] flex gap-[9px] font-[400]"}>
                  <p>{item.description}</p>
                </li>
              </ul>
            </div>
            <div>
              {selectedItemNumber === index ? <UpArrow/> : <DownArrow/>}
            </div>
          </div>
          {/*아마 모바일 */}
          <div className={"hidden"}></div>
        </div>
      </div>)}
    </div>
    <div className={"flex w-full h-[486px] flex-col gap-[16px] relative"}>
      <PortfolioProcessImageSelector selectedItemNumber={selectedItemNumber}/>
      {portfolioProcessList[selectedItemNumber]?.figCaption && <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(129,137,143)]"}>
        {portfolioProcessList[selectedItemNumber]?.figCaption}
      </p>}
    </div>
  </section>)
}

function PortfolioProcessImageSelector({selectedItemNumber}: { selectedItemNumber: number }) {
  switch (selectedItemNumber) {
    case 0:
      return <Image src={PcCareerProgramImage1} alt={"이력서, 포트폴리오"} width={390} height={430} className={"text-transparent"} />
    case 1:
      return <Image src={PcCareerProgramImage2} alt={"기술 면접 준비"} width={390} height={430} className={"text-transparent"}/>
    case 2:
      return <Image src={PcCareerProgramImage3} alt={'채용 설명회'} width={390} height={430} className={"text-transparent"}/>
    case 3:
      return <Image src={PcCareerProgramImage4} alt={"채용 연계 시스템"} width={390} height={430} className={"text-transparent"}/>
    default:
      return null;
  }
}