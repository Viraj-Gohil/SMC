import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import ContactSection from '@/components/contact-section';

export const metadata = {
  title: 'Contact Shree Manav Classes - Enroll in Chhani Tuition',
  description: 'Get in touch with Shree Manav Classes for tuition admissions, counselling, and details about AC classrooms and CCTV-secured facilities.',
};

export default function ContactPage() {
  return (
    <LayoutShell>
      <PageBanner
        title="Contact"
        highlight="Us"
        subtitle="Have questions or ready to enroll? Reach out to us — we respond within hours. Free counselling available."
        breadcrumb="Contact"
      />
      <ContactSection />
    </LayoutShell>
  );
}
