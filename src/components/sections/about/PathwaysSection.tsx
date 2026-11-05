import { FiArrowRight } from "react-icons/fi";

const pathways = [
  {
    title: "Come as a learner",
    desc: "Explore a topic, join a discussion, and ask the question that's been on your mind.",
  },
  {
    title: "Grow as a collaborator",
    desc: "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: "Give back as a contributor",
    desc: "Share knowledge, support a learning session, or bring an idea for the community.",
  },
];

export default function PathwaysSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • PEOPLE, NOT LABELS
        </span>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 mb-6">
          There's more
          <br />
          than one way to
          <br />
          contribute.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can be learning one day and helping someone else the next. A
          community grows through both.
        </p>
      </div>

      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="flex flex-col">
          {pathways.map((p, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-6 first:pt-0 last:border-0"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 text-google-blue font-medium hover:underline"
        >
          Let's talk about getting involved <FiArrowRight />
        </a>
      </div>
    </section>
  );
}
