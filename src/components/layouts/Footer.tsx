import Link from "next/link";
import { FiInstagram, FiYoutube } from "react-icons/fi";

import { apiFetch } from "@/lib/api";
import { Navigations } from "@/types/navigations";

export default async function Footer() {
  const result = await apiFetch<Navigations[]>("/navigation");
  const navList = result?.data || [];

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
                  On Campus • Universitas Gadjah Mada
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 max-w-sm mt-2">
              A student community for curious minds, shared learning, and
              technology with purpose.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              {navList.map((value, i) => (
                <li key={i}>
                  <Link href={value.href} className="hover:text-google-blue">
                    {value.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4">
              Keep in the loop
            </h4>
            <a
              href="#"
              className="text-sm font-medium text-google-blue hover:underline block mb-4"
            >
              @gdgoc.ugm
            </a>
            <div className="flex gap-4 text-gray-500 mb-6">
              <a href="#" className="hover:text-google-blue">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-google-blue">
                <FiYoutube size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Learn together. Build together.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-gray-500">
          <div className="flex flex-col gap-8 w-fit">
            <p>© GDGoc Universitas Gadjah Mada • 2025/2026</p>
            <div className="flex h-1.5 w-full rounded-full overflow-hidden">
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
