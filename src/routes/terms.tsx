import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

const title = "Terms & Conditions | DECAGON";
const description = "Terms governing the use of the DECAGON website and product information.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />
        <section className="section-y bg-background">
          <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
            <p>
              The content on this website is provided for general information about DECAGON and its
              product portfolio. Product names, compositions and dosage forms are presented as
              supplied by the company.
            </p>
            <h2 className="text-xl font-bold text-foreground">Not medical advice</h2>
            <p>
              Nothing on this website constitutes medical advice, a prescription or a recommendation
              for treatment. Products should be used only under the supervision of a registered
              medical practitioner.
            </p>
            <h2 className="text-xl font-bold text-foreground">Changes</h2>
            <p>
              Content, including the product portfolio, may be updated at any time without prior
              notice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
