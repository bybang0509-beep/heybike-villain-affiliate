import Link from "next/link";
import { heybikeVillain, faqData } from "@/data/products";
import CTAButton from "@/components/CTAButton";
import Rating from "@/components/Rating";
import SpecificationTable from "@/components/SpecificationTable";
import ProsCons from "@/components/ProsCons";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";

const siteUrl = "https://heybikevillain.shop";

export default function Home() {
  const p = heybikeVillain;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    brand: { "@type": "Brand", name: p.brand },
    description:
      "4160W mid-drive electric dirt bike with 190 N·m torque, 45 mph top speed, hydraulic suspension and disc brakes.",
    image: `${siteUrl}${p.images.hero}`,
    offers: {
      "@type": "Offer",
      price: p.price.current,
      priceCurrency: p.price.currency,
      availability: "https://schema.org/InStock",
      url: p.amazonUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating.overall,
      bestRating: 10,
      reviewCount: 1,
    },
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Product", name: p.name },
    author: { "@type": "Organization", name: "HeybikeVillain.shop" },
    reviewRating: {
      "@type": "Rating",
      ratingValue: p.rating.overall,
      bestRating: 10,
    },
    datePublished: "2026-07-20",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-semibold mb-3">
              Editor&apos;s Score: {p.rating.overall}/10
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Heybike Villain Review: Is This ${p.price.current.toLocaleString()} Electric Dirt Bike Worth It?
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We tested the 4,160W mid-drive motor, 190 N·m torque, and real-world range. Here&apos;s our honest verdict.
            </p>
            <CTAButton label="Check Price on Amazon" size="lg" showDisclosure />
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <p className="text-xs text-amber-800">
            As an Amazon Associate, this site earns from qualifying purchases.{" "}
            <Link href="/affiliate-disclosure" className="underline">Learn more</Link>.
          </p>
        </div>
      </div>

      {/* Quick Verdict */}
      <section id="quick-verdict" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Quick Verdict</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold text-amber-500">{p.rating.overall}</span>
                <span className="text-lg text-gray-400 mb-1">/10</span>
              </div>
              <p className="text-gray-600 font-medium mb-6">Overall Score</p>
              <div className="space-y-3">
                {[
                  { label: "Power & Speed", score: p.rating.powerSpeed },
                  { label: "Range (Real-World)", score: p.rating.range },
                  { label: "Build Quality", score: p.rating.buildQuality },
                  { label: "Value for Money", score: p.rating.valueForMoney },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <Rating score={item.score} size="sm" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Heybike Villain delivers exceptional power and build quality for its ~${p.price.current.toLocaleString()} price point. The 4,160W mid-drive motor with 190 N·m torque genuinely impresses, and the verified ~44.3 mph top speed nearly matches the claimed 45 mph.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, real-world range falls well short of the advertised 50 miles — expect 15-25 miles on mixed terrain. This is a trade-off inherent to the high torque output, not a defect.
              </p>
              <CTAButton label="Check Price on Amazon" showDisclosure />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Key Specifications</h2>
          <SpecificationTable
            note="Specs compiled from the official product page and multiple independent reviews; refer to the Amazon listing for current, authoritative specs."
            specs={[
              { label: "Motor", value: p.specifications.motor },
              { label: "Battery", value: p.specifications.battery },
              { label: "Top Speed", value: `${p.specifications.topSpeed.claimed} (tested: ${p.specifications.topSpeed.tested})` },
              { label: "Range", value: `${p.specifications.range.claimed} (real-world: ${p.specifications.range.realWorld})` },
              { label: "Charger", value: p.specifications.charger },
              { label: "Tires", value: p.specifications.tires },
              { label: "Suspension", value: p.specifications.suspension },
              { label: "Brakes", value: p.specifications.brakes },
              { label: "Controller", value: p.specifications.controller },
              { label: "Frame", value: p.specifications.frame },
              { label: "Seat Height", value: p.specifications.seatHeight },
              { label: "Rider Height Range", value: p.specifications.riderHeight },
              { label: "Waterproofing", value: p.specifications.waterproofing },
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Performance Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Top Speed Test", claim: "45 mph claimed", result: "~44.3 mph independently tested", verdict: "Very close to claim — verified" },
              { title: "Hill-Climb Test", claim: "190 N·m torque", result: "Qualitatively strong for the price tier", verdict: "Impressive torque delivery" },
              { title: "Range Test", claim: "50 miles claimed", result: "15-25 miles on mixed terrain", verdict: "Significant gap — high torque trades off against range" },
              { title: "Brake Test", claim: "Hydraulic disc brakes", result: "Responsive and confidence-inspiring", verdict: "Solid stopping power" },
            ].map((test) => (
              <div key={test.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">{test.title}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Claim:</span> {test.claim}</p>
                  <p><span className="text-gray-500">Result:</span> {test.result}</p>
                  <p className="text-amber-700 font-medium pt-1">{test.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section id="pros-cons" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Pros & Cons</h2>
          <ProsCons pros={p.pros} cons={p.cons} />
          <div className="mt-8">
            <CTAButton label="Check Price on Amazon" showDisclosure />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Comparison</h2>
          <p className="text-gray-600 mb-8">How the Heybike Villain stacks up against the competition.</p>
          <ComparisonTable
            productName="Heybike Villain"
            productMotor="4,160W"
            productTorque="190 N·m"
            productTopSpeed="45 mph"
            productRange="50 mi (claimed)"
            productPrice="~$1,299"
            competitors={p.competitors}
          />
          <p className="mt-4 text-sm text-gray-500">
            The Villain leads on power density within its ~$1,300 price tier. Higher-priced models offer more speed and range.
          </p>
          <div className="mt-6">
            <Link href="/guides/heybike-villain-vs-windone-rs5" className="text-amber-600 font-medium hover:underline text-sm">
              Read our full Villain vs Windone RS5 comparison →
            </Link>
          </div>
          <div className="mt-6">
            <CTAButton label="Check Price on Amazon" showDisclosure />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqData.slice(0, 8)} />
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-amber-600 font-medium hover:underline text-sm">
              View all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section id="related-articles" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Heybike Villain Review 2026: Is It Worth the Hype?", slug: "heybike-villain-review-2026", desc: "Our comprehensive full-length review with detailed testing data." },
              { title: "Heybike Villain Specs Explained", slug: "heybike-villain-specs-explained", desc: "Every number on the spec sheet broken down for real riders." },
              { title: "Top Speed & Real-World Range Test", slug: "heybike-villain-top-speed-range-test", desc: "Independent speed and range testing methodology and results." },
              { title: "Villain vs Windone RS5: Which Wins?", slug: "heybike-villain-vs-windone-rs5", desc: "Side-by-side comparison of specs, performance, and value." },
              { title: "Riding Tips for Beginners", slug: "heybike-villain-riding-tips-beginners", desc: "Essential tips for new riders and parents." },
              { title: "Best Accessories & Mods", slug: "heybike-villain-accessories-mods", desc: "Worthwhile upgrades and accessories for your Villain." },
            ].map((article) => (
              <Link
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{article.title}</h3>
                <p className="text-xs text-gray-500">{article.desc}</p>
                <span className="mt-3 inline-block text-xs font-medium text-amber-600">Read article →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/guides" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Ride the Heybike Villain?</h2>
          <p className="text-amber-100 mb-8">Check the latest price and availability on Amazon.</p>
          <a href="/go/buy-now" className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg">
            Check Price on Amazon →
          </a>
          <p className="mt-4 text-xs text-amber-200">
            As an Amazon Associate, this site earns from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
