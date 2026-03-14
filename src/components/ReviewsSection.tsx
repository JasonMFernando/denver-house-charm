import { useState, useEffect } from "react";

interface Review {
  name: string;
  text: string;
  rating: number;
  id: number;
}

const STORAGE_KEY = "denver_house_reviews";

const getStoredReviews = (): Review[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>(getStoredReviews);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    const newReview: Review = { name, text, rating, id: Date.now() };
    setReviews([newReview, ...reviews]);
    setName("");
    setText("");
    setRating(0);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "text-hotel-gold" : "text-border"}>★</span>
    ));

  return (
    <section id="reviews" className="hotel-section">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h2 className="hotel-heading">Guest Reviews</h2>
          <p className="hotel-subheading">What our guests say about their stay</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <div className="hotel-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Leave a Review</h3>

              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-hotel-gold/10 border border-hotel-gold/30 text-center review-card-enter">
                  <p className="font-accent text-foreground">Thank you for your review!</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="hotel-label">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="hotel-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="hotel-label">Your Review</label>
                  <textarea
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="hotel-input min-h-[100px] resize-none"
                    placeholder="Tell us about your stay..."
                  />
                </div>
                <div>
                  <label className="hotel-label">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= (hoverRating || rating) ? "active" : ""}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`${star} star`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" className="hotel-btn-gold w-full py-3">
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          {/* Reviews list */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {reviews.length === 0 ? (
              <div className="hotel-card p-8 text-center">
                <p className="text-muted-foreground font-accent">No reviews yet. Be the first!</p>
              </div>
            ) : (
              reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="hotel-card p-6 review-card-enter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-lg font-semibold text-foreground">{review.name}</h4>
                    <div className="text-lg flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
