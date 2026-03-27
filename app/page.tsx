import HeroSection2 from "@/components/home/Hero2";
import OurBenefits from "@/components/home/OurBenefits";
import MarqueeSection from "@/components/home/MarqueeSection";
import OurActions from "@/components/home/OurSections";
import FocusedActions from "@/components/home/FocusedActions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NarrativeSection from "@/components/home/NarrativeSection";
import LatestEvents from "@/components/home/LatestEvents";
import HeroSection from "@/components/home/Hero";
import BiggestContributor from "@/components/home/BiggestContributor";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQ from "@/components/common/FAQ";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <HeroSection />
      <MarqueeSection />
      <OurActions limit={3} showViewAll />
      <WhyChooseUs />
      <OurBenefits />
      <NarrativeSection />
      <BiggestContributor />
      <LatestEvents />
      <FocusedActions />
      <TestimonialSection />
      <ContactSection />
      <FAQ />
    </main>
  );
}
