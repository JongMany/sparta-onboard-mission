import React from 'react';
import Link from "next/link";
import Image from "next/image";
import SharedImage from "@/assets/images/shared/share-link-white.webp";

type Props = {
  text: string;
  rest: number;
  total: number;
}


export const RegistrationAlertBanner = ({
                                          text,
                                          rest,
                                          total
                                        }: Props) => {
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
            <button className={"border-none flex justify-center items-center w-[52px] h-[52px] rounded-[8px] bg-[#5F666B] p-0 m-0"}>
              <Image src={SharedImage} alt={""} width={20} height={20}/>
            </button>
            <Link id={"floatingCta"} href={"https://nbcamp.spartacodingclub.kr/apply?track=game"} >
              <button className={"text-center py-[13px] px-[16px] w-fit font-[600] text-[14px] leading-[22px] h-full text-white block rounded-[8px] border-none lg:w-fit lg:min-w-[220px] bg-[#E8344E] m-0 lg:text-[16px] lg:leading[26px]"}>
                참가 신청하기
              </button>
            </Link>

          </div>
        </div>
      </div>
  );
};

