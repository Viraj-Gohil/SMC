'use client';

import type { MouseEvent } from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Courses', href: '#courses' },
  {label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const courses = [
  'Class 5th - Foundation',
  'Class 6th - Foundation',
  'Class 7th - Foundation',
  'Class 8th - Foundation',
  'Class 9th - Foundation',
  'Class 10th - Board',
  'Class 11th - Arts',
  'Class 11th - Commerce',
  'Class 12th - Arts',
  'Class 12th - Commerce',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/ketam.nagarsheth', label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: 'https://www.instagram.com/nagarshethketan3', label: 'Instagram', color: '#E1306C' },
];

const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f1d3a 0%, oklch(0.12 0.06 264) 100%)',
      }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{ background: 'linear-gradient(90deg, #1D3461, #F5C518, #1D3461)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center rounded-xl p-2 flex-shrink-0"
                style={{ background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
              >
                <Image
                  src="/logo.png"
                  alt="Shree Manav Classes"
                  width={68}
                  height={68}
                  className="object-contain"
                  style={{ width: 'auto', height: 64 }}
                />
              </div>
              <div className="leading-none">
                <div className="font-display font-extrabold text-white text-base leading-tight">Shree Manav Classes</div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-sans)' }}
            >
              

Providing quality education with personal attention, empowering students from Class 5th to 12th to achieve their academic goals since 1994.</p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.10)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = social.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.10)')}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider"
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider"
            >
              Our Courses
            </h4>
            <ul className="flex flex-col gap-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    onClick={(e) => handleNavClick(e, '#courses')}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-sans)' }}
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h4
              className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider"
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F5C518' }} />
                <div>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-sans)' }}>+91 9173771810</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-sans)' }}>+91 6355364201</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F5C518' }} />
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  10, First Floor, Giriraj Complex, Opp. Old Patel Wadi, Chhani, Vadodara - 391740
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F5C518' }} />
                <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-sans)' }}>
                  shreemanavclasses@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.10)' }} />

        {/* Bottom bar */}
        <div className="flex items-center justify-center ">
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: 'rgba(255,255,255,0.40)', fontFamily: 'var(--font-sans)' }}
          >
            � {new Date().getFullYear()} Shree Manav Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



