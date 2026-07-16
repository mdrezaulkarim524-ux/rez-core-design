import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, SECTORS } from "@/lib/site";
import logoAsset from "@/assets/rez-logo.png.asset.json";


export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="relative border-b border-border backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.145 0.003 285 / 0.88) 0%, oklch(0.145 0.003 285 / 0.9) 80%, oklch(0.49 0.17 26 / 0.06) 100%)",
          boxShadow: "0 4px 30px rgba(139, 0, 0, 0.10)",
        }}
      >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:gap-12 lg:px-8" style={{ height: "4.5rem" }}>
        {/* Logo lockup — kept large and prominent */}
        <Link to="/" className="brand-lockup min-w-0 shrink-0">
          <img
            src={logoAsset.url}
            alt="REZ INTERNATIONAL emblem"
            width={44}
            height={44}
            className="brand-emblem h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.45))" }}
          />
          <span
            className="brand-serif whitespace-nowrap text-base sm:text-lg lg:text-xl"
            style={{ lineHeight: 1.05, letterSpacing: "0.14em" }}
          >
            REZ INTERNATIONAL
          </span>

        </Link>





        {/* Desktop nav — isolated flex row, rigidly single-line, small tight labels */}
        <nav
          className="site-nav-desktop hidden shrink-0 items-center whitespace-nowrap md:flex"
          style={{ flexDirection: "row", flexWrap: "nowrap", gap: "1.2rem", alignItems: "center" }}
        >
          {NAV_LINKS.map((link) =>
            "hasDropdown" in link && link.hasDropdown ? (
              <div key={link.to} className="group relative">
                <Link to={link.to} className="nav-link flex items-center gap-1 text-[0.68rem] font-medium text-foreground" style={{ letterSpacing: "0.08em" }}>
                  {link.label}
                  <ChevronDown className="h-3 w-3 text-gold transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* Mega dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-border-gold bg-popover p-6 shadow-lg" style={{ boxShadow: "var(--shadow-gold-glow)" }}>
                    <p className="eyebrow mb-4">25 Product Sectors We Distribute</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {SECTORS.slice(0, 10).map((sector) => (
                        <Link
                          key={sector}
                          to="/expertise"
                          className="text-sm text-muted-foreground transition-colors hover:text-crimson-bright"
                        >
                          {sector}
                        </Link>
                      ))}
                    </div>
                    <div className="divider-gold my-4" />
                    <Link to="/expertise" className="text-sm font-semibold text-gold hover:text-crimson-bright">
                      View all 25 sectors &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.to} to={link.to} className="nav-link text-[0.68rem] font-medium text-foreground" style={{ letterSpacing: "0.08em" }}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link to="/partner" className="btn-crimson hidden px-5 py-2.5 text-sm md:inline-flex">
            Partner With Us
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="site-hamburger flex h-11 w-11 items-center justify-center rounded-md border border-border text-gold md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Symmetric deep metallic divider — burnished dark gold ↔ velvet crimson with faint silver core */}
      <div aria-hidden="true" className="metallic-divider" />

      </div>


      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="animate-fade-in fixed inset-0 z-[70] flex flex-col bg-background md:hidden">
          <div className="brand-lockup items-center px-4 sm:px-6" style={{ height: "4.5rem" }}>
            <img src={logoAsset.url} alt="" width={36} height={36} className="brand-emblem h-9 w-9 object-contain" />
            <span className="brand-serif whitespace-nowrap text-sm" style={{ lineHeight: 1.05 }}>
              REZ INTERNATIONAL
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-md border border-border text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="divider-gold" />
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-4 font-display text-xl font-semibold text-foreground transition-colors hover:bg-accent hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/partner" className="btn-crimson mt-6 px-6 py-4 text-base">
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
