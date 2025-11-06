import React, { useState } from "react";
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle, 
  FileText, 
  Award,
  Users,
  BookOpen,
  Clock,
  Download,
  ChevronRight,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Microscope,
  Globe,
  TrendingUp,
  Lightbulb,
  DollarSign
} from "lucide-react";

const RESEARCH_AREAS = [
  {
    department: "Computer Science & Engineering",
    areas: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Big Data Analytics",
      "Cyber Security & Blockchain",
      "Cloud Computing & IoT",
      "Computer Vision & Image Processing",
      "Natural Language Processing"
    ]
  },
  {
    department: "Electronics & Communication",
    areas: [
      "VLSI Design & Embedded Systems",
      "Wireless Communication",
      "Signal Processing",
      "Microwave Engineering",
      "Optical Communication"
    ]
  },
  {
    department: "Mechanical Engineering",
    areas: [
      "Thermal Engineering",
      "Manufacturing & Automation",
      "Robotics & Mechatronics",
      "Renewable Energy",
      "Materials Science"
    ]
  },
  {
    department: "Civil Engineering",
    areas: [
      "Structural Engineering",
      "Environmental Engineering",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Water Resources Management"
    ]
  },
  {
    department: "Management",
    areas: [
      "Strategic Management",
      "Financial Management",
      "Marketing Analytics",
      "Operations Research",
      "Organizational Behavior"
    ]
  },
  {
    department: "Basic Sciences",
    areas: [
      "Quantum Physics",
      "Organic Chemistry",
      "Applied Mathematics",
      "Computational Biology",
      "Material Science"
    ]
  }
];

const TIMELINE = [
  { date: "March 1, 2025", event: "Application Opens", status: "current" },
  { date: "May 15, 2025", event: "Application Deadline", status: "upcoming" },
  { date: "June 1, 2025", event: "Written Test/NET/GATE", status: "upcoming" },
  { date: "June 20, 2025", event: "Interview & Presentation", status: "upcoming" },
  { date: "July 5, 2025", event: "Results Announced", status: "upcoming" },
  { date: "August 1, 2025", event: "Registration Begins", status: "upcoming" }
];

const ELIGIBILITY = [
  {
    category: "For Full-Time Ph.D",
    requirements: [
      "Master's degree in relevant discipline with 55% aggregate (50% for SC/ST)",
      "Valid GATE/NET/SLET score OR qualifying university entrance test",
      "Research proposal in area of interest"
    ]
  },
  {
    category: "For Part-Time Ph.D",
    requirements: [
      "Master's degree with same marks criteria",
      "Minimum 2 years work experience in relevant field",
      "Employer's No Objection Certificate",
      "Research proposal aligned with professional work"
    ]
  }
];

const DOCUMENTS = [
  "Master's Degree Certificate & Transcripts",
  "Bachelor's Degree Certificate & Transcripts",
  "GATE/NET/SLET Scorecard (if applicable)",
  "Research Proposal (3-5 pages)",
  "Two Letters of Recommendation",
  "Statement of Purpose",
  "Publications List (if any)",
  "Experience Certificate (for part-time)",
  "NOC from Employer (for part-time)",
  "Passport Size Photos"
];

const FINANCIAL_SUPPORT = [
  {
    type: "University Fellowship",
    amount: "₹31,000/month",
    details: "For full-time Ph.D scholars based on entrance exam merit",
    icon: Award
  },
  {
    type: "Project Assistantship",
    amount: "₹25,000-35,000/month",
    details: "For scholars working on sponsored research projects",
    icon: Microscope
  },
  {
    type: "Teaching Assistantship",
    amount: "₹20,000/month",
    details: "For assisting in undergraduate teaching and lab work",
    icon: Users
  },
  {
    type: "External Fellowships",
    amount: "Varies",
    details: "UGC, CSIR, DST, ICMR, and other national agencies",
    icon: TrendingUp
  }
];

const FACILITIES = [
  {
    title: "State-of-the-Art Labs",
    description: "Access to advanced research laboratories with latest equipment",
    icon: Microscope
  },
  {
    title: "Digital Library",
    description: "Access to IEEE, Springer, Elsevier, and 50+ journal databases",
    icon: BookOpen
  },
  {
    title: "Research Funding",
    description: "Financial support for conferences, publications, and equipment",
    icon: DollarSign
  },
  {
    title: "International Collaboration",
    description: "Partnerships with 30+ universities worldwide",
    icon: Globe
  },
  {
    title: "Innovation Hub",
    description: "Patent filing support and startup incubation facilities",
    icon: Lightbulb
  },
  {
    title: "Dedicated Workspace",
    description: "Individual workstations with 24/7 lab access",
    icon: Users
  }
];

