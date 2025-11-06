// HeroSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlowApplyButton from "../../components/Button/FrontButton";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
    title: "ADMISSIONS 2026 OPEN",
    cta: "APPLY NOW",
    to: "/apply",
    sub: "Over 60+ programs to choose from. Apply now for the 2026 intake.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    title: "NEW PROGRAMS IN AI & DATA",
    cta: "LEARN MORE",
    to: "/programs/postgraduate",
    sub: "Future-ready curriculum with projects, labs and industry mentors.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
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
                  {/* You can add more source sizes if you want finer control */}
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${slides[index].image}&w=1600&q=80`}
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={`${slides[index].image}&w=1200&q=80`}
                  />
                  <img
                    src={`${slides[index].image}&w=900&q=80`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover will-change-transform"
                    style={{
                      transform: reducedMotion
                        ? "none"
                        : `translateY(${scrollY * 0.1}px) scale(1.02)`,
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
                    <GlowApplyButton
                      to={slides[index].to}
                      text={slides[index].cta}
                      width="200px"
                      height="52px"
                      bg="#ea7b2f"
                    />
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
        </div>

        {/* Indicators */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3"
          role="tablist"
          aria-label="Slide indicators"
        >
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

      {/* INFO BOXES */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-16 bg-[#063b86] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-8 bg-sky-400 rounded-sm" />
              <h3 className="text-xl font-semibold">Admissions 2026 Now Open</h3>
            </div>
            <p className="text-sm text-white/90">
              Over 60+ Programs to choose from. Apply now to secure your seat for the next academic year.
            </p>
            <Link
              to="/apply"
              className="mt-3 inline-block text-sm font-semibold bg-blue-700 hover:bg-orange-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Apply Now
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-8 bg-sky-400 rounded-sm" />
              <h3 className="text-xl font-semibold">Scholarships</h3>
            </div>
            <p className="text-sm text-white/90">
              Rs. 110+ Crores merit scholarships given till date. Several scholarships available for eligible students.
            </p>
            <Link
              to="/scholarships"
              className="mt-3 inline-block text-sm font-semibold bg-blue-700 hover:blue-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              View Details
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-8 bg-sky-400 rounded-sm" />
              <h3 className="text-xl font-semibold">Placements</h3>
            </div>
            <p className="text-sm text-white/90">
              Our strong placement outcomes are a result of our focus on career development and recruiter partnerships.
            </p>
            <Link
              to="/placements/recruiter"
              className="mt-3 inline-block text-sm font-semibold bg-blue-700 hover:bg-blue-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
