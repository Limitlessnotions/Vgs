import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import ServicesSection from "@/components/about/ServicesSection";
import NewsletterSection from "@/components/about/NewsletterSection";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <AboutHero />

      <AboutContent />

      <ServicesSection />

      <NewsletterSection />

      <Footer />
    </main>
  );
}