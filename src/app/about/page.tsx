import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import PurposeSection from "@/components/sections/about/PurposeSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import PathwaysSection from "@/components/sections/about/PathwaysSection";
import InclusionBanner from "@/components/sections/home/InclusionBanner";
import CtaBanner from "@/components/sections/globals/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />
      <main>
        <AboutHero />
        <PurposeSection />
        <ValuesSection />
        <PathwaysSection />
        <InclusionBanner />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
