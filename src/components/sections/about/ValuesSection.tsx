import { FiBookOpen, FiUserPlus, FiCode, FiHeart } from "react-icons/fi";

const values = [
  {
    icon: FiBookOpen,
    title: "Stay curious",
    desc: "Ask the extra question. Be willing to learn something outside your comfort zone.",
    color: "bg-google-blue",
  },
  {
    icon: FiUserPlus,
    title: "Make room",
    desc: "Welcome different perspectives, respect each other, and help people find their voice.",
    color: "bg-google-red",
  },
  {
    icon: FiCode,
    title: "Learn by building",
    desc: "Try a small experiment. Share the rough version. Let feedback guide what comes next.",
    color: "bg-google-yellow",
  },
  {
    icon: FiHeart,
    title: "Give something back",
    desc: "Share a resource, explain what clicked, or help someone take their next step.",
    color: "bg-google-green",
  },
];

export default function ValuesSection() {
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
        {values.map((val, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col"
          >
            {/* Top Accent Bar */}
            <div
              className={`absolute top-0 left-0 w-full h-1.5 ${val.color}`}
            />

            <val.icon className="text-2xl text-gray-800 mb-6 mt-2" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {val.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
