'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";

export const MobileLinkContainer = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(Array(4).fill(false));

  const toggleOpenStatus = (num: number) => () => {
    setIsOpenStatus(prev => prev.map((item, idx) => idx === num ? !item : item))
  }

  return (
      <section className={"lg:w-[576px] h-auto lg:flex lg:gap-[32px]"}>
        <div
            className={"border-t-[1px] border-[rgb(228,235,240)] flex flex-col cursor-pointer font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
            onClick={toggleOpenStatus(0)}>
          <div
              className={"flex justify-between items-center py-[16px] px-[4px] w-full font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}>
            <p>부트캠프</p>
            {isOpenStatus[0] ? <UpArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/> :
                <DownArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/>}
          </div>
          {isOpenStatus[0] && <div className={"flex flex-col gap-[6px] py-[16px] px-[12px] w-full"}>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/ai"}>AI 서비스
              개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"}  href={"/frontend"}>프론트엔드
              개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"}  href={"/backend"}>백엔드
              개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/game"}>게임 개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/ios"}>iOS 앱
              개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/android"}>Flutter 앱
              개발</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/advanced-java"}>단기심화
              Java</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/venture"}>앱
              창업</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/data"}>데이터 분석</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/uxui"}>UX/UI
              디자인</Link>
          </div>}
        </div>


        <div
            className={"border-t-[1px] border-[rgb(228,235,240)] flex flex-col cursor-pointer font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
            onClick={toggleOpenStatus(1)}>
          <div
              className={"flex justify-between items-center py-[16px] px-[4px] w-full font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}>
            <p>취업 지원</p>
            {isOpenStatus[1] ? <UpArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/> :
                <DownArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/>}
          </div>
          {isOpenStatus[1] && <div className={"flex flex-col gap-[6px] py-[16px] px-[12px] w-full"}>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"https://nbcamp.spartacodingclub.kr/job-support"}>취업 지원</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"}  href={"https://intellipick.spartacodingclub.kr/"}>신입 개발자 채용</Link>
          </div>}
        </div>
        <div
            className={"border-t-[1px] border-[rgb(228,235,240)] flex flex-col cursor-pointer font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
            onClick={toggleOpenStatus(2)}>
          <div
              className={"flex justify-between items-center py-[16px] px-[4px] w-full font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}>
            <p>블로그</p>
            {isOpenStatus[2] ? <UpArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/> :
                <DownArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/>}
          </div>
          {isOpenStatus[2] && <div className={"flex flex-col gap-[6px] py-[16px] px-[12px] w-full"}>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"/https://nbcamp.spartacodingclub.kr/blog/category/%EC%B7%A8%EC%97%85%EC%84%B1%EA%B3%B5%ED%9B%84%EA%B8%B0"}>취업 후기</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"}  href={"https://nbcamp.spartacodingclub.kr/blog/category/%EB%A9%98%ED%86%A0%EC%9D%B8%ED%84%B0%EB%B7%B0"}>멘토 인터뷰</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"}  href={"https://nbcamp.spartacodingclub.kr/blog/category/%EC%95%84%ED%8B%B0%ED%81%B4"}>아티클</Link>
          </div>}
        </div>
        <div
            className={"border-t-[1px] border-b-[1px] border-[rgb(228,235,240)] flex flex-col cursor-pointer font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
            onClick={toggleOpenStatus(3)}>
          <div
              className={"flex justify-between items-center py-[16px] px-[4px] w-full font-[500] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}>
            <p>부트캠프</p>
            {isOpenStatus[3] ? <UpArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/> :
                <DownArrowIcon strokeColor={"#B4BFC6"} className={"w-[16px] h-[16px]"}/>}
          </div>
          {isOpenStatus[3] && <div className={"flex flex-col gap-[6px] py-[16px] px-[12px] w-full"}>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"https://spartacodingclub.career.greetinghr.com/"}>튜터 지원</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"https://career.spartacodingclub.kr/"}>팀스파르타 채용</Link>
            <Link className={"text-[rgb(129,137,143)] text-[12px] cursor-pointer leading-[18px] p-[4px] font-[400]"} href={"https://sparta-career-b2b.oopy.io/"}>협력사 지원
              디자인</Link>
          </div>}
        </div>
      </section>
  );
};

