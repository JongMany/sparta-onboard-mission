import React from 'react';
import {TimeTable} from "@/components/game/show-time-table/time-table/TimeTable";
import {FAQ} from "@/components/game/show-time-table/faq/FAQ";

export const ShowTimeTable = () => {
  return (
      <section id={"gameNineToNine"} className={"relative"}>
        <section className={"flex justify-center items-center py-[100px]"}>
          <section className={"w-full min-w-[328px] flex flex-col gap-[0px] max-w-[820px]"}>
            <TimeTable />
            <div className={"hidden"}></div>
            <FAQ />
          </section>
        </section>
      </section>
  );
};

