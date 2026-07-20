import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Heybike<span className="text-yellow-400">Villain</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Independent review site for the Heybike Villain electric dirt
              bike. Not affiliated with Heybike.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#quick-verdict" className="hover:text-yellow-300 transition-colors">
                  Review
                </Link>
              </li>
              <li>
                <Link href="/#specifications" className="hover:text-yellow-300 transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-yellow-300 transition-colors">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-yellow-300 transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-yellow-300 transition-colors">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-300 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-yellow-300 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-yellow-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              Email: support@heybikevillain.shop
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p className="affiliate-disclosure">
            As an Amazon Associate, this site earns from qualifying purchases.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-yellow-300">
              Learn more
            </Link>
            .
          </p>
          <p className="mt-2">
            © 2026 HeybikeVillain.shop — Independent review site. Not affiliated
            with Heybike.
          </p>
        </div>
      </div>
    </footer>
  );
}
