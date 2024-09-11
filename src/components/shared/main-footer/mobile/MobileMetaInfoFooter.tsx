"use client";
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import KaKao from "@/assets/images/sns/kakao.webp";
import NaverBlog from "@/assets/images/sns/naver-blog.webp";
import Instagram from "@/assets/images/sns/instagram.svg";
import Youtube from "@/assets/images/sns/youtube.webp";
import Badge from "@/assets/images/sns/badge.webp";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";

export const MobileMetaInfoFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
      <>
        <section className={"flex items-center gap-[16px]"}>
          <Link className={"p-[4px] text-mainHeadingTextColor text-[13px] leading-[20px] cursor-pointer font-bold"}
                href={"https://teamsparta.notion.site/7b1dc644460946f08bab08b794de685f"}
                target={"_blank"}>개인정보처리방침</Link>
          <Link className={"p-[4px] text-subTextColor text-[13px] leading-[20px] cursor-pointer"}
                href={"https://teamsparta.notion.site/247d57da1322424d8e8c551df21a048e"} target={"_blank"}>서비스
            이용약관</Link>
          <Link className={"p-[4px] text-subTextColor text-[13px] leading-[20px] cursor-pointer"}
                href={"https://support.spartacodingclub.kr/"} target={"_blank"}>고객센터</Link>
        </section>
        <section className={"flex gap-[24px] lg:gap-[32px] flex-col lg:flex-row"}>
          <div className={"flex items-center gap-[6px]"}>
            <Link href={"https://pf.kakao.com/_QXQjG"}>
              <Image src={KaKao} alt={"카카오"} width={32} height={32}/>
            </Link>
            <Link
                href={"https://m.blog.naver.com/PostList.nhn?blogId=spartacoding&categoryName=%EC%88%98%EA%B0%95%EC%83%9D%C2%A0%EC%86%94%EC%A7%81%ED%9B%84%EA%B8%B0&categoryNo=6&logCode=0&tab=1"}>
              <Image src={NaverBlog} alt={"네이버 블로그"} width={32} height={32}/>
            </Link>
            <Link href={"https://www.instagram.com/spartacodingclub/"}>
              <Image src={Instagram} alt={"인스타그램"} width={32} height={32}/>
            </Link>
            <Link href={"https://www.youtube.com/channel/UC2Fh3XoQYNYTba-cigq5cAA"}>
              <Image src={Youtube} alt={"유튜브"} width={32} height={32}/>
            </Link>
          </div>
          <div className={"flex items-center gap-[12px]"}>
            <Image src={Badge} width={36} height={36} alt={"브랜드 대상"} className={"flex items-center gap-[12px]"}/>
            <p className={"text-[13px] leading-[20px] text-metaInfoTextGrayColor"}>
              2022-23 올해의 브랜드 대상
              <br/>
              코딩교육 부문 2년 연속 1위
            </p>
          </div>
        </section>
        <section className={"text-[12px] leading-[18px] text-metaInfoTextGrayColor flex flex-col gap-[4px]"}>
          <div className={"flex gap-[2px] items-center cursor-pointer"} onClick={toggleIsOpen}>
            <p>팀스파르타(주) 사업자 정보</p>
            {isOpen ?<UpArrowIcon strokeColor={"#9DA7AE"} className={"w-[16px] h-[16px]"} /> :<DownArrowIcon strokeColor={"#9DA7AE"} className={"w-[16px] h-[16px]"}/>}
          </div>
          {isOpen && <p>
            대표자 : 이범규ㅣ사업자 등록번호 : 783-86-01715ㅣ통신판매업 신고번호 : 2020-서울강남-02300ㅣ평생교육시설 신고번호 : 제 661호
            <br/>
            주소 : 서울특별시 강남구 테헤란로44길 8 12층ㅣ이메일 : contact@teamsparta.coㅣ전화 : 1522-8016
          </p>}
        </section>
        <p className={"text-metaInfoTextGrayColor text-[12px] leading-[18px] font-[500]"}>Copyright ©2024 TEAMSPARTA.
          All rights reserved.</p>
      </>
  );
};

