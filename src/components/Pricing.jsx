import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaStar, FaTruckFast, FaLeaf } from "react-icons/fa6";

const Pricing = () => {
  const whatsappLink =
    "https://wa.me/2348012345678?text=Hi%20VitaBoost!%20I’m%20interested%20in%20ordering%20VitaBoost."; // Replace with actual number

  const packages = [
    {
      title: "Starter Pack",
      bottles: "1 Bottle",
      price: "₦9,500",
      desc: "Perfect for first-time users looking to experience the power of VitaBoost.",
      icon: <FaLeaf className="text-[#FF7A00] text-2xl" />,
      featured: false,
    },
    {
      title: "Best Value Pack",
      bottles: "3 Bottles",
      price: "₦24,000",
      desc: "Our most popular bundle. Boost your health with consistent results.",
      icon: <FaStar className="text-[#FFD700] text-2xl" />,
      featured: true,
    },
    {
      title: "Family Pack",
      bottles: "6 Bottles",
      price: "₦45,000",
      desc: "Perfect for families or long-term users. Save more while staying healthy.",
      icon: <FaTruckFast className="text-[#FF7A00] text-2xl" />,
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-linear-to-br from-[#F5F9F7] via-[#FFFFFF] to-[#E8F5EC] py-24 px-6"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF7A00]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0B3D2E]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0B3D2E] mb-4"
        >
          Choose Your <span className="text-[#FF7A00]">VitaBoost</span> Plan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Get started with our flexible bundles. Whether you’re just beginning
          your wellness journey or fully committed — there’s a plan for you.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2
                ${
                  pkg.featured
                    ? "bg-[#0B3D2E] text-white scale-105 border-2 border-[#FF7A00]"
                    : "bg-white text-[#0B3D2E]"
                }`}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">{pkg.icon}</div>

              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-sm opacity-80 mb-6">{pkg.desc}</p>

              <div className="text-3xl font-bold mb-1">{pkg.price}</div>
              <p className="text-sm opacity-75 mb-8">{pkg.bottles}</p>

              {/* WhatsApp Order Button */}
              <a
                href={`${whatsappLink}%20I%20want%20the%20${pkg.title}%20(${pkg.bottles}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 
                font-semibold rounded-lg py-3 px-5 w-full transition
                  ${
                    pkg.featured
                      ? "bg-[#FF7A00] hover:bg-[#e56f00] text-white"
                      : "border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
                  }`}
              >
                <FaWhatsapp size={18} /> Order Now
              </a>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center justify-center gap-4 text-xs opacity-75">
                <span className="flex items-center gap-1">
                  <FaTruckFast /> Free Delivery
                </span>
                <span className="flex items-center gap-1">
                  <FaLeaf /> 100% Natural
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
