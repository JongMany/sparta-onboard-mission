"use client";
import React, {useState} from 'react';
import AfterNoonImage from "@/assets/images/game/information/time-table/mobile/afternoon.webp"
import CourseImage1 from "@/assets/images/game/information/time-table/mobile/course_1.webp"
import CourseImage2 from "@/assets/images/game/information/time-table/mobile/course_2.webp"
import ProjectImage1 from "@/assets/images/game/information/time-table/mobile/project_1.webp"
import ProjectImage2 from "@/assets/images/game/information/time-table/mobile/project_2.webp"
import TILImage from "@/assets/images/game/information/time-table/mobile/til.webp"
import {ScheduleItem} from "@/components/game/show-time-table/time-table/ScheduleItem";
import {StaticImageData} from "next/image";


type MobileTimeItem = {
  title: string;
  time: string[],
  strokeColor: string;
  description?: string;
  detailInformation: {
    imageSrc: StaticImageData;
    descriptions: {
      grade: 'head' | 'text'
      text: string;
    }[]
  }[];
};

export type MobileTimeItemWithStyle = MobileTimeItem & { additionalContainerClassName?: string }
const mobileTimeList: MobileTimeItemWithStyle[] = [
  {
    title: '오전 과제',
    time: ['09:00'],
    strokeColor: '#A8C5FF',
    additionalContainerClassName: 'border-[rgb(168,197,255)] bg-[rgb(237,243,255)] animate-ulcstx',
    detailInformation: [
      {
        imageSrc: AfterNoonImage,
        descriptions: [{grade: 'text', text: '담임 매니저에게 학습 계획표를 제출하고 데일리 학습 관리를 시작합니다.'}, {
          grade: 'text',
          text: '매일 알고리즘 문제를 풀며 하루를 시작합니다.'
        }]
      }
    ]
  },
  {
    title: '강의 수강 및 팀 회의',
    time: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    description: '온라인 강의, 과제/실습, 팀회의',
    strokeColor: '#FF9EA9',
    additionalContainerClassName: 'border-[rgb(255,208,218)] bg-[rgb(255,246,248)]',
    detailInformation: [
      {
        imageSrc: CourseImage1,
        descriptions: [{grade: 'head', text: '강의 학습 주차'}, {
          grade: 'text',
          text: '주차별 정규 강의를 듣고 개념을 학습합니다. 수강한 강의를 복습하고, 실습/과제를 통해 배운 내용을 실전에 적용해 봅니다.'
        }, {
          grade: 'text',
          text: '강의 수강 중 어려운 부분이 있으면 기다리지 않고 해결할 수 있도록 12시간 동안 튜터님이 계십니다.'
        }]
      },
      {
        imageSrc: CourseImage2,
        descriptions: [{grade: 'head', text: '프로젝트 주차'}, {
          grade: 'text',
          text: '프로젝트 구현에 집중하는 프로젝트 주차에는 팀원들과 모여 회의를 합니다.'
        }, {
          grade: 'text',
          text: '팀 프로젝트는 취업 포트폴리오와 연결되는 만큼, 기획부터 배포까지 팀별로 담당 튜터님이 배정 됩니다.'
        }]
      }
    ]
  },
  {
    title: '집중 코딩 및 프로젝트 진행',
    time: ['15:00', '16:00', '17:00', '18:00', '19:00'],
    description: '실시간 세션, 스터디, 협업 프로젝트',
    strokeColor: '#FF9EA9',
    additionalContainerClassName: "border-[rgb(255,208,218)] bg-[rgb(255,246,248)]",
    detailInformation: [
      {
        imageSrc: ProjectImage1,
        descriptions: [{grade: 'head', text: '강의 학습 주차'}, {
          grade: 'text',
          text: '나의 실력에 맞춘 수준별 과제와 수업을 합니다. 팀원들과 스터디를 하거나 보충 수업(실시간 세션)으로 부족한 부분을 보완할 수 있습니다.'
        }, {
          grade: 'text',
          text: '특히 수업을 따라가기 어려워하는 분들은 소수 정예 티칭을 통해 기술을 완전히 이해하고 넘어갈 수 있도록 집중 케어합니다.'
        }]
      },
      {
        imageSrc: ProjectImage2,
        descriptions: [{grade: 'head', text: '프로젝트 주차'}, {
          grade: 'text',
          text: '‘집중 코딩 시간’을 통해 끈질기게 문제에 집중하며 문제 해결 역량을 키웁니다.'
        }, {
          grade: 'text',
          text: '구현한 코드에 대한 피드백을 받을 수 있도록 12시간 동안 튜터님이 계십니다. '
        }]
      }
    ]
  },
  {
    title: '개인회고',
    time: ['21:00'],
    strokeColor: '#A8C5FF',
    additionalContainerClassName: 'border-[rgb(168,197,255)] bg-[rgb(237,243,255)]',
    detailInformation: [
      {
        imageSrc: TILImage,
        descriptions: [{grade: 'text', text: '오늘 하루 동안 배운 내용과 트러블 슈팅을 기록하는 TIL(Today I Learned)을 작성합니다.'}, {
          grade: 'text',
          text: '수료 후 취업을 위한 이력서, 포트폴리오 소스를 차곡차곡 쌓아둡니다.'
        }]
      }
    ]
  }

]

export const MobileTimeTable = () => {
  const [openStatus, setOpenStatus] = useState(() => Array(mobileTimeList.length).fill(false));
  const toggleOpenStatus = (num: number) => () => {
    setOpenStatus(prev => prev.map((item, idx) => idx === num ? !item : item));
  }
  return (
      <div className={"lg:hidden block"}>
        <div className={"flex gap-[8px] flex-col"}>
          {mobileTimeList.map((item, idx) => <ScheduleItem key={item.title} item={item} isOpen={openStatus[idx]}
                                                           toggleOpen={toggleOpenStatus(idx)}/>)}
        </div>
        <p className={"w-full text-center mt-[24px] font-[400] text-[12px] leading-[18px] text-[rgb(157,167,174)]"}>
          *시간대 별 항목은 커리큘럼 주차에 따라 달라질 수 있습니다.
        </p>
      </div>
  );
};

