import React from 'react';
import Image from "next/image";
import PcWhyBecomeDeveloperImage from "@/assets/images/game/information/why-become-developer/pc.webp"
import MobileWhyBecomeDeveloperImage from "@/assets/images/game/information/why-become-developer/mobile.webp"


export const WhyBecomeDeveloperSection = () => {
  return (
      <section id={"gameWhyNow"} className={"relative"}>
        <section className={"flex justify-center bg-[rgb(20,22,23)]"}>
          <picture className={"hidden"}>
            <Image src={MobileWhyBecomeDeveloperImage} alt={"왜 게임개발자여야 하나"}/>
          </picture>
          <picture className={"w-full max-w-[820px]"}>
            <Image src={PcWhyBecomeDeveloperImage} alt={"왜 게임개발자여야 하나"} className={"object-cover w-full h-full inset-0 text-transparent object-[center_top]"}/>
          </picture>
        </section>
      </section>
  );
};

