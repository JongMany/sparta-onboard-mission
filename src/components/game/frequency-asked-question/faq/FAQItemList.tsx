import {ListBullet} from "@/components/shared/list/ListBullet";
import Link from "next/link";
import React, {PropsWithChildren} from "react";

const FAQItemCard = ({children}: PropsWithChildren) => {
  return <div className={"text-[rgb(129,137,143)] break-keep whitespace-pre-wrap pl-[28px]"}>
    {children}
  </div>
}

export const FAQItemList = [
  {
    question: '지원 자격은 어떻게 되나요?',
    children: <>
      <FAQItemCard>스파르타 내일배움캠프는 100% 국비지원교육으로
        ‘국민내일배움카드’를 발급받을 수 있는 국민이면 지원할 수 있습니다. 아래 세부 요건을 확인해주세요.
      </FAQItemCard>
      <FAQItemCard>
        [자격 요건 요약]
        <br/>
        <ul>
          <li>
            <ListBullet/>
            내일배움카드 소지자 또는 발급대상자
          </li>
          <li>
            <ListBullet/>
            내일배움카드 지원금 잔액이 1원 이상 남은자
          </li>
          <li>
            <ListBullet/>
            국내 거주중이며, 훈련 기간 내 해외 거주 계획이 없는 자
          </li>
          <li>
            <ListBullet/>
            최근 5년 이내의 K-Digital Training(KDT) 참여 이력이 없는 자
          </li>
        </ul>
        *K-디지털 기초역량 훈련(KDC) 이력과 무관하며, 중복하여 수강할 수 있습니다.
        <br/>
        *단, KDT 참여 이력이 있는 경우, 재참여 시 전액 자부담입니다.
      </FAQItemCard>
      <FAQItemCard>
        더 자세한 지원 자격이 궁금하시다면? <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
                                   className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '오전 9시부터 오후 9시까지 무엇을 하나요?',
    children: <>
      <FAQItemCard>
        9 to 9 일정은 4개월의 압축 성장을 위한 일과로 구성되어있습니다.
      </FAQItemCard>
      <FAQItemCard>
        1. 하루 목표 설정
        <ul>
          <li>
            <ListBullet/>팀원들과 함께 그날의 전체 목표를 설정합니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        2. 학슴 및 프로젝트 계획
        <ul>
          <li>
            <ListBullet/>학습 주차에는 오늘 들을 강의 및 과제 수행 범위를 정합니다.
          </li>
          <li>
            <ListBullet/>프로젝트 주차에는 팀별로 당일 할 일을 정하고 업무를 분담합니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        3. 오전 워밍업
        <ul>
          <li>
            <ListBullet/>1시간 동안 뇌를 깨우고 오늘 해야 할 일들을 정리합니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        4. 자기주도 학습
        <ul>
          <li>
            <ListBullet/>오후 동안 튜터의 도움 없이 스스로 해결책을 찾아보며 문제 해결 능력을 키웁니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        5. 튜터진과의 문제해결
        <ul>
          <li>
            <ListBullet/>오전 9시부터 오후 9시까지 상주하고 있는 튜터진에게 원할 때마다 도움을 요청하고 받을 수 있습니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        6. 하루 회고
        <ul>
          <li>
            <ListBullet/>오후 9시 전에 팀원들과 함께 계획에 대한 진척도를 체크하며 TIL(Today I Learned)을 작성하여 하루를 마무리합니다.
          </li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>위 일정을 바탕으로 빠르게 성장할 수 있는 최적의 환경을 제공하며, 자기 주도적 학습 능력과 팀워크, 문제 해결 능력을 갖추게 됩니다.</FAQItemCard>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?<Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '비대면 수업인데 정말 제대로 케어해주나요?',
    children: <>
      <FAQItemCard>
        2년 연속 코딩교육 브랜드 1위, 스파르타코딩클럽이 만든 내일배움캠프의 압도적인 수료율(92.8%)이 증명합니다.
      </FAQItemCard>
      <FAQItemCard>
        막상 시작하면 오래된 강의만 제공하고 방치하는 부트캠프가 아닌, 취업까지 도달할 수 있도록 꼼꼼하게 밀착 케어합니다.
      </FAQItemCard>
      <FAQItemCard>
        <ul>
          <li><ListBullet/>사전캠프 : 본 캠프 전 기초를 다지고 나만의 학습 루틴을 만들어가기 위한 내일배움캠프만의 커리큘럼</li>
          <li><ListBullet/>튜터 상주 : 궁금한 점은 기다리지 않고 바로 질문할 수 있는 내일배움캠프만의 상주 시스템</li>
          <li><ListBullet/>담임 매니저 : 과제와 시험 결과를 토대로 수강생의 수준을 객관적으로 진단하고 효율적인 학습 방향 제시</li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?
        <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '사전캠프 진행 방식이 궁금해요!',
    children: <>
      <FAQItemCard>
        사전캠프는 본 캠프 개강 전 비전공자도 걱정없이 학습할 수 있도록 도와주는 프로그램입니다. 본 캠프 전 기초를 미리 튼튼하게 다질 수 있습니다.
      </FAQItemCard>
      <FAQItemCard>
        특히 관련 공부가 처음인 분들은 필수로 참여하는 것을 권장드리며, 최종 합류 이후 본 캠프 개강 전까지 평일 오후 2시 ~ 오후 6시에 온라인으로 진행됩니다.
      </FAQItemCard>
      <FAQItemCard>
        다만 퇴사 일정, 기존 학업 일정 등으로 당장 참여할 수 없는 상황인 경우, 담당 매니저와의 협의를 통해 대체 학습이 가능하도록 따로 진행이 가능합니다.
      </FAQItemCard>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?
        <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '정말 0원인가요?',
    children: <>
      <FAQItemCard>물론입니다. 내일배움캠프는 스파르타코딩클럽과 고용노동부가 함께하는 100% 전액 국비지원 훈련 과정으로 개인부담 비용은 전혀 없습니다. 단, 개강 7일 전까지 내일배움카드를 반드시
        소지해주세요!</FAQItemCard>
      <FAQItemCard>
        <Link href="https://nbquiz.spartacodingclub.kr/" target="_blank" className={"underline"}>0원 대상자인지 확인하러가기</Link>
      </FAQItemCard>
    </>
  },
  {
    question: '매월 훈련 장려금도 받을 수 있나요?',
    children: <>
      <FAQItemCard>
        고용노동부 정책에 따라 매월 31만원 상당의 훈련장려금을 받을 수 있습니다. 훈련장려금 신청 기간이 되면 운영 매니저가 필요한 절차를 함께 진행해드리므로, 걱정하지 않으셔도 됩니다!
      </FAQItemCard>
      <FAQItemCard>
        실업 급여 수령 여부 등, 간혹 지급이 제한되거나 금액이 상이할 수 있으므로 관련된 자세한 문의는 관할 고용센터 또는 HRD-NET을 통해 문의해주세요.
      </FAQItemCard>
    </>
  },
  {
    question: '혹시 캠프 수강을 위한 노트북 대여가 가능할까요?',
    children: <>
      <FAQItemCard>훈련에 필요한 노트북 대여가 가능합니다.
      </FAQItemCard>
      <FAQItemCard>
        정부 자산으로 구매한 기기인 만큼 파손 또는 분실 시, 계약에 따라 법적 책임을 질 수 있습니다. 대여 진행 시 반납 보증을 위한 계약서 작성이 필수입니다. (필요에 따라 보증인 확인을 위해 유선
        연락을 드립니다.)
      </FAQItemCard>
      <FAQItemCard>
        노트북 대여는 장비가 없는 인원을 우선으로 진행되며, 장비를 소유하고 있더라도 학습 진행 시 필요하다고 판단되면 대여가 가능합니다.
      </FAQItemCard>
      <FAQItemCard>
        [대여절차 미리보기]
        <br/>
        1. 훈련장비 대여 신청서 제출
        <br/>
        2. 대여 필요 여부 심사
        <br/>
        3. 계약서 작성(훈련생, 보증인 각 1부)
        <br/>
        4. 장비 배송
        <br/>
        5. 관리 프로그램 설치
      </FAQItemCard>
    </>
  },
  {
    question: '게임은 많이 해봤는데, 저도 개발할 수 있을까요?',
    children: <>
      <FAQItemCard>수강생 80%가 비전공자입니다. 게임 개발에 있어 가장 중요한 것은 개발에 대한 흥미와 의지이기 때문에, 게임 개발 경험과 무관하게 게임 개발자를 꿈꾸는 분이라면 충분히 하실 수
        있습니다!
      </FAQItemCard>
      <FAQItemCard>
        유니티 엔진을 사용한 게임 프로그래밍 기초부터 차근차근 학습하므로, 걱정하지 않으셔도 됩니다!<br/>
        주차별로 프로젝트를 진행하며 다양한 게임을 직접 개발해보는 과정을 거치기 때문에 숙련도가 자연스럽게 올라갑니다.
      </FAQItemCard>
      <FAQItemCard>
        2024년 기준 국내 게임 산업 시장의 규모는 계속해서 성장하고 게임 개발자에 대한 수요도 증가하고 있기 때문에 유망한 직종에서 커리어를 시작해보세요.
      </FAQItemCard>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?
        <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '게임 개발을 배우면 어떤 방향으로 취업하나요?',
    children: <>
      <FAQItemCard>
        게임업계는 게임개발에 대한 이해도가 높으면 도전할 수 있는 직무가 정말 다양하기 때문에, 게임업계에서 일하고 싶다면 게임 개발은 큰 무기가 됩니다!
      </FAQItemCard>
      <FAQItemCard>
        내일배움캠프의 게임 개발자 트랙을 수료하면, 아래와 같은 직군으로 취업할 수 있습니다.
      </FAQItemCard>
      <ul className={"flex flex-col gap-[8px]"}>
        <li>
          <FAQItemCard>
            <ListBullet/>게임 개발자 : 개발 엔진을 사용하여 게임 개발
            <ul className={"pl-[10px]"}>
              <li><ListBullet/>기능, 시스템, 물리 엔진, 그래픽스 개발</li>
              <li><ListBullet/>C# 또는 UnityScript와 같은 스크립팅 언어를 사용한 로직 작성 및 구현</li>
              <li><ListBullet/>게임의 에셋, 애니메이션, 사운드, 텍스처 등 리소스의 효율적 관리 및 사용</li>
            </ul>
          </FAQItemCard>
        </li>
        <li>
          <FAQItemCard>
            <ListBullet/>게임 Tech PM : 프로젝트의 기술적 목표 및 실행 계획 수립
            <ul className={"pl-[10px]"}>
              <li><ListBullet/>개발자와 협업하여 원활한 프로젝트 진행 보장</li>
              <li><ListBullet/>프로젝트의 일정, 예산, 리소스, 위험 요소 등을 관리하고, 진행 상황을 모니터링</li>
            </ul>
          </FAQItemCard>
        </li>
        <li>
          <FAQItemCard>
            <ListBullet/>게임 QA : 테스트 및 검증 작업을 통한 게임 품질 보증
            <ul className={"pl-[10px]"}>
              <li><ListBullet/>버그와 문제를 발견하고 보고하여, 사용자 경험 향상을 도모</li>
              <li><ListBullet/>테스트 방법, 시나리오, 환경 등을 기반으로 테스트 계획과 전략을 수립</li>
            </ul>
          </FAQItemCard>
        </li>
      </ul>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?
        <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
  {
    question: '어떤 게임을 만드나요?',
    children: <>
      <FAQItemCard>
        대표적 게임 엔진인 Unity를 활용하여 매 주차별 프로젝트를 통해 아래와 같이 다양한 장르의 게임을 제작할 수 있는 실무기반의 프로젝트를 진행합니다.
      </FAQItemCard>
      <FAQItemCard>
        <ul>
          <li><ListBullet/>아케이드 게임</li>
          <li><ListBullet/>슈팅 게임</li>
          <li><ListBullet/>액션 어드벤처</li>
          <li><ListBullet/>RPG 등</li>
        </ul>
      </FAQItemCard>
      <FAQItemCard>
        더 자세한 학습 상담이 필요하시다면?
        <Link href={"https://spartacodingclub.channel.io/support-bots/57439"} target={"_blank"}
              className={"underline"}>1:1 채팅상담 링크</Link>를 이용해주세요!
      </FAQItemCard>
    </>
  },
];