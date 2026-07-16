import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import expertiseHero from "@/assets/expertise-hero.jpg";
import s01 from "@/assets/sectors/s01-beauty.jpg";
import s02 from "@/assets/sectors/s02-health.jpg";
import s03 from "@/assets/sectors/s03-kitchen.jpg";
import s04 from "@/assets/sectors/s04-electronics.jpg";
import s05 from "@/assets/sectors/s05-office.jpg";
import s06 from "@/assets/sectors/s06-baby.jpg";
import s07 from "@/assets/sectors/s07-toys.jpg";
import s08 from "@/assets/sectors/s08-pet.jpg";
import s09 from "@/assets/sectors/s09-tools.jpg";
import s10 from "@/assets/sectors/s10-garden.jpg";
import s11 from "@/assets/sectors/s11-sports.jpg";
import s12 from "@/assets/sectors/s12-auto.jpg";
import s13 from "@/assets/sectors/s13-apparel.jpg";
import s14 from "@/assets/sectors/s14-gourmet.jpg";
import s15 from "@/assets/sectors/s15-lighting.jpg";
import s16 from "@/assets/sectors/s16-music.jpg";
import s17 from "@/assets/sectors/s17-art.jpg";
import s18 from "@/assets/sectors/s18-safety.jpg";
import s19 from "@/assets/sectors/s19-industrial.jpg";
import s20 from "@/assets/sectors/s20-luggage.jpg";
import s21 from "@/assets/sectors/s21-luxury.jpg";
import s22 from "@/assets/sectors/s22-outdoor.jpg";
import s23 from "@/assets/sectors/s23-sanitation.jpg";
import s24 from "@/assets/sectors/s24-electrical.jpg";
import s25 from "@/assets/sectors/s25-b2btech.jpg";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Specialized Product Sectors & Logistics Capability | REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "25 specialised product sectors and full-spectrum logistics capability. REZ INTERNATIONAL LTD (CRN: 17320050) executes bulk procurement and marketplace distribution under strict UK compliance.",
      },
      { property: "og:title", content: "Specialized Product Sectors & Logistics Capability | REZ INTERNATIONAL" },
      {
        property: "og:description",
        content: "25 specialised sectors executed under bulk procurement and MAP-compliant marketplace distribution.",
      },
    ],
  }),
  component: ExpertisePage,
});

const SECTORS: { title: string; description: string; image: string }[] = [
  { title: "Beauty & Personal Care", description: "Premium cosmetics, luxury skincare formulations, and advanced personal grooming apparatus.", image: s01 },
  { title: "Health, Wellness & Supplements", description: "Certified vitamins, pharmaceutical grade supplements, and wellness goods aligned with strict UK standards.", image: s02 },
  { title: "Home & Kitchen Infrastructure", description: "High end matte black cookware, premium small kitchen appliances, and culinary organization assets.", image: s03 },
  { title: "Consumer Electronics", description: "Modern smart speakers, luxury audio hardware, and advanced personal tech accessories.", image: s04 },
  { title: "Office & Workspace Supplies", description: "Premium ergonomic desktop tools, sleek corporate workspace organization, and executive stationery.", image: s05 },
  { title: "Baby & Infant Care", description: "Certified organic baby essentials, developmental goods, and premium high end nursery assets.", image: s06 },
  { title: "Toys & Collective Hobbies", description: "High grade structural hobby kits, premium educational assets, and refined collectible sets.", image: s07 },
  { title: "Pet Care & Premium Nutrition", description: "Luxury pet wellness packaging, specialized diet canisters, and premium companion goods.", image: s08 },
  { title: "Tools & Home Improvement", description: "Professional grade smart hardware, precision instruments, and high durability building equipment.", image: s09 },
  { title: "Garden & Outdoor Living", description: "High end seasonal outdoor assets, luxury smart patio tech, and premium ambient lighting.", image: s10 },
  { title: "Sports & High Performance Fitness", description: "Advanced training equipment, athletic health gear, and specialized recovery apparatus.", image: s11 },
  { title: "Automotive Care & Accessories", description: "Ultra premium detailing kits, smart vehicular electronics, and high grade maintenance essentials.", image: s12 },
  { title: "Apparel Accessories & Travel Gear", description: "Luxury travel hardware, secure commuter cases, and premium executive lifestyle accessories.", image: s13 },
  { title: "Gourmet Provisions & Dry Groceries", description: "Shelf stable premium organic goods, gourmet corporate gift sets, and artisanal provisions.", image: s14 },
  { title: "Smart Lighting & Home Automation", description: "High efficiency integrated lighting nodes, ambient LED arrays, and premium switch hardware.", image: s15 },
  { title: "Musical Instruments & Studio Gear", description: "High fidelity audio capture tools, premium studio microphones, and content creation hardware.", image: s16 },
  { title: "Art, Design & Premium Craft Supplies", description: "Professional grade artistic materials, premium design media, and luxury studio instruments.", image: s17 },
  { title: "Personal Safety & Security Hardware", description: "Smart biometric home locks, advanced residential monitoring nodes, and premium protection gear.", image: s18 },
  { title: "Industrial Equipment & Corporate Supplies", description: "Commercial logistical components, heavy duty secure storage, and facility infrastructure.", image: s19 },
  { title: "Luggage & High Capacity Travel Systems", description: "Premium hard shell cases, modular travel packs, and professional aluminium flight gear.", image: s20 },
  { title: "Timepieces & Premium Luxury Accents", description: "High end horology preservation gear, luxury desktop timepieces, and premium display cases.", image: s21 },
  { title: "Outdoor Recreation & Tactical Camping", description: "High durability exploration equipment, survival tech, and specialized multi tool arrays.", image: s22 },
  { title: "Commercial Cleaning & Sanitation Infrastructure", description: "Professional grade facility maintenance solutions and safe bulk sanitization arrays.", image: s23 },
  { title: "Electrical Systems & Energy Management", description: "Premium smart power distribution hardware, surge protection arrays, and backup cell systems.", image: s24 },
  { title: "B2B Technological Hardware & Peripherals", description: "Enterprise networking components, secure data drives, and rack mount corporate hardware.", image: s25 },
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
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
              We possess the capital infrastructure and advanced supply chain compliance
              frameworks to securely manage, audit, and distribute products across 25 core
              market sectors. Global brands trust our operational alignment to maintain
              steady bulk volume velocity.
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
                Every single product vertical managed by{" "}
                <span className="font-semibold text-gold">REZ INTERNATIONAL LTD</span>{" "}
                undergoes strict batch verification, quality assurance routing, and
                high-standard retail prep compliance according to UK statutory
                regulations and individual manufacturer guidelines.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. THE 25 SECTORS GRID */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="eyebrow">25 Sectors of Operational Capability</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Fully Capitalized. Fully Compliant.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.title} delay={(i % 4) * 60}>
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
                          background: "rgba(11,11,12,0.55)",
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
              If your brand fits within our operational capabilities and you are looking
              for a highly compliant, non-disruptive UK distribution partner that procures
              in high wholesale volumes. Please connect with our procurement team to initiate trade.
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
