// src/Pages/Academics/Departments.jsx
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  BookOpen,
  Users,
  Cpu,
  Briefcase,
  Beaker,
  Layers,
  Award,
} from "lucide-react";

/* ---------------------- sample data (replace as needed) --------------------- */
const UNDERGRAD_DEPTS = [
  {
    id: "engineering",
    title: "School of Engineering",
    snippet: "B.Tech degrees across Computer Science, ECE, Mechanical, Civil and more.",
    icon: Cpu,
    img:
      "https://images.stockcake.com/public/e/b/3/eb39d646-8acf-4d5c-a7f2-4c551ce59604_large/engineering-team-working-stockcake.jpg",
  },
  {
    id: "cs",
    title: "School of Information Technology and Animation",
    snippet: "Programs:BCA in AI & ML,Cloud computing,Software Technology,MCA in AI & ML,Cloud computing,Software Technology,BAM-Animation and multimedia",
    icon: BookOpen,
    img:
      "https://aaft.com/assets/Images/Updated/animation(1).jpg",
  },
  {
    id: "business",
    title: "School of Business",
    snippet: "Programs: BBA, MBA — Entrepreneurship, Analytics, Finance,Logistics,Professional",
    icon: Briefcase,
    img:
      "https://sgtuniversity.ac.in/assets/images/faculty/commerce-&-management/programme/cm-img-08.jpg",
  },
  {
    id: "science",
    title: "School of Sciences",
    snippet: "Programs: B.Sc (Physics/Chemistry/Maths), M.Sc and doctoral research.",
    icon: Beaker,
    img:
      "https://imgs.search.brave.com/wNptkJ8liS9TLNzsRtUmLEZSfT5jVxu4vmhcD2cwXLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tZWRp/Y2FsLXN0dWRlbnRz/LXNpdHRpbmctYXVk/aWVuY2UtdXN1YWx5/LTEzOTAxMzQwNS5q/cGc",
  },
  {
    id: "arts",
    title: "School of Arts & Humanities",
    snippet: "Programs: BA, MA — English, Psychology, Economics.",
    icon: Users,
    img:
      "https://images.shiksha.com/mediadata/images/articles/1616584545phprfoS5W.jpeg",
  },
  {
    id: "pharmacy",
    title: "School of Pharmacy",
    snippet: "B.Pharm and M.Pharm — focusing on pharmaceutics & industry projects.",
    icon: Award,
    img:
      "https://www.himalayanbuzz.com/wp-content/uploads/2020/05/Manu_Bora_Doctor.jpg",
  },
];

const POSTGRAD_DEPTS = [
  {
    id: "mtech-cse",
    title: "M.Tech — Computer Science & Engineering",
    snippet: "Advanced coursework, thesis and research in AI, systems and security.",
    icon: Cpu,
    img:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/coaching.jpeg?size=1200:675",
  },
  {
    id: "mtech-ds",
    title: "M.Tech — Data Science",
    snippet: "Deep learning, data engineering and applied analytics with industry capstones.",
    icon: BookOpen,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoED3bPVUd-8S-iRD4F_Aoxf27ELSzu7AiPg&s",
  },
  {
    id: "mba",
    title: "MBA — Business & Analytics",
    snippet: "Two-year MBA with specializations in Finance, Marketing, HR and Analytics.",
    icon: Briefcase,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOUfsM5h5rNDfkPpSvEvqfW9nac1uHCrrfQ&s",
  },
  {
    id: "msc",
    title: "M.Sc — Sciences",
    snippet: "Discipline-specific master's programs with research components.",
    icon: Beaker,
    img:
      "https://gradepowerlearning.com/wp-content/uploads/2021/03/GettyImages-469951129.jpg",
  },
];

const DOCTORAL_AREAS = [
  {
    id: "phd-cse",
    title: "Ph.D — Computer Science & Engineering",
    snippet: "Research in AI, ML, Systems, Security and Data Science.",
    icon: Cpu,
    img:
      "https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?s=612x612&w=0&k=20&c=Cg9aAKKOFJkukureA3hzdnXin42O-GCBP60b4h5CLic=",
  },
  {
    id: "phd-ece",
    title: "Ph.D — Electronics & Communication",
    snippet: "VLSI, signal processing and embedded systems research.",
    icon: BookOpen,
    img:
      "https://imagesvs.oneindia.com/img/2018/09/indian-students-in-uk-1536727681.jpg",
  },
  {
    id: "phd-management",
    title: "Ph.D — Management",
    snippet: "Research in strategy, leadership, organizational behavior and analytics.",
    icon: Users,
    img:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "phd-basic",
    title: "Ph.D — Basic Sciences",
    snippet: "Doctoral research in Physics, Chemistry, Mathematics and interdisciplinary fields.",
    icon: Beaker,
    img:
      "https://img.jagranjosh.com/images/2025/09/25/article/image/Student-Capital-of-India-1758798060646.webp",
  },
];

