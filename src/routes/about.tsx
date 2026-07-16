import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Wallet, CheckCircle2, ArrowRight, Building2, FileText, MapPin, Globe } from "lucide-react";
import aboutHero from "@/assets/about-boardroom.jpg";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "REZ INTERNATIONAL LTD is a UK-registered digital wholesale and marketplace distribution specialist. Learn about our corporate credentials, compliance standards, and partnership philosophy.",
      },
      { property: "og:title", content: "About Us — REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "UK-registered corporate entity built on compliance, capital, and controlled marketplace distribution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Sustainable Price Integrity",
    subtitle: "Zero Grey Market Friction",
    text: "We strictly respect and honour Minimum Advertised Price (MAP) setups. By continuously monitoring digital channels, we ensure that your product's pricing remains perfectly unified, avoiding price wars and protecting your physical storefronts or direct retail channels.",
  },
  {
    icon: Truck,
    title: "Operational and Logistics Mastery",
    subtitle: "Direct Infrastructure Asset",
    text: "We manage the exhaustive process of product inspection, premium retail prep, labeling, and complex digital marketplace distribution rules. Every single pallet we process matches the highest standards of international supply chain compliance.",
  },
  {
    icon: Wallet,
    title: "Long-Term Bulk Capital Commitments",
    subtitle: "Consistent Upfront Purchasing",
    text: "We are not a consignment service or drop-shipper. We establish trust by placing volume purchase orders upfront, maintaining a healthy cash flow for our suppliers, and steadily moving large-scale manufacturing output.",
  },
] as const;

const PROMISES = [
  "100% adherence to your explicit corporate policies and aesthetic guidelines.",
  "Continuous market data sharing and collaborative inventory forecasting.",
  "Zero unauthorized marketplace storefront clutter that competes with your brand.",
] as const;

function AboutPage() {
  return (
    <>
      {/* 1. HERO — Mission & Revenue Model Alignment */}
      <section className="relative overflow-hidden">
        <img
          src={aboutHero}
          alt="Modern executive boardroom overlooking a premium logistics port at dusk with soft golden accent lighting"
          width={1920}
          height={1088}
          className="animate-camera-pan absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-28 sm:px-6 lg:px-8 lg:py-44">
          <Reveal>
            <p className="eyebrow">Corporate Identity & Strategic Mission</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-gold sm:text-5xl lg:text-6xl">
              Driven by Compliance. <span className="text-gold-gradient">Scaled by Innovation.</span>
            </h1>
            <h2 className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-foreground sm:text-xl">
              At REZ INTERNATIONAL LTD, we bridge the gap between world class manufacturing and complex digital marketplace distribution ecosystems. We do not operate as an ordinary broker; we act as an authorized, fully-compliant wholesale partner committed to long term brand preservation.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* 2. LEGAL COMPLIANCE & CORPORATE CREDENTIALS */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-lg border border-crimson/55 bg-card p-8 shadow-lg sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">Verified Corporate Standing</p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold text-gold sm:text-3xl">
                    Legal Compliance & Official Credentials
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Our corporate structure is transparent, registered, and fully accountable under UK commercial law. We provide risk averse legal departments and procurement officers with every detail required to verify our standing.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Official Entity</p>
                      <p className="mt-1 font-semibold text-foreground">{COMPANY.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Registration Number</p>
                      <p className="mt-1 font-semibold text-foreground">CRN: {COMPANY.crn}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">England and Wales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Principal Address</p>
                      <p className="mt-1 font-semibold text-foreground">{COMPANY.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-md border border-border bg-background p-5">
                    <Globe className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Scope of Operation</p>
                      <p className="mt-1 font-semibold text-foreground">Authorized Digital Marketplace Distribution, Cross-Border Supply Chain Infrastructure, and Professional Supply Chain Management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CORE PILLARS OF OUR PARTNERSHIP */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">What Defines Our Partnership</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-gold sm:text-4xl">
              The Core Pillars of Our Partnership
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group h-full rounded-lg border border-border bg-surface p-8 transition-all duration-300 hover:border-border-gold hover:shadow-[var(--shadow-gold-glow)] hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border-gold bg-background text-gold transition-colors duration-300 group-hover:border-gold">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-crimson-bright">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VISION FOR DIGITAL DISTRIBUTION */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <p className="eyebrow">The Strategy</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-gold sm:text-4xl">
              A Clear, Transparent Path Forward.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The digital marketplace landscape is often diluted by unauthorised third party sellers who degrade brand identity for quick, short term profits. REZ INTERNATIONAL LTD was founded to counter this challenge. We act as a single, highly professional point of contact that absorbs logistical friction, cleans up fragmented listings, and drives steady, predictable growth for your corporate portfolio.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do not compete with your brand. We augment your digital distribution capability with a controlled, compliant, and capital backed wholesale layer that respects your market positioning.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-border-gold bg-background p-8 sm:p-10">
              <p className="eyebrow">The Guarantee</p>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                Our Strategic Promise to Brand Owners.
              </h3>
              <ul className="mt-8 space-y-5">
                {PROMISES.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-crimson" strokeWidth={2} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. FINAL ENGAGEMENT CTA */}
      <section className="relative bg-surface py-20 lg:py-28">
        <div aria-hidden="true" className="metallic-divider absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-gold sm:text-4xl lg:text-5xl">
              Partner with a Transparent UK Corporate Entity.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Let's establish a highly stable, structured wholesale partnership that protects your brand equity while moving bulk volume.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/partner" className="btn-crimson animate-gold-pulse px-8 py-4 text-base">
                Review Partnership Terms
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Strictly B2B &middot; UK Company No. {COMPANY.crn} &middot; Registered in England & Wales
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
