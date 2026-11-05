import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • GDGOC UGM • 2025/2026
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
          Big ideas.<br />
          <span className="text-google-blue">Built together.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
          A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link 
            href="#tracks" 
            className="bg-google-blue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            Find your learning track <FiArrowRight />
          </Link>
          <Link 
            href="/about" 
            className="bg-white border border-gray-200 text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get to know us
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-3 text-sm text-gray-500 font-medium">
          <div className="flex -space-x-1">
            <div className="w-3 h-3 rounded-full bg-google-red border border-white"></div>
            <div className="w-3 h-3 rounded-full bg-google-yellow border border-white"></div>
            <div className="w-3 h-3 rounded-full bg-google-green border border-white"></div>
            <div className="w-3 h-3 rounded-full bg-google-blue border border-white"></div>
          </div>
          Different backgrounds. A shared curiosity.
        </div>
      </div>
      
      <div className="relative h-[400px] lg:h-[500px] bg-[#f8fbff] rounded-[2rem] overflow-hidden flex items-center justify-center border border-blue-50/50">
        {/* Abstract Illustration Placeholder based on the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 via-transparent to-yellow-50/50" />
        <div className="relative z-10 w-4/5 aspect-[4/3] rounded-xl bg-white/40 backdrop-blur-sm shadow-xl border border-white/60 p-6 flex flex-col justify-between">
          <div className="w-1/2 h-8 bg-blue-200/50 rounded-lg"></div>
          <div className="self-center text-4xl text-google-green font-mono font-bold bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
            &lt;/&gt;
          </div>
          <div className="self-end flex gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Built for curiosity</span>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-2xl rotate-12 blur-sm opacity-60" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100 rounded-full blur-md opacity-60" />
        <div className="absolute top-20 right-12 w-16 h-16 bg-yellow-100 rounded-lg -rotate-12 blur-sm opacity-60" />
      </div>
    </section>
  );
}