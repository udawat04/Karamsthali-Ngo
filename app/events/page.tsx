import eventsData from "@/data/events.json";
import PageHeader from "@/components/common/PageHeader";
import EventsFeatured from "@/components/events/EventsFeatured";
import EventsGrid from "@/components/events/EventsGrid";
import EventsCTA from "@/components/events/EventsCTA";
import EventsHero from "@/components/events/EventsHero";

export const metadata = {
  title: "Events | Karamsthali NGO",
  description:
    "Discover upcoming programmes, health camps, workshops, and community drives organised by Karamsthali NGO across Rajasthan.",
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
    </main>
  );
}
