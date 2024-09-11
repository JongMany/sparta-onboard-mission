import React from 'react';
import Image from "next/image";

import PcPartnerCompanyImage from "@/assets/images/game/information/partner-company/pc.webp";
import MobilePartnerCompanyImage from "@/assets/images/game/information/partner-company/mobile.webp";

export const PartnerCompanySection = () => {
  return (
      <section id={"gamePartnerComponent"} className={"relative"}>
        <section className={"bg-white py-[80px] lg:py-[100px]"}>
          <div className={"mx-auto my-0 w-[328px] lg:w-[796px]"}>
            <h3 className={"relative font-[600] text-[14px] lg:text-[20px] leading-[22px] lg:leading-[26px] text-[rgb(255,108,122)]"}>협력사</h3>
            <h2 className={"font-[700] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[45px] pt-[8px] lg:pt-[12px] pb-[40px] lg:pb-[60px] text-[rgb(20,22,23)] whitespace-pre-wrap"}>자체 채용 플랫폼에서<br/>
              1,000여개의 기업이 함께합니다.</h2>
            <div className={"hidden lg:w-[796px] lg:h-[245px] lg:relative lg:block"}>
              <Image src={PcPartnerCompanyImage} alt={"협력사"} className={"absolute h-full w-full inset-0 text-transparent"} />
            </div>

            <div className={"w-[328px] h-[401px] relative flex lg:hidden"}>
              <Image src={MobilePartnerCompanyImage} alt={"협력사"} className={"absolute h-full w-full inset-0 text-transparent"} />
            </div>
            <div></div>
            <div className={"font-[400] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-start lg:text-center pt-[40px] lg:pt-[60px] text-[rgb(58,62,65)]"}>
              현업 개발자와의 모의면접 결과를 반영하는 자체 채용 플랫폼 ‘인텔리픽’은 높은 매칭률을 갖고 있습니다.
              <br/>
              이력서만으로 평가하지 않고, 취업 시장에서 더욱 경쟁력 있는 개발자로 기회를 잡을 수 있습니다.
            </div>
          </div>
        </section>
      </section>
  );
};

