import { faqData } from "@/data/products";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the Heybike Villain electric dirt bike — speed, range, legality, beginner tips, and more.",
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">
            Heybike Villain FAQ
          </h1>
          <p className="text-gray-600 mb-10">
            Answers to the most common questions about the Heybike Villain
            electric dirt bike.
          </p>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-gray-200"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm font-medium text-gray-900 hover:text-yellow-500">
                  {faq.question}
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
