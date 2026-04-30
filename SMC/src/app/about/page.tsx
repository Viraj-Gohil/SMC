import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import AboutSection from '@/components/about-section';
import CTABanner from '@/components/cta-banner';

export const metadata = {
  title: 'About Shree Manav Classes - Trusted Tuition in Chhani',
  description: 'Learn about Shree Manav Classes, our mission, experienced faculty, AC classrooms, CCTV-monitored facilities, and personalized tuition approach.',
};

export default function AboutPage() {
  return (
    <LayoutShell>
      <PageBanner
        title="About"
        highlight="Shree Manav Classes"
        subtitle="A decade of academic excellence - transforming students into toppers since 2014 with quality education and personal attention."
        breadcrumb="About Us"
      />
      <AboutSection />
      <CTABanner />
    </LayoutShell>
  );
}

