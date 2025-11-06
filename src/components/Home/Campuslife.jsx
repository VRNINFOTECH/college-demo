// src/Pages/Campus.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const campuses = [
  {
    name: "Riverside Institute of Technology",
    location: "Bengaluru, Karnataka",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Horizon College of Engineering",
    location: "Hyderabad, Telangana",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Skyline Business School",
    location: "Chennai, Tamil Nadu",
    img: "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bluefield University",
    location: "Pune, Maharashtra",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Greenwood College of Arts",
    location: "Kochi, Kerala",
    img: "https://images.unsplash.com/photo-1596496059769-7b9ecf0b89fc?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Campus() {
  const [index, setIndex] = useState(0);
  const delay = 4000; // time per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % campuses.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Campuses
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover our vibrant campuses across India—centers of excellence, innovation, and collaboration.
        </p>

        {/* Image Carousel */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-none">
          {campuses.map((campus, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img
                src={campus.img}
                alt={campus.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start p-8 text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                >
                  {campus.name}
                </motion.h3>
                <p className="text-gray-200">{campus.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {campuses.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-blue-600 w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
