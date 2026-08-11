import { Link } from "@tanstack/react-router";
import { ArrowRight, Pill } from "lucide-react";
import { getCategory, type Product } from "@/data/products";
import { accentDot } from "@/components/Navbar";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const category = getCategory(product.category);
  return (
    <article
      className={cn(
        "card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
        className,
      )}
    >
      {/* Packaging photo placeholder — real product images can be dropped in here. */}
      <div className="relative flex h-32 items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-medical opacity-[0.07]" />
        <Pill className="size-8 text-primary/40" />
        <span className="absolute bottom-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Product image
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className={cn("size-2 rounded-full", accentDot(category.accent))} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {category.name}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.composition}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {product.form}
          </span>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            View Details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
