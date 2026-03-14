import locationImg from "@/assets/location.jpg";

const MapSection = () => {
  return (
    <section id="location" className="hotel-section bg-hotel-cream">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h2 className="hotel-heading">Our Location</h2>
          <p className="hotel-subheading">Nestled in a charming neighborhood</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img
              src={locationImg}
              alt="Aerial view of Denver House location"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Find Us Easily
            </h3>
            <p className="font-accent text-muted-foreground mb-3 leading-relaxed">
              Denver House is conveniently located and easy to reach. Whether you're arriving by car, taxi, or public transport, getting here is effortless.
            </p>
            <p className="text-muted-foreground mb-8">
              Find us easily on Google Maps.
            </p>
            <a
              href="https://maps.app.goo.gl/wmPxYNvi7ai8F5XJA"
              target="_blank"
              rel="noopener noreferrer"
              className="hotel-btn-primary"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
