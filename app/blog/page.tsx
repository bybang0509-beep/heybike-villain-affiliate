import Link from "next/link";

const posts = [
  {
    slug: "heybike-villain-teen-riding-guide-2026",
    title: "Heybike Villain Teen Riding Guide 2026: Everything Parents Need to Know",
    desc: "Complete guide for parents buying the Heybike Villain for teenage riders — safety, settings, and supervision tips.",
    keyword: "heybike villain teen",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-top-speed-test",
    title: "Heybike Villain Top Speed Test: How Fast Does It Really Go?",
    desc: "Independent speed testing of the Heybike Villain — real numbers from real riders, not marketing claims.",
    keyword: "heybike villain top speed",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-off-road-adventure-guide",
    title: "Heybike Villain Off-Road Adventure Guide: Trail Riding for Beginners",
    desc: "How to take your Heybike Villain off-road — terrain tips, riding techniques, and the best trails to explore.",
    keyword: "heybike villain off road",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-battery-range-explained",
    title: "Heybike Villain Battery & Range: How Far Can You Really Go?",
    desc: "Real-world battery life and range testing — charging tips, range factors, and how to maximize your ride time.",
    keyword: "heybike villain battery range",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-parents-safety-guide",
    title: "Heybike Villain Safety Guide for Parents: What You Need to Know",
    desc: "A parent-focused safety guide covering the Villain's safety features, supervision tips, and age-appropriate riding.",
    keyword: "heybike villain safety",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-best-mods-upgrades",
    title: "Best Heybike Villain Mods & Upgrades in 2026",
    desc: "Top accessories and modifications that actually improve your Heybike Villain riding experience.",
    keyword: "heybike villain mods",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-maintenance-checklist",
    title: "Heybike Villain Maintenance Checklist: Keep Your Bike Running Like New",
    desc: "Simple maintenance routine to extend the life of your Heybike Villain and prevent costly repairs.",
    keyword: "heybike villain maintenance",
    date: "2026-07-22",
  },
  {
    slug: "heybike-villain-vs-competitors-2026",
    title: "Heybike Villain vs Competitors: Which Electric Dirt Bike Should You Buy?",
    desc: "Side-by-side comparison of the Heybike Villain against top competitors — specs, price, and real-world performance.",
    keyword: "heybike villain comparison",
    date: "2026-07-22",
  },
];

export const metadata = {
  title: "Heybike Villain Blog - Latest News & Riding Tips",
  description:
    "Stay updated with the latest Heybike Villain news, riding tips, reviews, and maintenance guides. Expert advice for electric dirt bike enthusiasts.",
};

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">Heybike Villain Blog</h1>
        <p className="text-gray-600 mb-10">
          Latest news, riding tips, reviews, and guides for Heybike Villain electric dirt bike enthusiasts.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h2 className="text-xl font-semibold mt-1 mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm">{post.desc}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="shrink-0 text-orange-600 hover:text-orange-700 text-sm font-medium mt-1"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
