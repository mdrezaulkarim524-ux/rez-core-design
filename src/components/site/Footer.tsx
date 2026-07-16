import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/site";
import logoAsset from "@/assets/rez-logo.png.asset.json";


const SITE_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Expertise", to: "/expertise" },
  { label: "Brand Protection & Supply Chain", to: "/brand-protection" },
  { label: "Become a Supply Partner", to: "/partner" },
] as const;

export function Footer() {
  return (
    <footer className="bg-background">
      <div aria-hidden="true" className="metallic-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-x-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-x-14 lg:px-8">
        {/* Positioning */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="REZ INTERNATIONAL LTD emblem"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
              style={{ filter: "drop-shadow(0 2px 8px rgba(223,204,140,0.45))" }}
            />
            <span className="brand-serif whitespace-nowrap text-base sm:text-lg" style={{ lineHeight: 1.05 }}>
              REZ INTERNATIONAL LTD
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            REZ INTERNATIONAL LTD is a UK based digital wholesale business partner and omnichannel
            marketplace distribution specialist, connecting global brands, manufacturers and
            authorised suppliers with compliant marketplace growth.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Company Registration No. 17320050. Registered in England and Wales.
          </p>

        </div>

        {/* Site links */}
        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2.5">
            {SITE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-crimson-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow mb-4">Head Office</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-crimson-bright">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>

        {/* B2B statement */}
        <div>
          <p className="eyebrow mb-4">Partnerships</p>
          <div className="hover-luxe rounded-lg border border-border-gold bg-surface p-5">
            <p className="font-display text-sm font-bold text-foreground">
              Strictly B2B &amp; Supply Chain Partnerships Only
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              We do not sell to individual consumers. All enquiries are handled through our
              corporate onboarding process.
            </p>
            <Link to="/partner" className="btn-crimson mt-4 w-full px-4 py-2.5 text-sm">
              Start an Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row lg:px-8">
          <p>&copy; 2026 REZ INTERNATIONAL LTD. All rights reserved. Registered in England &amp; Wales. CRN: {COMPANY.crn}. UK GDPR Compliant.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
