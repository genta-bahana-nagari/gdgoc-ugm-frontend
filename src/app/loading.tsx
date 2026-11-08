import { Inter } from "next/font/google";
import { FiLoader } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Loading() {
  return (
    <section
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg border border-gray-200 text-center">
        <div className="mb-8">
          <FiLoader
            className="w-16 h-16 mx-auto text-google-blue mb-4 animate-spin"
            size={48}
          />
        </div>

        <h2 className="text-xl font-medium text-gray-900 mb-2">
          Loading GDGOC
        </h2>
        <p className="text-gray-500">
          Fetching community data. Please wait.
        </p>
      </div>
    </section>
  );
}