"use client";
import React, {useState} from 'react';
import Image from "next/image";
import NineToTenImage from "@/assets/images/game/information/time-table/nineToTen.webp";
import TenToFifteenImage from "@/assets/images/game/information/time-table/tenToFifteen.webp";
import FifteenToTwentyImage from "@/assets/images/game/information/time-table/fifteenToTwenty.webp";
import TwentyToTwentyOneImage from "@/assets/images/game/information/time-table/twentyToTwentyOne.webp";

type EducationTime = '9-10' | '10-15' | '15-20' | '20-21'
export const InformationByTime = () => {
  const [selectEducationTime, setSelectEducationTime] = useState<EducationTime>('9-10');

  const selectEducationTimeHandler = (e) => {
    // "[data-name=dataName]"
    if (e.target.closest("[data-types=time-table]")) {
      setSelectEducationTime(e.target.dataset.target as EducationTime);
    }
  }

  return (
      <div className={"flex flex-col gap-[28px]"}>
        <div className={"flex gap-[8px] border-b-[1px] border-[rgb(228,235,240)]"}>
          <div
              className={`p-[8px] text-[15px] font-[700] leading-[26px] cursor-pointer text-[rgb(180,191,198)] ${selectEducationTime === "9-10" ? "border-b-2 border-[rgb(255,108,122)] text-[rgb(255,108,122)]" : ""}`}
              data-target={"9-10"}
              data-types={"time-table"}
              onClick={selectEducationTimeHandler}
          >9시-10시
          </div>
          <div
              className={`p-[8px] text-[15px] font-[700] leading-[26px] cursor-pointer text-[rgb(180,191,198)]  ${selectEducationTime === "10-15" ? "border-b-2 border-[rgb(255,108,122)] text-[rgb(255,108,122)]" : ""}`}
              data-target={"10-15"}
              data-types={"time-table"}
              onClick={selectEducationTimeHandler}
          >10시-15시
          </div>
          <div
              className={`p-[8px] text-[15px] font-[700] leading-[26px] cursor-pointer text-[rgb(180,191,198)]  ${selectEducationTime === "15-20" ? "border-b-2 border-[rgb(255,108,122)] text-[rgb(255,108,122)]" : ""}`}
              data-target={"15-20"}
              data-types={"time-table"}
              onClick={selectEducationTimeHandler}
          >15시-20시
          </div>
          <div
              className={`p-[8px] text-[15px] font-[700] leading-[26px] cursor-pointer text-[rgb(180,191,198)]  ${selectEducationTime === "20-21" ? "border-b-2 border-[rgb(255,108,122)] text-[rgb(255,108,122)]" : ""}`}
              data-target={"20-21"}
              data-types={"time-table"}
              onClick={selectEducationTimeHandler}
          >20시-21시
          </div>
        </div>
        <div
            className={`${'opacity-100'} transition-opacity duration-150 ease-linear flex flex-col items-center gap-[24px] px-[4px]`}>
          <ActivityInformationByTime time={selectEducationTime}/>
        </div>
      </div>
  );
};

