import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Building2, Scale } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Direct corporate channels for REZ INTERNATIONAL — registered UK office and corporate procurement email.",
      },
      { property: "og:title", content: "Contact Us — REZ INTERNATIONAL" },
      {
        property: "og:description",
        content: "Verified corporate channels and registered UK office of REZ INTERNATIONAL.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapQuery = encodeURIComponent("8 Sea Road, Bexhill on Sea, TN40 1ED, United Kingdom");
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Direct Corporate Channels"
        description="All partnership, procurement and supply chain communications are handled exclusively through the verified corporate channels below."
      />

      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        {/* Ultra-low visibility supply chain network watermark */}
        <div
          aria-hidden="true"
          className="animate-watermark-pulse pointer-events-none absolute inset-0 select-none"
          style={{ opacity: 0.03 }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            fill="none"
            stroke="#DFCC8C"
            strokeWidth="1"
          >
            {/* Latitude / longitude grid */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v-${i}`} x1={(i + 1) * 120} y1="0" x2={(i + 1) * 120} y2="900" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={(i + 1) * 100} x2="1440" y2={(i + 1) * 100} />
            ))}
            {/* Supply chain network nodes */}
            {[
              [200, 260], [420, 200], [640, 340], [860, 240], [1080, 300], [1260, 220],
              [260, 520], [500, 600], [780, 560], [1000, 640], [1220, 560],
              [340, 760], [700, 800], [1060, 780],
            ].map(([cx, cy], i) => (
              <circle key={`n-${i}`} cx={cx} cy={cy} r="4" fill="#DFCC8C" stroke="none" />
            ))}
            {/* Connection arcs */}
            {[
              "M200,260 Q320,180 420,200",
              "M420,200 Q560,240 640,340",
              "M640,340 Q760,220 860,240",
              "M860,240 Q980,220 1080,300",
              "M1080,300 Q1180,240 1260,220",
              "M260,520 Q400,480 500,600",
              "M500,600 Q640,540 780,560",
              "M780,560 Q900,580 1000,640",
              "M1000,640 Q1140,600 1220,560",
              "M340,760 Q520,720 700,800",
              "M700,800 Q900,760 1060,780",
              "M420,200 Q400,400 260,520",
              "M860,240 Q820,440 780,560",
              "M1080,300 Q1120,500 1000,640",
            ].map((d, i) => (
              <path key={`p-${i}`} d={d} />
            ))}

            {/* Cargo vessel silhouettes — geometric side profiles */}
            {[
              { x: 120, y: 430, s: 1 },
              { x: 900, y: 170, s: 0.8 },
              { x: 620, y: 690, s: 1.1 },
            ].map(({ x, y, s }, i) => (
              <g key={`ship-${i}`} transform={`translate(${x} ${y}) scale(${s})`}>
                {/* Hull */}
                <path d="M0,0 L240,0 L220,26 L20,26 Z" />
                {/* Deck line */}
                <line x1="10" y1="0" x2="230" y2="0" />
                {/* Container stacks */}
                <rect x="30" y="-18" width="30" height="18" />
                <rect x="65" y="-24" width="30" height="24" />
                <rect x="100" y="-18" width="30" height="18" />
                <rect x="135" y="-22" width="30" height="22" />
                <rect x="170" y="-16" width="30" height="16" />
                {/* Bridge tower */}
                <rect x="205" y="-32" width="18" height="32" />
                <line x1="214" y1="-32" x2="214" y2="-48" />
                {/* Waterline */}
                <line x1="-20" y1="30" x2="260" y2="30" strokeDasharray="6 6" />
              </g>
            ))}
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* LEFT: Credentials & Direct Channels */}
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-lg border border-border bg-surface p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-crimson/50 bg-background">
                    <MapPin className="h-5 w-5 text-crimson-bright" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson-bright">
                      Principal Corporate Office
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold text-foreground">
                      <span className="text-gold break-words" style={{ color: "#DFCC8C" }}>
                        {COMPANY.name}
                      </span>
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      8 Sea Road, Bexhill on Sea, TN40 1ED
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-surface p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-crimson/50 bg-background">
                    <Scale className="h-5 w-5 text-crimson-bright" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson-bright">
                      Legal Jurisdiction
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold text-foreground">
                      Registered in England and Wales
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Company Registration Number:{" "}
                      <span className="font-semibold text-gold">{COMPANY.crn}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border-gold bg-surface p-8">
                <p className="eyebrow">Direct Communications</p>
                <h2 className="mt-3 font-display text-xl font-bold text-foreground">
                  Verified Corporate Channels
                </h2>

                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-4 rounded-md border border-border bg-background p-4 transition-colors hover:border-crimson/60"
                  >
                    <Mail className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Corporate Email
                      </p>
                      <p className="truncate font-medium text-foreground transition-colors group-hover:text-crimson-bright">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-md border border-border bg-background p-4">
                    <Building2 className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Business Hours (GMT)
                      </p>
                      <p className="font-medium text-foreground">Monday – Friday · 09:00 – 18:00</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Map */}
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-lg border border-border-gold bg-surface">
              <div className="flex items-center justify-between border-b border-border-gold/40 bg-background px-6 py-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" strokeWidth={1.8} />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Logistics Node, Bexhill on Sea
                  </p>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-crimson-bright"
                >
                  Open Map ↗
                </a>
              </div>

              <div className="relative aspect-square w-full bg-background">
                <iframe
                  title="REZ INTERNATIONAL — Registered Office Location"
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale contrast-[1.05] brightness-[0.55] invert-[0.92] hue-rotate-180"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border-gold/40" />
              </div>

              <div className="border-t border-border-gold/40 bg-background px-6 py-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-gold break-words" style={{ color: "#DFCC8C" }}>{COMPANY.name}</span> · 8 Sea Road,
                  Bexhill on Sea, TN40 1ED · United Kingdom
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
