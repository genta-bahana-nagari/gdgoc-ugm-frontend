import Link from "next/link";

export default function AboutCtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#4285F4]">
            • YOUR NEXT CHAPTER
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            Bring your curiosity. We&apos;ll build from there.
          </h2>
          <p className="mt-2 text-slate-600">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[220px]">
          <Link
            href="/#tracks"
            className="bg-[#4285F4] text-white text-center font-medium px-5 py-3 rounded-xl hover:shadow-lg transition"
          >
            Explore the overview →
          </Link>
          <a
            href="#"
            className="text-center text-[#4285F4] font-medium hover:underline"
          >
            Talk to the community →
          </a>
        </div>
      </div>
    </section>
  );
}
