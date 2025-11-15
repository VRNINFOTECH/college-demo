// src/Pages/Academics/Academics.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlowCard from "../../components/Cards/Frontcard";
import GlowApplyButton from "../../components/Button/FrontButton";

/* ------------------------- Helper: Extract YouTube ID ------------------------- */
function getYouTubeID(input) {
  if (!input) return null;
  const str = String(input).trim();

  // If plain 11-char ID
  if (/^[\w-]{11}$/.test(str)) return str;

  try {
    const u = new URL(str);
    const host = u.hostname.replace("www.", "");

    // youtu.be/VIDEO
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (/^[\w-]{11}$/.test(id)) return id;
    }

    // youtube.com/watch?v=VIDEO
    const v = u.searchParams.get("v");
    if (v && /^[\w-]{11}$/.test(v)) return v;

    // youtube.com/embed/VIDEO or /v/VIDEO
    const parts = u.pathname.split("/").filter(Boolean);
    const possible = parts.find((p) => /^[\w-]{11}$/.test(p));
    if (possible) return possible;
  } catch (e) {
    // fall through to regex
  }

  // fallback regex (captures first 11-char pattern)
  const m = str.match(/([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

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

    if (ref.current) observer.observe(ref.current);
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
    description: "Explore diverse undergraduate programs that empower students to innovate, lead, and excel in their fields.",
    link: "/programs/undergraduate",
    img: "https://imgs.search.brave.com/86jVQvbXfyqgLaQWeiEHjsI511NsZn_6aEEL-RZkORA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzc0LzI5LzM5/LzM2MF9GXzk3NDI5/MzkxMl9PY1F0VXpD/aTQ4cm9uM3ZYU29x/VkNMQXIyM1ZxSFhv/Qy5qcGc",
  },
  {
    title: "Postgraduate Programs",
    description: "Advance your expertise and research capabilities through our wide range of postgraduate programs.",
    link: "/programs/postgraduate",
    img: "https://imgs.search.brave.com/75h1m4tYBu5aaUmKCMsDBO2R2atHzJGs18yJx3X-FQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYz/MTA2MTIwMS9waG90/by9pbmRpYW4tY29s/bGVnZS1zdHVkZW50/cy1zaXR0aW5nLW9u/LXN0YWlycy1zdHVk/eWluZy13b3JraW5n/LXRvZ2V0aGVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/d0dPTUZJMFhXRFpB/Rnk1SHdJNU1IQXVv/RjY5d3VGZTMtVElF/OVBXanJNPQ",
  },
  {
    title: "Lifelong Learning",
    description: "Flexible courses and certifications designed for professionals seeking to upskill and stay ahead.",
    link: "/programs/lifelong-learning",
    img: "https://imgs.search.brave.com/OCWAaWQc34oAFv78l2qRYyv28-vRjN1qTMoUvHVSZ0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ncm91/cC1pbmRpYW4tY29s/bGVnZS1zdHVkZW50/cy0yODA3NjEyMC5q/cGc",
  },
];

/* ------------------------- Faculty (AUTO-SANITIZED YOUTUBE URLS) ------------------------- */
const facultyMembersRaw = [
  {
    name: "Dr. Guru Prasad Bhat",
    title: "Dean, Faculty of Management & Commerce",
    img: "https://imgs.search.brave.com/PxWDDx7melBFeV8kXWQ0Di9jUFiICx6w_nInTN1m0Gw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5bGlmZWlu/ZGlhLmNvbS91cGxv/YWRzLzgvMS8xLzUv/ODExNTQxMi9hbG9r/LWtlanJpd2FsLmpw/Zw",
    videoId: "https://youtu.be/PY9DcIMGxMs?si=zHV9Z7p5cABAngVU",
  },
  {
    name: "Dr. V Krishna",
    title: "Dean, Student Affairs",
    img: "https://imgs.search.brave.com/MiMZ4RM9mrfdUJBRL4Gr3UcEZk3hAhlLw-1VRia6vGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waS50/ZWRjZG4uY29tL3Iv/dGFsa3N0YXItYXNz/ZXRzLnMzLmFtYXpv/bmF3cy5jb20vcHJv/ZHVjdGlvbi90YWxr/cy90YWxrXzE1ODg2/NS9kZTNjNGFhNi0x/MmEzLTRiOTMtODE1/Ny02NWI4Zjc3NWZj/NTAvQW5zaHVsVGV3/YXJpXzIwMjVULWVt/YmVkLmpwZz91W3Jd/PTImdVtzXT0wLjUm/dVthXT0wLjgmdVt0/XT0wLjAzJnF1YWxp/dHk9ODAmdz0zODQw",
    videoId: "https://youtu.be/6Af6b_wyiwI?si=pfOT0SzDtGmk7iPM",
  },
  {
    name: "Dr. Shylaja S S",
    title: "Director, Data & AI Programs",
    img: "https://imgs.search.brave.com/ZxHHT9ZVNu3U9dDTPtqmwW230VM4JwfOruQnzY4cNbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waS50/ZWRjZG4uY29tL3Iv/dGFsa3N0YXItcGhv/dG9zLnMzLmFtYXpv/bmF3cy5jb20vdXBs/b2Fkcy81ZGEyYzQx/NS1lNzI4LTQ5MTQt/Yjc0Ni1mMTUwMjFh/Zjg1NmEvU3Jpc2h0/aUJha3NoaV8yMDIx/Vy0xMzUweDY3NS5q/cGc_dVtyXT0yJnVb/c109MC41JnVbYV09/MC44JnVbdF09MC4w/MyZxdWFsaXR5PTgw/Jnc9Mzg0MA",
    videoId: "https://youtu.be/LNHBMFCzznE?si=BU6F6SfiSUXYVZ1O",
  },
];

// Sanitize YouTube IDs at creation time
const facultyMembers = facultyMembersRaw.map((f) => ({
  ...f,
  sanitizedId: getYouTubeID(f.videoId),
}));

/* ------------------------- Animation ------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ------------------------- Video Modal (FIXED) ------------------------- */
function VideoModal({ videoId, onClose }) {
  // guard: nothing to show
  if (!videoId) return null;

  // build correct embed URL using the provided videoId
  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(
    videoId
  )}?autoplay=1&mute=1&rel=0&modestbranding=1`;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Video modal"
      >
        <motion.div
          className="bg-black shadow-xl w-full max-w-3xl relative rounded-md overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-300 z-20"
            aria-label="Close video"
          >
            ×
          </button>

          {/* iframe */}
          <div className="aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="Faculty Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
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
      {/* ====== decorative overlay (radial lights + subtle SVG pattern + tint) ====== */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true">
        {/* decorative blurred radial lights */}
        <div
          className="absolute -left-24 -top-20 w-[560px] h-[560px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.22), rgba(59,130,246,0.12) 25%, transparent 45%)",
          }}
        />
        <div
          className="absolute right-[-120px] top-12 w-[420px] h-[420px] rounded-full opacity-20 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(14,165,233,0.18), rgba(99,102,241,0.06) 30%, transparent 55%)",
          }}
        />

        {/* subtle pattern overlay (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          style={{ opacity: 0.03 }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="academics-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
              <rect width="40" height="40" fill="transparent" />
              <path d="M0 40 L40 0" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academics-pattern)" className="text-slate-700" />
        </svg>

        {/* overall tint to make hero feel cohesive (soft white tint to keep content readable) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 100%)",
            mixBlendMode: "normal",
          }}
        />
      </div>

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
                  onClick={() => {
                    // debug log if needed:
                    // console.log("Opening video:", f.sanitizedId);
                    setSelectedVideo(f.sanitizedId);
                  }}
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
