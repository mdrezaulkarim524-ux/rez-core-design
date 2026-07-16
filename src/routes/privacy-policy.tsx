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

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy, UK GDPR & Data Protection Act 2018 | REZ INTERNATIONAL LTD" },
      {
        name: "description",
        content:
          "Corporate privacy policy for REZ INTERNATIONAL LTD (CRN: 17320050). UK GDPR and Data Protection Act 2018 aligned. Strictly B2B data handling, with no consumer tracking and no data resale.",
      },
      { property: "og:title", content: "Privacy Policy | REZ INTERNATIONAL LTD" },
      {
        property: "og:description",
        content:
          "UK GDPR compliant corporate privacy policy governing B2B enquiry and procurement data at REZ INTERNATIONAL LTD.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal, Statutory Compliance"
        title="Privacy Policy"
        description="This policy governs how REZ INTERNATIONAL LTD collects, processes, retains and protects corporate representative data in strict alignment with the United Kingdom GDPR and the Data Protection Act 2018."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-lg border border-border-gold bg-surface">
            <PrivacyWatermark />
            <div className="relative space-y-10 px-6 py-14 sm:px-10 lg:py-20">
              <p className="text-sm uppercase tracking-[0.18em] text-gold">
                Effective under UK GDPR &amp; Data Protection Act 2018
              </p>

              <Accordion type="single" collapsible className="w-full">
                <LegalItem value="s1" title="1. Information We Collect">
                  <p>
                    REZ INTERNATIONAL LTD operates strictly as a business-to-business corporate portal.
                    We collect and process only the professional data submitted to us through official
                    enquiry channels, partnership submissions and documented commercial correspondence.
                    The categories of information we may collect include:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Registered corporate names, country of incorporation, company registration numbers and jurisdictional identifiers of prospective supply partners.</li>
                    <li>Corporate representative contact information, including full name, official job title, corporate email address, direct telephone lines and secure messaging identifiers.</li>
                    <li>Distribution intelligence voluntarily submitted for procurement review, such as product catalogue links, MAP restrictions, minimum supply capacity bands and authorised territorial guidelines.</li>
                    <li>Non-personal website usage telemetry (aggregated page-visit signals, device class, referring source) used solely to preserve the security and performance of this corporate web application.</li>
                  </ul>
                  <p className="mt-4">
                    This website is not directed to consumers and we do not knowingly collect any data from private individuals acting outside a corporate capacity.
                  </p>
                </LegalItem>

                <LegalItem value="s2" title="2. How We Use Your Data">
                  <p>
                    Corporate data submitted to REZ INTERNATIONAL LTD is processed exclusively for the following legitimate business purposes:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Procurement evaluation and supplier portfolio vetting.</li>
                    <li>Corporate onboarding, MAP compliance verification and authorised distribution due diligence.</li>
                    <li>Direct communication regarding partnership proposals, logistics coordination and strategic supply chain dialogue.</li>
                    <li>Statutory record keeping required under United Kingdom commercial, tax and anti money laundering legislation.</li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    REZ INTERNATIONAL LTD does not sell, rent, syndicate or distribute business enquiry data to third parties. No B2B data is used for retail tracking, consumer profiling, behavioural advertising or any direct to consumer marketing activity.
                  </p>
                </LegalItem>

                <LegalItem value="s3" title="3. Data Retention & Protection">
                  <p>
                    All corporate enquiry data is stored on secure, encrypted infrastructure that meets recognised United Kingdom commercial data security standards. Access is restricted to vetted personnel under strict internal confidentiality protocols.
                  </p>
                  <p className="mt-4">
                    Data is retained only for the period necessary to fulfil the procurement dialogue for which it was submitted, or as required by applicable UK statutory obligations. Beyond that period, records are securely destroyed or irreversibly anonymised.
                  </p>
                </LegalItem>

                <LegalItem value="s4" title="4. Legal Rights (UK GDPR)">
                  <p>
                    Corporate representatives whose personal data is processed by REZ INTERNATIONAL LTD are entitled to the following statutory rights under the UK GDPR:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>The right of access to personal data held about you.</li>
                    <li>The right to rectification of inaccurate or incomplete data.</li>
                    <li>The right of erasure (the &ldquo;right to be forgotten&rdquo;).</li>
                    <li>The right to restrict or object to processing.</li>
                    <li>The right to data portability where technically feasible.</li>
                    <li>The right to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) in the United Kingdom.</li>
                  </ul>
                  <p className="mt-4">
                    To exercise any of these rights, contact our compliance desk at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="font-semibold text-gold hover:text-crimson-bright">
                      {COMPANY.email}
                    </a>
                    . Verified requests are actioned within the statutory response window.
                  </p>
                </LegalItem>

                <LegalItem value="s5" title="5. Corporate Identity Anchor">
                  <p>The data controller responsible for processing personal data under this policy is:</p>
                  <div className="mt-5 rounded-lg border border-border-gold bg-background p-6 text-sm leading-relaxed text-foreground">
                    <p className="font-display text-base font-bold text-white break-words">{COMPANY.name}</p>
                    <p className="mt-2">Company Registration Number (CRN): {COMPANY.crn}</p>
                    <p>Registered Office: {COMPANY.address}</p>
                    <p>
                      Compliance Contact:{" "}
                      <a href={`mailto:${COMPANY.email}`} className="text-gold hover:text-crimson-bright">
                        {COMPANY.email}
                      </a>
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Registered in England and Wales</p>
                  </div>
                </LegalItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalItem({ value, title, children }: { value: string; title: string; children: ReactNode }) {
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


function PrivacyWatermark() {
  return (
    <svg
      className="animate-watermark-pulse pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
      aria-hidden="true"
    >
      <defs>
        <pattern id="privacy-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 H80 M40 0 V80" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="40" cy="40" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <g stroke="currentColor" fill="none">
        <rect width="800" height="600" fill="url(#privacy-grid)" />
        <g transform="translate(400, 300)">
          <path
            d="M-70,-40 C-70,-85 70,-85 70,-40 L70,30 C70,80 0,110 0,110 C0,110 -70,80 -70,30 Z"
            strokeWidth="1.5"
          />
          <path
            d="M-18,-25 V-45 A18 18 0 0 1 18 -45 V-25"
            strokeWidth="2"
          />
          <rect x="-22" y="-25" width="44" height="38" rx="3" strokeWidth="2" />
          <circle cx="0" cy="-6" r="5" strokeWidth="1.5" />
          <path d="M0,-1 V5" strokeWidth="1.5" />
          <path d="M-90,-80 L-60,-50 M90,-80 L60,-50 M-90,80 L-60,50 M90,80 L60,50" strokeWidth="0.75" />
          <circle cx="-90" cy="-80" r="2" fill="currentColor" />
          <circle cx="90" cy="-80" r="2" fill="currentColor" />
          <circle cx="-90" cy="80" r="2" fill="currentColor" />
          <circle cx="90" cy="80" r="2" fill="currentColor" />
          <path d="M-120,-100 H-40 M120,-100 H40 M-120,100 H-40 M120,100 H40" strokeWidth="0.5" />
          <path d="M-150,0 H-95 M150,0 H95 M0,-150 V-95 M0,150 V95" strokeWidth="0.5" />
          <circle cx="-150" cy="0" r="2.5" fill="currentColor" />
          <circle cx="150" cy="0" r="2.5" fill="currentColor" />
          <circle cx="0" cy="-150" r="2.5" fill="currentColor" />
          <circle cx="0" cy="150" r="2.5" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

