import Link from "next/link";
import Image from "next/image";
import CallIcon from "@/assets/images/calling.webp";
import KaKao from "@/assets/images/sns/kakao.webp";
import NaverBlog from "@/assets/images/sns/naver-blog.webp";
import Instagram from "@/assets/images/sns/instagram.svg"
import Youtube from "@/assets/images/sns/youtube.webp";
import Badge from "@/assets/images/sns/badge.webp"

export const MainFooter = () => {
  return <footer className={"flex justify-center py-[40px] px-[60px]"}>
    <div className={"w-full min-w-[328px] flex flex-col gap-[24px] max-w-[1152px]"}>
      <section className={"w-full flex gap-[24px] justify-between"}>
        <section className={"flex flex-col gap-[12px]"}>
          <h5 className={"font-bold text-[16px] leading-[26px] text-[#5F666B]"}>고객센터</h5>
          <p className={"text-[13px] leading-[20px] text-[#81898F]"}>모든 상담은 채팅 상담을 통해 우선 접수됩니다.</p>
          <p className={"text-[13px] leading-[20px] text-[#81898F]"}>
            채팅 상담 운영시간:
            <br/>
            월요일 14:00~17:30
            <br/>
            화~금요일 10:30~17:30
          </p>
          <p className={"text-[13px] leading-[20px] text-[#81898F]"}>
            (점심시간 12:30~14:00 / 주말, 공휴일 휴무)
          </p>
          <p className={"text-[13px] leading-[20px] text-[#81898F]"}>
            전화 상담 희망 시,
            <br/>
            채팅 상담을 통해 신청 부탁드립니다.
          </p>
          <div
              className={"flex gap-[6px] p-[4px] cursor-pointer items-center text-[14px] leading-[22px] text-[#5F666B]"}>
            <Image src={CallIcon} alt={"전화상담"} width={16} height={16}/>
            <h5>채팅 상담 바로가기</h5>
          </div>
        </section>
        <section className={"w-[576px] flex gap-[32px]"}>
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
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"/https://nbcamp.spartacodingclub.kr/blog/category/%EC%B7%A8%EC%97%85%EC%84%B1%EA%B3%B5%ED%9B%84%EA%B8%B0"}>취업 후기</Link>
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"https://nbcamp.spartacodingclub.kr/blog/category/%EB%A9%98%ED%86%A0%EC%9D%B8%ED%84%B0%EB%B7%B0"}>멘토 인터뷰</Link>
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"https://nbcamp.spartacodingclub.kr/blog/category/%EC%95%84%ED%8B%B0%ED%81%B4"}>아티클</Link>
          </div>
          <div className={"flex flex-col gap-[8px] w-[120px]"}>
            <h5 className={"text-mainHeadingTextColor text-[16px] leading-[26px] font-bold"}>ETC</h5>
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"https://spartacodingclub.career.greetinghr.com/"}>튜터 지원</Link>
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"https://career.spartacodingclub.kr/"}>팀스파르타 채용</Link>
            <Link className={"text-subTextColor text-[13px] cursor-pointer leading-[20px]"} target={"_blank"} href={"https://sparta-career-b2b.oopy.io/"}>협력사 지원</Link>
          </div>
          <div>
            <h5></h5>
          </div>
        </section>
      </section>
      <div className={"min-h-[1px] w-full bg-borderGrayColor"}></div>
      <section className={"flex flex-col gap-[16px] w-full"}>
        <div className={"flex justify-between"}>
          <section className={"flex items-center gap-[16px]"}>
            <Link className={"p-[4px] text-mainHeadingTextColor text-[13px] leading-[20px] cursor-pointer font-bold"} href={"https://teamsparta.notion.site/7b1dc644460946f08bab08b794de685f"} target={"_blank"}>개인정보처리방침</Link>
            <Link className={"p-[4px] text-subTextColor text-[13px] leading-[20px] cursor-pointer"} href={"https://teamsparta.notion.site/247d57da1322424d8e8c551df21a048e"} target={"_blank"}>서비스 이용약관</Link>
            <Link className={"p-[4px] text-subTextColor text-[13px] leading-[20px] cursor-pointer"} href={"https://support.spartacodingclub.kr/"} target={"_blank"}>고객센터</Link>
          </section>
          <section className={"flex gap-[32px]"}>
            <div className={"flex items-center gap-[6px]"}>
              <Link href={"https://pf.kakao.com/_QXQjG"}>
                <Image src={KaKao} alt={"카카오"} width={32} height={32} />
              </Link>
              <Link href={"https://m.blog.naver.com/PostList.nhn?blogId=spartacoding&categoryName=%EC%88%98%EA%B0%95%EC%83%9D%C2%A0%EC%86%94%EC%A7%81%ED%9B%84%EA%B8%B0&categoryNo=6&logCode=0&tab=1"}>
                <Image src={NaverBlog} alt={"네이버 블로그"} width={32} height={32} />
              </Link>
              <Link href={"https://www.instagram.com/spartacodingclub/"}>
                <Image src={Instagram} alt={"인스타그램"} width={32} height={32} />
              </Link>
              <Link href={"https://www.youtube.com/channel/UC2Fh3XoQYNYTba-cigq5cAA"}>
                <Image src={Youtube} alt={"유튜브"} width={32} height={32} />
              </Link>
            </div>
            <div className={"flex items-center gap-[12px]"}>
              <Image src={Badge} width={36} height={36} alt={"브랜드 대상"} className={"flex items-center gap-[12px]"} />
              <p className={"text-[13px] leading-[20px] text-metaInfoTextGrayColor"}>
                2022-23 올해의 브랜드 대상
                <br />
                코딩교육 부문 2년 연속 1위
              </p>
            </div>
          </section>
        </div>
        <section className={"text-[12px] leading-[18px] text-metaInfoTextGrayColor flex flex-col gap-[4px]"}>
          <p>팀스파르타(주) 사업자 정보</p>
          <p>
            대표자 : 이범규ㅣ사업자 등록번호 : 783-86-01715ㅣ통신판매업 신고번호 : 2020-서울강남-02300ㅣ평생교육시설 신고번호 : 제 661호
            <br/>
            주소 : 서울특별시 강남구 테헤란로44길 8 12층ㅣ이메일 : contact@teamsparta.coㅣ전화 : 1522-8016
          </p>
        </section>
        <p className={"text-metaInfoTextGrayColor text-[12px] leading-[18px] font-[500]"}>Copyright ©2024 TEAMSPARTA. All rights reserved.</p>
      </section>
    </div>
  </footer>
}