import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Boxes, FileText, Info, PackageCheck, Pill } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { getCategory, getProduct, products } from "@/data/products";
import { useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | DECAGON" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const category = getCategory(product.category);
    const title = `${product.name} | ${category.name} | DECAGON`;
    const description = `${product.name} — ${product.composition} (${product.form}). Part of the DECAGON ${category.name} range.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.composition,
            category: category.name,
            brand: { "@type": "Brand", name: "DECAGON" },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const sections = [
    {
      icon: Info,
      title: "Overview",
      body: `${product.name} is part of the DECAGON ${category.name} range, presented as ${product.form.toLowerCase()}. Product information is provided for healthcare professionals and does not constitute medical advice.`,
    },
    { icon: FileText, title: "Composition", body: product.composition },
    {
      icon: PackageCheck,
      title: "Key Information",
      body: "Store as per the pack instructions. To be used under the supervision of a registered medical practitioner. Refer to the product pack insert for complete details.",
    },
    { icon: Pill, title: "Dosage / Form", body: product.form },
    {
      icon: Boxes,
      title: "Packaging",
      body: product.packaging ?? "Packaging details available on request.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow={category.name}
          title={product.name}
          subtitle={product.composition}
          crumbs={[
            { label: "Products", to: "/products" },
            { label: category.name, to: "/products", search: { category: category.slug } },
            { label: product.name },
          ]}
        />

        <section className="section-y bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
                <div className="absolute inset-0 bg-gradient-medical opacity-[0.07]" />
                <div className="text-center">
                  <Pill className="mx-auto size-14 text-primary/40" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Product image placeholder
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-flex rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  {category.name}
                </span>
                <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
                  {product.name}
                </h2>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-surface p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Dosage / Form
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">{product.form}</dd>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Available Forms
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-foreground">
                      {product.form}
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <div className="mt-8 space-y-4">
                {sections.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                          <s.icon className="size-4.5" />
                        </span>
                        <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={100}>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen((v) => !v)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Enquire About This Product
                  <ArrowRight className="size-4" />
                </button>
              </Reveal>

              {enquiryOpen ? (
                <div className="mt-8">
                  <ContactForm defaultProduct={product.name} />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="section-y bg-surface">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  More in {category.name}
                </h2>
                <Link
                  to="/products"
                  search={{ category: category.slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View category
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function ProductNotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-40 text-center">
        <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The product you are looking for is not part of the current catalogue.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          Browse all products
        </Link>
      </main>
      <Footer />
    </>
  );
}
