import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { MedicineFormVisual3D } from "@/components/MedicineFormVisual3D";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  subtitleClassName,
  crumbs = [],
  medicineForm,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  crumbs?: { label: string; to?: string; search?: Record<string, string> }[];
  medicineForm?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue-deep pb-6 pt-20 md:pb-8 md:pt-24">
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-purple/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-brand-teal/25 blur-3xl pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className={medicineForm ? "max-w-2xl flex-1" : "max-w-5xl flex-1"}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/65">
            <Link to="/" className="hover:text-brand-teal">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" />
                {c.to ? (
                  <Link
                    to={c.to}
                    {...(c.search ? { search: c.search } : {})}
                    className="hover:text-brand-teal"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          {eyebrow ? (
            <span className="mt-3 inline-flex rounded-full glass-panel px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-2 max-w-3xl text-2xl font-bold leading-[1.1] text-primary-foreground sm:text-3xl md:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "mt-1.5 text-sm leading-relaxed text-primary-foreground/80 md:text-base",
                medicineForm ? "max-w-2xl" : "max-w-5xl",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* 360-degree rotating medicine visual centered in the right banner space */}
        {medicineForm ? (
          <div className="relative flex flex-1 items-center justify-center py-2 md:py-0">
            <MedicineFormVisual3D form={medicineForm} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
