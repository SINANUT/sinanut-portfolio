import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Sinan U T — Data Analyst & BI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammed Sinan U T — Data Analyst, Business Intelligence Analyst and Power BI Developer building dashboards, insights and BI solutions.",
      },
      { property: "og:title", content: "Muhammed Sinan U T — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Data Analyst crafting Power BI dashboards, Python analyses and BI solutions that drive better decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
