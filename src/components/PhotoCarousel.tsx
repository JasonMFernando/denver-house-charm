import { useState, useEffect, useCallback } from "react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";

const images = [
  { src: room1, alt: "Elegant hotel room" },
  { src: room2, alt: "Luxury marble bathroom" },
  { src: room3, alt: "Cozy lounge with fireplace" },
  { src: room4, alt: "Breakfast dining area" },
  { src: room5, alt: "Garden terrace at dusk" },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery" className="hotel-section bg-hotel-cream">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h2 className="hotel-heading">Our Gallery</h2>
          <p className="hotel-subheading">Experience the warmth and charm of Denver House</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/10]" style={{ boxShadow: "var(--shadow-elevated)" }}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center transition-all hover:bg-card hover:scale-110"
            style={{ boxShadow: "var(--shadow-soft)" }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center transition-all hover:bg-card hover:scale-110"
            style={{ boxShadow: "var(--shadow-soft)" }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-hotel-gold w-8" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
