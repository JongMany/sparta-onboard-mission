"use client";

import Image from "next/image";
import CallIcon from "@/assets/images/calling.webp";
import {useIsPc} from "@/hooks/shared/useIsPC";
import {MobileMetaInfoFooter} from "@/components/shared/main-footer/mobile/MobileMetaInfoFooter";
import {PcMetaInfoFooter} from "@/components/shared/main-footer/pc/PcMetaInfoFooter";
import {MobileLinkContainer} from "@/components/shared/main-footer/mobile/MobileLinkContainer";
import {PcLinkContainer} from "@/components/shared/main-footer/pc/PcLinkContainer";

export const MainFooter = () => {
  const isPc = useIsPc();

  return <footer
      className={"lg:flex lg:justify-center lg:items-center py-[34px] px-[16px] lg:py-[40px] lg:px-[60px] w-full border-t-[1px] border-[#E4EBF0] bg-white break-keep"}>
    <div className={"w-full min-w-[328px] flex flex-col gap-[24px] m-auto max-w-[600px] lg:max-w-[1152px]"}>
      <section className={"w-full flex flex-col lg:flex-row gap-[24px] lg:justify-between"}>
        <section className={"flex flex-col gap-[12px] w-full lg:w-[250px]"}>
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
        {isPc ? <PcLinkContainer/> : <MobileLinkContainer/>}
      </section>
      {/* 선 */}
      <div className={"hidden lg:min-h-[1px] lg:w-full lg:bg-borderGrayColor lg:block"}></div>
      <section className={"flex flex-col gap-[24px] lg:gap-[16px] lg:w-full"}>
        {isPc ? <PcMetaInfoFooter/>: <MobileMetaInfoFooter/>}
      </section>
    </div>
  </footer>
}