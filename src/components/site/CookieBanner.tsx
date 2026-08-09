import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

/** Increment when the Cookie Policy is materially updated to re-trigger consent. */
export const COOKIE_POLICY_VERSION = "1.0";

const CONSENT_KEY = "rez_cookie_consent";
const VERSION_KEY = "rez_cookie_policy_version";

/** Accessible UK GDPR cookie banner — essential cookies only, zero trackers. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_KEY) === "true";
    const version = localStorage.getItem(VERSION_KEY);
    if (!accepted || version !== COOKIE_POLICY_VERSION) setVisible(true);
  }, []);

  // Keyboard focus trap while the banner is open.
  useEffect(() => {
    if (!visible) return;
    const node = ref.current;
    if (!node) return;
    const focusables = node.querySelectorAll<HTMLElement>("a[href], button");
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    localStorage.setItem(VERSION_KEY, COOKIE_POLICY_VERSION);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie Consent"
      className="animate-fade-in fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-lg border border-border-gold bg-surface/95 p-5 shadow-lg backdrop-blur-md sm:inset-x-6"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        আমরা এই কর্পোরেট ওয়েবসাইট পরিচালনার জন্য প্রয়োজনীয় কুকিজ ব্যবহার করি। আমরা বর্তমানে
        অ্যানালিটিক্স বা বিজ্ঞাপন ট্র্যাকিং কুকিজ ব্যবহার করি না। কোনো নন-এসেনশিয়াল কুকিজ সম্মতি
        ছাড়া সেট করা হয় না। আরও তথ্যের জন্য আমাদের কুকি পলিসি পড়ুন।
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-3">
        <button onClick={accept} className="btn-crimson px-5 py-2 text-sm">
          Accept Essential Cookies
        </button>
        <Link
          to="/cookie-policy"
          target="_self"
          className="btn-gold-outline px-5 py-2 text-sm"
          onClick={() => setVisible(false)}
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
