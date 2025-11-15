// src/Pages/Campus.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const campuses = [
  {
    name: "Example College",
    location: "Bengaluru, Karnataka",
    img: "https://imgs.search.brave.com/lTxIzSpRJ7oTS4CkXBpf074yaaAN252f6ssuRFZNXoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/Nzg1NDE1OC9waG90/by9kYXktYXQtdGhl/LWNhbXB1cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cVc2/MnVzbHVEd0c2cExK/LTRHOXg3aDQzYnln/Z28wdXZHR1Zad3lP/THJfZz0",
  },
  {
    name: "Example College",
    location: "Hyderabad, Telangana",
    img: "https://imgs.search.brave.com/y_OyXp_9ENq37SzWjWnDjGoKTz_RUd2gWlg32z4uTQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vZXNwaWVzL2Vz/cGllczIwMTAvZXNw/aWVzMjAxMDAxMjQ5/LzE1Nzg3ODI4Mi1h/c2lhbi1pbmRpYW4t/Y29sbGVnZS1zdHVk/ZW50LWluLWZvY3Vz/LXdvcmtpbmctb24t/bGFwdG9wLW9yLXJl/YWRpbmctYm9vay13/aGlsZS1vdGhlci1j/bGFzc21hdGVzLWlu/LmpwZz92ZXI9Ng",
  },
  {
    name: "Example College",
    location: "Chennai, Tamil Nadu",
    img: "https://imgs.search.brave.com/Oc1KtlCfW3iHr08KX4VdSGJfaJBJRTV4ST6J7q_RN3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0LzJm/LzMwL2Y0MmYzMGIy/MDczMjk5YTRmN2U3/YWNhY2MyNmQ2ZmQ3/LmpwZw",
  },
  {
    name: "Example College",
    location: "Pune, Maharashtra",
    img: "https://imgs.search.brave.com/PeDz2XrBB8FD9mZwWlheJT2-6j2dsoYHHKJ4v-0TROk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTQx/NTc3NjUwL3Bob3Rv/L3N0dWRlbnRzLWdv/LXRvLWNhbXB1cy10/aHJvdWdoLXBhcmsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZObUVKaDVzMFgt/MGRkaUJHRXV5eE42/SFFoTkl3RUFRVklB/bHEwdHhGdlU9",
  },
  {
    name: "Example College",
    location: "Kochi, Kerala",
    img: "https://imgs.search.brave.com/H-042XIG7eq0pneu9hninjw9RsrmdPk6k6mW_EFY9gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXRteXVuaS5j/b20vYXNzZXRzL2lt/YWdlcy9hcnRpY2xl/cy9jb250ZW50L2Fy/dGljbGVzLTAyMjJh/ZDFlNjZjZDc3Y2U0/NzMzNDAzYjM0ZmVl/NTZhLndlYnA",
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
