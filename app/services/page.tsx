import OurSections from "@/components/home/OurSections";
import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/common/PageHeader";
import FAQ from "@/components/common/FAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NGO Services in Udaipur | Community Development Programs | Karmasthali Sansthan",
  description:
    "Explore NGO services in Udaipur: community development, education awareness, health support & human rights advocacy programs by Karmasthali Sansthan.",
  keywords:
    "NGO services Udaipur, Community development programs, Education NGO Udaipur, Health services, Social services Udaipur",
  alternates: {
    canonical: "https://karmasthalisansthan.org/services",
  },
  openGraph: {
    title: "NGO Services in Udaipur | Karmasthali Sansthan",
    description:
      "Community development, education, health & advocacy services by NGO Udaipur",
    url: "https://karmasthalisansthan.org/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader
        title="Our Programs & Services"
        highlightedWord="Programs"
        subtitle="Explore our comprehensive range of services — from education and healthcare to women empowerment and environmental sustainability."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* All 6 service cards */}
      <OurSections limit={6} />

      <ContactSection />
      <FAQ />   
    </main>
  );
}