import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumb from "@/components/Breadcrumb";
import CTAButton from "@/components/CTAButton";
import ComparisonTable from "@/components/ComparisonTable";
import ProsCons from "@/components/ProsCons";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Heybike Villain vs Windone RS5: Full Comparison (2026)",
  description:
    "Motor power, torque, top speed, and price compared side by side. Which budget electric dirt bike actually wins?",
};

const comparisonFAQ = [
  {
    question: "Which is faster, the Heybike Villain or the Windone RS5?",
    answer:
      "The Heybike Villain is faster, with a tested top speed of ~44.3 mph vs. the RS5's claimed 37 mph. The Villain's 4,160W motor significantly outpowers the RS5's 2,200W motor.",
  },
  {
    question: "Is the Heybike Villain worth the extra money over the Windone RS5?",
    answer:
      "For riders who value performance, yes. The Villain's mid-drive motor, higher torque, hydraulic suspension, and reverse function justify the price difference. If you're on a tight budget and don't need maximum power, the RS5 is a reasonable option.",
  },
  {
    question: "Which bike has better range, the Villain or the RS5?",
    answer:
      "The Windone RS5 advertises up to 45 miles of range, which is higher than the Villain's claimed 50 miles but in practice the RS5's lower power draw may give it a real-world range advantage. However, both bikes' real-world range will be significantly less than claimed figures.",
  },
  {
    question: "Is the Heybike Villain louder than the Windone RS5?",
    answer:
      "Yes, the Villain's mid-drive motor tends to run louder than the RS5's hub motor. This is a characteristic of mid-drive designs and isn't a defect, but it's worth noting if noise is a concern.",
  },
  {
    question: "Which is better for beginners, the Villain or the RS5?",
    answer:
      "Both can work for beginners, but the RS5's lower power output may feel more manageable initially. The Villain's app-tunable controller helps by letting you dial down the power while learning, which gives it an edge for beginners who want room to grow.",
  },
];

const relatedArticles = [
  {
    title: "Heybike Villain Review 2026: Full Review",
    href: "/guides/heybike-villain-review-2026",
    description: "Our comprehensive review covering every aspect.",
  },
  {
    title: "Heybike Villain Specs Explained",
    href: "/guides/heybike-villain-specs-explained",
    description: "Every specification broken down in plain language.",
  },
  {
    title: "Top Speed & Real-World Range Test",
    href: "/guides/heybike-villain-top-speed-range-test",
    description: "Independent test methodology and verified results.",
  },
  {
    title: "Best Heybike Villain Accessories & Mods",
    href: "/guides/heybike-villain-accessories-mods",
    description: "Worthwhile upgrades for your electric dirt bike.",
  },
];

