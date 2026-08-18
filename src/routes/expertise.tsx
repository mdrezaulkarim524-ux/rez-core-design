import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import expertiseHero from "@/assets/expertise-hero.jpg";
import s01 from "@/assets/sectors/s03-kitchen.jpg";
import s02 from "@/assets/sectors/s06-baby.jpg";
import s03 from "@/assets/sectors/s02-health.jpg";
import s04 from "@/assets/sectors/s01-beauty.jpg";
import s05 from "@/assets/sectors/s08-pet.jpg";
import s06 from "@/assets/sectors/s11-sports.jpg";
import s07 from "@/assets/sectors/s10-garden.jpg";
import s08 from "@/assets/sectors/s07-toys.jpg";
import s09 from "@/assets/sectors/s23-sanitation.jpg";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Product Sectors | B2B Wholesale Procurement & Distribution" },
      {
        name: "description",
        content:
          "Core product sectors for structured wholesale procurement. REZ INTERNATIONAL LTD (CRN: 17320050) operates as a compliant wholesale buyer under UK law.",
      },
      { property: "og:title", content: "Product Sectors | B2B Wholesale Procurement & Distribution" },
      {
        property: "og:description",
        content: "Core product sectors covered by our structured wholesale procurement proposal.",
      },
    ],
  }),
  component: ExpertisePage,
});

const SECTORS: { title: string; description: string; image: string }[] = [
  { title: "Home & Kitchen", description: "Premium cookware, small kitchen appliances, and household organisation assets prepared to retail-ready standards.", image: s01 },
  { title: "Baby & Nursery", description: "Certified baby essentials, developmental goods, and premium nursery products aligned with UK safety standards.", image: s02 },
  { title: "Health & Personal Care", description: "Vitamins, supplements, and personal wellness goods sourced through authorised distribution channels.", image: s03 },
  { title: "Beauty & Cosmetics", description: "Prestige skincare, colour cosmetics, and grooming lines supplied under strict brand protection guidelines.", image: s04 },
  { title: "Pet Supplies", description: "Premium pet nutrition, wellness packaging, and companion care products for authorised retail channels.", image: s05 },
  { title: "Sports & Outdoors", description: "Advanced training equipment, athletic health gear, and high-performance outdoor recreation products.", image: s06 },
  { title: "Garden & DIY", description: "Seasonal outdoor assets, smart patio technology, and home improvement essentials for garden and living spaces.", image: s07 },
  { title: "Toys & Games", description: "High-grade hobby kits, premium educational assets, and refined collectible and play sets.", image: s08 },
  { title: "Household Essentials", description: "Professional-grade cleaning, sanitation, and everyday household maintenance solutions.", image: s09 },
];

function ExpertisePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0">
          <img
            src={expertiseHero}
            alt="Automated corporate fulfillment warehouse with premium branded retail packaging"
            width={1920}
            height={1080}
            className="animate-camera-pan h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow">Our Expertise</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-tight text-gold sm:text-5xl lg:text-6xl">
              Diversified Portfolio. Specialized Execution.
            </h1>
            <p className="hero-copy mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">
              Subject to supplier approval and commercial agreements, we seek to procure
              inventory through wholesale purchasing arrangements across core product
              sectors, supported by compliant fulfilment logistics partners.
            </p>
          </Reveal>
        </div>
        <div className="divider-gold" />
      </section>

      {/* 2. COMPLIANCE STATEMENT */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-lg border border-border-gold bg-surface p-8 sm:p-12">
              <span className="absolute left-0 top-0 h-full w-1 bg-gold" aria-hidden />
              <p className="eyebrow">Core Compliance Statement</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
                Where applicable,{" "}
                <span className="font-semibold text-gold">REZ INTERNATIONAL LTD</span>{" "}
                follows supplier requirements, MAP policies, and recognised marketplace
                standards to support responsible pricing practices and consistent product
                presentation, in line with UK statutory regulations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CORE SECTORS GRID */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="eyebrow">Core Sectors of Operational Capability</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Direct Bulk Wholesale Procurement Capacity. Fully Compliant.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.title} delay={(i % 3) * 60}>
                <article
                  className="hover-luxe group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-500 hover:border-crimson"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
                >
                  {/* Photorealistic sector imagery */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={sector.image}
                      alt={`${sector.title}. Premium B2B product category photography.`}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    {/* Elegant white hairline stroke matching logo identity */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)" }}
                      aria-hidden
                    />
                    {/* Sector index badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span
                        className="rounded-full border px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-md"
                        style={{
                          borderColor: "rgba(255,255,255,0.4)",
                          background: "rgba(10,10,12,0.55)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-gold">
                        Sector {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-border-gold" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
                      {sector.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {sector.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-gold sm:text-4xl lg:text-5xl">
              Do You Manufacture Within These Sectors?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If your brand operates within these sectors, we would welcome the opportunity to
              submit a structured procurement proposal as a compliant wholesale buyer and
              prospective retail partner, subject to supplier approval.
            </p>
            <div className="mt-10 flex justify-center">
              <Link to="/partner" className="btn-crimson px-8 py-4">
                Submit Product Portfolio for Review
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
