'use client';

import React, {useEffect} from 'react';
import {useScrollDirection} from "@/hooks/shared/useScrollDirection";
import Link from "next/link";
import {useHash} from "@/hooks/shared/useHash";
import {scrollToSection} from "@/utils/shared/scrollToSection";

const SubNavbar = () => {
  const direction = useScrollDirection();
  const hash = useHash();

  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash])

  // TODO: 특정 영역에 들어가면 빨간 색상
  return (
      <>
        <section id={"gameHero"}></section>
        <div
            className={`sticky border-b-[1px] border-b-[rgba(214, 224, 230)] bg-white overflow-x-scroll scrollbar-hide z-20 pt-[10px] flex items-start justify-center gap-[20px] ${direction === "up" ? "top-[60px]" : "top-0"}`}>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <button
                  onClick={() => scrollToSection('gameProject')}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>프로젝트</button>
            <div
                className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <button
                  onClick={() => scrollToSection('gameWhyNow')}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>트랙
              소개</button>
            <div
                className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <button
                  onClick={() => scrollToSection('gameCurriculum')}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>커리큘럼</button>
            <div
                className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <button
                  onClick={() => scrollToSection('gameCareerSupport')}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>취업
              지원</button>
            <div></div>
          </div>
          <div>
            <button
                  onClick={() => scrollToSection('gameOverview')}
                  className={"whitespace-nowrap flex py-[6px] px-[10px] justify-center items-center gap-[10px] font-[400] text-[16px] leading-[26px] text-[rgb(157,167,174)] transition duration-300 ease-in-out rounded-[10px] relative hover:bg-[rgb(242,246,248)] hover:text-[rgb(58,62,65)]"}>모집개요</button>
            <div
                className={"w-full h-[2px] bg-[rgb(255,108,122)] opacity-0 transition-opacity duration-300 ease-in-out"}></div>
          </div>
        </div>
      </>
  );
};

export default SubNavbar;