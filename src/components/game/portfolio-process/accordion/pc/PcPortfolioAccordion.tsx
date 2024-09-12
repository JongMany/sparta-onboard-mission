import React, {useState} from 'react';
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";
import {portfolioProcessList} from "@/components/game/portfolio-process/accordion/PortfolioProcessAccordion";
import {PortfolioProcessImageSelector} from "@/components/game/portfolio-process/accordion/PortfolioImageSelector";

export const PcPortfolioAccordion = () => {
  const [selectedItemNumber, setSelectedItemNumber] = useState(0);

  const toggleSelectedItemNumberHandler = (number: number) => () => {
    setSelectedItemNumber(number);
  }
  return (
      <>
        <div className={"hidden lg:flex flex-col gap-[6px] w-full"}>
          {portfolioProcessList.map((item, index) => <div
              key={item.title}
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
                  {selectedItemNumber === index ? <UpArrowIcon/> : <DownArrowIcon/>}
                </div>
              </div>
              {/*아마 모바일 */}
              <div className={"hidden"}></div>
            </div>
          </div>)}
        </div>
        <div className={"hidden lg:flex lg:w-full lg:h-[486px] lg:flex-col lg:gap-[16px] lg:relative"}>
          <PortfolioProcessImageSelector selectedItemNumber={selectedItemNumber}/>
          {portfolioProcessList[selectedItemNumber]?.figCaption &&
              <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(129,137,143)]"}>
                {portfolioProcessList[selectedItemNumber]?.figCaption}
              </p>}
        </div>
      </>
  )
      ;
};

