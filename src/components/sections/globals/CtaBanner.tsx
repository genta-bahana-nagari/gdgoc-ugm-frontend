import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CtaBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-[#f0f5ff] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • YOUR NEXT CHAPTER
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Bring your curiosity.
            <br />
            We&apos;ll build from there.
          </h2>
          <p className="mt-3 text-gray-600">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
          <Link
            href="/about"
            className="bg-google-blue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2 transition-colors"
          >
            Explore the overview <FiArrowRight />
          </Link>
          <Link
            href="#"
            className="text-google-blue font-medium text-center hover:underline text-sm py-2"
          >
            Talk to the community <FiArrowRight className="inline ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
