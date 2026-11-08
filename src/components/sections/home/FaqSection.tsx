import { apiFetch } from "@/lib/api";
import { Faqs } from "@/types/faqs";

import FaqSectionContent from "./FaqSectionContent";

export default async function FaqSection() {
  const result = await apiFetch<Faqs[]>("/faqs");
  const faqList = result.data || [];

  return <FaqSectionContent faqList={faqList}/>
}
