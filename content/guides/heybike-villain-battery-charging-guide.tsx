import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Heybike Villain Battery & Charging: Complete Guide",
  description:
    "Everything about the Heybike Villain's battery — charging times, care tips, maximizing range, and long-term battery health.",
};

const batteryFAQ = [
  { question: "How long does the Heybike Villain battery take to charge?", answer: "Approximately 4-6 hours from empty using the included 58.8V 5A charger. Charging from 20% to 80% takes roughly 2.5-3.5 hours." },
  { question: "Can I use a faster charger?", answer: "Third-party faster chargers (8A-10A) exist, but using them regularly can reduce battery lifespan. The included 5A charger provides the best balance of speed and battery health." },
  { question: "How many charge cycles will the battery last?", answer: "The 52V 26Ah lithium battery is rated for approximately 500-800 charge cycles before capacity drops to 80% of original. With typical use, this translates to 3-5 years of regular riding." },
  { question: "Should I charge the battery to 100% every time?", answer: "For maximum battery longevity, charging to 80-90% for daily use and only charging to 100% before longer rides is ideal. However, charging to 100% occasionally won't cause significant harm." },
  { question: "Can I leave the battery on the charger overnight?", answer: "The charger has overcharge protection, so it's technically safe. However, leaving any lithium battery at 100% charge for extended periods can accelerate capacity loss over time." },
];

const related = [
  { title: "Full Heybike Villain Review", href: "/guides/heybike-villain-review-2026", description: "Complete review with range testing data." },
  { title: "Top Speed & Range Test", href: "/guides/heybike-villain-top-speed-range-test", description: "Real-world range results by riding style." },
  { title: "Specs Explained", href: "/guides/heybike-villain-specs-explained", description: "Battery specs explained in plain language." },
  { title: "Maintenance Guide", href: "/guides/heybike-villain-maintenance-guide", description: "Keep your battery and bike in top shape." },
];

