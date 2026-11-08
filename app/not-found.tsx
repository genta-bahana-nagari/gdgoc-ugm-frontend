import { Inter } from "next/font/google";
import { X } from "react-icons/si";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function NotFound() {
  return (
    <section
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg border border-gray-200 text-center">
        <div className="mb-6">
          <X
            className="w-12 h-12 mx-auto text-red-500 mb-4"
            size={48}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page not found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist. Check the URL or go back home.
        </p>

        <button
          onClick={() => window.history.back()}
          className="bg-google-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Back
        </button>

        <div className="mt-6 text-sm text-gray-500">
          <p>Available pages:</p>
          <ul className="list-disc list-inside space-y-1 max-w-md mx-auto">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
            <li><a href="/overview" className="text-blue-600 hover:underline">Overview</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}