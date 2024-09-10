import React from 'react';
import {ContactUsFloatingButton} from "@/components/shared/contact-us-floating-button";
import {MainBanner} from "@/components/game/main-banner";
import SubNavbar from "@/components/game/sub-navbar";
import {CountdownBanner} from "@/components/game/countdown-banner";
import {ProgramEnrollmentStatusSection} from "@/components/game/program-enrollment-status";
import {ShowProjectResultSection} from "@/components/game/show-project-result";
import {WhyBecomeDeveloperSection} from "@/components/game/why-become-developer";
import {JuniorDeveloperRequirements} from "@/components/game/junior-developer-requirements";
import {ProgramIntroductionSection} from "@/components/game/program-introduction";
import {StudentTestimonialSection} from "@/components/game/student-testimonial";
import {CareerPathSection} from "@/components/game/career-path";
import {DetailedCurriculumSection} from "@/components/game/detailed-curriculum";
import {ShowTimeTable} from "@/components/game/show-time-table";
import {EmployedSeniorInterviewSection} from "@/components/game/employed-senior-interview";
import {ConsultationSection} from "@/components/game/consultation";
import {PortfolioProcessSection} from "@/components/game/portfolio-process";
import {PartnerCompanySection} from "../../components/game/partner-company";
import {PriceInformationSection} from "@/components/game/price-information";

const GameLandingPage = () => {
  return (
      <>
        <MainBanner/>
        <SubNavbar/>
        <CountdownBanner/>
        <ProgramEnrollmentStatusSection/>
        <ShowProjectResultSection/>
        <WhyBecomeDeveloperSection/>
        <JuniorDeveloperRequirements/>
        <ProgramIntroductionSection/>
        <StudentTestimonialSection/>
        <CareerPathSection/>
        <DetailedCurriculumSection/>
        <ShowTimeTable/>
        <EmployedSeniorInterviewSection/>
        <ConsultationSection/>
        <PortfolioProcessSection/>
        <PartnerCompanySection/>
        <PriceInformationSection/>
        <div className={"w-full fixed bottom-[100px] z-20"}>
          <ContactUsFloatingButton/>
        </div>
      </>
  );
};

export default GameLandingPage;