import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "top-0 bg-white/95 backdrop-blur  shadow-md" : "top-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "py-2"
            : "bg-white/95 backdrop-blur rounded-xl py-4 shadow-lg"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-40 h-14 overflow-hidden rounded-md">
            <img
              src="/images/logo.jpeg"
              alt="Zaithoon Villa"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.to} whileHover={{ y: -3 }}>
              <Link
                to={item.to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-700 hover:text-black transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("schedule");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              else {
                // navigate to home and scroll after a short delay
                navigate("/");
                setTimeout(() => {
                  const el2 = document.getElementById("schedule");
                  if (el2)
                    el2.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 350);
              }
            }}
            className="px-4 py-2 rounded-md bg-[#b78659] cursor-pointer text-white text-sm uppercase tracking-wider shadow"
          >
            Schedule a visit
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="p-2"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl bg-white rounded-xl shadow-lg px-6 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2 border-b border-neutral-200 text-gray-700 text-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-neutral-100 flex justify-center">
            <button
              onClick={() => {
                setOpen(false);
                const el = document.getElementById("schedule");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                else {
                  navigate("/");
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
              className="px-4 py-2 rounded-md bg-[#b78659] text-white text-sm uppercase tracking-wider shadow"
            >
              Schedule a visit
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
