import React from 'react';
import {ContactUsFloatingButton} from "@/components/shared/contact-us-floating-button";
import {MainBanner} from "@/components/game/main-banner";
import SubNavbar from "@/components/game/sub-navbar";
import {CountdownBanner} from "@/components/game/countdown-banner";

const GameLandingPage = () => {
  return (
      <>
        <MainBanner />
        <SubNavbar />
        <CountdownBanner/>
        <div className={"w-full fixed bottom-[100px] z-20"}>
          <ContactUsFloatingButton />
        </div>
      </>
  );
};

export default GameLandingPage;