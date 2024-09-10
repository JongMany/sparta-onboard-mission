"use client";
import Link from "next/link";
import NewLogo from '@/assets/images/newLogo.a1d35235.svg'
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import {useScrollDirection} from "@/hooks/shared/useScrollDirection";
import {ReviewAndBlogDropdownMenu} from "@/components/shared/main-header/dropdown-menu/ReviewAndBlogDropdownMenu";
import {useState} from "react";
import {CustomerCenterDropdownMenu} from "@/components/shared/main-header/dropdown-menu/CustomerCenterDropdownMenu";
import {BootcampDropdownMenu} from "@/components/shared/main-header/dropdown-menu/BootcampDropdownMenu";
import {DownArrowIcon} from "@/components/shared/icon/DownArrowIcon";
import {UpArrowIcon} from "@/components/shared/icon/UpArrowIcon";

type ActiveDropdown = 'none' | 'bootcamp' | 'review' | 'customerCenter'

export function MainHeader() {
  const direction = useScrollDirection();
  const [currentActiveDropdown, setCurrentActiveDropdown] = useState<ActiveDropdown>('none');

  const activeDropdownMenuHandler = (dropdown: ActiveDropdown) => () => {
    setCurrentActiveDropdown(dropdown);
  }

  // scroll 방향이 아래면 숨겨짐, scroll 방향이 위면 보여짐
  return <nav
      className={`fixed w-full h-fit backdrop-blur-[10px] border-b-[1px] border-b-[#e4ebf0] flex flex-col justify-center items-center z-[21] transition-all duration-300 ease ${direction === "down" ? 'hidden' : ''} bg-white`}>
    <div className={"px-6 h-[60px] w-full flex items-center justify-between max-w-[1200px]"}>
      <div className={"flex items-center gap-[40px]"}>
        <Link href={'/'} className={"min-h-[50.5px]"}>
          <Image className={"mt-[3px]"} src={NewLogo} alt={"스파르타 내일배움캠프"} width={134} height={40}/>
        </Link>
        <div className={"flex gap-[8px]"}>
          <div data-is-hover={currentActiveDropdown === "bootcamp"}
               className={"relative px-[10px] py-[6px] hover:bg-hoverGreyColor hover:rounded-[6px]"}
               onMouseEnter={activeDropdownMenuHandler('bootcamp')} onMouseLeave={activeDropdownMenuHandler('none')}>
            <div className={"flex gap-[4px] cursor-pointer items-center"}>
              <span>부트캠프</span>
              <span>
                {currentActiveDropdown === "bootcamp" ? <UpArrowIcon strokeColor={"black"}/> :
                    <DownArrowIcon strokeColor={"black"}/>}

              </span>
            </div>
            {/*  모달 들어갈 자리*/}
            <BootcampDropdownMenu isHover={currentActiveDropdown === "bootcamp"}/>
          </div>
          <Link href={"/job-support"} data-isHover={false}
                className={"flex items-center gap-[4px] px-[10px] py-[6px] hover:bg-hoverGreyColor hover:rounded-[6px]"}>취업
            지원</Link>
          <div data-is-hover={currentActiveDropdown === "review"}
               className={"relative px-[10px] py-[6px] hover:bg-hoverGreyColor hover:rounded-[6px]"}
               onMouseEnter={activeDropdownMenuHandler('review')} onMouseLeave={activeDropdownMenuHandler('none')}>
            <div className={"flex gap-[4px] cursor-pointer items-center "}>
              <span>후기&블로그</span>
              <span>
                {currentActiveDropdown === "review" ? <UpArrowIcon strokeColor={"black"}/> :
                    <DownArrowIcon strokeColor={"black"}/>}
              </span>
            </div>
            {/*  모달 들어갈 자리*/}
            <ReviewAndBlogDropdownMenu isHover={currentActiveDropdown === "review"}/>
          </div>
          <Link href={"/event"}
                className={"flex items-center gap-[4px] px-[10px] py-[6px] hover:bg-hoverGreyColor hover:rounded-[6px]"}>이벤트</Link>
        </div>
      </div>
      <div className={"flex gap-[8px] items-center"}>
        <span className={"text-fontGray cursor-pointer hover:bg-hoverGreyColor hover:rounded-[6px]"}>
          <Link href={"/mypage/apply-status"}>
            <div className={"relative px-[10px] py-[6px] "}>나의 캠프</div>
          </Link>
        </span>
        <span className={"text-fontGray"}>|</span>
        <div data-is-hover={currentActiveDropdown === "customerCenter"}
             className={"relative flex gap-[4px] items-center px-[10px] py-[6px] hover:bg-hoverGreyColor hover:rounded-[6px]"}
             onMouseEnter={activeDropdownMenuHandler('customerCenter')}
             onMouseLeave={activeDropdownMenuHandler('none')}>
          <div className={"text-fontGray cursor-pointer flex gap-[4px] items-center"}>
            <span>고객센터</span>
            <span>
              {currentActiveDropdown === "customerCenter" ? <UpArrowIcon strokeColor={"#81898F"}/> :
                  <DownArrowIcon strokeColor={"#81898F"}/>}
            </span>
          </div>
          {/*  모달 들어갈 자리*/}
          <CustomerCenterDropdownMenu isHover={currentActiveDropdown === "customerCenter"}/>
        </div>
      </div>

    </div>
  </nav>
}