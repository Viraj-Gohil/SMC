'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

export function GlitchText({ text, className = '', glitchIntensity = 2 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Original text */}
      <motion.div
        animate={isGlitching ? {
          x: [0, -glitchIntensity, glitchIntensity, -glitchIntensity, 0],
          skewX: [0, -5, 5, -5, 0]
        } : { x: 0, skewX: 0 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>

      {/* Glitch layer 1 */}
      {isGlitching && (
        <motion.div
          className="absolute top-0 left-0 text-red-500/70"
          animate={{
            x: [0, glitchIntensity * 2, -glitchIntensity],
          }}
          transition={{ duration: 0.15 }}
          style={{ textShadow: '2px 0 #00ff00' }}
        >
          {text}
        </motion.div>
      )}

      {/* Glitch layer 2 */}
      {isGlitching && (
        <motion.div
          className="absolute top-0 left-0 text-blue-500/70"
          animate={{
            x: [0, -glitchIntensity * 2, glitchIntensity],
          }}
          transition={{ duration: 0.15 }}
          style={{ textShadow: '-2px 0 #ff00ff' }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}
