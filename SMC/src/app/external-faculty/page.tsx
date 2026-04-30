import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import { FacultySection } from '@/components/faculty-section';
import CTABanner from '@/components/cta-banner';

export const metadata = {
  title: 'External Faculty - Shree Manav Classes',
  description: 'Meet our expert faculty members with 12-19+ years of experience in Science, Commerce, and competitive exam coaching in a safe AC-classroom environment.',
};

export default function ExternalFacultyPage() {
  return (
    <LayoutShell>
      <PageBanner 
        title="External Faculty" 
        subtitle="Meet the brilliant minds behind our success"
        breadcrumb="Faculty"
      />
      <FacultySection />
      <CTABanner />
    </LayoutShell>
  );
}

