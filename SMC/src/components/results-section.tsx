'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Medal, Star, Crown, GraduationCap, Calendar } from 'lucide-react';

type Student = {
  category: '10th' | '12com';
  name: string;
  initials: string;
  class: string;
  stream: string;
  percent: number | null;
  rank: number;
  year: string;
  subjects: string[];
  gradient: string;
};

const STUDENTS: Student[] = [
  { category: '10th', name: 'Vhora Sakina K.', initials: 'VS', class: 'Class 10th', stream: 'Board Exam', percent: 80.46, rank: 1, year: '2007', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#1D3461,#2a4a80)' },
  { category: '10th', name: 'Mahant Milan J.', initials: 'MM', class: 'Class 10th', stream: 'Board Exam', percent: 80.9, rank: 2, year: '2014', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#F5C518,#e6b800)' },
  { category: '10th', name: 'Mahant Purvi J.', initials: 'MP', class: 'Class 10th', stream: 'Board Exam', percent: 93.78, rank: 3, year: '2016', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#2a4a80,#1D3461)' },
  { category: '10th', name: 'Suthar Anjali', initials: 'SA', class: 'Class 10th', stream: 'Board Exam', percent: null, rank: 4, year: '2022', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#daa520,#F5C518)' },
  { category: '10th', name: 'Rana Dhruti S.', initials: 'RD', class: 'Class 10th', stream: 'Board Exam', percent: 86.87, rank: 5, year: '2023', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#1D3461,#2a4a80)' },
  { category: '10th', name: 'Rana Khushi V.', initials: 'RK', class: 'Class 10th', stream: 'Board Exam', percent: 95.5, rank: 6, year: '2025', subjects: ['Board Topper'], gradient: 'linear-gradient(135deg,#F5C518,#e6b800)' },
  { category: '12com', name: 'Gandhi Kushal H.', initials: 'GK', class: 'Class 12th', stream: 'Commerce', percent: 88.14, rank: 1, year: '2007', subjects: ['Commerce'], gradient: 'linear-gradient(135deg,#1D3461,#152847)' },
  { category: '12com', name: 'Vhora Sakina K.', initials: 'VS', class: 'Class 12th', stream: 'Commerce', percent: 79, rank: 2, year: '2009', subjects: ['Commerce'], gradient: 'linear-gradient(135deg,#F5C518,#daa520)' },
  { category: '12com', name: 'Rana Nandani S.', initials: 'RN', class: 'Class 12th', stream: 'Commerce', percent: 97.02, rank: 3, year: '2024', subjects: ['Commerce'], gradient: 'linear-gradient(135deg,#1e3f7a,#1D3461)' },
];

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#FFD700,#FFA500)' }}><Crown className="w-4 h-4 text-white" /></div>;
  if (rank === 2) return <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#C0C0C0,#A8A8A8)' }}><Medal className="w-4 h-4 text-white" /></div>;
  if (rank === 3) return <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#CD7F32,#A0522D)' }}><Medal className="w-4 h-4 text-white" /></div>;
  return <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#EEF2FF', border: '1.5px solid #c5cfed' }}><Star className="w-4 h-4" style={{ color: '#1D3461' }} /></div>;
}

function StudentCard({ student, index, inView }: { student: Student; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.04 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default"
      style={{ border: student.rank === 1 ? '2px solid #F5C518' : '1.5px solid #e8ecf8', boxShadow: student.rank === 1 ? '0 4px 24px rgba(245,197,24,0.18)' : '0 2px 12px rgba(29,52,97,0.06)' }}
    >
      <div className="h-1.5 w-full" style={{ background: student.gradient }} />
      {student.rank === 1 && <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at top right,rgba(245,197,24,0.18),transparent 70%)' }} />}

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold" style={{ background: '#EEF2FF', color: '#1D3461', fontFamily: 'var(--font-display)' }}>
            <Calendar className="w-3 h-3" />
            Batch {student.year}
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg" style={{ background: '#FFFDE7', color: '#c4971a', fontFamily: 'var(--font-display)' }}>
            {student.stream}
          </span>
        </div>

        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full flex items-center justify-center font-display font-extrabold text-xl text-white shadow-md" style={{ background: student.gradient }}>
              {student.initials}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#1D3461', border: '2px solid white' }}>
              <GraduationCap className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <RankBadge rank={student.rank} />
            <span className="font-display font-extrabold text-2xl leading-none" style={{ color: student.rank <= 2 ? '#F5C518' : '#1D3461' }}>
              {student.percent !== null ? `${student.percent}%` : 'N/A'}
            </span>
          </div>
        </div>

        <h3 className="font-display font-extrabold text-base leading-tight mb-0.5" style={{ color: '#0f1928' }}>{student.name}</h3>
        <p className="text-sm font-semibold mb-4" style={{ color: '#1D3461', fontFamily: 'var(--font-display)' }}>{student.class}</p>

        <div className="mb-4">
          <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: '#4a5878', fontFamily: 'var(--font-display)' }}>
            <span>Score</span><span>{student.percent !== null ? `${student.percent}%` : 'N/A'}</span>
          </div>
          {student.percent !== null && (
            <div className="h-2.5 w-full rounded-full overflow-hidden" style={{ background: '#eaeefc' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: student.gradient }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${student.percent}%` } : { width: 0 }}
                transition={{ duration: 1.3, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {student.subjects.map((sub) => (
            <span key={sub} className="text-[11px] font-bold px-2.5 py-1 rounded-lg" style={{ background: '#EEF2FF', color: '#1D3461', fontFamily: 'var(--font-display)' }}>
              {sub}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const sortedStudents = [...STUDENTS].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section id="results" className="py-24" style={{ background: '#fafbff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: '#FFFDE7', color: '#c4971a', border: '1.5px solid #F5E19A', fontFamily: 'var(--font-display)' }}>
            <Trophy className="w-4 h-4" /> Our Star Performers
          </div>
          <h2 className="font-display font-extrabold mb-4" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: '#0f1928', letterSpacing: '-0.02em' }}>
            Toppers &amp; <span style={{ color: '#F5C518' }}>Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}>
            Year after year, our students achieve exceptional board results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-4 px-8 py-4 rounded-2xl" style={{ background: 'linear-gradient(135deg,#1D3461,#1e3f7a)', boxShadow: '0 8px 30px rgba(29,52,97,0.30)' }}>
            <Trophy className="w-8 h-8 flex-shrink-0" style={{ color: '#F5C518' }} />
            <div>
              <div className="font-display font-extrabold text-white text-2xl leading-tight">100% Result</div>
              <div className="text-white/70 text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Consecutive years of excellence
              </div>
            </div>
            <Trophy className="w-8 h-8 flex-shrink-0" style={{ color: '#F5C518' }} />
          </div>
        </motion.div>

        <motion.p
          key="all-results-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm font-semibold mb-6"
          style={{ color: '#4a5878', fontFamily: 'var(--font-display)' }}
        >
          Showing <span style={{ color: '#1D3461' }}>{sortedStudents.length}</span> toppers
        </motion.p>

        <motion.div
          key="all-results-grid"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {sortedStudents.map((student, i) => (
            <StudentCard key={`${student.name}-${student.category}-${student.year}`} student={student} index={i} inView={inView} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-sm mt-10"
          style={{ color: '#4a5878', fontFamily: 'var(--font-sans)' }}
        >
          Results shown include Class 10th and Class 12th (Commerce) toppers across multiple academic years.
        </motion.p>
      </div>
    </section>
  );
}
