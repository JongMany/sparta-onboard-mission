import React from 'react';
import RemoteControl from "@/assets/images/game/main-banner/mobile/remote-control.webp";
import Shield from "@/assets/images/game/main-banner/mobile/shield.webp";
import CardGame from "@/assets/images/game/main-banner/mobile/card-game.webp";
import ConsoleGame from "@/assets/images/game/main-banner/mobile/console-game.webp";
import Image from "next/image";
export const MobileCardAnimation = () => {
  return (
      <div className={"flex overflow-hidden mt-[55px] h-fit"}>
        <ul className={"lg:hidden absolute flex w-max animate-slide"}>
          <Image src={Shield} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={ConsoleGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={RemoteControl} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={CardGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={Shield} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={ConsoleGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={RemoteControl} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={CardGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
        </ul>
        <ul className={"lg:hidden absolute flex w-max animate-slide2"}>
          <Image src={Shield} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={ConsoleGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={RemoteControl} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={CardGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={Shield} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={ConsoleGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={RemoteControl} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
          <Image src={CardGame} alt={'카드 이미지'} width={135} height={141} className={"mr-[7px] text-transparent"}/>
        </ul>
      </div>
  );
};

