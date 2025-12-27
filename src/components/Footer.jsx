import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#0b2f2e] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + brief */}
          <div>
            <img
              src="/images/logo.jpeg"
              alt="Zaithoon Villa"
              className="w-40 mb-4 object-contain"
            />
            <p className="text-gray-300">
              Zaithoon Villa — Elegant stays with comfort and style.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <address className="not-italic text-gray-300 mb-4">
              Zaithoon Villas
              <br />
              XJQ4+4QJ Muvattupuzha, Kerala
              <br />
              Phone:{" "}
              <a href="tel:9544844499" className="hover:text-white">
                9544844499
              </a>
            </address>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white/5 rounded hover:bg-white/10"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="X"
                className="p-2 bg-white/5 rounded hover:bg-white/10"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white/5 rounded hover:bg-white/10"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2025 — Developed by QMark Technolabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
