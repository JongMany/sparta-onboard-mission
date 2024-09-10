import React from 'react';
import {PlusIcon} from "@/components/shared/icon/PlusIcon";

export const PriceInformationSection = () => {
  return (
      <section id={"gamePriceInfo"} className={"relative"}>
        <section id={"gameOverview"} className={"py-[100px] bg-[rgb(20,22,23)]"}>
          <section className={"min-w-[328px] w-full mx-auto my-0 max-w-[820px] flex justify-between"}>
            <div>
              <h2 className={"relative whitespace-pre-wrap text-white text-left font-[700] text-[32px] leading-[45px] py-[12px]"}>
                이 모든 것을
                <br/>
                무료로 수강할 수 있어요
              </h2>
            </div>
            <div className={"flex flex-col gap-[10px]"}>
              <div className={"bg-white p-[32px] rounded-[12px] mt-0 w-[367.5px]"}>
                <span
                    className={"text-[22px] text-[rgb(95,102,107)] line-through leading-[26px] font-[400]"}>19,602,000원</span>
                <div
                    className={"mt-[4px] flex gap-[12px] items-center font-[700] text-[32px] leading-[45px] text-[rgb(20,22,23)]"}>수강료
                  0원<span
                      className={"bg-[rgba(17,173,126,0.2)] font-[500] text-[14px] leading-[22px] rounded-[8px] py-[4px] px-[8px] text-[rgb(17,173,126)]"}>국비지원(KDT)</span>
                </div>
                <div className={"h-[1px] bg-[rgb(215,224,230)] my-[16px]"}></div>
                <p className={"font-[600] text-[16px] leading-[26px] text-[rgb(20,22,23)]"}>
                  이번 기수 오직
                  120
                  명만!
                </p>
                <p className={"font-[400] text-[13px] leading-[20px] pt-[4px] text-[rgb(95,102,107)]"}>
                  *정원 모집 완료 시, 조기 마감 될 수 있습니다.
                </p>
              </div>
              <div
                  className={"relative flex pt-[32px] px-[12px] pb-[20px] flex-col justify-center items-center gap-[4px] rounded-[16px] border-[1px] border-[rgb(255,108,122)] bg-[rgb(255,241,244)]"}>
                <div
                    className={"absolute -top-[23px] flex justify-center items-center w-[36px] h-[36px] bg-[rgb(255,108,122)] rounded-full"}>
                  <PlusIcon/>
                </div>
                <p className={"text-[rgb(255,108,122)] text-[16px] leading-[26px] font-[600]"}>
                  매월 훈련장려금 31만원 지급
                </p>
                <p>
                  *개인마다 지급액이 상이할 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
  );
};

