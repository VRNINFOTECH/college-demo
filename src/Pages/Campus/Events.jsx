// src/Pages/Events/Events.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock,
  Ticket,
  ChevronRight,
  Music,
  Code,
  BookOpen,
  Star,
} from "lucide-react";

const ALL_EVENTS = [
  {
    id: "genai-talk",
    title: "Tech Talk: GenAI in the Enterprise",
    category: "Talk",
    date: "2025-11-28",
    displayDate: "Nov 28, 2025",
    time: "3:00–5:00 PM",
    venue: "Auditorium",
    desc:
      "Industry leaders discuss adoption patterns, case studies, and career-ready skills in GenAI.",
    img: "https://images.unsplash.com/photo-1526378723347-9f470168c45b?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "rhapsody-fest",
    title: "Cultural Fest: Rhapsody",
    category: "Festival",
    date: "2025-12-12",
    displayDate: "Dec 12–13, 2025",
    time: "All day",
    venue: "Central Grounds",
    desc:
      "Two-day celebration of music, dance, food stalls and inter-college competitions.",
    img: "https://images.unsplash.com/photo-1506152983158-7f2f7d5c6e8b?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "build-bharat",
    title: "Hackathon: Build for Bharat",
    category: "Hackathon",
    date: "2026-01-10",
    displayDate: "Jan 10–11, 2026",
    time: "24-hour sprint",
    venue: "Innovation Lab",
    desc:
      "Collaborative hack with problem statements from social-impact partners and startups.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "band-night",
    title: "Campus Band Night: Electric Echoes",
    category: "Concert",
    date: "2025-11-21",
    displayDate: "Nov 21, 2025",
    time: "7:00–10:30 PM",
    venue: "Open Air Stage",
    desc:
      "Popular indie bands and student ensembles perform live — food trucks & merch stalls on site.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "drama-evening",
    title: "Theatre: 'Shifting Winds' — College Play",
    category: "Performance",
    date: "2025-11-30",
    displayDate: "Nov 30, 2025",
    time: "6:00–8:30 PM",
    venue: "Drama Hall",
    desc: "An original student production exploring change, identity, and belonging.",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "ml-workshop",
    title: "Workshop: ML for Edge Devices",
    category: "Workshop",
    date: "2025-12-04",
    displayDate: "Dec 04, 2025",
    time: "10:00 AM–4:00 PM",
    venue: "Lab 5",
    desc:
      "Hands-on workshop: train small models & deploy on microcontrollers — limited seats.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
  {
    id: "open-mic",
    title: "Open Mic & Poetry Slam",
    category: "Open Mic",
    date: "2025-11-25",
    displayDate: "Nov 25, 2025",
    time: "5:00–8:00 PM",
    venue: "Café Terrace",
    desc:
      "Student poets, musicians and storytellers perform — sign-ups on arrival (first-come).",
    img: "https://images.unsplash.com/photo-1544785349-c4a5301826fd?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    register: "#",
  },
];

const CATEGORIES = ["All", "Concert", "Festival", "Hackathon", "Workshop", "Talk", "Performance", "Open Mic"];

export default function Events() {
  // local UI state for simple filtering
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = ALL_EVENTS.filter((e) => {
    const matchesCat = category === "All" ? true : e.category === category;
    const matchesQ =
      !query ||
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.desc.toLowerCase().includes(query.toLowerCase()) ||
      e.venue.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQ;
  });

  // featured upcoming (closest future dates simple sort)
  const featured = [...ALL_EVENTS].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);

  return (
    <div className="pt-24 pb-16 bg-white text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="relative mb-8">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 shadow-sm border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-blue-900">
                  <CalendarDays className="h-8 w-8 text-blue-700" />
                  Campus Events & Activities
                </h1>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Talks, concerts, hackathons, fests, workshops and student performances — find something that excites you.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
                  >
                    Submit an Event
                  </a>
                  <a
                    href="#featured"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-4 py-2 text-blue-900 hover:bg-blue-50 transition"
                  >
                    Featured Events
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* small featured tiles */}
              <div className="w-full md:w-2/5 grid grid-cols-1 gap-3">
                {featured.map((f) => (
                  <article key={f.id} className="relative rounded-xl overflow-hidden border bg-white shadow-sm flex gap-3">
                    <img src={f.img} alt={f.title} className="w-36 h-24 object-cover" loading="lazy" />
                    <div className="p-3 flex-1">
                      <div className="text-sm font-semibold text-gray-900">{f.title}</div>
                      <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {f.time}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {f.venue}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS + LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — event list (main) */}
          <div className="lg:col-span-2">
            {/* search + categories */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search events, venues or descriptions..."
                  className="w-full md:w-96 h-11 rounded-xl border bg-white px-4 outline-none"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 text-sm rounded-full border ${
                      category === c ? "bg-blue-700 text-white border-blue-700" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* events grid */}
            <div className="grid gap-6">
              {filtered.map((e) => (
                <article
                  key={e.id}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-56 h-44 md:h-auto overflow-hidden">
                    <img src={e.img} alt={e.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                          {e.category}
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-gray-900">{e.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 max-w-prose">{e.desc}</p>
                      </div>

                      <div className="text-right text-sm text-gray-600">
                        <div className="mb-1 inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {e.displayDate}</div>
                        <div className="mb-2 inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {e.time}</div>
                        <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {e.venue}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <a href={e.link} className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800">
                        Details
                      </a>
                      <a href={e.register} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
                        <Ticket className="h-4 w-4" /> Register
                      </a>

                      <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span>Free / Paid (see details)</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">No events found for your filters.</div>
              )}
            </div>
          </div>

          {/* Right — sidebar */}
          <aside className="space-y-6">
            {/* Next 7 days (simple) */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900">Upcoming (next 7 days)</h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">
                {ALL_EVENTS.filter((e) => {
                  // naive upcoming: any event with date >= today but within next 30 days for demo
                  return true;
                })
                  .slice(0, 4)
                  .map((e) => (
                    <li key={e.id} className="flex items-center gap-3">
                      <img src={e.img} alt={e.title} className="w-12 h-8 object-cover rounded-md" loading="lazy" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{e.title}</div>
                        <div className="text-xs text-gray-500">{e.displayDate} • {e.time}</div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Calendar teaser */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900">Calendar</h4>
              <p className="mt-2 text-sm text-gray-600">Sync upcoming events with your calendar for reminders.</p>
              <div className="mt-3 flex gap-2">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800">
                  Add to Google Calendar
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
                  Export .ics
                </a>
              </div>
            </div>

            {/* Featured categories / CTA */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900">Popular</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Concert", "Hackathon", "Workshop", "Festival", "Open Mic"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setCategory(t)}
                    className="px-3 py-1.5 rounded-full text-sm border bg-gray-100 hover:bg-gray-200"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <Link to="/events/archive" className="text-sm text-blue-700 hover:underline">View archived events</Link>
              </div>
            </div>
          </aside>
        </section>

        {/* Submit an event */}
        <section id="submit" className="mt-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Submit an Event</h2>
            <form className="grid md:grid-cols-2 gap-4">
              <input className="rounded-lg border border-gray-300 px-3 py-2" placeholder="Event Title" />
              <input className="rounded-lg border border-gray-300 px-3 py-2" placeholder="Venue" />
              <input type="date" className="rounded-lg border border-gray-300 px-3 py-2" />
              <input className="rounded-lg border border-gray-300 px-3 py-2" placeholder="Time (e.g. 5:00–7:00 PM)" />
              <select className="rounded-lg border border-gray-300 px-3 py-2">
                <option>Category</option>
                <option>Concert</option>
                <option>Talk</option>
                <option>Hackathon</option>
                <option>Workshop</option>
                <option>Festival</option>
                <option>Open Mic</option>
              </select>
              <input className="rounded-lg border border-gray-300 px-3 py-2" placeholder="Organizer contact (email/phone)" />
              <textarea className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2" placeholder="Short description (max 300 chars)" rows={4} />
              <div className="md:col-span-2 flex justify-end gap-3">
                <button type="reset" className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Reset</button>
                <button type="button" className="rounded-lg bg-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-800">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
