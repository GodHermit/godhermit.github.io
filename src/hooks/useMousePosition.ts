'use client';

import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const useMousePosition = () => {
  const [isPositionInitialized, setIsPositionInitialized] = useState(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useIsomorphicLayoutEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      if (!isPositionInitialized) {
        setIsPositionInitialized(true);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return {...mousePosition, isPositionInitialized};
};
export default useMousePosition;
