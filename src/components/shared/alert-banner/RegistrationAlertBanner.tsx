'use client';

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import SharedImage from "@/assets/images/shared/share-link-white.webp";

type Props = {
  text: string;
  rest: number;
  total: number;
  startObserverId: string;
  endObserverId:string;
}


export const RegistrationAlertBanner = ({text, rest, total,startObserverId, endObserverId}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startObserveElem = document.getElementById(startObserverId);
    const endObserveElem = document.getElementById(endObserverId);

    const startObserverOption: IntersectionObserverInit = {
      root: null, // 뷰포트를 기준으로
      rootMargin: '0px', // 추가적인 마진 값 없음
      threshold: [0], // 요소가 0% 화면에 보이기 시작하면 트리거
    } as IntersectionObserverInit;

    const endObserverOption: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0.2, 1]
    } as IntersectionObserverInit;

    const handleStartIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === startObserverId) {
          if (entry.isIntersecting) {
            setIsVisible(true); // gameProject가 보이면 배너를 표시
          }
        }
      });
    };

    const handleEndIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === endObserverId) {
          // gameFAQ가 20% 이상 보이면 배너를 숨김
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(false); // 배너 숨김
          }
        }
      });
    };


    const startObserver = new IntersectionObserver(handleStartIntersection, startObserverOption);
    const endObserver = new IntersectionObserver(handleEndIntersection, endObserverOption);

    if (startObserveElem) {
      startObserver.observe(startObserveElem);
    }
    if (endObserveElem) {
      endObserver.observe(endObserveElem);
    }

    if (startObserveElem && startObserveElem.getBoundingClientRect().top < window.innerHeight * 0.5) {
      setIsVisible(true);
    }

    if (endObserveElem && endObserveElem.getBoundingClientRect().top < window.innerHeight * 0.5) {
      setIsVisible(false);
    }

    return () => {
      startObserver.disconnect();
      endObserver.disconnect();
    };
  }, []);
  if (!isVisible) return null;
  return (
      <div
          className={"flex z-[19] fixed w-full bottom-0 bg-[rgba(0,0,0,0.76)] shadow-alert-banner backdrop-blur-[10px] px-[12px] py-[16px] transition duration-200 h-[76px] lg:bottom-[12px] lg:py-[12px] lg:px-[24px] lg:rounded-[8px] lg:max-w-[760px] lg:left-[50%] lg:translate-x-[-50%] "}>
        <div className={"flex items-center my-0 mx-auto justify-between h-[52px] w-full"}>
          <div
              className={"flex flex-col font-[500] text-[13px] leading-[21px] text-white lg:block lg:font-[600] lg:text-[16px] lg:leading-[26px]"}>
            {text}
            <span className={"text-[#FF6666] mt-[2px] lg:ml-[8px]"}>남은 자리 {rest}/{total}</span>
          </div>
          <div className={"flex gap-[6px]"}>
            <button
                className={"border-none flex justify-center items-center w-[52px] h-[52px] rounded-[8px] bg-[#5F666B] p-0 m-0"}>
              <Image src={SharedImage} alt={""} width={20} height={20}/>
            </button>
            <Link id={"floatingCta"} href={"https://nbcamp.spartacodingclub.kr/apply?track=game"}>
              <button
                  className={"text-center py-[13px] px-[16px] w-fit font-[600] text-[14px] leading-[22px] h-full text-white block rounded-[8px] border-none lg:w-fit lg:min-w-[220px] bg-[#E8344E] m-0 lg:text-[16px] lg:leading[26px]"}>
                참가 신청하기
              </button>
            </Link>

          </div>
        </div>
      </div>
  );
};

