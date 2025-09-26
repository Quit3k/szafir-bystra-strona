// src/App.tsx

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AnnouncementBanner from "./components/AnnouncementBanner";
import PromiseSection from "./components/PromiseSection";
import ExperienceSection from "./components/ExperienceSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner"; // POPRAWIONY IMPORT

function App() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <AnnouncementBanner />
        <PromiseSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <CookieBanner /> {/* POPRAWIONA NAZWA KOMPONENTU */}
    </>
  );
}

export default App;