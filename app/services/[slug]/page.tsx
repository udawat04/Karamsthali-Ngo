import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import PageHeader from "@/components/common/PageHeader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Karamsthali NGO`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        
      />

      {/* ── Two-column layout: sticky left + scrollable right ── */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
          <ServiceSidebar />
          <ServiceDetailContent service={service as any} />
        </div>
      </section>
    </main>
  );
}
