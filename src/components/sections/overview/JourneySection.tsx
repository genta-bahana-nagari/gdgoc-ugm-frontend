import { apiFetch } from "@/lib/api";
import { Journey } from "@/types/journey";

export default async function JourneySection() {
  const result = await apiFetch<Journey[]>("/journey");
  const journeyList = result.data;

  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • PROGRESS, NOT PERFECTION
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          A journey you can keep building on.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {journeyList.map((item, i) => (
          <div key={i} className="border-t-2 border-gray-100 pt-6 relative">
            <div className="absolute -top-3 left-0 bg-white pr-4">
              <span className="text-3xl font-bold text-google-blue">
                0{item.step}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
