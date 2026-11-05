"use client";
import { useState } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    q: "Is this only for computer science students?",
    a: "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.",
  },
  {
    q: "How can I find learning opportunities?",
    a: "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12"
    >
      <div className="md:col-span-4">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • A FEW GOOD QUESTIONS
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
          Wondering
          <br />
          where
          <br />
          to begin?
        </h2>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 text-google-blue font-medium hover:underline"
        >
          Ask us a question <FiArrowRight />
        </a>
      </div>

      <div className="md:col-span-8 flex flex-col">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 py-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-lg text-gray-900">
                {faq.q}
              </span>
              <FiChevronDown
                className={`text-gray-500 text-xl transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="mt-4 text-gray-600 leading-relaxed pr-8">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
