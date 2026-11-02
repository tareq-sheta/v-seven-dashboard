import { useEffect, useState } from "react";

export const useAnimatedCounter = (targetNumber: number, duration = 1500) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (targetNumber <= 0) {
      setCurrentNumber(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out for a premium feel
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrentNumber(Math.round(eased * targetNumber));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration]);

  return { currentNumber };
};
