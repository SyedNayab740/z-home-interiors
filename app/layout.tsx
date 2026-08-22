import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FloatingCall } from "@/components/ui/FloatingCall";
import {
  buildMetadata,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { defaultSEO } from "@/data/seo";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(defaultSEO),
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/images/z-home-interiors-favicon.png",
    shortcut: "/images/z-home-interiors-favicon.png",
    apple: "/images/z-home-interiors-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebSiteSchema();

  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <Providers>
          <main id="main-content">{children}</main>
        </Providers>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
        <BackToTop />
      </body>
    </html>
  );
}
