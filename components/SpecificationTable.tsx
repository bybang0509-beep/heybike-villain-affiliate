interface SpecRow {
  label: string;
  value: string;
}

interface SpecificationTableProps {
  specs: SpecRow[];
  note?: string;
}

export default function SpecificationTable({ specs, note }: SpecificationTableProps) {
  return (
    <div>
      {note && (
        <p className="text-sm text-gray-500 mb-4">{note}</p>
      )}
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full">
          <tbody>
            {specs.map((spec, i) => (
              <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/3 border-r border-gray-100">
                  {spec.label}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
