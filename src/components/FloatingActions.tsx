import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {company.whatsapp ? (
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex size-12 items-center justify-center rounded-full bg-brand-teal text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
        >
          <MessageCircle className="size-5" />
        </a>
      ) : null}
      {company.callNumber ? (
        <a
          href={`tel:${company.callNumber}`}
          aria-label="Call DECAGON"
          className="inline-flex size-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
        >
          <Phone className="size-5" />
        </a>
      ) : null}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 ${
          show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </div>
  );
}
