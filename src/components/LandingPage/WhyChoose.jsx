import React from "react";
import { motion } from "framer-motion";
import { HiHome, HiUsers, HiGift, HiPhone } from "react-icons/hi";

const points = [
  {
    title: "Ideal for NRIs",
    icon: <HiHome className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "A comfortable, private accommodation option tailored for visiting NRIs looking for a homely stay.",
  },
  {
    title: "Short Breaks on the Go",
    icon: <HiUsers className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Perfect for groups traveling together — a cosy spot to rest, refresh and regroup during long trips.",
  },
  {
    title: "Birthday & Celebration Space",
    icon: <HiGift className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Host intimate birthday parties or small celebrations with warm ambience and flexible spaces.",
  },
  {
    title: "Family & Friends Reunions",
    icon: <HiPhone className="text-[#b78659] w-12 h-12" />,
    subtitle:
      "Bring loved ones together for memorable gatherings in a private, comfortable setting.",
  },
];

function WhyChoose() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-md mb-6">
          Why Choose Us
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto mb-4">
          Why guests love staying at Zaithoon Villa
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Thoughtful amenities and flexible spaces make our villa ideal for
          different kinds of stays and small events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-4 px-4"
            >
              <div className="mt-1">{p.icon}</div>
              <h3 className="font-semibold text-lg md:text-xl mb-1 min-h-15">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {p.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
