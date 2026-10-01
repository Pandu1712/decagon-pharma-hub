import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { categories } from "@/data/products";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-block rounded-xl bg-white p-2.5 shadow-sm">
            <BrandLogo />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-amber">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {company.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/90">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-brand-teal">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-teal">About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand-teal">Products</Link></li>
            <li><Link to="/quality" className="hover:text-brand-teal">Quality</Link></li>
            <li><Link to="/contact" className="hover:text-brand-teal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/90">
            Product Categories
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="hover:text-brand-teal"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/90">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-teal" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-teal" />
              <span>{company.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-teal" />
              <span>{company.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:py-4 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 DECAGON. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brand-teal">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-teal">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
