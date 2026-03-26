import React from 'react';
import PageHeader from '@/components/common/PageHeader';

import AboutUsSpotlight from '@/components/about/AboutUsSpotlight';
import OurApproach from '@/components/about/OurApproach';
import OurImpact from '@/components/about/OurImpact';
import NGOPrograms from '@/components/about/NGOPrograms';
import TeamSection from '@/components/about/TeamSection';
import FocusedActions from '@/components/home/FocusedActions';
import FAQ from '@/components/common/FAQ';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />
      
      <AboutUsSpotlight />
      <OurApproach />
      <NGOPrograms />
      <OurImpact />
      <TeamSection />
      <FocusedActions/>
      <FAQ />
    </main>
  );
}
