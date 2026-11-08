import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ContactGuidance() {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • A LITTLE GUIDANCE
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 mb-6">
            Help us understand your idea.
          </h2>
          <Link
            href="/overview"
            className="inline-flex items-center gap-2 text-google-blue font-medium hover:underline"
          >
            Explore the programs first <FiArrowRight />
          </Link>
        </div>

        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="border-b border-gray-200 py-6 first:pt-0">
            <h3 className="font-semibold text-gray-900 mb-2">
              For learning questions
            </h3>
            <p className="text-gray-600">
              Tell us which topic interests you and where you are in your
              learning journey.
            </p>
          </div>
          <div className="border-b border-gray-200 py-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              For collaborations
            </h3>
            <p className="text-gray-600">
              Share the idea, who it&apos;s for, and how you imagine working with the
              community.
            </p>
          </div>
          <div className="border-b border-gray-200 py-6 last:border-0">
            <h3 className="font-semibold text-gray-900 mb-2">
              Not sure which category fits?
            </h3>
            <p className="text-gray-600">
              Choose General inquiry. A clear question is always a good starting
              point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
