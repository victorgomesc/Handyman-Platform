import Footer from "@/components/Footer";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
