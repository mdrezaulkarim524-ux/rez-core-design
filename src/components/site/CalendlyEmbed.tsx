import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Calendly) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("calendly script failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("calendly script failed"));
    document.body.appendChild(script);
  });
}

/** Calendly inline scheduling widget. Loads the widget script, then initialises explicitly. */
export function CalendlyEmbed({ url, height = 700, className }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        const el = containerRef.current;
        if (cancelled || !el || !window.Calendly) return;
        el.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: el });
      })
      .catch(() => {
        /* widget unavailable (blocked / offline) */
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: 320, height }}
      aria-label="Calendly scheduling"
    />
  );
}
