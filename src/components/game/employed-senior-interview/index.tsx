'use client';
import React, {useEffect, useState} from 'react';
import {LeftArrowIcon} from "@/components/shared/icon/LeftArrowIcon";
import {RightArrowIcon} from "@/components/shared/icon/RightArrowIcon";

import Image from "next/image";
import {useSwipe} from "@/hooks/shared/useSwipe";
import {interviewList} from "@/constants/game";

const translateList = [0, -288, -576, -600];



export const EmployedSeniorInterviewSection = () => {
  const [activeNum, setActiveNum] = useState(0);

  const [swiped, setSwiped] = useState(false);

  const isInitial = activeNum === 0;
  const isEnd = activeNum === translateList.length - 1;
  const clickNextButtonHandler = () => {
    if (isEnd) return;
    setSwiped(true);
    setActiveNum(prev => prev + 1);
  }
  const clickPrevButtonHandler = () => {
    if (isInitial) return
    setSwiped(true);
    setActiveNum(prev => prev - 1);
  }

  const {
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    moveDistance
  } = useSwipe(clickPrevButtonHandler, clickNextButtonHandler, 50);

  useEffect(() => {
    if (swiped) {
      setTimeout(() => {
        setSwiped(false);
      }, 300);
    }
  }, [swiped]);

  return (
      <section className={"relative"} id={"gameEmployedSeniorInterview"}>
        <div id={"output"}>
          <section
              className={"py-[80px] px-[16px] lg:py-[100px] lg:px-0 flex flex-col justify-center items-center overflow-hidden bg-[rgb(20,22,23)]"}>
            <div className={"w-full flex flex-col justify-center max-w-[600px] lg:max-w-[820px] items-center lg:items-start gap-[40px] lg:gap-[60px]"}>
              <div className={"w-full self-start flex items-end justify-between gap-[20px]"}>
                <div className={"flex flex-col justify-center items-start lg:gap-[12px] gap-[8px]"}>
                  <h3 className={"relative font-[600] text-[16px] lg:text-[20px] leading-[22px] lg:leading-[26px] text-[rgb(255,108,122)]"}>취업후기</h3>
                  <h2 className={"relative whitespace-pre-wrap font-[700] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[45px] text-white"}>선배
                    수료생들의<br/>취업 후기를 확인해 보세요</h2>
                </div>
                <div className={"hidden lg:flex items-start gap-[24px]"}>
                  <button className={`${isInitial ? 'cursor-not-allowed opacity-20' : 'opacity-100'} text-white`}
                          disabled={isInitial} onClick={clickPrevButtonHandler}>
                    <LeftArrowIcon/>
                  </button>
                  <button className={`${isEnd ? 'cursor-not-allowed opacity-20' : 'opacity-100'} text-white`}
                          disabled={isEnd} onClick={clickNextButtonHandler}>
                    <RightArrowIcon/>
                  </button>
                </div>
              </div>
              {/* TODO: Swiper*/}
              <div className={"w-full overflow-visible touch-pan-y ml-auto mr-auto relative list-none p-0"}>
                <div
                    className={`relative w-full h-full z-[1] flex transition-transform ${swiped ? "duration-300" : `duration-0`} delay-0`}
                    style={{
                      transform: `translate3d(${translateList[activeNum] - moveDistance}px,0px,0px)`,
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchMove={handleMouseMove}
                    onTouchEnd={handleMouseUp}
                >
                  {interviewList.map((item) => (
                      <div
                          key={item.description}
                          className={`mr-[20px] w-[268px] h-[366px] translate-z-0 backface-hidden shrink-0 relative transition-transform block`}
                      >
                        <div
                            className={"h-[366px] w-[268px] overflow-hidden rounded-[12px] bg-white border-white shadow-interview-item"}>
                          <div className={"h-[294px] relative block overflow-clip select-none"}>
                            <Image src={item.imageSrc} alt={item.alt} width={268} height={294}
                                   className={"text-transparent select-none pointer-events-none"} style={{}} onClick={() => {
                              window.open(item.outLink, '_blank');
                            }}/>
                          </div>
                          <div
                              className={"py-[14px] px-[20px] break-keep font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>{item.description}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>

          </section>
        </div>
      </section>
  );
};

