'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rana Khushi V.',
    role: 'Student - Class 10th Topper (Batch 2025)',
    text: 'The teachers explained every concept clearly and kept us focused with regular tests. I felt fully prepared before boards and scored 95.5%.',
    rating: 5,
    avatar: 'RK',
    color: '#1D3461',
  },
  {
    name: 'Rana Nandani S.',
    role: 'Student - Class 12th Commerce Topper (Batch 2024)',
    text: 'Personal attention and consistent practice sessions made a huge difference. The guidance for writing answers and time management helped me score 97.02%.',
    rating: 5,
    avatar: 'RN',
    color: '#F5C518',
  },
  {
    name: 'Mahant Purvi J.',
    role: 'Student - Class 10th Topper (Batch 2016)',
    text: 'The faculty support was excellent, especially during revision time. Daily doubt-solving and weekly tracking helped me reach 93.78% in the board exam.',
    rating: 5,
    avatar: 'MP',
    color: '#1D3461',
  },
  {
    name: 'Vhora Sakina K.',
    role: 'Student - Class 12th Commerce Topper (Batch 2009)',
    text: 'Small batches and regular feedback from teachers kept me on track. The class environment was motivating and helped me score 79% with confidence.',
    rating: 5,
    avatar: 'VS',
    color: '#F5C518',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F5C518' }} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, white 0%, #f4f7ff 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Student &amp; Parent Reviews
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#0f1928',
              letterSpacing: '-0.02em',
            }}
          >
            What Our Students{' '}
            <span style={{ color: '#1D3461' }}>Say</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            Real feedback from real students and parents who have experienced the Shree Manav Classes difference.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Card */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'white',
              border: '1.5px solid oklch(0.92 0.015 255)',
              boxShadow: '0 8px 40px 0 rgba(29,52,97,0.10)',
              minHeight: '320px',
            }}
          >
            {/* Quote icon top-left */}
            <div
              className="absolute top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: '#EEF2FF' }}
            >
              <Quote className="w-6 h-6" style={{ color: '#1D3461' }} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="p-10 pt-12"
              >
                {/* Stars */}
                <div className="flex justify-center mb-5">
                  <StarRating count={t.rating} />
                </div>

                {/* Review text */}
                <p
                  className="text-center text-base leading-relaxed mb-8"
                  style={{
                    color: '#1a2c52',
                    fontFamily: 'var(--font-sans)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white"
                    style={{
                      background: t.color === '#1D3461'
                        ? 'linear-gradient(135deg, #1D3461, #1e3f7a)'
                        : 'linear-gradient(135deg, #F5C518, #e6b800)',
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <div
                      className="font-display font-bold text-sm"
                      style={{ color: '#0f1928' }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: '#4a5878', fontFamily: 'var(--font-sans)' }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
            style={{ background: 'white', border: '1.5px solid #dde2f4' }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: '#1D3461' }} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md"
            style={{ background: 'white', border: '1.5px solid #dde2f4' }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" style={{ color: '#1D3461' }} />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                background: i === current ? '#1D3461' : '#d0d8f0',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

