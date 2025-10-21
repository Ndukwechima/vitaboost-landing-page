import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const whatsappLink =
    "https://wa.me/2348012345678?text=Hi%20VitaBoost!%20I’m%20interested%20in%20ordering%20your%20multivitamin%20blend."; // Replace with your actual number

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Benefits", href: "#benefits" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header className="bg-[#0B3D2E] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide">
          <span className="text-[#FF7A00]">Vita</span>Boost
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`font-medium transition-all duration-200 pb-1 ${
                activeLink === link.name
                  ? "text-[#FF7A00] border-b-2 border-[#FF7A00]"
                  : "text-white hover:text-[#FF7A00]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Buy Now Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block bg-[#FF7A00] hover:bg-[#e56f00]
           text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Buy Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#0B3D2E] lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 px-6 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMenuOpen(false);
                  }}
                  className={`font-medium transition-all duration-200 ${
                    activeLink === link.name
                      ? "text-[#FF7A00] border-b border-[#FF7A00]"
                      : "text-white hover:text-[#FF7A00]"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#FF7A00] hover:bg-[#e56f00] text-white px-4 
                py-2 rounded-lg text-center font-medium"
              >
                Buy Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

