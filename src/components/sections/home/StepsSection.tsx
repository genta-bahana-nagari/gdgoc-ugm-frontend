export default function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Follow your curiosity",
      desc: "Explore the tracks and find a topic you want to understand better.",
    },
    {
      num: "02",
      title: "Learn alongside others",
      desc: "Join a learning opportunity, ask a question, and share your perspective.",
    },
    {
      num: "03",
      title: "Turn learning into action",
      desc: "Practice through a project, exchange feedback, and pass something on.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • MAKE YOUR FIRST MOVE
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          You don't need to have it all
          <br />
          figured out.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="border-t-2 border-gray-100 pt-6">
            <div className="text-3xl font-bold text-google-blue mb-3">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
