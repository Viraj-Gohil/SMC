'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Users, GraduationCap, Trophy, Clock } from 'lucide-react';

const stats = [
  { icon: Users, number: 3000, suffix: '+', label: 'Students Enrolled', color: '#1D3461' },
  { icon: GraduationCap, number: 99, suffix: '%', label: 'Result Record', color: '#1D3461' },
  { icon: Trophy, number: 30, suffix: '+', label: 'Years of Excellence', color: '#1D3461' },
  { icon: Clock, number: 20, suffix: ':1', label: 'Student-Teacher Ratio', color: '#1D3461' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>{count}{suffix}</span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDD835 0%, #F5C518 50%, #F9A825 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-10 bg-white -top-24 -left-24" />
        <div className="absolute w-64 h-64 rounded-full opacity-10 bg-white -bottom-12 -right-12" />
        <div
          className="absolute w-48 h-48 rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: '#F5C518' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-display font-extrabold"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              letterSpacing: '-0.02em',
              color: '#1D3461'
            }}
          >
            Our Results Speak{' '}
            <span style={{ color: '#152847' }}>For Themselves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="rounded-2xl p-7 text-center"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 8px 32px rgba(29, 52, 97, 0.15)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div
                  className="font-display font-extrabold mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#1D3461' }}
                >
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: '#3a4a6b' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
