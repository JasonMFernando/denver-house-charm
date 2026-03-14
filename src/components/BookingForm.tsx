import { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", checkin: "", checkout: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", checkin: "", checkout: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="hotel-section">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h2 className="hotel-heading">Book Your Stay</h2>
          <p className="hotel-subheading">Reserve your room at Denver House</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="hotel-card p-8 md:p-10">
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-hotel-gold/10 border border-hotel-gold/30 text-center review-card-enter">
                <p className="font-accent text-lg text-foreground">✓ Booking submitted successfully!</p>
                <p className="text-sm text-muted-foreground mt-1">We'll be in touch shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="hotel-label">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="hotel-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="hotel-label">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="hotel-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="hotel-label">Check-in</label>
                  <input
                    type="date"
                    required
                    value={form.checkin}
                    onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                    className="hotel-input"
                  />
                </div>
                <div>
                  <label className="hotel-label">Check-out</label>
                  <input
                    type="date"
                    required
                    value={form.checkout}
                    onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                    className="hotel-input"
                  />
                </div>
              </div>
              <button type="submit" className="hotel-btn-gold w-full py-4 text-base mt-2">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
