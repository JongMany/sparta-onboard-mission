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

const GameLandingPage = () => {
  return (
      <>
        <MainBanner />
        <SubNavbar />
        <CountdownBanner/>
        <ProgramEnrollmentStatusSection />
        <ShowProjectResultSection />
        <WhyBecomeDeveloperSection/>
        <JuniorDeveloperRequirements />
        <ProgramIntroductionSection/>
        <StudentTestimonialSection/>
        <CareerPathSection/>
        <DetailedCurriculumSection/>
        <div className={"w-full fixed bottom-[100px] z-20"}>
          <ContactUsFloatingButton />
        </div>
      </>
  );
};

export default GameLandingPage;