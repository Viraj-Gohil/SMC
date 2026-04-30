'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      350px at ${mouseX}px ${mouseY}px,
      rgba(245, 197, 24, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background,
        border: '1px solid rgba(245, 197, 24, 0.2)'
      }}
    >
      {children}
    </motion.div>
  );
}
