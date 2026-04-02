import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import impactStories from "@/data/impact-stories.json";
import PageHeader from "@/components/common/PageHeader";

export const metadata = {
  title: "Impact Stories | Karamsthali NGO",
  description:
    "Read inspiring journeys from students and families whose lives are being transformed through nutrition, education, and community support.",
};

const STATS = [
  { label: "Stories Documented", value: `${impactStories.length}+` },
  { label: "Children Reached", value: "2,500+" },
  { label: "Communities Covered", value: "6+" },
  { label: "Years of Change", value: "10+" },
];

export default function ImpactStoriesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader 
        title="Inspiring Impact Stories"
        highlightedWord="Impact"
        subtitle="Meet the children and families whose lives have been transformed through nutrition, education, and consistent community support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Impact Stories" }
        ]}
      />

      {/* Stats bar – preserved from original hero but now below PageHeader */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap justify-between gap-x-12 gap-y-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-dark/50 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid section – mirrors EventsGrid structure */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-primary" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                All Stories
              </h2>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {impactStories.length} stories of impact
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {impactStories.map((story) => (
              <article
                key={story.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-1">
                    {story.name}
                  </p>
                  <h3 className="font-bold text-brand-dark text-lg leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-grow mb-5">
                    {story.shortDescription}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-xs text-gray-400">
                      Journey of hope &amp; change
                    </span>
                    <Link
                      href={`/impact-stories/${story.id}`}
                      className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all"
                    >
                      Read full story
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
