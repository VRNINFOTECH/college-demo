// src/Pages/Research/Patents.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  FileCheck2,
  User2,
  Calendar,
  Hash,
  ChevronRight,
  Search,
} from "lucide-react";

export default function Patents() {
  const allPatents = [
    {
      title: "System and Method for Edge-Aware Video Compression",
      inventors: "S. Rao, P. Nair",
      appNo: "IN2023/012345",
      status: "Granted",
      date: "Feb 12, 2025",
      link: "#",
    },
    {
      title: "Portable Telemetry Device for Low-Bandwidth Networks",
      inventors: "A. Verma, R. Khan",
      appNo: "IN2024/045678",
      status: "Published",
      date: "Sep 03, 2024",
      link: "#",
    },
    {
      title: "Drone-based Multispectral Crop Health Estimation",
      inventors: "V. Shetty, M. Gupta",
      appNo: "IN2025/000987",
      status: "Filed",
      date: "Apr 28, 2025",
      link: "#",
    },
    {
      title: "AI-driven Traffic Signal Controller",
      inventors: "R. Krishnan, A. Patel",
      appNo: "IN2023/098765",
      status: "Granted",
      date: "Dec 10, 2024",
      link: "#",
    },
    {
      title: "Wearable ECG Analyzer with Cloud Sync",
      inventors: "K. Iyer, M. Gupta",
      appNo: "IN2024/076512",
      status: "Published",
      date: "Aug 25, 2024",
      link: "#",
    },
  ];

  const badge = (status) => {
    const base = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs border font-medium";
    if (status === "Granted")
      return `${base} border-green-200 text-green-700 bg-green-50`;
    if (status === "Published")
      return `${base} border-blue-200 text-blue-700 bg-blue-50`;
    return `${base} border-amber-200 text-amber-800 bg-amber-50`;
  };

  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    return allPatents.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.inventors.toLowerCase().includes(q.toLowerCase()) ||
        p.appNo.toLowerCase().includes(q.toLowerCase());
      const matchesStatus = filter === "all" || p.status === filter;
      return matchesQuery && matchesStatus;
    });
  }, [allPatents, q, filter]);

  return (
    <div className="pt-24 pb-20 bg-white text-gray-900">
      <main className="max-w-7xl mx-auto px-6">
        {/* Header / Hero */}
        <header className="py-6 md:py-8">
          <nav className="text-sm text-gray-600 mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">Patents</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-blue-900">
                <Lightbulb className="h-8 w-8 text-blue-700" aria-hidden />
                Patents & Intellectual Property
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Filed, published, and granted patents originating from our
                research labs and innovation centers.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/research/projects"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
              >
                View Projects <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
              >
                Apply for Patent
              </a>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search title, inventor, or application no..."
                className="h-11 pl-10 pr-3 rounded-xl border bg-gray-50 w-full"
                aria-label="Search patents"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-1">Status:</span>
              {["all", "Filed", "Published", "Granted"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    filter === s
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

        {/* Patents Table */}
        <section className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left font-semibold px-4 py-3">Title</th>
                  <th className="text-left font-semibold px-4 py-3">
                    Inventors
                  </th>
                  <th className="text-left font-semibold px-4 py-3">
                    Application No.
                  </th>
                  <th className="text-left font-semibold px-4 py-3">Status</th>
                  <th className="text-left font-semibold px-4 py-3">Date</th>
                  <th className="text-right font-semibold px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-8 text-gray-600 italic"
                    >
                      No patents found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((p, idx) => (
                    <tr
                      key={p.appNo}
                      className={`hover:bg-gray-50 transition ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {p.title}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        <span className="inline-flex items-center gap-1">
                          <User2 className="h-4 w-4" /> {p.inventors}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        <span className="inline-flex items-center gap-1">
                          <Hash className="h-4 w-4" /> {p.appNo}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={badge(p.status)}>{p.status}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {p.date}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <a
                          href={p.link}
                          className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-white hover:bg-blue-800"
                        >
                          Details <ChevronRight className="h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
