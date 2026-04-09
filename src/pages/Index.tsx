import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ServicesSection from "@/components/landing/ServicesSection";
import ClinicSection from "@/components/landing/ClinicSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BookingSection from "@/components/landing/BookingSection";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ClinicSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