export default function VillainVsWindoneRS5() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            {
              label: "Heybike Villain vs Windone RS5",
              href: "/guides/heybike-villain-vs-windone-rs5",
            },
          ]}
        />
      </div>

      <ArticleLayout
        title="Heybike Villain vs Windone RS5: Which Electric Dirt Bike Wins?"
        description="Side-by-side comparison of the Heybike Villain and Windone RS5 — motor, speed, range, price, and real-world performance."
        datePublished="2026-07-20"
        dateModified="2026-07-20"
        relatedArticles={relatedArticles}
        faqItems={comparisonFAQ}
      >
        <h1>
          Heybike Villain vs Windone RS5: Which Electric Dirt Bike Wins?
        </h1>

        <p>
          If you&apos;re shopping for an electric dirt bike under $1,500, the Heybike
          Villain and Windone RS5 are likely on your shortlist. Both are
          designed for off-road fun, both sell on Amazon, and both promise
          serious performance at a fraction of the cost of premium e-motos.
          But they take fundamentally different approaches to achieving that
          goal.
        </p>

        <p>
          We compared them across six key dimensions — motor, speed, range,
          build quality, features, and price — to help you decide which one
          actually fits your needs and budget.
        </p>

        <h2>Quick Winner Summary</h2>

        <div className="not-prose my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">
                Overall Winner: Heybike Villain
              </h3>
              <p className="text-sm text-gray-600">
                Better motor, higher speed, more features. The clear performance
                leader.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                Budget Pick: Windone RS5
              </h3>
              <p className="text-sm text-gray-600">
                Lower price, simpler design. Good for riders who don&apos;t need
                maximum power.
              </p>
            </div>
          </div>
        </div>

        <div className="not-prose my-6">
          <CTAButton label="Check Heybike Villain Price" showDisclosure />
        </div>

        <h2>Specs Comparison Table</h2>

        <p>
          Let&apos;s start with the numbers side by side. This gives you an
          immediate sense of where each bike excels and where it compromises.
        </p>

        <div className="not-prose my-6">
          <ComparisonTable
            productName="Heybike Villain"
            productMotor="4,160W"
            productTorque="190 N·m"
            productTopSpeed="45 mph"
            productRange="50 mi (claimed)"
            productPrice="~$1,299"
            competitors={[
              {
                name: "Windone RS5",
                motor: "2,200W",
                torque: "—",
                topSpeed: "37 mph",
                range: "45 mi",
                price: "TBD (lower tier)",
              },
            ]}
          />
        </div>

        <p>
          The spec gap is immediately apparent. The Villain has nearly double
          the motor power and offers a top speed 8 mph higher. But specs don&apos;t
          tell the whole story — let&apos;s dig into what these differences actually
          mean for riding.
        </p>

        <h2>Motor: Mid-Drive vs Hub Motor</h2>

        <p>
          This is the most fundamental difference between these two bikes, and
          it affects everything from power delivery to maintenance.
        </p>

        <h3>Heybike Villain: Mid-Drive Motor</h3>
        <p>
          The Villain uses a 4,160W mid-drive motor that powers the rear wheel
          through the chain and drivetrain — just like a motorcycle. This design
          means the motor works <em>with</em> the bike&apos;s gears rather than
          independently. The result: better hill-climbing, more responsive
          acceleration, and a more natural riding feel. The 190 N·m torque
          figure is genuinely impressive for this price range.
        </p>

        <h3>Windone RS5: Hub Motor</h3>
        <p>
          The RS5 uses a 2,200W hub motor built directly into the rear wheel.
          Hub motors are simpler, require less maintenance (no chain wear from
          motor torque), and tend to run quieter. The trade-off is less power
          and a less natural power delivery feel. At 2,200W, the RS5 has enough
          power for casual trail riding but will struggle on steeper grades
          where the Villain excels.
        </p>

        <h3>What This Means for You</h3>
        <p>
          If you ride primarily on flat trails and moderate terrain, the RS5&apos;s
          hub motor is perfectly adequate and runs quieter. If you encounter
          hills, want stronger acceleration, or prefer a more engaging ride
          feel, the Villain&apos;s mid-drive motor is meaningfully superior.
        </p>

        <h2>Top Speed Comparison</h2>

        <p>
          The Heybike Villain claims 45 mph and has been independently tested
          at approximately 44.3 mph — an impressively honest spec. The Windone
          RS5 claims 37 mph, which in real-world conditions may be closer to
          33-35 mph depending on rider weight and terrain.
        </p>

        <p>
          That 8+ mph difference is significant. At higher speeds, the Villain
          feels substantially more capable. For trail riding where you&apos;re
          rarely pushing top speed, the difference matters less. For open
          terrain and more aggressive riding, the Villain&apos;s extra speed is a
          real advantage.
        </p>

        <h2>Range: The Honest Assessment</h2>

        <p>
          Both bikes advertise ranges that real-world riding won&apos;t match. This
          is standard for the electric dirt bike category.
        </p>

        <p>
          <strong>Heybike Villain:</strong> Claims up to 50 miles; real-world
          mixed-terrain testing shows 15-25 miles. The high torque output
          consumes significant energy, especially during hill climbs and
          aggressive acceleration.
        </p>

        <p>
          <strong>Windone RS5:</strong> Claims up to 45 miles. With its lower
          power output, the RS5 likely achieves somewhat better real-world range
          relative to its claim — perhaps 18-28 miles on mixed terrain. The
          lower power draw is the primary reason.
        </p>

        <p>
          <strong>The trade-off is clear:</strong> more power means less range.
          This is physics, not a defect. Choose based on what matters more to
          you — power or distance.
        </p>

        <h2>Build Quality and Design</h2>

        <p>
          Both bikes are solidly built for their price range, but there are
          differences worth noting.
        </p>

        <p>
          The Villain uses a carbon steel frame rated for 265 lb payload, with
          full hydraulic suspension (150mm front travel + rear nitrogen/air
          shock) and hydraulic disc brakes. The RS5 has a simpler suspension
          setup and may use mechanical disc brakes depending on the
          configuration.
        </p>

        <p>
          The Villain also features an IPX6 waterproof rating, which provides
          protection against heavy rain and water splashes. This is a practical
          advantage for riders who don&apos;t always have the luxury of perfect
          weather.
        </p>

        <h2>Features Comparison</h2>

        <p>
          The Villain includes several features the RS5 lacks:
        </p>

        <div className="not-prose my-6">
          <table className="w-full bg-white rounded-xl border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-amber-700">
                  Villain
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                  RS5
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Motor type", "Mid-drive", "Hub"],
                ["Reverse gear", "Yes", "No"],
                ["App-tunable controller", "Yes", "No"],
                ["Hydraulic disc brakes", "Yes", "Likely mechanical"],
                ["Full suspension (F+R)", "Yes", "Basic"],
                ["Kill switch", "Magnetic", "Standard"],
                ["Waterproofing", "IPX6", "Not specified"],
              ].map(([feature, villain, rs5], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                    {feature}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">
                    {villain}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">
                    {rs5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The feature gap is significant. The reverse gear alone is a practical
          advantage that matters in real-world use. The app-tunable controller
          adds long-term value by letting you adjust the bike as your skills
          develop.
        </p>

        <h2>Noise Level</h2>

        <p>
          One area where the RS5 has an advantage: noise. Hub motors are
          inherently quieter than mid-drive motors. The Villain&apos;s motor is
          noticeably louder, particularly at higher RPMs. If you ride in
          residential areas or noise-sensitive environments, the RS5&apos;s quieter
          operation is a genuine benefit.
        </p>

        <h2>Price and Value</h2>

        <p>
          The Heybike Villain typically sells for $1,299–$1,399. The Windone
          RS5 pricing varies but is generally in a lower tier. The question is
          whether the Villain&apos;s higher price is justified by its features.
        </p>

        <p>
          For the price difference, you get: nearly double the motor power, a
          mid-drive vs. hub motor, higher top speed, reverse function,
          app-tunable controller, hydraulic disc brakes, and full hydraulic
          suspension. That&apos;s a substantial feature upgrade for a relatively
          modest price increase.
        </p>

        <h2>Pros and Cons of Each</h2>

        <h3>Heybike Villain</h3>

        <div className="not-prose my-4">
          <ProsCons
            pros={[
              "4,160W mid-drive motor — best power at this price",
              "190 N·m torque for strong hill-climbing",
              "Reverse gear adds real practicality",
              "App-tunable controller for power customization",
              "Full hydraulic suspension + disc brakes",
              "IPX6 waterproof rating",
            ]}
            cons={[
              "Higher price than the RS5",
              "Louder motor noise",
              "Real-world range well below claimed 50 miles",
              "Some accessories cost extra",
            ]}
          />
        </div>

        <h3>Windone RS5</h3>

        <div className="not-prose my-4">
          <ProsCons
            pros={[
              "Lower price point",
              "Quieter hub motor operation",
              "Potentially better real-world range",
              "Simpler maintenance (no drivetrain motor wear)",
            ]}
            cons={[
              "Significantly less power (2,200W vs. 4,160W)",
              "Lower top speed (37 vs. 45 mph)",
              "Fewer premium features (no reverse, no app control)",
              "Less capable on steep terrain",
            ]}
          />
        </div>

        <h2>Who Should Buy Which?</h2>

        <h3>Choose the Heybike Villain if:</h3>
        <ul>
          <li>You want maximum performance for your dollar</li>
          <li>You ride on hilly or challenging terrain</li>
          <li>You value features like reverse and app tuning</li>
          <li>You want a mid-drive motor at a budget price</li>
          <li>You plan to grow your riding skills and want room to upgrade power</li>
        </ul>

        <h3>Choose the Windone RS5 if:</h3>
        <ul>
          <li>Budget is your primary concern</li>
          <li>You ride on mostly flat, moderate terrain</li>
          <li>You prioritize quiet operation</li>
          <li>You want a simpler, lower-maintenance setup</li>
          <li>You don&apos;t need maximum speed or torque</li>
        </ul>

        <h2>The Bottom Line</h2>

        <p>
          For most riders, the Heybike Villain is the better buy. The price
          difference gets you nearly double the motor power, a fundamentally
          better motor design, and several practical features that improve the
          riding experience. The RS5 is a reasonable budget option, but the
          Villain&apos;s performance-per-dollar ratio is hard to beat.
        </p>

        <p>
          If you&apos;re on the fence, consider this: the Villain&apos;s app-tunable
          controller lets you dial the power down to RS5 levels while you
          learn, then crank it up as your skills improve. The RS5 doesn&apos;t give
          you that option in reverse — you can&apos;t add power that isn&apos;t there.
        </p>

        <div className="not-prose my-6">
          <CTAButton label="Check Heybike Villain Price" size="lg" showDisclosure />
        </div>

        <h2>Frequently Asked Questions</h2>

        <div className="not-prose my-6">
          <FAQ items={comparisonFAQ} />
        </div>
      </ArticleLayout>
    </>
  );
}
