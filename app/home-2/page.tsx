import CustomCursor from "@/components/common/CustomCursor";
import Navbar2 from "@/components/common/Navbar2";
import HeroSection2 from "@/components/home/Hero2";
import OurBenefits from "@/components/home/OurBenefits";
import MarqueeSection from "@/components/home/MarqueeSection";
import OurActions from "@/components/home/OurActions";
import FocusedActions from "@/components/home/FocusedActions";
import NarrativeSection from "@/components/home/NarrativeSection";
import Insights from "@/components/home/Insights";
import HowWeWork from "@/components/home/HowWeWork";
import ImpactStories from "@/components/home/ImpactStories";
import BiggestContributor from "@/components/home/BiggestContributor";
import FAQ from "@/components/common/FAQ";

export default function HomePageSec() {
  return (
    <>
      <CustomCursor />
      <Navbar2 />
      <main>
        <HeroSection2 />
        <MarqueeSection />
        <NarrativeSection/>
        <HowWeWork/>
        <ImpactStories/>
        <BiggestContributor/>
        <FAQ />
      </main>

    </>
  );
}
