interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h3 className="font-semibold text-green-800 mb-4">Pros</h3>
        <ul className="space-y-3">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 mt-0.5">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 rounded-xl p-6 border border-red-100">
        <h3 className="font-semibold text-red-800 mb-4">Cons</h3>
        <ul className="space-y-3">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-red-500 mt-0.5">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
