import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  FileText,
  Users2,
  Target,
  Building2,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";

export default function CareerGuidance() {
  const services = [
    {
      title: "Career Counseling",
      desc: "1:1 guidance to map strengths to roles, plan electives, and build your 2–3 year path.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Resume & Portfolio",
      desc: "ATS-friendly resumes, LinkedIn optimization, and GitHub/portfolio reviews.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Mock Interviews",
      desc: "Technical + behavioral interviews with detailed, actionable feedback.",
      icon: <Users2 className="h-6 w-6" />,
    },
    {
      title: "Internships & PPOs",
      desc: "Support finding quality internships and converting them to pre-placement offers.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Skill Roadmaps",
      desc: "Customized learning tracks for roles like SDE, Data, Cybersecurity, Product, and more.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Employer Connect",
      desc: "Talks, panels, and live challenges with our recruiting partners.",
      icon: <Building2 className="h-6 w-6" />,
    },
  ];

  const tracks = [
    {
      name: "Software Engineering",
      bullets: ["DSA practice plan", "Project playbook", "System design primer"],
      to: "/programs/undergraduate",
    },
    {
      name: "Data Science & AI",
      bullets: ["Math refresher", "ML portfolio", "Interview case drills"],
      to: "/programs/postgraduate",
    },
    {
      name: "Cybersecurity",
      bullets: ["Blue/Red focus", "Cert roadmap", "CTF practice"],
      to: "/academics/departments",
    },
  ];

  const faqs = [
    {
      q: "Who can book a career counseling session?",
      a: "All current students and alumni can book 30–45 minute sessions at no cost.",
    },
    {
      q: "How many mock interviews can I take?",
      a: "Up to two per month during placement season; additional sessions on request.",
    },
    {
      q: "Do you review off-campus applications?",
      a: "Yes. We help tailor resumes and outreach for off-campus roles and internships.",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 flex items-center gap-3">
          <Briefcase className="h-8 w-8" />
          Career Guidance
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
          Build the skills, story, and network that unlock internships and
          full-time roles. Our counselors and industry mentors support you from
          exploration to offer.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="#book"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
          >
            Book a Session <Calendar className="h-4 w-4" />
          </Link>
          <Link
            to="/placements/recruiter"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-5 py-3 text-blue-900 hover:bg-blue-50 transition"
          >
            Meet Recruiters <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[{ k: "Counselors", v: "6" }, { k: "Mock Interviews/mo", v: "250+" }, { k: "Offers last year", v: "500+" }].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-blue-900">{s.v}</div>
              <div className="mt-1 text-sm text-gray-500">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">{s.icon}</div>
                <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guided Tracks */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Guided Role Tracks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <Link
              key={t.name}
              to={t.to}
              className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center text-sm text-blue-700">
                Explore <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="max-w-7xl mx-auto px-6 mt-14">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Ready for a 1:1 Session?
            </h3>
            <p className="text-gray-600 mt-1">
              Pick a slot for counseling, resume review, or a mock interview.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
            >
              Book via Calendar <Calendar className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 transition"
            >
              Drop an Email <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">FAQs</h2>
        <div className="divide-y rounded-2xl border border-gray-200 bg-white shadow-sm">
          {faqs.map((f, idx) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer items-center justify-between list-none">
                <span className="text-base font-medium text-gray-900">{f.q}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              {idx < faqs.length - 1 && <div className="mt-5 border-t" />}
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Career Services Desk</h3>
              <p className="text-sm text-gray-600 mt-2">
                Open Mon–Sat, 9:30 AM – 5:30 PM
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4" /> <span>+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4" /> <span>careers@warrencollege.edu</span>
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <Link
                to="/placements/recruiter"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
              >
                Recruiter Relations <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
