import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="bg-[#fef9c3] rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-amber-400/40 text-3xl sm:text-4xl font-mono font-bold select-none">
          &lt;/&gt;
        </div>

        <span className="text-[11px] sm:text-xs font-bold tracking-wider text-gray-600 uppercase mb-4 sm:mb-6 block">
          IDEA → PROTOTYPE
        </span>

        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            A little less friction.
            <br />A better campus day.
          </h3>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              Discover
            </span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
              Connect
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              Share
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide">
          EXAMPLE PROJECT BRIEF – NOT A LAUNCHED PRODUCT
        </div>
      </div>

      <div className="px-2 sm:px-0">
        <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase block">
          - BUILD SOMETHING THAT MATTERS
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6">
          Your next project could start on campus.
        </h2>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
          What if finding a study partner, sharing resources, or navigating
          campus felt easier? Small, familiar problems can be the beginning of
          meaningful work.
        </p>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
          Bring research, design, and development together. Try an idea, get
          feedback, and make the next version better.
        </p>

        <Link
          href="#"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline text-sm sm:text-base"
        >
          Explore project-based learning <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
