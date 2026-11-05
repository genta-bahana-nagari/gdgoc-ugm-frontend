import Link from "next/link";
import { FiArrowRight, FiSearch, FiPenTool, FiCode } from "react-icons/fi";

const tracks = [
  {
    icon: FiSearch,
    iconColor: "text-google-blue",
    bgColor: "bg-blue-50",
    tag: "EXPLORE THE WHY",
    title: "Research & discovery",
    desc: "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    tags: ["Problem framing", "User research", "Product thinking"],
    linkColor: "text-google-blue",
  },
  {
    icon: FiPenTool,
    iconColor: "text-google-yellow",
    bgColor: "bg-yellow-50",
    tag: "MAKE IT MEANINGFUL",
    title: "Design & creativity",
    desc: "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    tags: ["UI/UX", "Visual storytelling", "Prototyping"],
    linkColor: "text-google-yellow",
  },
  {
    icon: FiCode,
    iconColor: "text-google-green",
    bgColor: "bg-green-50",
    tag: "BRING IDEAS TO LIFE",
    title: "Development",
    desc: "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    tags: ["Web & mobile", "Cloud", "AI foundations"],
    linkColor: "text-google-green",
  },
];

export default function TracksSection() {
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
              className={`w-14 h-14 rounded-xl ${track.bgColor} flex items-center justify-center mb-6`}
            >
              <track.icon className={`text-2xl ${track.iconColor}`} />
            </div>
            <span className="text-xs font-bold tracking-wider text-gray-400 mb-2">
              {track.tag}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {track.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              {track.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {track.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="#"
              className={`inline-flex items-center gap-2 font-medium text-sm ${track.linkColor} hover:underline mt-auto`}
            >
              Explore this track <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
