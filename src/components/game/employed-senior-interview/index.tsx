import React from 'react';
import {LeftArrowIcon} from "@/components/shared/icon/LeftArrowIcon";
import {RightArrowIcon} from "@/components/shared/icon/RightArrowIcon";

export const EmployedSeniorInterviewSection = () => {
  
  return (
      <section className={"relative"} id={"gameEmployedSeniorInterview"}>
        <div id={"output"}>
          <section
              className={"py-[100px] flex flex-col justify-center items-center overflow-hidden bg-[rgb(20,22,23)]"}>
            <div className={"w-full flex flex-col justify-center max-w-[820px] items-start gap-[60px]"}>
              <div className={"w-full self-start flex items-end justify-between gap-[20px]"}>
                <div className={"flex flex-col justify-center items-start gap-[12px]"}>
                  <h3 className={"relative font-[600] text-[20px] leading-[26px] text-[rgb(255,108,122)]"}>취업후기</h3>
                  <h2 className={"relative whitespace-pre-wrap font-[700] text-[32px] leading-[45px] text-white"}>선배
                    수료생들의<br/>취업 후기를 확인해 보세요</h2>
                </div>
                <div className={"flex items-start gap-[24px]"}>
                  <button className={"cursor-not-allowed opacity-20 text-white"}>
                    <LeftArrowIcon/>
                  </button>
                  <button className={"opacity-100 text-white"}>
                    <RightArrowIcon/>
                  </button>
                </div>
              </div>
              {/* TODO: Swiper*/}
              <div className={"w-full overflow-visible touch-pan-y ml-auto mr-auto relative list-none p-0"}>
                <div className={"relative w-full h-full z-[1] flex transition-transform"}>

                </div>
              </div>
            </div>

          </section>
        </div>
      </section>
  );
};

