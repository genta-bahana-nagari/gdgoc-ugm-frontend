import { FiUsers, FiTerminal, FiShare2 } from "react-icons/fi";

const methods = [
  {
    icon: FiUsers,
    title: "Study together",
    desc: "Work through foundations in peer learning sessions. Bring your questions, leave with a next step.",
    tag: "Study groups & guided practice",
  },
  {
    icon: FiTerminal,
    title: "Try it hands-on",
    desc: "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    tag: "Workshops & technical sessions",
  },
  {
    icon: FiShare2,
    title: "Share the process",
    desc: "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    tag: "Project circles & sharing sessions",
  },
];

export default function MoreThanClassroom() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • MORE THAN A CLASSROOM
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Less watching. More making.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Learn in a way that turns a new concept into something you can
            actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <method.icon className="text-2xl text-google-blue mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                {method.desc}
              </p>
              <div className="text-xs font-medium text-google-blue mt-auto">
                {method.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