const FAQS = [
  {
    question: "What is the duration of the Ph.D program?",
    answer: "The minimum duration is 3 years for full-time and 4 years for part-time Ph.D programs. Maximum duration is 6 years for full-time and 7 years for part-time candidates."
  },
  {
    question: "Is coursework mandatory?",
    answer: "Yes, first-year Ph.D scholars must complete coursework (minimum 8 credits) covering research methodology, subject-specific courses, and technical writing."
  },
  {
    question: "Can I pursue Ph.D while working?",
    answer: "Yes, you can enroll in the part-time Ph.D program which requires you to work with approval from your employer and attend campus regularly on designated days."
  },
  {
    question: "What are the publication requirements?",
    answer: "Scholars must publish at least 2 papers in Scopus/SCI/UGC-approved journals before thesis submission. Conference publications are additional requirements."
  },
  {
    question: "Is hostel accommodation available?",
    answer: "Yes, on-campus hostel accommodation is available for full-time Ph.D scholars on a first-come, first-served basis at subsidized rates."
  },
  {
    question: "Can I change my research supervisor?",
    answer: "Yes, with valid reasons and approval from the Research Advisory Committee, you can request a change of supervisor after completing 6 months."
  }
];

export default function PhDAdmissions() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={32} />
            <span className="text-lg font-semibold">Doctoral (Ph.D) Admissions 2025-26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Shape the Future Through Research
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mb-8">
            Join our community of researchers and contribute to cutting-edge innovations
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-indigo-100">Research Areas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-indigo-100">Ph.D Scholars</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">₹31K</div>
              <div className="text-sm text-indigo-100">Monthly Fellowship</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">30+</div>
              <div className="text-sm text-indigo-100">Global Partners</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#apply"
              className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Apply for Ph.D
              <ChevronRight size={20} />
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              <Download size={20} />
              Research Guidelines
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
              <Users size={20} />
              Meet Our Scholars
            </button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Research Areas
          </h2>
          <p className="text-gray-600 text-lg">Explore diverse fields of doctoral research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_AREAS.map((dept, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl transition-all overflow-hidden group hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Microscope size={24} />
                  <h3 className="text-xl font-bold">{dept.department}</h3>
                </div>
                <p className="text-sm text-indigo-100">{dept.areas.length} research areas</p>
              </div>

              <div className="p-6">
                <div className="space-y-2">
                  {dept.areas.slice(0, 3).map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <ChevronRight size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                  {dept.areas.length > 3 && (
                    <button 
                      onClick={() => setSelectedDept(dept)}
                      className="text-sm text-indigo-600 hover:underline font-medium flex items-center gap-1 mt-2"
                    >
                      View all {dept.areas.length} areas
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Eligibility Criteria
          </h2>
          <p className="text-gray-600 text-lg">Check if you qualify for doctoral admission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ELIGIBILITY.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="text-indigo-600" size={28} />
                {item.category}
              </h3>
              <ul className="space-y-4">
                {item.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Support */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Financial Support & Fellowships
          </h2>
          <p className="text-gray-600 text-lg">Multiple funding options for your research journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FINANCIAL_SUPPORT.map((support, index) => {
            const Icon = support.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl transition-all p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{support.type}</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-2">{support.amount}</p>
                    <p className="text-sm text-gray-600">{support.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold text-gray-900 mb-2">Additional Benefits</p>
              <p className="text-gray-700">Conference travel grants • Publication support • International exposure programs • Health insurance • Library & computing resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Research Facilities
          </h2>
          <p className="text-gray-600 text-lg">World-class infrastructure for your research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4 shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Admission Timeline
          </h2>
          <p className="text-gray-600 text-lg">Key dates for doctoral admissions</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {TIMELINE.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 ${
                item.status === 'current' ? 'bg-indigo-600 ring-4 ring-indigo-200' : 'bg-gray-300'
              }`}>
                {item.status === 'current' ? (
                  <Clock size={24} className="text-white" />
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 bg-white rounded-xl p-5 shadow-lg border-2 border-gray-200 hover:border-indigo-300 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} className="text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-600">{item.date}</span>
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
          <p className="text-gray-600 text-lg">Prepare these documents for your application</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCUMENTS.map((doc, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-all">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-indigo-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Important:</span> Research proposal should clearly define objectives, methodology, expected outcomes, and bibliography (3-5 pages).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 py-16">
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
                  className={`text-indigo-600 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} 
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
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="bg-gradient-to-br  from-purple-600 via-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact Research Office</h2>
            <p className="text-indigo-100 text-lg">We're here to guide you through your doctoral journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="mailto:phd.admissions@university.edu" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Mail className="mb-3" size={32} />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm text-indigo-100">phd.admissions@university.edu</p>
            </a>

            <a href="tel:+911234567892" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 transition-all border border-white/20">
              <Phone className="mb-3" size={32} />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-sm text-indigo-100">+91 123 456 7892</p>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="mb-3" size={32} />
              <p className="font-semibold mb-1">Office</p>
              <p className="text-sm text-indigo-100">Research Scholar Section</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Modal */}
      {selectedDept && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDept(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedDept.department}</h3>
              <button onClick={() => setSelectedDept(null)} className="text-gray-400 hover:text-gray-600">
                <ChevronRight size={24} className="rotate-90" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">Research Areas Available:</p>

            <div className="space-y-2">
              {selectedDept.areas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Microscope className="text-indigo-600" size={18} />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}