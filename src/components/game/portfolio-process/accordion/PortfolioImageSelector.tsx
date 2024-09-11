import Image from "next/image";
import PcCareerProgramImage1 from "@/assets/images/game/information/portfolio-process/career_program_1_pc.webp";
import PcCareerProgramImage2 from "@/assets/images/game/information/portfolio-process/career_program_2_pc.webp";
import PcCareerProgramImage3 from "@/assets/images/game/information/portfolio-process/career_program_3_pc.webp";
import PcCareerProgramImage4 from "@/assets/images/game/information/portfolio-process/career_program_4_pc.webp";

export function PortfolioProcessImageSelector({selectedItemNumber}: { selectedItemNumber: number }) {
  switch (selectedItemNumber) {
    case 0:
      return <Image src={PcCareerProgramImage1} alt={"이력서, 포트폴리오"} width={390} height={430}
                    className={"text-transparent"}/>
    case 1:
      return <Image src={PcCareerProgramImage2} alt={"기술 면접 준비"} width={390} height={430}
                    className={"text-transparent"}/>
    case 2:
      return <Image src={PcCareerProgramImage3} alt={'채용 설명회'} width={390} height={430} className={"text-transparent"}/>
    case 3:
      return <Image src={PcCareerProgramImage4} alt={"채용 연계 시스템"} width={390} height={430}
                    className={"text-transparent"}/>
    default:
      return null;
  }
}