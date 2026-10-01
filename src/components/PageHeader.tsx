import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { MedicineFormVisual3D } from "@/components/MedicineFormVisual3D";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  medicineForm,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string; search?: Record<string, string> }[];
  medicineForm?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue-deep pb-10 pt-24 md:pb-12 md:pt-28">
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-purple/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-brand-teal/25 blur-3xl pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className={medicineForm ? "max-w-2xl flex-1" : "max-w-3xl flex-1"}>
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
            <span className="mt-8 inline-flex rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.1] text-primary-foreground md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
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
