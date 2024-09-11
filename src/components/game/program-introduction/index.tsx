import React from 'react';
import Image from "next/image";
import PcProgramIntroductionImage from "@/assets/images/game/information/program-introduction/pc.webp";
import MobileProgramIntroductionImage from "@/assets/images/game/information/program-introduction/mobile.webp";

export const ProgramIntroductionSection = () => {
  return (
      <section id={"gameDream"} className={"relative"}>
        <section className={"flex justify-center bg-[rgb(40,41,43)]"}>
          <picture className={"lg:hidden w-full"}>
            <Image src={MobileProgramIntroductionImage} alt={"내일배움캠프정보"} className={"object-cover w-full h-full inset-0 text-transparent object-[center_top]"} />
          </picture>
          <picture className={"hidden lg:w-full lg:max-w-[820px]"}>
            <Image src={PcProgramIntroductionImage} alt={"내일배움캠프정보"} className={"object-cover w-full h-full inset-0 text-transparent object-[center_top]"} />
          </picture>
        </section>
      </section>
  );
};

