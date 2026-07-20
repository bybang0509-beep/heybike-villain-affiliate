import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "About HeybikeVillain.shop — an independent review site dedicated to the Heybike Villain electric dirt bike.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>

        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/blog/heybike-villain-about-us.png"
            alt="About HeybikeVillain.shop - Independent Heybike Villain review site"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-gray max-w-none mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            HeybikeVillain.shop is an independent review site dedicated to
            providing honest, in-depth information about the Heybike Villain
            electric dirt bike.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We are <strong>not affiliated with Heybike</strong> or any
            manufacturer. Our reviews are based on independent research, real
            user feedback, and publicly available data.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our mission is to help potential buyers make informed purchase
            decisions by presenting accurate specifications, balanced pros and
            cons, and real-world performance data.
          </p>
          <p className="text-gray-500">
            Last updated: July 2026
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6">Why Trust Our Reviews?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Independent Testing</h3>
              <p className="text-sm text-gray-600">We conduct our own speed, range, and performance tests to verify manufacturer claims.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Balanced Reviews</h3>
              <p className="text-sm text-gray-600">We highlight both strengths and weaknesses to give you the complete picture.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Rider Feedback</h3>
              <p className="text-sm text-gray-600">Our content incorporates feedback from actual Heybike Villain owners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
