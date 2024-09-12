"use client"
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const useIsPc = () => {
  const [isPc, setIsPc] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      // 서버 사이드에서는 기본값으로 true 반환 (초기 상태 설정)
      return true;
    }

    const user = navigator.userAgent;
    let isCheck = true;

    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
      isCheck = false;
    }

    return isCheck;
  });

  const pcQuery = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPc(pcQuery);
    }
  }, [pcQuery]);

  return isPc;
};
