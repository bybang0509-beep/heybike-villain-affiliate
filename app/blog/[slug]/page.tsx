import { notFound } from "next/navigation";
import { Metadata } from "next";

import HeybikeVillainTeenRidingGuide2026 from "@/content/blog/heybike-villain-teen-riding-guide-2026";
import HeybikeVillainTopSpeedTest from "@/content/blog/heybike-villain-top-speed-test";
import HeybikeVillainOffRoadAdventureGuide from "@/content/blog/heybike-villain-off-road-adventure-guide";
import HeybikeVillainBatteryRangeExplained from "@/content/blog/heybike-villain-battery-range-explained";
import HeybikeVillainParentsSafetyGuide from "@/content/blog/heybike-villain-parents-safety-guide";
import HeybikeVillainBestModsUpgrades from "@/content/blog/heybike-villain-best-mods-upgrades";
import HeybikeVillainMaintenanceChecklist from "@/content/blog/heybike-villain-maintenance-checklist";
import HeybikeVillainVsCompetitors2026 from "@/content/blog/heybike-villain-vs-competitors-2026";

const articles: Record<
  string,
  { title: string; description: string; component: React.ComponentType }
> = {
  "heybike-villain-teen-riding-guide-2026": {
    title: "Heybike Villain Teen Riding Guide 2026: Everything Parents Need to Know",
    description:
      "Complete guide for parents buying the Heybike Villain for teenage riders — safety, settings, and supervision tips.",
    component: HeybikeVillainTeenRidingGuide2026,
  },
  "heybike-villain-top-speed-test": {
    title: "Heybike Villain Top Speed Test: How Fast Does It Really Go?",
    description:
      "Independent speed testing of the Heybike Villain — real numbers from real riders.",
    component: HeybikeVillainTopSpeedTest,
  },
  "heybike-villain-off-road-adventure-guide": {
    title: "Heybike Villain Off-Road Adventure Guide: Trail Riding for Beginners",
    description:
      "How to take your Heybike Villain off-road — terrain tips, riding techniques, and the best trails to explore.",
    component: HeybikeVillainOffRoadAdventureGuide,
  },
  "heybike-villain-battery-range-explained": {
    title: "Heybike Villain Battery & Range: How Far Can You Really Go?",
    description:
      "Real-world battery life and range testing — charging tips, range factors, and how to maximize your ride time.",
    component: HeybikeVillainBatteryRangeExplained,
  },
  "heybike-villain-parents-safety-guide": {
    title: "Heybike Villain Safety Guide for Parents: What You Need to Know",
    description:
      "A parent-focused safety guide covering the Villain's safety features, supervision tips, and age-appropriate riding.",
    component: HeybikeVillainParentsSafetyGuide,
  },
  "heybike-villain-best-mods-upgrades": {
    title: "Best Heybike Villain Mods & Upgrades in 2026",
    description:
      "Top accessories and modifications that actually improve your Heybike Villain riding experience.",
    component: HeybikeVillainBestModsUpgrades,
  },
  "heybike-villain-maintenance-checklist": {
    title: "Heybike Villain Maintenance Checklist: Keep Your Bike Running Like New",
    description:
      "Simple maintenance routine to extend the life of your Heybike Villain and prevent costly repairs.",
    component: HeybikeVillainMaintenanceChecklist,
  },
  "heybike-villain-vs-competitors-2026": {
    title: "Heybike Villain vs Competitors: Which Electric Dirt Bike Should You Buy?",
    description:
      "Side-by-side comparison of the Heybike Villain against top competitors — specs, price, and real-world performance.",
    component: HeybikeVillainVsCompetitors2026,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      siteName: "HeybikeVillain.shop",
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();
  const Comp = article.component;
  return <Comp />;
}
