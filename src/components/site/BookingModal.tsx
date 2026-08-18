import { useEffect, useState } from "react";
import { X, ArrowRight, Clock, ShieldCheck, CalendarCheck } from "lucide-react";
import { CalendlyEmbed } from "@/components/site/CalendlyEmbed";

/** Swap this for the live Calendly link when it is issued. */
export const CALENDLY_URL = "https://calendly.com/YOUR_CALENDLY_LINK/30min";

const BADGES = [
  { icon: Clock, label: "30-Min Call" },
  { icon: ShieldCheck, label: "Strict NDA Privacy" },
  { icon: CalendarCheck, label: "Instant Calendar Hold" },
] as const;

export function BookingModal({ url = CALENDLY_URL }: { url?: string }) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setShown(true), 10);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setShown(false);
    window.setTimeout(() => setOpen(false), 220);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {BADGES.map((b, i) => (
          <span key={b.label} className="inline-flex items-center gap-2">
            {i > 0 ? <span className="mr-3 text-border-gold">|</span> : null}
            <b.icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.4} />
            {b.label}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-crimson mt-6 px-8 py-4 text-base"
      >
        Book a 30-Min Meeting
        <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a consultation"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          style={{
            background: "rgba(5,5,5,0.78)",
            backdropFilter: "blur(10px)",
            opacity: shown ? 1 : 0,
            transition: "opacity 0.25s ease-in-out",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className="flex max-h-[75vh] w-[88vw] flex-col overflow-hidden rounded-2xl border border-border-gold bg-card shadow-2xl sm:max-h-[70vh] sm:w-full sm:max-w-[540px] sm:rounded-lg"
            style={{
              transform: shown ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
              opacity: shown ? 1 : 0,
              transition: "all 0.25s ease-in-out",
            }}
          >
            <div className="flex items-center justify-between border-b border-border bg-[#0C1527] px-5 py-3">
              <p className="font-display text-sm font-semibold tracking-[0.14em] text-gold">
                Corporate Consultation
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close scheduling window"
                className="rounded-md p-1 text-gold transition-opacity hover:opacity-70"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.6} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <CalendlyEmbed url={url} height={620} className="p-2" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
