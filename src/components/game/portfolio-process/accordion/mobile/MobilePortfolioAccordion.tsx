import React, {useState} from 'react';
import {portfolioProcessList} from "@/components/game/portfolio-process/accordion/PortfolioProcessAccordion";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";

export const MobilePortfolioAccordion = () => {
  const [openStatus, setOpenStatus] = useState(() => Array(portfolioProcessList.length).fill(false));
  const toggleOpenHandler = (num: number) => () => {
    setOpenStatus((prev) => prev.map((state, index) => index === num ? !state : state))
  }

  return (
      <>
        <div className={"flex flex-col gap-[6px] w-full lg:hidden"}>
          {portfolioProcessList.map((item, index) => {
            const isSelected = openStatus[index]
            return <div
                key={item.title}
                className={`flex gap-[14px] break-keep ${isSelected ? '' : 'cursor-pointer'}`}
                onClick={toggleOpenHandler(index)}>
              {/* Bar */}
              <div className={`flex flex-col gap-[14px] items-center`}>
                <div
                    className={`min-w-[12px] min-h-[12px] mt-[6px] rounded-[50%] border-[2px] duration-[400ms] ${isSelected ? "border-[rgb(255,108,122)] bg-[rgb(255,108,122)]" : "border-[rgb(199,210,216)]"}`}></div>
                {index !== portfolioProcessList.length-1 && <div
                    className={`${isSelected ? "bg-[rgb(255,108,122)]" : "bg-[rgb(199,210,216)]"} transition-all w-[2px] h-full min-h-[28px] duration-[400ms] rounded-[100px]`}></div>}
              </div>
              {/* 3번째 높이만 120*/}
              <div
                  className={`flex flex-col gap-[16px] w-full ${isSelected ? 'h-[368px]' : 'h-[62px]'} transition-all duration-[400ms] overflow-hidden ease`}>
                <div className={"flex gap-[12px] w-full"}>
                  <div className={"flex flex-col gap-[6px] w-full"}>
                    <h1 className={`relative font-[600] text-[18px] leading-[25px] ${isSelected ? 'text-[rgb(58,62,65)]' : 'text-[rgb(157,167,174)]'}`}>{item.title}</h1>
                    <ul className={`overflow-hidden ${isSelected ? 'opacity-100' : 'opacity-0'} transition-all duration-[400ms] break-words list-none`}>
                      <li className={"text-[14px] leading-[22px] text-[rgb(129,137,143)] flex gap-[9px] font-[400]"}>
                        <p>{item.description}</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {isSelected ? <UpArrowIcon/> : <DownArrowIcon/>}
                  </div>
                </div>
                {/*아마 모바일 */}
                <div className={"lg:flex lg:w-full lg:flex-col lg:gap-[16px] lg:relative"}>
                  <div className={"h-[192px] rounded[[12px] w-full bg-cover bg-center bg-no-repeat"} style={{
                    backgroundImage: `url(${getImageUrlByNumber(index)})`
                  }}></div>
                  {portfolioProcessList[index]?.figCaption &&
                      <p className={"font-[400] text-[13px] leading-[20px] text-[#81898F]"}>
                        {portfolioProcessList[index]?.figCaption}
                      </p>}
                </div>
              </div>
            </div>
          })}
        </div>
      </>
  );
};

const getImageUrlByNumber = (number: number) => {
  switch (number) {
    case 0:
      return "https://static.spartacodingclub.kr/nbcamp/landing/uxuiLanding/portfolioProcess/career_program_1_mo.webp";
    case 1:

      return "https://static.spartacodingclub.kr/nbcamp/landing/uxuiLanding/portfolioProcess/career_program_2_mo.webp";
    case 2:

      return "https://static.spartacodingclub.kr/nbcamp/landing/uxuiLanding/portfolioProcess/career_program_3_mo.webp";
    case 3:

      return "https://static.spartacodingclub.kr/nbcamp/landing/uxuiLanding/portfolioProcess/career_program_4_mo.webp";
    default:
      return '';
  }
}