const TABS = [
  { key: "undergraduate", label: "Undergraduate" },
  { key: "postgraduate", label: "Postgraduate" },
  { key: "doctoral", label: "Doctoral (Ph.D)" },
];

/* ------------------------------ component -------------------------------- */
export default function Departments() {
  const location = useLocation();
  const navigate = useNavigate();
  const initial = (location.hash || "").replace("#", "") || "undergraduate";

  const [active, setActive] = useState(
    TABS.some((t) => t.key === initial) ? initial : "undergraduate"
  );
  const containerRef = useRef(null);
  const tabsRef = useRef([]);

  // sync to URL hash + animate
  useEffect(() => {
    if ((location.hash || "").replace("#", "") !== active) {
      navigate(`#${active}`, { replace: true });
    }
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    requestAnimationFrame(() => {
      el.style.transition =
        "opacity 420ms cubic-bezier(.22,.9,.32,1), transform 420ms cubic-bezier(.22,.9,.32,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    const t = setTimeout(() => {
      if (el) el.style.transition = "";
    }, 520);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // if user manually navigates hash, update state
  useEffect(() => {
    const h = (location.hash || "").replace("#", "");
    if (h && TABS.some((t) => t.key === h) && h !== active) {
      setActive(h);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  // keyboard left/right arrow navigation for tabs
  useEffect(() => {
    const onKey = (e) => {
      const idx = TABS.findIndex((t) => t.key === active);
      if (e.key === "ArrowRight") {
        const next = TABS[(idx + 1) % TABS.length].key;
        setActive(next);
        tabsRef.current[(idx + 1) % TABS.length]?.focus();
      } else if (e.key === "ArrowLeft") {
        const prev = TABS[(idx - 1 + TABS.length) % TABS.length].key;
        setActive(prev);
        tabsRef.current[(idx - 1 + TABS.length) % TABS.length]?.focus();
      } else if (e.key === "Home") {
        setActive(TABS[0].key);
        tabsRef.current[0]?.focus();
      } else if (e.key === "End") {
        setActive(TABS[TABS.length - 1].key);
        tabsRef.current[TABS.length - 1]?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const items = useMemo(() => {
    if (active === "undergraduate") return UNDERGRAD_DEPTS;
    if (active === "postgraduate") return POSTGRAD_DEPTS;
    return DOCTORAL_AREAS;
  }, [active]);

  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">Programs Offered</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Learn about our academic departments, their programs, research strengths and contact information.
          </p>

        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <nav
            aria-label="Departments tabs"
            className="inline-flex gap-3 bg-white/40 rounded-full p-1 shadow-sm border border-gray-100"
            role="tablist"
          >
            {TABS.map((t, idx) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  onClick={() => setActive(t.key)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.key}`}
                  id={`tab-${t.key}`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <section
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          ref={containerRef}
          aria-live="polite"
          className="space-y-6"
        >
          {items.map((d) => {
            const Icon = d.icon || Layers;
            return (
              <article
                key={d.id}
                className="group rounded-lg border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row md:items-start gap-4 hover:shadow-lg transition"
              >
                {/* Thumbnail (hidden on small screens) */}
                <div className="hidden md:block flex-shrink-0 w-40 h-28 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Main content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-blue-700">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <div>
                      {/* TITLE with animated underline */}
                      <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                        <Link
                          to={`#/departments/${encodeURIComponent(d.id)}`}
                          className="group inline-flex items-center gap-2"
                        >
                          <span className="relative">
                            <span className="group-hover:text-blue-700 transition-colors">{d.title}</span>

                            {/* animated underline element */}
                            <span
                              aria-hidden="true"
                              className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                            />
                          </span>
                        </Link>
                      </h2>

                      <p className="mt-2 text-gray-700">{d.snippet}</p>

                      {/* meta / small actions */}
                      <div className="mt-3 flex items-center gap-3">
                        <Link
                          to={`#/departments/${encodeURIComponent(d.id)}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                        >
                          View department
                          <ChevronRight className="w-4 h-4" />
                        </Link>

                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Contact: <a href={`mailto:info@university.edu`} className="text-blue-600 hover:underline">info@university.edu</a></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read more CTA (on right for md+) */}
                <div className="flex-shrink-0 self-start md:self-center">
                  <Link
                    to={`#/departments/${encodeURIComponent(d.id)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
                    title={`Read more about ${d.title}`}
                  >
                    Read more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}

          <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-6 text-center bg-gray-50">
            <p className="text-gray-700 mb-3">
              Can't find the department you're looking for? Contact our academic office for tailored guidance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 transition"
            >
              Contact Academic Office
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
