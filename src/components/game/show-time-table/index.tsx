import React from 'react';
import {TimeTable} from "@/components/game/show-time-table/time-table/TimeTable";
import {FAQ} from "@/components/game/show-time-table/faq/FAQ";
import {MobileTimeTable} from "@/components/game/show-time-table/time-table/MobileTimeTable";

export const ShowTimeTable = () => {
  return (
      <section id={"gameNineToNine"} className={"relative"}>
        <section className={"flex justify-center items-center lg:py-[100px] py-[80px]"}>
          <section className={"w-full min-w-[328px] flex flex-col gap-[40px] lg:gap-[0px] max-w-[600px] lg:max-w-[820px] mx-[16px] lg:m-0"}>
            <TimeTable />
            <MobileTimeTable />
            <FAQ />
          </section>
        </section>
      </section>
  );
};

