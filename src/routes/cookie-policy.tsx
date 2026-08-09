import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import privacyHero from "@/assets/privacy-hero-vault.jpg";
import { COMPANY } from "@/lib/site";

export const COOKIE_POLICY_LAST_UPDATED = "August 2026";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy, Website Compliance | REZ INTERNATIONAL LTD" },
      {
        name: "description",
        content:
          "Cookie Policy for REZ INTERNATIONAL LTD (CRN: 17320050). Strictly essential cookies only, no analytics, advertising pixels or behavioural tracking on this B2B corporate website.",
      },
      { property: "og:title", content: "Cookie Policy | REZ INTERNATIONAL LTD" },
      {
        property: "og:description",
        content:
          "How REZ INTERNATIONAL LTD uses cookies and similar technologies on its corporate procurement and partnership platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal, Website Compliance"
        title="Cookie Policy"
        image={privacyHero}
        imageAlt="Secure dark corporate data infrastructure interior"
        imageOpacity={0.35}
        description={
          <>
            This policy explains how REZ INTERNATIONAL LTD uses cookies and similar technologies on
            the {COMPANY.domain} corporate website. This website operates strictly as a
            business-to-business corporate procurement and partnership platform.
          </>
        }
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm text-muted-foreground">
            Last Updated: {COOKIE_POLICY_LAST_UPDATED}
          </p>

          <div className="mt-10 space-y-12">
            <section aria-labelledby="ck-1">
              <h2 id="ck-1" className="font-display text-2xl font-bold text-gold">
                1. What Are Cookies?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cookies are small text files saved on your device when you visit a website. They
                help the website function correctly, enhance security, remember preferences, and
                collect aggregated performance signals.
              </p>
            </section>

            <section aria-labelledby="ck-2">
              <h2 id="ck-2" className="font-display text-2xl font-bold text-gold">
                2. Cookies We Use
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Essential Cookies (Always Active):
                  </span>{" "}
                  Mandatory for secure site operation, navigation, and enquiry form submissions.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Analytics/Performance Cookies:
                  </span>{" "}
                  Currently, REZ INTERNATIONAL LTD does not use Google Analytics, advertising
                  pixels, or behavioural tracking cookies. No non-essential cookies are set without
                  explicit prior user consent.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Third-Party Infrastructure Services:
                  </span>{" "}
                  Hosted on secure cloud infrastructure and content delivery networks.
                  Infrastructure providers process limited technical information (such as
                  anonymised telemetry and IP signals) solely under strict contractual and security
                  obligations to ensure availability, security, and performance.
                </li>
              </ul>
            </section>

            <section aria-labelledby="ck-3">
              <h2 id="ck-3" className="font-display text-2xl font-bold text-gold">
                3. Managing Cookies
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You can view, delete, or block cookies through your browser settings. Blocking
                essential cookies may affect certain website functions.
              </p>
            </section>

            <section aria-labelledby="ck-4">
              <h2 id="ck-4" className="font-display text-2xl font-bold text-gold">
                4. International Data Processing
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Where technical infrastructure processes data outside the UK, REZ INTERNATIONAL LTD
                ensures appropriate technical and organizational safeguards in accordance with UK
                GDPR.
              </p>
            </section>

            <section aria-labelledby="ck-5">
              <h2 id="ck-5" className="font-display text-2xl font-bold text-gold">
                5. Policy Updates &amp; Contact
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This policy may be updated periodically to reflect statutory changes.
              </p>
              <div className="mt-5 rounded-lg border border-border-gold bg-surface p-6 text-sm leading-relaxed text-foreground">
                <p className="font-display text-base font-bold text-white">{COMPANY.name}</p>
                <p className="mt-2">CRN: {COMPANY.crn}</p>
                <p>Registered Office: {COMPANY.address}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    target="_self"
                    className="font-semibold text-gold underline underline-offset-2"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
