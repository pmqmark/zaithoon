import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- IMPORT HERO IMAGES ---
import img1 from '../assets/gallery/outer1.jpg';
import img2 from '../assets/gallery/living.jpeg';
import img3 from '../assets/gallery/Bed1.jpeg';
import img4 from '../assets/gallery/interior2.jpeg';

const slides = [
  {
    id: 1,
    image: img1,
    title: "Welcome to Zaithoon Villa",
    subtitle: "Your private sanctuary for family reunions and peaceful getaways."
  },
  {
    id: 2,
    image: img2,
    title: "Experience Premium Comfort",
    subtitle: "Relax in our elegantly furnished living spaces designed for connection."
  },
  {
    id: 3,
    image: img3,
    title: "Restful Retreats",
    subtitle: "Spacious, air-conditioned bedrooms ensuring a perfect night's sleep."
  },
  {
    id: 4,
    image: img4,
    title: "Make Memories Together",
    subtitle: "Ample space for the whole family to gather, dine, and celebrate."
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-gray-900">
      
      {/* --- SLIDESHOW --- */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* --- IMAGE FIX --- */}
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover opacity-90 brightness-110 saturate-110"
          />
          
          {/* --- OVERLAY --- */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* --- TEXT CONTENT --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* UPDATED FONT WEIGHTS HERE */}
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light drop-shadow-xl">
              {slides[currentIndex].subtitle}
            </p>
            
       
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- NAVIGATION ARROWS --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/30 rounded-full backdrop-blur-md text-white transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/30 rounded-full backdrop-blur-md text-white transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* --- DOTS INDICATORS --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </div>
  );
}