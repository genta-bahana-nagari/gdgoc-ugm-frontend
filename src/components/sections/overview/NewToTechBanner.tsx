import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NewToTechBanner() {
  return (
    <section id="start" className="max-w-6xl mx-auto px-6 pb-20 scroll-mt-24">
      <div className="bg-[#fef9c3] rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <span className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-2 block">
            • START WHERE YOU ARE
          </span>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            New to tech?
            <br />
            That's a starting point,
            <br />
            too.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg text-gray-800 mb-4">
            You don't need a finished portfolio or the perfect track choice.
            Pick a topic you're curious about. If you're unsure, tell us what
            interests you and we can start a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-google-blue font-semibold hover:underline"
          >
            Ask about getting started <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
