import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

const images = [
  "/images/h1.jpeg",
  "/images/h2.jpeg",
  "/images/h3.jpeg",
  "/images/h5.JPG",
  "/images/h4.jpeg",
  "/images/h6.JPG",
];

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background carousel (absolute, z-0) */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 z-0"
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-screen w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${url})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden />

      {/* Stationary content on top of the carousel */}
      <div className="absolute inset-0 z-20 max-w-6xl mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-6 lg:gap-25 pointer-events-auto">
          {/* Left title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12"
          >
            <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight  drop-shadow-lg max-w-4xl">
              <span className="block">Elegant and Comfort</span>
              <span className="block">in a Modern Space</span>
            </h1>
          </motion.div>

          {/* Right card */}
          <div className="w-full lg:w-1/4 flex flex-col items-start gap-3 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-3 text-white text-sm md:text-base font-medium mb-3">
                <FiMapPin className="w-5 h-5 opacity-95" />
                <span className="leading-tight">
                  XJQ4+4QJ Muvattupuzha, Kerala
                </span>
              </div>

              <div className="flex gap-3 flex-nowrap justify-start w-full">
                <button
                  onClick={() => {
                    const el = document.getElementById("schedule");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    else {
                      window.location.href = "/";
                      setTimeout(() => {
                        const el2 = document.getElementById("schedule");
                        if (el2)
                          el2.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 350);
                    }
                  }}
                  className="px-6 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white uppercase tracking-wider text-sm shadow-sm hover:bg-white/20 transition-colors duration-200 whitespace-nowrap"
                >
                  Schedule a Visit
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("rooms");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    else {
                      window.location.href = "/";
                      setTimeout(() => {
                        const el2 = document.getElementById("rooms");
                        if (el2)
                          el2.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 350);
                    }
                  }}
                  className="px-4 py-2 sm:px-6 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white uppercase tracking-wider text-sm shadow-sm hover:bg-white/20 transition-colors duration-200 whitespace-nowrap"
                >
                  Explore Property
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom feature list */}
        <div className="absolute bottom-8 left-6 right-6 max-w-6xl mx-auto flex justify-between text-white/90 text-sm pointer-events-auto">
          <div>Spacious Rooms</div>
          <div>Private Garden</div>
          <div>Air Conditioning</div>
          <div>Signature Kitchen</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
