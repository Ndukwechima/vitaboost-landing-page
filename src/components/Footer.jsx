import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0B3D2E] text-white py-12 px-6 relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#FF7A00]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF7A00]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-3xl font-bold tracking-wide">
            <span className="text-[#FF7A00]">Vita</span>Boost
          </a>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Premium multivitamin blend designed to keep you energized, focused,
            and healthy — the natural way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-[#FF7A00]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              "Home",
              "Benefits",
              "Ingredients",
              "Testimonials",
              "About",
              "Contact",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#FF7A00] transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4 text-[#FF7A00]">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-end gap-4 text-2xl">
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#FF7A00] font-semibold">VitaBoost</span>. All
        rights reserved. Crafted with ❤️ for your wellbeing.
      </div>
    </footer>
  );
};

export default Footer;
