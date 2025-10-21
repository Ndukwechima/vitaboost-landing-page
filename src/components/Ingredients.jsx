import React from "react";
import { motion } from "framer-motion";

const ingredients = [
  {
    img: "/src/assets/images/hero1.png",
    name: "Korean Ginseng",
    description:
      "Improves stamina and reduces fatigue by enhancing oxygen uptake.",
  },
  {
    img: "/src/assets/images/hero1.png",
    name: "Turmeric Extract",
    description:
      "Supports anti-inflammatory and antioxidant activity naturally.",
  },
  {
    img: "/src/assets/images/hero1.png",
    name: "Vitamin C",
    description:
      "Boosts immune defense and collagen production for healthy skin.",
  },
  {
    img: "/src/assets/images/hero1.png",
    name: "Ashwagandha",
    description: "Reduces stress and promotes mental clarity and focus.",
  },
  {
    img: "/src/assets/images/hero1.png",
    name: "Spirulina",
    description:
      "A nutrient-dense superfood rich in protein, iron, and antioxidants.",
  },
  {
    img: "/src/assets/images/hero1.png",
    name: "Zinc",
    description: "Essential for immune strength and muscle recovery.",
  },
];

const Ingredients = () => {
  return (
    <section
      id="ingredients"
      className="relative bg-[#0B3D2E] text-white py-24 px-6 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF7A00]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Power-Packed with{" "}
          <span className="text-[#FF7A00]">Natural Goodness</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mb-16"
        >
          Each VitaBoost capsule combines the strength of nature and the
          precision of science to keep your body energized and balanced.
        </motion.p>

        {/* Main content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          {/* Ingredient cards left side */}
          <div className="hidden lg:flex flex-col space-y-10 mr-12">
            {ingredients.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-left shadow-lg border border-white/10 hover:border-[#FF7A00]/40 transition-all duration-300 hover:-translate-y-2 w-64"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#FF7A00] mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center bottle */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/src/assets/images/hero1.png"
              alt="VitaBoost Bottle"
              className="w-64 md:w-80 drop-shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full 
            bg-linear-to-t from-[#FF7A00]/20 
            to-transparent blur-3xl"></div>
          </motion.div>

          {/* Ingredient cards right side */}
          <div className="hidden lg:flex flex-col space-y-10 ml-12">
            {ingredients.slice(3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl 
                text-left shadow-lg border border-white/10
                 hover:border-[#FF7A00]/40 transition-all 
                 duration-300 hover:-translate-y-2 w-64"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#FF7A00] mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile version (stacked cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 lg:hidden">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl 
              text-center shadow-lg border border-white/10
               hover:border-[#FF7A00]/40 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 mx-auto mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold text-[#FF7A00] mb-1">
                {item.name}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
