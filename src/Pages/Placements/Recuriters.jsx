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
  { name: "TCS", src: "https://framerusercontent.com/assets/OXdEAXDnq7izafAXc8qTwUZhmPY.png" },
  { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" },
  { name: "Wipro", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPt9YqGT3tI1WPt9LIhgVLaxD06VNa68q_A&s" },
  { name: "Accenture", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Pe7PjB8vNXTiCXTcnLnN8SZiYyY_V4LmTg&s" },
  { name: "Capgemini", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  { name: "Cognizant", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2_z2Yk-wRMPNWOlTGqFJTPyV-JW73LGJ3g&s" },
  { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "HCL", src: "https://static.brandfinance.com/wp-content/uploads/2016/01/HCL-Logo.png" },
  { name: "Tech Mahindra", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbdvwukY6n5CSr76F8eRnvcJIfU_w7tAWaQ&s" },
  { name: "Deloitte", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ1pNl6ZN0vL33zm4Aez-lKrLHcRRJe75mQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ1pNl6ZN0vL33zm4Aez-lKrLHcRRJe75mQ&s" },
  { name: "EY", src: "https://yt3.googleusercontent.com/5KFMcay4PXPESmch7_yr4G2QrO2Zk74MDGDYsDmUdXjwhJLPALKNimVoXvzy0oGE3ciLPSdB=s900-c-k-c0x00ffffff-no-rj" },
  { name: "KPMG", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAY7ZsavnuQrlImNqtrS-D_J_Oq1uDiw1Iw&s" },
  { name: "PwC", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/PwC_Company_Logo.svg" },
  { name: "Adobe", src: "https://www.adobe.com/homepage/assets/product-icons/jpg/default.jpg?width=1200&format=pjpg&optimize=medium" },
  { name: "Intel", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/250px-Intel_logo_%282006-2020%29.svg.png" },
  { name: "NVIDIA", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
  { name: "SAP", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Bosch", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBaNPYzWimewDktfLThRVz5TXDNCQZ1bBNA&s" },
  { name: "L&T", src: "https://www.empsystems.com/images/Dealer/L&T.png" },
  { name: "Siemens", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHlxCyNGhihgrfAruJjvkxPFGUfNW9wpSDg&s" },
  { name: "Zoho", src: "https://sm.pcmag.com/t/pcmag_me/review/z/zoho-offic/zoho-office_u75g.1920.jpg" },
  { name: "Paytm", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0z_t9J0XH_xdafGtlWZe_RvZyVUsH8Ec3g&s" },
  { name: "Razorpay", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpb3Rl-U2KQEmxEKkNOZnJVH7nP8Am68S6vA&s" },
  { name: "Flipkart", src: "https://www.boardinfinity.com/blog/content/images/2024/09/Flipkart-Logo.png" },
  { name: "Swiggy", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbmTdMQETwA5zAbeiM2g77yLl-tYR3kF7AA&s" },
  { name: "Ola", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGPXJHL_Ipg2X9A-OYdC4NZSlHK9iobm9Lg&s" },
  { name: "BYJU'S", src: "https://play-lh.googleusercontent.com/7Ce16xDkZW-GmTSjvcfhBFQwe67Uu79Hzr-M4JAfvvq7qX_cTPsl7TcbhFZeW3MdpUGm" },
  { name: "Reliance Jio", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohZW0W9TJymIUxUO7wDwLLWzxdugPz5FiRw&s" },
  { name: "Mahindra", src: "data:image/png;base64,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" },
  { name: "TVS", src: "https://upload.wikimedia.org/wikipedia/mai/thumb/e/e9/TVS_Motor_logo.svg/2560px-TVS_Motor_logo.svg.png" },
  { name: "Maruti Suzuki", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HUvuyXQti8d8L906ZwTSLoul6j4Jydyoww&s" },
]
const HIGHLIGHTS = [
  { k: "500+", v: "Hiring Partners", icon: Building2 },
  { k: "93%", v: "Placement Rate", icon: CheckCircle2 },
  { k: "₹12.5 LPA", v: "Median CTC", icon: Briefcase },
  { k: "₹42 LPA", v: "Highest CTC", icon: Star },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

export default function Recruiters() {
  const rows = chunkArray(COMPANIES, 6); // 6 columns at large screens

  return (
    <div className="min-h-screen bg-gradient-to-b to-white">
      {/* Add CSS for glassmorphism + row motion */}
      <style>{`
        /* glass card base (kept separate so images are untouched) */
        .glass-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px) saturate(120%);
        }

        /* Row motion animations (alternate directions) */
        @keyframes slideXPos {
          from { transform: translateX(-4%); }
          to   { transform: translateX(4%); }
        }
        @keyframes slideXNeg {
          from { transform: translateX(4%); }
          to   { transform: translateX(-4%); }
        }

        .row-motion-odd {
          animation: slideXPos 10s ease-in-out infinite alternate;
        }
        .row-motion-even {
          animation: slideXNeg 12s ease-in-out infinite alternate;
        }

        /* Reduce motion on small screens for accessibility/responsiveness */
        @media (max-width: 1024px) {
          .row-motion-odd, .row-motion-even { animation-duration: 14s; transform: none; }
        }

        @media (max-width: 640px) {
          .row-motion-odd, .row-motion-even { animation: none; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-32 pb-20 mt-16">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
      opacity: 0.4,
    }}
  />
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Our Top Recruiters</h1>
    <p className="mt-3 text-white/90 max-w-2xl mx-auto">
      Trusted by leading organizations across technology, consulting, manufacturing, and finance.
    </p>

    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {HIGHLIGHTS.map((s) => (
        <div
          key={s.k}
          className="
            glass-card rounded-2xl py-5 px-4 
            flex flex-col items-center 
            border-white/20 
            transition-all duration-300 
            hover:bg-white/20 
            hover:scale-[1.05] 
            hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
          "
        >
          <s.icon size={26} />
          <div className="text-2xl font-bold mt-2">{s.k}</div>
          <div className="text-xs opacity-90">{s.v}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Recruiters Grid (rows with alternating motion) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
          Companies That Trust Our Graduates
        </h2>

        <div className="space-y-6">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`row-motion-${rowIdx % 2 === 0 ? "odd" : "even"} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center transition-transform will-change-transform`}
            >
              {row.map((c) => (
                <div
                  key={c.name}
                  className="glass-card rounded-2xl shadow-sm p-4 flex items-center justify-center h-24 w-40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <img src={c.src} alt={c.name} className="max-h-10 object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}
