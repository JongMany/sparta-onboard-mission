import React from 'react';
import {PlusIcon} from "@/components/shared/icon/PlusIcon";
import Image from "next/image";
import {MobileTimeItemWithStyle} from "@/components/game/show-time-table/time-table/MobileTimeTable";
import {MinusIcon} from "@/components/shared/icon/MinusIcon";

type Props = {
  item: MobileTimeItemWithStyle;
  isOpen: boolean;
  toggleOpen: () => void;
}
export const ScheduleItem = ({item, isOpen, toggleOpen}: Props) => {
  return (
      <div className={"flex gap-[8px]"}>
        {/*Time*/}
        <div className={"flex flex-col justify-between"}>
          {item.time.map((time => <div
              key={time}
              className={"w-[40px] h-[48px] font-[400] text-[11px] leading-[16px] text-[rgb(157,167,174)]"}>{time}</div>))}
        </div>
        {/*Section*/}
        <div
            className={`relative w-full flex py-[16px] px-[12px] flex-col justify-center items-center gap-[12px] rounded-[8px] cursor-pointer border-[1px] ${item.additionalContainerClassName}`}
            onClick={toggleOpen}>
          {isOpen ? <MinusIcon className={"absolute top-[10px] right-[10px]"} strokeColor={item.strokeColor}/> :
              <PlusIcon className={"absolute top-[10px] right-[10px]"} strokeColor={item.strokeColor}/>}
          {/* Title */}
          <div className={"flex flex-col gap-[4px] items-center"}>
            <h1 className={"relative font-[600] text-[16px] leading-[22px] text-[rgb(95,102,107)]"}>{item.title}</h1>
            {item.description &&
                <h3 className={"relative font-[400] text-[13px] leading-[21px] text-[rgb(157,167,174)]"}>{item.description}</h3>}
          </div>
          {/* Detail Section */}
          <>
            {
                isOpen && item.detailInformation.map((information, index) =>
                    <div
                        key={`scheduleItem_${index}`}
                        className={"flex pt-[12px] px-[12px] pb-[16px] flex-col gap-[16px]  rounded-[8px] bg-white w-full"}>
                      <div className={"relative w-full object-cover"}>
                        <Image src={information.imageSrc} alt={""}
                               className={"relative h-full w-full inset-0 text-transparent object-cover"}/>
                      </div>
                      <div className={"flex flex-col gap-[8px]"}>
                        {information.descriptions.map((description) => <div key={`${description.grade}_${description.text}`}
                                                                            className={`${description.grade === "head" ? 'font-[700] text-[10px] leading-[15px] text-[rgb(255,108,122)]' : 'font-[400] text-[12px] leading-[18px] text-[rgb(95,102,107)]'}`}>
                          {description.text}
                        </div>)}
                      </div>
                    </div>
                )
            }
          </>
        </div>
      </div>
  );
};

