"use client";

import React, {useState} from 'react';
import {FAQItem} from "@/components/game/show-time-table/faq/FAQItem";

const FAQList = [{
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

export const FAQ = () => {
  const [allShow, setAllShow] = useState(false);
  const [toggleFAQState, setToggleFAQState] = useState([false, false, false, false, false, false]);
  const toggleAllShow = () => {
    if(allShow) {
      setToggleFAQState(prev => prev.map(() => false))
    } else {
      setToggleFAQState(prev => prev.map(() => true))
    }
    setAllShow(prev => !prev);
  }

  const toggleFAQStateHandler = (num: number) => () => {
    setToggleFAQState((prev) => prev.map((state, index) => index === num ? !state : state))
  }


  return (
      <section className={"flex flex-col gap-[40px] mt-[100px] pt-[20px] px-[16px]"}>
        <section className={"flex justify-between"}>
          <h4 className={"font-[600] text-[18px] leading-[29px] text-[rgb(20,22,23)]"}>관련 자주 묻는 질문</h4>
          <div
              className={"flex justify-between items-center gap-[8px] font-[400] text-[13px] leading-[21px] text-[rgb(95,102,107)]"}
          >
            전체 펼치기
            <div
                className={`w-[40px] h-[24px] p-[2px] rounded-[14px] transition duration-500 ease-in-out cursor-pointer flex items-center ${allShow ? "bg-[rgb(232,52,78)]" : "bg-[rgb(180,191,198)]"}`}
                onClick={toggleAllShow}
            >
              <div
                  className={`w-[20px] h-[20px] rounded-[12px] bg-[rgb(255,255,255)] transition duration-300 ease-in-out ${allShow ? 'translate-x-[16px]' : 'translate-x-0'}`}></div>
            </div>
          </div>
        </section>
        <section className={"flex flex-col gap-[20px]"}>
          {FAQList.map((item, index) => <FAQItem key={item.question} question={item.question} answers={item.answers}
                                                 isOpened={toggleFAQState[index]}
                                                 onClick={toggleFAQStateHandler(index)}/>)}
        </section>
      </section>
  );
};


