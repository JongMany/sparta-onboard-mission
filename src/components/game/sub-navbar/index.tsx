'use client';

import React from 'react';
import {useScrollDirection} from "@/hooks/shared/useScrollDirection";
import Link from "next/link";

const SubNavbar = () => {
  const direction = useScrollDirection();
  return (
      <>
        <section id={"gameHero"}></section>
        <div
            className={`sticky border-b-[1px] border-b-[rgba(214, 224, 230)] overflow-x-scroll scrollbar-hide z-20 pt-[10px] flex items-start justify-center gap-[20px] ${direction === "up" ? "top-[60px]" : "top-0"}`}>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <Link href={"#gameProject"}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>프로젝트</Link>
            <div className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <Link href={"#gameProject"}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>트랙 소개</Link>
            <div className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <Link href={"#gameProject"}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>커리큘럼</Link>
            <div className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <Link href={"#gameProject"}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>취업 지원</Link>
            <div></div>
          </div>
          <div>
            <Link href={"#gameProject"}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>모집개요</Link>
            <div className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
        </div>
      </>
  );
};

export default SubNavbar;