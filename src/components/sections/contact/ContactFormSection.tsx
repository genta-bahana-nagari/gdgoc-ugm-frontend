import {
  FiArrowRight,
  FiArrowUpRight,
  FiPlus,
  FiCode,
  FiHelpCircle,
} from "react-icons/fi";

export default function ContactFormSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Reasons & Updates */}
      <div className="lg:col-span-5 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What brings you here?
        </h2>
        <p className="text-gray-600 mb-6">
          Pick the closest topic in the form. We'll take it from there.
        </p>

        <button className="w-full text-left bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:bg-blue-100/50">
          <div className="w-8 h-8 rounded-full bg-google-blue text-white flex items-center justify-center shrink-0">
            <FiArrowUpRight size={18} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              Joining & learning
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Getting started, learning tracks, and participation
            </div>
          </div>
        </button>

        <button className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 transition-all hover:bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
            <FiPlus size={18} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Collaboration</div>
            <div className="text-sm text-gray-600 mt-1">
              Community activities and shared ideas
            </div>
          </div>
        </button>

        <button className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 transition-all hover:bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
            <FiCode size={18} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              Speaking & sharing
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Workshops, knowledge sharing, and mentorship
            </div>
          </div>
        </button>

        <button className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 transition-all hover:bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
            <FiHelpCircle size={18} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">General inquiry</div>
            <div className="text-sm text-gray-600 mt-1">
              Anything else you'd like to ask
            </div>
          </div>
        </button>

        <div className="bg-[#fef9c3] rounded-xl p-6 mt-8">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>{" "}
            STAY CURIOUS, STAY CONNECTED
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Looking for community updates?
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Follow @gdgoc.ugm for learning opportunities and what's happening in
            the community.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-google-blue hover:underline"
          >
            Find @gdgoc.ugm <FiArrowRight />
          </a>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:col-span-7 bg-[#f4f5f7] rounded-3xl p-8 lg:p-10 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Send us a message
          </h2>
          <FiArrowUpRight className="text-google-blue text-2xl" />
        </div>

        <p className="text-xs text-gray-500 mb-6">
          Fields marked * are required.
        </p>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                First name *
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Last name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email address *
            </label>
            <input
              type="email"
              placeholder="Where we can reply to you"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              University / organization
            </label>
            <input
              type="text"
              placeholder="Where you study or work (optional)"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Inquiry category *
            </label>
            <select className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm appearance-none text-gray-700">
              <option>Joining & learning</option>
              <option>Collaboration</option>
              <option>Speaking & sharing</option>
              <option>General inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Subject *
            </label>
            <input
              type="text"
              placeholder="A short introduction to your question"
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your message *
            </label>
            <textarea
              rows={5}
              placeholder="Tell us a little about your question or idea..."
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-google-blue focus:ring-1 focus:ring-google-blue outline-none bg-white text-sm resize-none"
            ></textarea>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-google-blue focus:ring-google-blue"
            />
            <label
              htmlFor="privacy"
              className="text-xs text-gray-600 leading-relaxed"
            >
              I agree that the information I share can be used to respond to
              this inquiry.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              type="button"
              className="bg-google-blue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              Send message <FiArrowRight />
            </button>
            <p className="text-[11px] text-gray-500 text-center sm:text-right max-w-[200px]">
              Please don't include passwords or sensitive personal information.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
