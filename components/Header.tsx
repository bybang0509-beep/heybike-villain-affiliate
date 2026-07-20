"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Review", href: "/#quick-verdict" },
  { label: "Specifications", href: "/#specifications" },
  { label: "Features", href: "/#features" },
  { label: "Performance", href: "/#performance" },
  { label: "Comparison", href: "/#comparison" },
  { label: "FAQ", href: "/#faq" },
];

const guideLinks = [
  {
    label: "Heybike Villain Review 2026: Is It Worth the Hype?",
    href: "/guides/heybike-villain-review-2026",
  },
  {
    label: "Heybike Villain Specs Explained",
    href: "/guides/heybike-villain-specs-explained",
  },
  {
    label: "Top Speed & Real-World Range Test",
    href: "/guides/heybike-villain-top-speed-range-test",
  },
  {
    label: "4160W Motor & 190Nm Torque Deep Dive",
    href: "/guides/heybike-villain-motor-torque-explained",
  },
  {
    label: "Battery & Charging Complete Guide",
    href: "/guides/heybike-villain-battery-charging-guide",
  },
  {
    label: "Villain vs Windone RS5 Comparison",
    href: "/guides/heybike-villain-vs-windone-rs5",
  },
  {
    label: "Riding Tips for Beginners",
    href: "/guides/heybike-villain-riding-tips-beginners",
  },
  {
    label: "Maintenance Guide",
    href: "/guides/heybike-villain-maintenance-guide",
  },
  {
    label: "Best Accessories & Mods",
    href: "/guides/heybike-villain-accessories-mods",
  },
  {
    label: "Safety Features Explained",
    href: "/guides/heybike-villain-safety-features-explained",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0" aria-label="Heybike Villain Review">
            <span className="text-xl font-bold text-gray-900">
              Heybike<span className="text-amber-500">Villain</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setGuidesOpen(!guidesOpen)}
                onBlur={() => setTimeout(() => setGuidesOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                Guides <ChevronDown className="w-4 h-4" />
              </button>
              {guidesOpen && (
                <div className="absolute right-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {guideLinks.slice(0, 6).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/guides"
                    className="block px-4 py-2 text-sm font-medium text-amber-600 hover:bg-amber-50"
                  >
                    View All Guides →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/deals"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
            >
              Deals
            </Link>
          </nav>

          <div className="hidden lg:block">
            <a
              href="/go/buy-now"
              className="inline-flex items-center px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-sm"
            >
              Buy Now
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/guides"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600"
              >
                Guides
              </Link>
              <Link
                href="/deals"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600"
              >
                Deals
              </Link>
              <a
                href="/go/buy-now"
                className="mx-3 mt-2 text-center px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
