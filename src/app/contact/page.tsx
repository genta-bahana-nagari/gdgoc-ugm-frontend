import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactGuidance from "@/components/sections/contact/ContactGuidance";

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="contact" />
      <main>
        <ContactHero />
        <ContactFormSection />
        <ContactGuidance />
      </main>
      <Footer />
    </>
  );
}