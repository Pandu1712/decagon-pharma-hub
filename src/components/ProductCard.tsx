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
        "card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      {/* Packaging photo / header area with soft, light pastel tint */}
      <div
        className={cn(
          "relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br p-4 border-b border-border/40",
          headerGradient(category.accent),
        )}
      >
        <div className="relative flex flex-col items-center text-center">
          <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-background/90 shadow-xs transition-transform group-hover:scale-105">
            <Pill className="size-5 text-primary" />
          </span>
          <span className="mt-2 text-xs font-extrabold uppercase tracking-wider text-foreground">
            {product.name || "DECAGON PRODUCT"}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold text-muted-foreground">
            {product.form}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 bg-card">
        <div className="flex items-center gap-2">
          <span className={cn("size-2 rounded-full shadow-xs", accentDot(category.accent))} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {category.name}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
          {product.name || "Unnamed Product"}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.composition}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-border/40">
          <span className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {product.form}
          </span>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-brand-purple"
          >
            View Details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function headerGradient(accent: string) {
  switch (accent) {
    case "purple":
      return "from-surface via-purple-500/[0.07] to-surface";
    case "teal":
      return "from-surface via-teal-500/[0.07] to-surface";
    case "amber":
      return "from-surface via-amber-500/[0.07] to-surface";
    case "orange":
      return "from-surface via-orange-500/[0.07] to-surface";
    default:
      return "from-surface via-blue-500/[0.07] to-surface";
  }
}
