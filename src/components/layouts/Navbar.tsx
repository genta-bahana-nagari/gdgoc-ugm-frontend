import { apiFetch } from "@/lib/api";
import { Navigations } from "@/types/navigations";
import NavbarContent from "./NavbarContent";

export default async function Navbar({ activePage }: { activePage?: string }) {
  const result = await apiFetch<Navigations[]>("/navigation");
  const navList = result.data || [];

  return <NavbarContent navList={navList} activePage={activePage} />;
}
