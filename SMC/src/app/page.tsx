import LayoutShell from '@/components/layout-shell';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import StatsSection from '@/components/stats-section';
import TestimonialsSection from '@/components/testimonials-section';
import CTABanner from '@/components/cta-banner';
import { PageTransition } from '@/components/page-transition';

export const metadata = {
  title: 'Shree Manav Classes — Best Tuition in Chhani',
  description: 'Discover Shree Manav Classes: AC classrooms, CCTV security, expert coaching for Class 5th–12th, and small batch tuition in Chhani.',
};

export default function Home() {
  return (
    <LayoutShell>
      <PageTransition transitionKey="home">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTABanner />
      </PageTransition>
    </LayoutShell>
  );
}
