import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
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

export function AboutSection({ showButton = true }: { showButton?: boolean } = {}) {
  return (
    <section id="about" className="py-6 sm:py-8 bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal direction="left" className="relative h-full flex flex-col justify-center">
          <div className="absolute -left-6 -top-6 hidden size-40 rounded-3xl bg-gradient-accent opacity-20 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={aboutImg}
              alt="DECAGON researchers reviewing product data in a laboratory"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full min-h-[320px] max-h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 max-w-[14rem] rounded-xl border border-border/80 bg-card/95 p-3.5 shadow-soft backdrop-blur-md">
              <p className="text-2xl font-bold text-gradient-brand">{products.length}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Products across {categories.length} therapeutic categories
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <SectionHeading
            align="left"
            eyebrow="About DECAGON"
            title="Believed Quality"
            subtitle="DECAGON is committed to delivering quality-focused pharmaceutical and healthcare solutions across a diverse range of therapeutic categories. Our growing product portfolio reflects our focus on reliability, consistency and better healthcare outcomes."
          />
          <StatsSection />
          {showButton ? (
            <Reveal direction="down" delay={150}>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Learn More
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const { ref, shown } = useReveal({ once: true });
  return (
    <div ref={ref} className="mt-4 grid grid-cols-2 gap-3 sm:gap-3.5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border bg-surface p-3.5 shadow-soft sm:p-4"
        >
          {"value" in s ? (
            <Counter target={s.value} suffix={s.suffix} active={shown} />
          ) : (
            <p className="text-2xl font-bold text-gradient-brand sm:text-3xl">{s.text}</p>
          )}
          <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{s.label}</p>
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
        <div className="mt-6 md:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyDecagon.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <Reveal key={item.title} delay={(i % 3) * 70} direction={i % 2 === 0 ? "left" : "down"} as="article">
                <div className="card-lift h-full flex flex-col justify-between rounded-2xl border border-border/60 bg-gradient-to-br from-card via-surface/60 to-primary/[0.03] p-7 shadow-soft transition-all hover:border-primary/30 hover:shadow-lift">
                  <div>
                    <span
                      className={cn(
                        "inline-flex size-12 items-center justify-center rounded-xl text-primary-foreground shadow-xs",
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">{item.text}</p>
                  </div>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-y bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Therapeutic Categories"
            title="Our Pharmaceutical Products"
            subtitle="Explore the DECAGON product portfolio, organised across ten therapeutic categories."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous categories"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next categories"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-xs transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="mt-6 md:mt-8 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-1 no-scrollbar scroll-smooth sm:mx-0 sm:px-1"
        >
          {categories.map((c) => (
            <div key={c.slug} className="w-[280px] sm:w-[320px] shrink-0 snap-start">
              <Link
                to="/products"
                search={{ category: c.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="relative h-44 w-full overflow-hidden bg-surface">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface">
                      <span className={cn("size-6 rounded-full", accentDot(c.accent))} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 right-3">
                    <span className="rounded-full bg-primary/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                      {countByCategory(c.slug)} Products
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {c.short}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                    <span className="text-xs font-semibold text-primary group-hover:underline">
                      Explore Formulations
                    </span>
                    <ArrowRight className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured products ---------------- */

export function FeaturedProducts() {
  return (
    <section className="section-y bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Featured"
            title="Featured Products"
            subtitle="A selection from across the DECAGON portfolio."
          />
          <Reveal direction="left">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              View All Products
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal direction="left" delay={100}>
          <div className="mt-4 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-2 pb-4 sm:mx-0 sm:px-2">
            {featuredProducts.map((p) => (
              <div key={p.slug} className="w-[19rem] shrink-0 snap-start pt-1">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </Reveal>
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
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Quality"
          title="Quality That Defines DECAGON"
          subtitle="Quality, consistency and reliability guide how our products are sourced, manufactured, checked and packaged — responsibly, batch after batch."
        />
        <div className="mt-6 md:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPillars.map((p, i) => {
            const Icon = pillarIcons[i % pillarIcons.length]!;
            return (
              <Reveal key={p.title} delay={i * 80} direction={i < 2 ? "left" : "down"}>
                <div className="h-full flex flex-col justify-between rounded-2xl glass-panel p-6">
                  <div>
                    <Icon className="size-7 text-brand-amber" />
                    <h3 className="mt-4 text-base font-bold text-primary-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75 text-justify">{p.text}</p>
                  </div>
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
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left" className="relative order-2 lg:order-1">
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
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Tablets & Capsules", "Syrups & Oral Solutions", "Injections", "Topical & Personal Care"].map(
              (t, i) => (
                <Reveal key={t} delay={i * 70} direction={i % 2 === 0 ? "left" : "down"}>
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

/* ---------------- Testimonials ---------------- */

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;

  return (
    <section id="reviews" className="section-y relative overflow-hidden bg-gradient-to-b from-surface via-background to-surface">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 size-96 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 size-96 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews & Feedback"
          title="Trusted by Healthcare Professionals"
          subtitle="Feedback and experiences shared by physicians, specialists and pharmacy partners across our network."
        />

        <Reveal direction="left" className="mx-auto mt-6 md:mt-8 max-w-4xl">
          {/* Main Featured Spotlight Review Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-surface/90 to-primary/[0.04] p-8 shadow-lift transition-all duration-300 md:p-12">
            {/* Background Decorative Quote Emblem */}
            <Quote className="pointer-events-none absolute -right-4 -top-4 size-44 text-primary/[0.04] rotate-180" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <div className="flex gap-1" aria-label={`${t.rating || 5} out of 5 stars`}>
                  {Array.from({ length: t.rating || 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-brand-amber text-brand-amber" />
                  ))}
                </div>
                <span className="ml-1">5.0 Rating</span>
              </div>

              {t.category ? (
                <span className="rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-secondary-foreground shadow-xs">
                  {t.category}
                </span>
              ) : null}
            </div>

            <p className="relative z-10 mt-6 font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl text-justify">
              “{t.quote}”
            </p>

            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="relative flex size-13 items-center justify-center rounded-2xl bg-gradient-brand text-base font-bold text-primary-foreground shadow-md">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-foreground">{t.name}</h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <BadgeCheck className="size-4" />
                      Verified Practitioner
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t.role} · <span className="font-medium text-foreground/80">{t.org}</span>
                  </p>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:shadow-xs"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => setI((v) => (v + 1) % testimonials.length)}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:shadow-xs"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Review Selectors Bar */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200",
                  idx === i
                    ? "border-primary/60 bg-card shadow-soft ring-2 ring-primary/20"
                    : "border-border/60 bg-surface/60 hover:border-border hover:bg-card",
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground truncate">{item.name}</span>
                    <span className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-2.5 fill-brand-amber text-brand-amber" />
                      ))}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground text-justify">“{item.quote}”</p>
                </div>
                <p className="mt-3 text-[11px] font-semibold text-primary">{item.role}</p>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function CTASection() {
  return (
    <section className="overflow-hidden px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <Reveal
        direction="down"
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-brand px-5 py-5 shadow-lift sm:px-8 sm:py-6 lg:px-10"
      >
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div className="min-w-0 max-w-2xl lg:max-w-3xl">
            <h2 className="text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl lg:text-3xl lg:whitespace-nowrap">
              Looking for Reliable Pharmaceutical Solutions?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85 sm:text-base">
              Connect with DECAGON to learn more about our products and healthcare solutions.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
