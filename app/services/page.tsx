import OurSections from "@/components/home/OurSections";
import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/common/PageHeader";
import FAQ from "@/components/common/FAQ";

export const metadata = {
  title: "Our Services | Karamsthali NGO",
  description:
    "Explore all the services and programs run by Karamsthali NGO — community development, education, human rights, healthcare, women empowerment, and environmental sustainability.",
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