export default function BatteryChargingGuide() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Battery & Charging", href: "/guides/heybike-villain-battery-charging-guide" }]} />
      </div>
      <ArticleLayout title="Heybike Villain Battery & Charging Guide" description={metadata.description!} datePublished="2026-07-20" dateModified="2026-07-20" relatedArticles={related} faqItems={batteryFAQ}>
        <h1>Heybike Villain Battery & Charging: Complete Guide</h1>
        <p>The battery is the heart of any electric dirt bike, and how you treat it directly affects your range, performance, and long-term ownership costs. This guide covers everything you need to know about the Heybike Villain&apos;s 52V 26Ah battery — from charging best practices to maximizing lifespan.</p>

        <h2>Battery Specifications</h2>
        <p>The Villain uses a 52V 26Ah lithium battery pack with approximately 1,352 Wh of total energy capacity. Here&apos;s what those numbers mean for you:</p>
        <ul>
          <li><strong>52V:</strong> A solid mid-range voltage that provides efficient power delivery without excessive heat generation.</li>
          <li><strong>26Ah:</strong> The capacity rating. Higher amp-hours means more range potential before needing to recharge.</li>
          <li><strong>1,352 Wh:</strong> The total energy storage. This is the most useful number for comparing batteries — the Villain&apos;s 1,352 Wh is generous for its price class.</li>
        </ul>

        <h2>Charging Times</h2>
        <p>Using the included 58.8V 5A charger:</p>
        <div className="not-prose my-6">
          <table className="w-full bg-white rounded-xl border border-gray-200">
            <thead><tr className="bg-gray-50"><th className="px-4 py-3 text-left text-sm font-semibold">Starting Charge</th><th className="px-4 py-3 text-left text-sm font-semibold">Estimated Time</th><th className="px-4 py-3 text-left text-sm font-semibold">Notes</th></tr></thead>
            <tbody>
              <tr><td className="px-4 py-3 text-sm">0% → 100%</td><td className="px-4 py-3 text-sm font-medium">4-6 hours</td><td className="px-4 py-3 text-sm text-gray-500">Full charge from empty</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm">20% → 80%</td><td className="px-4 py-3 text-sm font-medium">2.5-3.5 hours</td><td className="px-4 py-3 text-sm text-gray-500">Quick top-up for daily use</td></tr>
              <tr><td className="px-4 py-3 text-sm">50% → 100%</td><td className="px-4 py-3 text-sm font-medium">2-3 hours</td><td className="px-4 py-3 text-sm text-gray-500">Overnight-ready charge</td></tr>
            </tbody>
          </table>
        </div>
        <p>Charging speed slows as the battery approaches full — this is normal and protects the cells from damage. The last 10-20% takes proportionally longer than the first 80%.</p>

        <h2>Charging Best Practices</h2>
        <h3>Temperature Matters</h3>
        <p>Charge at room temperature (60-77°F / 15-25°C) whenever possible. Charging in extreme cold (below 32°F / 0°C) can permanently damage lithium cells. If the bike has been in cold storage, bring it indoors and let the battery warm up for 30-60 minutes before charging.</p>

        <h3>The 20-80 Rule</h3>
        <p>For daily riding, keeping the battery between 20% and 80% charge is optimal for long-term health. This isn&apos;t always practical — sometimes you need a full charge — but making it your default habit can significantly extend battery lifespan.</p>

        <h3>Don&apos;t Deep Discharge</h3>
        <p>Avoid running the battery to 0%. Deep discharges stress lithium cells and can reduce their capacity over time. The Villain&apos;s controller has a low-voltage cutoff that prevents truly empty discharge, but it&apos;s best to start charging at 15-20% remaining.</p>

        <h3>Use the Included Charger</h3>
        <p>The included 58.8V 5A charger is matched to the battery pack. Third-party fast chargers (8A-10A) can reduce charge times by 30-50%, but the higher current generates more heat and accelerates cell degradation. Use the standard charger for regular charging and save fast charging for when you truly need it.</p>

        <h2>Maximizing Range Per Charge</h2>
        <p>The Villain&apos;s real-world range is 15-25 miles on mixed terrain. Here&apos;s how to push toward the higher end of that range:</p>
        <ul>
          <li><strong>Lower power mode:</strong> The single biggest lever. Reducing motor output via the app can extend range by 30-50%.</li>
          <li><strong>Smooth acceleration:</strong> Gradual throttle application uses far less energy than repeated full-throttle bursts.</li>
          <li><strong>Moderate speed:</strong> Air resistance increases exponentially. Cruising at 20 mph uses much less energy than 40 mph.</li>
          <li><strong>Tire pressure:</strong> Properly inflated tires reduce rolling resistance. Check pressure before each ride.</li>
          <li><strong>Terrain choice:</strong> Hard-packed trails use less energy than loose dirt, sand, or steep grades.</li>
          <li><strong>Rider weight:</strong> Less weight means less energy needed. This isn&apos;t always controllable, but it&apos;s a factor.</li>
        </ul>

        <h2>Battery Lifespan</h2>
        <p>The Villain&apos;s lithium battery is rated for approximately 500-800 full charge cycles before capacity drops to 80% of its original rating. A &quot;charge cycle&quot; means charging from 0-100% — two charges from 50-100% count as one cycle.</p>
        <p>With regular riding (3-4 charges per week), you can expect:</p>
        <ul>
          <li><strong>Year 1-2:</strong> Minimal capacity loss (95-100% of original)</li>
          <li><strong>Year 2-3:</strong> Gradual loss begins (85-95% of original)</li>
          <li><strong>Year 3-5:</strong> Noticeable reduction (75-85% of original)</li>
          <li><strong>Year 5+:</strong> Consider replacement if range becomes insufficient</li>
        </ul>
        <p>Proper charging habits (avoiding deep discharges, moderate temperatures, using the standard charger) can push these timelines further out.</p>

        <h2>Storage Tips</h2>
        <p>If you&apos;re storing the bike for more than a few weeks:</p>
        <ul>
          <li>Charge to 50-60% (not 100%, not 0%)</li>
          <li>Store in a cool, dry place (50-77°F / 10-25°C)</li>
          <li>Check and top up the charge every 2-3 months</li>
          <li>Avoid storing in direct sunlight or extreme heat</li>
        </ul>

        <h2>Replacement Battery</h2>
        <p>Heybike sells replacement batteries directly. When the time comes, expect to pay $300-500 for a new pack. This is a normal ownership cost for electric bikes and is factored into the long-term value proposition.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose my-6">
          <FAQ items={batteryFAQ} />
        </div>

        <h2>The Bottom Line</h2>
        <p>The Heybike Villain&apos;s 52V 26Ah battery is well-sized for its power class. The 4-6 hour charge time is standard, and proper care can extend the battery&apos;s useful life to 3-5+ years. Focus on the 20-80% charging habit, avoid extreme temperatures, and use the included charger — these simple practices will keep your battery healthy for years of riding.</p>
      </ArticleLayout>
    </>
  );
}