function ActivityInformationByTime({time}: { time: EducationTime }) {
  if (time === "9-10") {
    return (
        <>
          <section className={"flex flex-col gap-[12px] w-full"}>
            <h4 className={"text-[20px] font-[700] leading-[26px] mb-[8px] text-[rgb(20,22,23)]"}>오전 과제</h4>
            <div className={"flex flex-col gap-[4px]"}>
              <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>담임 매니저에게 학습 계획표를 제출하고 데일리 학습
                관리를 시작합니다.</p>
              <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>매일 알고리즘 문제를 풀며 하루를
                시작합니다.</p>
            </div>
          </section>
          <Image src={NineToTenImage} alt={'9시-10시 활동 사진'}/>
        </>
    )
  }
  if (time === "10-15") {
    return (
        <>
          <section className={"flex flex-col gap-[16px] w-full"}>
            <h4 className={"text-[20px] font-[700] leading-[26px] mb-[8px] text-[rgb(20,22,23)]"}>강의 수강 및 팀 회의</h4>
            <div className={"flex flex-col gap-[8px]"}>
              <h5 className={"text-[rgb(255,108,122)] font-[600] leading-[22px] text-[14px]"}>강의학습 주차</h5>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>주차별 정규 강의를 듣고 개념을 학습합니다.
                  수강한 강의를 복습하고, 실습/과제를 통해 배운 내용을 실전에 적용해 봅니다.
                </p>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>강의 수강 중 어려운 부분이 있으면 기다리지
                  않고 해결할 수 있도록 12시간 동안 튜터님이 계십니다.</p>
              </div>
            </div>

            <div className={"flex flex-col gap-[8px]"}>
              <h5 className={"text-[rgb(255,108,122)] font-[600] leading-[22px] text-[14px]"}>프로젝트 주차</h5>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>프로젝트에 집중하는 프로젝트 주차에는 팀원들과
                  모여 회의를 합니다.</p>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>팀 프로젝트는 취업 포트폴리오와 연결되는 만큼,
                  기획부터 배포까지 팀별로 담당 튜터님이 배정 됩니다.</p>
              </div>
            </div>
          </section>
          <Image src={TenToFifteenImage} alt={'15시-20시 활동 사진'}/>
        </>
    )
  }

  if (time === "15-20") {
    return (
        <>
          <section className={"flex flex-col gap-[16px] w-full"}>
            <h4 className={"text-[20px] font-[700] leading-[26px] mb-[8px] text-[rgb(20,22,23)]"}>집중 코딩 및 프로젝트 진행</h4>
            <div className={"flex flex-col gap-[8px]"}>
              <h5 className={"text-[rgb(255,108,122)] font-[600] leading-[22px] text-[14px]"}>강의학습 주차</h5>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>나의 실력에 맞춘 수준별 과제와 수업을 합니다.
                  팀원들과 스터디를 하거나 보충 수업(실시간 세션)으로 부족한 부분을 보완할 수 있습니다.</p>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>특히 수업을 따라가기 어려워하는 분들은 소수
                  정예 티칭을 통해 기술을 완전히 이해하고 넘어갈 수 있도록 집중 케어합니다.</p>
              </div>
            </div>

            <div className={"flex flex-col gap-[8px]"}>
              <h5 className={"text-[rgb(255,108,122)] font-[600] leading-[22px] text-[14px]"}>프로젝트 주차</h5>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>프로젝트에 집중하는 프로젝트 주차에는 팀원들과
                  모여 회의를 합니다.</p>
                <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>팀 프로젝트는 취업 포트폴리오와 연결되는 만큼,
                  기획부터 배포까지 팀별로 담당 튜터님이 배정 됩니다.</p>
              </div>
            </div>
          </section>
          <Image src={FifteenToTwentyImage} alt={'15시-20시 활동 사진'}/>
        </>
    )
  }

  if (time === "20-21") {
    return (
        <>
          <section className={"flex flex-col gap-[12px] w-full"}>
            <h4 className={"text-[20px] font-[700] leading-[26px] mb-[8px] text-[rgb(20,22,23)]"}>개인 회고</h4>
            <div className={"flex flex-col gap-[4px]"}>
              <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>오늘 하루 동안 배운 내용과 트러블 슈팅을 기록하는
                TIL(Today I Learned)을 작성합니다.</p>
              <p className={"font-[400] text-[14px] leading-[22px] text-[rgb(95,102,107)]"}>수료 후 취업을 위한 이력서, 포트폴리오 소스를
                차곡차곡 쌓아둡니다.</p>
            </div>
          </section>
          <Image src={TwentyToTwentyOneImage} alt={'20시-21시 활동 사진'}/>
        </>
    )
  }
}