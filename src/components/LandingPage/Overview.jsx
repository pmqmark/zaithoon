import React from "react";
import { motion } from "framer-motion";
import { MdHome, MdWifi, MdAcUnit, MdSpa } from "react-icons/md";

const features = [
  {
    title: "Spacious Rooms",
    icon: <MdHome className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Relax in large airy rooms with abundant natural light and generous space.",
  },
  {
    title: "Wi‑Fi",
    icon: <MdWifi className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "High-speed Wi‑Fi throughout the property for seamless connectivity.",
  },
  {
    title: "Air Conditioning",
    icon: <MdAcUnit className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Comfort-controlled environments with efficient A/C systems in every room.",
  },
  {
    title: "Serene Atmosphere",
    icon: <MdSpa className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Peaceful, quiet surroundings designed for relaxation and well-being.",
  },
];

function Overview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-md mb-6">
            Home Overview
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-xl mb-6">
            Luxury living where comfort meets timeless style, effortlessly
          </h2>

          <p className="text-gray-500 max-w-xl mb-8">
            Thoughtfully designed interiors with premium finishes and modern
            amenities for effortless, everyday living.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById("schedule");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              else {
                window.location.href = "/";
                setTimeout(() => {
                  const el2 = document.getElementById("schedule");
                  if (el2)
                    el2.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 350);
              }
            }}
            className="px-6 py-3 rounded-md bg-[#b78659] text-white text-sm uppercase tracking-wider shadow"
          >
            Schedule a visit
          </button>
        </motion.div>

        {/* Right: Features grid */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-lg">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 items-center text-center sm:text-left"
              >
                <div className="mt-1">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs mx-auto sm:mx-0">
                    {f.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
