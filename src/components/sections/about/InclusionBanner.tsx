import { BsStarFill } from "react-icons/bs";

export default function InclusionBanner() {
  return (
    <section className="w-full my-8">
      <div className="bg-[#FFFBEB] text-slate-900">
        <div className="p-12 md:p-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <BsStarFill className="text-[#F59E0B] shrink-0" size={48} />
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight text-center md:text-start">
              A space to learn. A responsibility to care.
            </h3>
            <p className="mt-3 text-slate-700 text-base font-normal leading-relaxed text-center md:text-start">
              We want every conversation and learning experience to be
              respectful, inclusive, and constructive. Be kind, give credit, and
              make room for people who are just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
