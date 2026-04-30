'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, UserCheck, Target, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from '@/components/spotlight-card';
import { ScrollReveal } from '@/components/scroll-reveal';

const features = [
  {
    icon: UserCheck,
    title: 'Experienced Faculty',
    description: 'Our teachers have 10+ years of experience and are subject matter experts who make complex topics simple.',
    color: '#1D3461',
    bg: '#EEF2FF',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'We limit each batch to 15 students only, ensuring every student gets proper guidance and attention.',
    color: '#F5C518',
    bg: '#FFFDE7',
  },
  {
    icon: Target,
    title: 'Personal Attention',
    description: 'Regular one-on-one sessions to identify strengths and weaknesses, helping each student reach their potential.',
    color: '#1D3461',
    bg: '#EEF2FF',
  },
  {
    icon: ClipboardCheck,
    title: 'Weekly Tests & Doubt Solving',
    description: 'Structured weekly tests to track progress, plus dedicated doubt-solving sessions every day after class.',
    color: '#F5C518',
    bg: '#FFFDE7',
  },
  {
    icon: ShieldCheck,
    title: 'AC Classrooms & CCTV Security',
    description: 'Cool AC classrooms and CCTV-monitored premises keep every student comfortable, focused, and safe.',
    color: '#1D3461',
    bg: '#EEF2FF',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="py-24" style={{ background: '#fafbff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: '#EEF2FF',
              color: '#1D3461',
              border: '1.5px solid #c5cfed',
              fontFamily: 'var(--font-display)',
            }}
          >
            Why Choose Us
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#0f1928',
              letterSpacing: '-0.02em',
            }}
          >
            What Makes{' '}
            <span style={{ color: '#1D3461' }}>Shree Manav Classes</span>{' '}
            Different
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            We don&apos;t just teach — we mentor, guide, and support every student on their journey to success, with AC classrooms and CCTV-monitored facilities for safe, focused learning.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="group relative rounded-2xl p-7 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: 'white',
                  border: '1.5px solid #e8ecf8',
                  boxShadow: '0 2px 12px 0 rgba(29,52,97,0.06)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: feat.bg }}
                >
                  <Icon className="w-7 h-7" style={{ color: feat.color }} />
                </div>

                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: '#0f1928' }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
                >
                  {feat.description}
                </p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
