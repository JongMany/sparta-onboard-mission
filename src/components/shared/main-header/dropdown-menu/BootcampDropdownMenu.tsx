import React from 'react';
import {DropdownMenuContainer} from "@/components/shared/main-header/dropdown-menu/DropdownMenuContainer";
import Link from "next/link";

type Props = {
  isHover: boolean;
}

const developmentMenuList = [
  {
    field: '앱 창업',
    isRecruit: true,
    link: '/venture'
  },{
    field: 'Flutter 앱 개발',
    isRecruit: true,
    link: '/android'
  },{
    field: '앱 창업',
    isRecruit: true,
    link: '/venture'
  },{
    field: 'iOS 앱 개발',
    isRecruit: true,
    link: '/ios'
  },{
    field: '게임 개발',
    isRecruit: true,
    link: '/game'
  },{
    field: '백엔드 개발',
    isRecruit: true,
    link: '/backend'
  },{
    field: '프론트엔드 개발',
    isRecruit: true,
    link: '/frontend'
  },{
    field: 'AI 서비스 개발',
    isRecruit: true,
    link: '/ai'
  },{
    field: '단기심화 Java',
    isRecruit: false,
    link: '/advanced-java'
  },

]

const designAndDataMenuList = [
  {
    field: '데이터 분석',
    isRecruit: false,
    link: '/data'
  },{
    field: 'UX/UI 디자인',
    isRecruit: true,
    link: '/uxui'
  }
]
export const BootcampDropdownMenu = ({isHover}: Props) => {
  return (
      <DropdownMenuContainer isHover={isHover}>
        <div className={"flex flex-col w-[140px] items-start gap-[6px]"}>
          <label className={"font-[400] text-[12px] leading-[18px] text-[#81898F]"}>개발</label>
          <ul className={"flex flex-col items-start gap-[6px] self-stretch"}>
            {
              developmentMenuList.map((item) => (
                  <li key={item.field}>
                    <Link href={item.link} className={"py-[6px] self-stretch flex items-center gap-[4px]"}>
                      <span className={"font-[400] text-[14px] leading-[22px] text-[rgb(20,22,23)]"}>{item.field}</span>
                      {item.isRecruit && <span
                          className={"flex py-[1px] px-[4px] justify-center items-center gap-[10px] rounded-[4px] bg-[rgb(255,241,244)] text-[10px] font-[600] leading-[150%] text-[rgb(255,108,122)]"}>모집중</span>}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
        <div className={"border-l-[1px] border-[#EEF3F6] h-[218px]"}></div>
        <div className={"flex flex-col w-[140px] items-start gap-[6px]"}>
          <label className={"font-[400] text-[12px] leading-[18px] text-[#81898F]"}>디자인/데이터</label>
          <ul className={"flex flex-col items-start gap-[6px] self-stretch"}>
            {
              designAndDataMenuList.map((item) => (
                  <li key={item.field}>
                    <Link href={item.link} className={"py-[6px] self-stretch flex items-center gap-[4px]"}>
                      <span className={"font-[400] text-[14px] leading-[22px] text-[rgb(20,22,23)]"}>{item.field}</span>
                      {item.isRecruit && <span
                          className={"flex py-[1px] px-[4px] justify-center items-center gap-[10px] rounded-[4px] bg-[rgb(255,241,244)] text-[10px] font-[600] leading-[150%] text-[rgb(255,108,122)]"}>모집중</span>}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
      </DropdownMenuContainer>
  );
};

