import LayoutShell from '@/components/layout-shell';
import PageBanner from '@/components/page-banner';
import ResultsSection from '@/components/results-section';
import StatsSection from '@/components/stats-section';
import CTABanner from '@/components/cta-banner';

export const metadata = {
  title: 'Results & Toppers - Shree Manav Classes',
  description: 'See the board results and top performers from Shree Manav Classes, with coaching support in AC classrooms and CCTV-secured study environment.',
};

export default function ResultsPage() {
  return (
    <LayoutShell>
      <PageBanner
        title="Toppers &"
        highlight="Results"
        subtitle="Year after year, our students achieve outstanding board results. Explore our star performers by class and stream."
        breadcrumb="Results"
    
      />
      <StatsSection />
      <ResultsSection />
      <CTABanner />
    </LayoutShell>
  );
}

