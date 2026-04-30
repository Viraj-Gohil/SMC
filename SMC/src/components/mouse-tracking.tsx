'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MouseTrackingProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MouseTracking({ children, strength = 0.3, className = '' }: MouseTrackingProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (clientX - centerX) * strength * 0.01;
      const y = (clientY - centerY) * strength * 0.01;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);

  if (!isClient) return <div className={className}>{children}</div>;

  return (
    <motion.div
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
