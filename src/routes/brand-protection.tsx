import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, ShieldCheck, Search, PackageCheck, Warehouse, Truck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import heroImg from "@/assets/brand-supply-chain.jpg";

export const Route = createFileRoute("/brand-protection")({
  head: () => ({
    meta: [
      { title: "Brand Protection & Supply Chain — REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Strict MAP compliance, brand value protection, and advanced supply chain infrastructure for global brands and manufacturers partnering with REZ INTERNATIONAL.",
      },
      { property: "og:title", content: "Brand Protection & Supply Chain — REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "Strict MAP compliance and advanced supply chain infrastructure for global brands and manufacturers.",
      },
    ],
  }),
  component: BrandProtectionSupplyChainPage,
});

const CAPABILITIES = [
  {
    icon: PackageCheck,
    title: "Advanced Prep & Quality Control",
    text: "Every inbound shipment undergoes a rigorous inspection protocol. We verify batch numbers, audit packaging integrity, and apply specialized barcode labeling that adheres strictly to complex digital marketplace compliance standards.",
  },
  {
    icon: Warehouse,
    title: "High-Volume Bulk Storage",
    text: "Our logistics footprint is fully optimised to receive, cross-dock, and store high-capacity inventory, from single pallets to high-volume wholesale inventory and full pallet distributions.",
  },
  {
    icon: Truck,
    title: "Rapid Fulfillment-Ready Routing",
    text: "Located strategically in the United Kingdom, our network is optimized for hyper-efficient freight handling, ensuring that bulk inventory is processed, verified, and routed into distribution channels without operational lag.",
  },
] as const;

function BrandProtectionSupplyChainPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Premium digital distribution warehouse with automated scanning and organised retail inventory"
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
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
              We do not simply move inventory; we protect your market ecosystem. By combining strict
              price policy enforcement with an advanced, compliant supply chain network, REZ
              INTERNATIONAL LTD ensures your products are handled with the highest corporate standards
              from factory to marketplace.
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
                  Uncontrolled online pricing destroys retail networks and degrades brand perception.
                  REZ INTERNATIONAL LTD operates under strict internal mandates to honour and enforce
                  your Minimum Advertised Price (MAP) policies. We do not participate in destructive
                  price wars. Instead, we use advanced monitoring software to ensure your listings
                  remain completely clean, stable, and perfectly aligned with your global corporate
                  strategy.
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
              A professionally engineered network designed to receive, verify, store, and route bulk
              inventory with absolute compliance and speed.
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
                  Experience a distribution partnership built on transparency, capital investment,
                  and absolute brand protection.
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
