import PageHeader from '@/components/common/PageHeader';
import ContactCards from '@/components/contact/ContactCards';
import ContactSection from '@/components/contact/ContactSection';
import MarqueeSection from '@/components/home/MarqueeSection';
import ImpactMap from '@/components/contact/ImpactMap';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us | NGO Udaipur | Donate or Volunteer | Karmasthali Sansthan",
  description:
    "Contact Karmasthali Sansthan NGO in Udaipur. Phone: +91-9772403688. Donate, volunteer, or learn more about our NGO programs in Udaipur.",
  keywords:
    "Contact NGO Udaipur, Donate to NGO, Volunteer NGO Udaipur, NGO phone number, Contact information",
  alternates: {
    canonical: "https://karmasthalisansthan.org/contact",
  },
  openGraph: {
    title: "Contact NGO Udaipur | Karmasthali Sansthan",
    url: "https://karmasthalisansthan.org/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader 
        title="Contact Our Team"
        highlightedWord="Contact"
        subtitle="Have questions or want to get involved? Reach out to us — we're always here to listen and collaborate for a better tomorrow."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />
      <MarqueeSection />
      <ContactCards />
      
      <ContactSection />
      
      <ImpactMap />
      
    </main>
  );
}
