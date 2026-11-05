export default function JourneySection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Explore a topic and find the questions you want to answer.",
    },
    {
      num: "02",
      title: "Practice",
      desc: "Try an exercise, work through a challenge, and ask for help.",
    },
    {
      num: "03",
      title: "Build",
      desc: "Apply your learning to a small idea with a clear purpose.",
    },
    {
      num: "04",
      title: "Share",
      desc: "Show your process, gather feedback, and help someone else.",
    },
  ];

  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • PROGRESS, NOT PERFECTION
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          A journey you can keep building on.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="border-t-2 border-gray-100 pt-6 relative">
            <div className="absolute -top-3 left-0 bg-white pr-4">
              <span className="text-3xl font-bold text-google-blue">
                {step.num}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
