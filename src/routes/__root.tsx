import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { CookieBanner } from "@/components/site/CookieBanner";
import { Preloader } from "@/components/site/Preloader";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <p className="eyebrow text-crimson-bright">System Notice</p>
        <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight text-gold sm:text-6xl">
          404 <span className="text-muted-foreground">//</span> Route Interrupted
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          The requested corporate sub-layer or document does not exist within our public routing
          table. Please return to the main portal to continue navigating our infrastructure.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-crimson inline-flex px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em]">
            Return to Main Portal
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-crimson px-4 py-2 text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-gold-outline px-4 py-2 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Digital Wholesale Distribution Partner | REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Corporate portal of REZ INTERNATIONAL LTD (CRN: 17320050). B2B Procurement & Authorised Wholesale Distribution, subject to supplier approval and commercial agreements.",
      },
      { name: "author", content: "REZ INTERNATIONAL" },
      { property: "og:title", content: "Digital Wholesale Distribution Partner | REZ INTERNATIONAL" },
      {
        property: "og:description",
        content:
          "Corporate portal of REZ INTERNATIONAL LTD (CRN: 17320050). B2B Procurement & Authorised Wholesale Distribution, subject to supplier approval and commercial agreements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Digital Wholesale Distribution Partner | REZ INTERNATIONAL" },
      { name: "twitter:description", content: "Corporate portal of REZ INTERNATIONAL LTD (CRN: 17320050). B2B Procurement & Authorised Wholesale Distribution, subject to supplier approval and commercial agreements." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/86c188f8-3a66-4d46-b811-afe1131e3d9a/id-preview-86f70913--06c73bfc-58ee-4395-b84f-0c3cc94ffad0.lovable.app-1783865531322.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/86c188f8-3a66-4d46-b811-afe1131e3d9a/id-preview-86f70913--06c73bfc-58ee-4395-b84f-0c3cc94ffad0.lovable.app-1783865531322.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@600;700;800&family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Header />
      <main className="relative min-h-screen" style={{ paddingTop: "107px" }}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}
