import type { Metadata } from "next";
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


export const metadata: Metadata = {
  title: "Karmasthali Sansthan | Food Distribution & Gau Sewa",
  description:
    'Karmasthali Sansthan is a leading NGO in Udaipur, Rajasthan. We focus on "Bhojan Sewa" (Food distribution for the needy), Gau Sewa (Cow welfare), and feeding street dogs. Join us for Ann Daan and child education support.',
  keywords: [
    "NGO in Udaipur",
    "Food donation Udaipur",
    "Gau Sewa Rajasthan",
    "Bhojan Sewa NGO",
    "Animal rescue Udaipur",
    "Feed the needy India",
    "Karmasthali Sansthan",
    "Donate food for birthday in Udaipur",
    "Street dog feeding NGO Rajasthan",
    "Help underprivileged children Udaipur",
  ].join(", "),
  alternates: {
    canonical: "https://karmasthalisansthan.org/about",
  },
  openGraph: {
    title: "Karmasthali Sansthan | Serving Udaipur with Food & Compassion",
    description:
      'Join our daily food distribution drives and animal welfare programs in Udaipur. Your "Daan" can change a life today.',
    url: "https://karmasthalisansthan.org/about",
    locale: "en_IN", // Specifically targets the Indian locale
    siteName: "Karmasthali Sansthan NGO",
  },
};

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
      {/* <TeamSection /> */}
      <FocusedActions/>
      <ContactSection/>
      <FAQ />
    </main>
  );
}
