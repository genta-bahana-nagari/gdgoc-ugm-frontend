"use client";

import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg border border-gray-200 text-center">
        {/* Icon */}
        <div className="mb-6">
          <IoCloseCircle
            className="w-16 h-16 mx-auto text-red-500 mb-2"
            size={64}
          />
        </div>

        {/* Heading & Description */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page not found
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Check
          the URL or navigate back below.
        </p>

        {/* Action Button */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-google-blue text-white font-medium py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer shadow-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
