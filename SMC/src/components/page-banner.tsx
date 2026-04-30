'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageBannerProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumb?: string;
  icon?: string;
}

export default function PageBanner({ title, highlight, subtitle, breadcrumb, icon }: PageBannerProps) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14"
      style={{
        background: 'linear-gradient(135deg, #1D3461 0%, #152847 60%, #1e3f7a 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'min(400px, 70vw)',
            height: 'min(400px, 70vw)',
            background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)',
            top: '-15%',
            right: '-10%',
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'min(300px, 55vw)',
            height: 'min(300px, 55vw)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
          }}
          animate={{ scale: [1, 1.2, 1], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Diagonal shimmer */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '2px',
            height: '200%',
            background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.3) 50%, transparent)',
            top: '-50%',
            left: '-5%',
            rotate: 25,
            filter: 'blur(1px)',
          }}
          animate={{ x: ['0vw', '130vw'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 6 }}
        />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold mb-5"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-display)' }}
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span style={{ color: '#F5C518' }}>{breadcrumb || title}</span>
        </motion.div>

        {/* Icon + Title */}
        <div className="flex items-center gap-4">
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 250 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: 'rgba(245,197,24,0.18)',
                border: '1.5px solid rgba(245,197,24,0.35)',
              }}
            >
              {icon}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            {title}{' '}
            {highlight && (
              <span style={{ color: '#F5C518' }}>{highlight}</span>
            )}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-3 text-base leading-relaxed max-w-2xl"
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontFamily: 'var(--font-sans)',
              paddingLeft: icon ? '4.5rem' : 0,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Yellow accent line */}
        <motion.div
          className="mt-6 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, #F5C518, transparent)', maxWidth: 120 }}
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
