import { RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

export type MedicineFormType = "Tablet" | "Capsule" | "Syrup" | "Injection" | "Topical" | "Wash";

export type MedicineFormVisualInfo = {
  type: MedicineFormType;
  label: string;
  image: string;
  glowColor: string;
  accentBorder: string;
  badgeText: string;
};

export function getMedicineFormVisual(form?: string): MedicineFormVisualInfo | null {
  if (!form) return null;
  const f = form.toLowerCase();

  // 1. Tablet
  if (f.includes("tablet")) {
    return {
      type: "Tablet",
      label: form,
      image: "/forms/tablet.png",
      glowColor: "from-sky-500/30 via-blue-600/20 to-teal-500/15",
      accentBorder: "border-sky-400/40",
      badgeText: "Tablet",
    };
  }

  // 2. Capsule / Softgel
  if (f.includes("capsule") || f.includes("softgel")) {
    return {
      type: "Capsule",
      label: form,
      image: "/forms/capsule.png",
      glowColor: "from-purple-500/30 via-pink-500/20 to-teal-400/15",
      accentBorder: "border-purple-400/40",
      badgeText: "Capsule",
    };
  }

  // 3. Syrup / Oral Solution / Oral Suspension / Nano Shots / Liquid
  if (
    f.includes("syrup") ||
    f.includes("solution") ||
    f.includes("suspension") ||
    f.includes("shot") ||
    (f.includes("liquid") && !f.includes("wash"))
  ) {
    return {
      type: "Syrup",
      label: form,
      image: "/forms/syrup.png",
      glowColor: "from-amber-500/30 via-orange-500/20 to-yellow-400/15",
      accentBorder: "border-amber-400/40",
      badgeText: "Syrup",
    };
  }

  // 4. Injection
  if (f.includes("injection") || f.includes("injectable")) {
    return {
      type: "Injection",
      label: form,
      image: "/forms/injection.png",
      glowColor: "from-teal-500/30 via-cyan-500/20 to-blue-500/15",
      accentBorder: "border-teal-400/40",
      badgeText: "Injection",
    };
  }

  // 5. Topical / Gel / Ointment / Cream
  if (
    f.includes("gel") ||
    f.includes("ointment") ||
    f.includes("cream") ||
    f.includes("topical") ||
    f.includes("soap") ||
    f.includes("shampoo")
  ) {
    let badgeText = "Gel / Ointment";
    if (f.includes("cream")) badgeText = "Cream";
    else if (f.includes("ointment") && !f.includes("gel")) badgeText = "Ointment";
    else if (f.includes("gel")) badgeText = "Gel / Ointment";

    return {
      type: "Topical",
      label: form,
      image: "/forms/ointment.png",
      glowColor: "from-emerald-500/30 via-teal-500/20 to-cyan-400/15",
      accentBorder: "border-emerald-400/40",
      badgeText,
    };
  }

  // 6. Wash / Feminine & Intimate Hygiene Wash
  if (f.includes("wash")) {
    const isFeminine = f.includes("feminine") || f.includes("intimate");
    const badgeText = isFeminine ? "Feminine Wash" : "Hygiene Wash";

    return {
      type: "Wash",
      label: form,
      image: "/forms/wash.png",
      glowColor: "from-pink-500/30 via-fuchsia-500/20 to-purple-400/15",
      accentBorder: "border-pink-400/40",
      badgeText,
    };
  }

  // Fallback to Tablet
  return {
    type: "Tablet",
    label: form || "Tablet",
    image: "/forms/tablet.png",
    glowColor: "from-blue-500/30 to-teal-500/20",
    accentBorder: "border-blue-400/40",
    badgeText: form ? (form.includes(" ") ? (form.split(" ")[0] || "Tablet") : form) : "Tablet",
  };
}

export function MedicineFormVisual3D({ form, className }: { form?: string; className?: string }) {
  const visual = getMedicineFormVisual(form);
  if (!visual) return null;

  return (
    <div className={cn("relative flex flex-col items-center justify-center group select-none", className)}>
      {/* Ambient soft glow directly on transparent background */}
      <div
        className={cn(
          "absolute -inset-6 rounded-full bg-gradient-to-tr blur-3xl opacity-50 animate-pulse-glow pointer-events-none",
          visual.glowColor,
        )}
      />

      {/* Rotating outer orbital ring */}
      <div className="absolute size-48 sm:size-56 md:size-64 rounded-full border border-dashed border-white/20 animate-spin-360-reverse pointer-events-none">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf]" />
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-brand-purple shadow-[0_0_10px_#a855f7]" />
      </div>

      {/* Transparent 360 rotating image container - 100% transparent background */}
      <div
        className="relative size-40 sm:size-48 md:size-56 bg-transparent flex items-center justify-center cursor-pointer transition-transform duration-500 group-hover:scale-105"
        title={`This medicine is ${visual.badgeText} type (360° Rotating 3D View)`}
      >
        <img
          src={visual.image}
          alt={`${visual.label} 3D representation`}
          className="size-full object-contain animate-spin-360 select-none pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
          loading="eager"
        />
      </div>

      {/* Medicine Type Badge showing Category / Form */}
      <div
        className="mt-3.5 flex items-center gap-1.5 rounded-full glass-panel px-4 py-1.5 text-xs font-medium tracking-wide text-white shadow-soft border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-teal-400/40"
        title={`This medicine is ${visual.badgeText} type (360° View)`}
      >
        <RotateCw className="size-3.5 text-teal-300 animate-spin-360 shrink-0" />
        <span className="text-white/80">Medicine Type:</span>
        <span className="font-bold text-teal-300">{visual.badgeText} Type</span>
        <span className="ml-1 rounded-full bg-teal-400/20 px-2 py-0.5 text-[10px] font-black text-teal-300">
          360°
        </span>
      </div>
    </div>
  );
}
