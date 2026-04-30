'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BookOpen, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';

const courses = [
  {
    class: 'Class 5th',
    type: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies'],
    description: 'Build a strong academic base with clear concepts, regular practice, and confidence-boosting support.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: BookOpen,
    badge: 'Foundation',
    badgeColor: '#1D3461',
  },
   {
    class: 'Class 6th',
    type: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies'],
    description: 'Build a strong academic base with clear concepts, regular practice, and confidence-boosting support.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: BookOpen,
    badge: 'Foundation',
    badgeColor: '#1D3461',
  },
  {
    class: 'Class 7th',
    type: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies'],
    description: 'Balanced academics with focus on fundamentals and confidence building.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: BookOpen,
    badge: 'Foundation',
    badgeColor: '#1D3461',
  },
  {
    class: 'Class 8th',
    type: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies'],
    description: 'Build a strong academic foundation with concept clarity and problem-solving skills.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: BookOpen,
    badge: 'Foundation',
    badgeColor: '#1D3461',
  },
  {
    class: 'Class 9th',
    type: 'Foundation',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies'],
    description: 'Strengthen your concepts and prepare for board-level exam patterns effectively.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: BookOpen,
    badge: 'Foundation',
    badgeColor: '#1D3461',
  },
  {
    class: 'Class 10th',
    type: 'Board Prep',
    subjects: ['Mathematics', 'Science', 'English', 'Gujarati', 'Hindi', 'Social Studies', 'Sanskrit'],
    description: 'Board exam focused coaching with mock tests, revision sessions, and targeted practice.',
    color: '#F5C518',
    bg: 'linear-gradient(135deg, #FFFDE7, #FFFDF0)',
    icon: BookOpen,
    badge: 'Board Exam',
    badgeColor: '#F5C518',
    popular: true,
  },
  {
    class: 'Class 11th',
    type: 'Arts',
    subjects: ['History', 'Geography', 'Political Science', 'Sociology', 'Psychology', 'Gujarati', 'English'],
    description: 'Structured Arts coaching with concept depth and writing-focused exam preparation.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: TrendingUp,
    badge: 'Arts',
    badgeColor: '#1D3461',
  },
  {
    class: 'Class 11th',
    type: 'Commerce',
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Statistics', 'Mathematics', 'English'],
    description: 'Career-focused Commerce coaching with practical knowledge and case study approach.',
    color: '#F5C518',
    bg: 'linear-gradient(135deg, #FFFDE7, #FFFDF0)',
    icon: TrendingUp,
    badge: 'Commerce',
    badgeColor: '#F5C518',
    popular: true,
  },
  {
    class: 'Class 12th',
    type: 'Arts',
    subjects: ['History', 'Geography', 'Political Science', 'Sociology', 'Psychology', 'Gujarati', 'English'],
    description: 'Board-focused Arts preparation with revision plans and answer-writing strategy.',
    color: '#1D3461',
    bg: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
    icon: TrendingUp,
    badge: 'Arts',
    badgeColor: '#1D3461',
    
  },
  {
    class: 'Class 12th',
    type: 'Commerce',
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Statistics', 'Mathematics', 'English'],
    description: 'Expert Commerce coaching with focus on board excellence and CA Foundation prep.',
    color: '#F5C518',
    bg: 'linear-gradient(135deg, #FFFDE7, #FFFDF0)',
    icon: TrendingUp,
    badge: 'Commerce',
    badgeColor: '#F5C518',
    popular: true,
  },
];

function CourseCard({ course, index, inView }: { course: typeof courses[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.08 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: 'white',
        border: hovered ? `2px solid ${course.color}` : '2px solid #e8ecf8',
        boxShadow: hovered ? `0 12px 40px 0 color-mix(in oklch, ${course.color} 20%, transparent)` : '0 2px 12px 0 rgba(29,52,97,0.05)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Popular badge */}
      {course.popular && (
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10"
          style={{ background: 'linear-gradient(90deg, #F5C518, #e6b800)' }}
        >
          🔥 Most Popular
        </div>
      )}

      {/* Card top gradient strip */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${course.color}, transparent)` }}
      />

      <div className="p-6">
        {/* Icon + Badge row */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: course.bg }}
          >
            <Icon className="w-6 h-6" style={{ color: course.color }} />
          </div>
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{
              background: `color-mix(in oklch, ${course.badgeColor} 12%, white)`,
              color: course.badgeColor,
              fontFamily: 'var(--font-display)',
            }}
          >
            {course.badge}
          </span>
        </div>

        {/* Class & Type */}
        <h3
          className="font-display font-extrabold text-xl mb-1"
          style={{ color: '#0f1928' }}
        >
          {course.class}
        </h3>
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: course.color, fontFamily: 'var(--font-display)' }}
        >
          {course.type} Stream
        </p>

        <p
          className="text-xs uppercase tracking-[0.18em] mb-3"
          style={{ color: '#6b7280', fontFamily: 'var(--font-display)' }}
        >
          Medium: English & Gujarati
        </p>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
        >
          {course.description}
        </p>

        {/* Subjects */}
        <p
          className="text-xs font-bold uppercase tracking-wide mb-2"
          style={{ color: '#1D3461', fontFamily: 'var(--font-display)' }}
        >
          All Subjects
        </p>
        <div className="mb-6" />

        {/* Enroll button */}
        <button
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200"
          style={{
            background: hovered
              ? `linear-gradient(90deg, ${course.color}, color-mix(in oklch, ${course.color} 80%, #F5C518))`
              : '#f5f7fe',
            color: hovered ? 'white' : course.color,
            border: `1.5px solid ${hovered ? course.color : '#d9e1f7'}`,
            fontFamily: 'var(--font-display)',
          }}
          onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Enroll in this Course <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="courses" className="py-24 bg-white">
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
            Our Programs
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#0f1928',
              letterSpacing: '-0.02em',
            }}
          >
            Courses We{' '}
            <span style={{ color: '#F5C518' }}>Offer</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            Comprehensive coaching for Class 5th to 12th across Arts and Commerce streams, available in English and Gujarati medium.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p
            className="text-base mb-4"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            Not sure which course is right for you?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
            style={{
              background: '#1D3461',
              color: 'white',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 4px 20px 0 color-mix(in oklch, #1D3461 35%, transparent)',
            }}
          >
            Get Free Counselling <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
