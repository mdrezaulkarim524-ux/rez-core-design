import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, X, ShieldCheck, Clock3, FileCheck2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, SECTORS } from "@/lib/site";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Initiate B2B Supply Partnership & Vetting | REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Initiate a B2B supply partnership with REZ INTERNATIONAL (CRN: 17320050). Submit your corporate portfolio for procurement vetting, MAP alignment and marketplace distribution onboarding.",
      },
      { property: "og:title", content: "Initiate B2B Supply Partnership & Vetting | REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "Corporate portfolio submission and supplier vetting pathway for global brands and manufacturers.",
      },
    ],
  }),
  component: PartnerPage,
});

const CAPACITIES = ["Under £10,000", "£10,000 – £50,000", "£50,000 – £100,000", "£100,000+"] as const;

const ASSURANCES = [
  { icon: ShieldCheck, title: "Confidential Review", body: "All submitted portfolios are evaluated under strict corporate NDA protocols." },
  { icon: Clock3, title: "2 Business Day SLA", body: "Our procurement team responds to qualified submissions within 48 hours." },
  { icon: FileCheck2, title: "Compliance Vetted", body: "MAP, authenticity, and jurisdictional alignment reviewed before onboarding." },
] as const;

function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSubmitted(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [submitted]);

  const inputCls =
    "w-full rounded-md border border-input bg-background px-3.5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-crimson-bright focus:ring-1 focus:ring-crimson-bright/40";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow="Become a Supply Partner"
        title="Initiate a Strategic Supply Partnership"
        description="Submit your corporate portfolio and distribution guidelines. Our procurement team will review your asset structures, minimum capital requirements, and inventory volume availability within 2 business days."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:px-8">
          {/* Assurances column */}
          <Reveal>
            <p className="eyebrow">Procurement Assurances</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-gold">
              A vetted onboarding pathway for global suppliers
            </h2>
            <p className="mt-4 text-muted-foreground">
              REZ INTERNATIONAL operates a structured procurement pipeline. Only manufacturers,
              brand owners and authorised distributors are shortlisted for commercial evaluation.
            </p>

            <ul className="mt-10 space-y-6">
              {ASSURANCES.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border-gold bg-surface">
                    <a.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">
              Prefer a direct channel? Email our procurement desk at{" "}
              <a href={`mailto:${COMPANY.email}?subject=Partnership%20Enquiry`} className="font-semibold text-gold hover:text-crimson-bright">
                {COMPANY.email}
              </a>
              .
            </div>
          </Reveal>

          {/* Corporate B2B Form */}
          <Reveal delay={120}>
            <div className="hover-luxe rounded-lg border border-border-gold bg-surface p-6 sm:p-9">
              <div className="mb-7 flex items-center justify-between border-b border-border-gold/40 pb-5">
                <div>
                  <p className="eyebrow">Corporate Portfolio Submission</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                    Supplier Vetting Form
                  </h3>
                </div>
                <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:inline">
                  B2B Only
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelCls}>Full Name of Corporate Representative</span>
                    <input required maxLength={120} className={inputCls} placeholder="e.g. Jonathan A. Whitmore" />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Official Corporate Email Address</span>
                    <input required type="email" maxLength={200} className={inputCls} placeholder="name@brand.com" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelCls}>Direct Contact Phone & Extension</span>
                    <input required maxLength={40} className={inputCls} placeholder="+44 20 7946 0000 ext. 210" />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Registered Company Name & Country of Origin</span>
                    <input required maxLength={160} className={inputCls} placeholder="Brand Manufacturing GmbH — Germany" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelCls}>Primary Product Sector</span>
                    <select required defaultValue="" className={inputCls}>
                      <option value="" disabled>Select sector…</option>
                      {SECTORS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={labelCls}>Estimated Monthly Bulk Supply Capacity</span>
                    <select required defaultValue="" className={inputCls}>
                      <option value="" disabled>Select capacity band…</option>
                      {CAPACITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className={labelCls}>Digital Catalog / Website Portfolio Link</span>
                  <input required type="url" maxLength={300} className={inputCls} placeholder="https://www.yourbrand.com/wholesale" />
                </label>

                <label className="block">
                  <span className={labelCls}>Message / Special Distribution Guidelines or MAP Restrictions</span>
                  <textarea
                    required
                    rows={5}
                    maxLength={2000}
                    className={inputCls}
                    placeholder="Outline your authorised distribution scope, MAP policy, territorial restrictions and any minimum order structures…"
                  />
                </label>

                <button type="submit" className="btn-crimson w-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]">
                  Submit Portfolio for Procurement Review
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form you confirm this is a corporate B2B enquiry. Data is
                  processed strictly under UK GDPR and our confidential procurement protocol.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSubmitted(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg rounded-lg border border-border-gold bg-surface p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-crimson/15" aria-hidden="true" />
              <CheckCircle2 className="relative h-12 w-12 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-extrabold text-gold">
              Corporate Portfolio Transmitted Successfully.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for initiating a strategic dialogue with REZ INTERNATIONAL. Your catalog
              links, procurement capital variables, and market guidelines have been securely indexed
              into our supplier vetting system. An officer from our UK Procurement Division will
              contact your representative within 48 business hours.
            </p>
            <a
              href="/brand-protection"
              onClick={() => setSubmitted(false)}
              className="btn-crimson-outline mt-8 inline-flex w-full items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Review Our Infrastructure
            </a>
          </div>
        </div>
      )}
    </>
  );
}
