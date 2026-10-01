import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { PageHeader } from "@/components/PageHeader";
import { CTASection, QualitySection } from "@/components/sections";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { qualityPillars } from "@/data/site";

const title = "Quality | DECAGON Pharmaceutical Standards";
const description =
  "Quality, consistency and reliability guide how DECAGON products are sourced, manufactured, checked and packaged.";

export const Route = createFileRoute("/quality")({
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
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Quality"
          title="Quality That Defines DECAGON"
          subtitle="A quality-focused approach applied consistently across our portfolio."
          crumbs={[{ label: "Quality" }]}
        />

        <section className="section-y bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="Consistency, reliability and responsible practice"
              subtitle="Our quality philosophy runs through sourcing, production, in-process checks, documentation and packaging — so healthcare professionals can rely on what they prescribe and dispense."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {qualityPillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70} direction={i % 2 === 0 ? "left" : "down"}>
                  <div className="card-lift h-full flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-soft">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <QualitySection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
