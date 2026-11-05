import { FiBookOpen, FiTerminal, FiUsers, FiShare2 } from "react-icons/fi";

export default function FormatsSection() {
  return (
    <section
      id="formats"
      className="bg-gray-50 border-y border-gray-100 py-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-google-blue uppercase">
            • WAYS TO LEARN
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            The format changes. The curiosity
            <br />
            stays.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-google-blue flex items-center justify-center shrink-0">
              <FiBookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Study groups
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Build foundations with peers. Work through a topic, compare
                approaches, and make space for questions.
              </p>
              <div className="text-xs font-medium text-google-blue">
                Best for - Learning the fundamentals
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 text-google-green flex items-center justify-center shrink-0">
              <FiTerminal size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hands-on workshops
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get introduced to a tool or method, follow a practical exercise,
                and take away something to keep exploring.
              </p>
              <div className="text-xs font-medium text-google-blue">
                Best for - Trying something new
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-50 text-google-yellow flex items-center justify-center shrink-0">
              <FiUsers size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Project circles
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Connect research, design, and development around a shared
                problem. Learn through making and feedback.
              </p>
              <div className="text-xs font-medium text-google-blue">
                Best for - Putting skills into practice
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
              <FiShare2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Knowledge sharing
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Walk through an idea, share a lesson from your process, and
                discover how other students approach their work.
              </p>
              <div className="text-xs font-medium text-google-blue">
                Best for - Exchanging perspectives
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
