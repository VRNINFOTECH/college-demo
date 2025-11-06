// src/Pages/Facilities/Facilities.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Library,
  FlaskConical,
  Dumbbell,
  Wifi,
  Car,
  MapPin,
  ChevronRight,
  Clock,
  Check,
} from "lucide-react";

/**
 * Improved Facilities page:
 * - Adds top gap for sticky navbar (pt-24)
 * - Card layout with image, short amenities, hours, and CTA
 * - Responsive grid, hover elevation and scale
 * - Accessible markup and lazy-loading images
 */

const FACILITIES = [
  {
    key: "library",
    name: "Central Library",
    img: "https://images.unsplash.com/photo-1514894784601-8f7f7a1a8b12?auto=format&fit=crop&w=1400&q=80",
    desc: "1.2L+ volumes, digital subscriptions, quiet study zones and extended exam-season hours.",
    hours: "8 AM – 10 PM",
    amenities: ["Digital repo", "Study carrels", "24/7 access (exam season)", "Inter-library loan"],
    icon: <Library className="h-5 w-5" aria-hidden />,
    link: "#",
  },
  {
    key: "labs",
    name: "Research & Innovation Labs",
    img: "https://images.unsplash.com/photo-1581091012184-7f4f5f0b1b6c?auto=format&fit=crop&w=1400&q=80",
    desc: "AI/ML, Robotics, Embedded & IoT labs with modern instrumentation and faculty-led projects.",
    hours: "9 AM – 8 PM",
    amenities: ["GPU clusters", "PCB shop", "3D printers", "Mentor hours"],
    icon: <FlaskConical className="h-5 w-5" aria-hidden />,
    link: "#",
  },
  {
    key: "sports",
    name: "Sports Complex & Gym",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
    desc: "Indoor courts, weight room, yoga studio, and professional coaching for multiple sports.",
    hours: "6 AM – 10 PM",
    amenities: ["Swimming pool", "Gym floor", "Tennis courts", "Coaching programs"],
    icon: <Dumbbell className="h-5 w-5" aria-hidden />,
    link: "#",
  },
  {
    key: "wifi",
    name: "Campus Wi-Fi",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    desc: "Campus-wide high-speed internet with secure student & guest networks and eduroam support.",
    hours: "24×7",
    amenities: ["1 Gbps backbone", "eduroam", "Dedicated research VLAN", "Guest access"],
    icon: <Wifi className="h-5 w-5" aria-hidden />,
    link: "#",
  },
  {
    key: "hostel",
    name: "Hostels & Dining",
    img: "https://images.unsplash.com/photo-1505691723518-34d6c4f3f3b5?auto=format&fit=crop&w=1400&q=80",
    desc: "Secure accommodations with hygienic dining halls, study rooms and 24×7 warden support.",
    hours: "24×7",
    amenities: ["Single / twin rooms", "Mess with multi-cuisine", "Laundry", "Common rooms"],
    icon: <Building2 className="h-5 w-5" aria-hidden />,
    link: "#",
  },
  {
    key: "transport",
    name: "Parking & Shuttle",
    img: "https://images.unsplash.com/photo-1477900871796-63a5f9ff7a8a?auto=format&fit=crop&w=1400&q=80",
    desc: "Secure parking, EV charging stations and an intra-campus electric shuttle service.",
    hours: "6 AM – 10 PM",
    amenities: ["EV chargers", "Secure parking", "Shuttle stops", "Accessible parking"],
    icon: <Car className="h-5 w-5" aria-hidden />,
    link: "#",
  },
];

export default function Facilities() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <header className="mb-8">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-blue-700" />
                  Campus Facilities
                </h1>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Explore our campus infrastructure — study, research, living and wellness facilities designed to support academic life.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/aboutus/campus-tour"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
                  >
                    Take a Virtual Tour
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm text-slate-900 hover:bg-gray-50 transition"
                  >
                    Book a Visit
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full md:w-96">
                <div className="rounded-xl bg-blue-50 p-3">
                  <div className="text-xs text-slate-700 font-semibold">Open Hours</div>
                  <div className="mt-1 text-lg font-bold text-slate-900">Most facilities: 6 AM – 10 PM</div>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <div className="text-xs text-slate-700 font-semibold">Support</div>
                  <div className="mt-1 text-lg font-bold text-slate-900">helpdesk@college.edu</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* GRID */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <article
              key={f.key}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
              aria-labelledby={`facility-${f.key}-title`}
            >
              {/* Image */}
              <div className="h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-blue-50 p-2 text-blue-700">{f.icon}</div>
                  <div className="flex-1">
                    <h3 id={`facility-${f.key}-title`} className="text-lg font-semibold text-slate-900">
                      {f.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-700">
                    <div className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{f.hours}</span>
                    </div>

                    <div className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">On Campus</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={f.link}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800 transition"
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Amenities */}
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {f.amenities.map((a) => (
                    <li key={a} className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-50 text-green-700 w-5 h-5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Contact / Map CTA */}
        <section id="contact" className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Need help planning a visit?</h4>
              <p className="mt-1 text-sm text-gray-600">Contact our facilities desk for bookings, accessibility requests and EV charging reservations.</p>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:facilities@college.edu" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition">
                Email Facilities
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50 transition">
                View Campus Map
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
