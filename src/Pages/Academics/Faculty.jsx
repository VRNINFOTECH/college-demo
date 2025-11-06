import React, { useState } from "react";
import { 
  Search, 
  Mail, 
  Phone, 
  BookOpen, 
  Award, 
  GraduationCap,
  Building,
  Users,
  Filter,
  X,
  ChevronDown,
  Link as LinkIcon,
  MessageSquare
} from "lucide-react";

// Faculty data with placeholder images
const FACULTY_DATA = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    designation: "Professor & Head",
    department: "Computer Science & Engineering",
    qualification: "Ph.D in Computer Science, IIT Delhi",
    experience: "15 Years",
    specialization: ["Artificial Intelligence", "Machine Learning", "Data Mining"],
    email: "rajesh.kumar@university.edu",
    phone: "+91 98765 43210",
    publications: 45,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    department: "Computer Science & Engineering",
    qualification: "Ph.D in Software Engineering, Stanford University",
    experience: "12 Years",
    specialization: ["Software Engineering", "Cloud Computing", "DevOps"],
    email: "priya.sharma@university.edu",
    phone: "+91 98765 43211",
    publications: 38,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    designation: "Professor",
    department: "Electronics & Communication",
    qualification: "Ph.D in VLSI Design, MIT",
    experience: "18 Years",
    specialization: ["VLSI Design", "Embedded Systems", "IoT"],
    email: "amit.patel@university.edu",
    phone: "+91 98765 43212",
    publications: 52,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Sneha Reddy",
    designation: "Assistant Professor",
    department: "Electronics & Communication",
    qualification: "Ph.D in Signal Processing, NUS Singapore",
    experience: "8 Years",
    specialization: ["Digital Signal Processing", "Image Processing", "Communication Systems"],
    email: "sneha.reddy@university.edu",
    phone: "+91 98765 43213",
    publications: 28,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    designation: "Professor & Dean",
    department: "Mechanical Engineering",
    qualification: "Ph.D in Thermal Engineering, IIT Bombay",
    experience: "20 Years",
    specialization: ["Thermal Engineering", "Fluid Mechanics", "Renewable Energy"],
    email: "vikram.singh@university.edu",
    phone: "+91 98765 43214",
    publications: 65,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Dr. Anjali Menon",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    qualification: "Ph.D in Robotics, Georgia Tech",
    experience: "10 Years",
    specialization: ["Robotics", "Mechatronics", "Automation"],
    email: "anjali.menon@university.edu",
    phone: "+91 98765 43215",
    publications: 32,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Dr. Karthik Krishnan",
    designation: "Professor",
    department: "Civil Engineering",
    qualification: "Ph.D in Structural Engineering, UC Berkeley",
    experience: "16 Years",
    specialization: ["Structural Engineering", "Earthquake Engineering", "Construction Management"],
    email: "karthik.krishnan@university.edu",
    phone: "+91 98765 43216",
    publications: 48,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Dr. Meera Iyer",
    designation: "Assistant Professor",
    department: "Civil Engineering",
    qualification: "Ph.D in Environmental Engineering, TU Delft",
    experience: "7 Years",
    specialization: ["Environmental Engineering", "Water Resources", "Sustainable Development"],
    email: "meera.iyer@university.edu",
    phone: "+91 98765 43217",
    publications: 22,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Dr. Rahul Kapoor",
    designation: "Professor",
    department: "Management Studies",
    qualification: "Ph.D in Business Administration, Harvard Business School",
    experience: "14 Years",
    specialization: ["Strategic Management", "Organizational Behavior", "Entrepreneurship"],
    email: "rahul.kapoor@university.edu",
    phone: "+91 98765 43218",
    publications: 41,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "Dr. Divya Nair",
    designation: "Associate Professor",
    department: "Management Studies",
    qualification: "Ph.D in Marketing, Wharton School",
    experience: "11 Years",
    specialization: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
    email: "divya.nair@university.edu",
    phone: "+91 98765 43219",
    publications: 35,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
  },
  {
    id: 11,
    name: "Dr. Suresh Gupta",
    designation: "Professor",
    department: "Physics",
    qualification: "Ph.D in Quantum Physics, Cambridge University",
    experience: "19 Years",
    specialization: ["Quantum Mechanics", "Condensed Matter Physics", "Nanophysics"],
    email: "suresh.gupta@university.edu",
    phone: "+91 98765 43220",
    publications: 58,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    id: 12,
    name: "Dr. Lakshmi Venkat",
    designation: "Assistant Professor",
    department: "Chemistry",
    qualification: "Ph.D in Organic Chemistry, Oxford University",
    experience: "6 Years",
    specialization: ["Organic Chemistry", "Green Chemistry", "Drug Design"],
    email: "lakshmi.venkat@university.edu",
    phone: "+91 98765 43221",
    publications: 19,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

const DEPARTMENTS = [
  "All Departments",
  "Computer Science & Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Management Studies",
  "Physics",
  "Chemistry"
];

const DESIGNATIONS = [
  "All Designations",
  "Professor & Head",
  "Professor & Dean",
  "Professor",
  "Associate Professor",
  "Assistant Professor"
];

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedDesignation, setSelectedDesignation] = useState("All Designations");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Filter faculty based on search and filters
  const filteredFaculty = FACULTY_DATA.filter(faculty => {
    const matchesSearch = 
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDepartment = 
      selectedDepartment === "All Departments" || 
      faculty.department === selectedDepartment;
    
    const matchesDesignation = 
      selectedDesignation === "All Designations" || 
      faculty.designation === selectedDesignation;

    return matchesSearch && matchesDepartment && matchesDesignation;
  });

  const activeFiltersCount = 
    (selectedDepartment !== "All Departments" ? 1 : 0) + 
    (selectedDesignation !== "All Designations" ? 1 : 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users size={18} />
              <span className="text-sm font-medium">{FACULTY_DATA.length} Faculty Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Building size={18} />
              <span className="text-sm font-medium">{DEPARTMENTS.length - 1} Departments</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award size={18} />
              <span className="text-sm font-medium">500+ Publications</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Our Distinguished Faculty
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mb-8">
            Meet our world-class educators and researchers dedicated to academic excellence
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search by name, department, or specialization...'
                className="w-full h-16 rounded-2xl pl-14 pr-14 text-gray-900 placeholder:text-gray-400 outline-none shadow-2xl focus:ring-4 focus:ring-white/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-4 py-2 rounded-xl font-semibold transition-all"
              >
                <Filter size={18} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-white text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedDepartment("All Departments");
                    setSelectedDesignation("All Designations");
                  }}
                  className="text-sm text-white/90 hover:text-white underline hover:no-underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            {showFilters && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Department</label>
                  <div className="relative">
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 outline-none appearance-none cursor-pointer"
                    >
                      {DEPARTMENTS.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Designation</label>
                  <div className="relative">
                    <select
                      value={selectedDesignation}
                      onChange={(e) => setSelectedDesignation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 outline-none appearance-none cursor-pointer"
                    >
                      {DESIGNATIONS.map(desig => (
                        <option key={desig} value={desig}>{desig}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredFaculty.length}</span> faculty members
          </p>
        </div>

        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Users size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No faculty found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty) => (
              <FacultyCard 
                key={faculty.id} 
                faculty={faculty} 
                onClick={() => setSelectedFaculty(faculty)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Faculty Detail Modal */}
      {selectedFaculty && (
        <FacultyModal 
          faculty={selectedFaculty} 
          onClose={() => setSelectedFaculty(null)} 
        />
      )}
    </div>
  );
}

function FacultyCard({ faculty, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
        <img 
          src={faculty.image} 
          alt={faculty.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {faculty.name}
        </h3>
        <p className="text-sm font-medium text-blue-600 mb-1">{faculty.designation}</p>
        <p className="text-sm text-gray-600 mb-4 flex items-center gap-1">
          <Building size={14} />
          {faculty.department}
        </p>

        {/* Specializations */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">SPECIALIZATION</p>
          <div className="flex flex-wrap gap-1">
            {faculty.specialization.slice(0, 2).map((spec, idx) => (
              <span 
                key={idx}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
            {faculty.specialization.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{faculty.specialization.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t">
          <div className="flex items-center gap-1">
            <Award size={16} className="text-blue-600" />
            <span>{faculty.publications} Papers</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap size={16} className="text-blue-600" />
            <span>{faculty.experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacultyModal({ faculty, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 -mt-24">
          {/* Profile Picture */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative">
              <img 
                src={faculty.image}
                alt={faculty.name}
                className="w-40 h-40 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
            </div>

            <div className="flex-1 mt-20 md:mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{faculty.name}</h2>
              <p className="text-lg font-semibold text-blue-600 mb-1">{faculty.designation}</p>
              <p className="text-gray-600 flex items-center gap-2 mb-4">
                <Building size={18} />
                {faculty.department}
              </p>

              <div className="flex flex-wrap gap-3">
                <a 
                  href={`mailto:${faculty.email}`}
                  className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition-all text-sm font-medium"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a 
                  href={`tel:${faculty.phone}`}
                  className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg transition-all text-sm font-medium"
                >
                  <Phone size={16} />
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="text-blue-600" size={24} />
                <h3 className="font-bold text-gray-900">Qualification</h3>
              </div>
              <p className="text-gray-700">{faculty.qualification}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-purple-600" size={24} />
                <h3 className="font-bold text-gray-900">Experience</h3>
              </div>
              <p className="text-gray-700 text-2xl font-semibold">{faculty.experience}</p>
              <p className="text-sm text-gray-600">of Teaching & Research</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-green-600" size={24} />
                <h3 className="font-bold text-gray-900">Publications</h3>
              </div>
              <p className="text-gray-700 text-2xl font-semibold">{faculty.publications}</p>
              <p className="text-sm text-gray-600">Research Papers</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-orange-600" size={24} />
                <h3 className="font-bold text-gray-900">Contact</h3>
              </div>
              <p className="text-sm text-gray-700 mb-1">{faculty.email}</p>
              <p className="text-sm text-gray-700">{faculty.phone}</p>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              Areas of Specialization
            </h3>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((spec, idx) => (
                <span 
                  key={idx}
                  className="bg-white border-2 border-blue-200 text-blue-700 px-4 py-2 rounded-xl font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
`;
document.head.appendChild(style);