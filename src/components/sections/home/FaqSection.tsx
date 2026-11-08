import { apiFetch } from "@/lib/api";
import { Faqs } from "@/types/faqs";

import FaqSectionContent from "./FaqSectionContent";

export default async function FaqSection({
  error,
  setError,
}: {
  error?: string;
  setError?: (e: string) => void;
}) {
  let faqList: Faqs[] = [];
  let errorMessage = "";

  try {
    const result = await apiFetch<Faqs[]>("/faqs");
    faqList = result.data;
  } catch (err: any) {
    errorMessage = err.message || "Failed to load FAQs";
    if (setError) setError(errorMessage);
  }

  return <FaqSectionContent faqList={faqList} error={errorMessage} />;
}
}
