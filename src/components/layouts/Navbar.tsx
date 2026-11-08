import { apiFetch } from "@/lib/api";
import { Navigations } from "@/types/navigations";
import NavbarContent from "./NavbarContent";

export default async function Navbar({ activePage }: { activePage?: string }) {
  let navList: Navigations[] = [];

  try {
    const result = await apiFetch<Navigations[]>("/navigation");
    navList = result.data;
  } catch {
    // Provide default navigation so UI doesn't break
    navList = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Overview", href: "/overview" },
      { label: "Contact", href: "/contact" },
    ];
  }

  return <NavbarContent navList={navList} activePage={activePage} />;
}
