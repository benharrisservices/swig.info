import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Hospitality and event logistics · United Kingdom`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "hospitality logistics",
    "event logistics",
    "operational support",
    "equipment deployment",
    "temporary infrastructure",
    "venue operations",
    "national event deployment",
    "rapid response",
    "bar hire",
    "festival logistics",
    "event logistics London",
    "event logistics UK",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Hospitality and event logistics`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Hospitality and event logistics`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone.intl,
  email: site.email.hello,
  description: site.description,
  slogan: site.tagline,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Company Number",
    value: site.companyNumber,
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shoreditch",
    addressRegion: "London",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Hospitality logistics",
    "Event logistics",
    "Operational support",
    "Equipment deployment",
    "Temporary infrastructure",
    "Venue operations",
    "National event deployment",
    "Rapid response",
    "Bar hire",
    "Festival logistics",
  ],
  makesOffer: [
    "Hospitality logistics",
    "Event infrastructure",
    "Equipment deployment",
    "Bar infrastructure and hire",
    "Operational support",
    "Rapid response",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      areaServed: { "@type": "Country", name: "United Kingdom" },
    },
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "enquiries",
      telephone: site.phone.intl,
      email: site.email.hello,
      areaServed: "GB",
      availableLanguage: "English",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <noscript>
          <style>{`
            .veil{display:none!important}
            .reveal,.h-anim{opacity:1!important;transform:none!important}
            .datum{opacity:1!important}
          `}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
