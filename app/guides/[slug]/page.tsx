import { notFound } from "next/navigation";
import { Metadata } from "next";

import HeybikeVillainReview2026 from "@/content/guides/heybike-villain-review-2026";
import HeybikeVillainVsWindoneRs5 from "@/content/guides/heybike-villain-vs-windone-rs5";
import HeybikeVillainSpecsExplained from "@/content/guides/heybike-villain-specs-explained";
import HeybikeVillainTopSpeedRangeTest from "@/content/guides/heybike-villain-top-speed-range-test";
import HeybikeVillainMotorTorqueExplained from "@/content/guides/heybike-villain-motor-torque-explained";
import HeybikeVillainBatteryChargingGuide from "@/content/guides/heybike-villain-battery-charging-guide";
import HeybikeVillainRidingTipsBeginners from "@/content/guides/heybike-villain-riding-tips-beginners";
import HeybikeVillainMaintenanceGuide from "@/content/guides/heybike-villain-maintenance-guide";
import HeybikeVillainAccessoriesMods from "@/content/guides/heybike-villain-accessories-mods";
import HeybikeVillainSafetyFeaturesExplained from "@/content/guides/heybike-villain-safety-features-explained";
import HeybikeVillainVsYozmaIn10Pro from "@/content/guides/heybike-villain-vs-yozma-in10-pro";
import HeybikeVillainCommuterGuide from "@/content/guides/heybike-villain-commuter-guide";
import HeybikeVillainOffRoadTrailGuide from "@/content/guides/heybike-villain-off-road-trail-guide";
import HeybikeVillainBuyingGuide2026 from "@/content/guides/heybike-villain-buying-guide-2026";
import HeybikeVillainColdWeatherGuide from "@/content/guides/heybike-villain-cold-weather-guide";

const articles: Record<
  string,
  { title: string; description: string; component: React.ComponentType }
> = {
  "heybike-villain-review-2026": {
    title: "Heybike Villain Review 2026: Is It Worth the Hype?",
    description:
      "Our comprehensive Heybike Villain review covers top speed, real-world range, motor performance, build quality, and whether this electric dirt bike is worth buying.",
    component: HeybikeVillainReview2026,
  },
  "heybike-villain-vs-windone-rs5": {
    title: "Heybike Villain vs Windone RS5: Which Electric Dirt Bike Wins?",
    description:
      "Side-by-side comparison of the Heybike Villain and Windone RS5 — motor, speed, range, price, and real-world performance.",
    component: HeybikeVillainVsWindoneRs5,
  },
  "heybike-villain-specs-explained": {
    title: "Heybike Villain Specs Explained: What Every Number Means",
    description:
      "A detailed breakdown of every Heybike Villain specification for real riders.",
    component: HeybikeVillainSpecsExplained,
  },
  "heybike-villain-top-speed-range-test": {
    title: "Heybike Villain Top Speed & Real-World Range Test",
    description:
      "Independent testing of the Heybike Villain's top speed and range.",
    component: HeybikeVillainTopSpeedRangeTest,
  },
  "heybike-villain-motor-torque-explained": {
    title: "How the 4160W Motor & 190Nm Torque Actually Feel",
    description:
      "A technical deep dive into the Heybike Villain's mid-drive motor.",
    component: HeybikeVillainMotorTorqueExplained,
  },
  "heybike-villain-battery-charging-guide": {
    title: "Heybike Villain Battery & Charging: Complete Guide",
    description:
      "Everything about the Heybike Villain's battery — charging times, care tips, and range.",
    component: HeybikeVillainBatteryChargingGuide,
  },
  "heybike-villain-riding-tips-beginners": {
    title: "Heybike Villain Riding Tips for Beginners",
    description: "Essential riding tips for new Heybike Villain owners.",
    component: HeybikeVillainRidingTipsBeginners,
  },
  "heybike-villain-maintenance-guide": {
    title: "Heybike Villain Maintenance Guide: Keep It Running Like New",
    description: "A complete maintenance checklist for the Heybike Villain.",
    component: HeybikeVillainMaintenanceGuide,
  },
  "heybike-villain-accessories-mods": {
    title: "Best Heybike Villain Accessories & Mods Worth Buying",
    description:
      "Worthwhile accessories and modifications for the Heybike Villain.",
    component: HeybikeVillainAccessoriesMods,
  },
  "heybike-villain-safety-features-explained": {
    title: "Heybike Villain Safety Features Explained: What Parents Should Know",
    description:
      "A parent-focused guide to the Heybike Villain's safety features.",
    component: HeybikeVillainSafetyFeaturesExplained,
  },
  "heybike-villain-vs-yozma-in10-pro": {
    title: "Heybike Villain vs Yozma IN10 Pro: Which Electric Dirt Bike Is Better?",
    description:
      "Side-by-side comparison of the Heybike Villain and Yozma IN10 Pro — motor, speed, range, price, and real-world performance.",
    component: HeybikeVillainVsYozmaIn10Pro,
  },
  "heybike-villain-commuter-guide": {
    title: "Heybike Villain Commuter Guide: Can You Use It for Daily Commutes?",
    description:
      "Everything you need to know about using the Heybike Villain for daily commuting — legal tips, range planning, and safety gear.",
    component: HeybikeVillainCommuterGuide,
  },
  "heybike-villain-off-road-trail-guide": {
    title: "Heybike Villain Off-Road & Trail Riding Guide",
    description:
      "Maximize your Heybike Villain on dirt, gravel, mud, and hills — terrain tips, suspension setup, and riding techniques.",
    component: HeybikeVillainOffRoadTrailGuide,
  },
  "heybike-villain-buying-guide-2026": {
    title: "Heybike Villain Buying Guide 2026: Everything You Need to Know",
    description:
      "Complete buying guide covering price, specs, real-world performance, honest limitations, and whether the Heybike Villain is right for you.",
    component: HeybikeVillainBuyingGuide2026,
  },
  "heybike-villain-cold-weather-guide": {
    title: "Heybike Villain Cold Weather & Winter Riding Guide",
    description:
      "How to ride and care for your Heybike Villain in cold weather — battery tips, tire adjustments, and winter storage advice.",
    component: HeybikeVillainColdWeatherGuide,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = articles[slug];
    if (!article) return {};
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
      },
    };
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const ArticleComponent = article.component;
  return <ArticleComponent />;
}
