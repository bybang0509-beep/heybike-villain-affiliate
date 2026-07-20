interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  compact?: boolean;
}

export default function FAQ({ items, compact = false }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group bg-gray-50 rounded-xl border border-gray-200"
        >
          <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm font-medium text-gray-900 hover:text-amber-600">
            {faq.question}
            <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <div
            className={`px-6 pb-4 text-gray-600 leading-relaxed ${
              compact ? "text-sm" : "text-sm"
            }`}
          >
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
