import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  FlaskConical,
  Leaf,
  Play,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import { cn } from "@/lib/utils";

export type Slide = {
  image: string;
  alt: string;
  tagline: string;
  headlinePrimary: string;
  headlineSecondary: string;
  subtext: string;
  cta: { label: string; to: string };
  secondary?: { label: string; to: string };
};

const heroSlides: Slide[] = [
  {
    image: hero2,
    alt: "Scientist inspecting a sample vial in a pharmaceutical quality control laboratory",
    tagline: "PHARMACEUTICALS | INNOVATION | A HEALTHIER TOMORROW",
    headlinePrimary: "Quality You",
    headlineSecondary: "Can Believe In",
    subtext:
      "Committed to quality, consistency and reliable healthcare solutions for a better, healthier tomorrow.",
    cta: { label: "Our Quality", to: "/quality" },
  },
  {
    image: hero1,
    alt: "Pharmaceutical tablet manufacturing line in a clean production facility",
    tagline: "PRECISION | AUTOMATION | GLOBAL COMPLIANCE",
    headlinePrimary: "Trusted Healthcare.",
    headlineSecondary: "Believed Quality.",
    subtext:
      "Delivering quality-focused pharmaceutical solutions engineered with rigorous standards to support human well-being.",
    cta: { label: "Explore Products", to: "/products" },
  },
  {
    image: hero3,
    alt: "Blister packs of tablets, capsules and syrup bottles arranged on a light surface",
    tagline: "THERAPEUTIC REACH | COMPREHENSIVE PORTFOLIO",
    headlinePrimary: "Comprehensive",
    headlineSecondary: "Pharmaceutical Solutions",
    subtext:
      "From everyday wellness to specialized therapeutic needs, DECAGON brings an advanced, quality-tested product portfolio.",
    cta: { label: "View Products", to: "/products" },
  },
  {
    image: hero4,
    alt: "Doctor consulting with a patient in a modern clinic",
    tagline: "PATIENT FIRST | MEDICAL EXCELLENCE | ETHICAL CARE",
    headlinePrimary: "Committed to",
    headlineSecondary: "Better Healthcare",
    subtext:
      "Building enduring trust through patient-centric formulations, continuous research, and responsible healthcare partnerships.",
    cta: { label: "Contact Us", to: "/contact" },
  },
];

