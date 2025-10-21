import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/images/hero1.png"

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-linear-to-br from-[#F5F9F7] 
      via-[#E8F5EC] to-[#FFFFFF] py-24 px-6 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-64 h-64
       bg-[#FF7A00]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 
      h-72 bg-[#0B3D2E]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 container mx-auto 
      grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={AboutImg}
            alt="About VitaBoost"
            className="rounded-3xl shadow-2xl object-cover w-full h-[420px]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0B3D2E]/30
           via-transparent to-transparent rounded-3xl"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#0B3D2E]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FF7A00]">Story</span> & Mission
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Born out of a passion for natural vitality, VitaBoost began with one
            simple goal — to help people live healthier, more energetic lives
            through pure, plant-based nutrition.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every capsule we produce is carefully crafted from sustainably
            sourced ingredients, backed by science, and perfected with love. Our
            team of experts ensures that each blend delivers optimal benefits —
            boosting your energy, focus, and immunity naturally.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                Our Mission
              </h4>
              <p className="text-gray-600 text-sm">
                To make natural wellness accessible to everyone through safe,
                effective, and sustainable supplements that truly work.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                Our Vision
              </h4>
              <p className="text-gray-600 text-sm">
                To inspire a world where health and vitality are powered by
                nature, not chemicals — where everyone feels their best, every
                day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
