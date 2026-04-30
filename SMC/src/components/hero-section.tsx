'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Phone, ArrowRight, BookOpen, Star, Award, Users,
  Sparkles, CheckCircle2, GraduationCap, Trophy, Zap,
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────── */
const HEADLINE_WORDS = ['Build', 'Your', 'Future', 'with', 'Expert', 'Guidance'];
const TYPEWRITER_TEXT = 'Premium coaching for Class 5th–12th · Commerce & Arts · Small batches · AC classrooms · CCTV-monitored campus';

const FLOAT_ICONS = [
  // Keep ALL icons on the RIGHT side (> 55%) so they never overlap the left text
  { Icon: Star,         x: '56%', y: '10%', delay: 0,   size: 42, navy: false },
  { Icon: BookOpen,     x: '94%', y: '20%', delay: 0.4, size: 44, navy: true  },
  { Icon: Trophy,       x: '58%', y: '82%', delay: 0.8, size: 40, navy: true  },
  { Icon: GraduationCap,x: '93%', y: '68%', delay: 1.2, size: 46, navy: false },
  { Icon: Zap,          x: '94%', y: '44%', delay: 0.6, size: 36, navy: true  },
  { Icon: Award,        x: '57%', y: '46%', delay: 1.0, size: 38, navy: false },
];

const ORBIT_BADGES = [
  { label: '3000+', sub: 'Students', angle: 0,   r: 155 },
  { label: '30+',  sub: 'Years',    angle: 90,  r: 155 },
  { label: '99%', sub: 'Results',  angle: 180, r: 155 },
  { label: '20:1', sub: 'Ratio',    angle: 270, r: 155 },
];

const TRUST = ['100% Result Record', 'Small Batch Sizes', 'Expert Faculty', 'AC Classrooms & CCTV Security'];

const handleScroll = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ─── TYPEWRITER ────────────────────────────────────────────── */
function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, 28);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          className="inline-block w-0.5 h-5 ml-0.5 align-middle rounded-full"
          style={{ background: '#F5C518' }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
}

/* ─── PARTICLE CANVAS ───────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string };
    const colors = ['#1D3461', '#2a4a80', '#F5C518', '#e6b800'];
    const particles: P[] = Array.from({ length: 55 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.35,
      vy:    (Math.random() - 0.5) * 0.35,
      r:     Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.4 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(29,52,97,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

/* ─── 3-D TILT CARD ─────────────────────────────────────────── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]),  { stiffness: 200, damping: 20 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width  - 0.5);
    my.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

/* ─── ORBITING BADGES ───────────────────────────────────────── */
function OrbitBadge({ label, sub, angle, r: radiusOverride }: { label: string; sub: string; angle: number; r: number }) {
  const r = radiusOverride;
  const rad = (angle * Math.PI) / 180;
  const x = r * Math.cos(rad);
  const y = r * Math.sin(rad);
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center rounded-2xl text-center"
      style={{
        width: 72,
        height: 72,
        left: `calc(50% + ${x - 36}px)`,
        top: `calc(50% + ${y - 36}px)`,
        background: 'white',
        border: '2px solid rgba(245,197,24,0.5)',
        boxShadow: '0 4px 16px rgba(29,52,97,0.18)',
        zIndex: 20,
      }}
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: (angle / 90) * 0.6,
      }}
    >
      <span className="font-display font-extrabold text-base leading-none" style={{ color: '#1D3461' }}>
        {label}
      </span>
      <span className="text-[10px] font-semibold mt-0.5" style={{ color: '#3a4a6b', fontFamily: 'var(--font-display)' }}>
        {sub}
      </span>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────── */
