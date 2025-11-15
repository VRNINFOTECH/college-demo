// src/Pages/Placements.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Placements() {
  const [startCount, setStartCount] = useState(false);

  // Count-up animation function
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!startCount) return;
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, startCount]);
    return count;
  };

  // When section enters view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("placements");
      if (section && window.scrollY + window.innerHeight >= section.offsetTop + 200) {
        setStartCount(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats data
  const stats = [
    { title: "Top Recruiters", value: 150 },
    { title: "Students Placed", value: 2800 },
    { title: "Highest Package (LPA)", value: 45 },
    { title: "Placement Rate", value: 98 },
  ];

  // Company logos
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
     "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  
  ];

  return (
    <section id="placements" className="bg-white py-20 md:py-28 text-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Placements & Achievements
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our placement cell connects students with top recruiters worldwide. Excellence meets opportunity at every step.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {useCountUp(item.value)}+
              </h3>
              <p className="text-gray-700 mt-2">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center mb-20">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt={`Company ${i + 1}`}
              className="h-10 mx-auto opacity-80 hover:opacity-100 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>

        {/* Testimonial or Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 p-8 text-left shadow-sm"
        >
          <p className="text-gray-700 italic mb-4">
            “The placement support at our institution transformed my career. With top recruiters visiting every semester, I landed my dream job at Microsoft even before graduation.”
          </p>
          <p className="font-semibold text-gray-800">— Ananya Rao, CSE Graduate</p>
        </motion.div>
      </div>
    </section>
  );
}
