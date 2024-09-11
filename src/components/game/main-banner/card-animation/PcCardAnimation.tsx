"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import RemoteControl from "@/assets/images/game/main-banner/pc/remote-control.webp";
import Shield from "@/assets/images/game/main-banner/pc/shield.webp";
import CardGame from "@/assets/images/game/main-banner/pc/card-game.webp";
import ConsoleGame from "@/assets/images/game/main-banner/pc/console-game.webp";
import styles from "./PcCardAnimation.module.css"

const PcCardAnimation = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlipped(prev => !prev);
    }, 2000);
    return () => clearInterval(id);
  }, [])


  return (
      <div className={`hidden lg:absolute lg:h-[289px] lg:min-w-[1440px] lg:flex lg:justify-center lg:items-center lg:gap-[20px]`}>
        <Image src={RemoteControl} alt={"게임이미지1"} fetchPriority={"high"} width={277} height={289}
               className={`aspect-mainBannerPCImageRatio ${flipped ? styles.flip0 : styles.card0}`}/>
        <Image src={Shield} alt={"게임이미지2"} fetchPriority={"high"} width={277} height={289}
               className={`aspect-mainBannerPCImageRatio ${flipped ? styles.flip1 : styles.card1}`}/>
        <div className={"min-w-[496px]"}></div>
        <Image src={CardGame} alt={"게임이미지3"} fetchPriority={"high"} width={277} height={289}
               className={`aspect-mainBannerPCImageRatio ${flipped ? styles.flip2 : styles.card2}`}/>
        <Image src={ConsoleGame} alt={"게임이미지4"} fetchPriority={"high"} width={277} height={289}
               className={`aspect-mainBannerPCImageRatio ${flipped ? styles.flip3 : styles.card3}`}/>
      </div>
  );
};

export default PcCardAnimation;