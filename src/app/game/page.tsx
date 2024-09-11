import React from 'react';
import {MobileContactUsFloatingButton, PcContactUsFloatingButton} from "@/components/shared/contact-us-floating-button";
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

import {PriceInformationSection} from "@/components/game/price-information";
import {RecruitmentInformationSection} from "@/components/game/recruitment-information";
import {ShareLinkSection} from "@/components/game/share-link";

import {PartnerCompanySection} from "@/components/game/partner-company";
import {FAQSection} from "@/components/game/frequency-asked-question";
import {RegistrationAlertBanner} from "@/components/shared/alert-banner/RegistrationAlertBanner";

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
        <RecruitmentInformationSection/>
        <ShareLinkSection/>
        <FAQSection/>
        <div className={"hidden lg:w-full lg:fixed lg:bottom-[100px] lg:z-20 lg:block"}>
          <PcContactUsFloatingButton/>
        </div>
        <div className={"lg:hidden z-20 visible fixed bottom-[84px] h-[80px] min-h-[80px] right-[8px]"}>
          <MobileContactUsFloatingButton/>
        </div>
        <RegistrationAlertBanner text={"🚀 올해 마지막 개강!"} rest={13} total={120} startObserverId={"gameProject"} endObserverId={"gameFaq"}/>
      </>
  );
};

export default GameLandingPage;