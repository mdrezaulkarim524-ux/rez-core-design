import { useEffect, useRef, useState } from "react";
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
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const u = new URL(url);
    u.searchParams.set("embed_domain", window.location.hostname);
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("hide_gdpr_banner", "1");
    u.searchParams.set("background_color", "141417");
    u.searchParams.set("text_color", "ffffff");
    u.searchParams.set("primary_color", "d4af37");
    setSrc(u.toString());

    timer.current = setTimeout(() => setFailed((f) => (ready ? f : true)), 8000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className={className} style={{ minWidth: 320 }}>
      {src && !failed ? (
        <iframe
          src={src}
          title="Schedule a meeting with REZ INTERNATIONAL LTD"
          width="100%"
          height={height}
          frameBorder="0"
          loading="lazy"
          onLoad={() => setReady(true)}
          onError={() => setFailed(true)}
          style={{ border: 0, display: "block", borderRadius: 8, minHeight: height }}
        />
      ) : null}

      {(!ready || failed) && (
        <div
          className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card px-6 py-10 text-center"
          style={failed ? undefined : { marginTop: -height, height, position: "relative" }}
        >
          <p className="text-sm text-muted-foreground">
            {failed
              ? "The scheduling calendar could not load in this view."
              : "Loading the corporate scheduling calendar…"}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson px-6 py-3 text-sm"
          >
            Open Scheduling Page
            <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      )}
    </div>
  );
}
