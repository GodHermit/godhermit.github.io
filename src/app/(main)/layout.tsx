'use client';
import useMousePosition from '@/hooks/useMousePosition';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { useIsClient, useWindowSize } from 'usehooks-ts';
import './styles.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useIsClient();
  const { width = 0, height = 0 } = useWindowSize();
  const { x = 0, y = 0, isPositionInitialized } = useMousePosition();
  const [scope, animate] = useAnimate();

  const posX = x - width * 2.5;
  const posY = y - height * 2.5;

  useEffect(() => {
    if (width > 768) {
      return;
    }

    animate(
      scope.current,
      {
        mask: [
          `radial-gradient(circle, rgba(0, 0, 0, .8) 0px, rgba(0, 0, 0, .1) 200px) no-repeat`,
          `radial-gradient(circle, rgba(0, 0, 0, .8) 0px, rgba(0, 0, 0, .1) 400px) no-repeat`,
          `radial-gradient(circle, rgba(0, 0, 0, .8) 0px, rgba(0, 0, 0, .1) 200px) no-repeat`,
        ],
      },
      {
        duration: 5,
        repeat: Infinity,
      }
    );
  }, [width]);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <motion.div
        ref={scope}
        className="absolute inset-0 bg-grid"
        animate={{
          maskPosition:
            isClient && isPositionInitialized && width > 768
              ? `${posX}px ${posY}px`
              : undefined,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <div
        className="fixed inset-0 z-[999] backdrop-blur pointer-events-none"
        style={{
          maskSize: `500vw 500vh`,
          mask: `radial-gradient(circle, rgba(0, 0, 0, 0) 500px, rgba(0, 0, 0, 1) 700px) no-repeat`,
        }}
      />
      <div className="fixed inset-0 z-[999] opacity-[0.06] pointer-events-none bg-noise" />
      {children}
    </main>
  );
}
