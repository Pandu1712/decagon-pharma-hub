import { createFileRoute } from "@tanstack/react-router";
import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { company } from "@/data/site";

const title = "Contact DECAGON | Product & Business Enquiries";
const description =
  "Reach the DECAGON team for product enquiries, distributor enquiries and business information.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: MapPin, label: "Office Address", value: company.address },
    { icon: Phone, label: "Phone", value: company.phone },
    { icon: Mail, label: "Email", value: company.email },
    { icon: Globe, label: "Website", value: company.website },
    { icon: Clock, label: "Business Hours", value: company.hours },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section id="contact" className="bg-background pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Enquiries"
                title="Get In Touch With DECAGON"
                subtitle="For product enquiries, business enquiries and general information, connect with our team."
              />
              <div className="mt-10 space-y-4">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 60}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-medical text-primary-foreground">
                        <d.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {d.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">{d.value}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <MapSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
