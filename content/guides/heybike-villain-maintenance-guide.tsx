import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Heybike Villain Maintenance Guide: Keep It Running Like New",
  description:
    "A complete maintenance checklist for the Heybike Villain — chain care, brake inspection, battery health, tire maintenance, and seasonal storage.",
};

const related = [
  { title: "Battery & Charging Guide", href: "/guides/heybike-villain-battery-charging-guide", description: "Maximize battery lifespan." },
  { title: "Full Heybike Villain Review", href: "/guides/heybike-villain-review-2026", description: "Complete review with ownership insights." },
  { title: "Best Accessories & Mods", href: "/guides/heybike-villain-accessories-mods", description: "Upgrade your maintenance toolkit." },
  { title: "Riding Tips for Beginners", href: "/guides/heybike-villain-riding-tips-beginners", description: "Ride smarter to reduce wear." },
];

export default function MaintenanceGuide() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: "Maintenance Guide", href: "/guides/heybike-villain-maintenance-guide" }]} />
      </div>
      <ArticleLayout title="Heybike Villain Maintenance Guide" description={metadata.description!} datePublished="2026-07-20" dateModified="2026-07-20" relatedArticles={related}>
        <h1>Heybike Villain Maintenance Guide: Keep It Running Like New</h1>
        <p>The Heybike Villain is built tough, but like any machine, regular maintenance keeps it performing at its best and extends its lifespan. This guide covers everything from daily checks to seasonal storage — follow these practices and your Villain will reward you with years of reliable riding.</p>

        <h2>After Every Ride</h2>
        <h3>Quick Visual Inspection</h3>
        <ul>
          <li>Check tires for cuts, embedded debris, or unusual wear</li>
          <li>Look for loose bolts, especially on the handlebars, seat, and wheels</li>
          <li>Inspect the chain for obvious damage or excessive slack</li>
          <li>Check that the brakes feel normal (lever resistance hasn&apos;t changed)</li>
          <li>Wipe down the bike if it&apos;s muddy or wet</li>
        </ul>

        <h3>Cleaning</h3>
        <p>A damp cloth or low-pressure water rinse is fine — the IPX6 rating handles water exposure. Avoid high-pressure washers directly on the motor, controller, and battery connections. After washing in dusty or muddy conditions, dry the bike and apply light lubricant to the chain.</p>

        <h2>Weekly Maintenance</h2>
        <h3>Chain Care</h3>
        <p>The mid-drive motor puts more stress on the chain than a hub motor would. Weekly chain maintenance is important:</p>
        <ul>
          <li><strong>Clean:</strong> Wipe the chain with a rag to remove dirt and old lubricant</li>
          <li><strong>Lubricate:</strong> Apply bicycle or motorcycle chain lube to each roller</li>
          <li><strong>Check tension:</strong> The chain should have about 10-15mm of vertical play. Adjust if needed using the rear axle adjusters</li>
          <li><strong>Inspect links:</strong> Look for stiff links, rust, or excessive wear</li>
        </ul>
        <p>Expect to replace the chain every 1,000-2,000 miles depending on riding conditions and maintenance habits. A worn chain accelerates sprocket wear, so replacing it on time saves money.</p>

        <h3>Tire Pressure</h3>
        <p>Check tire pressure weekly and before every ride. The fat tires are more forgiving of pressure variations than narrow tires, but proper inflation still matters for traction, handling, and range. Adjust pressure based on terrain: lower for loose surfaces (better traction), higher for hard-packed trails (less rolling resistance).</p>

        <h2>Monthly Maintenance</h2>
        <h3>Brake Inspection</h3>
        <p>The hydraulic disc brakes are low-maintenance but not zero-maintenance:</p>
        <ul>
          <li><strong>Pad wear:</strong> Check brake pad thickness through the caliper. Replace when pads are down to 1mm of material</li>
          <li><strong>Rotor condition:</strong> Look for scoring, warping, or uneven wear on the brake rotors</li>
          <li><strong>Brake feel:</strong> If the lever starts feeling spongy or pulls closer to the handlebar, the system may need a bleed (air in the hydraulic line)</li>
          <li><strong>Clean rotors:</strong> Wipe rotors with isopropyl alcohol to remove oil and debris</li>
        </ul>

        <h3>Bolt Check</h3>
        <p>Vibration from off-road riding can loosen bolts over time. Monthly, check torque on:</p>
        <ul>
          <li>Handlebar clamp bolts</li>
          <li>Stem bolts</li>
          <li>Axle nuts (front and rear)</li>
          <li>Seat clamp</li>
          <li>Suspension pivot bolts</li>
          <li>Motor mount bolts</li>
        </ul>

        <h3>Suspension Check</h3>
        <p>The front hydraulic fork and rear nitrogen/air shock should be checked monthly:</p>
        <ul>
          <li>Look for oil leaks on the fork stanchions (shiny, oily residue)</li>
          <li>Check rear shock pressure if it&apos;s adjustable</li>
          <li>Bounce the bike to verify both ends compress and rebound smoothly</li>
          <li>Clean fork stanchions with a damp cloth to prevent seal damage</li>
        </ul>

        <h2>Every 3-6 Months</h2>
        <h3>Sprocket Inspection</h3>
        <p>Check the front and rear sprocket teeth for wear. Worn teeth become pointed (shark-fin shaped) instead of flat-topped. A worn sprocket accelerates chain wear, so replace sprockets and the chain together for best results.</p>

        <h3>Electrical Connections</h3>
        <p>Inspect the battery connection, motor connector, and controller wiring for corrosion, loose pins, or damage. Apply dielectric grease to connectors in wet or humid environments.</p>

        <h3>Bearing Check</h3>
        <p>Spin the wheels and check for roughness or play in the wheel bearings. Check the headset (steering) bearings by turning the handlebars lock-to-lock — they should feel smooth without notchiness.</p>

        <h2>Seasonal Storage</h2>
        <p>If you&apos;re storing the Villain for more than a month (winter, travel, etc.):</p>
        <ul>
          <li><strong>Battery:</strong> Charge to 50-60%. Check and top up every 2-3 months. Never store at 0% or 100% long-term.</li>
          <li><strong>Tires:</strong> Inflate to recommended pressure. If possible, elevate the bike so the tires aren&apos;t bearing weight for months.</li>
          <li><strong>Chain:</strong> Clean and lube before storage to prevent rust.</li>
          <li><strong>Location:</strong> Cool, dry, indoor space. Avoid direct sunlight and extreme temperatures.</li>
          <li><strong>Cover:</strong> Use a breathable bike cover to protect from dust.</li>
        </ul>

        <h2>Replacement Parts Schedule</h2>
        <div className="not-prose my-6">
          <table className="w-full bg-white rounded-xl border border-gray-200">
            <thead><tr className="bg-gray-50"><th className="px-4 py-3 text-left text-sm font-semibold">Part</th><th className="px-4 py-3 text-left text-sm font-semibold">Expected Life</th><th className="px-4 py-3 text-left text-sm font-semibold">Signs of Wear</th></tr></thead>
            <tbody>
              <tr><td className="px-4 py-3 text-sm">Chain</td><td className="px-4 py-3 text-sm">1,000-2,000 mi</td><td className="px-4 py-3 text-sm text-gray-500">Stretched, stiff links, rust</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm">Brake pads</td><td className="px-4 py-3 text-sm">1,500-3,000 mi</td><td className="px-4 py-3 text-sm text-gray-500">Less than 1mm material remaining</td></tr>
              <tr><td className="px-4 py-3 text-sm">Tires</td><td className="px-4 py-3 text-sm">2,000-4,000 mi</td><td className="px-4 py-3 text-sm text-gray-500">Worn tread, sidewall cracks</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm">Sprockets</td><td className="px-4 py-3 text-sm">2,000-4,000 mi</td><td className="px-4 py-3 text-sm text-gray-500">Shark-fin tooth shape</td></tr>
              <tr><td className="px-4 py-3 text-sm">Brake fluid</td><td className="px-4 py-3 text-sm">1-2 years</td><td className="px-4 py-3 text-sm text-gray-500">Spongy lever feel</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-sm">Battery</td><td className="px-4 py-3 text-sm">3-5 years</td><td className="px-4 py-3 text-sm text-gray-500">Noticeable range reduction</td></tr>
            </tbody>
          </table>
        </div>
        <p>Heybike sells replacement parts directly, which simplifies sourcing. Keeping a spare chain and brake pads on hand is good practice for regular riders.</p>

        <h2>Tools You&apos;ll Need</h2>
        <p>A basic toolkit for Villain maintenance:</p>
        <ul>
          <li>Chain lube (bicycle or motorcycle specific)</li>
          <li>Tire pressure gauge</li>
          <li>Allen key set (metric)</li>
          <li>Chain tool (for chain replacement)</li>
          <li>Clean rags</li>
          <li>Isopropyl alcohol (for brake rotors)</li>
          <li>Dielectric grease (for electrical connectors)</li>
          <li>Basic socket set</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>The Heybike Villain is a well-built machine, but the mid-drive motor design means drivetrain maintenance is more important than on hub motor bikes. A weekly 10-minute routine (chain lube, tire check, visual inspection) and monthly deeper checks will keep your Villain performing like new for years. Neglecting the chain and brakes is the fastest way to turn a small maintenance task into an expensive repair.</p>
      </ArticleLayout>
    </>
  );
}
