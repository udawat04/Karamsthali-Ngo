import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import MarqueeSection from "@/components/home/MarqueeSection";
import MemberAbout from "@/components/about/MemberAbout";
import ourTeam from "@/data/our-team.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { id } = await params;
  const member = ourTeam.find((m) => m.id === id);

  if (!member) return notFound();

  return (
    <main className="bg-[#fafafa] min-h-screen">
      <PageHeader 
        title={member.name}
        backgroundImage={member.bgImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/about" },
          { label: member.name }
        ]}
      />
      
      <MarqueeSection />

      <MemberAbout member={member} />
      
    </main>
  );
}

export async function generateStaticParams() {
  return ourTeam.map((member) => ({
    id: member.id,
  }));
}
