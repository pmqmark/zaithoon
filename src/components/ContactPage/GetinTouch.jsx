import React, { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function GetinTouch() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e && e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const text = `Enquiry from ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const wa = `https://wa.me/919544844499?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Have any questions?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Reach out and we'll connect you to our team. You can call, message on
          WhatsApp or send a quick enquiry below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center md:text-left">
        {/* Column 1: Contact details */}
        <div className="flex flex-col gap-6 justify-self-center text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#b78659] text-white flex items-center justify-center">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">
                Zaithoon Villas
                <br />
                XJQ4+4QJ
                <br />
                Muvattupuzha, Kerala
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#b78659] text-white flex items-center justify-center">
              <FaPhone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">
                Call us at
                <br />
                <a href="tel:9544844499" className="hover:underline">
                  9544844499
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Map */}
        <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200 justify-self-center">
          <iframe
            title="Zaithoon Villas map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.3510942267562!2d76.60432107503105!3d9.987829390116945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMTYuMiJOIDc2wrAzNicyNC44IkU!5e0!3m2!1sen!2sin!4v1766835486548!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Column 3: Quick enquiry form */}
        <form
          onSubmit={handleWhatsApp}
          className="bg-gray-50 rounded-lg p-6 shadow-sm w-full max-w-md justify-self-center text-left"
        >
          <h3 className="font-semibold text-lg mb-3">Quick Enquiry</h3>
          <div className="grid grid-cols-1 gap-3">
            <input
              className="px-4 py-3 border border-gray-200 rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="px-4 py-3 border border-gray-200 rounded"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              className="px-4 py-3 border border-gray-200 rounded"
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#b78659] text-white rounded-md"
              >
                <FaWhatsapp />
                Send on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setPhone("");
                  setMessage("");
                }}
                className="px-4 py-2 border border-gray-200 rounded-md"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
