"use client";
import React, {useState} from 'react';

type Props = {
  title: string;
  description: string;
  projectName?: string;
  detailInformation: React.ReactNode
}
const AccordionItem = ({title, description, projectName, detailInformation}: Props) => {
  const [showDetailInformation, setShowDetailInformation] = useState(false);

  const toggleDetailInformation = () => {
    setShowDetailInformation(prev => !prev);
  }

  return (

      <div
          className={"w-full min-w-[328px] bg-white border-[1px] border-[rgb(228,235,240)] shadow-accordion-shadow w-[820px] py-[20px] px-[24px] rounded-[12px] break-keep cursor-pointer"}>
        <div className={"flex w-full items-center gap-[40px]"} onClick={toggleDetailInformation}>
          <div className={"w-full"}>
            <p className={"font-[600] text-[16px] leading-[26px] text-[rgb(20,22,23)]"}>{title}</p>
            <p className={"font-[400] text-[14px] leading-[22px] pt-[4px] whitespace-pre-wrap text-[rgb(58,62,65)]"}>{description}</p>
            {projectName && <div
                className={"flex items-start text-[rgb(58,62,65)] mt-[12px] gap-[10px] leading-[22px] text-[14px] font-[400]"}>
              <div
                  className={"shrink-0 text-[rgb(232,52,78)] w-fit bg-[rgb(255,241,244)] rounded-[4px] py-[2px] px-[8px] text-[13px] leading-[20px] font-[400]"}>프로젝트
              </div>
              {projectName}
            </div>}
          </div>
          {showDetailInformation ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929L17.2929 15.7071ZM12 9L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L12 9ZM5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071C5.68342 16.0976 6.31658 16.0976 6.70711 15.7071L5.29289 14.2929ZM18.7071 14.2929L12.7071 8.29289L11.2929 9.70711L17.2929 15.7071L18.7071 14.2929ZM11.2929 8.29289L5.29289 14.2929L6.70711 15.7071L12.7071 9.70711L11.2929 8.29289Z"
                    fill="#9DA7AE"></path>
              </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.70711 9.29289C6.31658 8.90237 5.68342 8.90237 5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071L6.70711 9.29289ZM12 16L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L12 16ZM18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289C18.3166 8.90237 17.6834 8.90237 17.2929 9.29289L18.7071 10.7071ZM5.29289 10.7071L11.2929 16.7071L12.7071 15.2929L6.70711 9.29289L5.29289 10.7071ZM12.7071 16.7071L18.7071 10.7071L17.2929 9.29289L11.2929 15.2929L12.7071 16.7071Z"
                    fill="#9DA7AE"></path>
              </svg>}
        </div>
        {/* 추가 정보 */}
        {showDetailInformation && detailInformation}
      </div>
  );
};

export default AccordionItem;