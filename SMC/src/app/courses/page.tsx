import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import CoursesSection from '@/components/courses-section';
import CTABanner from '@/components/cta-banner';

export const metadata = {
  title: 'Tuition Courses in Chhani - Class 5th to 12th Coaching',
  description: 'Explore Shree Manav Classes courses for Class 5th to 12th in Arts and Commerce, featuring AC classrooms, CCTV security, and focused exam preparation.',
};

export default function CoursesPage() {
  return (
    <LayoutShell>
      <PageBanner
        title="Our"
        highlight="Courses"
        subtitle="Comprehensive coaching for Class 5th to 12th across Arts and Commerce streams - tailored programs with expert faculty and proven results."
        breadcrumb="Courses"
      />
      <CoursesSection />
      <CTABanner />
    </LayoutShell>
  );
}


