'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function EnhancedHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated gradient text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8 }
    }
  };

  const words = ['Excellence', 'in', 'Education', 'Starts', 'Here'];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background pt-32 pb-20">
      {/* Animated light rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(245, 197, 24, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Mouse tracking light effect */}
      <motion.div
        className="absolute w-96 h-96 pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        style={{
          background: 'radial-gradient(circle, rgba(29, 52, 97, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(245, 197, 24, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <motion.div
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        style={{
          background: 'radial-gradient(circle, rgba(29, 52, 97, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen pt-12">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="px-4 py-2 rounded-full border border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5 backdrop-blur-sm">
              <span className="text-sm font-semibold" style={{ color: '#F5C518' }}>
                🎓 Welcome to Excellence
              </span>
            </div>
          </motion.div>

          {/* Animated Main Heading with 3D effect */}
          <motion.div
            className="mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className="font-display text-5xl md:text-7xl font-bold inline-block"
                  style={{
                    background: idx % 2 === 0 
                      ? 'linear-gradient(135deg, #1D3461 0%, #F5C518 100%)'
                      : 'linear-gradient(135deg, #F5C518 0%, #1D3461 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 4px 20px rgba(29, 52, 97, 0.1))'
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ color: '#3a4a6b' }}
          >
            Premium coaching institute with expert faculty, personalized learning, and proven results. Join 500+ successful students.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '500+', label: 'Students' },
              { value: '100%', label: 'Results' },
              { value: '15:1', label: 'Ratio' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="relative p-4 rounded-lg backdrop-blur-sm border border-accent/20"
                style={{ background: 'rgba(245, 197, 24, 0.05)' }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 32px rgba(245, 197, 24, 0.15)'
                }}
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  style={{ color: '#F5C518' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm" style={{ color: '#3a4a6b' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-8 py-4 rounded-lg font-semibold transition-all relative overflow-hidden group"
              style={{ background: '#F5C518', color: '#1D3461' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0"
                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <span className="relative">Enroll Now</span>
            </motion.button>

            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all"
                style={{ borderColor: '#F5C518', color: '#1D3461' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(245, 197, 24, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs" style={{ color: '#3a4a6b' }}>Scroll to explore</span>
              <svg
                className="w-6 h-6"
                style={{ color: '#F5C518' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
