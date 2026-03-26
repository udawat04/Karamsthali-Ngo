import PageHeader from '@/components/common/PageHeader';
import ContactCards from '@/components/contact/ContactCards';
import ContactSection from '@/components/contact/ContactSection';
import MarqueeSection from '@/components/home/MarqueeSection';
import ImpactMap from '@/components/contact/ImpactMap';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader 
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56196c273e8?q=80&w=2070&auto=format&fit=crop"
      />
      <MarqueeSection />
      <ContactCards />
      
      <ContactSection />
      
      <ImpactMap />
      
    </main>
  );
}