export default function HeroSection() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #f0f4ff 0%, #ffffff 45%, #fffde7 100%)',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      {/* ── Animated morphing blobs ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'min(500px, 70vw)',
            height: 'min(500px, 70vw)',
            background: 'radial-gradient(circle, rgba(29,52,97,0.12) 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
          }}
          animate={{
            scale:    [1, 1.18, 1.05, 1],
            x:        [0, 30, -15, 0],
            y:        [0, -20, 20, 0],
            borderRadius: ['40% 60% 70% 30%', '60% 40% 30% 70%', '30% 70% 60% 40%', '40% 60% 70% 30%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 'min(420px, 60vw)',
            height: 'min(420px, 60vw)',
            background: 'radial-gradient(circle, rgba(245,197,24,0.14) 0%, transparent 70%)',
            bottom: '-8%',
            right: '-8%',
          }}
          animate={{
            scale:        [1, 1.22, 1.08, 1],
            x:            [0, -25, 15, 0],
            y:            [0, 18, -22, 0],
            borderRadius: ['60% 40% 30% 70%', '40% 60% 70% 30%', '70% 30% 40% 60%', '60% 40% 30% 70%'],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* center blob removed — was disrupting content */}
      </div>

      {/* ── Particle network canvas ──────────────────────────── */}
      {mounted && <ParticleCanvas />}

      {/* ── Shimmer diagonal beam ────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '3px',
          height: '140%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(245,197,24,0.4) 40%, rgba(255,255,255,0.6) 50%, rgba(245,197,24,0.4) 60%, transparent 100%)',
          top: '-20%',
          left: '-5%',
          rotate: 25,
          filter: 'blur(2px)',
        }}
        animate={{ x: ['0vw', '130vw'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />

      {/* ── Floating icon chips ──────────────────────────────── */}
      {FLOAT_ICONS.map(({ Icon, x, y, delay, size, navy }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center rounded-2xl shadow-xl pointer-events-none"
          style={{
            left: x, top: y,
            width: size, height: size,
            background: navy
              ? 'linear-gradient(135deg, #1D3461, #2a4a80)'
              : 'linear-gradient(135deg, #F5C518, #e6b800)',
            boxShadow: navy
              ? '0 4px 20px rgba(29,52,97,0.35)'
              : '0 4px 20px rgba(245,197,24,0.45)',
          }}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{
            opacity: 0.9,
            scale: 1,
            rotate: [0, navy ? 5 : -5, 0],
            y: [0, navy ? -14 : -10, 0],
          }}
          transition={{
            opacity: { delay: delay + 0.8, duration: 0.5 },
            scale:   { delay: delay + 0.8, duration: 0.5, type: 'spring', stiffness: 200 },
            rotate:  { delay: delay + 1.5, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            y:       { delay: delay + 1.5, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon style={{ width: size * 0.48, height: size * 0.48, color: navy ? '#F5C518' : '#1D3461' }} />
        </motion.div>
      ))}

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
        style={{ paddingTop: 'clamp(90px, 16vw, 130px)', paddingBottom: '3rem' }}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT — text ─────────────────────────────────── */}
          <div>
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, type: 'spring', stiffness: 300 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'linear-gradient(90deg, #EEF2FF, #fffde7)',
                color: '#1D3461',
                fontFamily: 'var(--font-display)',
                border: '1.5px solid #c5cfed',
                boxShadow: '0 2px 12px rgba(29,52,97,0.10)',
              }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4" style={{ color: '#F5C518' }} />
              </motion.span>
              #1 Tution Classes in the Chhani
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <h1
              className="font-display font-extrabold leading-tight mb-5"
              style={{
                fontSize: 'clamp(2.3rem, 5vw, 3.7rem)',
                letterSpacing: '-0.025em',
                color: '#0f1928',
              }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word + i}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={
                    word === 'Expert'
                      ? { color: '#1D3461', position: 'relative' }
                      : word === 'Guidance'
                      ? { color: '#F5C518' }
                      : {}
                  }
                >
                  {word}
                  {word === 'Expert' && (
                    <motion.span
                      className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                      style={{ background: '#F5C518' }}
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
                    />
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Typewriter subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="text-base mb-8 leading-relaxed min-h-[3rem]"
              style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
            >
              {mounted && <Typewriter text={TYPEWRITER_TEXT} />}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              {/* Primary — shimmer on hover */}
              <motion.button
                onClick={() => router.push('/contact')}
                className="enroll-btn relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {/* inner shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
                    x: '-100%',
                  }}
                  animate={{ x: ['−100%', '200%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                />
                Enroll Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              {/* Secondary */}
              <motion.a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base border-2 transition-colors duration-200"
                style={{
                  borderColor: '#1D3461',
                  color: '#1D3461',
                  fontFamily: 'var(--font-display)',
                  background: 'rgba(255,255,255,0.8)',
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#EEF2FF' }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                >
                  <Phone className="w-5 h-5" />
                </motion.span>
                Call Now
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {TRUST.map((pt, i) => (
                <motion.div
                  key={pt}
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#1D3461', fontFamily: 'var(--font-display)' }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + i * 0.12, duration: 0.4 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: 1.8 + i * 0.2, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#F5C518' }} />
                  </motion.span>
                  {pt}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — 3D tilt card with orbiting badges ──────── */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer container — large enough so orbit badges aren't clipped */}
            <div className="relative flex items-center justify-center" style={{ width: 460, height: 460 }}>
              {/* Orbit ring visual */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 360,
                  height: 360,
                  border: '1.5px dashed rgba(245,197,24,0.30)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Orbital stat badges — 4 corners of the ring */}
              {ORBIT_BADGES.map((b) => (
                <OrbitBadge key={b.angle} {...b} r={180} />
              ))}

              {/* Center tilt card */}
              <div style={{ width: 290, height: 330 }}>
                <TiltCard>
                  {/* Clean glowing border — no bleeding */}
                  <motion.div
                    className="absolute -inset-[2px] rounded-3xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #1D3461, #F5C518 50%, #1D3461)',
                      borderRadius: 24,
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Card body */}
                  <div
                    className="relative rounded-3xl overflow-hidden p-7 flex flex-col justify-between"
                    style={{
                      background: 'linear-gradient(145deg, #1D3461 0%, #152847 100%)',
                      height: 330,
                      zIndex: 1,
                    }}
                  >
                    {/* Inner glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-3xl"
                      style={{
                        background: 'radial-gradient(circle at 70% 20%, rgba(245,197,24,0.15) 0%, transparent 60%)',
                      }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Top label */}
                    <motion.div
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: '#F5C518' }}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-white/70 text-xs font-semibold tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                        LIVE ENROLLMENTS OPEN
                      </span>
                    </motion.div>

                    <div
                      className="font-display font-extrabold text-white text-xl leading-snug"
                      style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
                    >
                      Shree Manav<br />
                      <span style={{ color: '#F5C518' }}>Classes</span>
                    </div>

                    {/* Divider */}
                    <motion.div
                      className="h-px w-full rounded-full my-3"
                      style={{ background: 'rgba(245,197,24,0.3)' }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4, duration: 0.7 }}
                    />

                    {/* Student avatars row */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex -space-x-2">
                          {['A', 'R', 'S', 'P', 'V'].map((l, i) => (
                            <motion.div
                              key={i}
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white"
                              style={{ background: i % 2 === 0 ? '#F5C518' : '#2a4a80', color: i % 2 === 0 ? '#1D3461' : 'white' }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.6 + i * 0.08, type: 'spring', stiffness: 300 }}
                            >
                              {l}
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-white/80 text-xs font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                          +45 joined this month
                        </span>
                      </div>
                      <div
                        className="rounded-xl px-4 py-3 text-xs"
                        style={{ background: 'rgba(245,197,24,0.15)', border: '1px solid rgba(245,197,24,0.3)', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-sans)' }}
                      >
                        🔥 Limited seats — <strong style={{ color: '#F5C518' }}>Enroll before they fill up!</strong>
                      </div>
                    </motion.div>

                    {/* Users icon bottom-right decoration */}
                    <motion.div
                      className="absolute bottom-5 right-5 opacity-10"
                      animate={{ rotate: [0, 10, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Users className="w-14 h-14 text-white" />
                    </motion.div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => handleScroll('#features')}
      >
        <motion.span
          className="text-[11px] font-bold tracking-wider uppercase"
          style={{ color: '#4a5878', fontFamily: 'var(--font-display)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <div className="flex flex-col items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#1D3461' }}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
