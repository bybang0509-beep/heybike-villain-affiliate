export const metadata = {
  title: "Affiliate Disclosure",
  description:
    "Affiliate disclosure for HeybikeVillain.shop — how we earn commissions through Amazon Associates.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            HeybikeVillain.shop is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising and
            linking to Amazon.com.
          </p>
          <p>
            As an Amazon Associate, this site earns from qualifying purchases.
            This means that when you click on links to various products on this
            site and make a purchase, we may receive a commission at no
            additional cost to you.
          </p>
          <p>
            The commission we earn comes from Amazon, not from you. The price
            you pay for any product remains the same whether you use our link or
            go directly to Amazon.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-4">
            Our Commitment to Honest Reviews
          </h2>
          <p>
            Our affiliate relationship does not influence our reviews or
            recommendations. We are committed to providing honest, balanced, and
            accurate information to help you make informed purchase decisions.
          </p>
          <p>
            We clearly disclose our affiliate relationship on every page that
            contains affiliate links, in compliance with FTC guidelines and
            Amazon Associates Operating Agreement.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 pt-4">
            Amazon Trademark Notice
          </h2>
          <p>
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
            affiliates.
          </p>
          <p className="text-sm text-gray-500 pt-4">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </div>
  );
}
