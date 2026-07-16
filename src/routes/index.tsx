import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Landmark,
  Boxes,
  CheckCircle2,
  Wallet,
  Lock,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";
import sectorBeauty from "@/assets/sector-beauty.jpg";
import sectorHome from "@/assets/sector-home.jpg";
import sectorConsumer from "@/assets/sector-consumer.jpg";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Wholesale Distribution Partner | REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Official corporate portal of REZ INTERNATIONAL (CRN: 17320050). We act as a trusted digital marketplace distribution and supply chain partner for global brands and manufacturers. Secure bulk upfront capital procurement with strict MAP compliance.",
      },
      { property: "og:title", content: "Digital Wholesale Distribution Partner | REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "Official corporate portal of REZ INTERNATIONAL (CRN: 17320050). We act as a trusted digital marketplace distribution and supply chain partner for global brands and manufacturers. Secure bulk upfront capital procurement with strict MAP compliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const TRUST_ANCHORS = [
  {
    icon: ShieldCheck,
    title: "Brand Equity Protection",
    text: "REZ INTERNATIONAL LTD strictly respects Minimum Advertised Price (MAP) policies and follows your exact corporate guidelines, eliminating grey market listings and safeguarding brand value across every authorised channel.",
  },
  {
    icon: Landmark,
    title: "Seamless Capital & Scale",
    text: `Operating under UK Company Registration Number ${COMPANY.crn}, REZ INTERNATIONAL LTD acts as a well-capitalised wholesale buying partner, purchasing high-volume wholesale inventory directly and upfront.`,
  },



  {
    icon: Boxes,
    title: "Advanced Supply Chain Integration",
    text: "REZ INTERNATIONAL LTD operates premium prep facilities, strict quality control systems and streamlined inventory workflows, ensuring every digital marketplace compliance threshold is flawlessly met.",
  },
] as const;

const METRICS = [
  { icon: CheckCircle2, label: "100% Marketplace Compliant Prep" },
  { icon: Wallet, label: "Upfront Bulk Capital Committed" },
  { icon: Lock, label: "Strict MAP Policy Adherence" },
] as const;

const SECTOR_CARDS = [
  {
    image: sectorBeauty,
    eyebrow: "Sector 01",
    title: "Beauty & Personal Care",
    text: "Premium prestige beauty, skincare, and grooming SKUs prepped to marketplace-grade specifications.",
  },
  {
    image: sectorHome,
    eyebrow: "Sector 02",
    title: "Home & Kitchen Logistics",
    text: "High-volume household goods managed with disciplined inventory workflows and MAP enforcement.",
  },
  {
    image: sectorConsumer,
    eyebrow: "Sector 03",
    title: "Premium Consumer Goods",
    text: "Electronics, lifestyle and specialty categories scaled through authorized digital channels.",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Connect & Align",
    text: "Share your product catalog and marketplace distribution guidelines through our corporate channel.",
  },
  {
    n: "02",
    title: "Fleet & Capital Commit",
    text: "We evaluate inventory fit and issue an upfront bulk purchase order directly to your manufacturing plant or warehouse.",
  },
  {
    n: "03",
    title: "Compliance & Scale",
    text: "Our UK distribution hub receives, preps, and seamlessly feeds the products into optimized digital marketplace distribution channels while keeping pricing fully stable.",
  },
] as const;

function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="State-of-the-art corporate fulfillment center with premium retail packaging under professional accent lighting"
          width={1920}
          height={1088}
          className="animate-camera-pan absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-28 sm:px-6 lg:px-8 lg:py-44">
          <Reveal>
            <p className="eyebrow" style={{ color: "#FFFFFF" }}>UK-Registered Digital Wholesale Business Partner</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl" style={{ color: "#DFCC8C" }}>
              Accelerating Brand Growth Across Premium Digital Marketplaces.
            </h1>
            <h2 className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-foreground sm:text-xl">
              REZ INTERNATIONAL LTD acts as your official distribution and fulfilment facilitator. We purchase inventory in bulk, honour your brand guidelines, enforce price stability and optimise your positioning across digital channels with zero marketplace channel friction.
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/partner" className="btn-crimson px-7 py-3.5 text-base">
                Initiate Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/expertise" className="btn-gold-outline px-7 py-3.5 text-base">
                Explore Our Sectors
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. TRUST ANCHORS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Trust Anchors & Core Values</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-gold sm:text-4xl">
              Built on Compliance, Capital, and Control.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TRUST_ANCHORS.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="hover-luxe stroke-hairline h-full rounded-lg border border-border bg-charcoal p-8">
                  <a.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC VALUE PROPOSITION — split screen */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <p className="eyebrow">The Strategic Difference</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-gold sm:text-4xl">
              Why Leading Brands Trust <span className="text-white">REZ INTERNATIONAL LTD</span> as a Digital Wholesale Partner.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Traditional distributors simply move boxes. REZ INTERNATIONAL LTD protects your market ecosystem. We do not run public storefronts and we do not compete with your direct retail network. Instead, we absorb the operational burden of high volume digital logistics, ensuring your supply line remains organised, fully optimised and strictly protected from unauthorised third party disruption.
            </p>

            <div className="mt-8">
              <Link to="/about" className="btn-gold-outline px-6 py-3 text-sm">
                Read Our Corporate Philosophy
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="hover-luxe flex items-center gap-5 rounded-lg border border-border-gold bg-background p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border-gold bg-surface text-gold">
                    <m.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">{m.label}</p>
                </div>
              ))}
              <div className="mt-2 rounded-lg border border-border bg-background p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Registered in England &amp; Wales
                </p>
                <p className="mt-2 font-display text-base font-semibold text-gold">
                  Company No. {COMPANY.crn} &middot; {COMPANY.address.split(",").slice(-2).join(",").trim()}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTOR HIGHLIGHTS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Curated Showcase</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-gold sm:text-4xl">
              Sectors We Support
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A preview of the diversified product ecosystems we manage and scale through our
              digital distribution network.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SECTOR_CARDS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <Link
                  to="/expertise"
                  className="group relative block h-80 overflow-hidden rounded-lg border border-border transition-colors duration-300 hover:border-crimson-bright"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                      {s.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={SECTOR_CARDS.length * 90}>
              <Link
                to="/expertise"
                className="hover-luxe flex h-80 flex-col items-start justify-between rounded-lg border border-border-gold bg-surface p-6"
              >
                <p className="eyebrow">All Categories</p>
                <div>
                  <p className="font-display text-2xl font-extrabold text-gold">
                    View All 25 Sectors
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    From beauty and grocery to electronics and hardware, one professional standard across every category we distribute.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-crimson-bright">
                    Explore the full expertise portfolio <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. ONBOARDING WORKFLOW */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow">Supply Partner Onboarding</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-gold sm:text-4xl">
              A Discreet, Three-Step Corporate Onboarding Path.
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-6 right-6 top-8 hidden h-px md:block">
              <div className="divider-gold h-full w-full" />
            </div>
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 120}>
                <div className="hover-luxe relative h-full rounded-lg border border-border bg-background p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-gold bg-surface font-display text-xl font-extrabold text-gold">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="relative bg-surface py-20 lg:py-28">
        <div aria-hidden="true" className="metallic-divider absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ color: "#FFFFFF" }}>
              Protect Your Brand. Scale Your Digital Footprint.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#C5A059" }}>
              Partner with REZ INTERNATIONAL LTD, an officially registered UK marketplace distribution expert. Let us discuss a secure, high volume bulk supply contract today.
            </p>

            <div className="mt-10 flex justify-center">
              <Link to="/partner" className="btn-crimson animate-gold-pulse px-8 py-4 text-base">
                Apply for Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Strictly B2B. Supply Chain Partnerships Only. UK Company No. {COMPANY.crn}.
            </p>

          </Reveal>
        </div>
      </section>
    </>
  );
}
