import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/collegelogo.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Map visible labels -> route paths that actually exist in App.jsx
  const pathFor = (label) => {
    const map = {
      // Parent sections (optional landing)
      About: "/aboutus",
      Academics: "/academics",
      Admissions: "/programs",
      Placements: "/placements/recruiter",

      // About sublinks
      Overview: "/aboutus",
      Leadership: "/aboutus/leadership",
      "Campus Tour": "/aboutus/campus-tour",

      // Academics sublinks
      Departments: "/academics/departments",
      Programs: "/programs",
      Faculty: "/academics/faculty",

      // Admissions sublinks
      Undergraduate: "/programs/undergraduate",
      Postgraduate: "/programs/postgraduate",
      "PhD Admissions": "/programs/phd",
      Courses:"/courses",

      // Placements sublinks
      Recruiters: "/placements/recruiter",
      CareerGuidance:'/placements/careerguidance',
      // Not implemented in App.jsx (render disabled)
      
      NAAC: "/naac",
      Research: null,
      Publications: "/research/publications",
      Projects: "/research/projects",
      Patents: "/research/patents",
      Campus: null,
      Events: "/campus/events",
      Clubs: "/campus/clubs",
      Facilities: "/campus/facilities",
    };
    return map[label] ?? null;
  };

 
  const navLinks = [
    { name: "About", subLinks: ["Overview", "Leadership", "Campus Tour"] },
    { name: "Academics", subLinks: ["Departments", "Programs", "Faculty"] },
    { name: "Admissions", subLinks: ["Undergraduate", "Postgraduate", "PhD Admissions","Courses"] },
    { name: "Placements", subLinks: ["Recruiters", "CareerGuidance"] },
    { name: "NAAC", subLinks: [] },
    { name: "Research", subLinks: ["Publications", "Projects", "Patents"] },
    { name: "Campus", subLinks: ["Events", "Clubs", "Facilities"] },
  ];

  const linkBase =
    "flex items-center hover:text-blue-900 transition py-2 px-3 rounded-md focus:outline-none";

  const activeClass = ({ isActive }) =>
    `${linkBase} ${isActive ? "text-blue-900 font-semibold" : "text-gray-700"}`;

  const handleMobileNavigate = (to) => {
    if (!to) return;
    navigate(to);
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[1000]">
      {/* Top Bar - visible only on md+ */}
     
      

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-10 lg:px-16 h-24 bg-white relative">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="h-14 w-14 flex items-center justify-center rounded-full flex-shrink-0">
            <img src={logo} alt="Logo" className="rounded-full h-14 w-14 object-cover" />
          </Link>
          <Link to="/" className="hidden md:block">
            <span className="text-lg md:text-xl font-bold text-blue-900">Warren College</span>
            <div className="text-xs text-gray-500">Established 1998</div>
          </Link>
        </div>

        {/* Main nav links (desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <div className="h-8 w-px bg-gray-200 mx-6" />
          <ul className="flex space-x-8 font-medium items-center">
            {navLinks.map((link) => {
              const parentTo = pathFor(link.name);
              return (
                <li key={link.name} className="relative group">
                  {parentTo ? (
                    <NavLink to={parentTo} className={activeClass}>
                      {link.name}
                      {link.subLinks.length > 0 && <ChevronDown size={16} className="ml-2" />}
                    </NavLink>
                  ) : (
                    <span className={`${linkBase} text-gray-700 cursor-default`}>
                      {link.name}
                      {link.subLinks.length > 0 && <ChevronDown size={16} className="ml-2" />}
                    </span>
                  )}

                  {/* Dropdown */}
                  {link.subLinks.length > 0 && (
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-[1050] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-150">
                      {link.subLinks.map((sublink) => {
                        const to = pathFor(sublink);
                        return (
                          <li
                            key={sublink}
                            className="px-1 py-1 hover:bg-blue-50 hover:text-blue-900 cursor-pointer whitespace-nowrap"
                          >
                            {to ? (
                              <Link
                                to={to}
                                className="block px-3 py-2 rounded-md"
                              >
                                {sublink}
                              </Link>
                            ) : (
                              <span className="block px-3 py-2 text-gray-500 cursor-not-allowed">
                                {sublink}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Apply & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            to="/apply"
            className="hidden md:block bg-blue-700 hover:bg-orange-600 text-white px-4 py-3 rounded"
          >
            Apply
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md border border-gray-200 z-[1100]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden transform transition-all duration-200 origin-top z-[1050] ${
            mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const parentTo = pathFor(link.name);
                return (
                  <li key={link.name} className="border-b last:border-b-0">
                    <div className="flex justify-between items-center py-3">
                      {parentTo ? (
                        <button
                          onClick={() => handleMobileNavigate(parentTo)}
                          className="text-gray-800 font-medium text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <span className="text-gray-500 font-medium">{link.name}</span>
                      )}
                      {link.subLinks.length > 0 && (
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className="p-1"
                          aria-expanded={openDropdown === link.name}
                        >
                          <ChevronDown
                            size={16}
                            className={`${openDropdown === link.name ? "rotate-180" : ""} transition-transform`}
                          />
                        </button>
                      )}
                    </div>

                    {link.subLinks.length > 0 && openDropdown === link.name && (
                      <ul className="pl-4 pb-3">
                        {link.subLinks.map((sublink) => {
                          const to = pathFor(sublink);
                          return (
                            <li key={sublink} className="py-2">
                              {to ? (
                                <button
                                  onClick={() => handleMobileNavigate(to)}
                                  className="text-gray-700"
                                >
                                  {sublink}
                                </button>
                              ) : (
                                <span className="text-gray-400">{sublink}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4">
              <button
                onClick={() => handleMobileNavigate("/apply")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
