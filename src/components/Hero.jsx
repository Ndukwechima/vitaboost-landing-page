import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/images/hero1.png"

const Hero = () => {
  const whatsappLink =
    "https://wa.me/2348012345678?text=Hi%20VitaBoost!%20I’m%20interested%20in%20ordering%20your%20multivitamin%20blend."; // Replace with your actual number

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${HeroImg})`, // ✅ use the imported variable
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#0B3D2E]/50"></div> */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#0B3D2E]/90 via-[#0B3D2E]/70 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 px-6 max-w-2xl mx-auto text-white mb-9"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Boost Your <span className="text-[#FF7A00]">Energy</span> <br />
          and Stay <span className="text-[#FF7A00]">Healthy</span>
        </h1>

        <p className="text-gray-200 mb-8 text-lg md:text-xl">
          VitaBoost is a premium multivitamin performance blend packed with
          essential nutrients to support your immunity, focus, and everyday
          vitality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF7A00] hover:bg-[#e56f00]
             text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Order Now
          </a>

          <a
            href="#benefits"
            className="border-2 border-[#FF7A00] text-[#FF7A00]
             hover:bg-[#FF7A00] hover:text-white
              px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
