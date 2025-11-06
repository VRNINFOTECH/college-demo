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
  MapPin
} from "lucide-react";

const PROGRAMS = [
  {
    title: "B.Tech - Engineering",
    branches: [
      "Computer Science & Engineering (CSE)",
      "CSE (Data Science)",
      "CSE (AI & ML)",
      "Electronics & Communication (ECE)",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    duration: "4 Years",
    seats: "120 per branch",
    eligibility: "10+2 with Physics, Chemistry, Mathematics (60% aggregate)"
  },
  {
    title: "BCA",
    branches: ["Bachelor of Computer Applications"],
    duration: "3 Years",
    seats: "180",
    eligibility: "10+2 in any stream with Mathematics (55% aggregate)"
  },
  {
    title: "B.Sc",
    branches: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    duration: "3 Years",
    seats: "60 per specialization",
    eligibility: "10+2 with Science subjects (50% aggregate)"
  },
  {
    title: "BBA",
    branches: ["Business Administration"],
    duration: "3 Years",
    seats: "120",
    eligibility: "10+2 in any stream (50% aggregate)"
  },
  {
    title: "B.Com",
    branches: ["Commerce", "Commerce (Honors)"],
    duration: "3 Years",
    seats: "150",
    eligibility: "10+2 with Commerce/Mathematics (50% aggregate)"
  }
];

const TIMELINE = [
  { date: "January 15, 2025", event: "Application Opens", status: "completed" },
  { date: "March 30, 2025", event: "Application Deadline", status: "current" },
  { date: "April 15, 2025", event: "Entrance Exam", status: "upcoming" },
  { date: "May 10, 2025", event: "Results Announced", status: "upcoming" },
  { date: "May 20-30, 2025", event: "Counseling Sessions", status: "upcoming" },
  { date: "June 15, 2025", event: "Classes Begin", status: "upcoming" }
];

const DOCUMENTS = [
  "10th & 12th Mark Sheets",
  "Transfer Certificate",
  "Character Certificate",
  "Aadhar Card",
  "Passport Size Photos (4 copies)",
  "Category Certificate (if applicable)",
  "Income Certificate (for scholarships)"
];

const FEES = [
  { category: "B.Tech", tuition: "₹1,50,000", hostel: "₹80,000", total: "₹2,30,000" },
  { category: "BCA/B.Sc", tuition: "₹80,000", hostel: "₹80,000", total: "₹1,60,000" },
  { category: "BBA/B.Com", tuition: "₹70,000", hostel: "₹80,000", total: "₹1,50,000" }
];

const FAQS = [
  {
    question: "What is the eligibility criteria for B.Tech admission?",
    answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with at least 60% aggregate marks. Additionally, a valid score in JEE Main or state entrance exam is required."
  },
  {
    question: "Is there an entrance exam for BCA/BBA/B.Com?",
    answer: "Yes, we conduct a university-level entrance test for all undergraduate programs. However, admission may also be based on merit in qualifying exams for certain programs."
  },
  {
    question: "What are the hostel facilities available?",
    answer: "We provide separate hostels for boys and girls with modern amenities including Wi-Fi, mess facilities, sports complex, gymnasium, and 24/7 security."
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, we offer merit-based scholarships (up to 100% tuition waiver), need-based financial aid, and special scholarships for sports achievements and economically weaker sections."
  },
  {
    question: "Can I apply for multiple programs?",
    answer: "Yes, you can apply for up to 3 different programs in a single application. However, separate application fees apply for each program."
  }
];

export default function UGAdmissions() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={32} />
            <span className="text-lg font-semibold">Undergraduate Admissions 2025-26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Begin Your Journey to Excellence
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mb-8">
            Join thousands of students who have launched successful careers from our undergraduate programs
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-sm text-blue-100">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm text-blue-100">Placement Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-blue-100">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">₹12 LPA</div>
              <div className="text-sm text-blue-100">Avg Package</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#apply"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Apply Now
              <ChevronRight size={20} />
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              <Download size={20} />
              Download Brochure
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              <Calendar size={20} />
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Important Dates
          </h2>
          <p className="text-gray-600 text-lg">Mark your calendar for these crucial milestones</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-8">
            {TIMELINE.map((item, index) => (
              <div key={index} className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all">
                    <div className="flex items-center gap-2 mb-2 justify-end md:justify-start">
                      <Calendar size={18} className="text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.event}</h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'current' ? 'bg-blue-600 ring-4 ring-blue-200' :
                    'bg-gray-300'
                  }`}>
                    {item.status === 'completed' && <CheckCircle size={24} className="text-white" />}
                    {item.status === 'current' && <Clock size={24} className="text-white" />}
                    {item.status === 'upcoming' && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Programs Offered
          </h2>
          <p className="text-gray-600 text-lg">Choose from our diverse range of undergraduate programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
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
                    {program.branches.slice(0, 3).map((branch, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <ChevronRight size={16} className="text-blue-600" />
                        {branch}
                      </div>
                    ))}
                    {program.branches.length > 3 && (
                      <button 
                        onClick={() => setSelectedProgram(program)}
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        +{program.branches.length - 3} more branches
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-500 mb-1">ELIGIBILITY</p>
                  <p className="text-sm text-gray-700">{program.eligibility}</p>
                </div>

                <button className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  View Details
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Admission Process
          </h2>
          <p className="text-gray-600 text-lg">Simple steps to secure your admission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Apply Online", desc: "Fill the online application form and upload required documents", icon: FileText, color: "blue" },
            { step: "02", title: "Entrance Test", desc: "Appear for university entrance exam or submit JEE/State exam scores", icon: BookOpen, color: "indigo" },
            { step: "03", title: "Counseling", desc: "Attend counseling session for program and branch selection", icon: Users, color: "purple" },
            { step: "04", title: "Enrollment", desc: "Complete fee payment and confirm your enrollment", icon: CheckCircle, color: "green" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all p-6 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white mb-4 shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl font-bold text-gray-200 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300" size={32} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Documents Required */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Documents Required
          </h2>
          <p className="text-gray-600 text-lg">Keep these documents ready for smooth admission</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCUMENTS.map((doc, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> All documents must be self-attested. Original documents will be verified during counseling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Fee Structure (Annual)
          </h2>
          <p className="text-gray-600 text-lg">Transparent and competitive fee structure</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-right font-semibold">Tuition Fee</th>
                    <th className="px-6 py-4 text-right font-semibold">Hostel Fee</th>
                    <th className="px-6 py-4 text-right font-semibold">Total (Approx)</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((fee, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{fee.category}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{fee.hostel}</td>
                      <td className="px-6 py-4 text-right font-bold text-blue-600">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <div className="flex items-start gap-3 mb-4">
                <Award className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Scholarships Available</p>
                  <p className="text-sm text-gray-600">Merit scholarships up to 100% tuition waiver • Need-based financial aid • Sports scholarships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IndianRupee className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Payment Options</p>
                  <p className="text-sm text-gray-600">Semester-wise payment • Education loan assistance • EMI facilities available</p>
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
          <p className="text-gray-600 text-lg">Find answers to common admission queries</p>
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
                  className={`text-blue-600 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} 
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

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Help?</h2>
            <p className="text-blue-100 text-lg">Our admission team is here to assist you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="mailto:admissions@university.edu" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Mail className="mb-3" size={32} />
              <p className="font-semibold mb-1">Email Us</p>
              <p className="text-sm text-blue-100">admissions@university.edu</p>
            </a>

            <a href="tel:+911234567890" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Phone className="mb-3" size={32} />
              <p className="font-semibold mb-1">Call Us</p>
              <p className="text-sm text-blue-100">+91 123 456 7890</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="mb-3" size={32} />
              <p className="font-semibold mb-1">Visit Us</p>
              <p className="text-sm text-blue-100">Admissions Office, Main Campus</p>
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
              <h3 className="text-2xl font-bold text-gray-900">{selectedProgram.title}</h3>
              <button onClick={() => setSelectedProgram(null)} className="text-gray-400 hover:text-gray-600">
                <ChevronRight size={24} className="rotate-90" />
              </button>
            </div>

            <div className="space-y-2">
              {selectedProgram.branches.map((branch, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-green-600" size={18} />
                  <span className="text-gray-700">{branch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}