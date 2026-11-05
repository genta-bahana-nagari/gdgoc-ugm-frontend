import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NotJustLearning() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • A CAMPUS, A COMMUNITY.
        </span>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
          Not just learning tech.
          <br />
          Finding your people.
        </h2>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-google-blue font-medium hover:underline"
        >
          More about GDGoc UGM <FiArrowRight />
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings
          students together around one simple idea: we can go further when we
          learn with each other.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          From your first line of code to your next product idea, there's room
          to ask questions, share what you know, and try something new.
        </p>
        <div className="flex gap-2">
          {["Student-led", "Peer-powered", "Curiosity-first"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
