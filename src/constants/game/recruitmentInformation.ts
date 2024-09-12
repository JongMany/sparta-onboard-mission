import WritingImage from "@/assets/images/game/information/recruitment-information/writing.webp";
import ResultImage from "@/assets/images/game/information/recruitment-information/result.webp";
import CommunityImage from "@/assets/images/game/information/recruitment-information/community.webp";
import CheckImage from "@/assets/images/game/information/recruitment-information/check.webp";
import {StaticImageData} from "next/image";

export type RecruitmentInformation = {
  label: string;
  mainInformation: string;
  additionalInformation: string[];
}

export const recruitmentInformationList: RecruitmentInformation[] = [
  {label: "모집 마감", mainInformation: "24.09.12(목) 23:59까지", additionalInformation: []},
  {label: "교육 기간", mainInformation: "Unity 게임 개발 부트캠프 24.09.09 ~ 25.01.21", additionalInformation: []},
  {label: "교육 시간", mainInformation: "오전 9시 ~ 오후 9시 (월~금, 12시간 참여)", additionalInformation: ["* 타 교육 및 직장 병행 불가"]},
  {
    label: "교육 방법",
    mainInformation: "100% 온라인 (온라인 강의 수강, 실시간 특강, 팀프로젝트 등)",
    additionalInformation: ["온라인 강의 수강, 실시간 특강, 팀프로젝트 등"]
  },
  {
    label: "지원 자격",
    mainInformation: "내일배움카드 발급이 가능한 분 (만 75세 미만)",
    additionalInformation: ["* 최근 5년 이내 KDT 참여 이력 있는 경우 불가", "* 해외 거주 중인 경우 불가"]
  },
];

type ApplicationProcess = {
  icon: StaticImageData;
  step: string;
  description: string;
  additionalInformation: string;
}

export const applicationProcessList: ApplicationProcess[] = [
  {
    step: "서류 지원",
    additionalInformation: "24.09.12(목) 23:59까지",
    description: "내일배움캠프 지원 동기를\n간단히 작성해주세요.",
    icon: WritingImage, // 아이콘 이름 또는 경로
  },
  {
    step: "결과 발표",
    additionalInformation: "제출 후, 2일 이내 결과 안내",
    description: "꼼꼼히 살펴보고\n빠르게 결과를 알려드릴게요.",
    icon: ResultImage,
  },
  {
    step: "합격자 공지방 입장",
    additionalInformation: "내일배움캠프 프라이빗 커뮤니티",
    description: "합격하신 분들을 위한\n특별한 혜택이 있을지도 몰라요.",
    icon: CommunityImage,
  },
  {
    step: "최종 합류",
    additionalInformation: "HRD-Net 수강 신청",
    description: "HRD-Net 등록을 마무리하면,\n4개월간의 여정이 시작돼요.",
    icon: CheckImage,
  },
];