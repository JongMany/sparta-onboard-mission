import {PortfolioProcessAccordion} from "@/components/game/portfolio-process/accordion/PortfolioProcessAccordion";

export const PortfolioProcessSection = () => {
  return (
      <section id={"gamePortfolioProcess"} className={"relative"}>
        <section id={"gameCareerSupport"} className={"py-[100px] flex justify-center items-center"}>
          <section className={"w-full min-w-[328px] flex flex-col m-0 max-w-[820px] gap-[60px]"}>
            <section className={"flex flex-col gap-[12px]"}>
              <h3 className={"relative font-[600] text-[20px] leading-[26px] text-[rgb(255,108,122)]"}>취업지원</h3>
              <h2 className={"relative font-[700] text-[32px] leading-[45px] text-[rgb(20,22,23)] whitespace-pre-wrap"}>
                경쟁력있는 개발자로<br/>
                만들어주는 취업 프로그램
              </h2>
            </section>
            <PortfolioProcessAccordion/>
          </section>
        </section>
      </section>
  )
}