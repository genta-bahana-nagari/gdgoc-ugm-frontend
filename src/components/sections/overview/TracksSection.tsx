import Link from "next/link";
import { FiArrowRight, FiSearch, FiPenTool, FiCode } from "react-icons/fi";

export default function TracksSection() {
  return (
    <section id="tracks" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • EXPLORE YOUR INTERESTS
        </span>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
          Three ways in. Plenty of ways
          <br />
          forward.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          These pathways are starting points, not boxes. Follow one deeply or
          bring different skills together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
          <div className="h-48 bg-blue-50/50 flex items-center justify-center relative">
            <div className="w-24 h-24 bg-blue-100/80 rounded-2xl flex items-center justify-center text-google-blue shadow-sm">
              <FiSearch size={40} />
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-2">
              EXPLORE THE WHY
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Research & discovery
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
              Ask better questions, understand people, and turn insight into a
              clear problem worth solving.
            </p>
            <div className="text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
              Problem framing · User research · Product thinking
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-medium text-sm text-google-blue hover:underline mt-auto"
            >
              Explore this track <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
          <div className="h-48 bg-yellow-50/50 flex items-center justify-center relative">
            <div className="w-24 h-24 bg-yellow-100/80 rounded-2xl flex items-center justify-center text-google-yellow shadow-sm">
              <FiPenTool size={40} />
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-2">
              MAKE IT MEANINGFUL
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Design & creativity
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
              Translate ideas into thoughtful experiences, from a first sketch
              to a prototype people can use.
            </p>
            <div className="text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
              UI/UX · Visual storytelling · Prototyping
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-medium text-sm text-google-blue hover:underline mt-auto"
            >
              Explore this track <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
          <div className="h-48 bg-green-50/50 flex items-center justify-center relative">
            <div className="w-24 h-24 bg-green-100/80 rounded-2xl flex items-center justify-center text-google-green shadow-sm">
              <FiCode size={40} />
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-2">
              BRING IDEAS TO LIFE
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Development
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
              Learn the tools, write the code, and build useful things with
              people who enjoy figuring it out.
            </p>
            <div className="text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
              Web & mobile · Cloud · AI foundations
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-medium text-sm text-google-blue hover:underline mt-auto"
            >
              Explore this track <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          From an interest to something you can show.
        </h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-medium w-1/4">Pathway</th>
                <th className="px-6 py-4 font-medium w-1/3">
                  What you can practice
                </th>
                <th className="px-6 py-4 font-medium">A possible outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Research & discovery
                </td>
                <td className="px-6 py-4">
                  Listening, problem framing, and testing assumptions
                </td>
                <td className="px-6 py-4">
                  A research insight and a focused problem brief
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Design & creativity
                </td>
                <td className="px-6 py-4">
                  Ideation, user flows, and prototype feedback
                </td>
                <td className="px-6 py-4">
                  An interactive prototype and a design story
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900">
                  Development
                </td>
                <td className="px-6 py-4">
                  Coding, testing, and connecting tools
                </td>
                <td className="px-6 py-4">
                  A working demo with a clear explanation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Illustrative learning outcomes. Topics and opportunities are shared
          through community updates.
        </p>
      </div>
    </section>
  );
}
