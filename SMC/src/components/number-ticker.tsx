'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className = ''
}: NumberTickerProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(direction === 'down' ? value : 0);

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      let current = direction === 'down' ? value : 0;
      const step = direction === 'down' ? -1 : 1;
      const interval = setInterval(() => {
        current += step;
        setDisplayValue(current);

        if ((direction === 'down' && current <= 0) || (direction === 'up' && current >= value)) {
          clearInterval(interval);
          setDisplayValue(value);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [inView, value, direction, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {displayValue}
    </motion.div>
  );
}
