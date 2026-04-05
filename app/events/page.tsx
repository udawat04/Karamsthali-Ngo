import eventsData from "@/data/events.json";
import PageHeader from "@/components/common/PageHeader";
import EventsFeatured from "@/components/events/EventsFeatured";
import EventsGrid from "@/components/events/EventsGrid";
import EventsCTA from "@/components/events/EventsCTA";
import EventsHero from "@/components/events/EventsHero";
import ContactSection from "@/components/contact/ContactSection";
import FAQ from "@/components/common/FAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NGO Events & Volunteer Opportunities in Udaipur | Karmasthali Sansthan",
  description:
    "Join NGO events in Udaipur: health camps, skill training, community drives. Volunteer opportunities available. Register today with NGO Udaipur.",
  keywords:
    "NGO events Udaipur, Volunteer opportunities Udaipur, Community programs, Health camps, Skill training workshops Udaipur",
  alternates: {
    canonical: "https://karmasthalisansthan.org/events",
  },
  openGraph: {
    title: "NGO Events in Udaipur | Volunteer Opportunities",
    url: "https://karmasthalisansthan.org/events",
  },
};

const featuredEvents = eventsData.filter((e) => e.isFeatured);

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader 
        title="Our Events & Programmes"
        highlightedWord="Events"
        subtitle="From health camps and skill workshops to fundraiser galas — discover every way you can join us in building a better tomorrow."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" }
        ]}
      />
      <EventsFeatured events={featuredEvents} />
      <EventsGrid events={eventsData} />
      <EventsCTA />
      <ContactSection/>
      <FAQ/>
    </main>
  );
}
