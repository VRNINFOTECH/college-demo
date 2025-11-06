// src/Pages/Campus/Clubs.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Users2,
  PartyPopper,
  Music,
  Dumbbell,
  Code,
  Camera,
  ChevronRight,
  PlusCircle,
} from "lucide-react";

export default function Clubs() {
  const clubs = [
    {
      name: "Coding Club",
      icon: <Code className="h-6 w-6" aria-hidden />,
      desc: "Weekly problem solving, hackathons, and open-source sprints for tech enthusiasts.",
      meets: "Fri, 5–7 PM",
      venue: "Lab 3, CS Block",
      link: "#",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Music Ensemble",
      icon: <Music className="h-6 w-6" aria-hidden />,
      desc: "Join our band, choir, or sound-mixing crew — perform at college fests and beyond.",
      meets: "Wed, 4–6 PM",
      venue: "Auditorium Annex",
      link: "#",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Fitness & Wellness",
      icon: <Dumbbell className="h-6 w-6" aria-hidden />,
      desc: "Functional training, yoga sessions, and weekend treks for a healthy campus life.",
      meets: "Mon & Thu, 6–7 AM",
      venue: "Gym & Grounds",
      link: "#",
      img: "https://images.unsplash.com/photo-1594737625785-c0f5d3d7d51a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Photography Circle",
      icon: <Camera className="h-6 w-6" aria-hidden />,
      desc: "Explore creative photo walks, editing workshops, and inter-college exhibits.",
      meets: "Sat, 7–10 AM",
      venue: "Campus Loop",
      link: "#",
      img: "https://images.unsplash.com/photo-1504203700686-0f3c5f1d5780?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Drama & Theatre Club",
      icon: <PartyPopper className="h-6 w-6" aria-hidden />,
      desc: "From street plays to stage performances — express stories that matter.",
      meets: "Tue, 5–7 PM",
      venue: "Drama Hall, Cultural Wing",
      link: "#",
      img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Entrepreneurship Cell",
      icon: <Users2 className="h-6 w-6" aria-hidden />,
      desc: "Build startups, pitch ideas, and connect with mentors and investors.",
      meets: "Thu, 4–6 PM",
      venue: "Innovation Center",
      link: "#",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-6">
        {/* Header / Hero */}
        <header className="py-6 md:py-8">
          <nav
            className="text-sm text-gray-600 mb-3"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">Clubs</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-blue-900">
                <PartyPopper className="h-8 w-8 text-blue-700" aria-hidden />
                Student Clubs & Societies
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Find your community — from technology to theatre, music to
                fitness. Collaborate, perform, and grow beyond academics.
              </p>
            </div>

            <Link
              to="/campus/events"
              className="hidden md:inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
            >
              See Events <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        {/* Clubs grid */}
        <section className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="rounded-lg bg-white/20 p-1 text-white">
                      {c.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{c.name}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-600">{c.desc}</p>
                  <div className="mt-3 text-sm text-gray-600 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Users2 className="h-4 w-4" /> {c.meets}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>{c.venue}</span>
                  </div>

                  <div className="mt-4">
                    <a
                      href={c.link}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800"
                    >
                      Join / Learn More
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Start a new club section */}
        <section className="mt-16 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 flex items-center gap-2">
              <PlusCircle className="h-7 w-7 text-blue-700" />
              Start a New Club
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Have a new idea or passion? Propose a student club to the Student
              Council and make your vision a part of campus life.
            </p>
          </div>

          <Link
            to="#"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 transition font-medium"
          >
            Submit Proposal <ChevronRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}
