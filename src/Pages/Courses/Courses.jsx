// src/Pages/Academics/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Download, ChevronRight } from "lucide-react";

/**
 * Courses page
 * - Maintains same look & feel as other pages (pt-24 gap for navbar)
 * - Programs -> semesters -> subjects with credits
 * - Uses native <details> for collapsible semester content (accessible)
 *
 * Extend `CATALOG` with more programs / semesters as needed.
 */

const CATALOG = [
  {
    department: "School of Engineering",
    programs: [
      {
        code: "B.E. - CSE",
        title: "Bachelor of Engineering — Computer Science & Engineering",
        duration: "4 years (8 semesters)",
        totalCredits: 160,
        overview:
          "Core computing foundations with electives in AI, Systems, Security and Cloud. Strong project and internship emphasis.",
        syllabusLink: "#",
        semesters: [
          {
            sem: 1,
            title: "Semester I",
            credits: 20,
            courses: [
              { code: "CS101", name: "Programming & Problem Solving", credits: 4 },
              { code: "MA101", name: "Calculus & Linear Algebra", credits: 4 },
              { code: "PH101", name: "Engineering Physics", credits: 3 },
              { code: "ME101", name: "Engineering Graphics", credits: 3 },
              { code: "BE101", name: "Professional Communication", credits: 2 },
              { code: "Lab-CS101", name: "Programming Lab", credits: 2 },
              { code: "HS101", name: "Environmental Studies", credits: 2 },
            ],
          },
          {
            sem: 2,
            title: "Semester II",
            credits: 20,
            courses: [
              { code: "CS102", name: "Data Structures & Algorithms", credits: 4 },
              { code: "MA102", name: "Discrete Mathematics", credits: 3 },
              { code: "EE101", name: "Basic Electrical Engineering", credits: 3 },
              { code: "CS103", name: "Object-Oriented Programming", credits: 4 },
              { code: "Lab-DSA", name: "DSA Lab", credits: 2 },
              { code: "BE102", name: "Engineering Ethics & Practice", credits: 2 },
              { code: "SI101", name: "Workshop / Skill Lab", credits: 2 },
            ],
          },
          // ... add semesters 3..8 similarly
        ],
      },

      {
        code: "B.E. - ECE",
        title: "Bachelor of Engineering — Electronics & Communication",
        duration: "4 years (8 semesters)",
        totalCredits: 160,
        overview:
          "Analog & digital electronics, signal processing, embedded systems, communications and VLSI fundamentals.",
        syllabusLink: "#",
        semesters: [
          {
            sem: 1,
            title: "Semester I",
            credits: 20,
            courses: [
              { code: "EC101", name: "Circuit Theory & Networks", credits: 4 },
              { code: "MA101", name: "Calculus & Linear Algebra", credits: 4 },
              { code: "PH101", name: "Engineering Physics", credits: 3 },
              { code: "EE101", name: "Basic Electrical Engineering", credits: 3 },
              { code: "BE101", name: "Professional Communication", credits: 2 },
              { code: "Lab-ECE101", name: "Electronics Lab I", credits: 2 },
              { code: "HS101", name: "Environmental Studies", credits: 2 },
            ],
          },
          // ... additional semesters
        ],
      },
    ],
  },

  {
    department: "School of Business",
    programs: [
      {
        code: "BBA",
        title: "Bachelor of Business Administration",
        duration: "3 years (6 semesters)",
        totalCredits: 120,
        overview:
          "Core business disciplines (Accounting, Marketing, Finance, HR) with industry projects and internships.",
        syllabusLink: "#",
        semesters: [
          {
            sem: 1,
            title: "Semester I",
            credits: 20,
            courses: [
              { code: "BB101", name: "Principles of Management", credits: 4 },
              { code: "EC101", name: "Business Economics", credits: 4 },
              { code: "AC101", name: "Financial Accounting I", credits: 3 },
              { code: "MT101", name: "Business Mathematics", credits: 3 },
              { code: "HS101", name: "Business Communication", credits: 2 },
              { code: "Proj-Intro", name: "Mini Research Project", credits: 2 },
              { code: "Lab-IT", name: "Computer Applications Lab", credits: 2 },
            ],
          },
          // ... additional semesters
        ],
      },

      {
        code: "MBA",
        title: "Master of Business Administration",
        duration: "2 years (4 semesters)",
        totalCredits: 80,
        overview:
          "Advanced management curriculum with electives in Strategy, Analytics, Finance and Entrepreneurship.",
        syllabusLink: "#",
        semesters: [
          {
            sem: 1,
            title: "Semester I",
            credits: 20,
            courses: [
              { code: "MB101", name: "Managerial Economics", credits: 4 },
              { code: "MB102", name: "Organizational Behaviour", credits: 4 },
              { code: "MB103", name: "Quantitative Methods", credits: 4 },
              { code: "MB104", name: "Financial Management I", credits: 3 },
              { code: "MB105", name: "Marketing Management I", credits: 3 },
              { code: "Lab-Biz", name: "Business Simulation Lab", credits: 2 },
            ],
          },
          // ... additional semesters
        ],
      },
    ],
  },

  {
    department: "School of Sciences & Humanities",
    programs: [
      {
        code: "B.Sc. - Data Science",
        title: "Bachelor of Science — Data Science",
        duration: "3 years (6 semesters)",
        totalCredits: 120,
        overview:
          "Statistics, ML, data engineering fundamentals and applied projects with domain electives.",
        syllabusLink: "#",
        semesters: [
          {
            sem: 1,
            title: "Semester I",
            credits: 18,
            courses: [
              { code: "DS101", name: "Foundations of Programming (Python)", credits: 4 },
              { code: "MA101", name: "Calculus & Linear Algebra", credits: 4 },
              { code: "ST101", name: "Statistics I", credits: 3 },
              { code: "DS-Lab", name: "Programming Lab", credits: 3 },
              { code: "HS101", name: "Academic Writing", credits: 2 },
              { code: "EL101", name: "Elective: Intro to Data Ethics", credits: 2 },
            ],
          },
          // ... additional semesters
        ],
      },
    ],
  },
];

