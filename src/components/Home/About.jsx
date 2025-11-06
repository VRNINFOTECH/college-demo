// src/Pages/Academics/Academics.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlowCard from "../../components/Cards/Frontcard";
import GlowApplyButton from "../../components/Button/FrontButton";

/* ------------------------- CountUpOnView ------------------------- */
function CountUpOnView({ end = 100, duration = 1500, suffix = "", decimals = 0, formatter }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;

            const start = performance.now();
            const step = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const current = 0 + (end - 0) * t;
              setValue(Number(current.toFixed(decimals)));
              if (t < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  const display = formatter
    ? formatter(value)
    : decimals > 0
    ? value.toFixed(decimals)
    : value.toLocaleString();

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-blue-800">
      {display}
      {suffix && <span className="text-base md:text-lg font-medium ml-1">{suffix}</span>}
    </div>
  );
}

/* ------------------------- Data ------------------------- */
const programs = [
  {
    title: "Undergraduate Programs",
    description:
      "Explore diverse undergraduate programs that empower students to innovate, lead, and excel in their fields.",
    link: "/programs/undergraduate",
    img: "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Postgraduate Programs",
    description:
      "Advance your expertise and research capabilities through our wide range of postgraduate programs.",
    link: "/programs/postgraduate",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Lifelong Learning",
    description:
      "Flexible courses and certifications designed for professionals seeking to upskill and stay ahead.",
    link: "/programs/lifelong-learning",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80",
  },
];

const facultyMembers = [
  {
    name: "Dr. Shailashree Haridas",
    title: "Dean, Faculty of Management & Commerce",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Dr. V Krishna",
    title: "Dean, Student Affairs",
    img: "https://images.unsplash.com/photo-1531123414780-f8f3f6c0b08b?auto=format&fit=crop&w=600&q=80",
    videoId: "ysz5S6PUM-U",
  },
  {
    name: "Dr. Shylaja S S",
    title: "Director, Data & AI Programs",
    img: "https://images.unsplash.com/photo-1543991959-7472a385f0b2?auto=format&fit=crop&w=600&q=80",
    videoId: "ScMzIvxBSi4",
  },
];

/* ------------------------- Animation ------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ------------------------- Video Modal ------------------------- */
function VideoModal({ videoId, onClose }) {
  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-black shadow-xl w-full max-w-3xl relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-300"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Faculty Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------- Main Component ------------------------- */
export default function Academics() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const bgImageURL =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80";

  return (
    <section
      className="relative py-12 md:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImageURL})` }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800">
            Academics
          </motion.h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Preparing students to follow their own North Star and become responsible citizens and leaders.
          </p>
        </div>

        {/* Counters */}
        <div className="bg-white shadow-md py-6 px-6 mb-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm uppercase text-gray-500">College Ranking</div>
              <CountUpOnView end={6} duration={1000} />
            </div>
            <div>
              <div className="text-sm uppercase text-gray-500">Students</div>
              <CountUpOnView end={12500} duration={1400} formatter={(v) => v.toLocaleString()} />
            </div>
            <div>
              <div className="text-sm uppercase text-gray-500">Placement Rate</div>
              <CountUpOnView end={92} duration={1100} suffix="%" />
            </div>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {programs.map((p, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" variants={fadeUp}>
              <GlowCard
                width="100%"
                height="420px"
                bg="#ffffff"
                innerBg="#ffffff"
                gradientFrom="#705CF6"
                gradientTo="#22D3EE"
                blur="40px"
                radius="0px"
              >
                <div className="flex flex-col h-full">
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-4 text-left text-black flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base mb-4">{p.description}</p>

                    {/* ✅ Glow Button Replaced */}
                    <GlowApplyButton to={p.link} text="Apply" width="140px" bg="#0b65d4" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Faculty Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Meet Our Faculty</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {facultyMembers.map((f, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="show" variants={fadeUp}>
                <GlowCard
                  onClick={() => setSelectedVideo(f.videoId)}
                  width="100%"
                  height="360px"
                  bg="#0b0f1a"
                  innerBg="#0b3b6b"
                  gradientFrom="#22D3EE"
                  gradientTo="#705CF6"
                  blur="36px"
                  radius="0px"
                >
                  <div className="flex flex-col h-full cursor-pointer">
                    <img src={f.img} alt={f.name} className="w-full h-44 object-cover" />
                    <div className="p-4 text-center text-white">
                      <h4 className="font-semibold">{f.name}</h4>
                      <p className="text-sm mt-1 text-blue-100/90">{f.title}</p>
                      <p className="mt-2 text-sm opacity-90">🎥 Tap to watch introduction</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
