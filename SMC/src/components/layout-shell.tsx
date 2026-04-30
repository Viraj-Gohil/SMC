'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ background: 'white', overflowX: 'hidden', maxWidth: '100vw' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
