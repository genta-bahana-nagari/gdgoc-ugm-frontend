import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";
import { FaMagnifyingGlass, FaCode } from "react-icons/fa6";

import { apiFetch } from "@/lib/api";
import type { Track } from "@/types/track";

const iconTrack: Record<
  string,
  {
    icon: React.ReactNode;
    bgClass: string;
    textClass: string;
    borderHoverClass: string;
  }
> = {
  "research-discovery": {
    icon: <FaMagnifyingGlass size={24} />,
    bgClass: "bg-blue-50",
    textClass: "text-google-blue",
    borderHoverClass: "hover:border-blue-300",
  },
  "design-creativity": {
    icon: <IoIosColorPalette size={32} />,
    bgClass: "bg-yellow-50",
    textClass: "text-google-yellow",
    borderHoverClass: "hover:border-yellow-300",
  },
  development: {
    icon: <FaCode size={32} />,
    bgClass: "bg-green-50",
    textClass: "text-google-green",
    borderHoverClass: "hover:border-green-300",
  },
};

export default async function TracksSection() {
  const result = await apiFetch<Track[]>("/tracks");
  const tracks = result.data;

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
        {tracks.map((track, i) => {
          const config = iconTrack[track.id] || {
            icon: <FiBookOpen size={24} />,
            bgClass: "bg-blue-50",
            textClass: "text-google-blue",
            borderHoverClass: "hover:border-blue-300",
          };

          return (
            <div
              key={track.id || i}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48 flex items-center justify-center relative"
                style={{
                  backgroundColor: `${track.color}12`,
                }}
              >
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: `${track.color}25`,
                    color: track.color,
                  }}
                >
                  <span className="text-5xl">{config.icon}</span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 mb-2">
                  {track.tagline}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {track.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {track.description}
                </p>

                <div className="text-xs text-gray-500 mb-6 border-t border-gray-100 pt-4">
                  {track.skills.join(" · ")}
                </div>

                <Link
                  href={track.explore_link}
                  className="inline-flex items-center gap-2 font-medium text-sm hover:underline mt-auto"
                  style={{ color: track.color }}
                >
                  Explore this track <FiArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          From an interest to something you can show.
        </h3>
        <div className="border border-gray-200 rounded-xl overflow-x-auto bg-white shadow-sm">
          <table className="w-full text-left text-sm min-w-[640px]">
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
