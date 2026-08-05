import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site";
import meetingHero from "@/assets/meeting-boardroom.jpg";

const TITLE = "Book a Meeting | REZ INTERNATIONAL";
const DESCRIPTION =
  "Schedule a confidential 30 minute corporate consultation with the REZ INTERNATIONAL LTD partnerships team to discuss bulk wholesale supply, MAP compliance and marketplace distribution.";

export const Route = createFileRoute("/book-a-meeting")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookMeetingPage,
});

const POINTS = [
  { icon: Clock, title: "30 Minute Session", text: "A focused corporate call scheduled directly in your own time zone." },
  { icon: Users, title: "Senior Partnerships Team", text: "Speak with the team responsible for supply agreements and onboarding." },
  { icon: ShieldCheck, title: "Strictly Confidential", text: "Catalogue, pricing and distribution guidelines are treated in confidence." },
  { icon: CalendarCheck, title: "Immediate Confirmation", text: "Your invitation and calendar hold are issued the moment you book." },
] as const;

function BookMeetingPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Scheduling"
        title="Book a Meeting With REZ INTERNATIONAL LTD"
        description="Arrange a confidential discussion around bulk wholesale supply, brand protection and marketplace distribution. Reach our partnerships team directly through the contact channels below."
        image={meetingHero}
        imageAlt="Luxury executive corporate boardroom conference suite at night with champagne gold accent lighting"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="hover-luxe h-full rounded-lg border border-border bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-gold">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h2 className="mt-6 font-display text-lg font-bold text-foreground">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 rounded-lg border border-border-gold bg-card p-8 text-center sm:p-12">
              <h2 className="font-display text-2xl font-extrabold text-gold sm:text-3xl">
                Request a Consultation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Reserve a confidential thirty minute slot with the partnerships team, or reach us directly through the contact desk.
              </p>
              <div className="mt-8">
                <BookingModal />
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:opacity-80">
                  Contact Our Partnerships Team
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Strictly B2B. Supply chain partnerships only. UK Company No. {COMPANY.crn}.
          </p>
        </div>
      </section>
    </>
  );
}
