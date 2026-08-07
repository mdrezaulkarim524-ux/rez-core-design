import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, ShieldCheck, Search, PackageCheck, Warehouse, Truck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import heroImg from "@/assets/brand-verification-facility.jpg";

export const Route = createFileRoute("/brand-protection")({
  head: () => ({
    meta: [
      { title: "Brand Protection & Supply Chain — REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Where applicable, REZ INTERNATIONAL LTD follows supplier requirements, MAP policies and recognised marketplace standards, working with compliant fulfilment logistics partners.",
      },
      { property: "og:title", content: "Brand Protection & Supply Chain — REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "Supplier requirements, MAP policies and compliant fulfilment logistics partners.",
      },
    ],
  }),
  component: BrandProtectionSupplyChainPage,
});

const CAPABILITIES = [
  {
    icon: PackageCheck,
    title: "Advanced Prep & Quality Control",
    text: "We work with compliant fulfilment logistics partners to support inventory receiving, inspection and marketplace-ready order preparation.",
  },
  {
    icon: Warehouse,
    title: "High-Volume Bulk Storage",
    text: "Storage is arranged through compliant third party logistics partners, scaled from single pallets to full pallet volumes as commercial agreements allow.",
  },
  {
    icon: Truck,
    title: "Rapid Fulfillment-Ready Routing",
    text: "Working from the United Kingdom, our fulfilment partners support freight handling so inventory can be processed, verified and routed into authorised retail sales channels.",
  },
] as const;

function BrandProtectionSupplyChainPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Secure automated brand verification facility with scanning gantries and sealed premium cartons"
          width={1920}
          height={1080}
          className="animate-camera-pan absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <Reveal>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold text-gold sm:text-5xl lg:text-6xl">
              Safeguarding Brand Equity. Optimizing Global Logistics.
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              Where applicable, we follow supplier requirements, MAP policies, and recognised
              marketplace standards to support responsible pricing practices and consistent product
              presentation. We work with compliant fulfilment logistics partners to support inventory
              receiving, inspection and marketplace-ready order preparation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Module A: Brand protection split */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="hover-luxe-crisp h-full rounded-lg border border-border bg-card p-8 lg:p-10">
                <Scale className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl font-bold text-gold">
                  Strict MAP Compliance & Price Stabilisation
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Where applicable, REZ INTERNATIONAL LTD follows supplier requirements, MAP
                  policies, and recognised marketplace standards to support responsible pricing
                  practices and consistent product presentation. Pricing conduct is governed by the
                  terms set out in each supplier agreement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hover-luxe-crisp h-full rounded-lg border border-border bg-card p-8 lg:p-10">
                <ShieldCheck className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-2xl font-bold text-gold">
                  Eradicating Unauthorised Intermediaries
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We help brands clean up fragmented digital marketplaces. When we commit upfront
                  capital to your product line, we work collaboratively to identify grey market
                  sellers, optimise authorised catalogue positioning, and ensure that only pristine,
                  verified assets represent your corporate name to the public.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Module B: Supply chain grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold text-gold">
              Supply Chain & Logistics Infrastructure
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground">
              We work with compliant fulfilment logistics partners to support inventory receiving,
              inspection and marketplace-ready order preparation.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="hover-luxe-crisp h-full rounded-lg border border-border bg-surface p-8">
                  <c.icon className="h-8 w-8 text-crimson-bright" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance bar */}
      <section className="border-t border-border-gold bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start justify-center gap-3">
              <Search className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <p className="max-w-4xl text-center text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">REZ INTERNATIONAL LTD</span> is a
                fully compliant commercial entity registered in England and Wales (CRN:{" "}
                {COMPANY.crn}). All warehouse workflows, staff protocols, and inventory asset tracking
                systems are fully aligned with strict UK commercial supply chain safety and insurance
                standards.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-surface frame-silver">
            <div className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
              <Reveal>
                <h2 className="text-center font-display text-3xl font-extrabold text-gold">
                  Secure Your Digital Supply Chain Today.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground">
                  A structured procurement proposal from a compliant wholesale buyer and prospective
                  retail partner, subject to supplier approval and commercial agreements.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link to="/partner" className="btn-crimson px-8 py-4">
                    Request Operational Review
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
