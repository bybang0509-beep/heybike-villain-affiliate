import Link from "next/link";
import CTAButton from "@/components/CTAButton";

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface ArticleLayoutProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  children: React.ReactNode;
  relatedArticles?: RelatedArticle[];
  faqItems?: { question: string; answer: string }[];
}

export default function ArticleLayout({
  title,
  description,
  datePublished,
  dateModified,
  children,
  relatedArticles,
  faqItems,
}: ArticleLayoutProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: "HeybikeVillain.shop" },
    publisher: {
      "@type": "Organization",
      name: "HeybikeVillain.shop",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://heybikevillain.shop",
    },
  };

  const faqSchema = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs text-yellow-700 bg-yellow-50 inline-block px-3 py-1 rounded-full mb-4">
              As an Amazon Associate, this site earns from qualifying purchases.{" "}
              <Link href="/affiliate-disclosure" className="underline">
                Learn more
              </Link>
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Last updated: {dateModified}
            </p>
          </div>

          <div className="prose prose-gray max-w-none prose-headings:scroll-mt-20 prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <CTAButton label="Check Price on Amazon" size="lg" showDisclosure />
          </div>

          {relatedArticles && relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500">{article.description}</p>
                    <span className="mt-2 inline-block text-xs font-medium text-yellow-500">
                      Read more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
