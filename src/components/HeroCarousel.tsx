import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import { cn } from "@/lib/utils";

type Slide = {
  image: string;
  alt: string;
  headline: string;
  subtext: string;
  cta: { label: string; to: string };
  secondary?: { label: string; to: string };
};

export const heroSlides: Slide[] = [
  {
    image: hero1,
    alt: "Pharmaceutical tablet manufacturing line in a clean production facility",
    headline: "Trusted Healthcare. Believed Quality.",
    subtext:
      "Delivering quality pharmaceutical solutions designed to support better health and well-being.",
    cta: { label: "Explore Products", to: "/products" },
    secondary: { label: "About Decagon", to: "/about" },
  },
  {
    image: hero2,
    alt: "Scientist inspecting a sample vial in a pharmaceutical quality control laboratory",
    headline: "Quality You Can Believe In",
    subtext: "Committed to quality, consistency and reliable healthcare solutions.",
    cta: { label: "Our Quality", to: "/quality" },
  },
  {
    image: hero3,
    alt: "Blister packs of tablets, capsules and syrup bottles arranged on a light surface",
    headline: "Comprehensive Pharmaceutical Solutions",
    subtext:
      "From everyday healthcare to specialized therapeutic needs, DECAGON brings a growing portfolio of healthcare products.",
    cta: { label: "View Products", to: "/products" },
  },
  {
    image: hero4,
    alt: "Doctor consulting with a patient in a modern clinic",
    headline: "Committed to Better Healthcare",
    subtext:
      "Building trust through quality-focused pharmaceutical products and responsible healthcare solutions.",
    cta: { label: "Contact Us", to: "/contact" },
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="DECAGON highlights"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.headline}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            className={cn(
              "size-full object-cover",
              i === index && "ken-burns",
            )}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-24">
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground">
            DECAGON · Believed Quality
          </span>
          {heroSlides.map((slide, i) => (
            <div
              key={slide.headline}
              className={cn(
                "transition-all duration-700",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none absolute opacity-0 translate-y-6",
              )}
              aria-hidden={i !== index}
            >
              <h1 className="mt-6 text-4xl font-bold leading-[1.06] text-primary-foreground sm:text-5xl lg:text-[4.1rem]">
                {slide.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {slide.subtext}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to={slide.cta.to}
                  className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  {slide.cta.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {slide.secondary ? (
                  <Link
                    to={slide.secondary.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
                  >
                    {slide.secondary.label}
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.headline}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-10 bg-brand-amber" : "w-4 bg-white/45 hover:bg-white/70",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="inline-flex size-11 items-center justify-center rounded-full glass-panel text-primary-foreground transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="inline-flex size-11 items-center justify-center rounded-full glass-panel text-primary-foreground transition-colors hover:bg-white/20"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
