'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
}

export function AnimatedBorder({
  children,
  className = '',
  borderWidth = 2
}: AnimatedBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        boxShadow: [
          '0 0 20px rgba(245, 197, 24, 0.3)',
          '0 0 40px rgba(245, 197, 24, 0.5)',
          '0 0 20px rgba(245, 197, 24, 0.3)'
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      style={{
        border: `${borderWidth}px solid rgba(245, 197, 24, 0.3)`,
        borderRadius: '12px'
      }}
    >
      {children}
    </motion.div>
  );
}
