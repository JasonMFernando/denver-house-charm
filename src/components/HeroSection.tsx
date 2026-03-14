import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Denver House exterior at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hotel-dark/60 via-hotel-dark/40 to-hotel-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="font-accent text-hotel-gold text-sm md:text-base tracking-[0.25em] uppercase mb-4 fade-in-up">
          Welcome to
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 fade-in-up-delay-1 leading-tight">
          Denver House
        </h1>
        <p className="font-accent text-lg md:text-xl text-primary-foreground/80 mb-10 fade-in-up-delay-2 max-w-xl mx-auto">
          A peaceful stay, where comfort meets elegance.
        </p>
        <div className="fade-in-up-delay-3">
          <a href="#booking" className="hotel-btn-gold text-base md:text-lg px-10 py-4">
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(38, 70%, 55%)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
