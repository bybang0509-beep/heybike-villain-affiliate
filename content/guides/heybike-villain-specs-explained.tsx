import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";
import SpecificationTable from "@/components/SpecificationTable";
import { heybikeVillain } from "@/data/products";

export const metadata: Metadata = {
  title: "Heybike Villain Specs Explained: What Every Number Means",
  description:
    "A detailed breakdown of every Heybike Villain specification — motor, battery, torque, suspension, and more — explained for real riders.",
};

const related = [
  { title: "Full Heybike Villain Review", href: "/guides/heybike-villain-review-2026", description: "Our comprehensive review with testing data." },
  { title: "Top Speed & Range Test", href: "/guides/heybike-villain-top-speed-range-test", description: "Independent speed and range results." },
  { title: "Motor & Torque Deep Dive", href: "/guides/heybike-villain-motor-torque-explained", description: "What 190 N·m actually feels like." },
  { title: "Battery & Charging Guide", href: "/guides/heybike-villain-battery-charging-guide", description: "Charging tips and battery care." },
];

export default function SpecsExplained() {
  const p = heybikeVillain;
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Specs Explained", href: "/guides/heybike-villain-specs-explained" }]} />
      </div>
      <ArticleLayout title="Heybike Villain Specs Explained" description={metadata.description!} datePublished="2026-07-20" dateModified="2026-07-20" relatedArticles={related}>
        <h1>Heybike Villain Specs Explained: What Every Number Means</h1>
        <p>Electric dirt bike spec sheets can be overwhelming — watts, newton-meters, amp-hours, and volts all mixed together. If you&apos;re trying to understand what the Heybike Villain&apos;s numbers actually mean for your riding experience, this guide breaks it all down in plain language.</p>

        <h2>Motor: 4,160W Peak Mid-Drive</h2>
        <p>The &quot;4,160W&quot; figure refers to the motor&apos;s peak power output — the maximum power it can deliver in short bursts. The &quot;mid-drive&quot; part is actually more important than the wattage number. Unlike hub motors (built into the wheel), a mid-drive motor powers the rear wheel through the chain and gears, just like a motorcycle engine. This means the motor can leverage the bike&apos;s gear ratios for better hill-climbing and more efficient power delivery at various speeds.</p>
        <p>For context, most electric dirt bikes under $1,500 use 2,000–3,000W hub motors. The Villain&apos;s 4,160W mid-drive is a significant step up in both design philosophy and raw output.</p>

        <h2>Torque: 190 N·m</h2>
        <p>Torque is the rotational force the motor produces — think of it as the &quot;pulling power&quot; that gets you moving from a standstill and pushes you up hills. 190 newton-meters is genuinely impressive for this price tier. For comparison, many 250cc gas dirt bikes produce around 20-25 N·m of torque. The electric motor&apos;s 190 N·m is available instantly from zero RPM, which is why electric bikes feel so quick off the line.</p>
        <p>In practical terms: 190 N·m means strong acceleration, confident hill-climbing, and the ability to maintain speed on inclines where lower-torque motors would struggle.</p>

        <h2>Battery: 52V 26Ah (~1,352 Wh)</h2>
        <p>The battery spec has three numbers that matter:</p>
        <ul>
          <li><strong>52V (volts):</strong> The battery&apos;s voltage. Higher voltage generally means more efficient power delivery and less heat loss. 52V is a solid mid-range voltage for electric dirt bikes.</li>
          <li><strong>26Ah (amp-hours):</strong> The battery&apos;s capacity — how much energy it can store. Higher amp-hours means more range potential.</li>
          <li><strong>1,352 Wh (watt-hours):</strong> The total energy capacity (52V × 26Ah = 1,352 Wh). This is the most useful number for comparing batteries across different bikes, as it accounts for both voltage and capacity.</li>
        </ul>
        <p>A 1,352 Wh battery is large for this price range. However, the Villain&apos;s powerful motor consumes energy faster than lower-powered motors, which is why real-world range (15-25 miles) is lower than you might expect from a battery this size.</p>

        <h2>Top Speed: 45 mph Claimed / ~44.3 mph Tested</h2>
        <p>The claimed 45 mph top speed has been independently verified at approximately 44.3 mph. That&apos;s a ~1.5% difference — remarkably honest for the e-bike industry, where some manufacturers overstate top speed by 10-15%. The 45 mph figure is achievable on flat ground with a standard-weight rider in the highest power mode.</p>

        <h2>Range: 50 Miles Claimed / 15-25 Miles Real-World</h2>
        <p>This is the spec that requires the most context. The 50-mile claim is based on manufacturer testing conditions — typically the lowest power mode, flat pavement, light rider, and steady speed. Real-world riding on mixed terrain with hills, stops, and moderate-to-high power output yields 15-25 miles.</p>
        <p>This gap isn&apos;t unique to the Villain — it&apos;s standard across high-torque electric dirt bikes. The motor&apos;s 4,160W peak output and 190 N·m torque consume significantly more energy than a 2,000W motor would. You&apos;re trading range for power, and that&apos;s a deliberate design choice.</p>

        <h2>Charger: 58.8V 5A</h2>
        <p>The 5A charger output determines charging speed. A 5A charger is standard for bikes in this class and delivers a full charge in approximately 4-6 hours from empty. Faster chargers (8A-10A) exist but can reduce battery lifespan over time. The included charger strikes a reasonable balance between speed and battery health.</p>

        <h2>Tires: 14" Front / 12" Rear</h2>
        <p>The different front and rear tire sizes are intentional. The larger 14-inch front wheel provides better stability and obstacle clearance at speed, while the smaller 12-inch rear wheel lowers the center of gravity and improves acceleration response. The fat tire design (wider than standard) adds traction on loose surfaces like dirt, gravel, and sand.</p>

        <h2>Suspension: Front Hydraulic Fork + Rear Nitrogen/Air Shock</h2>
        <p>With 150mm of front travel and an independent rear shock, the Villain has genuine off-road suspension — not the basic spring-only setups found on many budget e-bikes. The hydraulic fork provides progressive damping (firmer as it compresses further), while the nitrogen/air rear shock offers adjustable preload. This setup handles bumps, jumps, and rough terrain far better than rigid or simple spring suspension.</p>

        <h2>Brakes: Hydraulic Disc</h2>
        <p>Hydraulic disc brakes use fluid pressure instead of cables to activate the brake calipers. The result: stronger stopping power with less lever effort, more consistent performance in wet conditions, and less maintenance than mechanical disc brakes. This is a meaningful upgrade over the mechanical disc brakes common on bikes in this price range.</p>

        <h2>Controller: FarDriver Smart Controller</h2>
        <p>The FarDriver controller manages power delivery from the battery to the motor. The &quot;smart&quot; aspect means it connects to a phone app, letting you adjust throttle response, power limits, and regenerative braking settings. This is valuable for customizing the ride feel and for dialing down power for beginners.</p>

        <h2>Frame: Carbon Steel, 265 lb Payload</h2>
        <p>Carbon steel is heavier than aluminum but more impact-resistant and easier to repair. The 265 lb payload capacity accommodates most adult riders plus gear. The frame material choice prioritizes durability over weight savings — appropriate for a bike designed for off-road abuse.</p>

        <h2>Seat Height & Rider Fit: 29.5" / 3.9-6.1 ft</h2>
        <p>A 29.5-inch seat height is relatively low, making the bike accessible to shorter riders while still providing adequate ground clearance for off-road use. The 3.9-6.1 ft rider height range is broad, though taller riders may find the compact dimensions less comfortable on longer rides.</p>

        <h2>Waterproofing: IPX6</h2>
        <p>IPX6 means the bike can withstand powerful water jets from any direction. In practical terms: riding in heavy rain and through puddles is fine. Submerging the bike in water is not. This rating provides peace of mind for riders who don&apos;t always have perfect weather conditions.</p>

        <h2>Full Specification Table</h2>
        <div className="not-prose my-6">
          <SpecificationTable
            note="Specs compiled from the official product page and multiple independent reviews."
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
              { label: "Payload", value: p.specifications.payload },
            ]}
          />
        </div>

        <h2>The Bottom Line</h2>
        <p>The Heybike Villain&apos;s spec sheet tells a clear story: this bike prioritizes power and build quality over maximum range. The 4,160W mid-drive motor, 190 N·m torque, hydraulic suspension, and hydraulic disc brakes are specs you&apos;d normally find on bikes costing significantly more. The trade-off is the range gap between claimed and real-world figures — a consequence of the high-power motor design.</p>
        <p>Understanding these specs helps you set realistic expectations and decide if the Villain&apos;s strengths align with your riding needs.</p>
      </ArticleLayout>
    </>
  );
}
