import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/sections";
import { accentDot } from "@/components/Navbar";
import { categories, countByCategory, products, type CategorySlug } from "@/data/products";
import { cn } from "@/lib/utils";

const title = "Products | DECAGON Pharmaceutical Portfolio";
const description =
  "Browse the DECAGON product portfolio by therapeutic category — tablets, capsules, syrups, injections, gels, creams and supplements.";

type Search = { category?: string; q?: string; letter?: string };

const PAGE_SIZE = 12;

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ...(typeof search["category"] === "string" ? { category: search["category"] } : {}),
    ...(typeof search["q"] === "string" ? { q: search["q"] } : {}),
    ...(typeof search["letter"] === "string" ? { letter: search["letter"] } : {}),
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q ?? "");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const activeCategory = search.category as CategorySlug | undefined;
  const activeLetter = search.letter;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeLetter && !p.name.toUpperCase().startsWith(activeLetter)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.form.toLowerCase().includes(q) ||
        p.category.replace(/-/g, " ").includes(q)
      );
    });
  }, [query, activeCategory, activeLetter]);

  const setSearch = (next: Search) => {
    setVisible(PAGE_SIZE);
    void navigate({ search: next });
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Products"
          title="Our Pharmaceutical Products"
          subtitle="Explore the DECAGON Product Portfolio — organised by therapeutic category, with exact product names and compositions."
          crumbs={[{ label: "Products" }]}
        />

        <section className="section-y bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="relative mx-auto max-w-2xl">
              <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search by product name, composition or category…"
                aria-label="Search products"
                className="w-full rounded-full border border-input bg-card py-4 pl-13 pr-12 text-sm shadow-soft outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              ) : null}
            </div>

            {/* Category filters */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setSearch({ ...(query ? { q: query } : {}) })}
                className={cn(chip, !activeCategory && chipActive)}
              >
                All Products ({products.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSearch({ category: c.slug })}
                  className={cn(chip, activeCategory === c.slug && chipActive)}
                >
                  <span className={cn("size-2 rounded-full", accentDot(c.accent))} />
                  {c.name} ({countByCategory(c.slug)})
                </button>
              ))}
            </div>

            {/* Alphabetical */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  setSearch({ ...(activeCategory ? { category: activeCategory } : {}) })
                }
                className={cn(letterCls, !activeLetter && "bg-primary text-primary-foreground")}
              >
                All
              </button>
              {letters.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() =>
                    setSearch({
                      letter: l,
                      ...(activeCategory ? { category: activeCategory } : {}),
                    })
                  }
                  className={cn(
                    letterCls,
                    activeLetter === l && "bg-primary text-primary-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Showing {Math.min(visible, filtered.length)} of {filtered.length} products
              {activeCategory ? ` in ${categories.find((c) => c.slug === activeCategory)?.name}` : ""}
            </p>

            {filtered.length === 0 ? (
              <div className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-surface p-10 text-center shadow-soft">
                <p className="text-base font-semibold text-foreground">No products found</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different product name, composition or category.
                </p>
              </div>
            ) : (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.slice(0, visible).map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}

            {visible < filtered.length ? (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="inline-flex rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Load More Products
                </button>
              </div>
            ) : null}

            <div className="mt-16 rounded-2xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-soft">
              Product names and compositions are shown exactly as supplied by DECAGON. This
              catalogue is intended as product information for healthcare professionals and does not
              constitute medical advice. For prescribing details, please{" "}
              <Link to="/contact" className="font-semibold text-primary">
                contact our team
              </Link>
              .
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

const chip =
  "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-soft transition-colors hover:border-primary/40 hover:text-primary";
const chipActive = "border-transparent bg-gradient-brand text-primary-foreground hover:text-primary-foreground";
const letterCls =
  "inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-xs font-semibold text-foreground transition-colors hover:border-primary/40";
