// src/Pages/Academics/Academics.jsx
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users2,
  Beaker,
  ChevronRight,
  LibraryBig,
} from "lucide-react";

export default function Academics() {
  const highlights = [
    {
      title: "Departments",
      desc: "Explore our academic departments, curricula, and labs.",
      to: "/academics/departments",
      icon: <LibraryBig className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Programs",
      desc: "Find undergraduate, postgraduate, and doctoral programs.",
      to: "/programs",
      icon: <BookOpen className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Faculty",
      desc: "Meet our experienced faculty and mentors.",
      to: "/academics/faculty",
      icon: <Users2 className="h-6 w-6" aria-hidden />,
    },
    {
      title: "Research",
      desc: "See publications, projects, and innovation culture.",
      to: "#research",
      icon: <Beaker className="h-6 w-6" aria-hidden />,
    },
  ];

  const programs = [
    {
      name: "Undergraduate",
      desc: "Foundational programs that build strong technical and professional skills.",
      to: "/programs/undergraduate",
    },
    {
      name: "Postgraduate",
      desc: "Deep-dive master's programs crafted with industry needs in mind.",
      to: "/programs/postgraduate",
    },
    {
      name: "PhD Admissions",
      desc: "Pursue advanced research with experienced supervisors and facilities.",
      to: "/programs/phd",
    },
  ];

  // Hero image (replace with your preferred image)
  const heroImage =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80";

  // simple fade-in observer for ".fade-item" sections (re-usable)
  const pageRef = useRef(null);
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll(".fade-item"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => {
      n.classList.add("opacity-0", "translate-y-6");
      obs.observe(n);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen" ref={pageRef}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO / PAGE HEADER - with background image & dark overlay */}
        <header className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden"
            aria-hidden={false}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
              aria-hidden="true"
            />

            {/* Dark overlay for contrast */}
            <div
              className="absolute inset-0 bg-black/55"
              aria-hidden="true"
            />

            {/* Content over the image */}
            <div className="relative z-10">
              <div className="p-6 md:p-8 lg:p-10 fade-item">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <nav
                      className="text-sm text-gray-200 mb-4"
                      aria-label="Breadcrumb"
                    >
                      <ol className="flex items-center space-x-2">
                        <li>
                          <Link to="/" className="hover:underline">
                            <span className="text-gray-200">Home</span>
                          </Link>
                        </li>
                        <li className="text-gray-300">/</li>
                        <li className="text-white font-medium">Academics</li>
                      </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-3">
                      <GraduationCap className="h-8 w-8 text-indigo-300" />
                      Academics
                    </h1>

                    <p className="mt-3 text-gray-200 max-w-2xl leading-relaxed">
                      At Warren College, academics blend rigorous foundations
                      with hands-on learning. Discover departments, meet
                      faculty, and choose programs that align with your goals.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        to="/apply"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 transition"
                      >
                        Apply Now <ChevronRight className="h-4 w-4" />
                      </Link>

                      <Link
                        to="/programs"
                        className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 px-5 py-3 text-indigo-200 hover:bg-white/5 transition"
                      >
                        Browse Programs <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Snapshot / Quick Stats (on the right) */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { k: "Departments", v: "12+" },
                      { k: "Programs", v: "35+" },
                      { k: "Faculty", v: "120+" },
                    ].map((s) => (
                      <div
                        key={s.k}
                        className="rounded-2xl bg-white/8 backdrop-blur-sm border border-white/8 p-4 text-center"
                        style={{ color: "white" }}
                      >
                        <div className="text-2xl md:text-3xl font-bold">
                          {s.v}
                        </div>
                        <div className="mt-1 text-xs opacity-90">{s.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* HIGHLIGHT CARDS */}
        <section
          aria-labelledby="highlights-heading"
          className="mb-10 fade-item opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="flex items-center justify-between mb-4">
            <h2
              id="highlights-heading"
              className="text-xl md:text-2xl font-bold text-slate-900"
            >
              Quick Links
            </h2>
            <p className="text-sm text-gray-600">
              Jump to departments, programs, faculty and research
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <Link
                key={h.title}
                to={h.to}
                className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-700">
                    {h.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{h.desc}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Learn more</span>
                  <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-blue-700 transition" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROGRAMS */}
        <section
          aria-labelledby="programs-heading"
          className="mb-12 fade-item opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="flex items-end justify-between mb-4">
            <h2
              id="programs-heading"
              className="text-xl md:text-2xl font-bold text-slate-900"
            >
              Programs We Offer
            </h2>
            <Link to="/programs" className="text-sm text-blue-700 hover:underline">
              View all programs
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {programs.map((p) => (
              <Link
                key={p.name}
                to={p.to}
                className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* RESEARCH TEASER */}
        <section
          id="research"
          aria-labelledby="research-heading"
          className="mb-12 fade-item opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="rounded-2xl bg-white border border-blue-50 p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2
                  id="research-heading"
                  className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3"
                >
                  <Beaker className="h-6 w-6 text-blue-700" />
                  Research & Innovation
                </h2>
                <p className="mt-3 text-gray-600">
                  From student projects to faculty-led labs, our research spans
                  AI, cybersecurity, sustainability and more. Explore
                  publications, ongoing projects, and opportunities to get
                  involved.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs">
                    AI & ML
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs">
                    Cybersecurity
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 text-xs">
                    Sustainable Tech
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { k: "Publications", v: "250+" },
                  { k: "Active Projects", v: "40+" },
                  { k: "Patents", v: "18" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl border border-blue-50 bg-white p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-bold text-blue-700">{s.v}</div>
                    <div className="mt-1 text-xs text-gray-500">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="mb-12 fade-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                Ready to start your journey?
              </h3>
              <p className="text-gray-600 mt-1">
                Apply today or talk to our admissions team about the right
                program for you.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
              >
                Apply Now <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 transition"
              >
                Explore Programs <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
