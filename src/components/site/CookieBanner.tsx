import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "rez-cookie-consent";

/** Elegant UK GDPR cookie banner — essential cookies only. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="animate-fade-in fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-lg border border-border-gold bg-surface/95 p-5 shadow-lg backdrop-blur-md sm:inset-x-6">
      <p className="text-sm leading-relaxed text-muted-foreground">
        <span className="font-semibold text-gold">Cookie Notice.</span> REZ INTERNATIONAL LTD uses
        strictly essential cookies to ensure secure operation of this corporate website, in
        accordance with UK GDPR. See our{" "}
        <Link to="/privacy-policy" className="text-gold underline underline-offset-2 hover:text-crimson-bright">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex justify-end">
        <button onClick={accept} className="btn-crimson px-5 py-2 text-sm">
          Accept Essential Cookies
        </button>
      </div>
    </div>
  );
}
