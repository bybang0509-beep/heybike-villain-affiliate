export const metadata = {
  title: "About Us",
  description:
    "About HeybikeVillain.shop — an independent review site dedicated to the Heybike Villain electric dirt bike.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            HeybikeVillain.shop is an independent review site dedicated to
            providing honest, in-depth information about the Heybike Villain
            electric dirt bike.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are <strong>not affiliated with Heybike</strong> or any
            manufacturer. Our reviews are based on independent research, real
            user feedback, and publicly available data.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to help potential buyers make informed purchase
            decisions by presenting accurate specifications, balanced pros and
            cons, and real-world performance data.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </div>
  );
}
