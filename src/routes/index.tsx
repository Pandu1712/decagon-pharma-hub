import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { HeroCarousel } from "@/components/HeroCarousel";
import {
  AboutSection,
  CTASection,
  CategorySection,
  FeaturedProducts,
  PortfolioVisualSection,
  QualitySection,
  WhyChooseUs,
} from "@/components/sections";

const title = "DECAGON | Believed Quality | Pharmaceutical Healthcare Solutions";
const description =
  "DECAGON delivers quality-focused pharmaceutical and healthcare solutions across multiple therapeutic categories.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DECAGON",
          slogan: "Believed Quality",
          description,
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">
          DECAGON — Believed Quality, pharmaceutical healthcare solutions
        </h1>
        <HeroCarousel />
        <AboutSection />
        <WhyChooseUs />
        <CategorySection />
        <FeaturedProducts />
        <QualitySection />
        <PortfolioVisualSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
