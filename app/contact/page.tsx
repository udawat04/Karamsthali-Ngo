import PageHeader from '@/components/common/PageHeader';
import ContactCards from '@/components/contact/ContactCards';
import ContactSection from '@/components/contact/ContactSection';
import MarqueeSection from '@/components/home/MarqueeSection';
import ImpactMap from '@/components/contact/ImpactMap';

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
