import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string; search?: Record<string, string> }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue-deep pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-purple/40 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 size-80 rounded-full bg-brand-teal/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}
