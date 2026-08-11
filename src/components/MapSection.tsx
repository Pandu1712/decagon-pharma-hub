import { MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { company } from "@/data/site";

export function MapSection() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Location"
          title="Find DECAGON"
          subtitle="The map will show our office location once the company address is confirmed."
        />
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border shadow-soft">
          {company.mapEmbedUrl ? (
            <iframe
              title="DECAGON office location"
              src={company.mapEmbedUrl}
              loading="lazy"
              className="h-[26rem] w-full border-0"
            />
          ) : (
            <div className="flex h-[22rem] flex-col items-center justify-center bg-card text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <MapPin className="size-6" />
              </span>
              <p className="mt-5 text-base font-semibold text-foreground">Map placeholder</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Add the company address and map embed URL to display the DECAGON location here.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
