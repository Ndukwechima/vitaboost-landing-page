import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLeaf, FaShieldAlt, FaBrain } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBolt size={32} />,
    title: "Instant Energy Boost",
    description:
      "Experience a natural surge of energy that keeps you active and productive all day long.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Immune System Support",
    description:
      "Packed with essential vitamins that strengthen your body’s defenses and overall wellness.",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Improves Focus & Clarity",
    description:
      "Formulated to sharpen your mental focus and help you stay alert through your busy day.",
  },
  {
    icon: <FaLeaf size={32} />,
    title: "100% Natural Ingredients",
    description:
      "Made from high-quality herbal extracts, free from artificial additives or fillers.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why Choose <span className="text-[#FF7A00]">VitaBoost?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          VitaBoost is crafted to nourish your body, recharge your mind, and
          keep you performing at your best — naturally.
        </motion.p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0B3D2E] text-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="mb-4 text-[#FF7A00]">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-200">{benefit.description}</p>

              {/* Decorative Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#FF7A00]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

