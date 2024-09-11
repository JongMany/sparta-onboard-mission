import React from 'react';
import Link from "next/link";

export const PcLinkContainer = () => {
  return (
      <section className={"lg:w-[576px] h-auto lg:flex lg:gap-[32px]"}>

        <div className={"flex flex-col gap-[8px] w-[120px]"}>
          <h5 className={"text-mainHeadingTextColor text-[16px] leading-[26px] font-bold"}>부트캠프</h5>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/ai"}>AI 서비스
            개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/frontend"}>프론트엔드
            개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/backend"}>백엔드
            개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/game"}>게임 개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/ios"}>iOS 앱
            개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/android"}>Flutter 앱
            개발</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/advanced-java"}>단기심화
            Java</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/venture"}>앱
            창업</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/data"}>데이터 분석</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} href={"/uxui"}>UX/UI
            디자인</Link>

        </div>
        <div className={"flex flex-col gap-[8px] w-[120px]"}>
          <h5 className={"text-mainHeadingTextColor text-[16px] leading-[26px] font-bold"}>취업 지원</h5>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"}
                href={"https://nbcamp.spartacodingclub.kr/job-support"} target={"_blank"}>취업 지원</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"}
                href={"https://intellipick.spartacodingclub.kr/"} target={"_blank"}>신입 개발자 채용</Link>
        </div>
        <div className={"flex flex-col gap-[8px] w-[120px]"}>
          <h5 className={"text-mainHeadingTextColor text-[16px] leading-[26px] font-bold"}>블로그</h5>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"/https://nbcamp.spartacodingclub.kr/blog/category/%EC%B7%A8%EC%97%85%EC%84%B1%EA%B3%B5%ED%9B%84%EA%B8%B0"}>취업
            후기</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"https://nbcamp.spartacodingclub.kr/blog/category/%EB%A9%98%ED%86%A0%EC%9D%B8%ED%84%B0%EB%B7%B0"}>멘토
            인터뷰</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"https://nbcamp.spartacodingclub.kr/blog/category/%EC%95%84%ED%8B%B0%ED%81%B4"}>아티클</Link>
        </div>
        <div className={"flex flex-col gap-[8px] w-[120px]"}>
          <h5 className={"text-mainHeadingTextColor text-[16px] leading-[26px] font-bold"}>ETC</h5>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"https://spartacodingclub.career.greetinghr.com/"}>튜터 지원</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"https://career.spartacodingclub.kr/"}>팀스파르타 채용</Link>
          <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"}
                href={"https://sparta-career-b2b.oopy.io/"}>협력사 지원</Link>
        </div>
      </section>
  );
};

