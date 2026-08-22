import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent } from "@/components/legal/LegalContent";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { siteConfig, routes } from "@/config/site";
import { company } from "@/data/company";
import { termsSections, legalLastUpdated } from "@/data/legal";

export const metadata: Metadata = buildMetadata(pageSEO.terms);

export default function TermsPage() {
  const pageUrl = pageSEO.terms.canonical ?? `${siteConfig.url}${routes.terms}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.terms.title,
    description: pageSEO.terms.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Terms & Conditions", url: pageUrl },
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
        title="Terms & Conditions"
        description={`The terms that govern your use of this website and your engagement with ${company.name}.`}
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Terms & Conditions" }]}
      />

      <LegalContent
        sections={termsSections}
        lastUpdated={legalLastUpdated}
        intro={`These Terms & Conditions govern your use of this website. This is a general template and should be reviewed by legal counsel to confirm it fits your business and jurisdiction before relying on it.`}
      />
    </>
  );
}
