import { Sparkles } from "lucide-react";

export default function InclusionBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-[#FEF9C3] text-slate-900 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-sm">
        <Sparkles className="text-[#F59E0B] shrink-0" size={48} />
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            A space to learn. A responsibility to care.
          </h3>
          <p className="mt-2 text-slate-700">
            We want every conversation and learning experience to be respectful,
            inclusive, and constructive. Be kind, give credit, and make room for
            people who are just getting started.
          </p>
        </div>
      </div>
    </section>
  );
}
