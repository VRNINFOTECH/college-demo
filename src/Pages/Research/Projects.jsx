// src/Pages/Projects.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Clock, CheckCircle2, Users2, Calendar, ChevronRight, Search } from "lucide-react";

export default function Projects() {
  const data = [
    {
      title: "Smart Campus Energy Dashboard",
      lead: "Dr. Anita Verma",
      team: 8,
      status: "Ongoing",
      start: "Jan 2024",
      end: "Dec 2025",
      desc: "Real-time monitoring of power usage with predictive optimization using ML.",
      link: "#",
    },
    {
      title: "Rural Telemedicine Kit",
      lead: "Dr. Vivek Shetty",
      team: 6,
      status: "Completed",
      start: "Jul 2023",
      end: "Jun 2024",
      desc: "Low-cost diagnostic peripherals and Android app for assisted tele-consultation.",
      link: "#",
    },
    {
      title: "Autonomous Quad for Precision Farming",
      lead: "Prof. R. Krishnan",
      team: 10,
      status: "Ongoing",
      start: "Aug 2024",
      end: "Mar 2026",
      desc: "Multispectral imaging and weed detection with on-edge inference.",
      link: "#",
    },
    {
      title: "Student Career Recommendation Engine",
      lead: "Dr. Meera Pawar",
      team: 5,
      status: "Completed",
      start: "Feb 2023",
      end: "Nov 2023",
      desc: "Personalized recommendations for internships & electives using graph-based ML.",
      link: "#",
    },
    {
      title: "Assistive Navigation for Visually Impaired",
      lead: "Prof. S. Iyer",
      team: 7,
      status: "Ongoing",
      start: "Oct 2024",
      end: "Sep 2026",
      desc: "Wearable system combining LIDAR, audio cues and indoor mapping.",
      link: "#",
    },
  ];

  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const statuses = useMemo(() => {
    const s = new Set(data.map((d) => d.status));
    return ["all", ...Array.from(s)];
  }, [data]);

  const filtered = useMemo(
    () =>
      data.filter((p) => {
        const matchesQ =
          !q ||
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.lead.toLowerCase().includes(q.toLowerCase()) ||
          p.desc.toLowerCase().includes(q.toLowerCase());
        const matchesStatus = statusFilter === "all" || p.status === statusFilter;
        return matchesQ && matchesStatus;
      }),
    [data, q, statusFilter]
  );

  const badgeClass = (status) => {
    const base = "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs border";
    if (status === "Ongoing") return `${base} border-blue-200 text-blue-700 bg-blue-50`;
    if (status === "Completed") return `${base} border-green-200 text-green-700 bg-green-50`;
    return `${base} border-gray-200 text-gray-700 bg-gray-50`;
  };

  return (
    // pt-24 ensures a visible gap under a fixed navbar — adjust if your navbar height differs
    <div className="pt-24 pb-16 bg-white text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-blue-900">
                <Wrench className="h-8 w-8 text-blue-700" aria-hidden />
                Research Projects
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Sponsored and in-house projects with tangible impact and student participation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/placements/recruiter"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
              >
                Industry Partners <ChevronRight className="h-4 w-4" />
              </Link>

              <a
                href="#create"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
              >
                Propose Project
              </a>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects, PI, or keywords..."
                className="h-11 pl-10 pr-3 rounded-xl border bg-gray-50 w-full"
                aria-label="Search projects"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-1">Status:</span>
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    statusFilter === s
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {s === "all" ? "All" : s}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Cards grid */}
        <section className="mt-6">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border bg-white p-8 text-center text-gray-600 shadow-sm">
              No projects match your search.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className={badgeClass(p.status)}>
                        {p.status === "Completed" ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : (
                          <Clock className="h-3.5 w-3.5" />
                        )}
                        <span className="sr-only">{p.status}</span>
                      </span>
                      <div className="text-xs text-gray-500">{p.start} — {p.end}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2">
                      <Users2 className="h-4 w-4" aria-hidden /> PI: {p.lead}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>Team: {p.team}</span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800"
                    >
                      View Details
                    </a>
                    <button
                      onClick={() => alert("Interest recorded — replace with real handler.")}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      Express Interest
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
