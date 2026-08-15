import { useState } from "react";
import { cn } from "@/lib/utils";

export function BrandLogo({
  solid = true,
  className,
}: {
  solid?: boolean;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/logo.png"
        alt="DECAGON — Believed Quality"
        width={220}
        height={50}
        onError={() => setImgError(true)}
        className={cn(
          "h-9 w-auto object-contain transition-all duration-300 md:h-10",
          className,
        )}
      />
    );
  }

  // Fallback typography logo if image fails to load
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "flex size-9 items-center justify-center rounded-xl font-display font-black text-sm tracking-wider shadow-sm transition-colors md:size-10",
          solid
            ? "bg-gradient-brand text-primary-foreground"
            : "bg-white text-brand-blue-deep",
        )}
      >
        10
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight md:text-2xl",
            solid ? "text-foreground" : "text-white",
          )}
        >
          DECAGON
        </span>
        <span
          className={cn(
            "mt-0.5 text-[9px] font-bold uppercase tracking-[0.24em]",
            solid ? "text-brand-amber" : "text-brand-amber/90",
          )}
        >
          Believed Quality
        </span>
      </div>
    </div>
  );
}
