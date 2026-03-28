import React from 'react';
import PageHeader from '@/components/common/PageHeader';

import AboutUsSpotlight from '@/components/about/AboutUsSpotlight';
import OurApproach from '@/components/about/OurApproach';
import OurImpact from '@/components/about/OurImpact';
import NGOPrograms from '@/components/about/NGOPrograms';
import TeamSection from '@/components/about/TeamSection';
import FocusedActions from '@/components/home/FocusedActions';
import FAQ from '@/components/common/FAQ';
import ContactSection from '@/components/contact/ContactSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="About Our Mission"
        highlightedWord="Mission"
        subtitle="Learn about our journey, our values, and the passionate team working tirelessly to empower marginalized communities across Rajasthan."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />
      
      <AboutUsSpotlight />
      <NGOPrograms />
      <OurApproach />
      <OurImpact />
      <TeamSection />
      <FocusedActions/>
      <ContactSection/>
      <FAQ />
    </main>
  );
}
