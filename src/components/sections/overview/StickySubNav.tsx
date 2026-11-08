import Link from "next/link";

export default function StickySubNav() {
  return (
    <div className="border-y border-gray-100 bg-white sticky top-[73px] z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto text-sm font-medium text-gray-500">
        <Link
          href="#tracks"
          className="text-google-blue hover:text-blue-700 whitespace-nowrap transition-colors"
        >
          Learning tracks ↓
        </Link>
        <Link
          href="#formats"
          className="hover:text-gray-900 whitespace-nowrap transition-colors"
        >
          Learning formats ↓
        </Link>
        <Link
          href="#journey"
          className="hover:text-gray-900 whitespace-nowrap transition-colors"
        >
          Your learning journey ↓
        </Link>
        <Link
          href="#start"
          className="hover:text-gray-900 whitespace-nowrap transition-colors"
        >
          Find a starting point ↓
        </Link>
      </div>
    </div>
  );
}
