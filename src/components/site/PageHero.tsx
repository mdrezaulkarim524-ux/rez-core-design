import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}

/** Shared inner-page hero band on the secondary surface background. */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold text-gold sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      </div>
      <div className="divider-gold" />
    </section>
  );
}
