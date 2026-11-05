import { FiZap, FiLink, FiTarget } from "react-icons/fi";

export default function FeaturesRow() {
  const features = [
    { icon: FiZap, text: "Learn by doing", color: "text-google-blue" },
    {
      icon: FiLink,
      text: "Connect across disciplines",
      color: "text-google-red",
    },
    { icon: FiTarget, text: "Build with purpose", color: "text-google-green" },
  ];

  return (
    <div className="border-y border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 w-full md:w-auto">
            <f.icon className={`text-xl ${f.color}`} />
            <span className="font-medium text-gray-800">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
