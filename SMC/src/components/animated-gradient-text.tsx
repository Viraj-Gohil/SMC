'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export function AnimatedGradientText({ text, className = '', duration = 3 }: AnimatedGradientTextProps) {
  return (
    <motion.div
      className={`bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(270deg, #1D3461 0%, #F5C518 25%, #1D3461 50%, #F5C518 75%, #1D3461 100%)',
        backgroundSize: '200% 200%',
      }}
    >
      {text}
    </motion.div>
  );
}
