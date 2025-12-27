import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rooms = [
  {
    key: "living",
    title: "Living Room",
    description:
      "A cozy, social hub with plush seating and entertainment. Ideal for relaxing, gatherings, and family time.",
    image: "/images/h1.jpeg",
  },
  {
    key: "dining",
    title: "Dining Room",
    description:
      "An elegant dining space with a large table and ambient lighting — perfect for dinners and entertaining guests.",
    image: "/images/h3.jpeg",
  },
  {
    key: "kitchen",
    title: "Kitchen",
    description:
      "Modern, fully-equipped kitchen with premium appliances, generous counter space, and smart storage solutions.",
    image: "/images/k2.jpeg",
  },
  {
    key: "master",
    title: "Master Bedroom",
    description:
      "Spacious bedroom with a calming palette, walk-in closet and en-suite bathroom for privacy and comfort.",
    image: "/images/h4.jpeg",
  },
];

function Room() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="rooms"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-[#0f3d39] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 text-white px-4 py-1 rounded-md mb-6">
            Room Details
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Discover Rooms
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-5xl bg-[#133d3a] rounded-full px-3 py-2 flex gap-3 items-center mx-auto overflow-x-auto flex-nowrap justify-start sm:justify-center">
            {rooms.map((r, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={r.key}
                  onClick={() => setActive(idx)}
                  className={`px-4 py-2 md:px-8 md:py-3 rounded-full transition-colors duration-300 whitespace-nowrap text-base md:text-lg font-medium ${
                    isActive
                      ? "bg-[#b78659] text-white shadow-md"
                      : "text-white/80 hover:text-white/100"
                  }`}
                >
                  {r.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={rooms[active].key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#164b48] rounded-lg p-8 h-[360px] sm:h-[420px] md:h-[480px] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-medium mb-6">{rooms[active].title}</h3>
            <p className="text-slate-200 max-w-xl mb-8">
              {rooms[active].description}
            </p>
          </motion.div>

          <motion.div
            key={rooms[active].key + "-img"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg bg-white h-[360px] sm:h-[420px] md:h-[480px]"
          >
            <div className="relative h-full">
              <img
                src={rooms[active].image}
                alt={rooms[active].title}
                className="w-full h-full object-cover block"
              />
            </div>
          </motion.div>
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-slate-200 mb-4 max-w-xl">
            See more photos of our rooms and spaces in our gallery.
          </p>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block px-6 py-2 bg-[#b78659] hover:bg-[#a06a45] text-white rounded-full transition"
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Room;
