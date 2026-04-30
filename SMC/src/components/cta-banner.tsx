'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Zap, Phone } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F5C518 0%, #c4971a 50%, #F5C518 100%)',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 rounded-full opacity-20 bg-white -top-20 -right-20" />
        <div className="absolute w-64 h-64 rounded-full opacity-15 bg-white -bottom-16 -left-16" />
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-10 bg-white top-1/2 left-1/3"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-6"
            style={{
              background: 'rgba(255,255,255,0.20)',
              color: 'white',
              border: '1.5px solid rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-display)',
            }}
          >
            <Zap className="w-4 h-4" />
             Limited Seats Available — Act Now!
          </motion.div>

          <h2
            className="font-display font-extrabold text-white mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.15)',
            }}
          >
            Don&apos;t Miss Your Chance to{' '}
            <br className="hidden sm:block" />
            Excel This Academic Year!
          </h2>

          <p
            className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Seats for the new batch are filling up fast. Join Shree Manav Classes today and give your child
            the expert guidance they deserve. Enroll before all seats are taken.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-200"
              style={{
                background: 'white',
                color: '#c4971a',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 4px 30px 0 rgba(0,0,0,0.25)',
              }}
            >
              Enroll Now — Secure Your Seat <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="tel:+919173771810"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Phone className="w-5 h-5" /> Call for Free Counselling
            </motion.a>
          </div>

          {/* Small print */}
          <p
            className="mt-6 text-sm text-white/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            No registration fee for the first counselling session · Call us anytime 9 AM – 7 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
