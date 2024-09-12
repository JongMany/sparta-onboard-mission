"use client";
import { useState, useEffect } from 'react';
export const useHash = () => {
  const [hash, setHash] = useState(() => {
    if (typeof window === "undefined") {
      // 서버 사이드에서는 기본값으로 true 반환 (초기 상태 설정)
      return "";
    }
    return window?.location?.hash || ""
  });
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
};