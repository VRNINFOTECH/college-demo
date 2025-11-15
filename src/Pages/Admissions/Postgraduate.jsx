// src/Pages/Admissions/PGPrograms.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Clock,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

/**
 * PG Programs page (modal z-index + viewport-safe height fix)
 *
 * - Modal now uses z-[99999] to sit above fixed navbars.
 * - Modal content maxHeight respects a CSS variable --navbar-height (default 96px).
 *   If your navbar is taller/shorter, set --navbar-height on :root or the page container.
 * - Body scroll locked while modal open.
 */

/* ---------- programs (sample) ---------- */
const PROGRAMS = [
  {
    id: "mtech",
    title: "M.Tech",
    duration: "2 Years",
    seats: "30 per specialization",
    eligibility: "B.Tech/BE in relevant discipline (60% aggregate) + GATE Score",
    image: "", // optional '/images/mtech.jpg'
    specializations: [
      "Computer Science & Engineering",
      "Data Science",
      "AI & Machine Learning",
      "VLSI & Embedded Systems",
      "Structural Engineering",
      "Power Systems",
    ],
  },
  {
    id: "mba",
    title: "MBA",
    duration: "2 Years",
    seats: "180",
    eligibility: "Bachelor's degree in any discipline (50% aggregate) + CAT/MAT/XAT/CMAT",
    image: "",
    specializations: [
      "General Management",
      "Finance",
      "Marketing",
      "Human Resources",
      "Business Analytics",
      "Operations Management",
    ],
  },
  {
    id: "mca",
    title: "MCA",
    duration: "2 Years",
    seats: "120",
    eligibility: "BCA/B.Sc (CS/IT) or relevant degree with Mathematics (55% aggregate)",
    image: "",
    specializations: ["Master of Computer Applications"],
  },
  {
    id: "msc",
    title: "M.Sc",
    duration: "2 Years",
    seats: "40 per specialization",
    eligibility: "B.Sc in relevant subject (55% aggregate)",
    image: "",
    specializations: ["Physics", "Chemistry", "Mathematics", "Computer Science", "Biotechnology"],
  },
  {
    id: "ma",
    title: "M.A",
    duration: "2 Years",
    seats: "50 per specialization",
    eligibility: "Bachelor's degree in relevant subject (50% aggregate)",
    image: "",
    specializations: ["Economics", "English", "Psychology", "Sociology"],
  },
];

export default function PGPrograms() {
  const [selected, setSelected] = useState(null);

  // lock body scroll when modal open
  useLockBodyScroll(Boolean(selected));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO - added dark overlay via linear-gradient for improved contrast */}
      <section
        className="relative pt-28 pb-16"
        aria-labelledby="pg-hero-heading"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://media.istockphoto.com/id/534923751/photo/young-happy-students-in-india.jpg?s=612x612&w=0&k=20&c=QDCbuVY2Z1-DBTiXZ0cyG7obo7AWk8NU66mZIo-AuRI=')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-6 h-6 text-white" />
                <span className="text-sm font-medium text-white">Postgraduate Admissions 2025-26</span>
              </div>

              <h1 id="pg-hero-heading" className="text-4xl md:text-5xl font-extrabold text-white">
                Advance Your Career with Specialized Masters
              </h1>

              <p className="mt-4 max-w-xl text-white/90 text-lg">
                Transform your expertise with our industry-focused postgraduate programs. View specializations and apply online.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/apply" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 font-semibold hover:bg-indigo-700 transition">
                  Apply Now <ChevronRight className="w-4 h-4" />
                </Link>

                <a href="#programs" className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-5 py-3 font-semibold hover:bg-white/5 transition">
                  Browse Programs
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Programs Offered</h2>
          <p className="text-gray-600 mt-2">Click View Details to see the full list of specializations and eligibility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <article key={p.id} className="bg-white border border-gray-200 shadow-sm overflow-hidden">
              {/* image if provided, else icon block */}
              {p.image ? (
                <div className="h-40 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="h-40 w-full flex items-center justify-center bg-gray-100">
                  <GraduationCap className="w-12 h-12 text-gray-400" />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>

                <div className="mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{p.duration}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span>{p.seats}</span>
                  </div>

                  <div className="mt-2">
                    <strong className="text-sm text-gray-700">Eligibility:</strong>{" "}
                    <span className="text-sm text-gray-600">{p.eligibility}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specializations</p>

                  <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600 list-none">
                    {p.specializations.slice(0, 5).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                        <span className="leading-tight">{s}</span>
                      </li>
                    ))}
                    {p.specializations.length > 5 && (
                      <li className="mt-2">
                        <button
                          onClick={() => setSelected(p)}
                          className="text-indigo-600 text-sm hover:underline font-medium"
                        >
                          +{p.specializations.length - 5} more
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setSelected(p)}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-indigo-600 text-indigo-700 px-4 py-2 text-sm font-semibold hover:bg-indigo-50 transition"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>

                  <Link to="/apply" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition">
                    Apply Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold">Need assistance with PG admissions?</h3>
            <p className="text-gray-600 mt-1">Contact our admissions team for program guidance and application support.</p>
          </div>

          <div className="flex gap-3">
            <a href="mailto:pg.admissions@university.edu" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="tel:+911234567891" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="/brochure.pdf" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm">
              <Download className="w-4 h-4" /> Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Program modal */}
      {selected && <ProgramModal program={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

/* ---------- small helpers ---------- */


/* ---------- lock body scroll hook ---------- */
function useLockBodyScroll(enabled) {
  useEffect(() => {
    if (!enabled) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [enabled]);
}

/* ---------- ProgramModal component (z-index + viewport safe) ---------- */
function ProgramModal({ program, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start md:items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
    >
      <div
        className="bg-white w-full max-w-2xl shadow-lg border border-gray-200 overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          // Keep modal visible below any fixed navbar; override --navbar-height in CSS if needed.
          maxHeight: "calc(100vh - var(--navbar-height, 96px))",
          borderRadius: 8,
        }}
      >
        <div className="p-6 border-b flex items-start justify-between">
          <div>
            <h3 id="program-modal-title" className="text-xl font-bold">
              {program.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {program.duration} • {program.seats}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-500 px-2 py-1">
            Close
          </button>
        </div>

        <div className="p-6">
          <h4 className="font-semibold text-gray-800 mb-3">Specializations</h4>
          <ul className="grid grid-cols-1 gap-2 text-gray-700">
            {program.specializations.map((s, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50">
                <CheckCircle className="text-green-600 mt-1" />
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800">Eligibility</h4>
            <p className="text-gray-700 mt-2">{program.eligibility}</p>
          </div>

          <div className="mt-6 flex gap-3">
            <Link to="/apply" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 text-sm font-semibold">
              Apply Now <ChevronRight className="w-4 h-4" />
            </Link>
            <a href="/brochure.pdf" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm">
              Download Brochure <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
