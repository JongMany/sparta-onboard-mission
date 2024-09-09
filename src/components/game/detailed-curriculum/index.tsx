import AccordionItem from "@/components/game/detailed-curriculum/accordion-item/AccordionItem";
import {DetailInformation} from "@/components/game/detailed-curriculum/detail-information/DetailInformation";

export const DetailedCurriculumSection = () => {
  return (
      <section id={"gameCurriculum"} className={"relative"}>
        <section className={"py-[100px] bg-[rgb(242,246,248)]"}>
          <section className={"min-w-[328px] w-full mx-auto my-0 max-w-[820px]"}>
            <h3 className={"relative font-[600] text-[20px] leading-[26px] text-[rgb(255,108,122)]"}>상세 커리큘럼</h3>
            <h2 className={"relative font-[700] text-[32px] leading-[45px] text-[rgb(20,22,23)] pt-[12px] pb-[60px] whitespace-pre-wrap"}>
              기획부터 개발까지 경험하도록,
              <br/>
              최신 트렌드를 반영한 커리큘럼</h2>
            <div
                className={"opacity-100 transition-opacity duration-150 ease-linear flex flex-col justify-center gap-[16px]"}>
              <AccordionItem title={"[01] 풀스택 미니 프로젝트 주차"}
                             description={"게임 개발 기초 강의를 수강하고 직접 미니 게임을 만들어 보며 협업의 경험을 쌓습니다."}
                             projectName={"팀원 TMI 카드 게임"}
                             detailInformation={<DetailInformation title={"게임 개발 강의 수강 및 미니 프로젝트 진행"}
                                                                   information={["Git에 대한 이해", "튜터진의 게임 개발 라이브 강의 해설", "팀원 TMI로 카드 게임을 만들어보는 미니 프로젝트"]}/>}
              />
              <AccordionItem title={"[02] 프로그래밍 기초 주차"} description={"학습한 내용을 응용한 팀 프로젝트를 통해 프로그래밍에 대한 깊은 이해도를 갖춥니다."}
                             detailInformation={<DetailInformation title={"본격적인 주특기 학습에 앞서 필요한 언어 기본기를 갖춥니다."}
                                                                   information={["C# 언어 기초, 심화 문법 이해", "C# 핵심 문법 라이브 특강", "개인 과제를 통한 응용과 복습"]}/>}
              />
              <AccordionItem title={"[03] 프로그래밍 심화 주차"} description={"본격적인 주특기 학습에 앞서 필요한 언어 기본기를 갖춥니다."}
                             projectName={"텍스트 RPG (C# -Console App)"}
                             detailInformation={<DetailInformation title={"본격적인 주특기 학습에 앞서 필요한 언어 기본기를 갖춥니다."}
                                                                   information={["C# 언어 응용", "클래스와 객체에 대한 이해", "데이터 관리 (변경, 유지)", "협업을 통한 형상 관리의 이해", "Git, Github 실습 (협업을 위한 버전 관리)", "튜터의 코드 리뷰 및 개선점 피드백"]}
                             />}
              />
              <AccordionItem title={"[04] 주특기 기초 주차"} description={"앞으로 나의 주특기로 가져갈 언어와 플랫폼에 대한 기초 역량을 키웁니다."}
                             projectName={"2D 게임 (고전 게임)"}
                             detailInformation={<>
                               <DetailInformation title={"Unity 기초"}
                                                  information={["유니티 환경, 게임 오브젝트, 스크립팅에 대한 이해", "플레이어, 오브젝트 이동, 애니메이션 학습", "게임 로직 및 상태 관리", "아케이드 게임, 2D 액션 어드벤처 게임 실습"]}
                               />
                               <DetailInformation title={"2D 게임 프로젝트 (고전 게임의 재해석)"}
                                                  information={["게임 구현의 필수 요소를 적용한 2D 게임", "충돌 처리에 대한 이해", "요구사항을 기반으로 한 게임 기획 및 개발", "튜터의 코드 리뷰 및 개선점 피드백"]}
                               />
                             </>}
              />
              <AccordionItem title={"[05] 주특기 숙련 주차"} description={"주특기를 뾰족하게 숙련하고 현업에 즉시 투입 가능할 정도의 역량을 갖춥니다."}
                             projectName={"3D 게임 (슈팅 게임, 아케이드 게임)"}
                             detailInformation={
                               <>
                                 <DetailInformation title={"UniUnity 숙련 (3D)"}
                                                    information={["어드벤처 게임을 기반으로 3D 게임 개발", "3D 게임 환경, 물리 엔진 및 충돌처리 학습", "3D 퍼즐게임, 3D 서바이벌 액션 게임 실습"]}
                                 />
                                 <DetailInformation title={"슈팅 게임, 아케이드 게임 프로젝트"}
                                                    information={["게임 로직 및 상태 관리를 관리를 적용한 3D 게임 개발", "3D 모델링, 애니메이션, 이벤트 처리 적용", "튜터의 코드 리뷰 및 개선점 피드백"]}
                                 />
                               </>
                             }
              />
              <AccordionItem title={"[06] 주특기 심화 주차"} description={"지금까지 학습한 내용을 바탕으로 실전과 동일한 환경의 게임을 개발합니다."}
                             projectName={"3D 멀티플레이 게임, RPG 게임"}
                             detailInformation={
                               <>
                                 <DetailInformation title={"Unity 심화)"}
                                                    information={["캐릭터 컨트롤러, 카메라 시스템, AI을 적용한 게임 구현", "포톤을 이용한 멀티플레이에 대한 이해", "게임 빌드 및 다양한 플랫폼 배포에 대한 이해"]}
                                 />
                                 <DetailInformation title={"슈팅 게임, 아케이드 게임 프로젝트"}
                                                    information={["기획부터 제작까지 직접 경험해보며 팀 단위의 프로그래밍", "튜터의 코드 리뷰 및 개선점 피드백"]}
                                 />
                               </>
                             }
              />
              <AccordionItem title={"[07] 최종 프로젝트 주차"}
                             description={"실제 유저가 플레이 할 수 있는 독창적인 게임을 A to Z로 제작합니다. 단순 구현이 아닌 기획, 보수, 개선의 경험을 모두 갖춥니다."}
                             projectName={"실전 게임 제작"}
                             detailInformation={
                               <DetailInformation title={"MVP(Minimum Viable Product, 최소 기능 제품) 구현과 배포"}
                                                  information={["조별로 담당 튜터 배정", "중간 발표를 통한 진행 상황 점검 및 공개 피드백", "견고한 코드 품질을 위한 성능 최적화 진행", "실제 유저 테스트(UT), 마케팅 집행", "튜터의 피드백을 반영한 적합성, 안정성, 보안성 개선 작업"]}
                               />
                             }
              />
            </div>
          </section>
        </section>
      </section>
  )
}