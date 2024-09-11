import { useState, useEffect } from 'react';

export const useDeadlineTimer = (deadline:Date) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const timeDiff = deadline - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, [deadline]);

  return timeRemaining;
};

