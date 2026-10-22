import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { categories, countByCategory, products } from "@/data/products";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Why Decagon", to: "/about", hash: "why" },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full max-w-full transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-background/92 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="DECAGON home">
          <BrandLogo solid={solid} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((l) => (
            <NavItem key={l.label} {...l} solid={solid} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              to="/products"
              activeProps={{
                className: solid
                  ? "text-primary bg-primary/10 font-bold"
                  : "text-white bg-white/20 font-bold",
              }}
              className={cn(
                "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                solid
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground",
              )}
            >
              Products
              <ChevronDown
                className={cn("size-4 transition-transform", megaOpen && "rotate-180")}
              />
            </Link>
            <div
              className={cn(
                "absolute left-0 top-full w-72 pt-2 transition-all duration-200",
                megaOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible -translate-y-2 opacity-0 pointer-events-none",
              )}
            >
              <div className="rounded-2xl border border-border bg-popover/98 p-2 shadow-lift backdrop-blur-md">
                <Link
                  to="/products"
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                  onClick={() => setMegaOpen(false)}
                >
                  <span>All Products</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                    {products.length}
                  </span>
                </Link>

                <div className="my-1.5 h-px bg-border/60" />

                <div className="space-y-0.5">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/products"
                      search={{ category: c.slug }}
                      activeProps={{
                        className: "bg-primary/10 text-primary font-bold",
                      }}
                      className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={cn("size-2 shrink-0 rounded-full", accentDot(c.accent))} />
                        <span className="truncate">{c.name}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-primary/70">
                        {countByCategory(c.slug)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((l) => (
            <NavItem key={l.label} {...l} solid={solid} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            activeProps={{
              className: "ring-2 ring-primary ring-offset-2",
            }}
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-xl border lg:hidden",
              solid
                ? "border-border text-foreground"
                : "border-white/30 text-primary-foreground",
            )}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col">
            {[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Products", to: "/products" }, { label: "Contact Us", to: "/contact" }].map(
              (l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  activeProps={{
                    className: "text-primary bg-primary/10 border-l-4 border-primary pl-3 font-bold",
                  }}
                  activeOptions={l.to === "/" ? { exact: true } : { exact: false }}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/70 py-3.5 text-base font-semibold text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Categories
          </p>
          <div className="mt-3 grid gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/products"
                search={{ category: c.slug }}
                activeProps={{
                  className: "bg-primary/10 text-primary font-bold",
                }}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5 text-sm font-medium text-foreground"
              >
                <span className={cn("size-2 rounded-full", accentDot(c.accent))} />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavItem({
  label,
  to,
  hash,
  solid,
}: {
  label: string;
  to: string;
  hash?: string;
  solid: boolean;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      activeProps={{
        className: solid
          ? "text-primary bg-primary/10 font-bold"
          : "text-white bg-white/20 font-bold",
      }}
      activeOptions={to === "/" && !hash ? { exact: true } : { exact: false }}
      className={cn(
        "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
        solid
          ? "text-foreground/80 hover:text-primary"
          : "text-primary-foreground/90 hover:text-primary-foreground",
      )}
    >
      {label}
    </Link>
  );
}

export function accentDot(accent: string) {
  switch (accent) {
    case "purple":
      return "bg-brand-purple";
    case "teal":
      return "bg-brand-teal";
    case "amber":
      return "bg-brand-amber";
    case "orange":
      return "bg-brand-orange";
    default:
      return "bg-brand-blue";
  }
}
