import { Metadata } from "next";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Heybike Villain Maintenance Checklist: Keep Your Bike Running Like New",
  description:
    "Simple maintenance routine to extend the life of your Heybike Villain. Pre-ride checks, monthly maintenance, and seasonal care to prevent costly repairs.",
};

const related = [
  { title: "Battery & Range Guide", href: "/blog/heybike-villain-battery-range-explained", description: "Battery care tips for maximum lifespan." },
  { title: "Maintenance Guide", href: "/guides/heybike-villain-maintenance-guide", description: "Complete maintenance guide with detailed instructions." },
  { title: "Best Mods & Upgrades", href: "/blog/heybike-villain-best-mods-upgrades", description: "Upgrades that improve reliability." },
  { title: "Off-Road Guide", href: "/blog/heybike-villain-off-road-adventure-guide", description: "Post-ride care after trail riding." },
];

export default function MaintenanceChecklist() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Maintenance", href: "/blog/heybike-villain-maintenance-checklist" }]} />
      </div>
      <ArticleLayout title="Heybike Villain Maintenance Checklist" description={metadata.description!} datePublished="2026-07-22" dateModified="2026-07-22" relatedArticles={related}>
        <h1>Heybike Villain Maintenance Checklist: Keep Your Bike Running Like New</h1>
        <p>The Heybike Villain is a relatively low-maintenance machine — no oil changes, no spark plugs, no carburetors. But &quot;low maintenance&quot; doesn&apos;t mean &quot;no maintenance.&quot; A simple routine keeps your Villain running at its best and prevents small issues from becoming expensive repairs. Here&apos;s the maintenance schedule we follow.</p>

        <div className="my-8">
          <Image
            src="/images/blog/7.22/heybike-villain-maintenance-tips.jpeg"
            alt="Heybike Villain maintenance tips and checklist"
            width={800}
            height={450}
            className="rounded-xl"
          />
        </div>

        <h2>Before Every Ride (5 Minutes)</h2>
        <p>This quick check takes 5 minutes and prevents 90% of trailside breakdowns:</p>
        <h3>Tires</h3>
        <ul>
          <li><strong>Check pressure:</strong> 15-20 PSI for pavement, 10-12 PSI for off-road. Use a quality gauge — don&apos;t guess.</li>
          <li><strong>Inspect for damage:</strong> Look for cuts, embedded objects, or bulges in the sidewall.</li>
          <li><strong>Check tread depth:</strong> Worn tires lose traction, especially in mud and loose terrain.</li>
        </ul>

        <h3>Brakes</h3>
        <ul>
          <li><strong>Lever feel:</strong> Squeeze both brake levers. They should feel firm and consistent, not spongy or soft.</li>
          <li><strong>Pad check:</strong> Look at the brake pads through the caliper. Replace when they&apos;re down to 1mm thickness.</li>
          <li><strong>Rotor inspection:</strong> Look for deep grooves, warping, or contamination (oily shine).</li>
        </ul>

        <h3>Battery and Electrical</h3>
        <ul>
          <li><strong>Charge level:</strong> Start rides with full charge. Don&apos;t begin a long ride at 40%.</li>
          <li><strong>Connections:</strong> Make sure the battery is seated properly and the connector is clean and dry.</li>
          <li><strong>Lights:</strong> Quick test of headlight and taillight if you ride near dusk.</li>
        </ul>

        <h3>Controls</h3>
        <ul>
          <li><strong>Throttle:</strong> Twist the throttle and release. It should spring back smoothly and quickly.</li>
          <li><strong>Handlebars:</strong> Stand in front of the bike, lock the front wheel between your knees, and try to twist the bars. They shouldn&apos;t move.</li>
          <li><strong>Quick releases:</strong> If your wheels use quick releases, make sure they&apos;re tight.</li>
        </ul>

        <h2>After Every Ride (10 Minutes)</h2>
        <h3>Cleaning</h3>
        <ul>
          <li><strong>Wipe down after wet rides:</strong> Water, mud, and road salt cause corrosion. A quick wipe with a damp cloth prevents buildup.</li>
          <li><strong>Clean the chain:</strong> If the chain is dirty, wipe it with a rag. A dirty chain wears faster and reduces efficiency.</li>
          <li><strong>Avoid pressure washers:</strong> High-pressure water can force moisture past seals and into electrical connections. Use a garden hose or damp cloth instead.</li>
        </ul>

        <h3>Inspection</h3>
        <ul>
          <li><strong>Look for new damage:</strong> After off-road rides, check for bent levers, loose bolts, or frame scratches that could indicate cracks.</li>
          <li><strong>Check for loose parts:</strong> Bounce the bike and listen for rattles. Off-road vibration can loosen bolts over time.</li>
          <li><strong>Note any changes:</strong> If something feels different — brakes softer, suspension harsher, motor sound unusual — investigate before the next ride.</li>
        </ul>

        <h2>Monthly Maintenance (30-45 Minutes)</h2>
        <h3>Chain Care</h3>
        <ul>
          <li><strong>Clean:</strong> Use a chain cleaner or degreaser and a brush to remove built-up grime.</li>
          <li><strong>Lubricate:</strong> Apply bicycle chain lube (wet lube for rainy conditions, dry lube for dusty conditions).</li>
          <li><strong>Check tension:</strong> The chain should have about 1/2&quot; of vertical play at the midpoint. Too tight = accelerated wear; too loose = can skip or fall off.</li>
          <li><strong>Inspect for wear:</strong> A stretched chain wears sprockets faster. Replace the chain if it&apos;s visibly stretched or worn.</li>
        </ul>

        <h3>Bolts and Fasteners</h3>
        <p>Go over every accessible bolt with the appropriate wrench. Focus on:</p>
        <ul>
          <li>Handlebar clamp bolts</li>
          <li>Stem bolts</li>
          <li>Wheel axle nuts/quick releases</li>
          <li>Seat clamp</li>
          <li>Brake caliper bolts</li>
          <li>Motor mount bolts</li>
        </ul>
        <p>Use a torque wrench if you have one. Over-tightening can strip threads or crack components.</p>

        <h3>Suspension</h3>
        <ul>
          <li><strong>Stanchion inspection:</strong> Look at the fork stanchions (the shiny tubes) for scratches, nicks, or oil leaks. Even small scratches can damage seals.</li>
          <li><strong>Clean stanchions:</strong> Wipe with a clean, dry cloth. Never use degreasers on suspension stanchions.</li>
          <li><strong>Check rear shock:</strong> Look for oil leaks around the seals. Bounce the rear end — it should compress and rebound smoothly.</li>
        </ul>

        <h3>Battery Health</h3>
        <ul>
          <li><strong>Check connections:</strong> Make sure the battery connector pins are clean and not corroded.</li>
          <li><strong>Balance charge:</strong> Once a month, charge to 100% and leave on the charger for an extra 30-60 minutes. This allows the Battery Management System (BMS) to balance the cells.</li>
          <li><strong>Monitor capacity:</strong> If you notice your range dropping significantly, it may be time to investigate the battery health.</li>
        </ul>

        <h2>Seasonal/Quarterly Maintenance</h2>
        <h3>Brake System</h3>
        <ul>
          <li><strong>Pad replacement:</strong> Check pad thickness. Replace when worn to 1mm. Budget: $15-30 per set.</li>
          <li><strong>Rotor check:</strong> Measure rotor thickness with a micrometer. Replace if below minimum thickness stamped on the rotor.</li>
          <li><strong>Brake fluid (if applicable):</strong> Some hydraulic systems need periodic fluid flushes. Check the manual for your specific brake model.</li>
        </ul>

        <h3>Wheel and Tire</h3>
        <ul>
          <li><strong>Spoke tension:</strong> If your wheels have spokes, check tension by plucking each spoke — they should all ring at a similar pitch.</li>
          <li><strong>Wheel trueness:</strong> Spin each wheel and watch for side-to-side wobble. A truing stand or a zip-tie on the fork can help identify issues.</li>
          <li><strong>Tire replacement:</strong> Replace tires when tread is worn flat, sidewalls are cracking, or you&apos;ve had multiple punctures in the same area.</li>
        </ul>

        <h3>Bearings</h3>
        <ul>
          <li><strong>Headset:</strong> Turn the bars lock-to-lock. There should be no grinding, clicking, or roughness.</li>
          <li><strong>Wheel bearings:</strong> Grab the wheel at 3 and 9 o&apos;clock and try to wiggle it. There should be no play.</li>
          <li><strong>Bottom bracket:</strong> Spin the cranks (if applicable). They should rotate smoothly without noise.</li>
        </ul>

        <h2>Winter Storage</h2>
        <p>If you&apos;re storing the Villain for winter:</p>
        <ul>
          <li><strong>Battery:</strong> Charge to 50-60%, store in a cool dry place (not freezing). Check and top up every 4-6 weeks.</li>
          <li><strong>Tires:</strong> Inflate to max PSI to prevent flat spots. Store off the ground if possible.</li>
          <li><strong>Chain:</strong> Clean and lube before storage to prevent rust.</li>
          <li><strong>Cover:</strong> Use a breathable cover — plastic tarps trap moisture and promote rust.</li>
          <li><strong>Location:</strong> Store indoors if possible. Avoid damp basements or unheated garages with temperature swings.</li>
        </ul>

        <h2>Common Issues and Fixes</h2>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Problem</th>
              <th className="border p-2 text-left">Likely Cause</th>
              <th className="border p-2 text-left">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">Brakes squealing</td><td className="border p-2">Contaminated pads or rotor</td><td className="border p-2">Clean rotor with isopropyl alcohol, replace pads if contaminated</td></tr>
            <tr><td className="border p-2">Chain skipping</td><td className="border p-2">Worn chain or loose tension</td><td className="border p-2">Adjust tension or replace chain</td></tr>
            <tr><td className="border p-2">Reduced range</td><td className="border p-2">Cold weather, low tire pressure, or battery aging</td><td className="border p-2">Check PSI, warm battery, monitor long-term capacity</td></tr>
            <tr><td className="border p-2">Rattling noise</td><td className="border p-2">Loose bolts or accessories</td><td className="border p-2">Check all bolts, add thread locker where needed</td></tr>
            <tr><td className="border p-2">Motor feels weak</td><td className="border p-2">Controller settings or low battery</td><td className="border p-2">Check FarDriver app settings, fully charge battery</td></tr>
          </tbody>
        </table>

        <h2>The Bottom Line</h2>
        <p>The Heybike Villain&apos;s maintenance needs are simple: keep it clean, keep it tight, and keep it lubed. The 5-minute pre-ride check prevents most problems. The monthly routine catches everything else. Follow this schedule and your Villain will stay reliable and perform like new for years.</p>
      </ArticleLayout>
    </>
  );
}
