import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amara Johnson",
    role: "Fitness Coach",
    image: "/src/assets/images/client1.png",
    quote:
      "VitaBoost has completely transformed my energy levels. I feel refreshed every morning and more focused throughout my sessions!",
  },
  {
    name: "David Cole",
    role: "Entrepreneur",
    image: "/src/assets/images/client2.jpg",
    quote:
      "As someone always on the go, VitaBoost keeps me energized all day. No crashes, just clean vitality!",
  },
  {
    name: "Sophia Wright",
    role: "Nutrition Expert",
    image: "/src/assets/images/client3.jpg",
    quote:
      "I’ve recommended VitaBoost to my clients for its pure, natural ingredients. It’s one of the best blends I’ve seen.",
  },
  {
    name: "John Michaels",
    role: "Student Athlete",
    image: "/src/assets/images/client2.jpg",
    quote:
      "Since I started taking VitaBoost, my performance and focus have gone through the roof. Totally recommend it!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section
      id="testimonials"
      className="relative bg-[#F5F9F7] py-24 px-6 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0B3D2E]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-md h-112 bg-[#FF7A00]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-4"
        >
          What Our <span className="text-[#FF7A00]">Customers Say</span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Real stories from real people who’ve experienced the VitaBoost
          difference.
        </p>

        {/* Testimonials Carousel */}
        <div className="relative flex justify-center items-center">
          {/* Previous button */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-10 bg-white/60 
            backdrop-blur-md p-3 rounded-full shadow hover:bg-[#FF7A00]/20 transition"
          >
            ‹
          </button>

          {/* Testimonial cards */}
          <div className="relative w-full max-w-3xl h-[360px] flex justify-center items-center">
            <AnimatePresence mode="popLayout">
              {testimonials.map(
                (t, index) =>
                  index === current && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bg-white rounded-2xl shadow-xl p-8 text-center w-full"
                    >
                      <div className="flex justify-center mb-4">
                        <FaQuoteLeft className="text-[#FF7A00] text-3xl opacity-80" />
                      </div>

                      <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                        {t.quote}
                      </p>

                      <div className="flex justify-center gap-1 text-[#FF7A00] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      <div className="flex flex-col items-center">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-16 h-16 object-cover rounded-full border-2 border-[#FF7A00] mb-2"
                        />
                        <h4 className="text-lg font-semibold text-[#0B3D2E]">
                          {t.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-10 bg-white/60 
            backdrop-blur-md p-3 rounded-full shadow hover:bg-[#FF7A00]/20 transition"
          >
            ›
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-[#FF7A00] scale-125"
                  : "bg-gray-300 hover:bg-[#FF7A00]/60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
