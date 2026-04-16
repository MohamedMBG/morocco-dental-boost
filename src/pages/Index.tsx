import { Suspense, lazy } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ServicesSection from "@/components/landing/ServicesSection";
import ClinicSection from "@/components/landing/ClinicSection";
import FAQSection from "@/components/landing/FAQSection";
import BookingSection from "@/components/landing/BookingSection";
import GoogleMapSection from "@/components/landing/GoogleMapSection";
import Footer from "@/components/landing/Footer";

const VideoSection = lazy(() => import("@/components/landing/VideoSection"));
const ReviewsSection = lazy(() => import("@/components/landing/ReviewsSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <div className="cv-auto">
          <ServicesSection />
        </div>
        <Suspense fallback={<div className="bg-background py-16 md:py-24" aria-hidden="true" />}>
          <VideoSection />
        </Suspense>
        <div className="cv-auto">
          <ClinicSection />
        </div>
        <Suspense fallback={<div className="bg-secondary/30 py-16 md:py-24" aria-hidden="true" />}>
          <ReviewsSection />
        </Suspense>
        <div className="cv-auto">
          <FAQSection />
        </div>
        <div className="cv-auto">
          <BookingSection />
        </div>
        <div className="cv-auto">
          <GoogleMapSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

