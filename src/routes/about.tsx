import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { PageHeader } from "@/components/PageHeader";
import {
  AboutSection,
  CTASection,
  PortfolioVisualSection,
  WhyChooseUs,
} from "@/components/sections";

const title = "About DECAGON | Believed Quality";
const description =
  "DECAGON is committed to quality-focused pharmaceutical and healthcare solutions across a diverse range of therapeutic categories.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Us"
          title="About DECAGON"
          subtitle="Believed Quality — a philosophy built around trust, consistency and reliable healthcare."
          crumbs={[{ label: "About Us" }]}
        />
        <AboutSection />
        <WhyChooseUs />
        <PortfolioVisualSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
