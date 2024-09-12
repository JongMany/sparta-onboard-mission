"use client";
import React, {useEffect, useState} from 'react';
import ThumbsUp from "@/assets/images/shared/thumbs-up.webp";
import Image from "next/image";
import {useSwipe} from "@/hooks/shared/useSwipe";
import {pcProjectResultList} from "@/constants/game";


const zIndexDepth = [
  'z-[1]',
  '-z-[22]',
  '-z-[45]',
  '-z-[68]',
  '-z-[91]'
]

const unitOfTranslate = 1150;

// 35 -1115 -2165
// 0, 1150, 2300
const PcProjectResultCarousel = () => {
  const [activeProjectNumber, setActiveProjectNumber] = useState(0);
  const [swiped, setSwiped] = useState(false);

  const isInitial = activeProjectNumber === 0;
  const isEnd = activeProjectNumber === pcProjectResultList.length - 1;

  useEffect(() => {
    if (swiped) {
      setTimeout(() => {
        setSwiped(false);
      }, 300);
    }
  }, [swiped]);

  const clickNextButtonHandler = () => {
    if (isEnd) return;
    setSwiped(true);
    setActiveProjectNumber(prev => prev + 1);
  }
  const clickPrevButtonHandler = () => {
    if (isInitial) return
    setSwiped(true);
    setActiveProjectNumber(prev => prev - 1);
  }
  const {handleMouseDown, handleMouseUp, handleMouseMove, moveDistance} = useSwipe(clickPrevButtonHandler, clickNextButtonHandler);

  const containerTranslateValue = -unitOfTranslate * activeProjectNumber + 35 - moveDistance;

  return (
      <section className={"hidden lg:flex lg:flex-col lg:gap-[40px]"}>
        {/*TODO: Swiper 추가하기*/}
        {/* Swiper */}
        <div
            className={"w-full overflow-visible touch-pan-y perspective-1200 ml-auto mr-auto relative list-none p-0 z-[1] block"}>
          <div
              className={`cursor-grab ${swiped ? "duration-300" : 'duration-0 delay-0'} transition-transform transform-style-3d relative w-full h-full z-[1] flex box-content ease-swiper`}
              style={{
                transform: `translate3d(${containerTranslateValue}px,0px,0px)`
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
          >
            {pcProjectResultList.map((item) => {
              const currentState = getCurrentCarouselState(item.num, activeProjectNumber);
              const diff = Math.abs(item.num - activeProjectNumber);
              const zIndex = zIndexDepth[diff];
              const correctionValue = getCorrectionValueByCurrentState(currentState, moveDistance);
              const sectionTranslateValue = diff * unitOfTranslate * -1 + correctionValue;

              return <div
                  key={item.title}
                  className={`${swiped ? "duration-300" : `duration-0`} ${zIndex} transition-transform mr-[400px] transform-style-3d relative shrink-0 block w-[750px] h-[388px] rotate-x-0 rotate-y-0 scale-1`}
                  style={{
                    transform: `translate3d(0px,0px,${sectionTranslateValue}px)`
                  }}>
                <section className={"relative flex flex-col gap-[12px] pb-0"}>
                  <div
                      className={"absolute z-[10] flex gap-[6px] p-[10px] justify-center items-center bg-[rgb(255,108,122)] text-white font-[600] whitespace-nowrap leading-[18px] text-[14px] ml-[20px] w-[118px] h-[38px]"}>
                    <Image src={ThumbsUp} alt={"우수프로젝트"} width={16} height={16} className={"text-transparent"}/>
                    <p>우수 프로젝트</p>
                  </div>
                  <section
                      className={`relative ${currentState === "active" ? 'opacity-100' : 'opacity-50'} block overflow-hidden shadow-video-item w-[750px] h-[388px] rounded-[20px] `}>
                    <div className={"block pt-[193.4%]"}></div>
                    <video playsInline={true} loop={true} autoPlay={true} controlsList="nodownload"
                           className="absolute inset-0 w-full h-full object-cover">
                      <source src={item.videoSource} type="video/mp4"/>
                    </video>
                  </section>
                  <p className={"font-[400] text-[14px] leading-[22px] opacity-50 text-white"}>{item.title}</p>
                </section>
              </div>
            })}
          </div>
        </div>
        <div className={"flex flex-start gap-[12px] justify-center mt-[40px]"}>
          {/*  Swiper */}
          <button
              className={`border-[1px] border-white cursor-pointer overflow-visible flex rounded-[100px] justify-center items-center p-[8px] ${isInitial ? 'opacity-20' : 'opacity-100'}`}
              disabled={isInitial} onClick={clickPrevButtonHandler}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_575_15936)">
                <path
                    d="M16.6673 9.66683H6.52565L11.184 5.0085L10.0007 3.8335L3.33398 10.5002L10.0007 17.1668L11.1757 15.9918L6.52565 11.3335H16.6673V9.66683Z"
                    fill="white"></path>
              </g>
              <defs>
                <clipPath id="clip0_575_15936">
                  <rect width="20" height="20" fill="none" transform="translate(0 0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
              className={`border-[1px] border-white cursor-pointer overflow-visible flex rounded-[100px] justify-center items-center p-[8px] ${isEnd ? 'opacity-20' : 'opacity-100'}`}
              disabled={isEnd} onClick={clickNextButtonHandler}>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_575_15937)">
                <path
                    d="M10.0007 3.8335L8.82565 5.0085L13.4757 9.66683H3.33398V11.3335H13.4757L8.82565 15.9918L10.0007 17.1668L16.6673 10.5002L10.0007 3.8335Z"
                    fill="white"></path>
              </g>
              <defs>
                <clipPath id="clip0_575_15937">
                  <rect width="20" height="20" fill="none" transform="translate(0 0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </section>
  );
};

const getCurrentCarouselState = (selectedProjectNum: number, currentProjectNum: number): 'active' | 'prev' | 'next' => {
  if (selectedProjectNum === currentProjectNum) return 'active';
  if (selectedProjectNum < currentProjectNum) return 'prev';
  else return 'next';
}

const getCorrectionValueByCurrentState = (currentState: 'prev' | 'active' | 'next', movement: number) => {
  switch (currentState) {
    case "prev":
      return movement * -1;
    case "active":
      return -1 * Math.abs(movement);
    case "next":
      return movement * -1;
  }
}

export default PcProjectResultCarousel;