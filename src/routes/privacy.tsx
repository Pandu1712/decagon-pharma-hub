import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/site";

const title = "Privacy Policy | DECAGON";
const description = "How DECAGON handles enquiry information submitted through this website.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
        <section className="section-y bg-background">
          <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
            <p>
              This website collects only the information you choose to submit through our enquiry
              form — your name, email address, phone number, organisation and message — so that our
              team can respond to your enquiry.
            </p>
            <h2 className="text-xl font-bold text-foreground">Use of information</h2>
            <p>
              Enquiry details are used solely to respond to your request and to maintain a record of
              business correspondence. We do not sell enquiry information.
            </p>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>
              For questions about this policy, write to us at {company.email} or visit us at{" "}
              {company.address}.
            </p>
            <p className="text-xs">
              This policy is a starting point and should be reviewed against applicable local
              regulations before publication.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
