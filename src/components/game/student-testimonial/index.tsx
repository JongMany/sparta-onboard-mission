import React from 'react';
import Image from "next/image";
import PcStudentTestimonialImage from "@/assets/images/game/information/student-testimonial/pc.webp"
import MobileStudentTestimonialImage from "@/assets/images/game/information/student-testimonial/mobile.webp"

export const StudentTestimonialSection = () => {
  return (
      <section className={"relative"} id={"gameUnity"}>
        <section className={"flex justify-center bg-[rgb(32,44,58)]"}>
          <picture></picture>
          <picture>
            <Image src={PcStudentTestimonialImage} alt={"유니티 장점"} className={"object-cover w-full h-full inset-0 text-transparent object-[center_top]"}/>
          </picture>
        </section>
      </section>
  );
};

