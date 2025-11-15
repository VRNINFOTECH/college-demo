// src/Pages/Faculty/FacultyPage.jsx
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  Search as SearchIcon,
  Users,
  Building,
  Award,
  Mail,
  Phone,
  X as XIcon,
  ChevronDown,
} from "lucide-react";

/* ---------------------- SearchInput (styled-component) --------------------- */
/* adapted so it accepts value, onChange, placeholder props and a clear button */
const SearchInput = ({ value, onChange, placeholder = "Search" }) => {
  return (
    <StyledWrapper>
      <div className="group">
        <svg
          className="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>

        <input
          placeholder={placeholder}
          type="search"
          className="input"
          value={value}
          onChange={onChange}
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange({ target: { value: "" } })}
            className="clear-btn"
            aria-label="Clear search"
          >
            <XIcon size={14} />
          </button>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 100%;
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
    font-size: 0.95rem;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
    position: absolute;
    left: 0.9rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
    color: #9e9ea7;
    pointer-events: none;
  }

  .clear-btn {
    position: absolute;
    right: 0.4rem;
    background: transparent;
    border: none;
    padding: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #6b6b6b;
    cursor: pointer;
    border-radius: 6px;
  }
`;

/* ------------------------------ data ------------------------------------- */
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
    image:
      "https://ahduni.edu.in/site/assets/files/4669/1980_x_1080_ramadhar_singh.1600x0.1400x0.webp",
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
    image:
      "https://media.istockphoto.com/id/1289489558/photo/young-indian-female-school-teacher-or-college-professor.jpg?s=612x612&w=0&k=20&c=cylXQXXGqrgcmWY4mgl17yqXJXqgvvImtFFoQkD3Uco=",
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
    image:
      "https://cdn.siasat.com/wp-content/uploads/2022/11/H-Deep-Saini-nov19.jpg",
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
    image:
      "https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY=",
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
    image:
      "https://img.freepik.com/premium-photo/indian-business-man-arab-teacher-posing-office_1168123-48429.jpg?semt=ais_hybrid&w=740&q=80",
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
    image:
      "https://images.shiksha.com/mediadata/images/articles/1753859034php9Q0nLd.jpeg",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC7Axziz-yltzaVBAciNoc433oZTDXYMC7w&s",
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
    image:
      "https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=612x612&w=0&k=20&c=g3Cds92jM1uvx25fW65pDq1QflygJPYQGvpRXtjDwSc=",
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
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/indian-professor-at-iit-madras-154444989-16x9_0.jpg?VersionId=UAS4wOejeUUsba5Sm_SESxxP881v9rxQ&size=690:388",
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
    image:
      "https://c.ndtvimg.com/2021-12/utuo9l3g_indianorigin-professor-neeli-bendapudi-650_625x300_10_December_21.jpg?downsize=545:307",
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
    image:
      "https://static.toiimg.com/thumb/msid-123847642,imgsize-1739100,width-400,resizemode-4/sept-12.jpg",
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
    image:
      "https://t3.ftcdn.net/jpg/08/34/74/68/360_F_834746847_SsnjLKFJhWxwjzt4kYbc2oBKsVZaur3Q.jpg",
  },
];

const DEPARTMENTS = [
  "All Departments",
  "Computer Science & Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Management Studies",
  "Physics",
  "Chemistry",
];

/* --------------------------- FacultyPage --------------------------------- */
export default function FacultyPage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [selected, setSelected] = useState(null);

  const visibleFaculty = useMemo(() => {
    const pool =
      department === "All Departments"
        ? FACULTY_DATA
        : FACULTY_DATA.filter((f) => f.department === department);

    const q = (query || "").trim().toLowerCase();
    if (!q) return pool;
    return pool.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.department.toLowerCase().includes(q) ||
        f.specialization.some((s) => s.toLowerCase().includes(q))
    );
  }, [query, department]);

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      {/* Header */}
      
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">Faculty</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Learn about our academic departments, their programs, research strengths and contact information.
          </p>
      

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="w-full md:w-72 relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full rounded border px-4 py-3 bg-white outline-none"
            >
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="flex-1">
            <SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, department or specialization..."
            />
          </div>

          <div className="md:ml-4">
            <div className="text-sm text-gray-600">
              Results: <span className="font-semibold text-gray-900">{visibleFaculty.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of cards */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {visibleFaculty.length === 0 ? (
          <div className="text-center py-24">
            <div className="mx-auto w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Users size={36} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">No faculty found</h3>
            <p className="text-gray-600 mt-2">Try a different search or choose another department.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleFaculty.map((f) => (
              <FacultyCard key={f.id} faculty={f} onOpen={() => setSelected(f)} />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {selected && <FacultyModal faculty={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

/* ------------------------------ FacultyCard ------------------------------- */
function FacultyCard({ faculty, onOpen }) {
  return (
    <div
      className="max-w-sm border border-gray-200 bg-white shadow-sm overflow-hidden group cursor-pointer"
      onClick={onOpen}
    >
      <div className="h-40 w-full flex items-center justify-center bg-gray-100 text-gray-400 overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          style={{ borderRadius: 0 }}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">{faculty.name}</p>
            <p className="mt-1 text-xs text-gray-500 truncate">{faculty.designation}</p>
            <p className="mt-1 text-xs text-gray-500 truncate">{faculty.department}</p>
          </div>

          <div className="flex-shrink-0 ml-2 flex items-center gap-1">
            <span className="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600">Profile</span>
            <span className="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600">New</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          {faculty.specialization.slice(0, 2).join(" • ")}
          {faculty.specialization.length > 2 ? ` • +${faculty.specialization.length - 2}` : ""}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="flex-1 rounded border border-transparent px-3 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          >
            View
          </button>

          <a
            href={`mailto:${faculty.email}`}
            onClick={(e) => e.stopPropagation()}
            className="rounded border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="px-4 py-2 text-xs text-gray-400 border-t border-gray-100 text-center">
        {faculty.publications} Papers • {faculty.experience}
      </div>
    </div>
  );
}

/* ------------------------------ FacultyModal ------------------------------ */
function FacultyModal({ faculty, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="h-40 bg-gray-50 rounded-t-2xl" />
          <button onClick={onClose} className="absolute right-4 top-4 bg-white/30 p-2 rounded-full">
            <XIcon size={20} />
          </button>
        </div>

        <div className="p-6 md:p-10 -mt-20">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-40 flex-shrink-0">
              <img src={faculty.image} alt={faculty.name} className="w-40 h-40 rounded-xl object-cover border-4 border-white shadow" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{faculty.name}</h2>
              <p className="text-blue-700 font-medium mt-1">{faculty.designation}</p>
              <p className="text-gray-600 mt-2 flex items-center gap-2"><Building size={16} /> {faculty.department}</p>

              <div className="mt-4 flex gap-3">
                <a href={`mailto:${faculty.email}`} className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 flex items-center gap-2"><Mail size={16} /> Email</a>
                <a href={`tel:${faculty.phone}`} className="px-4 py-2 rounded-lg bg-green-50 text-green-700 flex items-center gap-2"><Phone size={16} /> Call</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Qualification</div>
                  <div className="font-semibold text-gray-900 mt-2">{faculty.qualification}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Experience</div>
                  <div className="font-semibold text-gray-900 mt-2">{faculty.experience}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Publications</div>
                  <div className="font-semibold text-gray-900 mt-2">{faculty.publications}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Contact</div>
                  <div className="font-semibold text-gray-900 mt-2">{faculty.email}<br />{faculty.phone}</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Areas of Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  {faculty.specialization.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white border rounded-full text-sm text-blue-700">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-right">
            <button onClick={onClose} className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
