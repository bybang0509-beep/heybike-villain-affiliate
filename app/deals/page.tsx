import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { heybikeVillain } from "@/data/products";

export const metadata = {
  title: "Deals",
  description:
    "Check the latest Heybike Villain pricing and deals on Amazon. Find the best current price for this electric dirt bike.",
};

export default function DealsPage() {
  const product = heybikeVillain;

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">Heybike Villain Deals</h1>
        <p className="text-gray-600 mb-10">
          Current pricing and deal status for the Heybike Villain electric dirt
          bike.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <p className="text-sm text-gray-500 line-through">
              MSRP: ${product.price.msrp.toLocaleString()}
            </p>
            <p className="text-4xl font-bold text-yellow-500 mt-1">
              ${product.price.current.toLocaleString()}
            </p>
            <p className="text-sm text-green-600 font-medium mt-1">
              Save ${(product.price.msrp - product.price.current).toLocaleString()} vs MSRP
            </p>
          </div>

          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The Heybike Villain is commonly available at{" "}
            ${product.price.current.toLocaleString()}-${(product.price.current + 100).toLocaleString()} on Amazon.
            Prices may vary — check the current listing for the latest deal.
          </p>

          <CTAButton label="Check Current Price on Amazon" size="lg" showDisclosure />
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Price Context</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• MSRP: ${product.price.msrp.toLocaleString()}</li>
            <li>• Common street price: ${product.price.current.toLocaleString()}–${(product.price.current + 100).toLocaleString()}</li>
            <li>• The Villain offers strong value at this price — competing bikes with similar specs typically cost more</li>
          </ul>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          As an Amazon Associate, this site earns from qualifying purchases.{" "}
          <Link href="/affiliate-disclosure" className="underline">
            Learn more
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
