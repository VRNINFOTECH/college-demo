// src/Pages/About/Leadership.jsx
import React, { useEffect, useRef } from "react";
import { ChevronRight, Users2, GraduationCap, Trophy, Building2 } from "lucide-react";
import ProfileCard from "../../components/Cards/ProfileCard";
import { Link } from "react-router-dom";

export default function Leaderships() {
  const galleryHero =
    "https://engageindia.ca/wp-content/uploads/2019/11/Group-Photo-v2.png";

  const leaders = [
    {
      name: "Dr. Ramesh Nair",
      role: "Chancellor",
      img: "https://edtech4beginners.com/wp-content/uploads/2021/05/1.png",
      desc: "30+ years in higher education leadership and policy-making.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Prof. Anjali Deshmukh",
      role: "Vice Chancellor",
      img: "https://news.harvard.edu/gazette/wp-content/uploads/2017/09/04017_gordon_reed_003.jpg",
      desc: "Leads academic strategy and institutional development.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Amit Raj",
      role: "Dean, School of Engineering",
      img: "https://admissions.rochester.edu/blog/wp-content/uploads/2019/05/Math-Professor-UR.jpg",
      desc: "Focus on experiential learning and industry programs.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Prof. Neha Suresh",
      role: "Dean, School of Business",
      img: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3078/production/_116580421_university.jpg",
      desc: "Entrepreneurship and leadership curriculum champion.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Sanjay Menon",
      role: "Registrar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeYTvKJvuXVi5WygWq_H8UWHYFVw5cGpK2g&s",
      desc: "Heads academic and administrative operations.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Priya Kamat",
      role: "Director of Research",
      img: "https://t4.ftcdn.net/jpg/02/37/57/23/360_F_237572349_g2HeC2jG2QpCoNrehJJVpZ2ZwvEFpNpL.jpg",
      desc: "Builds research partnerships and grant programs.",
      linkedinUrl: "https://www.linkedin.com/",
    },
  ];

  const awards = [
    { year: 2024, title: "National Teaching Excellence Award", org: "National Council" },
    { year: 2023, title: "Top Research University (Region)", org: "Academic Rankings" },
    { year: 2022, title: "Sustainability Campus Award", org: "GreenEd" },
    { year: 2021, title: "Industry–Academia Partnership Award", org: "Tech Partnerships" },
  ];

  // timeline entries (we'll render them in pairs)
  const timeline = [
    { year: 1998, note: "Founded as Example College of Technology" },
    { year: 2006, note: "Added School of Business and School of Arts" },
    { year: 2014, note: "Launched PhD & Research Centers" },
    { year: 2019, note: "Accredited by national quality agency" },
    { year: 2023, note: "Opened International Collaboration Office" },
  ];

  const advisors = [
    {
      name: "Mr. Rahul Mehta",
      role: "CEO, TechNova Solutions",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=80",
      desc: "Digital transformation and global partnerships.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Lisa Chang",
      role: "Professor, MIT Sloan School",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
      desc: "Research collaborations and student exchanges.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Mr. Arjun Rao",
      role: "Founder, GreenTech India",
      img: "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=900&q=80",
      desc: "Sustainability initiatives and industry ties.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Ms. Hannah Williams",
      role: "Global HR Director, FutureWorks",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      desc: "Employability and leadership development.",
      linkedinUrl: "https://www.linkedin.com/",
    },
  ];

  // refs
  const pageRef = useRef(null);
  const timelineRef = useRef(null);

  // Page-level fade observer (for sections with .fade-item)
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

  // NEW: timeline cards animation — left/right slide-in + stagger
  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    // select both left and right cards
    const cards = Array.from(container.querySelectorAll(".timeline-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // reveal
            el.style.transform = "translateX(0px) translateY(0px)";
            el.style.opacity = "1";
            // unobserve after revealing
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card, idx) => {
      const isLeft = card.classList.contains("left");
      const startX = isLeft ? -48 : 48; // px
      // initial hidden state
      card.style.opacity = "0";
      card.style.transform = `translateX(${startX}px) translateY(18px)`;
      // stagger delay based on index
      const delay = idx * 100; // ms
      card.style.transition = `opacity 640ms cubic-bezier(.22,.9,.32,1) ${delay}ms, transform 640ms cubic-bezier(.22,.9,.32,1) ${delay}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // helper: build rows of two items
  const rows = [];
  for (let i = 0; i < timeline.length; i += 2) {
    rows.push([timeline[i], timeline[i + 1] || null]);
  }

  return (
    <main className="bg-white text-gray-900 pt-24" ref={pageRef}>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden text-white transition-all duration-700 fade-item"
        style={{
          backgroundImage: `url(${galleryHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-sm text-white/90">🏛️ Leadership & Advisory</div>

          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
            Guiding Vision. Lasting Impact.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/95 max-w-3xl">
            Meet the leaders and advisors who shape our academic excellence, research culture, and industry collaborations.
          </p>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{ k: "Alumni", v: "25,000+", Icon: Users2 },
              { k: "Faculty", v: "500+", Icon: GraduationCap },
              { k: "Awards", v: "50+", Icon: Trophy },
              { k: "Industry Partners", v: "120+", Icon: Building2 }].map(({ k, v, Icon }) => (
                <div
                  key={k}
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white/95 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold">
                    <Icon className="h-6 w-6" /> {v}
                  </div>
                  <div className="text-sm opacity-90 mt-1">{k}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= PROMINENT IMAGE + VISION / MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 fade-item">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: large visual */}
          <div className="order-2 lg:order-1">
            <figure className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
                alt="Campus leadership / vision"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          {/* Right: big serif heading + mission/vision */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight text-slate-900">
              Our Vision & Mission
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We aim to cultivate a learning environment that shapes future-ready leaders — blending rigorous academics, real-world experience and ethical leadership.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                <p className="mt-2 text-gray-700">
                  To be a globally recognized university creating knowledge and leaders who transform society through innovation, ethics and service.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                  <li>Deliver high-quality education rooted in research and industry relevance.</li>
                  <li>Foster ethical leadership and entrepreneurial thinking.</li>
                  <li>Engage communities through outreach and applied research.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/aboutus/strategy" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                Read our strategy
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALTERNATING TIMELINE (two cards per row, left + right) ================= */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-5xl mx-auto px-6 py-16 fade-item">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900">Our Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Milestones that shaped our growth</p>
          </div>

          <div ref={timelineRef} className="relative">
            {/* vertical center line between columns */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-blue-500 opacity-30 rounded-full pointer-events-none" />

            <div className="space-y-12">
              {rows.map(([left, right], rowIdx) => (
                <div key={rowIdx} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {/* Left card */}
                  <div className="lg:pr-6 flex justify-end">
                    {left ? (
                      <div className="timeline-card left inline-block bg-white rounded-xl p-6 shadow-sm max-w-md w-full">
                        <div className="text-sm font-semibold text-blue-800">{left.year}</div>
                        <div className="mt-2 text-gray-700">{left.note}</div>
                      </div>
                    ) : (
                      <div className="hidden lg:block w-full" />
                    )}
                  </div>

                  {/* Right card */}
                  <div className="lg:pl-6 flex justify-start">
                    {right ? (
                      <div className="timeline-card right inline-block bg-white rounded-xl p-6 shadow-sm max-w-md w-full">
                        <div className="text-sm font-semibold text-blue-800">{right.year}</div>
                        <div className="mt-2 text-gray-700">{right.note}</div>
                      </div>
                    ) : (
                      <div className="hidden lg:block w-full" />
                    )}
                  </div>

                  {/* Mobile stacked view: show both cards under each other (already present via layout); to ensure mobile readability, we keep a small gap */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP GRID (UNCHANGED) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 fade-item">
        <div className="text-center mb-8 transition-all duration-700">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse team driving academic quality, innovation, and student success.
          </p>
        </div>

        {/* responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {leaders.map((l, i) => (
            <div key={l.name + i} className="largeCard flex justify-center">
              <ProfileCard
                name={l.name}
                role={l.role}
                avatar={l.img}
                bio={l.desc}
                socials={{ linkedin: l.linkedinUrl }}
                avatarSize={160}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVISORY (UNCHANGED) ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 fade-item">
          <div className="text-center mb-8 transition-all duration-700">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Advisory Council</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Distinguished advisors from industry and academia.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((a, i) => (
              <ProfileCard
                key={a.name + i}
                name={a.name}
                role={a.role}
                avatar={a.img}
                bio={a.desc}
                socials={{ linkedin: a.linkedinUrl }}
                avatarSize={96}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= REST OF CONTENTS (kept) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 fade-item">
        <h4 className="text-2xl font-bold text-blue-900 mb-4">Strategic Priorities (2024–2028)</h4>
        <p className="text-gray-700 max-w-3xl">Our roadmap focuses on talent development, research excellence, global partnerships, and sustainability.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Talent & Learning</h4>
            <p className="text-sm text-gray-600 mt-1">Modern pedagogy, micro-credentials & continuous learning.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Research Impact</h4>
            <p className="text-sm text-gray-600 mt-1">Focused investment in cross-disciplinary research centers.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Globalization</h4>
            <p className="text-sm text-gray-600 mt-1">Strategic partnerships, exchanges and joint programs.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Sustainability</h4>
            <p className="text-sm text-gray-600 mt-1">Campus sustainability and curriculum integration.</p>
          </div>
        </div>
      </section>

      {/* Partners & CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12 fade-item">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-blue-900">Industry Partners</h4>
          <p className="text-gray-600">Working with leading companies for placements, projects and research.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">Partner A</div>
          <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">Partner B</div>
          <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">Partner C</div>
          <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">Partner D</div>
        </div>
      </section>

      <section className="bg-indigo-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-12 fade-item">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">Get in touch with our leadership office</h3>
              <p className="text-gray-700 mt-2">For collaborations, partnerships or governance queries — reach out and our office will respond.</p>
            </div>

            <div className="flex gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-blue-700 text-white shadow hover:bg-blue-800 transition">Contact Us</Link>

              <Link to="/governance" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white border border-blue-200 text-blue-700 hover:shadow transition">Governance & Policies</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
