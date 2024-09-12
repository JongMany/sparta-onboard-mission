import React, {PropsWithChildren} from 'react';

type Props = {
  isHover: boolean;
}
export const DropdownMenuContainer = ({isHover, children}: PropsWithChildren<Props>) => {
  return (
      <div
          className={`${isHover ? "flex flex-col" : "hidden"} bg-white top-[42px] left-0 absolute rounded-[8px] z-[1200] text-[14px] leading-[22px] text-[#141617]`}>
        <div
            className={"flex py-[16px] px-[24px] items-start gap-[24px] rounded-[8px] border-[#e4ebf0] bg-white shadow-dropdown-menu"}>
          {children}
        </div>
      </div>
  );
};

