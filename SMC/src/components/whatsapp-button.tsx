'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip popup */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl p-4 shadow-2xl max-w-[240px]"
            style={{
              background: 'white',
              border: '1.5px solid #e8ecf8',
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                style={{ background: '#25D366' }}
              >
                NC
              </div>
              <div>
                <p
                  className="font-display font-bold text-sm mb-0.5"
                  style={{ color: '#0f1928' }}
                >
                  Shree Manav Classes
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#3a4a6b', fontFamily: 'var(--font-sans)' }}
                >
                  Hi! 👋 How can we help you? Chat with us for admissions and enquiries.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/919173771810?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Shree Manav%20Classes%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
              style={{
                background: '#25D366',
                fontFamily: 'var(--font-display)',
              }}
              onClick={() => setExpanded(false)}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-200 hover:scale-110"
        style={{ background: '#25D366' }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        {!expanded && (
          <>
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: '#25D366' }}
            />
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: '#25D366', animationDelay: '0.5s' }}
            />
          </>
        )}
        <motion.div
          animate={{ rotate: expanded ? 0 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {expanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
