// src/Pages/Placements/Recruiters.jsx
import React from "react";
import {
  Building2,
  Star,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

const COMPANIES = [
  // Add more logos below
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "TCS", src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Infosys_logo.svg" },
  { name: "Wipro", src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Accenture.svg" },
  { name: "Capgemini", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  { name: "Cognizant", src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Cognizant_Logo_2022.svg" },
  { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "HCL", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/HCL_Technologies_logo.svg" },
  { name: "Tech Mahindra", src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Tech_Mahindra_New_Logo.svg" },
  { name: "Deloitte", src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "EY", src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/EY_logo_2019.svg" },
  { name: "KPMG", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg" },
  { name: "PwC", src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/PwC_fl_2c_process_rgb.png" },
  { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Adobe_Corporate_logo.svg" },
  { name: "Intel", src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo-2022.svg" },
  { name: "NVIDIA", src: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
  { name: "SAP", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Bosch", src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Bosch-logotype-2021.svg" },
  { name: "L&T", src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/L%26T_logo.svg" },
  { name: "Siemens", src: "https://upload.wikimedia.org/wikipedia/commons/0/07/Siemens-logo.svg" },
  { name: "Zoho", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Zoho_logo.svg" },
  { name: "Paytm", src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Paytm_logo.svg" },
  { name: "Razorpay", src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Razorpay_logo.svg" },
  { name: "Flipkart", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flipkart_logo.svg" },
  { name: "Swiggy", src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg" },
  { name: "Ola", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ola_Cabs_logo.svg" },
  { name: "BYJU'S", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/BYJU%27S_logo.svg" },
  { name: "Reliance Jio", src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Jio_logo.svg" },
  { name: "Mahindra", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mahindra_logo.svg" },
  { name: "TVS", src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/TVS_Motor_Company_Logo.svg" },
  { name: "Maruti Suzuki", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Maruti_Suzuki_Logo.svg" },
  { name: "Asian Paints", src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Asian_Paints_logo.svg" },
];

const HIGHLIGHTS = [
  { k: "500+", v: "Hiring Partners", icon: Building2 },
  { k: "93%", v: "Placement Rate", icon: CheckCircle2 },
  { k: "₹12.5 LPA", v: "Median CTC", icon: Briefcase },
  { k: "₹42 LPA", v: "Highest CTC", icon: Star },
];

export default function Recruiters() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white pt-32 pb-20 mt-16">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Our Top Recruiters
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Trusted by leading organizations across technology, consulting,
            manufacturing, and finance.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((s) => (
              <div
                key={s.k}
                className="bg-white/15 backdrop-blur-md rounded-2xl py-5 px-4 flex flex-col items-center border border-white/20 hover:bg-white/25 transition-all"
              >
                <s.icon size={26} />
                <div className="text-2xl font-bold mt-2">{s.k}</div>
                <div className="text-xs opacity-90">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
          Companies That Trust Our Graduates
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              className="bg-white border rounded-2xl shadow-sm p-4 flex items-center justify-center h-24 w-40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={c.src}
                alt={c.name}
                className="max-h-10 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Partner With Us</h3>
            <p className="text-white/90 mt-2">
              Collaborate with our Training & Placement Cell to recruit
              high-performing, industry-ready graduates.
            </p>
            <div className="mt-5 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} /> tpo@college.edu
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} /> www.college.edu/placements
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
            <h4 className="text-xl font-semibold text-blue-800 mb-3">
              Recruit Talent
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Interested in hiring from our campus? Fill in your details and our
              placement team will contact you.
            </p>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white h-11 rounded-xl font-semibold flex items-center justify-center gap-2">
              Submit Interest <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
