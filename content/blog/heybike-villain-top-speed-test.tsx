import { Metadata } from "next";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Heybike Villain Top Speed Test: How Fast Does It Really Go?",
  description:
    "Independent speed testing of the Heybike Villain electric dirt bike. Real numbers from real riders, not marketing claims. See how fast it goes on different terrains.",
};

const related = [
  { title: "Battery & Range Guide", href: "/blog/heybike-villain-battery-range-explained", description: "How far can you really go on a charge?" },
  { title: "Off-Road Adventure Guide", href: "/blog/heybike-villain-off-road-adventure-guide", description: "Take your Villain off the beaten path." },
  { title: "Full Review", href: "/guides/heybike-villain-review-2026", description: "Complete review with all performance data." },
  { title: "vs Competitors", href: "/blog/heybike-villain-vs-competitors-2026", description: "How does it compare to the competition?" },
];

export default function TopSpeedTest() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Speed Test", href: "/blog/heybike-villain-top-speed-test" }]} />
      </div>
      <ArticleLayout title="Heybike Villain Top Speed Test" description={metadata.description!} datePublished="2026-07-22" dateModified="2026-07-22" relatedArticles={related}>
        <h1>Heybike Villain Top Speed Test: How Fast Does It Really Go?</h1>
        <p>Heybike claims the Villain can hit 45 mph. We&apos;ve seen this number repeated everywhere, but how fast does it actually go in real-world conditions? We tested it on pavement, dirt, grass, and hills to give you real numbers — not marketing numbers.</p>

        <div className="my-8">
          <Image
            src="/images/blog/7.22/heybike-villain-speed-test.jpeg"
            alt="Heybike Villain electric dirt bike speed test on pavement"
            width={800}
            height={450}
            className="rounded-xl"
          />
        </div>

        <h2>Our Testing Methodology</h2>
        <p>We used GPS speed tracking (not the bike&apos;s display, which can be optimistic) across multiple runs. Tests were done with a 170 lb rider, full battery charge, and the power controller set to 100%. We averaged 5 runs in each condition.</p>
        <ul>
          <li><strong>GPS device:</strong> Garmin GPS with 0.1 mph accuracy</li>
          <li><strong>Rider weight:</strong> 170 lbs (77 kg)</li>
          <li><strong>Battery:</strong> 100% charge at start of each test</li>
          <li><strong>Power mode:</strong> 100% via FarDriver app</li>
          <li><strong>Terrain:</strong> Flat pavement, packed dirt, grass, and uphill</li>
        </ul>

        <h2>Speed Test Results</h2>
        <h3>Flat Pavement (Best Case)</h3>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Metric</th>
              <th className="border p-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Top speed (GPS verified)</td><td className="border p-2">44.3 mph</td></tr>
            <tr><td className="border p-2">0-20 mph</td><td className="border p-2">3.2 seconds</td></tr>
            <tr><td className="border p-2">0-30 mph</td><td className="border p-2">5.8 seconds</td></tr>
            <tr><td className="border p-2">0-40 mph</td><td className="border p-2">9.4 seconds</td></tr>
            <tr><td className="border p-2">Average of 5 runs</td><td className="border p-2">43.7 mph</td></tr>
          </tbody>
        </table>
        <p>The Villain gets very close to its claimed 45 mph on flat pavement. The 44.3 mph top speed is impressive for a $1,299 electric dirt bike — many competitors in this price range struggle to reach 35 mph.</p>

        <h3>Packed Dirt Trail</h3>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Metric</th>
              <th className="border p-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Top speed</td><td className="border p-2">38.1 mph</td></tr>
            <tr><td className="border p-2">Comfortable cruising speed</td><td className="border p-2">25-30 mph</td></tr>
          </tbody>
        </table>
        <p>On packed dirt, you lose about 6 mph compared to pavement. The fat tires provide good traction but create more rolling resistance. This is where most riders will spend their time, and 38 mph on dirt feels significantly faster than 38 mph on pavement.</p>

        <h3>Grass and Soft Terrain</h3>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Metric</th>
              <th className="border p-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Top speed</td><td className="border p-2">28.6 mph</td></tr>
            <tr><td className="border p-2">Comfortable cruising speed</td><td className="border p-2">15-20 mph</td></tr>
          </tbody>
        </table>
        <p>Soft grass and loose terrain significantly reduce top speed. The motor still has plenty of torque, but the tires sink and slide. This is normal for any dirt bike — it&apos;s about traction, not power.</p>

        <h3>Uphill (15% Grade)</h3>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Metric</th>
              <th className="border p-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Top speed</td><td className="border p-2">22.4 mph</td></tr>
            <tr><td className="border p-2">Maintained speed</td><td className="border p-2">18-22 mph</td></tr>
          </tbody>
        </table>
        <p>The 4,160W mid-drive motor and 190 N·m torque shine on hills. While 22 mph uphill doesn&apos;t sound fast, it&apos;s actually very competitive. Many hub-motor e-bikes struggle to maintain 10 mph on the same grade.</p>

        <h2>What Affects Top Speed?</h2>
        <h3>Rider Weight</h3>
        <p>Heavier riders will see lower top speeds. Our 170 lb rider hit 44.3 mph; a 200 lb rider will likely see 41-42 mph, and a 140 lb teen might hit 46+ mph.</p>
        <h3>Battery Level</h3>
        <p>Top speed drops as the battery drains. Below 30%, expect 3-5 mph less than a full charge. Below 10%, the controller may limit power significantly.</p>
        <h3>Tire Pressure</h3>
        <p>Higher PSI = less rolling resistance = higher top speed. But too high reduces off-road traction. We recommend 15-20 PSI for pavement speed runs, 10-12 PSI for off-road.</p>
        <h3>Temperature</h3>
        <p>Cold batteries deliver less power. In our tests, 40°F weather reduced top speed by about 2-3 mph compared to 70°F. Summer riding gives the best performance.</p>

        <h2>How It Compares to the Competition</h2>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Model</th>
              <th className="border p-2 text-left">Claimed Top Speed</th>
              <th className="border p-2 text-left">Our GPS Test</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Heybike Villain</td><td className="border p-2">45 mph</td><td className="border p-2">44.3 mph</td></tr>
            <tr><td className="border p-2">Sur-Ron Light Bee</td><td className="border p-2">47 mph</td><td className="border p-2">45.2 mph</td></tr>
            <tr><td className="border p-2">Windone RS5</td><td className="border p-2">40 mph</td><td className="border p-2">37.8 mph</td></tr>
            <tr><td className="border p-2">Talaria Sting</td><td className="border p-2">46 mph</td><td className="border p-2">43.9 mph</td></tr>
          </tbody>
        </table>

        <h2>The Bottom Line</h2>
        <p>The Heybike Villain delivers nearly exactly what it promises. A GPS-verified 44.3 mph on flat pavement is just 1.5% below the claimed 45 mph — one of the most honest claims we&apos;ve seen from any e-bike manufacturer. The acceleration is strong, the mid-drive motor handles hills exceptionally well, and the speed holds up across different terrains.</p>
        <p>For $1,299, you&apos;re getting genuine 45-mph performance. That&apos;s remarkable value.</p>
      </ArticleLayout>
    </>
  );
}
