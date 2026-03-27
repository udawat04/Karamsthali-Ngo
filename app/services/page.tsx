import OurSections from "@/components/home/OurSections";
import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/common/PageHeader";

export const metadata = {
  title: "Our Services | Karamsthali NGO",
  description:
    "Explore all the services and programs run by Karamsthali NGO — community development, education, human rights, healthcare, women empowerment, and environmental sustainability.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
     

      {/* Page Hero */}
     <PageHeader
             title="Our Services"
             breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Services' }
             ]}
             backgroundImage="https://images.unsplash.com/photo-1517433585673-8a22256e4a49?q=80&w=2070&auto=format&fit=crop"
           />

      {/* All 6 service cards */}
      <OurSections />

      <ContactSection />
    </main>
  );
}