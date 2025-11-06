// src/Pages/Publications.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Search,
  Filter,
  FileText,
  Calendar,
  User2,
  ChevronRight,
  Download,
} from "lucide-react";

export default function Publications() {
  // sample publications (extend to your real data)
  const pubs = [
    {
      title: "Efficient Transformer Variants for Edge Deployment",
      authors: "A. Sharma, P. Nair, S. Rao",
      venue: "IEEE Transactions on Neural Networks and Learning Systems",
      year: 2024,
      type: "Journal",
      link: "#",
      pdf: "#",
    },
    {
      title: "Privacy-Preserving Federated Learning for Healthcare",
      authors: "M. Gupta, K. Iyer",
      venue: "ACM CODASPY",
      year: 2023,
      type: "Conference",
      link: "#",
      pdf: "#",
    },
    {
      title: "Low-Power IoT Sensing with Event Cameras",
      authors: "R. Khan, D. Thomas",
      venue: "Sensors",
      year: 2022,
      type: "Journal",
      link: "#",
      pdf: "#",
    },
    // add more entries here...
  ];

  const [q, setQ] = useState("");
  const [filterType, setFilterType] = useState("all");

  // client-side filtering & grouping by year (descending)
  const grouped = useMemo(() => {
    const filtered = pubs.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.authors.toLowerCase().includes(q.toLowerCase()) ||
        p.venue.toLowerCase().includes(q.toLowerCase());
      const matchesType = filterType === "all" || p.type === filterType;
      return matchesQuery && matchesType;
    });

    // group by year
    return filtered.reduce((acc, pub) => {
      const y = pub.year || "Unknown";
      if (!acc[y]) acc[y] = [];
      acc[y].push(pub);
      return acc;
    }, {});
  }, [q, filterType, pubs]);

  // sort years descending
  const years = useMemo(() => {
    return Object.keys(grouped)
      .map((k) => (k === "Unknown" ? k : parseInt(k, 10)))
      .sort((a, b) => {
        if (a === "Unknown") return 1;
        if (b === "Unknown") return -1;
        return b - a;
      });
  }, [grouped]);

  return (
    // pt-24 provides a gap under a fixed navbar — adjust if your navbar is taller
    <div className="pt-24 pb-16 bg-white text-gray-900">
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
              <li className="text-gray-800 font-medium">Publications</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-blue-900">
                <BookOpen className="h-8 w-8 text-blue-700" aria-hidden />
                Publications
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Peer-reviewed journals, conferences and workshops published by our faculty and students.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/programs/phd"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
              >
                Explore PhD <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Search & filter controls */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
            <label htmlFor="pub-search" className="sr-only">
              Search publications
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 w-full md:w-1/2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                id="pub-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by title, author, venue…"
                className="w-full text-sm outline-none"
                aria-label="Search publications"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="h-10 rounded-xl border border-gray-200 bg-white px-3 text-sm"
                aria-label="Filter by publication type"
              >
                <option value="all">All types</option>
                <option value="Journal">Journals</option>
                <option value="Conference">Conferences</option>
                <option value="Workshop">Workshops</option>
              </select>
            </div>
          </div>
        </header>

        {/* Publications list grouped by year */}
        <section aria-labelledby="pubs-heading" className="mt-6">
          <h2 id="pubs-heading" className="sr-only">
            List of Publications
          </h2>

          {years.length === 0 ? (
            <div className="rounded-2xl border bg-white p-8 text-center text-gray-600 shadow-sm">
              No publications match your search.
            </div>
          ) : (
            years.map((yKey) => {
              const y = yKey === "Unknown" ? "Unknown" : yKey;
              const items = grouped[yKey];
              return (
                <div key={String(y)} className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-900">
                      {y}
                    </h3>
                    <div className="text-sm text-gray-500">{items.length} publication{items.length > 1 ? "s" : ""}</div>
                  </div>

                  <div className="mt-4 grid gap-4">
                    {items.map((p) => (
                      <article
                        key={p.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-base font-semibold text-gray-900">
                              {p.title}
                            </h4>

                            <div className="mt-2 text-sm text-gray-600 flex flex-wrap items-center gap-3">
                              <span className="inline-flex items-center gap-1">
                                <User2 className="h-4 w-4" aria-hidden /> {p.authors}
                              </span>

                              <span className="text-gray-300">•</span>

                              <span className="inline-flex items-center gap-1">
                                <FileText className="h-4 w-4" aria-hidden /> {p.venue}
                              </span>

                              <span className="text-gray-300">•</span>

                              <span className="inline-flex items-center gap-1">
                                <Calendar className="h-4 w-4" aria-hidden /> {p.year}
                              </span>
                            </div>
                          </div>

                          <div className="flex-shrink-0 flex gap-2">
                            <a
                              href={p.pdf}
                              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                              aria-label={`Download PDF for ${p.title}`}
                            >
                              <Download className="h-4 w-4" /> PDF
                            </a>

                            <a
                              href={p.link}
                              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800"
                              aria-label={`View details for ${p.title}`}
                            >
                              View <ChevronRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}
