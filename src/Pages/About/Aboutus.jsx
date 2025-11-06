import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import BookCard from "../../components/Cards/BookCard";

export default function AboutUniversity() {
  /** Hero background images */
  const gallery = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
  ];

  /** Stats data for book cards */
  const stats = [
    {
      title: "Programs",
      value: "60+",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      detail: "Undergraduate & Postgraduate",
    },
    {
      title: "Placement Rate",
      value: "95%",
      img: "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80",
      detail: "Across all programs",
    },
    {
      title: "Companies",
      value: "500+",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6be4ef95?auto=format&fit=crop&w=800&q=80",
      detail: "Industry partners & recruiters",
    },
    {
      title: "Avg Package",
      value: "₹12 LPA",
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
      detail: "Recent graduating batch",
    },
  ];

  const heroGradient = "linear-gradient(90deg, #2B6EF6 0%, #7C3AED 100%)";

  return (
    <main className="bg-white text-gray-900 pt-24">
      {/* ===================== HERO ===================== */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `${heroGradient}, url(${gallery[0]})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 transition-all duration-700">
          {/* Subtitle */}
          <div className="text-sm text-white/90 transition-opacity duration-700">
            🏛️ Undergraduate Admissions 2025-26
          </div>

          {/* Heading */}
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md transition-all duration-700">
            Begin Your Journey to Excellence
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg md:text-xl text-white/95 drop-shadow-sm max-w-3xl transition-all duration-700">
            Join thousands of students who have launched successful careers from our undergraduate programs.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white text-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              to="/brochure"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Download Brochure
            </Link>

            <Link
              to="/aboutus/campus-tour"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-transparent border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Schedule Campus Visit <Calendar className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <figure className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-xl shadow-lg transition-all duration-700">
            <img
              src={gallery[1]}
              alt="Campus aerial"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute left-4 bottom-4 bg-white/85 text-sm text-slate-800 px-3 py-1 rounded-md shadow">
              Main Campus — Aerial View
            </figcaption>
          </figure>

          {/* Text Section */}
          <div className="prose prose-slate max-w-none transition-all duration-700">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              University Overview
            </h2>
            <p>
              Our university is a multidisciplinary institution known for
              rigorous academics, industry collaboration, and an inclusive
              campus culture. Programs span engineering, sciences, management,
              arts, and social sciences.
            </p>

            <h3 className="mt-6 text-xl font-semibold">What sets us apart</h3>
            <ul>
              <li>Interdisciplinary, outcomes-driven curriculum with strong project work.</li>
              <li>Cutting-edge labs, maker spaces, and incubators supporting student startups.</li>
              <li>Global exposure through partner universities, internships, and exchanges.</li>
              <li>Robust placement cell with 500+ recruiting organizations.</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">Mission & Vision</h3>
            <p>
              We exist to create responsible, skilled, and compassionate leaders. Our vision is a world where education and research translate into real societal impact.
            </p>
          </div>
        </div>

        {/* ===================== STATS SECTION (BOOK CARDS) ===================== */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center transition-all duration-700">
          {stats.map((s) => (
            <BookCard
              key={s.title}
              frontImage={s.img}
              frontText={s.title}
              backTitle={s.value}
              backBody={s.detail}
              glass={false}
              style={{
                width: "100%",
                maxWidth: 280,
                height: 160,
                borderRadius: "14px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