/* ---------- Helpers ---------- */

function SubjectRow({ code, name, credits }) {
  return (
    <tr>
      <td className="px-3 py-2 text-sm text-gray-700 font-medium">{code}</td>
      <td className="px-3 py-2 text-sm text-gray-600">{name}</td>
      <td className="px-3 py-2 text-sm text-gray-600 text-center">{credits}</td>
    </tr>
  );
}

/* ---------- Page Component ---------- */

export default function Courses() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-medium">Courses & Syllabi</li>
              </ol>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-700" />
                  Courses & Syllabi
                </h1>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Detailed program structure, semester-wise subjects, and credit breakdown for all academic programs.
                  Click any semester to expand the subject list or download the full syllabus.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
                >
                  Download Catalog <Download className="h-4 w-4" />
                </a>

                <Link
                  to="/academics/programs"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-50 transition"
                >
                  Browse Programs <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Catalog */}
        <section id="catalog" aria-labelledby="catalog-heading" className="space-y-8">
          <h2 id="catalog-heading" className="text-xl md:text-2xl font-bold text-slate-900">
            Program Catalog
          </h2>

          {CATALOG.map((dept) => (
            <div key={dept.department} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">{dept.department}</h3>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {dept.programs.map((prog) => (
                  <article key={prog.code} className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{prog.code}</div>
                        <h4 className="text-lg font-semibold text-slate-900">{prog.title}</h4>
                        <p className="mt-2 text-sm text-gray-600">{prog.overview}</p>
                        <div className="mt-3 text-sm text-gray-500">
                          <span className="mr-3">Duration: {prog.duration}</span>
                          <span>Total Credits: {prog.totalCredits}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <a
                          href={prog.syllabusLink}
                          className="inline-flex items-center gap-2 rounded-md bg-white border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                        >
                          Syllabus <Download className="h-4 w-4" />
                        </a>
                        <Link
                          to={`/academics/programs/${prog.code}`}
                          className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800"
                        >
                          Program Page <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Semesters */}
                    <div className="mt-4 space-y-2">
                      {prog.semesters && prog.semesters.map((sem) => (
                        <details key={`${prog.code}-sem-${sem.sem}`} className="group rounded-md border border-gray-100">
                          <summary className="px-4 py-3 cursor-pointer flex items-center justify-between text-sm font-semibold text-slate-900">
                            <span>Sem {sem.sem} — {sem.title}</span>
                            <span className="text-gray-500">{sem.credits} credits</span>
                          </summary>

                          <div className="px-4 pb-4">
                            <div className="overflow-x-auto rounded-md">
                              <table className="min-w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="text-left px-3 py-2 text-xs text-gray-500">Code</th>
                                    <th className="text-left px-3 py-2 text-xs text-gray-500">Course</th>
                                    <th className="text-center px-3 py-2 text-xs text-gray-500">Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sem.courses.map((s) => (
                                    <SubjectRow key={s.code} code={s.code} name={s.name} credits={s.credits} />
                                  ))}
                                </tbody>
                                <tfoot>
                                  <tr className="border-t">
                                    <td colSpan={2} className="px-3 py-2 text-sm font-medium text-gray-700">Semester Total</td>
                                    <td className="px-3 py-2 text-center text-sm font-medium text-gray-700">{sem.credits}</td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                        </details>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* short note */}
          <div className="text-sm text-gray-600">
            <strong>Notes:</strong> Credit structure follows the semester system. Laboratory / project credits are included in semester totals.
            Electives and minor options are available from Semester 5 onwards depending on program. For full syllabi and assessment schemes download the syllabus PDF for each program.
          </div>
        </section>
      </main>
    </div>
  );
}
