import type { Metadata } from "next";
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
import ImpactStories from "@/components/home/ImpactStories";


export const metadata: Metadata = {
  title:
    "Karmasthali Sansthan | Community Development & Education",
  description:
    "Karmasthali Sansthan is a leading NGO in Balicha, Udaipur empowering childrens,tree plantation and animal welfare. Join K.S.S in Balicha today.",
  keywords:
    "NGO Balicha, NGO in Balicha, Community development NGO, Volunteer Balicha, Social change organization",
  authors: [{ name: "Karmasthali Sansthan" }],
  creator: "Karmasthali Sansthan",
  publisher: "Karmasthali Sansthan",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://karmasthalisansthan.org",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karmasthalisansthan.org",
    title: "NGO in Udaipur | Karmasthali Sansthan",
    description: "Community development, education & healthcare NGO in Udaipur",
    images: [
      {
        url: "https://karmasthalisansthan.org/karma-logo-3.png",
        width: 800,
        height: 600,
        alt: "Karmasthali Sansthan Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NGO in Udaipur | Karmasthali Sansthan",
    description: "Community development & education NGO in Udaipur",
    images: ["https://karmasthalisansthan.org/karma-logo-3.png"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <HeroSection />
      <MarqueeSection />
      <OurActions limit={3} showViewAll />
      <WhyChooseUs />
      <LatestEvents />
      <NarrativeSection />
      {/* <ImpactStories /> */}
      {/* <OurBenefits /> */}
      {/* <BiggestContributor /> */}
      <FocusedActions />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <FAQ />
    </main>
  );
}
