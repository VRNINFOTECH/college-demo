// src/Pages/About/Leadership.jsx
import React from "react";
import { ChevronRight, Users2, GraduationCap, Trophy, Building2 } from "lucide-react";
import ProfileCard from "../../components/Cards/ProfileCard";
import { Link } from "react-router-dom";

export default function Leaderships() {
  const galleryHero =
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80";

  const leaders = [
    {
      name: "Dr. Ramesh Nair",
      role: "Chancellor",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
      desc: "30+ years in higher education leadership and policy-making.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Prof. Anjali Deshmukh",
      role: "Vice Chancellor",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328d92b6?auto=format&fit=crop&w=900&q=80",
      desc: "Leads academic strategy and institutional development.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Amit Raj",
      role: "Dean, School of Engineering",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=900&q=80",
      desc: "Focus on experiential learning and industry programs.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Prof. Neha Suresh",
      role: "Dean, School of Business",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=80",
      desc: "Entrepreneurship and leadership curriculum champion.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Sanjay Menon",
      role: "Registrar",
      img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c29?auto=format&fit=crop&w=900&q=80",
      desc: "Heads academic and administrative operations.",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Dr. Priya Kamat",
      role: "Director of Research",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
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

  return (
    <main className="bg-white text-gray-900 pt-24">
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden text-white transition-all duration-700"
        style={{
          backgroundImage: `url(${galleryHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-90" />
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
            {[
              { k: "Alumni", v: "25,000+", Icon: Users2 },
              { k: "Faculty", v: "500+", Icon: GraduationCap },
              { k: "Awards", v: "50+", Icon: Trophy },
              { k: "Industry Partners", v: "120+", Icon: Building2 },
            ].map(({ k, v, Icon }) => (
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

      {/* ================= TIMELINE ================= */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our growth
            </p>
          </div>

          <div className="relative w-full">
            <div className="relative h-2 w-full bg-gray-200 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 w-full" />
            </div>
            <div className="relative mt-6 grid gap-4 md:grid-cols-5">
              {timeline.map((t) => (
                <div key={t.year} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-blue-700 rounded-full" />
                    <div className="text-sm font-semibold text-blue-800">{t.year}</div>
                  </div>
                  <div className="mt-2 text-gray-700">{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="text-center mb-8 transition-all duration-700">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse team driving academic quality, innovation, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leaders.map((l, i) => (
              <ProfileCard
                key={l.name + i}
                name={l.name}
                role={l.role}
                avatar={l.img}
                bio={l.desc}
                socials={{ linkedin: l.linkedinUrl }}
              />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-28 self-start">
            {/* Key Metrics */}
            <div className="border bg-white/70 backdrop-blur-md text-gray-900 shadow p-5 rounded-xl">
              <h4 className="text-sm font-semibold text-blue-900 mb-3">
                Key Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  ["25,000+", "Alumni"],
                  ["120+", "Industry Partners"],
                  ["60+", "Programs"],
                  ["92%", "Placement Rate"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-3xl md:text-4xl font-bold text-blue-800">
                      {val}
                    </div>
                    <div className="text-xs text-gray-700 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="border bg-white/70 backdrop-blur-md text-gray-900 shadow p-5 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Awards & Recognitions
              </h4>
              <ul className="text-sm text-gray-800 space-y-2">
                {awards.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-700 font-semibold w-12">{a.year}</span>
                    <span className="flex-1">
                      {a.title} <span className="text-gray-600">({a.org})</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right">
                <Link
                  to="#"
                  className="inline-flex items-center gap-1 text-sm text-blue-700 hover:underline"
                >
                  View all <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Governance */}
            <div className="border bg-white/70 backdrop-blur-md text-gray-900 shadow p-5 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Governance & Policies
              </h4>
              <ul className="text-sm text-gray-800 space-y-2">
                <li><a href="#" className="hover:underline">Statutes & Regulations (PDF)</a></li>
                <li><a href="#" className="hover:underline">IQAC Report (PDF)</a></li>
                <li><a href="#" className="hover:underline">Boards & Council Members</a></li>
                <li><a href="#" className="hover:underline">Anti-Ragging Policy</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= ADVISORY ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8 transition-all duration-700">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Advisory Council
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Distinguished advisors from industry and academia.
            </p>
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
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
