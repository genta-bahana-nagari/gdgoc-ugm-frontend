import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { apiFetch } from "@/lib/api";
import { Track } from "@/types/track";

export default async function TracksSection() {
  const result = await apiFetch<Track[]>("/tracks");
  const tracks = result.data;

  return (
    <section id="tracks" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • FIND YOUR STARTING POINT
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            Many interests. One shared journey.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Follow what excites you. Explore a track, then connect the dots with
            others.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-google-blue font-medium hover:underline shrink-0"
        >
          See the overview <FiArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col hover:shadow-lg transition-shadow"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <span className="text-3xl">{track.icon}</span>
            </div>
            <span className="text-xs font-bold tracking-wider text-gray-400 mb-2">
              {track.tagline}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {track.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              {track.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {track.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-medium text-sm hover:underline mt-auto" style={{ color: `${track.color}` }}
            >
              Explore this track <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
