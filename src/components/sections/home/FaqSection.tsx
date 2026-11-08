import { apiFetch } from "@/lib/api";
import { Faqs } from "@/types/faqs";

import FaqSectionContent from "./FaqSectionContent";

export default async function FaqSection({
  setError,
}: {
  setError?: (e: string) => void;
}) {
  let faqList: Faqs[] = [];
  let error: string | undefined;

  try {
    const result = await apiFetch<Faqs[]>("/faqs");
    faqList = result.data;
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : "Failed to load FAQs";
    if (setError) setError(error);
  }

  return <FaqSectionContent faqList={faqList} error={error} />;
}
