import React from 'react';
import Image from "next/image";
import ThumbsUp from "@/assets/images/shared/thumbs-up.webp";

const mobileProjectResultList = [
  {
    num: 0,
    title: 'War on the Zombie',
    videoSource: "https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/project_video_1.mp4"
  },
  {
    num: 1,
    title: 'Gun Tower Run',
    videoSource: "https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/project_video_2.mp4"
  },
  {
    num: 2,
    title: '토당토당',
    videoSource: "https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/project_video_3.mp4"
  },
  {
    num: 3,
    title: 'Tserof',
    videoSource: "https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/project_video_4.mp4"
  },
  {
    num: 4,
    title: 'Ghost Only',
    videoSource: "https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/project_video_5.mp4"
  },
];

export const MobileProjectResultCarousel = () => {
  return (
      <section
          className={"lg:hidden w-full flex flex-nowrap gap-[8px] overflow-scroll pl-[16px] mb-[40px] scrollbar-hide"}>
        {mobileProjectResultList.map((item) => <section className={"relative flex flex-col gap-[8px] pb-[40px]"}>
          <div className={"absolute z-[10] ml-[10px] flex gap-[6px] p-[10px] justify-center items-center rounded-br-[8px] rounded-bl-[8px] bg-[rgb(255,108,122)] text-white text-center text-[11px] font-[600] leading-[18px] w-[90px] h-[26px] whitespace-nowrap"}>
            <Image src={ThumbsUp} alt={'우수프로젝트'} width={16} height={16} className={"w-[12px] h-[12px] text-transparent"}/>
            <p>우수 프로젝트</p>
          </div>
          <section className={"relative opacity-100 overflow-hidden rounded-[12px] shadow-video-item w-[326px] h-[200px]"}>
            <div className={"block pt-[193.4%]"}></div>
            <video playsInline={true} loop={true} autoPlay={true} controlsList="nodownload"
                   className="absolute inset-0 w-full h-full object-cover">
              <source src={item.videoSource} type="video/mp4"/>
            </video>
          </section>
          <p className={"font-[400] text-[14px] leading-[22px] opacity-50 text-white"}>{item.title}</p>
        </section>)}
      </section>
  );
};

