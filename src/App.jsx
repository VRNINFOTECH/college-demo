import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Academics from "./Pages/Academics/Academics.jsx";
import Undergraduate from "./Pages/Admissions/Undergraduate.jsx";
import Postgraduate from "./Pages/Admissions/Postgraduate.jsx";
import Phd from "./Pages/Admissions/Phd.jsx";
import Lifelong from "./Pages/Academics/Faculty.jsx";
import Aboutus from "./Pages/About/Aboutus.jsx";
import Leaderships from "./Pages/About/Leadership.jsx";
import CampusTour from "./Pages/About/CampusTour.jsx";
import Departments from "./Pages/Academics/Departments.jsx";
import Faculty from "./Pages/Academics/Faculty.jsx";
import Programs from "./Pages/Academics/Programs.jsx";
import Apply from "./Pages/Applyform.jsx";
import Recruiters from "./Pages/Placements/Recuriters.jsx";
import CareerGuidance from "./Pages/Placements/Careergudience.jsx";
import Naac from "./Pages/Naac.jsx";
import Publications from "./Pages/Research/Publications.jsx";
import Projects from "./Pages/Research/Projects.jsx";
import Patents from "./Pages/Research/Patents.jsx";
import Events from "./Pages/Campus/Events.jsx";
import Clubs from "./Pages/Campus/Clubs.jsx";
import Facilities from "./Pages/Campus/Faclities.jsx";
import Courses from "./Pages/Courses/Courses.jsx";

// Optional: 404 Not Found Page
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h1 className="text-5xl font-bold text-blue-800 mb-3">404</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-white hover:bg-blue-800 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar on all pages */}
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* ✅ Strictly defined routes only */}
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/departments" element={<Departments />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/undergraduate" element={<Undergraduate />} />
          <Route path="/programs/postgraduate" element={<Postgraduate />} />
          <Route path="/programs/phd" element={<Phd />} />
          <Route path="/programs/lifelong-learning" element={<Lifelong />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/aboutus/leadership" element={<Leaderships />} />
          <Route path="/aboutus/campus-tour" element={<CampusTour />} />
          <Route path="/placements/recruiter" element={<Recruiters />} />
          <Route path="/placements/careerguidance" element={<CareerGuidance />} />
          <Route path="/naac" element={<Naac />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route path="/research/patents" element={<Patents />} />
          <Route path="/campus/events" element={<Events />} />
          <Route path="/campus/clubs" element={<Clubs />} />
          <Route path="/campus/facilities" element={<Facilities />} />
          <Route path="/courses" element={<Courses />} />

          {/* 🚫 Catch-all route (anything else goes here) */}
          <Route path="*" element={<NotFound />} />
          {/* Or redirect unknown routes back to home:
              <Route path="*" element={<Navigate to="/" replace />} />
          */}
        </Routes>
      </main>

      {/* Footer on all pages */}
      <Footer />
    </BrowserRouter>
  );
}
