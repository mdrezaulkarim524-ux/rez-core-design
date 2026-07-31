import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

/**
 * Calendly inline scheduler rendered as a direct iframe.
 * Avoids the external widget.js loader, which is blocked inside sandboxed previews.
 */
export function CalendlyEmbed({ url, height = 700, className }: CalendlyEmbedProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const u = new URL(url);
    u.searchParams.set("embed_domain", window.location.hostname);
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("hide_gdpr_banner", "1");
    u.searchParams.set("background_color", "141417");
    u.searchParams.set("text_color", "ffffff");
    u.searchParams.set("primary_color", "d4af37");
    setSrc(u.toString());
  }, [url]);

  return (
    <div className={className} style={{ minWidth: 320 }}>
      <div
        className="relative overflow-hidden rounded-lg bg-card"
        style={{ height }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="text-sm text-muted-foreground">Loading the corporate scheduling calendar…</p>
        </div>
        {src ? (
          <iframe
            src={src}
            title="Schedule a meeting with REZ INTERNATIONAL LTD"
            width="100%"
            height={height}
            loading="lazy"
            className="relative block h-full w-full border-0"
          />
        ) : null}
      </div>

      <div className="mt-4 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:opacity-80"
        >
          Open the scheduling page in a new tab
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
        </a>
      </div>
    </div>
  );
}
