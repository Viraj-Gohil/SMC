'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 9173771810', '+91 6355364201'],
    color: '#1D3461',
    bg: '#EEF2FF',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['10, First Floor, Giriraj Complex, Opp. Old Patel Wadi', 'Chhani, Vadodara - 391740'],
    color: '#F5C518',
    bg: '#FFFDE7',
  },
  {
    icon: Clock,
    title: 'Availability Hours',
    lines: ['Monday - Saturday:', 'Morning: 8:00 AM - 11:00 AM & Evening: 1:00 PM - 8:00 PM', ' ', 'Sunday:', 'Morning: 8:00 AM - 12:00 AM'],
    color: '#1D3461',
    bg: '#EEF2FF',
  },
];

export default function ContactSection() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', phone: '', email: '', class: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formspreeEndpoint) {
        throw new Error('Form service not configured. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT.');
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          interestedIn: form.class,
          message: form.message,
          _subject: `New enquiry from ${form.name}`,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result?.errors?.[0]?.message || result?.message || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get In Touch
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#0f1928',
              letterSpacing: '-0.02em',
            }}
          >
            Contact{' '}
            <span style={{ color: '#1D3461' }}>Shree Manav Classes</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            Have questions or want to enroll? Reach out to us and we&apos;ll get back to you within hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: '#fafbff',
                    border: '1.5px solid #e8ecf8',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: info.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <h4
                      className="font-display font-bold text-sm mb-1"
                      style={{ color: '#0f1928' }}
                    >
                      {info.title}
                    </h4>
                    {info.lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-sm"
                        style={{ color: '#405070', fontFamily: 'var(--font-sans)' }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Google Maps Embed */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1.5px solid #e8ecf8', height: 220 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758.658685314846!2d73.1648674990088!3d22.3662870598089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc939f8201bb1%3A0x4a177654d7a41900!2sManav%20Classes%20Chhani%20Vadoadara!5e0!3m2!1sen!2sin!4v1777386131801!5m2!1sen!2"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Manav Classes Location"
              />
            </div>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/919173771810?text=${encodeURIComponent('Hi, I want to know more about Shree Manav Classes courses.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-base transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 4px 20px 0 rgba(37,211,102,0.35)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: '#fafbff',
                border: '1.5px solid oklch(0.92 0.015 255)',
                boxShadow: '0 4px 24px 0 rgba(29,52,97,0.07)',
              }}
            >
              <h3
                className="font-display font-bold text-xl mb-6"
                style={{ color: '#0f1928' }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#EEF2FF' }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: '#1D3461' }} />
                  </div>
                  <h4
                    className="font-display font-bold text-xl"
                    style={{ color: '#0f1928' }}
                  >
                    Thank You!
                  </h4>
                  <p
                    className="text-sm max-w-xs"
                    style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
                  >
                    We&apos;ve received your message and will get back to you within a few hours. You can also call us directly for immediate assistance.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', email: '', class: '', message: '' });
                    }}
                    className="text-sm font-semibold underline"
                    style={{ color: '#1D3461', fontFamily: 'var(--font-display)' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {error ? (
                    <p
                      className="text-sm rounded-lg px-3 py-2"
                      style={{
                        background: '#fff2f2',
                        color: '#b42318',
                        border: '1px solid #ffd5d2',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {error}
                    </p>
                  ) : null}

                  {/* Name */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'var(--font-display)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        border: '1.5px solid #dde2f4',
                        color: '#0f1928',
                        fontFamily: 'var(--font-sans)',
                        background: 'white',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1D3461')}
                      onBlur={(e) => (e.target.style.borderColor = '#dde2f4')}
                    />
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'var(--font-display)' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="^[0-9+\-\s]{10,15}$"
                        minLength={10}
                        maxLength={15}
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        title="Please enter a valid phone number (10 to 15 digits, spaces/+/- allowed)"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          border: '1.5px solid #dde2f4',
                          color: '#0f1928',
                          fontFamily: 'var(--font-sans)',
                          background: 'white',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#1D3461')}
                        onBlur={(e) => (e.target.style.borderColor = '#dde2f4')}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'var(--font-display)' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        title="Please enter a valid email address"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          border: '1.5px solid #dde2f4',
                          color: '#0f1928',
                          fontFamily: 'var(--font-sans)',
                          background: 'white',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#1D3461')}
                        onBlur={(e) => (e.target.style.borderColor = '#dde2f4')}
                      />
                    </div>
                  </div>

                  {/* Class Select */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'var(--font-display)' }}
                    >
                      Interested In
                    </label>
                    <select
                      name="class"
                      value={form.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                      style={{
                        border: '1.5px solid #dde2f4',
                        color: form.class ? '#0f1928' : '#5a6880',
                        fontFamily: 'var(--font-sans)',
                        background: 'white',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1D3461')}
                      onBlur={(e) => (e.target.style.borderColor = '#dde2f4')}
                    >
                      <option value="">Select Class / Stream</option>
                      
                      <option value="5th">Class 5th</option>
                      <option value="6th">Class 6th</option>
                      <option value="8th">Class 8th</option>
                      <option value="9th">Class 9th</option>
                      <option value="10th">Class 10th</option>
                      <option value="11arts">Class 11th - Arts</option>
                      <option value="11commerce">Class 11th - Commerce</option>
                      <option value="12arts">Class 12th - Arts</option>
                      <option value="12commerce">Class 12th - Commerce</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'var(--font-display)' }}
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific questions or requirements..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        border: '1.5px solid #dde2f4',
                        color: '#0f1928',
                        fontFamily: 'var(--font-sans)',
                        background: 'white',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1D3461')}
                      onBlur={(e) => (e.target.style.borderColor = '#dde2f4')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: loading
                        ? 'oklch(0.60 0.10 264)'
                        : 'linear-gradient(90deg, #1D3461, #1e3f7a)',
                      fontFamily: 'var(--font-display)',
                      boxShadow: '0 4px 20px 0 color-mix(in oklch, #1D3461 30%, transparent)',
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
