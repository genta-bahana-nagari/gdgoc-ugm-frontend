import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesRow from "@/components/sections/home/FeaturesRow";
import NotJustLearning from "@/components/sections/home/NotJustLearning";
import TracksSection from "@/components/sections/home/TracksSection";
import MoreThanClassroom from "@/components/sections/home/MoreThanClassroom";
import ProjectHighlight from "@/components/sections/home/ProjectHighlight";
import StepsSection from "@/components/sections/home/StepsSection";
import InclusionBanner from "@/components/sections/home/InclusionBanner";
import FaqSection from "@/components/sections/home/FaqSection";
import CtaBanner from "@/components/sections/globals/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturesRow />
        <NotJustLearning />
        <TracksSection />
        <MoreThanClassroom />
        <ProjectHighlight />
        <StepsSection />
        <InclusionBanner />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
