"use client";
import { useState, useMemo } from "react";
import { Faqs } from "@/types/faqs";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

export default function FaqSectionContent({ faqList }: { faqList: Faqs[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const categories = useMemo(() => {
    const categories = new Set<string>();
    faqList.forEach((faq) => faq.category && categories.add(faq.category));
    return categories;
  }, [faqList]);

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const filteredFaqList = selectedCategory
    ? faqList.filter((faq) => faq.category === selectedCategory)
    : faqList;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearCategoryFilter = () => {
    setSelectedCategory(undefined);
  };

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
        {categories.size > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs rounded-md cursor-pointer"
              onClick={handleClearCategoryFilter}
              title="Show all categories"
            >
              All
            </span>
            {Array.from(categories).map((category) => (
              <span
                key={category}
                className="px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer"
                style={{
                  backgroundColor:
                    category === "joining-learning"
                      ? "rgba(66, 133, 244, 0.15)"
                      : category === "collaboration"
                        ? "rgba(234, 67, 53, 0.15)"
                        : category === "speaking-sharing"
                          ? "rgba(52, 168, 83, 0.15)"
                          : "rgba(128, 128, 128, 0.15)",
                  borderColor:
                    category === "joining-learning"
                      ? "rgba(66, 133, 244, 0.4)"
                      : category === "collaboration"
                        ? "rgba(234, 67, 53, 0.4)"
                        : category === "speaking-sharing"
                          ? "rgba(52, 168, 83, 0.4)"
                          : "rgba(128, 128, 128, 0.4)",
                }}
                onClick={() => handleCategorySelect(category)}
              >
                {category.replace("-", " ")}
              </span>
            ))}
          </div>
        )}

        {filteredFaqList.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 py-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
            >
              <span className="font-semibold text-lg text-gray-900">
                {faq.question}
              </span>
              <FiChevronDown
                className={`text-gray-500 text-xl cursor-pointer transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="mt-4 text-gray-600 leading-relaxed pr-8">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}