import React, { useState } from "react";
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle, 
  FileText, 
  IndianRupee,
  Award,
  Users,
  BookOpen,
  Clock,
  Download,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Briefcase
} from "lucide-react";

const PROGRAMS = [
  {
    title: "M.Tech",
    specializations: [
      "Computer Science & Engineering",
      "Data Science",
      "AI & Machine Learning",
      "VLSI & Embedded Systems",
      "Structural Engineering",
      "Power Systems"
    ],
    duration: "2 Years",
    seats: "30 per specialization",
    eligibility: "B.Tech/BE in relevant discipline (60% aggregate) + GATE Score"
  },
  {
    title: "MBA",
    specializations: [
      "General Management",
      "Finance",
      "Marketing",
      "Human Resources",
      "Business Analytics",
      "Operations Management"
    ],
    duration: "2 Years",
    seats: "180",
    eligibility: "Bachelor's degree in any discipline (50% aggregate) + CAT/MAT/XAT/CMAT"
  },
  {
    title: "MCA",
    specializations: ["Master of Computer Applications"],
    duration: "2 Years",
    seats: "120",
    eligibility: "BCA/B.Sc (CS/IT) or relevant degree with Mathematics (55% aggregate)"
  },
  {
    title: "M.Sc",
    specializations: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "Biotechnology"
    ],
    duration: "2 Years",
    seats: "40 per specialization",
    eligibility: "B.Sc in relevant subject (55% aggregate)"
  },
  {
    title: "M.A",
    specializations: [
      "Economics",
      "English",
      "Psychology",
      "Sociology"
    ],
    duration: "2 Years",
    seats: "50 per specialization",
    eligibility: "Bachelor's degree in relevant subject (50% aggregate)"
  }
];

const TIMELINE = [
  { date: "February 1, 2025", event: "Application Opens", status: "current" },
  { date: "April 15, 2025", event: "Application Deadline", status: "upcoming" },
  { date: "May 1, 2025", event: "Entrance Exam/Interview", status: "upcoming" },
  { date: "May 25, 2025", event: "Results Announced", status: "upcoming" },
  { date: "June 1-15, 2025", event: "Counseling & Admission", status: "upcoming" },
  { date: "July 1, 2025", event: "Classes Commence", status: "upcoming" }
];

const DOCUMENTS = [
  "Bachelor's Degree Certificate & Transcripts",
  "Entrance Exam Scorecard (GATE/CAT/MAT etc.)",
  "Experience Certificate (if applicable)",
  "Migration Certificate",
  "Character Certificate",
  "Passport Size Photos (4 copies)",
  "Category Certificate (SC/ST/OBC)",
  "Aadhar Card"
];

const FEES = [
  { category: "M.Tech", tuition: "₹1,20,000", hostel: "₹80,000", total: "₹2,00,000" },
  { category: "MBA", tuition: "₹2,50,000", hostel: "₹80,000", total: "₹3,30,000" },
  { category: "MCA", tuition: "₹1,00,000", hostel: "₹80,000", total: "₹1,80,000" },
  { category: "M.Sc/M.A", tuition: "₹80,000", hostel: "₹80,000", total: "₹1,60,000" }
];

const FEATURES = [
  {
    icon: Award,
    title: "Industry-Aligned Curriculum",
    description: "Programs designed with input from industry leaders and academic experts"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from Ph.D holders and industry veterans with years of experience"
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description: "Dedicated placement cell with 95%+ placement record in top companies"
  },
  {
    icon: BookOpen,
    title: "Research Opportunities",
    description: "Access to state-of-the-art labs and funding for research projects"
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Workshops, seminars, and certifications to enhance employability"
  },
  {
    icon: GraduationCap,
    title: "Global Exposure",
    description: "International collaborations and student exchange programs"
  }
];

