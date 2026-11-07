import { FiBookOpen, FiTerminal, FiUsers, FiShare2, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

import { apiFetch } from "@/lib/api";
import { Formats } from "@/types/formats";

const formatConfig: Record<
  string,
  {
    icon: React.ReactNode;
    bgClass: string;
    textClass: string;
    borderHoverClass: string;
    ctaLabel: string;
  }
> = {
  "study-groups": {
    icon: <FiBookOpen size={24} />,
    bgClass: "bg-blue-50",
    textClass: "text-google-blue",
    borderHoverClass: "hover:border-blue-300",
    ctaLabel: "Join a Study Group",
  },
  "hands-on-workshops": {
    icon: <FiTerminal size={24} />,
    bgClass: "bg-green-50",
    textClass: "text-google-green",
    borderHoverClass: "hover:border-green-300",
    ctaLabel: "See Upcoming Workshops",
  },
  "project-circles": {
    icon: <FiUsers size={24} />,
    bgClass: "bg-yellow-50",
    textClass: "text-google-yellow",
    borderHoverClass: "hover:border-yellow-300",
    ctaLabel: "Start a Circle",
  },
  "knowledge-sharing": {
    icon: <FiShare2 size={24} />,
    bgClass: "bg-gray-100",
    textClass: "text-gray-700",
    borderHoverClass: "hover:border-gray-300",
    ctaLabel: "Propose a Session",
  },
};

export default async function FormatsSection() {
  const result = await apiFetch<Formats[]>("/formats");
  const formatList = result.data;

  return (
    <section
      id="formats"
      className="bg-gray-50 border-y border-gray-100 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • WAYS TO LEARN
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            The format changes. The curiosity
            <br />
            stays.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formatList.map((item, i) => {
            const config = formatConfig[item.id] || {
              icon: <FiBookOpen size={24} />,
              bgClass: "bg-blue-50",
              textClass: "text-google-blue",
              borderHoverClass: "hover:border-blue-300",
              ctaLabel: "Learn More",
            };

            return (
              <div
                key={item.id || i}
                className={`bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md ${config.borderHoverClass} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${config.bgClass} ${config.textClass} flex items-center justify-center shrink-0`}
                    >
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Posisi CTA terbaik: Di bagian bawah kartu, sejajar dengan konten */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <Link
                    href={`/contact?format=${item.id}`} // atau arahkan ke section/modal yang sesuai
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${config.textClass} group transition-colors`}
                  >
                    <span>{config.ctaLabel}</span>
                    <FiArrowRight
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
