'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}

export function RippleButton({ children, onClick, className = '', style, href }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const content = (
    <>
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            background: 'rgba(255, 255, 255, 0.5)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 4],
            opacity: [1, 0],
          }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`relative overflow-hidden inline-block ${className}`}
        style={style}
        onClick={handleClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
