import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/** Calendly inline scheduling widget. Loads the external widget script once. */
export function CalendlyEmbed({ url, height = 700, className }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className ?? ""}`}
      data-url={url}
      style={{ minWidth: 320, height }}
    />
  );
}
