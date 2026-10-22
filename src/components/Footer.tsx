import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { categories } from "@/data/products";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B1226] to-[#070B18] text-white">
      {/* Top radiant multi-color accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-teal via-brand-purple to-transparent opacity-80" />

      {/* Ambient background glow orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-brand-purple/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Identity (span 4) */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center rounded-2xl bg-white p-3 shadow-lg shadow-black/25 ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02]">
              <BrandLogo />
            </div>

            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-amber">
                <Sparkles className="size-3 text-brand-amber" />
                {company.tagline}
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              {company.description}
            </p>

            {/* Certification / Standard Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="size-3 text-emerald-400" />
                WHO-GMP Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="size-3 text-brand-teal" />
                DCGI Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="size-3 text-brand-amber" />
                Verified Formulations
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (span 2) */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-3 w-1 rounded-full bg-brand-teal" />
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "All Products" },
                { to: "/quality", label: "Quality Assurance" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    <ChevronRight className="size-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-teal" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Therapeutic Categories (span 3) */}
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-3 w-1 rounded-full bg-brand-purple" />
              Product Categories
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {categories.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/products"
                    search={{ category: c.slug }}
                    className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    <ChevronRight className="size-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-purple" />
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-teal transition-colors hover:text-white"
              >
                <span>View Full Catalog</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Support (span 3) */}
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-3 w-1 rounded-full bg-brand-amber" />
              Contact Details
            </h3>
            <div className="mt-5 space-y-2.5 text-sm">
              <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 backdrop-blur-sm transition-colors hover:border-white/20">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-teal/20 text-brand-teal">
                  <MapPin className="size-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Office Location
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-200 break-words">
                    {company.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 backdrop-blur-sm transition-colors hover:border-white/20">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-purple/20 text-brand-purple">
                  <Phone className="size-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone Inquiry
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-200 break-words">
                    {company.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 backdrop-blur-sm transition-colors hover:border-white/20">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/30 text-brand-teal">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Support
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-200 break-words">
                    {company.email}
                  </span>
                </div>
              </div>

              {company.hours ? (
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 backdrop-blur-sm transition-colors hover:border-white/20">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-amber/20 text-brand-amber">
                    <Clock className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Working Hours
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-200">
                      {company.hours}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-medical px-4 py-2.5 text-xs font-bold text-white shadow-soft transition-all duration-200 hover:opacity-95 hover:shadow-lift"
              >
                <span>Send Business Enquiry</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Legal & Regulatory Note */}
      <div className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-slate-300">
            © {new Date().getFullYear()} {company.name} Pharma Hub. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <Link
              to="/privacy"
              className="transition-colors duration-200 hover:text-brand-teal"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              to="/terms"
              className="transition-colors duration-200 hover:text-brand-teal"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              to="/contact"
              className="transition-colors duration-200 hover:text-brand-teal"
            >
              Help &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
