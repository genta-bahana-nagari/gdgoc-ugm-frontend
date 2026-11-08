import {
  FiArrowRight,
  FiArrowUpRight,
  FiPlus,
  FiHelpCircle,
  FiBookOpen,
} from "react-icons/fi";
import { PiDiamondBold } from "react-icons/pi";

import { apiFetch } from "@/lib/api";
import { Inquiry } from "@/types/inquiry";

const inquiryConfig: Record<
  string,
  {
    icon: React.ReactNode;
  }
> = {
  "joining-learning": {
    icon: <FiArrowUpRight size={24} />,
  },
  collaboration: {
    icon: <FiPlus size={24} />,
  },
  "speaking-sharing": {
    icon: <PiDiamondBold size={24} />,
  },
  "general-inquiry": {
    icon: <FiHelpCircle size={24} />,
  },
};

export default async function ContactFormSection() {
  const result = await apiFetch<Inquiry[]>("/inquiry-categories");
  const inquiryList = result.data;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What brings you here?
        </h2>
        <p className="text-gray-600 mb-6">
          Pick the closest topic in the form. We&apos;ll take it from there.
        </p>
        {inquiryList.map((item, i) => {
          const config = inquiryConfig[item.id] || {
            icon: <FiBookOpen size={24} />,
          };

          return (
            <div key={item.id || i}>
              <button className="w-full text-left bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:bg-blue-100/50">
                <div className="w-8 h-8 text-google-blue flex items-center justify-center shrink-0">
                  {config.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </div>
                </div>
              </button>
            </div>
          );
        })}

        <div className="bg-[#fef9c3] rounded-xl p-6 mt-8">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>{" "}
            STAY CURIOUS, STAY CONNECTED
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Looking for community updates?
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Follow @gdgoc.ugm for learning opportunities and what&apos;s happening in
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
              {inquiryList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
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
              Please don&apos;t include passwords or sensitive personal information.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
