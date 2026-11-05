import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import OverviewHero from "@/components/sections/overview/OverviewHero";
import StickySubNav from "@/components/sections/overview/StickySubNav";
import TracksSection from "@/components/sections/overview/TracksSection";
import FormatsSection from "@/components/sections/overview/FormatsSection";
import JourneySection from "@/components/sections/overview/JourneySection";
import NewToTechBanner from "@/components/sections/overview/NewToTechBanner";
import CtaBanner from "@/components/sections/globals/CtaBanner";

export default function OverviewPage() {
  return (
    <>
      <Navbar activePage="overview" />
      <main className="overflow-hidden">
        <OverviewHero />
        <StickySubNav />
        <TracksSection />
        <FormatsSection />
        <JourneySection />
        <NewToTechBanner />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
