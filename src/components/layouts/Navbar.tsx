"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Navbar({ activePage }: { activePage?: "home" | "about" | "overview" | "contact" }) {
  const [open, setOpen] = useState(false);
  
  const links = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Overview", href: "/overview", id: "overview" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 24 24" className="shrink-0">
            <path fill="#4285F4" d="M22.5 12c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8.1z"/>
            <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.3-1.9-6.2-4.6H2v2.9C3.9 20.7 7.7 23 12 23z"/>
            <path fill="#FBBC04" d="M5.8 14.1c-.2-.7-.4-1.4-.4-2.1s.2-1.4.4-2.1V7H2c-.7 1.5-1 3.2-1 5s.3 3.5 1 5l3.8-2.9z"/>
            <path fill="#EA4335" d="M12 5.3c1.6 0 3.1.6 4.3 1.7l3.1-3.1C17.5 2.1 15 1 12 1 7.7 1 3.9 3.3 2 7l3.8 2.9c.9-2.7 3.3-4.6 6.2-4.6z"/>
          </svg>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-gray-900">Google Developer Groups</div>
            <div className="text-xs text-gray-500">On Campus • Universitas Gadjah Mada</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive 
                    ? "text-google-blue font-medium bg-blue-50 px-5 py-1.5 rounded-full" 
                    : "text-gray-600 hover:text-gray-900 px-2"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link 
            href="/overview" 
            className="bg-google-blue hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
          >
            Find your track <FiArrowRight />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-800 font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/overview" className="bg-google-blue text-white text-center py-2 rounded-lg mt-2" onClick={() => setOpen(false)}>
            Find your track
          </Link>
        </div>
      )}
    </header>
  );
}