'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home',             href: '/'                 },
  { label: 'About',            href: '/about'            },
  { label: 'Courses',          href: '/courses'          },
  { label: 'External Faculty', href: '/external-faculty' },
  { label: 'Results',          href: '/results'          },
  { label: 'FAQ',              href: '/faq'              },
  { label: 'Contact',          href: '/contact'          },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHeight, setNavHeight]  = useState(64);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const nav = document.getElementById('main-nav');
    if (nav) setNavHeight(nav.offsetHeight);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || mobileOpen ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 2px 20px 0 rgba(29,52,97,0.12)' : '0 1px 8px 0 rgba(29,52,97,0.07)',
          borderBottom: '1px solid rgba(29,52,97,0.08)',
          padding: scrolled ? '8px 0' : '12px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Shree Manav Classes Logo"
              width={64}
              height={48}
              className="object-contain"
              style={{ width: 'auto', height: 48 }}
              priority
            />
            <div className="leading-none hidden sm:block">
              <div
                className="font-display font-extrabold text-base tracking-tight leading-none"
                style={{ color: '#1D3461' }}
              >
                Shree Manav Classes
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active ? 'bg-[#EEF2FF]' : 'hover:bg-[#EEF2FF]/70 hover:-translate-y-0.5'
                  }`}
                  style={{
                    color: active ? '#1D3461' : 'oklch(0.35 0.08 255)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
                      style={{ background: '#F5C518' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919173771810"
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-all duration-200 hover:bg-[#EEF2FF]"
              style={{ borderColor: '#1D3461', color: '#1D3461', fontFamily: 'var(--font-display)' }}
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <Link
              href="/contact"
              className="enroll-btn text-sm font-bold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+919173771810"
              className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(245,197,24,0.15)', border: '1.5px solid #F5C518' }}
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" style={{ color: '#1D3461' }} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: '#1D3461', color: 'white' }}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {mobileOpen
                  ? <X style={{ width: 18, height: 18 }} />
                  : <Menu style={{ width: 18, height: 18 }} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed left-0 right-0 z-40 md:hidden"
              style={{
                top: navHeight,
                background: 'white',
                boxShadow: '0 8px 32px 0 rgba(29,52,97,0.14)',
                borderBottom: '2px solid #dde2f4',
                transformOrigin: 'top',
              }}
            >
              <div className="px-4 pt-3 pb-4">
                <div className="flex flex-col gap-0.5 mb-4">
                  {navLinks.map((link, i) => {
                    const active = isActive(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-150 active:scale-[0.98] ${
                            active ? 'bg-[#EEF2FF]' : 'hover:bg-[#EEF2FF]/70'
                          }`}
                          style={{
                            color: active ? '#1D3461' : 'oklch(0.30 0.08 255)',
                            fontFamily: 'var(--font-display)',
                            borderLeft: active ? '3px solid #F5C518' : '3px solid transparent',
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="h-px mb-4" style={{ background: '#e8ecf8' }} />
                <div className="flex gap-3">
                  <a
                    href="tel:+919173771810"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 text-sm font-bold"
                    style={{ borderColor: '#1D3461', color: '#1D3461', fontFamily: 'var(--font-display)' }}
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center enroll-btn text-sm font-bold py-3.5 rounded-xl text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
