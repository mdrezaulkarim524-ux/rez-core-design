import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  /** Optional photorealistic background image for the hero band. */
  image?: string;
  imageAlt?: string;
}

/** Shared inner-page hero band on the secondary surface background. */
export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* 20% dark obsidian tint + readability gradient */}
          <div className="absolute inset-0" style={{ background: "rgba(9, 10, 12, 0.2)" }} />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 10, 12, 0.85) 0%, rgba(9, 10, 12, 0.6) 100%)",
            }}
          />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold text-gold sm:text-5xl">
            {title}
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed">{description}</p>
        </Reveal>
      </div>
      <div className="divider-gold" />
    </section>
  );
}
