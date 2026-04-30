'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What classes do you offer coaching for?',
    a: 'We offer comprehensive coaching for Class 5th to 12th in both Commerce & Arts streams. Our programs are tailored to board exams, foundation building.',
  },
  {
    q: 'What are the timings for the batches?',
    a: 'We offer multiple batch timings to accommodate different school schedules: Morning batch (8:00 AM – 11:00 AM), Afternoon batch (1:00 PM – 4:00 PM), and Evening batch (5:00 PM – 8:00 PM).',
  },
  {
    q: 'Are there weekly tests? How does the assessment work?',
    a: 'Yes! We conduct weekly chapter tests every Sunday, followed by a monthly comprehensive exam. After each test, teachers hold individual doubt-solving sessions to address weak areas.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Our fees vary by class and stream. We offer competitive pricing with flexible payment options (monthly/quarterly/annual). We also offer sibling discounts and early enrollment discounts. Please call us or visit for exact fee details — we believe in complete transparency.',
  },
  {
    q: 'Do you provide study materials?',
    a: 'Yes, we provide comprehensive study materials including printed notes, practice question banks, previous year question papers, and mock test series. All materials are included in the course fee. Students also get access to our digital resource library.',
  },
  {
    q: 'How do I enroll my child?',
    a: 'Enrollment is simple! Call us at +91 9173771810, fill out the contact form on our website, or visit us directly at our institute. We start with a free counselling session to understand your child\'s needs and recommend the most suitable batch. Seats are limited, so we recommend enrolling early.',
  },
  {
    q: 'Is there a free demo class available?',
    a: 'Absolutely! We offer a completely free demo class so students and parents can experience our teaching style before committing. You can book a free demo class by calling us or through our contact form. No payment is required for the demo.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24" style={{ background: '#fafbff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#0f1928',
              letterSpacing: '-0.02em',
            }}
          >
            Got{' '}
            <span style={{ color: '#F5C518' }}>Questions?</span>{' '}
            We Have Answers
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            Everything parents and students commonly ask before enrolling at Shree Manav Classes.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl overflow-hidden border px-6"
                style={{
                  border: '1.5px solid oklch(0.92 0.015 255)',
                  background: 'white',
                }}
              >
                <AccordionTrigger
                  className="py-5 text-left font-display font-semibold text-base hover:no-underline"
                  style={{ color: '#0f1928' }}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: i % 2 === 0 ? '#EEF2FF' : '#FFFDE7',
                        color: i % 2 === 0 ? '#1D3461' : '#F5C518',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed pl-9"
                  style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #EEF2FF, #F0F4FF)',
            border: '1.5px solid #c5cfed',
          }}
        >
          <p
            className="text-base font-semibold mb-2"
            style={{ color: '#152847', fontFamily: 'var(--font-display)' }}
          >
            Still have questions?
          </p>
          <p
            className="text-sm mb-5"
            style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
          >
            We&apos;re happy to answer any other questions you might have. Just reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919173771810"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-105"
              style={{
                background: '#1D3461',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 4px 16px 0 color-mix(in oklch, #1D3461 30%, transparent)',
              }}
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/9173771810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: '#25D366',
                color: 'white',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 4px 16px 0 rgba(37,211,102,0.35)',
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
