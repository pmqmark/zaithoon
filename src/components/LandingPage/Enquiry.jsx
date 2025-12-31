import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const images = [
  "/images/h1.jpeg",
  "/images/h2.jpeg",
  "/images/h3.jpeg",
  "/images/h5.JPG",
  "/images/h4.jpeg",
  "/images/h6.JPG",
];

export default function Enquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e && e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please provide your name, email and phone number.");
      return;
    }

    const text = `Schedule a Visit Request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nMessage: ${message}`;

    const waUrl = `https://wa.me/919544844499?text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="schedule"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Schedule a Visit
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left agent card / image */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">
              <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className="w-full h-80"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i} className="h-80">
                    <div
                      className="w-full h-80 bg-center bg-cover"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded"
                required
              />

              <div className="flex gap-4">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-1/2 px-4 py-3 bg-white border border-gray-200 rounded"
                  aria-label="Check-in date"
                />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-1/2 px-4 py-3 bg-white border border-gray-200 rounded"
                  aria-label="Check-out date"
                />
              </div>

              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="sm:col-span-2 w-full px-4 py-3 bg-white border border-gray-200 rounded"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#b78659] cursor-pointer text-white rounded-md shadow"
              >
                Send Message via WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setCheckIn("");
                  setCheckOut("");
                  setMessage("");
                }}
                className="px-4 py-2 cursor-pointer bg-white border border-gray-200 rounded-md"
              >
                Reset
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              By submitting you'll be taken to WhatsApp to send the enquiry.
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
