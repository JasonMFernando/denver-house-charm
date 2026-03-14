import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import BookingForm from "@/components/BookingForm";
import MapSection from "@/components/MapSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <PhotoCarousel />
      </ScrollReveal>
      <ScrollReveal>
        <BookingForm />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
