import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ServicesSection from "@/components/landing/ServicesSection";
import VideoSection from "@/components/landing/VideoSection";
import ClinicSection from "@/components/landing/ClinicSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import FAQSection from "@/components/landing/FAQSection";
import BookingSection from "@/components/landing/BookingSection";
import GoogleMapSection from "@/components/landing/GoogleMapSection";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <VideoSection />
      <ClinicSection />
      <ReviewsSection />
      <FAQSection />
      <BookingSection />
      <GoogleMapSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

