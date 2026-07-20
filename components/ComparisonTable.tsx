interface Competitor {
  name: string;
  motor: string;
  torque: string;
  topSpeed: string;
  range: string;
  price: string;
}

interface ComparisonTableProps {
  productName: string;
  productMotor: string;
  productTorque: string;
  productTopSpeed: string;
  productRange: string;
  productPrice: string;
  competitors: Competitor[];
}

export default function ComparisonTable({
  productName,
  productMotor,
  productTorque,
  productTopSpeed,
  productRange,
  productPrice,
  competitors,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            {["Model", "Motor", "Torque", "Top Speed", "Range", "Price"].map(
              (h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-amber-50 border-t border-amber-100">
            <td className="px-4 py-3 text-sm font-semibold text-gray-900">
              {productName}
            </td>
            <td className="px-4 py-3 text-sm text-gray-700">{productMotor}</td>
            <td className="px-4 py-3 text-sm text-gray-700">{productTorque}</td>
            <td className="px-4 py-3 text-sm text-gray-700">{productTopSpeed}</td>
            <td className="px-4 py-3 text-sm text-gray-700">{productRange}</td>
            <td className="px-4 py-3 text-sm font-semibold text-amber-700">
              {productPrice}
            </td>
          </tr>
          {competitors.map((comp) => (
            <tr key={comp.name} className="border-t border-gray-100">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                {comp.name}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">{comp.motor}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{comp.torque}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{comp.topSpeed}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{comp.range}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{comp.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
