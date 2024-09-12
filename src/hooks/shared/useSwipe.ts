import React, {useState} from "react";

export const useSwipe = (prevAction: () => void, nextAction: () => void, threshold: number = 200) => {
  const [startX, setStartX] = useState(0); // 스와이프 시작 좌표
  const [endX, setEndX] = useState(0);     // 스와이프 종료 좌표

  // const handleMouseDown = (e) => {
  //   setStartX(e.clientX || e.touches[0].clientX);
  //   setEndX(e.clientX || e.touches[0].clientX)
  // };
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if ('clientX' in e) {
      // 마우스 이벤트
      setStartX(e.clientX);
      setEndX(e.clientX);
    } else {
      // 터치 이벤트
      setStartX(e.touches[0].clientX);
      setEndX(e.touches[0].clientX);
    }
  };

  // 마우스 또는 터치 이동 중 호출
  // const handleMouseMove = (e) => {
  //   if (startX) {
  //     const clientX = e.clientX || e.touches[0].clientX;
  //     setEndX(clientX);
  //   }
  // };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (startX) {
      const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      setEndX(clientX);
    }
  };

  // // 마우스 또는 터치가 끝났을 때 스와이프를 판단
  // const handleMouseUp = () => {
  //   // const threshold = 200; // 스와이프를 인식할 최소 이동 거리
  //   const deltaX = endX - startX;
  //
  //   if (Math.abs(deltaX) > threshold) {
  //     if (deltaX > 0) {
  //       prevAction(); // 좌 -> 우 스와이프 (이전)
  //     } else if (deltaX < 0) {
  //       nextAction(); // 우 -> 좌 스와이프 (다음)
  //     }
  //   }
  //
  //   // 초기화
  //   setStartX(0);
  //   setEndX(0);
  // };

  // 마우스 또는 터치가 끝났을 때 스와이프를 판단
  const handleMouseUp = () => {
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevAction(); // 좌 -> 우 스와이프 (이전)
      } else if (deltaX < 0) {
        nextAction(); // 우 -> 좌 스와이프 (다음)
      }
    }

    // 초기화
    setStartX(0);
    setEndX(0);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    moveDistance: startX - endX,
  }
}