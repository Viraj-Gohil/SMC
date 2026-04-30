import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';

export const metadata = {
  title: 'FAQ - Shree Manav Classes',
  description: 'Find answers to frequently asked questions about Shree Manav Classes admissions, tuition, AC classrooms, CCTV security, and coaching programs.',
};

export default function FAQPage() {
  return (
    <LayoutShell>
      <PageBanner
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Everything parents and students commonly ask before enrolling at Shree Manav Classes — answered clearly and honestly."
        breadcrumb="FAQ"
      />
      <FAQSection />
      <CTABanner />
    </LayoutShell>
  );
}
