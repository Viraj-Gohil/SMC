'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Suthar Dhruvi A.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'The teachers gave personal guidance, regular tests, and clear feedback. It helped me stay confident and score well in board exams.',
    rating: 5,
    avatar: 'SD',
    color: '#1D3461',
  },
  {
    name: 'Solanki Janvi H.',
    role: 'Student - Class 12th Commerce Topper (Batch 2026)',
    text: 'Regular revision, test practice, and one-to-one guidance from teachers helped me stay focused and perform confidently in HSC board exams.',
    rating: 5,
    avatar: 'SJ',
    color: '#F5C518',
  },
  {
    name: 'Parmar Kevang D.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'Weekly tests and doubt-solving sessions improved my speed and accuracy. The teachers supported me throughout exam preparation.',
    rating: 5,
    avatar: 'PK',
    color: '#1D3461',
  },
  {
    name: 'Rana Jaydeep S.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'The study plan was practical and easy to follow. Regular feedback helped me strengthen weak topics before board exams.',
    rating: 5,
    avatar: 'RJ',
    color: '#F5C518',
  },
  {
    name: 'Rana Vidhi M.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'Teachers explained concepts step by step and guided me in revision. I felt confident and well prepared for every paper.',
    rating: 5,
    avatar: 'RV',
    color: '#1D3461',
  },
  {
    name: 'Rana Anjali M.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'The classroom environment was motivating and focused. Test practice and mentor support helped me improve consistently.',
    rating: 5,
    avatar: 'RA',
    color: '#F5C518',
  },
  {
    name: 'Prajapati Urvashi R.',
    role: 'Student - Class 10th Topper (Batch 2026)',
    text: 'Personal attention from teachers and regular revision classes made a big difference in my final board performance.',
    rating: 5,
    avatar: 'PU',
    color: '#1D3461',
  },
  {
    name: 'Lakum Urvisha M.',
    role: 'Student - Class 12th Commerce Topper (Batch 2026)',
    text: 'Consistent practice papers and guidance for answer writing helped me manage time better and score with confidence.',
    rating: 5,
    avatar: 'LU',
    color: '#F5C518',
  },
  {
    name: 'Solanki Meet B.',
    role: 'Student - Class 12th Commerce Topper (Batch 2026)',
    text: 'Mock tests and performance reviews were very useful. I improved steadily with teacher support in every subject.',
    rating: 5,
    avatar: 'SM',
    color: '#1D3461',
  },
  {
    name: 'Vaghela Rehan F.',
    role: 'Student - Class 12th Commerce Topper (Batch 2026)',
    text: 'The teachers guided me at each step and kept me disciplined with regular tests, which helped me perform well in boards.',
    rating: 5,
    avatar: 'VR',
    color: '#F5C518',
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
  {
    name: 'Kaushal Gandhi',
    role: 'Student - Class 10th',
    text: 'The teachers were very supportive and helped me improve every week. I gained confidence in both English and Gujarati medium classes.',
    rating: 5,
    avatar: 'KG',
    color: '#1D3461',
  },
  {
    name: 'Vikas K. Gohil',
    role: 'Student - Class 12th Commerce',
    text: 'Counseling and mock tests helped me understand exam patterns clearly. I felt guided every step of the way.',
    rating: 5,
    avatar: 'VG',
    color: '#F5C518',
  },
  {
    name: 'Krutika H. Rana',
    role: 'Student - Class 11th Commerce',
    text: 'The classes were interactive and the doubt sessions were very helpful. I could improve my scores quickly.',
    rating: 5,
    avatar: 'KR',
    color: '#1D3461',
  },
  {
    name: 'Dhruti Sunil Bhai Rana',
    role: 'Student - Class 9th',
    text: 'The study material and teacher guidance made learning feel easy and organized. I enjoyed every class.',
    rating: 5,
    avatar: 'DR',
    color: '#F5C518',
  },
  {
    name: 'Shweta Rana',
    role: 'Student - Class 12th Arts',
    text: 'Teachers explained concepts in both Gujarati and English, which helped me understand better. The support system was excellent.',
    rating: 5,
    avatar: 'SR',
    color: '#1D3461',
  },
  {
    name: 'Rushali Rana',
    role: 'Student - Class 10th',
    text: 'Regular review sessions and friendly teachers built my confidence. I felt prepared for every exam.',
    rating: 5,
    avatar: 'RR',
    color: '#F5C518',
  },
  {
    name: 'Anjali Suthar',
    role: 'Student - Class 11th Commerce',
    text: 'The focused approach and test series helped me stay ahead. I found the classes very motivating.',
    rating: 5,
    avatar: 'AS',
    color: '#1D3461',
  },
  {
    name: 'Nency Gandhi',
    role: 'Student - Class 8th',
    text: 'The teachers explained concepts clearly and kept the classes engaging. I improved my confidence in every subject.',
    rating: 5,
    avatar: 'NG',
    color: '#F5C518',
  },
  {
    name: 'Jaimin Amin',
    role: 'Student - Class 12th Commerce',
    text: 'Hands-on practice and regular feedback helped me improve steadily. I liked the personalized attention.',
    rating: 5,
    avatar: 'JA',
    color: '#1D3461',
  },
  {
    name: 'Anisha Patel',
    role: 'Student - Class 10th',
    text: 'The teaching methods were practical and easy to follow. I understood difficult topics much better.',
    rating: 5,
    avatar: 'AP',
    color: '#F5C518',
  },
  {
    name: 'Heena Patel',
    role: 'Student - Class 11th',
    text: 'The guidance was excellent and teachers cleared all my doubts patiently. The lessons were very effective.',
    rating: 5,
    avatar: 'HP',
    color: '#1D3461',
  },
  {
    name: 'Trupati Patel',
    role: 'Student - Class 9th',
    text: 'I enjoyed the classes and felt well supported by the faculty. The study plan was very helpful.',
    rating: 5,
    avatar: 'TP',
    color: '#F5C518',
  },
  {
    name: 'Moukit Patel',
    role: 'Student - Class 12th Commerce',
    text: 'Mock tests and revision classes helped me stay confident. The training was very thorough.',
    rating: 5,
    avatar: 'MU',
    color: '#1D3461',
  },
  {
    name: 'Milan J. Mahant',
    role: 'Student - Class 10th',
    text: 'I found the coaching very useful and the teachers were always available for help. It boosted my preparation a lot.',
    rating: 5,
    avatar: 'MM',
    color: '#F5C518',
  },
  {
    name: 'Janki Patel',
    role: 'Student - Class 11th Arts',
    text: 'The classes were engaging and the study support was strong. I felt more confident after joining.',
    rating: 5,
    avatar: 'JP',
    color: '#1D3461',
  },
  {
    name: 'Payal Patel',
    role: 'Student - Class 12th',
    text: 'The teachers helped me focus on the right topics and improve my performance. I was happy with the progress.',
    rating: 5,
    avatar: 'PP',
    color: '#F5C518',
  },
];

const getBatchYear = (role: string) => {
  const match = role.match(/Batch\s+(\d{4})/i);
  return match ? Number(match[1]) : 0;
};

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
  const sortedTestimonials = [...testimonials].sort((a, b) => getBatchYear(b.role) - getBatchYear(a.role));
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % sortedTestimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sortedTestimonials.length]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + sortedTestimonials.length) % sortedTestimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % sortedTestimonials.length);
  };

  const t = sortedTestimonials[current];

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
            Students Reviews
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
          {sortedTestimonials.map((_, i) => (
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

