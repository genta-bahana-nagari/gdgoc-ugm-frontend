"use client"
import { BiSearch } from "react-icons/bi";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <section
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg border border-gray-200 text-center">
        <div className="mb-6">
          <BiSearch
            className="w-12 h-12 mx-auto text-google-blue mb-4"
            size={48}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          Unable to load the page data. This might be a temporary issue.
        </p>

        <button
          onClick={reset}
          className="bg-google-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    </section>
  );
}