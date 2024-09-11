import React from 'react';
import Image from "next/image";
import PcProgramEnrollmentStatusImage from "@/assets/images/game/information/program-enrollment-status/pc.webp"
import MobileProgramEnrollmentStatusImage from "@/assets/images/game/information/program-enrollment-status/mobile.webp"

export const ProgramEnrollmentStatusSection = () => {
  return (
      <section id={"gameWPN"} className={"relative"}>
        <section className={"flex justify-center bg-[rgb(20,22,23)]"}>
          <picture className={"hidden"}></picture>
          <picture className={"w-full lg:hidden"}>
            <Image src={MobileProgramEnrollmentStatusImage} alt={"등록 정보"} className={"unset object-cover w-full h-full inset-0 text-transparent object-[center_top]"} />
          </picture>
          <picture className={"hidden lg:max-w-[820px] lg:w-full"}>
            <Image src={PcProgramEnrollmentStatusImage} alt={"등록 정보"} className={"object-cover w-full h-full inset-0 text-transparent object-[center_top]"} />
          </picture>
        </section>
      </section>
  );
};

