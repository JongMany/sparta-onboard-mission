'use client';
import React, {useEffect, useState} from 'react';
import {LeftArrowIcon} from "@/components/shared/icon/LeftArrowIcon";
import {RightArrowIcon} from "@/components/shared/icon/RightArrowIcon";

import InterviewImage1 from "@/assets/images/game/information/employed-senior-interview/interview1.webp";
import InterviewImage2 from "@/assets/images/game/information/employed-senior-interview/interview2.webp";
import InterviewImage3 from "@/assets/images/game/information/employed-senior-interview/interview3.webp";
import InterviewImage4 from "@/assets/images/game/information/employed-senior-interview/interview4.webp";
import InterviewImage5 from "@/assets/images/game/information/employed-senior-interview/interview5.webp";
import Image from "next/image";
import {useSwipe} from "@/hooks/shared/useSwipe";

const translateList = [0, -288, -576, -600];

const interviewList = [
  {
    imageSrc: InterviewImage1,
    description: "“지방에 살면서 양질의 교육과 취업 준비를 내 방에서 가능했습니다.”",
    alt: '음악전공에서 개발자로',
    outLink: "https://www.youtube.com/watch?v=XpTDqXA5Cns"
  },
  {
    imageSrc: InterviewImage2,
    description: "“모든 부트캠프를 비교해보고 가장 집중할 수 있는 곳을 선택했어요.”",
    alt: '공공지관 재직사에서 개발자로',
    outLink: 'https://nbcamp.spartacodingclub.kr/blog/%EB%AA%A8%EB%93%A0-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84%EB%A5%BC-%EB%B9%84%EA%B5%90%ED%95%B4%EB%B3%B4%EA%B3%A0-%EA%B0%80%EC%9E%A5-%EB%AA%B0%EC%9E%85%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EA%B3%B3%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%96%B4%EC%9A%94-1453'
  },
  {
    imageSrc: InterviewImage3,
    description: "“매니저님들의 밀착관리가 강점이에요. 정말 취업할 때까지 지원해 주셨어요.”",
    alt: '영업사원에서 개발자로',
    outLink: "https://nbcamp.spartacodingclub.kr/blog/%EA%B5%AD%EB%B9%84%EC%A7%80%EC%9B%90-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84-%EC%A4%91-%EB%82%B4%EC%9D%BC%EB%B0%B0%EC%9B%80%EC%BA%A0%ED%94%84%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0-1432"
  },
  {
    imageSrc: InterviewImage4,
    description: "“2주 만에 취업. 내일배움캠프 덕분에 제가 좋아하는 일도 찾고, 취업도 했죠”",
    alt: '경찰학과에서 개발자로',
    outLink: "https://nbcamp.spartacodingclub.kr/blog/%EC%88%98%EB%A3%8C-2%EC%A3%BC%EB%A7%8C%EC%97%90-%EC%B7%A8%EC%97%85%ED%95%9C-%EB%B9%84%EA%B2%B0%EC%9D%80%EC%9A%94--1438",
  },
  {
    imageSrc: InterviewImage5,
    description: "“튜터님들의 진정성 넘치는 모습을 보고 믿고 끝까지 열심히 한 결과가 아닐까요?”",
    alt: '수학강사에서 서버엔지니어로',
    outLink: "https://nbcamp.spartacodingclub.kr/blog/%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%97%AD%EB%9F%89%EC%9D%84-%EB%8D%94%ED%95%B4-%EC%82%BC%EC%84%B1-sdi%EC%97%90-%EC%B7%A8%EC%97%85%ED%95%A0-%EC%88%98-%EC%9E%88%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4-1520"

  },
]

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
              className={"py-[100px] flex flex-col justify-center items-center overflow-hidden bg-[rgb(20,22,23)]"}>
            <div className={"w-full flex flex-col justify-center max-w-[820px] items-start gap-[60px]"}>
              <div className={"w-full self-start flex items-end justify-between gap-[20px]"}>
                <div className={"flex flex-col justify-center items-start gap-[12px]"}>
                  <h3 className={"relative font-[600] text-[20px] leading-[26px] text-[rgb(255,108,122)]"}>취업후기</h3>
                  <h2 className={"relative whitespace-pre-wrap font-[700] text-[32px] leading-[45px] text-white"}>선배
                    수료생들의<br/>취업 후기를 확인해 보세요</h2>
                </div>
                <div className={"flex items-start gap-[24px]"}>
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

