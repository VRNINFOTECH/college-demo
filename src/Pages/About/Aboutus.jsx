// src/Pages/About/AboutUniversity.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import BookCard from "../../components/Cards/Bookcard";
import Card from "../../components/Cards/Programcards"; // <-- new import for reusable card

export default function AboutUniversity() {
  /** Hero background images */
  const gallery = [
    "https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    "https://img.freepik.com/premium-photo/young-asian-indian-college-students-reading-books-studying-laptop-preparing-exam-working-group-project-while-sitting-grass-staircase-steps-college-campus_466689-8633.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  /** Stats data for book cards */
  const stats = [
    {
      title: "Programs",
      value: "60+",
      img: "https://static.toiimg.com/thumb/msid-122266707,imgsize-188445,width-400,resizemode-4/122266707.jpg",
      detail: "Undergraduate & Postgraduate",
    },
    {
      title: "Placement Rate",
      value: "95%",
      img: "https://www.amity.edu/lucknow/images/placements.jpg",
      detail: "Across all programs",
    },
    {
      title: "Companies",
      value: "500+",
      img: "https://alis.alberta.ca/media/699122/panel-job-interview-istock-1152769811.jpg",
      detail: "Industry partners & recruiters",
    },
    {
      title: "Avg Package",
      value: "₹12 LPA",
      img: "https://paruluniversity.ac.in/app/images/international_program/893675Marquee%20Offer%20-%20Selected%20BHMCT%20students%20-%20Manav%20Patel.jpg",
      detail: "Recent graduating batch",
    },
  ];

  const programs = [
    {
      id: "eng",
      title: "B.Tech — Computer Science",
      short: "AI, ML, Cloud & Systems — Strong industry projects and internships.",
      img: "https://api.hindustanuniv.ac.in/uploads/3_44f219ffa6.jpg",
      duration: "4 years",
    },
    {
      id: "mba",
      title: "MBA — Business & Analytics",
      short: "Data-driven management with live industry capstones.",
      img: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/11/7-Ways-MBA-Could-Accelerate-Your-Career.jpg",
      duration: "2 years",
    },
    {
      id: "bba",
      title: "BBA — Entrepreneurship",
      short: "Startup labs, incubator access and mentorship.",
      img: "https://sgtuniversity.ac.in/assets/images/faculty/commerce-&-management/programme/cm-img-07.jpg",
      duration: "3 years",
    },
    {
      id: "msc",
      title: "M.Sc —Nursing",
      short: "Practical coursework with research-switched electives.",
      img: "https://sgtuniversity.ac.in/assets/images/faculty/allied-health-science/programme/msc_MedicalLaboratoryTechnology.webp",
      duration: "2 years",
    },
  ];

  const facilities = [
    { title: "Cutting-edge Labs", desc: "IoT, Robotics, AI & Cloud labs open to students.", img: "https://www.aacc.edu/media/college/images/students/library/IMG_1513.jpg" },
    { title: "Modern Library", desc: "Hybrid physical + digital collections with study pods.", img: "https://davcollegemansa.com/assets/uploads/library-655572918.jpg" },
    { title: "Sports & Wellness", desc: "Gym, courts, yoga & student counselling services.", img: "https://www.alberts.edu.in/wp-content/uploads/2022/08/IMG_5350-scaled.jpg" },
    { title: "Entrepreneurship Hub", desc: "Seed fund, mentoring & co-working for student startups.", img: "https://www.qmul.ac.uk/sbm/media/sbm/images/entrepreneurship-hub/Ent-Hub-700.jpg" },
  ];

  const testimonials = [
    { name: "Asha R.", program: "B.Tech CSE, 2022", quote: "Placements were real — companies we admired came to campus. Faculty supported every project." },
    { name: "Rahul S.", program: "MBA, 2021", quote: "The industry capstone turned into a full-time offer. Career cell helped a lot." },
    { name: "Meera P.", program: "M.Sc Data Science, 2023", quote: "Research mentors were accessible — we published two papers during the program." },
  ];

  const faqs = [
    { q: "What is the application deadline for 2025-26?", a: "Early applications close May 31, 2025. Final deadline: June 30, 2025." },
    { q: "Are scholarships available?", a: "Yes — merit-based and need-based scholarships are available. Apply during admissions." },
    { q: "Can international students apply?", a: "Yes — we have an International Office to support admissions, visas and housing." },
  ];
  const campusLife = [
  {
    title: "Student Clubs",
    desc: "50+ clubs across arts, tech, sports and entrepreneurship.",
    img: "https://business.stthomas.edu/_media-library/degrees-programs/undergraduate/student-experience/images/stthomas-student-alumni-event.jpg",
    href: "/campus/clubs",
  },
  {
    title: "Events & Festivals",
    desc: "Annual tech fest, cultural week and sports meet bring campus alive.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuQlZ6-aAuHD-3CBBSkNz5Dj4hJFc_f21Qw&s",
    href: "/campus/events",
  },
  {
    title: "Housing & Dining",
    desc: "Safe, comfortable hostels with nutritious meal plans and 24/7 support.",
    img: "https://3.imimg.com/data3/EE/HH/MY-6533282/mess-and-hostel-500x500.png",
    href: "/campus/housing",
  },
];


  const heroGradient = "linear-gradient(90deg, #2B6EF6 0%, #7C3AED 100%)";

  // Fade-in observer: observe elements with .fade-item inside this page
  const pageRef = useRef(null);
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

  return (
    <main className="bg-white text-gray-900 pt-24" ref={pageRef}>
      {/* ===================== HERO ===================== */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${gallery[0]})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 transition-all duration-700 fade-item">
          {/* Subtitle */}
          <div className="text-sm text-white/90 transition-opacity duration-700">
            🏛️ Undergraduate Admissions 2025-26
          </div>

          {/* Heading */}
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md transition-all duration-700">
            Begin Your Journey to Excellence
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg md:text-xl text-white/95 drop-shadow-sm max-w-3xl transition-all duration-700">
            Join thousands of students who have launched successful careers from our undergraduate programs.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white text-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              to="/brochure"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Download Brochure
            </Link>

            <Link
              to="/aboutus/campus-tour"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-transparent border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Schedule Campus Visit <Calendar className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <figure className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-xl shadow-lg transition-all duration-700 fade-item">
            <img
              src={gallery[1]}
              alt="Campus aerial"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute left-4 bottom-4 bg-white/85 text-sm text-slate-800 px-3 py-1 rounded-md shadow">
              Main Campus — Aerial View
            </figcaption>
          </figure>

          {/* Text Section */}
          <div className="prose prose-slate max-w-none transition-all duration-700 fade-item">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              University Overview
            </h2>
            <p>
              Our university is a multidisciplinary institution known for
              rigorous academics, industry collaboration, and an inclusive
              campus culture. Programs span engineering, sciences, management,
              arts, and social sciences.
            </p>

            <h3 className="mt-6 text-xl font-semibold">What sets us apart</h3>
            <ul>
              <li>Interdisciplinary, outcomes-driven curriculum with strong project work.</li>
              <li>Cutting-edge labs, maker spaces, and incubators supporting student startups.</li>
              <li>Global exposure through partner universities, internships, and exchanges.</li>
              <li>Robust placement cell with 500+ recruiting organizations.</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">Mission & Vision</h3>
            <p>
              We exist to create responsible, skilled, and compassionate leaders. Our vision is a world where education and research translate into real societal impact.
            </p>
          </div>
        </div>

        {/* ===================== STATS SECTION (BOOK CARDS) ===================== */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center transition-all duration-700 fade-item">
          {stats.map((s) => (
            <BookCard
              key={s.title}
              frontImage={s.img}
              frontText={s.title}
              backTitle={s.value}
              backBody={s.detail}
              glass={false}
              style={{
                width: "100%",
                maxWidth: 280,
                height: 160,
                borderRadius: "14px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* ===================== PROGRAMS (uses reusable Card component) ===================== */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Featured Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Career-focused programs with strong industry alignment</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Card
                key={p.id}
                title={p.title}
                desc={`${p.short} • ${p.duration}`}
                image={p.img}
                href={`/programs/${p.id}`}
                ctaText="View Program"
                imageHeight="160px"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CAMPUS LIFE ===================== */}
      {/* ===================== CAMPUS LIFE (with Card component) ===================== */}
<section className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
  <div className="text-center mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Campus Life</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">Student clubs, cultural festivals, and community life</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {campusLife.map((item, idx) => (
      <Card
        key={idx}
        title={item.title}
        desc={item.desc}
        href={item.href}
        image={item.img}
        ctaText="Learn More"
        imageHeight="180px"
        bg="#E2E8F0"
        target="_self"
        ariaLabel={item.title}
        style={{ width: "100%", maxWidth: 320 }}
      />
    ))}
  </div>
</section>


      {/* ===================== FACILITIES ===================== */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Labs, libraries, wellness and student resources</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-full h-36 overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900">{f.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RESEARCH & PARTNERSHIPS ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Research & Partnerships</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Active research centers, funded projects and global collaborations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Centers of Excellence</h3>
            <p className="text-gray-700 mt-3">Interdisciplinary centers focussed on AI, Sustainability, Materials and Health Technology — industry-funded projects and student participation at every level.</p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Industry-sponsored labs and internships</li>
              <li>Seed grants for student research</li>
              <li>International exchange & faculty collaborations</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md bg-white p-6">
            <h4 className="font-semibold">Recent Grants & Projects</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>National Science Grant — Renewable Energy Study (2024)</li>
              <li>Industry Collaboration — Smart Mobility (2023)</li>
              <li>EU Partnership — Student Exchange Program (2022)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">What our students say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real stories from students and alumni</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl p-6 bg-gray-50 border shadow-sm">
                <p className="text-gray-800">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-gray-600">
                  — {t.name}, <span className="text-slate-700">{t.program}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Frequently asked questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Answers to common queries</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((f, idx) => (
            <details key={idx} className="p-4 rounded-lg bg-white shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">{f.q}</summary>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ===================== CONTACT / CTA ===================== */}
      <section className="bg-indigo-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-14 fade-item opacity-0 translate-y-6 transition-all duration-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">Ready to take the next step?</h3>
              <p className="text-gray-700 mt-2">Apply now, request a brochure or schedule a campus visit — our admissions team will help you every step of the way.</p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-blue-700 text-white shadow hover:bg-blue-800 transition"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white border border-blue-200 text-blue-700 hover:shadow transition"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
