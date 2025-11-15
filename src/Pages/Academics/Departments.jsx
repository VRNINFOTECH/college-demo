// src/Pages/Departments.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Departments.jsx
 *
 * - Grid of departments with modal details
 * - Framer Motion animations
 * - Accessible modal with escape-to-close & focus return
 * - TailwindCSS-based layout (no rounded corners)
 *
 * Usage: add route /departments -> <Departments />
 */

const DEPARTMENTS = [
  {
    id: "cse",
    title: "Computer Science & Engineering",
    hod: "Dr. K. Venkat",
    img:
      "https://www.dr.du.ac.in/sites/default/files/2023-09/eco.jpg",
    facultyCount: 38,
    programs: ["B.Tech (CSE)", "M.Tech (CSE)", "PhD (CSE)", "Certificate: AI & ML"],
    email: "cse-dept@exampleuniversity.edu",
    short:
      "Focuses on core computing, AI, systems and software engineering. Strong industry linkages and research labs.",
    long: `The Computer Science & Engineering department offers a broad curriculum from fundamentals to advanced research.
Labs include AI & ML, Systems, Networks, Security and Human-Computer Interaction. Students engage in capstone projects with industry partners and publish in peer-reviewed venues. Specialized tracks: Artificial Intelligence, Data Science, Cybersecurity, and Cloud Engineering.`,
  },
  {
    id: "ece",
    title: "Electronics & Communication Engineering",
    hod: "Prof. R. Sinha",
    img:
      "https://www.dr.du.ac.in/sites/default/files/2025-03/com.jpg",
    facultyCount: 30,
    programs: ["B.Tech (ECE)", "M.Tech (VLSI & Embedded)", "PhD (ECE)"],
    email: "ece-dept@exampleuniversity.edu",
    short:
      "Teaches signal processing, VLSI, communications and embedded systems with modern labs and industry projects.",
    long:
      "ECE department is well-known for expertise in VLSI design, RF & communications, and signal processing. The department runs specialized labs in VLSI, RF labs, Embedded Systems and IoT. Industry partnerships provide internships and placement pathways in semiconductor and telecom sectors.",
  },
  {
    id: "mech",
    title: "Mechanical Engineering",
    hod: "Dr. S. Rao",
    img:
      "https://www.dr.du.ac.in/sites/default/files/2025-07/faculty%20picture%20%281%29%20%281%29.jpg",
    facultyCount: 28,
    programs: ["B.Tech (Mechanical)", "M.Tech (Design)", "PhD (Mechanical)"],
    email: "mech-dept@exampleuniversity.edu",
    short:
      "Covers design, thermodynamics, manufacturing and robotics with strong labs and maker spaces.",
    long:
      "Mechanical Engineering focuses on fundamentals of design, thermal sciences, manufacturing and robotics. The department houses CNC/machine labs, a robotics cell, and additive manufacturing facilities. Students participate in Formula Student, robotics competitions and industry internships.",
  },
  {
    id: "civil",
    title: "Civil Engineering",
    hod: "Prof. N. Prakash",
    img:
      "https://www.dr.du.ac.in/sites/default/files/2025-03/608A1535%20%281%29.jpg",
    facultyCount: 18,
    programs: ["B.Tech (Civil)", "M.Tech (Structural)", "PhD (Civil)"],
    email: "civil-dept@exampleuniversity.edu",
    short:
      "Strong in structural engineering, geotechnical studies, water resources and sustainable infrastructure.",
    long:
      "Civil department offers courses in structural engineering, geotechnics, transportation and water resources. Field labs, soil testing, structural labs and a focus on sustainable urban design prepare students for industry and research careers.",
  },
  {
    id: "mba",
    title: "School of Business (MBA)",
    hod: "Dr. Meera Iyer",
    img:
      "https://www.apce.in/img/mba1.png",
    facultyCount: 22,
    programs: ["MBA (Full-time)", "Executive MBA", "PhD (Management)"],
    email: "mba-dept@exampleuniversity.edu",
    short:
      "Industry-aligned MBA programs, entrepreneurship cell and corporate incubation support.",
    long:
      "School of Business offers MBA and Executive programs with concentrations in Finance, Marketing, Operations and Strategy. The school emphasizes case-method teaching, live industry projects, incubation support and placement training.",
  },
  {
    id: "science",
    title: "Sciences (Physics, Chemistry, Maths)",
    hod: "Dr. L. Thomas",
    img:
      "https://www.shutterstock.com/image-photo/business-woman-her-staff-people-260nw-2024241281.jpg",
    facultyCount: 35,
    programs: ["BSc (Hons)", "MSc", "PhD"],
    email: "science-dept@exampleuniversity.edu",
    short:
      "Core sciences supporting interdisciplinary research and foundational courses across programs.",
    long:
      "The Sciences division fosters research in physics, chemistry and mathematics with active collaborations across engineering and life sciences. Facilities include spectroscopy labs, computational clusters and advanced instrumentation.",
  },
  {
    id: "law",
    title: "School of Law",
    hod: "Prof. A. Gupta",
    img:
      "https://www.spmlawcollege.ac.in/images/teaching-b1.jpg",
    facultyCount: 12,
    programs: ["LLB", "BA LLB", "LLM", "PhD (Law)"],
    email: "law-dept@exampleuniversity.edu",
    short:
      "Legal education with clinical legal aid, moot courts, and policy research opportunities.",
    long:
      "School of Law integrates doctrinal study with clinical legal education, moot court programs and policy research. Graduates work across corporate law, public policy and human rights sectors.",
  },
  {
    id: "design",
    title: "School of Design & Fine Arts",
    hod: "Ms. R. Kapoor",
    img:
      "https://www.tjcomcollege.in/wp-content/uploads/2021/01/Pass-Port-2-030.jpg",
    facultyCount: 14,
    programs: ["B.Des", "M.Des", "Certificate: UX Design"],
    email: "design-dept@exampleuniversity.edu",
    short:
      "Creative studio culture with hands-on workshops in product, UX, and visual arts.",
    long:
      "The design school nurtures creativity in product design, visual communication and UX. Facilities include studios, fabrication labs, printmaking and exhibition spaces. Students showcase work at national design festivals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* Accessible modal component */
function DepartmentModal({ dept, onClose }) {
  const modalRef = useRef(null);

  // Return focus to last focused element after close (caller handles focus save)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus first focusable inside modal
    const prev = document.activeElement;
    setTimeout(() => {
      const focusable = modalRef.current?.querySelector("button, a, [tabindex]");
      focusable?.focus();
    }, 10);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [onClose]);

  if (!dept) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dept-${dept.id}-title`}
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <motion.section
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative z-10 bg-white w-full max-w-3xl shadow-xl border"
      >
        <div className="flex items-start gap-4">
          <div className="w-1/3 hidden md:block">
            <img src={dept.img} alt={dept.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 flex-1">
            <h2 id={`dept-${dept.id}-title`} className="text-2xl font-semibold text-gray-900">
              {dept.title}
            </h2>
            <p className="text-sm text-blue-700 font-medium mt-1">{dept.hod} — Head of Department</p>
            <p className="mt-4 text-gray-700">{dept.long}</p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Programs</h4>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                {dept.programs.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${dept.email}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Contact: {dept.email}
              </a>

              <Link
                to={`/programs/${dept.id}`}
                className="ml-auto inline-block bg-blue-700 text-white px-4 py-2 text-sm rounded-sm"
              >
                View Programs
              </Link>

              <button
                onClick={onClose}
                className="ml-2 text-sm px-3 py-2 border rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default function Departments() {
  const [selected, setSelected] = useState(null);
  const openerRef = useRef(null);

  // save and restore focus for accessibility when opening modal
  const openModal = (dept, opener) => {
    openerRef.current = opener ?? document.activeElement;
    setSelected(dept);
  };
  const closeModal = () => {
    setSelected(null);
    try {
      openerRef.current?.focus();
    } catch (e) {}
  };

  return (
    <main className="pt-44 md:pt-40 bg-white text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Departments</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Learn about our academic departments, their programs, research strengths and contact information.
          </p>
        </motion.div>

        {/* search & filter area (simple) */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="search"
            placeholder="Search departments (e.g., 'engineering', 'design')"
            className="w-full md:w-1/2 px-4 py-2 border text-sm"
            onChange={(e) => {
              // simple client-side filter could be wired here if desired
            }}
            aria-label="Search departments"
          />
          <div className="ml-auto flex gap-3">
            <Link to="/programs" className="px-3 py-2 border text-sm">All Programs</Link>
            <a href="#contact" className="px-3 py-2 bg-blue-700 text-white text-sm">Contact Admissions</a>
          </div>
        </div>

        {/* Departments grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((d) => (
            <motion.article
              key={d.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{d.title}</h3>
                  <p className="text-sm text-blue-700 font-medium mt-1">{d.hod}</p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">{d.short}</p>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-700 mb-2"><strong>Programs:</strong> {d.programs.slice(0, 2).join(", ")}{d.programs.length > 2 ? "…" : ""}</div>
                  <div className="text-sm text-gray-700">Faculty: <span className="font-semibold">{d.facultyCount}</span></div>
                  <div className="text-sm text-gray-700">Email: <a href={`mailto:${d.email}`} className="text-blue-600 hover:underline">{d.email}</a></div>
                </div>

                <div className="mt-4 flex gap-3 items-center">
                  <Link to={`/programs/${d.id}`} className="text-sm inline-block px-3 py-2 bg-blue-700 text-white">
                    View Programs
                  </Link>
                  <button
                    onClick={(e) => openModal(d, e.currentTarget)}
                    className="text-sm px-3 py-2 border"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* modal */}
      {selected && <DepartmentModal dept={selected} onClose={closeModal} />}

      {/* quick contact */}
      <section id="contact" className="bg-slate-50 border-t py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Contact Academic Office</h3>
          <p className="text-gray-600 mt-2">For queries about programs and faculty, contact the academic office.</p>
          <div className="mt-4">
            <a href="mailto:academics@exampleuniversity.edu" className="text-blue-700 hover:underline">academics@exampleuniversity.edu</a>
          </div>
        </div>
      </section>
    </main>
  );
}
