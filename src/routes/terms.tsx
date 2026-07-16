import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions, Corporate Distribution Framework | REZ INTERNATIONAL LTD" },
      {
        name: "description",
        content:
          "Corporate terms and conditions for REZ INTERNATIONAL LTD (CRN: 17320050). Digital wholesale distribution framework governed under the exclusive jurisdiction of England and Wales.",
      },
      { property: "og:title", content: "Terms & Conditions | REZ INTERNATIONAL LTD" },
      {
        property: "og:description",
        content:
          "Corporate distribution framework and legal terms governing the REZ INTERNATIONAL LTD B2B web application.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

/** Body-context legal name: gold on white/muted body text (Rule B). */
function LegalName() {
  return (
    <span className="font-semibold text-gold break-words" style={{ color: "#DFCC8C" }}>
      REZ INTERNATIONAL LTD
    </span>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal, Corporate Framework"
        title="Terms &amp; Conditions"
        description={
          <>
            These terms govern access to and use of this corporate web application operated by{" "}
            <LegalName />. The platform is an informational B2B portfolio and procurement channel,
            operating strictly outside of retail storefront capacities.
          </>
        }
      />

      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        {/* Ultra-low visibility legal shield / compliance lock watermark */}
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
            strokeWidth="1.2"
          >
            {/* Large central legal shield */}
            <g transform="translate(720 450)">
              <path
                d="M0,-220 L180,-160 L180,20 C180,140 100,210 0,240 C-100,210 -180,140 -180,20 L-180,-160 Z"
                strokeWidth="1.5"
              />
              <path d="M0,-170 L130,-124 L130,10 C130,105 70,160 0,185 C-70,160 -130,105 -130,10 L-130,-124 Z" />
              {/* Compliance lock inside shield */}
              <rect x="-46" y="-10" width="92" height="80" rx="6" />
              <path d="M-30,-10 L-30,-40 A30,30 0 0 1 30,-40 L30,-10" />
              <circle cx="0" cy="28" r="8" fill="#DFCC8C" stroke="none" />
              <line x1="0" y1="28" x2="0" y2="52" strokeWidth="2" />
            </g>

            {/* Corner satellite shields */}
            {[
              [200, 200],
              [1240, 200],
              [200, 720],
              [1240, 720],
            ].map(([cx, cy], i) => (
              <g key={`c-${i}`} transform={`translate(${cx} ${cy})`}>
                <path d="M0,-70 L58,-50 L58,10 C58,50 30,72 0,80 C-30,72 -58,50 -58,10 L-58,-50 Z" />
                <rect x="-16" y="-4" width="32" height="26" rx="3" />
                <path d="M-10,-4 L-10,-16 A10,10 0 0 1 10,-16 L10,-4" />
              </g>
            ))}

            {/* Faint framing rule lines */}
            <line x1="0" y1="120" x2="1440" y2="120" />
            <line x1="0" y1="780" x2="1440" y2="780" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Accordion type="single" collapsible className="w-full">
            <TermsItem value="t1" title="1. Nature of Business">
              <p>
                <LegalName /> (CRN {COMPANY.crn}), registered at {COMPANY.address}, operates as a
                digital wholesale marketplace distribution partner and strategic procurement asset
                for global brands, manufacturers and authorised suppliers.
              </p>
              <p className="mt-4">
                This web application functions exclusively as a corporate portfolio and
                informational hub. It presents our commercial capabilities, supply chain
                infrastructure and partnership onboarding pathways to qualified business
                counterparties.
              </p>
            </TermsItem>

            <TermsItem value="t2" title="2. No Retail Offerings">
              <p>
                No direct-to-consumer sales, retail listings, price points, checkout mechanisms or
                commercial transactions are offered or processed on this website. All information
                published is corporate in nature and intended for verified business audiences only.
              </p>
              <p className="mt-4">
                Enquiries received through this website constitute a request for business dialogue
                and do not create any binding commercial obligation. Formal supply terms are
                established only through separate written agreements executed by authorised
                signatories of <LegalName />.
              </p>
            </TermsItem>

            <TermsItem value="t3" title="3. Intellectual Property">
              <p>
                All content, imagery frameworks, corporate identity elements, editorial copy, layout
                systems, iconography and marketing materials appearing on this website are the
                exclusive intellectual property of <LegalName /> or its licensors.
              </p>
              <p className="mt-4">
                Reproduction, redistribution, commercial reuse, scraping or derivative training of
                any element of this corporate portal without prior written authorisation from{" "}
                <LegalName /> is strictly prohibited.
              </p>
            </TermsItem>

            <TermsItem value="t4" title="4. Governing Law">
              <p>
                These terms, and any dispute or claim arising out of or in connection with them or
                their subject matter, are governed by and construed in accordance with the laws of
                England and Wales.
              </p>
              <p className="mt-4">
                The parties irrevocably submit to the exclusive jurisdiction of the courts of
                England and Wales in respect of any such dispute or claim.
              </p>
            </TermsItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

function TermsItem({ value, title, children }: { value: string; title: string; children: ReactNode }) {
  return (
    <AccordionItem value={value} className="border-b border-border-gold/30">
      <AccordionTrigger className="py-5 text-left font-display text-lg font-extrabold uppercase tracking-[0.14em] text-gold hover:no-underline sm:text-xl">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pt-2 pb-6 text-base leading-relaxed text-muted-foreground">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

