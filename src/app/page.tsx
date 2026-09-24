import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhyShop } from "../components/WhyShop";
import { FeaturedCategories } from "../components/FeaturedCategories";
import { CustomerFavorites } from "../components/CustomerFavorites";
import { PeakPerformance } from "../components/PeakPerformance";
import { Testimonials } from "../components/Testimonials";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-[#F7C948]/30 selection:text-[#F8F8F8]">
      {/* 1. Floating Rounded Navbar */}
      <Navbar />

      <main>
        {/* 2. Arc Hero Section (Single Rounded Container) */}
        <Hero />

        {/* 3. Why Shop Section */}
        <WhyShop />

        {/* 4. Featured Categories (2x2 Grid) */}
        <FeaturedCategories />

        {/* 5. Customer Favorites (Two-Column Spotlight Card) */}
        <CustomerFavorites />

        {/* 6. The Peak of Performance (Full-Width Showcase) */}
        <PeakPerformance />

        {/* 7. Testimonials (Phone Mockup + Map UI + Floating Review) */}
        <Testimonials />

        {/* 8. Priority CTA Section */}
        <CtaSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
