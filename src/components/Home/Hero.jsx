// HeroSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight,GraduationCap, Trophy, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlowApplyButton from "../../components/Button/FrontButton";


// const Link = ({ to, children, className }) => (
//   <a href={to} className={className}>{children}</a>
// );

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    title: "ADMISSIONS 2026 OPEN",
    cta: "APPLY NOW",
    to: "/apply",
    sub: "Over 60+ programs to choose from. Apply now for the 2026 intake.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1588965216/photo/modern-office-or-library-interior-with-wooden-staircase-plants-and-waiting-area.jpg?s=612x612&w=0&k=20&c=BRh3GX5Xq9ETiZGhEfjuFYLbq6oLQ1qnkJ263qeFqLU=",
    title: "NEW PROGRAMS IN AI & DATA",
    cta: "LEARN MORE",
    to: "/programs/postgraduate",
    sub: "Future-ready curriculum with projects, labs and industry mentors.",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1744734104/photo/university-student-life-in-campus.jpg?s=612x612&w=0&k=20&c=N06vybtwT54OCLJm8bO5l5a22lAmMoGvDRs9H5U0vss=",
    title: "SCHOLARSHIPS AVAILABLE",
    cta: "VIEW SCHOLARSHIPS",
    to: "/scholarships",
    sub: "Merit & need-based scholarships to support your goals.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef(null);
  const startXRef = useRef(null);

  const reducedMotion = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false,
    []
  );

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // smoother self-resetting timeout
  const schedule = () => {
    clearTimeout(timeoutRef.current);
    if (!paused && !reducedMotion) timeoutRef.current = setTimeout(next, 5000);
  };

  useEffect(() => {
    schedule();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, reducedMotion]);

  // pause when hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden ? true : false);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // parallax
  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => setScrollY(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe
  const onPointerDown = (e) => {
    startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const delta = endX - (startXRef.current ?? endX);
    if (Math.abs(delta) > 50) (delta > 0 ? prev() : next());
    startXRef.current = null;
  };

  // slide animation variants (fade + slide)
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
    }),
  };
  const [direction, setDirection] = useState(1);
  const goPrev = () => {
    setDirection(-1);
    prev();
  };
  const goNext = () => {
    setDirection(1);
    next();
  };

  return (
    <section className="w-full">
      {/* HERO */}
      <div
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured highlights"
      >
        <div className="relative h-[520px] md:h-[600px] lg:h-[720px]">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={slides[index].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Background (lazy + responsive) */}
              <div className="absolute inset-0 overflow-hidden">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={`${slides[index].image}&w=1600&q=80`} />
                  <source media="(min-width: 640px)" srcSet={`${slides[index].image}&w=1200&q=80`} />
                  <img
                    src={`${slides[index].image}&w=900&q=80`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover will-change-transform"
                    style={{
                      transform: reducedMotion ? "none" : `translateY(${scrollY * 0.1}px) scale(1.02)`,
                    }}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-900/55 to-blue-950/75" />
              </div>

              {/* Foreground content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative z-20 h-full flex items-center justify-center"
              >
                <div className="text-center px-4 sm:px-8 md:px-16 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]">
                    {slides[index].title}
                  </h1>
                  <p className="mt-6 text-white/95 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                    {slides[index].sub}
                  </p>
                  <div className="mt-8 inline-flex">
                    {/* ✅ GlowApplyButton in hero */}
                    <GlowApplyButton to={slides[index].to} text={slides[index].cta} width="200px" height="52px" bg="#ea7b2f" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="hidden md:flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white z-30 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="hidden md:flex items-center justify-center absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white z-30 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3" role="tablist" aria-label="Slide indicators">
            {slides.map((_, i) => {
              const selected = i === index;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  role="tab"
                  aria-selected={selected}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                    selected ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* ================= INFO BOXES (upgraded UI) ================= */}
 <motion.section
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative py-24 overflow-hidden"
      aria-labelledby="info-strip-heading"
    >
      {/* Background with college images and dark overlay */}
      <div className="absolute inset-0 -z-20">
        {/* College background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')`,
          }}
        />
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        
        {/* Additional atmospheric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-orange-900/20" />

        {/* Animated light beams */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-600 blur-[100px]"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="info-strip-heading" className="text-4xl md:text-5xl font-black text-white mb-4">
              Latest Updates & Highlights
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 mx-auto rounded-full mb-5" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay informed with admissions, scholarships, and placement opportunities
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* CARD 1 - Admissions */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl p-8 bg-slate-900/60 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50 transition-all duration-500 overflow-hidden"
          >
            {/* Animated border line */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl" />

            <div className="relative">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/50 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <GraduationCap className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Admissions 2026
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold mb-4">
                NOW OPEN
              </div>

              <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                Over 60+ programs including Engineering, Management, Sciences & Allied Health Sciences.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 text-lg">📅</span>
                  <span>Early deadline: <strong className="text-white">May 31, 2026</strong></span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-400 text-lg">✓</span>
                  <span>Eligibility: <strong className="text-white">Minimum 50%</strong></span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/apply"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300"
                >
                  Apply Now
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <a
                  href="/brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-xl border border-slate-600 text-gray-300 font-semibold hover:border-blue-500 hover:bg-blue-500/10 hover:text-white transition-all duration-300"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </motion.article>

          {/* CARD 2 - Scholarships */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl p-8 bg-slate-900/60 backdrop-blur-xl shadow-2xl hover:shadow-orange-500/20 border border-slate-700/50 transition-all duration-500 overflow-hidden"
          >
            {/* Animated border line */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, #f97316, transparent)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/10 transition-all duration-500 rounded-2xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/50 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Trophy className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Scholarships & Aid
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold mb-4">
                APPLY NOW
              </div>

              <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                Merit & need-based scholarships available. Fellowship awards for research scholars.
              </p>

              <ul className="space-y-2.5 mb-6 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>Merit scholarships: <strong className="text-white">top 10% applicants</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-orange-400 mt-0.5">▸</span>
                  <span>Need-based support with financial documents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>Research fellowships for PG/PhD students</span>
                </li>
              </ul>

              <div className="flex items-center justify-between pt-5 border-t border-slate-700/50 mb-5">
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-1">Total Awarded</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    ₹110+ Cr
                  </div>
                </div>
              </div>

              <Link
                to="/scholarships"
                className="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-orange-500 text-orange-400 font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                View Details
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.article>

          {/* CARD 3 - Placements */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl p-8 bg-slate-900/60 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50 transition-all duration-500 overflow-hidden"
          >
            {/* Animated border line */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, #3b82f6, #f97316, transparent)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '2px',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/5 group-hover:to-orange-500/10 transition-all duration-500 rounded-2xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/50 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Briefcase className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Placements 2024
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold mb-4">
                95% SUCCESS
              </div>

              <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                500+ hiring partners, industry-ready training and career support for all students.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <span className="text-sm text-gray-300 font-medium">💼 Median CTC</span>
                  <span className="text-lg font-black text-blue-400">₹12.5 LPA</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <span className="text-sm text-gray-300 font-medium">⭐ Highest CTC</span>
                  <span className="text-lg font-black text-orange-400">₹42 LPA</span>
                </div>
              </div>

              <Link
                to="/placements/recruiter"
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                Explore Recruiters
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>

      </div>
    </section>
  );
}
