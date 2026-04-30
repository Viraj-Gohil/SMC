'use client';

import { motion } from 'framer-motion';

interface BlobBackgroundProps {
  className?: string;
}

export function BlobBackground({ className = '' }: BlobBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Blob 1 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(245, 197, 24, 0.1) 0%, transparent 70%)',
          top: '-200px',
          left: '-100px',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(29, 52, 97, 0.1) 0%, transparent 70%)',
          bottom: '-150px',
          right: '-50px',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(245, 197, 24, 0.05) 0%, transparent 70%)',
          top: '50%',
          right: '10%',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
    </div>
  );
}