const featureBadges = [
  {
    icon: Users,
    title: "Patient",
    subtitle: "Focused",
    iconColor: "text-sky-600",
    bgColor: "bg-sky-50 border-sky-100",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    subtitle: "Quality",
    iconColor: "text-teal-700",
    bgColor: "bg-teal-50 border-teal-100",
  },
  {
    icon: FlaskConical,
    title: "Advanced",
    subtitle: "Research",
    iconColor: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-100",
  },
  {
    icon: Leaf,
    title: "A Healthier",
    subtitle: "Tomorrow",
    iconColor: "text-emerald-700",
    bgColor: "bg-emerald-50 border-emerald-100",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentSlide = (heroSlides[index] ?? heroSlides[0])!;


  useEffect(() => {
    if (paused || videoOpen) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, videoOpen]);

  // Handle escape key to close video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px] w-full overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="DECAGON pharmaceutical highlights"
    >
      {/* Background slide imagery with high-key clinical light fade */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.headlinePrimary + slide.headlineSecondary}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10",
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
              "size-full object-cover object-center lg:object-[right_center]",
              i === index && "ken-burns",
            )}
          />

          {/* Smooth multi-stop gradient washes for crisp clinical white background on the left */}
          {/* Desktop gradient: pure white on left, gentle fade over center, clear view of scientist on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-white/10 hidden lg:block" />
          {/* Tablet & Mobile gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/75 lg:hidden" />
          {/* Top header blend fade */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/90 to-transparent" />
        </div>
      ))}

      {/* Decorative soft glowing ambiance in top left */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-sky-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 left-1/3 size-72 rounded-full bg-teal-50/40 blur-3xl" />

      {/* Top Right Tagline: "Science for a Better Life" */}
      <div className="hidden lg:flex flex-col items-start absolute top-24 lg:top-26 xl:top-28 right-12 xl:right-16 z-20 pointer-events-none">
        <span className="text-xs font-medium tracking-wide text-slate-500">
          Science for a
        </span>
        <span className="text-sm xl:text-base font-semibold tracking-wide text-sky-700">
          Better Life
        </span>
        <span className="mt-1 h-[2px] w-12 bg-sky-400/80 rounded-full" />
      </div>

      {/* Floating Glassmorphism Molecular Structure Card (Center-Right) */}
      <div className="hidden md:flex absolute right-[26%] lg:right-[30%] xl:right-[33%] top-[48%] lg:top-[50%] -translate-y-1/2 z-20 items-center gap-4 rounded-xl border border-white/90 bg-white/75 px-4 py-3 shadow-[0_16px_35px_rgba(10,37,64,0.08)] backdrop-blur-md transition-transform duration-500 hover:scale-105">
        {/* Molecular / Chemical Bond SVG graphic */}
        <svg
          className="w-14 h-16 text-sky-500/80 stroke-current shrink-0"
          viewBox="0 0 60 75"
          fill="none"
          aria-hidden="true"
        >
          {/* Chemical nodes & covalent bonds */}
          <circle cx="30" cy="14" r="5" strokeWidth="2" className="stroke-sky-600 fill-white" />
          <line x1="30" y1="19" x2="30" y2="38" strokeWidth="2" className="stroke-sky-300" />
          <circle cx="30" cy="43" r="5" strokeWidth="2" className="stroke-sky-600 fill-white" />
          <line x1="26" y1="46" x2="14" y2="58" strokeWidth="2" className="stroke-teal-400" />
          <circle cx="11" cy="61" r="4.5" strokeWidth="2" className="stroke-teal-600 fill-white" />
          <line x1="34" y1="46" x2="46" y2="58" strokeWidth="2" className="stroke-teal-400" />
          <circle cx="49" cy="61" r="4.5" strokeWidth="2" className="stroke-teal-600 fill-white" />
          <line x1="30" y1="14" x2="13" y2="24" strokeWidth="1.5" strokeDasharray="3 2" className="stroke-sky-400" />
          <circle cx="11" cy="25" r="3.5" strokeWidth="1.5" className="stroke-sky-400 fill-white" />
        </svg>

        {/* Quality Core Values List */}
        <div className="flex flex-col space-y-1 text-[10.5px] xl:text-[11px] font-bold tracking-[0.2em] text-slate-700">
          <span className="hover:text-teal-700 transition-colors">PRECISION</span>
          <span className="hover:text-sky-700 transition-colors">SAFETY</span>
          <span className="hover:text-blue-800 transition-colors">TRUST</span>
          <span className="hover:text-emerald-700 transition-colors">BETTER HEALTH</span>
          <div className="pt-1">
            <div className="h-[2px] w-12 bg-sky-400/80 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-2xl xl:max-w-3xl">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.headlinePrimary + slide.headlineSecondary}
              className={cn(
                "transition-all duration-700",
                i === index
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "pointer-events-none absolute opacity-0 translate-y-6 -z-10",
              )}
              aria-hidden={i !== index}
            >
              {/* Category Subtitle / Overline */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                  {slide.tagline}
                </span>
              </div>

              {/* Main Split-Color Headline */}
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.1]">
                <span className="block text-[#0A2540]">
                  {slide.headlinePrimary}
                </span>
                <span className="block text-[#086657]">
                  {slide.headlineSecondary}
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-3.5 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {slide.subtext}
              </p>
            </div>
          ))}

          {/* 4 Feature Icon Badges in a Row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-lg">
            {featureBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title + badge.subtitle}
                  className="group flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                      badge.bgColor,
                    )}
                  >
                    <Icon className={cn("size-4", badge.iconColor)} />
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold text-slate-700 leading-tight">
                    <span className="block">{badge.title}</span>
                    <span className="block">{badge.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call-to-Action Row: Primary Button + "Watch Our Story" */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to={currentSlide.cta.to}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A2540] hover:bg-[#06192c] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_20px_rgba(10,37,64,0.2)] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(10,37,64,0.3)] hover:-translate-y-0.5"
            >
              <span>{currentSlide.cta.label}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 transition-colors hover:text-[#086657]"
              aria-label="Watch Decagon's story video"
            >
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-[#0A2540] shadow-sm transition-all duration-300 group-hover:border-[#086657] group-hover:text-[#086657] group-hover:scale-105 group-hover:shadow-md">
                <Play className="size-3.5 fill-current translate-x-0.5" />
              </span>
              <span className="tracking-wide">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Layered Organic Wave Banner across the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 sm:h-24 md:h-28 lg:h-32 w-full overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Mint/Teal gradient wave */}
            <linearGradient id="waveMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A8E6CF" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#4CB5AD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.4" />
            </linearGradient>

            {/* Deep Navy wave */}
            <linearGradient id="waveNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2545" />
              <stop offset="60%" stopColor="#041E3A" />
              <stop offset="100%" stopColor="#021327" />
            </linearGradient>
          </defs>

          {/* Layer 1: Translucent seafoam/mint top wave */}
          <path
            d="M0,170 C340,110 520,200 800,140 C1080,80 1280,120 1440,90 L1440,220 L0,220 Z"
            fill="url(#waveMintGrad)"
          />

          {/* Layer 2: Deep Navy blue curved base banner */}
          <path
            d="M260,220 C460,165 720,195 960,125 C1160,70 1320,85 1440,70 L1440,220 L260,220 Z"
            fill="url(#waveNavyGrad)"
          />
        </svg>

        {/* DNA Helix Art in bottom right navy wave */}
        <div className="absolute right-36 lg:right-48 bottom-2 hidden md:block opacity-20 pointer-events-none">
          <svg width="200" height="55" viewBox="0 0 240 75" fill="none" className="stroke-cyan-200">
            {/* Strand 1 */}
            <path
              d="M0,37 C30,10 60,65 90,37 C120,10 150,65 180,37 C210,10 240,65 270,37"
              strokeWidth="2.2"
            />
            {/* Strand 2 */}
            <path
              d="M0,37 C30,65 60,10 90,37 C120,65 150,10 180,37 C210,65 240,10 270,37"
              strokeWidth="2.2"
            />
            {/* Base pair rungs */}
            <line x1="15" y1="24" x2="15" y2="50" strokeWidth="1.5" />
            <line x1="45" y1="24" x2="45" y2="50" strokeWidth="1.5" />
            <line x1="75" y1="24" x2="75" y2="50" strokeWidth="1.5" />
            <line x1="105" y1="24" x2="105" y2="50" strokeWidth="1.5" />
            <line x1="135" y1="24" x2="135" y2="50" strokeWidth="1.5" />
            <line x1="165" y1="24" x2="165" y2="50" strokeWidth="1.5" />
            <line x1="195" y1="24" x2="195" y2="50" strokeWidth="1.5" />
            <line x1="225" y1="24" x2="225" y2="50" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Bottom Right Care Tagline on the Navy Curve */}
        <div className="absolute right-4 sm:right-6 md:right-10 bottom-2 sm:bottom-3 text-right z-30 pointer-events-auto">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/90 leading-tight">
            CARE
          </p>
          <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-white leading-tight">
            TODAY
          </p>
          <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.22em] text-cyan-100/80 leading-tight">
            FOR A BRIGHTER
          </p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-white leading-tight">
            TOMORROW
          </p>
          <div className="mt-0.5 ml-auto h-[1.5px] w-10 bg-cyan-400/80 rounded-full" />
        </div>
      </div>

      {/* Video Modal ("Watch Our Story") */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Decagon Corporate Story"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md transition-all animate-in fade-in"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-[#0A2540]">
                  DECAGON — Believed Quality
                </h3>
                <p className="text-xs text-slate-500">
                  Pharmaceutical innovation and commitment to health
                </p>
              </div>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close video dialog"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Video content frame */}
            <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
              <div className="relative size-full">
                <img
                  src={hero2}
                  alt="Decagon Quality Control Laboratory"
                  className="size-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-slate-950/50">
                  <div className="size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-4 shadow-lift animate-pulse">
                    <Play className="size-7 fill-white translate-x-0.5" />
                  </div>
                  <h4 className="text-xl font-bold">Science for a Better Life</h4>
                  <p className="mt-2 max-w-md text-sm text-slate-200">
                    Discover how DECAGON upholds stringent quality assurance, advanced research, and trusted formulations.
                  </p>
                  <Link
                    to="/about"
                    onClick={() => setVideoOpen(false)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white transition-colors"
                  >
                    Read Our Full Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
