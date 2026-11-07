import { apiFetch } from "@/lib/api";
import { Value } from "@/types/value";

export default async function ValuesSection() {
  const result = await apiFetch<Value[]>("/values");
  const value = result.data;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • WHAT GUIDES US
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Good technology starts with good
          <br />
          company.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {value.map((value, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col"
          >
            <div
              className="absolute top-0 left-0 w-full h-1.5"
              style={{ backgroundColor: value.color }}
            />
            <span className="text-2xl text-gray-800 mb-6 mt-2">
              {value.icon}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
