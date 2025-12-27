import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm z-0 transform-gpu scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        aria-hidden
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60 z-10"
        aria-hidden
      />

      <div className="absolute inset-0 z-20 max-w-6xl mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">
        <div className="flex w-full items-center justify-center text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-8/12 mx-auto"
          >
            <h1 className="text-white leading-tight drop-shadow-lg max-w-3xl mx-auto">
              <span className="block font-semibold text-5xl md:text-6xl lg:text-7xl">
                Contact Us
              </span>
            </h1>

            <p className="text-white/90  mt-6 max-w-xl text-lg mx-auto">
              We're here to help — reach out and we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
