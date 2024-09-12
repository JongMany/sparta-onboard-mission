import {StaticImageData} from "next/image";
import AfterNoonImage from "@/assets/images/game/information/time-table/mobile/afternoon.webp";
import CourseImage1 from "@/assets/images/game/information/time-table/mobile/course_1.webp";
import CourseImage2 from "@/assets/images/game/information/time-table/mobile/course_2.webp";
import ProjectImage1 from "@/assets/images/game/information/time-table/mobile/project_1.webp";
import ProjectImage2 from "@/assets/images/game/information/time-table/mobile/project_2.webp";
import TILImage from "@/assets/images/game/information/time-table/mobile/til.webp";

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
export const mobileTimeList: MobileTimeItemWithStyle[] = [
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
];


export const timeTableFAQList = [{
  question: '9to9 외의 시간에는 다른 일을 해도 되나요?',
  answers: ["정해진 교육 시간(평일, 오전 9시 ~ 오후 9시) 외 개인활동은 가능합니다. 다만 경제 활동 시 훈련장려금 수령에 제약이 있을 수 있습니다.\n" +
  "*주 15시간 미만 근무, 월 소득 300만원 미만일 시 훈련장려금 수령 가능(최대 316,000원)", "취업이라는 목표 달성을 위해 4개월 동안 만큼은 캠프에 집중해주세요!"]
},
  {
    question: '9to9 동안 계속 카메라와 마이크를 켜야 하나요?',
    answers: ["교육은 실시간으로 진행되며, 팀 프로젝트 진행 시 팀원들과의 원활한 협업을 위해 항상 카메라와 마이크를 켜주셔야 합니다."]
  }, {
    question: '9to9 중간에 개인 용무가 생기면 어떡하나요?',
    answers: ["병원, 은행 등 개인 용무가 있는 경우, 담당 매니저와 팀원들에게 미리 공유하고 조율해주시면 됩니다."]
  }, {
    question: "9to9 말고 10to10 처럼 따로 진행해도 되나요?",
    answers: ["내일배움캠프는 실시간 강의와 팀 프로젝트 기반으로 운영됩니다.\n" +
    "따라서 정해진 시간(평일, 오전 9시 ~ 오후 9시)에 참여해주셔야 출석이 인정됩니다.", "추가로 학습이 필요하다면 9 to 9 외 시간을 활용하여 개인 공부를 하실 수 있습니다."]
  }, {
    question: "중간에 식사는 어떻게 하나요?",
    answers: ["식사는 자율적으로 진행하며, 주로 점심은 12시 - 1시, 저녁은 18시 - 19시에 갖습니다.", "팀 프로젝트 기간에는 팀원들과 조율해서 식사 시간을 가져주시면 됩니다."]
  }, {
    question: "왜 12시간 공부하나요?", answers: ["짧은 기간에 취업에 성공하기 위해서는 하루 12시간 공부가 필수입니다.\n" +
    "내일배움캠프에서는 4개월 동안 가파르게 성장할 수 있는 최적의 환경을 조성합니다.", "앞으로 나아가고 싶은 의지만 갖고 오세요. 인생에서 가장 값진 시간이 되도록 내일배움캠프가 도와드릴게요!"]
  }
];