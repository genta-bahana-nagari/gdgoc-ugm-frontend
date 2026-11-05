import Link from "next/link";
import { FiArrowRight, FiCode } from "react-icons/fi";

export default function ProjectHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="bg-[#fef9c3] rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-6 right-6 text-google-yellow/40 text-4xl font-mono font-bold">
          &lt;/&gt;
        </div>
        <span className="text-xs font-bold tracking-wider text-gray-600 uppercase mb-6 block">
          IDEA → PROTOTYPE
        </span>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-google-red"></div>
            <div className="w-3 h-3 rounded-full bg-google-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-google-green"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
            A little less friction.
            <br />A better campus day.
          </h3>
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              Discover
            </span>
            <span className="px-3 py-1 bg-google-green/10 text-google-green text-xs font-medium rounded-full">
              Connect
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              Share
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>

        <div className="mt-8 text-xs text-gray-500 font-medium">
          EXAMPLE PROJECT BRIEF – NOT A LAUNCHED PRODUCT
        </div>
      </div>

      <div>
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • BUILD SOMETHING THAT MATTERS
        </span>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 mb-6">
          Your next project could start on campus.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          What if finding a study partner, sharing resources, or navigating
          campus felt easier? Small, familiar problems can be the beginning of
          meaningful work.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Bring research, design, and development together. Try an idea, get
          feedback, and make the next version better.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-google-blue font-medium hover:underline"
        >
          Explore project-based learning <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
