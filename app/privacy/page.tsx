import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/legal/LegalContent";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { siteConfig, routes } from "@/config/site";
import { company } from "@/data/company";
import { privacyPolicySections, legalLastUpdated } from "@/data/legal";

export const metadata: Metadata = buildMetadata(pageSEO.privacy);

export default function PrivacyPolicyPage() {
  const pageUrl = pageSEO.privacy.canonical ?? `${siteConfig.url}${routes.privacy}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.privacy.title,
    description: pageSEO.privacy.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Privacy Policy", url: pageUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${company.name} collects, uses, and protects your information.`}
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Privacy Policy" }]}
      />

      <LegalContent
        sections={privacyPolicySections}
        lastUpdated={legalLastUpdated}
        intro={`This Privacy Policy explains how ${company.name} handles information collected through this website. This is a general template and should be reviewed by legal counsel to confirm compliance with the laws applicable to your business and clients.`}
      />
    </>
  );
}
