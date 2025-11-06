import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-blue-800 pt-10">
        {/* Contact Section */}
        <div>
          <p className="text-sm leading-relaxed mb-6">
            100 Feet Ring Road, <br />
            BSK III Stage, <br />
            Bangalore - 560085
          </p>
          <p className="text-sm mb-2">+91 80 26721983</p>
          <p className="text-sm mb-6">+91 80 26722108</p>

          <p className="font-semibold text-sm mb-1">For Admissions</p>
          <p className="text-sm mb-1">080-10-297297</p>
          <p className="text-sm">admissions@example.com</p>
        </div>

        {/* Information For */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-blue-700 pb-1">
            Information For
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Leadership</li>
            <li>Infrastructure</li>
            <li>Faculty</li>
            <li>Careers</li>
            <li>Events & Activities</li>
            <li>News & Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Information About */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-blue-700 pb-1">
            Information About
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Programs</li>
            <li>Admissions</li>
            <li>Entrance Process</li>
            <li>Research</li>
            <li>Sports</li>
            <li>Clubs & Activities</li>
            <li>Alumni</li>
            <li>Library</li>
            <li>Academic Calendar</li>
          </ul>
        </div>

        {/* Important Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-blue-700 pb-1">
            Important Info
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>UGC Guidelines</li>
            <li>Accreditation Reports</li>
            <li>University Act</li>
            <li>Student Policies</li>
            <li>IQAC</li>
            <li>Internal Committee</li>
            <li>Anti-Ragging Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Example University. All rights reserved.
      </div>
    </footer>
  );
}