const FAQS = [
  {
    question: "Is GATE mandatory for M.Tech admissions?",
    answer: "Yes, a valid GATE score is mandatory for M.Tech admissions. However, sponsored candidates from PSUs/Government organizations may be exempted from GATE requirements with proper documentation."
  },
  {
    question: "What entrance exams are accepted for MBA?",
    answer: "We accept scores from CAT, MAT, XAT, CMAT, and ATMA. Additionally, we conduct our own entrance test for candidates who haven't appeared for these exams."
  },
  {
    question: "Can working professionals apply for part-time programs?",
    answer: "Currently, all our postgraduate programs are full-time. However, we're planning to introduce part-time MBA and M.Tech programs from next academic year."
  },
  {
    question: "Are there research opportunities during M.Tech/M.Sc?",
    answer: "Yes, students can work on industry-sponsored projects, publish research papers, and collaborate with faculty on ongoing research initiatives."
  },
  {
    question: "What is the average placement package?",
    answer: "The average placement package varies by program: MBA (₹8-12 LPA), M.Tech (₹7-10 LPA), MCA (₹6-8 LPA). Top packages go up to ₹20+ LPA."
  }
];

export default function PGAdmissions() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={32} />
            <span className="text-lg font-semibold">Postgraduate Admissions 2025-26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Advance Your Career with Specialized Masters
          </h1>
          <p className="text-lg md:text-xl text-purple-50 max-w-3xl mb-8">
            Transform your expertise with our industry-focused postgraduate programs
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-sm text-purple-100">Specializations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">₹10L</div>
              <div className="text-sm text-purple-100">Avg Package</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">300+</div>
              <div className="text-sm text-purple-100">Recruiters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">97%</div>
              <div className="text-sm text-purple-100">Placement</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#apply"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Apply Now
              <ChevronRight size={20} />
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              <Download size={20} />
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Our PG Programs?
          </h2>
          <p className="text-gray-600 text-lg">Comprehensive features for holistic development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white mb-4 shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Programs Offered */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Programs Offered
          </h2>
          <p className="text-gray-600 text-lg">Explore our specialized postgraduate programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {program.seats}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-2">SPECIALIZATIONS</p>
                  <div className="space-y-1">
                    {program.specializations.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <ChevronRight size={16} className="text-purple-600" />
                        {spec}
                      </div>
                    ))}
                    {program.specializations.length > 3 && (
                      <button 
                        onClick={() => setSelectedProgram(program)}
                        className="text-sm text-purple-600 hover:underline font-medium"
                      >
                        +{program.specializations.length - 3} more
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-500 mb-1">ELIGIBILITY</p>
                  <p className="text-sm text-gray-700">{program.eligibility}</p>
                </div>

                <button className="mt-4 w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  View Details
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Admission Timeline
          </h2>
          <p className="text-gray-600 text-lg">Important dates for the admission cycle</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {TIMELINE.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 ${
                item.status === 'current' ? 'bg-purple-600 ring-4 ring-purple-200' : 'bg-gray-300'
              }`}>
                {item.status === 'current' ? (
                  <Clock size={24} className="text-white" />
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 bg-white rounded-xl p-5 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Required Documents
          </h2>
          <p className="text-gray-600 text-lg">Keep these documents ready during application</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCUMENTS.map((doc, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-all">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Fee Structure (Annual)
          </h2>
          <p className="text-gray-600 text-lg">Competitive and transparent pricing</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-right font-semibold">Tuition Fee</th>
                    <th className="px-6 py-4 text-right font-semibold">Hostel Fee</th>
                    <th className="px-6 py-4 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((fee, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{fee.category}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{fee.hostel}</td>
                      <td className="px-6 py-4 text-right font-bold text-purple-600">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <div className="flex items-start gap-3">
                <Award className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Financial Support</p>
                  <p className="text-sm text-gray-600">Merit scholarships • Teaching/Research assistantships • Education loans • EMI options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                <ChevronRight 
                  className={`text-purple-600 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} 
                  size={24} 
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-5 text-gray-700 border-t">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
            <p className="text-purple-100 text-lg">Our team is ready to answer your queries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="mailto:pg.admissions@university.edu" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Mail className="mb-3" size={32} />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm text-purple-100">pg.admissions@university.edu</p>
            </a>

            <a href="tel:+911234567891" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Phone className="mb-3" size={32} />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-sm text-purple-100">+91 123 456 7891</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="mb-3" size={32} />
              <p className="font-semibold mb-1">Office</p>
              <p className="text-sm text-purple-100">PG Admissions, Block C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modal */}
      {selectedProgram && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProgram.title} Specializations</h3>
              <button onClick={() => setSelectedProgram(null)} className="text-gray-400 hover:text-gray-600">
                <ChevronRight size={24} className="rotate-90" />
              </button>
            </div>

            <div className="space-y-2">
              {selectedProgram.specializations.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-600" size={18} />
                  <span className="text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}