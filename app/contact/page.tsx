export const metadata = {
  title: "Contact",
  description: "Get in touch with the HeybikeVillain.shop team.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Have a question, correction, or feedback? We&apos;d love to hear from
            you.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-gray-900 font-medium mb-1">Email</p>
            <p className="text-amber-600">support@heybikevillain.shop</p>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            We typically respond within 48 hours. Please note that we are an
            independent review site and cannot assist with Heybike product
            orders or support — please contact Heybike directly for those
            matters.
          </p>
        </div>
      </div>
    </div>
  );
}
