'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Heart, Lightbulb, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  { icon: Award, label: '99% Results', sub: 'Every single year', color: '#F5C518' },
  { icon: Users, label: '3000+ Students', sub: 'Successfully coached', color: '#F5C518' },
  { icon: Clock, label: '30+ Years', sub: 'Of excellence', color: '#F5C518' },
  { icon: Lightbulb, label: '20:1 Ratio', sub: 'Student-Teacher', color: '#F5C518' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To provide quality education with personal attention, ensuring every student reaches their full potential regardless of their starting point.' },
  { icon: Heart, title: 'Our Care', description: 'We treat every student like family. Our teachers are mentors who invest personally in each student\'s academic and personal growth.' },
  { icon: Lightbulb, title: 'Our Approach', description: 'Concept-based teaching with regular assessments, doubt sessions, and practical problem-solving to build true understanding.' },
];

const mentorCard = {
  name: 'Ketan Nagarsheth',
  role: 'Founder',
  note: 'Shree Manav Classes',
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden p-10"
              style={{
                background: 'linear-gradient(135deg, #1D3461 0%, #152847 100%)',
                minHeight: '420px',
              }}
            >
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 bg-white -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 bg-white translate-y-10 -translate-x-10" />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 text-sm font-bold"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#F5C518',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Est. 1994
                </div>

                <h3
                  className="font-display font-extrabold text-white text-3xl mb-4 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  A Decade of{' '}
                  <span style={{ color: '#F5C518' }}>Academic Excellence</span>
                </h3>

                <p
                  className="text-white/80 text-base leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Founded in 1994, Shree Manav Classes has been shaping bright futures and guiding students toward academic excellence for over 10 years. We began with a simple belief — every student deserves quality education, personal attention, and the right guidance. That belief continues to inspire everything we do.
                </p>

                {/* Achievements grid */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((ach, i) => {
                    const Icon = ach.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(255,255,255,0.10)' }}
                      >
                        <Icon className="w-5 h-5 mb-2" style={{ color: ach.color }} />
                        <div
                          className="font-display font-bold text-white text-base"
                        >
                          {ach.label}
                        </div>
                        <div className="text-white/60 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                          {ach.sub}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
              style={{
                background: 'white',
                border: '2px solid #F5E19A',
                maxWidth: 200,
              }}
            >
              <div
                className="font-display font-extrabold text-2xl mb-1"
                style={{ color: '#F5C518' }}
              >
                30+ Years
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: '#3a4a6b', fontFamily: 'var(--font-display)' }}
              >
                of Trusted Excellence in Education
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
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
              About Shree Manav Classes
            </div>

            <h2
              className="font-display font-extrabold mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: '#0f1928',
                letterSpacing: '-0.02em',
              }}
            >
              Quality Education with{' '}
              <span style={{ color: '#1D3461' }}>Personal Attention</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
            >
              At Shree Manav Classes, we believe every student has the potential to excel. Our experienced
              teachers bring clarity to complex subjects through interactive teaching, regular practice
              sessions, and one-on-one mentoring. We don&apos;t just prepare students for exams — we
              prepare them for life.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
                    className="flex items-start gap-4 p-5 rounded-2xl group hover:shadow-md transition-all duration-300"
                    style={{
                      background: '#fafbff',
                      border: '1.5px solid #e8ecf8',
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: i % 2 === 0 ? '#EEF2FF' : '#FFFDE7',
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: i % 2 === 0 ? '#1D3461' : '#F5C518' }}
                      />
                    </div>
                    <div>
                      <h4
                        className="font-display font-bold text-sm mb-1"
                        style={{ color: '#0f1928' }}
                      >
                        {val.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#405070', fontFamily: 'var(--font-sans)' }}
                      >
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Sir Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16"
        >
          <div
            className="max-w-md mx-auto rounded-2xl p-6 text-center"
            style={{
              background: 'white',
              border: '1.5px solid #e8ecf8',
              boxShadow: '0 6px 24px rgba(29,52,97,0.08)',
            }}
          >
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4" style={{ border: '2px solid #F5E19A' }}>
              <Image
                src="/sir-dp.jpg"
                alt="Ketan Nagarsheth"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-extrabold text-xl" style={{ color: '#1D3461' }}>
              {mentorCard.name}
            </h3>
            <p className="text-sm font-semibold mt-1" style={{ color: '#F5C518' }}>
              {mentorCard.role}
            </p>
            <p className="text-xs mt-3" style={{ color: '#4a5878', fontFamily: 'var(--font-sans)' }}>
              {mentorCard.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
