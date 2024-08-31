'use client';
import useMousePosition from '@/hooks/useMousePosition';
import { useIsClient, useWindowSize } from 'usehooks-ts';
import { motion, transform } from 'framer-motion';
import './styles.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isClient = useIsClient();
  const { width = 0, height = 0 } = useWindowSize();
  const { x = 0, y = 0, isPositionInitialized } = useMousePosition();

  const posX = x - width;
  const posY = y - height;

  return (
    <main className="flex justify-center items-center min-h-screen">
      <motion.div
        className="absolute inset-0 bg-grid"
        animate={{
          maskPosition:
            isClient && isPositionInitialized
              ? `${posX}px ${posY}px`
              : undefined,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      {children}
    </main>
  );
}
