import { BsStarFill } from "react-icons/bs";

export default function InclusionBanner() {
  return (
    <section className="w-full my-8">
      <div className="bg-[#eefcf1]">
        <div className="p-12 md:p-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <BsStarFill
            className="text-google-green shrink-0" size={48}
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center md:text-start">
              Different majors. Different starting points. A place for all of
              them.
            </h2>
            <p className="text-gray-700 text-center md:text-start">
              You don&apos;t have to be the most experienced person in the room.
              Curiosity, kindness, and a willingness to learn are a good place
              to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
