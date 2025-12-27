import React from 'react';
import { motion } from 'motion/react';

// --- IMPORT 3 KEY IMAGES ---
import imgLiving from '../assets/gallery/interior2.jpeg'; 
import imgBedroom from '../assets/gallery/Bed1.jpeg';
import imgKitchen from '../assets/gallery/kitchen1.jpeg';

export default function About() {
  
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-white pt-40 pb-20 px-4 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. HERO HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-24"
        >
          <span className="text-green-600 font-semibold tracking-widest text-sm uppercase mb-2 block">
            The Zaithoon Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            More Than Just a Stay. <br className="hidden md:block" />
            <span className="text-gray-500 font-serif italic font-medium">It's Coming Home.</span>
          </h1>
          <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full opacity-80"></div>
        </motion.div>

        {/* --- 2. ZIG-ZAG CONTENT SECTIONS --- */}

        {/* SECTION A: The Expatriate Connection (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">A Reunion Haven for Families</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              For expatriate families returning home for holidays or leave, finding the right accommodation is crucial. Hotels often feel impersonal and split the family apart.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-green-500 pl-4 italic">
              "Zaithoon Villa is designed to be your private sanctuary—a place where you can host relatives, celebrate festivals, and enjoy the comfort of home, even when you are visiting."
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-green-100 rounded-2xl -z-10 transform rotate-2"></div>
            <img 
              src={imgLiving} 
              alt="Spacious Living Room for Gatherings" 
              className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>

        {/* SECTION B: The Tourist/Traveler (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gray-100 rounded-2xl -z-10 transform -rotate-2"></div>
            <img 
              src={imgBedroom} 
              alt="Luxury Bedroom" 
              className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Luxury for the Modern Traveler</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              Whether you are exploring the local attractions or seeking a quiet weekend escape, comfort is non-negotiable.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our 3 elegantly furnished bedrooms offer hotel-grade luxury with the privacy of a villa. Wake up refreshed, enjoy a coffee in our serene garden, and start your adventure with peace of mind.
            </p>
          </motion.div>
        </div>

        {/* SECTION C: The Kitchen/Home Vibe (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">The Heart of the Home</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              Unlike standard hotel rooms, Zaithoon Villa features a fully equipped modern kitchen and a spacious dining hall. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It gives you the freedom to cook special family meals, prepare quick snacks for the kids, or simply enjoy a late-night tea together. It is the convenience of your own home, designed for your vacation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-green-50 rounded-2xl -z-10 transform rotate-1"></div>
            <img 
              src={imgKitchen} 
              alt="Modern Kitchen" 
              className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>

        {/* --- 3. ICON GRID (Why Choose Us) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-gray-50 rounded-3xl p-10 md:p-16 mb-20 shadow-inner"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Guests Choose Us</h2>
            <p className="text-gray-500 font-medium">Everything you need for a short break or a long holiday.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <span className="text-4xl mb-4 block">🏡</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Total Privacy</h3>
              <p className="text-gray-600 text-sm font-medium">The entire villa is yours. No sharing with strangers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Ready</h3>
              <p className="text-gray-600 text-sm font-medium">Spacious halls and dining areas perfect for large families.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Care</h3>
              <p className="text-gray-600 text-sm font-medium">Dedicated management team just a call away.</p>
            </div>
          </div>
        </motion.div>

        {/* --- 4. MANAGEMENT / OUTRO --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">"Hospitality is simply an opportunity to show love and care."</h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            Zaithoon Villa is managed by a team passionate about your comfort. From the moment you land to the moment you leave, we ensure your stay is seamless, safe, and memorable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}