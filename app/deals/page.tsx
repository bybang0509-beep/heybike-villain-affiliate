import Image from "next/image";
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative w-full rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/lifestyle/heybike-villain-father-giving-gift.jpeg"
            alt="Father giving Heybike Villain as gift to son - perfect father-son bonding"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Heybike Villain Deals</h1>
        <p className="text-gray-600 mb-10">
          Current pricing and deal status for the Heybike Villain electric dirt
          bike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={product.images.gallery[0]}
              alt="Heybike Villain electric dirt bike"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
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

              <p className="text-gray-600 mb-8">
                The Heybike Villain is commonly available at{" "}
                ${product.price.current.toLocaleString()}–${(product.price.current + 100).toLocaleString()} on Amazon.
                Prices may vary — check the current listing for the latest deal.
              </p>

              <CTAButton label="Check Current Price on Amazon" size="lg" showDisclosure />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Price Context</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• MSRP: ${product.price.msrp.toLocaleString()}</li>
            <li>• Common street price: ${product.price.current.toLocaleString()}–${(product.price.current + 100).toLocaleString()}</li>
            <li>• The Villain offers strong value at this price — competing bikes with similar specs typically cost more</li>
          </ul>
        </div>

        {/* Accessories Banner */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-6">Heybike Villain Accessories</h2>
          <Link href="/go/buy-now" className="block group">
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/vilian-accessories.png"
                alt="Heybike Villain accessories and add-ons available on Amazon"
                width={1200}
                height={675}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-gray-600">
              Click the image above to view accessories on Amazon →
            </p>
          </Link>
          <p className="mt-2 text-xs text-gray-500 text-center">
            As an Amazon Associate, this site earns from qualifying purchases.
          </p>
        </div>

        {/* Product Highlights */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-6">Product Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.images.gallery.slice(1, 7).map((img, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={img}
                  alt={`Heybike Villain highlight ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">
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
