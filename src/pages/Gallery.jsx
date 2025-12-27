import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- IMPORT ALL IMAGES (Old + New) ---
// OLD IMAGES
import bed1 from '../assets/gallery/Bed1.jpeg';
import bed2 from '../assets/gallery/Bed2.jpeg';
import bed3 from '../assets/gallery/Bed3.jpeg';
import bed4 from '../assets/gallery/Bed4.jpeg';
import bed5 from '../assets/gallery/Bed5.jpeg';
import interior from '../assets/gallery/interior.jpeg';
import interior2 from '../assets/gallery/interior2.jpeg';
import living2 from '../assets/gallery/living2.jpeg';
import kitchen1 from '../assets/gallery/kitchen1.jpeg';
import kitchen2 from '../assets/gallery/Kitchen2.jpeg';

// NEW IMAGES (Added Dec 27)
import livingNew from '../assets/gallery/living.jpeg';
import wardrobe from '../assets/gallery/wardrobe.jpeg';
import terrace from '../assets/gallery/terrace.jpg';
import outer1 from '../assets/gallery/outer1.jpg';
import outer2 from '../assets/gallery/outer2.jpg';
import outer3 from '../assets/gallery/outer3.jpg';
import refresh from '../assets/gallery/refresh.jpg';
import HeroCarousel from '../components/HeroCarousel';

const galleryImages = [
  // --- STAY (Bedrooms & Bathrooms) ---
  { id: 1, src: bed1, category: 'Stay', alt: 'Purple Bedroom with Wardrobe' },
  { id: 2, src: bed2, category: 'Stay', alt: 'Purple Bedroom Side View' },
  { id: 3, src: bed3, category: 'Stay', alt: 'Master Bedroom with Grey Frame' },
  { id: 4, src: bed4, category: 'Stay', alt: 'Comfortable Double Bed' },
  { id: 5, src: bed5, category: 'Stay', alt: 'Teal Themed Guest Room' },
  { id: 11, src: wardrobe, category: 'Stay', alt: 'Dressing Area & Wash Basin' },
  { id: 17, src: refresh, category: 'Stay', alt: 'Clean & Modern Bathroom' },

  // --- GATHER (Living, Terrace, Exterior) ---
  // Note: We moved 'interior' (Dining Hall) out of here
  { id: 7, src: interior2, category: 'Gather', alt: 'Spacious Living Area with Chandelier' },
  { id: 8, src: living2, category: 'Gather', alt: 'Cozy Low Seating Area' },
  { id: 12, src: livingNew, category: 'Gather', alt: 'Premium Leather Sofa Setting' },
  { id: 13, src: terrace, category: 'Gather', alt: 'Spacious Covered Terrace' },
  { id: 14, src: outer1, category: 'Gather', alt: 'Villa Exterior Facade' },
  { id: 15, src: outer2, category: 'Gather', alt: 'Paved Courtyard & Entrance' },
  { id: 16, src: outer3, category: 'Gather', alt: 'Spacious Parking & Play Area' },

  // --- DINE (Kitchen & Dining Table) ---
  // We moved the Dining Table here!
  { id: 6, src: interior, category: 'Dine', alt: 'Family Dining Area' }, 
  { id: 9, src: kitchen1, category: 'Dine', alt: 'Modern Modular Kitchen' },
  { id: 10, src: kitchen2, category: 'Dine', alt: 'Fully Equipped Kitchen with Fridge' },
];

const categories = ['All', 'Stay', 'Gather', 'Dine'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
<>
<HeroCarousel/>
        <section className="pt-40 pb-16 px-4 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Gallery</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From our spacious interiors to the serene terrace, explore every corner of Zaithoon Villa.
              </p>
            </motion.div>
    
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gray-900 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                    {cat.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
    
            {/* Image Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredImages.map((image) => (
                  <motion.div 
                    layout
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow bg-gray-200 aspect-[4/3]"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white text-sm font-medium tracking-wider uppercase border border-white/30 bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
                        {image.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
    
            {/* Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-900 rounded-lg overflow-hidden shadow-2xl flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Close Gallery"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden min-h-0">
                      <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-white p-4 sm:p-6 text-center shrink-0">
                      <h3 className="text-gray-900 text-lg sm:text-xl font-semibold tracking-wide">
                        {selectedImage.category.toUpperCase()}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">{selectedImage.alt}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
    
          </div>
        </section>
</>
  );
}