import { apiFetch } from "@/lib/api";
import { Value } from "@/types/value";
import { BiCode, BiHeart } from "react-icons/bi";
import { FiBookOpen, FiUsers } from "react-icons/fi";

const valuesConfig: Record<
  string,
  {
    icon: React.ReactNode;
    textClass: string;
  }
> = {
  "stay-curious": {
    icon: <FiBookOpen size={24} />,
    textClass: "text-google-blue",
  },
  "make-room": {
    icon: <FiUsers size={24} />,
    textClass: "text-google-green",
  },
  "learn-by-building": {
    icon: <BiCode size={24} />,
    textClass: "text-google-yellow",
  },
  "give-something-back": {
    icon: <BiHeart size={24} />,
    textClass: "text-gray-700",
  },
};

export default async function ValuesSection() {
  const result = await apiFetch<Value[]>("/values");
  const valueList = result.data;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • WHAT GUIDES US
        </span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Good technology starts with good
          <br />
          company.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueList.map((item, i) => {
          const config = valuesConfig[item.id] || {
            icon: <FiBookOpen size={24} />,
            textClass: "text-google-blue",
          };

          return (
            <div
              key={item.id || i}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col"
            >
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-2xl text-blue-600 mb-6 mt-2">
                {config.icon}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
