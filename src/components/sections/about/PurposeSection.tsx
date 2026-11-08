export default function PurposeSection() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • WHY WE COME TOGETHER
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            A bridge from
            <br />
            <span className="text-google-blue">&quot;I wonder&quot;</span> to
            <br />
            <span className="text-google-blue">&quot;I made this.&quot;</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Learning feels different when there&apos;s someone to exchange ideas
            with, a problem you care about, and the space to give it a try.
          </p>
          <p>
            That&apos;s the spirit of Google Developer Groups on Campus at UGM. We
            create room for students to explore technology, develop practical
            skills, and learn from one another.
          </p>
          <p>
            Our campus is the starting point. The questions we ask and the
            things we build can reach beyond it.
          </p>
        </div>
      </div>
    </section>
  );
}
