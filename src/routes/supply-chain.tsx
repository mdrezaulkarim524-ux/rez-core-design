import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/supply-chain")({
  head: () => ({
    meta: [
      { title: "Brand Protection & Supply Chain — REZ INTERNATIONAL" },
      {
        name: "description",
        content:
          "Strict MAP compliance, brand value protection, and advanced supply chain infrastructure for global brands and manufacturers.",
      },
    ],
  }),
  component: () => <Navigate to="/brand-protection" replace={true} />,
});
