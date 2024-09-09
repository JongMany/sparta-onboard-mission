import React from 'react';
import Image from "next/image";
import RemoteControl from "@/assets/images/game/main-banner/pc/remote-control.webp";
import Shield from "@/assets/images/game/main-banner/pc/shield.webp";
import CardGame from "@/assets/images/game/main-banner/pc/card-game.webp";
import ConsoleGame from "@/assets/images/game/main-banner/pc/console-game.webp";
const PcCardAnimation = () => {
  return (
      <div className={"absolute h-[289px] min-w-[1440px] flex justify-center items-center gap-[20px]"}>
        <Image src={RemoteControl} alt={"게임이미지1"} width={277} height={289} className={"aspect-mainBannerPCImageRatio"} />
        <Image src={Shield} alt={"게임이미지2"} width={277} height={289} className={"aspect-mainBannerPCImageRatio"} />
        <div className={"min-w-[496px]"}></div>
        <Image src={CardGame} alt={"게임이미지3"} width={277} height={289} className={"aspect-mainBannerPCImageRatio"} />
        <Image src={ConsoleGame} alt={"게임이미지4"} width={277} height={289} className={"aspect-mainBannerPCImageRatio"} />
      </div>
  );
};

export default PcCardAnimation;