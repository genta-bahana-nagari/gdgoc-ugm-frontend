import Link from "next/link";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { apiFetch } from "@/lib/api";
import { StatsData } from "@/types/stats";
import { Navigations } from "@/types/navigations";

export default async function Footer() {
  let statsResult, navResult;
  try {
    [statsResult, navResult] = await Promise.all([
      apiFetch<StatsData>("/stats"),
      apiFetch<Navigations[]>("/navigation"),
    ]);
  } catch (err: any) {
    // Provide fallback data so UI doesn't break
    statsResult = {
      data: {
        community_members: 0,
        workshops_held: 0,
        projects_shipped: 0,
        active_tracks: 0,
        university: "GDGOC UGM",
        founded_year: 2025,
        tagline: "Building the future of technology, one student developer at a time.",
        social: {
          instagram: "",
          linkedin: "",
          github: "",
        },
        city: "",
        country: "",
      },
    };
    navResult = {
      data: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Overview", href: "/overview" },
        { label: "Contact", href: "/contact" },
      ],
    };
  }

  const stats = statsResult.data;
  const navList = navResult.data || [];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-6 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="shrink-0"
              >
                <path
                  fill="#4285F4"
                  d="M22.5 12c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.3-1.9-6.2-4.6H2v2.9C3.9 20.7 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC04"
                  d="M5.8 14.1c-.2-.7-.4-1.4-.4-2.1s.2-1.4.4-2.1V7H2c-.7 1.5-1 3.2-1 5s.3 3.5 1 5l3.8-2.9z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.3c1.6 0 3.1.6 4.3 1.7l3.1-3.1C17.5 2.1 15 1 12 1 7.7 1 3.9 3.3 2 7l3.8 2.9c.9-2.7 3.3-4.6 6.2-4.6z"
                />
              </svg>
              <div className="leading-tight">
                <div className="text-base font-bold text-gray-900">
                  Google Developer Groups
                </div>
                <div className="text-sm text-gray-500">
                  On Campus • {stats.university}
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 max-w-sm mt-2">
              {stats.tagline || "Building the future of technology, one student developer at a time."} A student community for curious minds, shared
              learning, and technology with purpose.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              {navList.map((item, i) => (
                <li key={item.href || i}>
                  <Link href={item.href} className="hover:text-google-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">Keep in the loop</h4>
            <a
              href={`https://instagram.com/${stats.social.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-google-blue hover:underline block mb-4"
            >
              {stats.social.instagram || ""}
            </a>
            <div className="flex gap-4 text-gray-500 mb-6">
              <a
                href={`https://instagram.com/${stats.social.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-google-blue"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href={`https://linkedin.com/company/${stats.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-google-blue"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`https://github.com/${stats.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-google-blue"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              {stats.city || ""}, {stats.country || ""} • Est. {stats.founded_year}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-gray-500">
          <div className="flex flex-col gap-2">
            <p>
              © GDGoC {stats.university} • {stats.founded_year} / Present
            </p>
            <div className="flex h-1.5 w-32 rounded-full overflow-hidden">
              <div className="flex-1 bg-google-blue"></div>
              <div className="flex-1 bg-google-red"></div>
              <div className="flex-1 bg-google-yellow"></div>
              <div className="flex-1 bg-google-green"></div>
            </div>
          </div>
          <p>Made for the campus. Open to possibilities.</p>
        </div>
      </div>
    </footer>
  );
}