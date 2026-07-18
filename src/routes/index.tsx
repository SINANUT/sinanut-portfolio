import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import profileAsset from "@/assets/sinan-profile.png.asset.json";

const SITE_URL = "https://sinanut.lovable.app";
const OG_IMAGE = `${SITE_URL}${profileAsset.url}`;
const TITLE = "Muhammed Sinan U T | Data Analyst Portfolio";
const DESCRIPTION =
  "Explore my portfolio featuring Power BI dashboards, SQL projects, Python analytics, and business intelligence solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Muhammed Sinan U T — Data Analyst" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammed Sinan U T",
          jobTitle: "Data Analyst",
          url: SITE_URL,
          image: OG_IMAGE,
          email: "mailto:muhammedsinan.ullattil@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Malappuram",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/SINANUT",
            "https://www.linkedin.com/in/muhammed-sinan-ut/",
          ],
          knowsAbout: [
            "Data Analysis",
            "Business Intelligence",
            "Power BI",
            "SQL",
            "Python",
            "Data Visualization",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
