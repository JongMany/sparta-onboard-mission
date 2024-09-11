"use client"
import {useMediaQuery} from "react-responsive"
import {useEffect, useState} from "react";

export const useIsPc = () => {
  const [isPc, setIsPc] = useState(() => {
    const user = navigator.userAgent;
    let isCheck = true;

    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
      isCheck = false;
    }

    return isCheck;
  });

  const pcQuery = useMediaQuery({query: "(min-width: 1024px)"})
  useEffect(() => {
    setIsPc(pcQuery);
  }, [pcQuery]);

  return isPc;
}