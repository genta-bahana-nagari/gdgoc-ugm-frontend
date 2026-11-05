import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
          • ABOUT GDGOC UGM
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
          Built by students.
          <br />
          <span className="text-google-blue">For what's next.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
          We're a community of learners and makers at Universitas Gadjah Mada,
          connected by curiosity and the belief that technology can do good.
        </p>
        <p className="mt-10 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          UNIVERSITAS GADJAH MADA • 2026/2027
        </p>
      </div>

      <div className="relative aspect-square max-h-[500px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#f4f8ff] to-[#fff9e6] shadow-sm flex items-center justify-center p-8">
        {/* Abstract 4-color Google bracket logo card based on image */}
        <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="w-48 h-48 bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.05)] flex items-center justify-center z-10">
            <svg viewBox="0 0 100 100" className="w-32 h-32">
              {/* Custom stylized Google dev logo */}
              <path
                d="M30,30 Q50,10 70,30 L50,50 Z"
                fill="#EA4335"
                transform="rotate(-45 50 50)"
              />
              <path
                d="M70,30 Q90,50 70,70 L50,50 Z"
                fill="#FBBC04"
                transform="rotate(45 50 50)"
              />
              <path
                d="M70,70 Q50,90 30,70 L50,50 Z"
                fill="#34A853"
                transform="rotate(135 50 50)"
              />
              <path
                d="M30,70 Q10,50 30,30 L50,50 Z"
                fill="#4285F4"
                transform="rotate(-135 50 50)"
              />
            </svg>
          </div>
          <div className="absolute inset-0 bg-grid-slate-100/[0.2] bg-[length:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>
      </div>
    </section>
  );
}
