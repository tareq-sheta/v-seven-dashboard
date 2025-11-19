import { useEffect, useState } from "react";
export const useAnimatedCounter = (targetNumber, duration = 2000) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / targetNumber); // Calculate interval for smooth increments

    const timer = setInterval(() => {
      start += 1;
      setCurrentNumber(start);

      if (start === targetNumber) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetNumber, duration]);

  return { currentNumber };
};
