import Link from "next/link";

const guides = [
  {
    slug: "heybike-villain-review-2026",
    title: "Heybike Villain Review 2026: Is It Worth the Hype?",
    desc: "Our comprehensive full-length review covering every aspect of the Heybike Villain.",
    keyword: "heybike villain review",
  },
  {
    slug: "heybike-villain-specs-explained",
    title: "Heybike Villain Specs Explained: What Every Number Means",
    desc: "A detailed breakdown of every specification for readers new to electric dirt bikes.",
    keyword: "heybike villain specs",
  },
  {
    slug: "heybike-villain-top-speed-range-test",
    title: "Heybike Villain Top Speed & Real-World Range Test",
    desc: "Independent testing methodology and verified results.",
    keyword: "heybike villain top speed",
  },
  {
    slug: "heybike-villain-motor-torque-explained",
    title: "How the 4160W Motor & 190Nm Torque Actually Feel",
    desc: "A technical deep dive into the mid-drive motor and real riding experience.",
    keyword: "heybike villain motor",
  },
  {
    slug: "heybike-villain-battery-charging-guide",
    title: "Heybike Villain Battery & Charging: Complete Guide",
    desc: "Battery care, charging tips, and maximizing your range.",
    keyword: "heybike villain battery",
  },
  {
    slug: "heybike-villain-vs-windone-rs5",
    title: "Heybike Villain vs Windone RS5: Which Electric Dirt Bike Wins?",
    desc: "Real comparison data — motor, speed, range, and price side by side.",
    keyword: "heybike villain vs windone rs5",
  },
  {
    slug: "heybike-villain-riding-tips-beginners",
    title: "Heybike Villain Riding Tips for Beginners",
    desc: "Essential tips for new riders and parents buying for teens.",
    keyword: "heybike villain beginner",
  },
  {
    slug: "heybike-villain-maintenance-guide",
    title: "Heybike Villain Maintenance Guide: Keep It Running Like New",
    desc: "Maintenance checklist to keep your Villain in top condition.",
    keyword: "heybike villain maintenance",
  },
  {
    slug: "heybike-villain-accessories-mods",
    title: "Best Heybike Villain Accessories & Mods Worth Buying",
    desc: "Worthwhile upgrades and accessories for your electric dirt bike.",
    keyword: "heybike villain accessories",
  },
  {
    slug: "heybike-villain-safety-features-explained",
    title: "Heybike Villain Safety Features Explained: What Parents Should Know",
    desc: "A parent-focused guide to the Villain's safety features.",
    keyword: "heybike villain safety",
  },
];

export const metadata = {
  title: "All Guides",
  description:
    "Complete collection of Heybike Villain guides: reviews, specs, comparisons, riding tips, maintenance, and more.",
};

export default function GuidesPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">Heybike Villain Guides</h1>
        <p className="text-gray-600 mb-10">
          Everything you need to know about the Heybike Villain electric dirt
          bike — from in-depth reviews to maintenance tips.
        </p>
        <div className="space-y-4">
          {guides.map((guide, i) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-500">{guide.desc}</p>
                  <span className="mt-2 inline-block text-xs text-yellow-500 font-medium">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
