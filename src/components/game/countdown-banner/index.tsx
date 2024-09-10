import React from 'react';

// 9월 12일 목 24:00까지
export const CountdownBanner = () => {
  return (
      <section className={"relative"}>
        <section className={"bg-[rgb(20,22,23)] py-[100px]"}>
          <main className={"flex mx-auto justify-between max-w-[796px] items-center"}>
            <div>
              <h1 className={"font-[700] text-[32px] leading-[45px] text-left text-white"}>⏰ 모집 마감 임박 ⏰</h1>
              <div className={"text-[18px] leading-[29px] mt-[8px] text-[rgb(157,167,174)] opacity-80 whitespace-pre-wrap"}>곧 올해 마지막 모집이 마감됩니다.</div>
            </div>
            <div className={"leading-[150%] font-[700] flex justify-center items-center text-[40px] text-white"}>
              <div className={"w-[117px] h-[76px] mr-[12px] ml-[4px] py-[8px] rounded-[6px] text-[rgb(20,22,23)] flex text-center justify-center items-center bg-white"}>3일</div>
              <div className={"w-[76px] h-[76px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>07</div>
              :
              <div className={"w-[76px] h-[76px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>50</div>
              :
              <div className={"w-[76px] h-[76px] text-center rounded-[8px] flex justify-center items-center font-[700] mx-[4px] text-[rgb(20,22,23)] bg-[rgba(255,255,255,0.8)]"}>24</div>
            </div>
            <div className={"hidden"}>곧 올해 마지막 모집이 마감됩니다.</div>
          </main>
        </section>
      </section>
  );
};

