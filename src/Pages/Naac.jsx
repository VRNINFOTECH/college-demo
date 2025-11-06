// src/Pages/Naac.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  BookOpen,
  ClipboardList,
  Download,
  Users2,
  CheckCircle2,
  ChevronRight,
  Calendar,
} from "lucide-react";

export default function Naac() {
  const quickLinks = [
    { label: "SSR (Self-Study Report)", href: "#", icon: <FileText className="h-5 w-5" aria-hidden /> },
    { label: "AQAR (Annual Quality Assurance Report)", href: "#", icon: <ClipboardList className="h-5 w-5" aria-hidden /> },
    { label: "DVV Clarifications", href: "#", icon: <ShieldCheck className="h-5 w-5" aria-hidden /> },
    { label: "Best Practices", href: "#", icon: <CheckCircle2 className="h-5 w-5" aria-hidden /> },
    { label: "Institutional Distinctiveness", href: "#", icon: <BookOpen className="h-5 w-5" aria-hidden /> },
  ];

  const criteria = [
    { no: 1, title: "Curricular Aspects", brief: "Design, development and flexibility of curriculum." },
    { no: 2, title: "Teaching–Learning & Evaluation", brief: "Student-centric pedagogy, assessment, outcomes." },
    { no: 3, title: "Research, Innovations & Extension", brief: "Publications, IPR, outreach and collaborations." },
    { no: 4, title: "Infrastructure & Learning Resources", brief: "Classrooms, labs, library, IT facilities." },
    { no: 5, title: "Student Support & Progression", brief: "Scholarships, mentoring, placements and progression." },
    { no: 6, title: "Governance, Leadership & Management", brief: "Policies, IQAC, audits and financial management." },
    { no: 7, title: "Institutional Values & Best Practices", brief: "Inclusivity, sustainability, ethics and practices." },
  ];

  const downloads = [
    { name: "NAAC Certificate", href: "#" },
    { name: "IQAC Policy & Minutes", href: "#" },
    { name: "Academic Calendar", href: "#" },
    { name: "Code of Conduct", href: "#" },
  ];

  return (
    // pt-24 provides the gap under the navbar (adjust if your navbar is taller)
    <div className="pt-24 pb-20 bg-white text-gray-900">
      <main className="max-w-7xl mx-auto px-6" aria-labelledby="naac-heading">
        {/* HERO / HEADER */}
        <section className="relative overflow-hidden py-8 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <nav className="text-sm text-gray-600 mb-3" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link to="/" className="hover:underline">Home</Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-gray-800 font-medium">NAAC</li>
                </ol>
              </nav>

              <h1 id="naac-heading" className="text-3xl md:text-4xl font-extrabold text-blue-900 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-blue-700" aria-hidden />
                NAAC Accreditation
              </h1>

              <p className="mt-4 text-gray-600 max-w-2xl">
                This page presents our compliance, quality initiatives, and evidence for accreditation by the
                National Assessment and Accreditation Council (NAAC). Explore SSR, AQAR, DVV, and other disclosures
                curated by IQAC.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary CTA uses blue-700 for consistency */}
                <a
                  href="#quick-access"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
                >
                  View SSR <ChevronRight className="h-4 w-4" />
                </a>

                <a
                  href="#downloads"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
                >
                  Download AQAR <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Snapshot cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[{k:"Cycle",v:"II"},{k:"CGPA",v:"3.12"},{k:"Grade",v:"A"}].map((s) => (
                <div key={s.k} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-900">{s.v}</div>
                  <div className="mt-1 text-sm text-gray-500">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK ACCESS */}
        <section id="quick-access" className="mt-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((q) => (
              <a
                key={q.label}
                href={q.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition flex items-start gap-4"
                aria-label={q.label}
              >
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">{q.icon}</div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-gray-900">{q.label}</div>
                  <div className="text-xs text-gray-500">PDF / Link</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-300" />
              </a>
            ))}
          </div>
        </section>

        {/* CRITERIA GRID */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">NAAC Criteria (1–7)</h2>
            <a href="#" className="text-sm text-blue-700 hover:underline">Download all templates</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {criteria.map((c) => (
              <article key={c.no} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-blue-700 font-semibold">Criterion {c.no}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.brief}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-sm text-blue-700 hover:underline">Metrics (Key/Qualitative)</a>
                  <span className="text-gray-300">•</span>
                  <a href="#" className="text-sm text-blue-700 hover:underline">Evidence</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* IQAC / SUMMARY */}
        <section className="mt-12">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 flex items-center gap-3">
                  <Users2 className="h-6 w-6 text-blue-700" />
                  Internal Quality Assurance Cell (IQAC)
                </h2>
                <p className="mt-3 text-gray-600">
                  The IQAC steers continuous improvement through audits, feedback, and benchmarking.
                  It coordinates data for NAAC, monitors action plans, and publishes quality reports.
                </p>

                <div className="mt-5 flex gap-3 flex-wrap">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-blue-900 border border-blue-200 px-3 py-1 text-xs">IQAC Composition</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-blue-900 border border-blue-200 px-3 py-1 text-xs">Meeting Minutes</a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-blue-900 border border-blue-200 px-3 py-1 text-xs">Policies</a>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[{ k: "Members", v: "18" }, { k: "Meetings/yr", v: "6" }, { k: "Audits/yr", v: "3" }].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-900">{s.v}</div>
                    <div className="mt-1 text-xs text-gray-600">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS / CALENDAR */}
        <section className="mt-12">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-700" />
                NAAC / IQAC Events & Workshops
              </h3>
              <p className="text-gray-600 mt-1">Orientations, audits, and quality enhancement workshops (QEP).</p>
            </div>

            <div className="flex gap-3">
              <a href="#calendar" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition">
                View Calendar <ChevronRight className="h-4 w-4" />
              </a>

              <a href="#submit-evidence" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 transition">
                Submit Evidence <FileText className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* DOWNLOADS */}
        <section id="downloads" className="mt-12 mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Downloads</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {downloads.map((d) => (
              <a key={d.name} href={d.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-gray-900">{d.name}</div>
                  <Download className="h-4 w-4 text-gray-500" />
                </div>
                <div className="mt-2 text-xs text-gray-500">PDF</div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
