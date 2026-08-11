import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  Layers,
  Quote,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import qualityImg from "@/assets/quality.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { accentDot } from "@/components/Navbar";
import { categories, countByCategory, featuredProducts, products } from "@/data/products";
import { qualityPillars, stats, testimonials, whyDecagon } from "@/data/site";
import { useCounter, useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/* ---------------- About + Stats ---------------- */

export function AboutSection() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 hidden size-40 rounded-3xl bg-gradient-accent opacity-20 blur-2xl lg:block" />
          <img
            src={aboutImg}
            alt="DECAGON researchers reviewing product data in a laboratory"
            width={1200}
            height={1408}
            loading="lazy"
            className="relative aspect-4/5 w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-8 -right-4 hidden max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-lift md:block">
            <p className="text-3xl font-bold text-gradient-brand">{products.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Products across {categories.length} therapeutic categories
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About DECAGON"
            title="Believed Quality"
            subtitle="DECAGON is committed to delivering quality-focused pharmaceutical and healthcare solutions across a diverse range of therapeutic categories. Our growing product portfolio reflects our focus on reliability, consistency and better healthcare outcomes."
          />
          <StatsSection />
          <Reveal delay={150}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const { ref, shown } = useReveal();
  return (
    <div ref={ref} className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-border bg-surface p-5 shadow-soft"
        >
          {"value" in s ? (
            <Counter target={s.value} suffix={s.suffix} active={shown} />
          ) : (
            <p className="text-3xl font-bold text-gradient-brand md:text-4xl">{s.text}</p>
          )}
          <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const value = useCounter(target, active);
  return (
    <p className="text-3xl font-bold text-gradient-brand md:text-4xl">
      {value}
      {suffix}
    </p>
  );
}

/* ---------------- Why choose us ---------------- */

const whyIcons = [ShieldCheck, BadgeCheck, TrendingUp, HeartPulse, FlaskConical, Sparkles];

export function WhyChooseUs() {
  return (
    <section id="why" className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Decagon"
          title="Why Choose DECAGON?"
          subtitle="A quality-first pharmaceutical philosophy applied across every category we serve."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyDecagon.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <Reveal key={item.title} delay={i * 70} as="article">
                <div className="card-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span
                    className={cn(
                      "inline-flex size-12 items-center justify-center rounded-xl text-primary-foreground",
                      item.accent === "purple" && "bg-brand-purple",
                      item.accent === "teal" && "bg-brand-teal",
                      item.accent === "orange" && "bg-brand-orange",
                      item.accent === "amber" && "bg-brand-amber text-foreground",
                      item.accent === "blue" && "bg-brand-blue",
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */

export function CategorySection() {
  return (
    <section className="section-y bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Therapeutic Categories"
          title="Our Pharmaceutical Products"
          subtitle="Explore the DECAGON product portfolio, organised across ten therapeutic categories."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <Link
                to="/products"
                search={{ category: c.slug }}
                className="card-lift group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div>
                  <span className={cn("block size-2.5 rounded-full", accentDot(c.accent))} />
                  <h3 className="mt-4 text-base font-bold leading-snug text-foreground group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.short}</p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {countByCategory(c.slug)} Products
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured products ---------------- */

export function FeaturedProducts() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Featured"
            title="Featured Products"
            subtitle="A selection from across the DECAGON portfolio."
          />
          <Reveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              View All Products
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          {featuredProducts.map((p) => (
            <div key={p.slug} className="w-[19rem] shrink-0 snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quality ---------------- */

const pillarIcons = [ShieldCheck, Layers, HeartPulse, Recycle];

export function QualitySection() {
  return (
    <section id="quality" className="relative overflow-hidden">
      <img
        src={qualityImg}
        alt="Pharmaceutical quality testing instruments in a laboratory"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Quality"
          title="Quality That Defines DECAGON"
          subtitle="Quality, consistency and reliability guide how our products are sourced, manufactured, checked and packaged — responsibly, batch after batch."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPillars.map((p, i) => {
            const Icon = pillarIcons[i % pillarIcons.length]!;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl glass-panel p-6">
                  <Icon className="size-7 text-brand-amber" />
                  <h3 className="mt-4 text-base font-bold text-primary-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio visual ---------------- */

export function PortfolioVisualSection() {
  return (
    <section className="section-y bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <img
            src={hero3}
            alt="Tablets, capsules and syrup bottles from the DECAGON portfolio"
            width={1920}
            height={1088}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-lift"
          />
          <img
            src={hero1}
            alt="Pharmaceutical manufacturing line"
            width={1920}
            height={1088}
            loading="lazy"
            className="floaty absolute -bottom-10 right-4 hidden w-52 rounded-2xl border-4 border-background object-cover shadow-lift md:block"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Healthcare Solutions Across Multiple Therapeutic Categories"
            subtitle="Tablets, capsules, syrups, injections, gels, creams, shampoos, soaps and nutritional supplements — presented with clear composition details for healthcare professionals."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {["Tablets & Capsules", "Syrups & Oral Solutions", "Injections", "Topical & Personal Care"].map(
              (t, i) => (
                <Reveal key={t} delay={i * 70}>
                  <div className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-semibold text-foreground shadow-soft">
                    {t}
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;

  return (
    <section id="reviews" className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What Healthcare Professionals Say"
          subtitle="Sample placeholder reviews shown below — these will be replaced with verified feedback once real reviews are provided."
        />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <Quote className="size-9 text-brand-purple/40" />
            <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-brand-amber text-brand-amber" />
              ))}
            </div>
            <p className="mt-5 text-lg font-medium leading-relaxed text-foreground md:text-xl">
              “{t.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                DC
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.org}
                </p>
              </div>
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Sample / placeholder review
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.role}
                  type="button"
                  aria-label={`Review ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === i ? "w-8 bg-primary" : "w-3 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function CTASection() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 text-center shadow-lift md:px-16 md:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">
          Looking for Reliable Pharmaceutical Solutions?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85">
          Connect with DECAGON to learn more about our products and healthcare solutions.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Explore Products
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
