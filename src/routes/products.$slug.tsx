import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Baby,
  BookOpen,
  Boxes,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Info,
  PackageCheck,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import {
  getCategory,
  getProduct,
  products,
  type Product,
  type ProductDetailInfo,
} from "@/data/products";
import { cn } from "@/lib/utils";
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
        ...(product.image ? [{ property: "og:image", content: product.image }] : []),
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
            ...(product.image ? { image: product.image } : {}),
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

type TopicId = "overview" | "keyfeatures" | "composition" | "benefits" | "usage" | "pregnancy";

function getDefaultDetails(product: Product): ProductDetailInfo {
  if (product.details) return product.details;
  const category = getCategory(product.category);
  return {
    overview: `${product.name} is a high-grade pharmaceutical formulation developed under the DECAGON ${category.name} therapeutic range, presented in ${product.form.toLowerCase()} form. Engineered with precision to deliver consistency, clinical efficacy, and reliable patient outcomes.`,
    targetAudience: `Formulated for individuals requiring therapeutic support under the guidance of healthcare professionals in the field of ${category.name.toLowerCase()}.`,
    keyFeatures: [
      {
        title: "Pharmaceutical Quality",
        description:
          "Manufactured under stringent WHO-GMP and ISO certified standards with validated batch consistency.",
      },
      {
        title: "Standardized Formulation",
        description: `Delivers exact therapeutic active ingredients: ${product.composition}.`,
      },
      {
        title: "Therapeutic Specificity",
        description: `Specifically engineered to meet clinical requirements across the ${category.name} spectrum.`,
      },
      {
        title: "Rigorous Analytical Testing",
        description:
          "Undergoes multi-stage release testing for assay, dissolution, stability, and packaging integrity.",
      },
    ],
    compositionList: [
      {
        ingredient: product.composition,
        strength: "Standardized Dose",
        role: "Active Pharmaceutical Ingredient",
      },
    ],
    keyBenefits: [
      `Supports clinical efficacy in ${category.name.toLowerCase()}`,
      "High bioavailability and predictable therapeutic response",
      "Manufactured with premium grade active substances",
      "Stable formulation with rigorous shelf-life monitoring",
    ],
    moleculeBenefits: [],
    recommendedUsage: {
      dosage: "As directed by a registered medical practitioner",
      administration:
        "Refer to the product pack insert or follow the specific directions of the consulting physician.",
      duration: "Duration of therapy should be determined by the attending doctor based on patient condition.",
      precautions:
        "Store in a cool, dry place away from direct sunlight. Keep out of reach of children. Use strictly under medical supervision.",
    },
    disclaimer:
      "Product information is intended for registered healthcare professionals and educational reference only. It does not constitute medical advice.",
  };
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const details = getDefaultDetails(product);
  const [activeTopic, setActiveTopic] = useState<TopicId>("overview");
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const topics: { id: TopicId; label: string; icon: typeof Info }[] = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "keyfeatures", label: "Key Features", icon: Sparkles },
    { id: "composition", label: "Composition", icon: FlaskConical },
    { id: "benefits", label: "Benefits", icon: HeartPulse },
    ...(details.pregnancyLactation
      ? [{ id: "pregnancy" as TopicId, label: "Pregnancy & Lactation", icon: Baby }]
      : []),
    { id: "usage", label: "Recommended Usage", icon: Clock },
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
          medicineForm={product.form}
        />

        <section className="section-y bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] xl:gap-8">
              {/* Left Column: Visual Presentation Card & Quick Info (Sticky on desktop) */}
              <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-surface/60 to-primary/[0.04] p-5 sm:p-6 shadow-soft">
                    {/* Background subtle radial glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/10 blur-3xl" />

                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                        {category.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {details.pregnancyLactation && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 border border-teal-500/30 px-2.5 py-0.5 text-[11px] font-bold text-teal-700 dark:text-teal-300">
                            <Baby className="size-3.5" />
                            <span>Maternal Care</span>
                          </span>
                        )}
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                          {product.form}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col items-center justify-center text-center">
                      {product.image ? (
                        <div className="relative flex w-full max-w-sm items-center justify-center rounded-2xl bg-surface/90 p-4 border border-border/70 shadow-soft overflow-hidden group">
                          <img
                            src={product.image}
                            alt={`${product.name} packaging`}
                            className="max-h-64 w-auto object-contain rounded-xl drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="relative flex size-24 items-center justify-center rounded-3xl bg-surface border border-border shadow-soft">
                          <Pill className="size-12 text-primary" />
                          <span className="absolute -bottom-2 -right-2 flex size-7 items-center justify-center rounded-full bg-teal-600 text-white shadow-xs">
                            <Check className="size-4 stroke-[3]" />
                          </span>
                        </div>
                      )}

                      <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        DECAGON PHARMACEUTICALS
                      </p>
                    </div>

                    {/* Quick highlights grid */}
                    <dl className="mt-4 grid grid-cols-2 gap-2.5 border-t border-border/60 pt-4">
                      <div className="rounded-xl border border-border/50 bg-background/80 p-3 text-left">
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Dosage Form
                        </dt>
                        <dd className="mt-0.5 text-xs sm:text-sm font-bold text-foreground">
                          {product.form}
                        </dd>
                      </div>
                      <div className="rounded-xl border border-border/50 bg-background/80 p-3 text-left">
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Packaging
                        </dt>
                        <dd className="mt-0.5 text-xs sm:text-sm font-bold text-foreground truncate">
                          {product.packaging ?? "Standard Pack"}
                        </dd>
                      </div>
                    </dl>

                    {/* Quick action buttons */}
                    <div className="mt-4 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => setEnquiryOpen((v) => !v)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-all hover:shadow-lift hover:-translate-y-0.5"
                      >
                        {enquiryOpen ? "Close Enquiry Form" : "Enquire About This Product"}
                        <ArrowRight className="size-4" />
                      </button>

                      <Link
                        to="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-3 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                      >
                        Contact Medical Representative
                      </Link>
                    </div>
                  </div>

                {/* Inline Enquiry Form Drawer if toggled */}
                {enquiryOpen ? (
                  <Reveal>
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                      <h3 className="text-base font-bold text-foreground">
                        Direct Product Enquiry
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Send an enquiry for {product.name}. Our commercial team will respond promptly.
                      </p>
                      <div className="mt-4">
                        <ContactForm defaultProduct={product.name} />
                      </div>
                    </div>
                  </Reveal>
                ) : null}
              </div>

              {/* Right Column: Interactive Topics (Overview, Key Features, Composition, Benefits, Usage) */}
              <div className="space-y-4">
                {/* Topic Navigation Tabs */}
                <Reveal>
                  <div className="flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-border/80 bg-surface/80 p-1.5 shadow-xs">
                    {topics.map((t) => {
                      const Icon = t.icon;
                      const isActive = activeTopic === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setActiveTopic(t.id)}
                          className={cn(
                            "flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all",
                            isActive
                              ? "bg-card text-primary shadow-soft border border-border/60"
                              : "text-muted-foreground hover:bg-card/50 hover:text-foreground",
                          )}
                          aria-selected={isActive}
                          role="tab"
                        >
                          <Icon className={cn("size-4", isActive ? "text-primary" : "text-muted-foreground")} />
                          <span>{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </Reveal>

                {/* Active Topic Content Panel */}
                <div className="rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft">
                  {/* TOPIC 1: OVERVIEW */}
                  {activeTopic === "overview" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <Info className="size-4" />
                          <span>Product Introduction</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                          Overview of {product.name}
                        </h3>
                        <p className="mt-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                          {details.overview}
                        </p>
                      </div>

                      {/* Target audience callout */}
                      <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
                        <div className="flex items-center gap-2.5 font-bold text-sm text-primary">
                          <Users className="size-5" />
                          <span>Designed For / Target Audience</span>
                        </div>
                        <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                          {details.targetAudience}
                        </p>
                      </div>

                      {/* Approved Scientific Claim for Promotional Literature */}
                      {details.scientificClaim && (
                        <div className="rounded-2xl border border-teal-500/25 bg-teal-50/70 p-5 shadow-2xs">
                          <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider">
                            <Award className="size-4 text-teal-700" />
                            <span>Suitable Scientific Claim for Promotional Literature</span>
                          </div>
                          <p className="mt-2 text-sm font-semibold text-teal-950 leading-relaxed">
                            "{details.scientificClaim}"
                          </p>
                          {details.clinicalNote && (
                            <p className="mt-3 text-xs text-teal-900/80 leading-relaxed border-t border-teal-500/20 pt-2.5">
                              <span className="font-semibold text-teal-950">Clinical Evidence Context: </span>
                              {details.clinicalNote}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Pregnancy & Lactation Protocol Highlight */}
                      {details.pregnancyLactation && (
                        <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.08] via-surface to-primary/[0.04] p-5 shadow-2xs">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/15 text-teal-700 dark:text-teal-400">
                                <Baby className="size-5" />
                              </span>
                              <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                                  Obstetric & Lactation Protocol
                                </span>
                                <h4 className="text-sm sm:text-base font-bold text-foreground">
                                  Pregnancy & Lactation Bone Nutrition
                                </h4>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setActiveTopic("pregnancy")}
                              className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-teal-700 self-start sm:self-center shrink-0"
                            >
                              <span>View Protocol</span>
                              <ArrowRight className="size-3.5" />
                            </button>
                          </div>
                          <p className="mt-3 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            {details.pregnancyLactation.overview}
                          </p>
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-border/50 text-[11px]">
                            <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
                              <Check className="size-3 text-teal-600 shrink-0" />
                              Fetal bone & tooth mineralization
                            </span>
                            <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
                              <Check className="size-3 text-teal-600 shrink-0" />
                              Replenishes maternal calcium stores
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Therapeutic classification list */}
                      <div className="grid gap-3 sm:grid-cols-2 pt-2">
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Therapeutic Category
                          </span>
                          <p className="mt-1 text-sm font-bold text-foreground">
                            {category.name}
                          </p>
                        </div>
                        <div className="rounded-xl border border-border bg-surface p-4">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Dosage Form & Delivery
                          </span>
                          <p className="mt-1 text-sm font-bold text-foreground">
                            {product.form}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TOPIC 2: KEY FEATURES */}
                  {activeTopic === "keyfeatures" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="size-4" />
                          <span>Core Differentiators</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                          Why Choose {product.name}?
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Scientifically formulated advantages engineered for long-term health and patient compliance.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {details.keyFeatures.map((feat, idx) => (
                          <div
                            key={feat.title}
                            className="rounded-2xl border border-border/80 bg-surface/70 p-5 transition-all hover:border-primary/30 hover:bg-surface"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                                0{idx + 1}
                              </span>
                              <h4 className="text-sm font-bold text-foreground">
                                {feat.title}
                              </h4>
                            </div>
                            <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TOPIC 3: COMPOSITION */}
                  {activeTopic === "composition" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <FlaskConical className="size-4" />
                          <span>Active Ingredients</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                          Formulation Composition
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Exact standardized active constituents contained per unit dose.
                        </p>
                      </div>

                      <div className="divide-y divide-border/60 rounded-2xl border border-border bg-surface/50 overflow-hidden">
                        {details.compositionList.map((item) => (
                          <div
                            key={item.ingredient}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 sm:px-6 hover:bg-surface transition-colors"
                          >
                            <div>
                              <p className="text-sm font-bold text-foreground">
                                {item.ingredient}
                              </p>
                              {item.role && (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {item.role}
                                </p>
                              )}
                            </div>
                            <span className="inline-flex self-start sm:self-center items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary border border-primary/20">
                              {item.strength}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl border border-border/60 bg-surface p-4 text-xs text-muted-foreground">
                        <span className="font-bold text-foreground">Summary Formula: </span>
                        {product.composition}
                      </div>
                    </div>
                  )}

                  {/* TOPIC 4: BENEFITS */}
                  {activeTopic === "benefits" && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <HeartPulse className="size-4" />
                          <span>Therapeutic Impact</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                          Key Clinical Benefits
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Comprehensive physiological support verified by modern nutritional science.
                        </p>
                      </div>

                      {/* Key benefits list */}
                      <div className="grid gap-3 sm:grid-cols-2">
                        {details.keyBenefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/60 p-3.5"
                          >
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-600/15 text-teal-700 mt-0.5">
                              <Check className="size-3.5 stroke-[2.5]" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Individual molecule breakdown if present */}
                      {details.moleculeBenefits.length > 0 && (
                        <div className="pt-4 border-t border-border">
                          <h4 className="text-lg font-bold text-foreground">
                            Individual Molecule Benefits
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">
                            In-depth biological mechanism and target action for each constituent:
                          </p>

                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {details.moleculeBenefits.map((m) => (
                              <div
                                key={m.molecule}
                                className="rounded-2xl border border-border bg-surface p-5 shadow-2xs"
                              >
                                <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
                                  <h5 className="text-sm font-bold text-foreground">
                                    {m.molecule}
                                  </h5>
                                  {m.strength && (
                                    <span className="text-[11px] font-bold text-primary bg-primary/10 rounded-md px-2 py-0.5">
                                      {m.strength}
                                    </span>
                                  )}
                                </div>
                                <ul className="mt-3 space-y-2">
                                  {m.points.map((pt) => (
                                    <li key={pt} className="flex items-start gap-2 text-xs text-muted-foreground">
                                      <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                      <span>{pt}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pregnancy & Lactation callout within Benefits */}
                      {details.pregnancyLactation && (
                        <div className="rounded-2xl border border-teal-500/25 bg-teal-50/50 dark:bg-teal-950/20 p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-600/15 text-teal-700">
                              <Baby className="size-5" />
                            </span>
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold text-foreground">
                                Specific Benefits for Pregnancy & Lactation
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                Detailed maternal and fetal skeletal support protocols available.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveTopic("pregnancy")}
                            className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1 shrink-0 self-start sm:self-center"
                          >
                            <span>View Maternal Protocol</span>
                            <ArrowRight className="size-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TOPIC 5: RECOMMENDED USAGE */}
                  {activeTopic === "usage" && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <Clock className="size-4" />
                          <span>Usage & Administration</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                          Recommended Usage
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Guidance on administration, dosage, and precautions.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border bg-surface p-5">
                          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                            <Pill className="size-4" />
                            <span>Recommended Dosage</span>
                          </div>
                          <p className="mt-2 text-sm sm:text-base font-bold text-foreground">
                            {details.recommendedUsage.dosage}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-surface p-5">
                          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                            <Clock className="size-4" />
                            <span>Administration</span>
                          </div>
                          <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                            {details.recommendedUsage.administration}
                          </p>
                        </div>

                        {details.recommendedUsage.duration && (
                          <div className="rounded-2xl border border-border bg-surface p-5">
                            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                              <CheckCircle2 className="size-4" />
                              <span>Duration of Use</span>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                              {details.recommendedUsage.duration}
                            </p>
                          </div>
                        )}

                        {details.recommendedUsage.precautions && (
                          <div className="rounded-2xl border border-border bg-surface p-5">
                            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                              <ShieldAlert className="size-4 text-amber-600" />
                              <span>Precautions & Storage</span>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                              {details.recommendedUsage.precautions}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* TOPIC 6: PREGNANCY & LACTATION */}
                  {activeTopic === "pregnancy" && details.pregnancyLactation && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                          <Baby className="size-4 text-primary" />
                          <span>Obstetric & Lactation Protocol</span>
                        </div>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                          Pregnancy & Lactation Support
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
                          {details.pregnancyLactation.overview}
                        </p>
                      </div>

                      {/* Marketing Statement Callout Banner */}
                      {details.pregnancyLactation.marketingStatement && (
                        <div className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-50/80 via-surface to-primary/[0.06] p-6 shadow-soft">
                          <div className="flex items-start gap-4">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-xs">
                              <Award className="size-6" />
                            </span>
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                                Product Marketing Statement
                              </span>
                              <p className="mt-1 text-base sm:text-lg font-extrabold text-teal-950 dark:text-teal-100 italic">
                                "{details.pregnancyLactation.marketingStatement}"
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Two-Column Comparison: Benefits During Pregnancy vs Benefits During Lactation */}
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Column 1: Pregnancy */}
                        <div className="rounded-2xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-6 flex flex-col justify-between shadow-2xs">
                          <div>
                            <div className="flex items-center gap-3 pb-4 border-b border-teal-500/20">
                              <span className="flex size-9 items-center justify-center rounded-xl bg-teal-600/15 text-teal-700 dark:text-teal-400">
                                <Baby className="size-5" />
                              </span>
                              <div>
                                <h4 className="text-base font-bold text-teal-950 dark:text-teal-100">
                                  Benefits During Pregnancy
                                </h4>
                                <p className="text-[11px] text-teal-800/80 dark:text-teal-300">
                                  Fetal skeletal development & maternal mineral balance
                                </p>
                              </div>
                            </div>

                            <ul className="mt-4 space-y-3">
                              {details.pregnancyLactation.pregnancyBenefits.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white mt-0.5 shadow-2xs">
                                    <Check className="size-3 stroke-[2.5]" />
                                  </span>
                                  <span className="text-xs sm:text-sm font-medium text-teal-950/90 dark:text-teal-200 leading-snug">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 pt-3 border-t border-teal-500/20 text-[11px] font-semibold text-teal-800 dark:text-teal-300">
                            Supports bone mineralization, dental buds, and gestational growth.
                          </div>
                        </div>

                        {/* Column 2: Lactation */}
                        <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6 flex flex-col justify-between shadow-2xs">
                          <div>
                            <div className="flex items-center gap-3 pb-4 border-b border-primary/20">
                              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                                <HeartHandshake className="size-5" />
                              </span>
                              <div>
                                <h4 className="text-base font-bold text-foreground">
                                  Benefits During Lactation
                                </h4>
                                <p className="text-[11px] text-muted-foreground">
                                  Maternal bone density preservation & nursing support
                                </p>
                              </div>
                            </div>

                            <ul className="mt-4 space-y-3">
                              {details.pregnancyLactation.lactationBenefits.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mt-0.5 shadow-2xs">
                                    <Check className="size-3 stroke-[2.5]" />
                                  </span>
                                  <span className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 pt-3 border-t border-primary/20 text-[11px] font-semibold text-primary">
                            Protects maternal trabecular bone loss during peak milk production.
                          </div>
                        </div>
                      </div>

                      {/* Recommended Usage in Obstetric Setting */}
                      <div className="rounded-2xl border border-border bg-surface p-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                          <Clock className="size-4" />
                          <span>Recommended Usage in Pregnancy & Lactation</span>
                        </div>
                        <p className="mt-3 text-sm sm:text-base font-bold text-foreground">
                          {details.pregnancyLactation.usageNote.split("Note:")[0]?.trim() ??
                            details.pregnancyLactation.usageNote}
                        </p>
                        {details.pregnancyLactation.usageNote.includes("Note:") && (
                          <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-900 flex items-start gap-3">
                            <ShieldAlert className="size-5 shrink-0 text-amber-600 mt-0.5" />
                            <div className="leading-relaxed">
                              <span className="font-bold">Individualized Clinical Assessment: </span>
                              {details.pregnancyLactation.usageNote.split("Note:")[1]?.trim()}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* NIH Recommended Daily Calcium Intake Table */}
                      {details.pregnancyLactation.guidelines && (
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                            <div>
                              <h4 className="text-base font-bold text-foreground">
                                Recommended Daily Calcium Intake (NIH)
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                National Institutes of Health (NIH), Office of Dietary Supplements
                              </p>
                            </div>
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground self-start sm:self-center">
                              NIH Dietary Guidelines
                            </span>
                          </div>

                          <div className="overflow-hidden rounded-2xl border border-border bg-surface mt-3 shadow-2xs">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                              <thead>
                                <tr className="border-b border-border bg-muted/50">
                                  <th className="p-3.5 sm:px-6 font-bold text-foreground">Population Group</th>
                                  <th className="p-3.5 sm:px-6 font-bold text-primary text-right sm:text-left">
                                    Recommended Daily Calcium Intake
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/60">
                                {details.pregnancyLactation.guidelines.map((row) => (
                                  <tr key={row.population} className="hover:bg-muted/20 transition-colors">
                                    <td className="p-3.5 sm:px-6 font-medium text-foreground">
                                      {row.population}
                                    </td>
                                    <td className="p-3.5 sm:px-6 font-bold text-foreground text-right sm:text-left">
                                      <span className="inline-flex rounded-lg bg-primary/10 px-3 py-1 font-mono font-bold text-primary border border-primary/20">
                                        {row.intake}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Scientific References & Guidelines Section */}
                      {details.pregnancyLactation.references &&
                        details.pregnancyLactation.references.length > 0 && (
                          <div className="rounded-2xl border border-border bg-surface p-6 shadow-2xs">
                            <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                              <BookOpen className="size-4 text-primary" />
                              <span>Scientific References & Authoritative Guidelines</span>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Peer-reviewed publications and global consensus statements:
                            </p>

                            <div className="mt-4 divide-y divide-border/60">
                              {details.pregnancyLactation.references.map((ref) => (
                                <div key={ref.title} className="py-3.5 first:pt-0 last:pb-0">
                                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                    <span className="text-xs font-bold text-primary">
                                      {ref.source}
                                    </span>
                                    {ref.url && (
                                      <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline self-start sm:self-auto"
                                      >
                                        Official Resource
                                        <ExternalLink className="size-3" />
                                      </a>
                                    )}
                                  </div>
                                  <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground">
                                    {ref.title}
                                  </p>
                                  {ref.description && (
                                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                      {ref.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  )}

                  {/* Prominent Disclaimer Banner */}
                  <div className="mt-8 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4.5 text-xs text-amber-900 flex items-start gap-3">
                    <ShieldAlert className="size-5 shrink-0 text-amber-600 mt-0.5" />
                    <div className="leading-relaxed">
                      <span className="font-bold">Disclaimer: </span>
                      {details.disclaimer}
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
