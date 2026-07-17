import { useEffect, useRef, useState } from "react";
const logo = "/rez-logo.png";

/**
 * Interactive 4D welcome splash:
 *  - Deep matte-black canvas with parallax particle field driven by
 *    pointer / device-tilt input.
 *  - Uploaded transparent corporate emblem, precisely centered, 3D breathing.
 *  - Metallic-gold main title + chrome-white sub anchor tagline.
 *  - Holds for 3s, then fades (opacity 0, scale 1.02, 1s ease-in-out).
 */
export function Preloader() {
  const [stage, setStage] = useState<"intro" | "fade" | "done">("intro");
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("fade"), 1400);
    const t2 = setTimeout(() => setStage("done"), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);


  // Parallax handler — mouse on desktop, device tilt on mobile
  useEffect(() => {
    if (stage !== "intro") return;
    const el = layerRef.current;
    if (!el) return;

    const apply = (nx: number, ny: number) => {
      // nx, ny in range roughly -1 .. 1
      el.style.setProperty("--px", String(nx));
      el.style.setProperty("--py", String(ny));
    };

    const onMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      apply(nx, ny);
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const nx = (t.clientX / window.innerWidth) * 2 - 1;
      const ny = (t.clientY / window.innerHeight) * 2 - 1;
      apply(nx, ny);
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      const nx = Math.max(-1, Math.min(1, (e.gamma ?? 0) / 30));
      const ny = Math.max(-1, Math.min(1, (e.beta ?? 0) / 45));
      apply(nx, ny);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, [stage]);

  // Lock body scroll while splash is visible
  useEffect(() => {
    if (stage === "done") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  if (stage === "done") return null;

  const fading = stage === "fade";

  // Deterministic particle field
  const particles = Array.from({ length: 46 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rx = (seed % 100) / 100;
    const ry = ((seed * 7) % 100) / 100;
    const depth = 0.3 + ((i * 13) % 100) / 140; // 0.3 .. ~1.0
    const size = 1 + ((i * 5) % 4);
    const gold = i % 4 === 0;
    return { rx, ry, depth, size, gold, i };
  });

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#08080A",
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(1.02)" : "scale(1)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      {/* Full-viewport deep ambient glow — muted gold/crimson/white cycling across the entire canvas */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          animation: "preloaderAmbientFull 6s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />


      {/* Parallax particle layer */}
      <div
        ref={layerRef}
        className="pointer-events-none absolute inset-0"
        style={{
          // @ts-expect-error CSS vars
          "--px": 0,
          "--py": 0,
          transition: "transform 0.2s ease-out",
        }}
      >
        {particles.map((p) => (
          <span
            key={p.i}
            className="absolute rounded-full"
            style={{
              left: `${p.rx * 100}%`,
              top: `${p.ry * 100}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.gold ? "rgba(212,175,55,0.85)" : "rgba(255,255,255,0.55)",
              boxShadow: p.gold
                ? "0 0 8px rgba(212,175,55,0.7)"
                : "0 0 6px rgba(255,255,255,0.4)",
              transform: `translate3d(calc(var(--px) * ${p.depth * 40}px), calc(var(--py) * ${p.depth * 40}px), 0)`,
              transition: "transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
              opacity: 0.35 + p.depth * 0.5,
            }}
          />
        ))}

        {/* Faint geometry rings — parallax deeper */}
        <div
          className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          style={{
            transform:
              "translate3d(calc(var(--px) * -18px), calc(var(--py) * -18px), 0) translate(-50%, -50%)",
            transition: "transform 0.4s ease-out",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(212,175,55,0.08)]"
          style={{
            transform:
              "translate3d(calc(var(--px) * -32px), calc(var(--py) * -32px), 0) translate(-50%, -50%)",
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      {/* Foreground content */}
      <div
        className="relative flex flex-col items-center gap-6 px-6 text-center"
        style={{
          perspective: "1400px",
          transform:
            "translate3d(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 10px), 0)",
          transition: "transform 0.4s ease-out",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform:
              "rotateY(calc(var(--px, 0) * 12deg)) rotateX(calc(var(--py, 0) * -8deg))",
            transition: "transform 0.4s ease-out",
          }}
        >
          <img
  src={logo}
  alt="REZ INTERNATIONAL"
  width={260}
  height={260}
  loading="eager"
  decoding="sync"
  draggable={false}
  className="animate-logo-3d h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 select-none"
  style={{
    objectFit: "contain",
    display: "block",
  }}
/>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span
            className="animate-welcome-rise font-display text-[0.65rem] font-semibold uppercase tracking-[0.42em] sm:text-xs"
            style={{ color: "rgba(255,255,255,0.6)", animationDelay: "0.15s" }}
          >
            Welcome to
          </span>
          <h1
            className="brand-serif animate-welcome-rise text-3xl sm:text-4xl md:text-5xl"
            style={{
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              animationDelay: "0.3s",
            }}
          >
            REZ INTERNATIONAL
          </h1>


          <div
            className="animate-welcome-rise h-px w-32 overflow-hidden"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="animate-preloader-line h-px w-full bg-gold" />
          </div>
          <p
            className="animate-welcome-rise max-w-[36ch] font-sans text-[0.78rem] font-medium leading-relaxed sm:max-w-md sm:text-sm md:text-base"
            style={{
              color: "rgba(240,240,245,0.82)",
              letterSpacing: "0.06em",
              animationDelay: "0.75s",
            }}
          >
            Your Trusted B2B Wholesale &amp; Digital Marketplace Distribution Partner
          </p>
        </div>
      </div>
    </div>
  );
}
