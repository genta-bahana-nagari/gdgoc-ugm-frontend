import { FiStar } from "react-icons/fi";

export default function InclusionBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-[#eefcf1] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6">
        <FiStar
          className="text-google-green shrink-0 text-5xl"
          fill="currentColor"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Different majors. Different starting points. A place for all of
            them.
          </h2>
          <p className="text-gray-700">
            You don't have to be the most experienced person in the room.
            Curiosity, kindness, and a willingness to learn are a good place to
            start.
          </p>
        </div>
      </div>
    </section>
  );
}
