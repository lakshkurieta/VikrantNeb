import type { Metadata } from "next";
import { homeGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookSection } from "@/components/sections/BookSection";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { Studio } from "@/components/sections/Studio";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { Hero } from "@/components/hero/Hero";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <JsonLd data={homeGraph} />
      {/* The hero pins while the book section stages its entrance over it (hero fades, title glides
          in, book arrives); BookSection drives both sides of that hand-off (`.hero-pin`, globals.css). */}
      <div data-handoff className="hero-pin">
        <div data-handoff-from className="hero-pin__sticky">
          <Hero />
        </div>
      </div>
      <BookSection />
      {/* Arrives on the page the book's camera dives into (`data-book-next`, studio.css). Vikrant's 3D
          portrait is shared by both pages and crosses from the podcast to Writing as the studio pans. */}
      <Studio>
        <PodcastSection />
        <WritingSection />
      </Studio>
      <TestimonialsSection />
      <ResourcesSection />
    </main>
  );
}
