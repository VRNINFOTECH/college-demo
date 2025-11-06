import React, { useState } from "react";
import {
  MapPin,
  Wifi,
  ShieldCheck,
  Bike,
  Trees,
  Coffee,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export default function CampusTour() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const glassLight =
    "border border-white/60 bg-white/60 backdrop-blur-xl text-gray-900 shadow-[0_8px_24px_rgba(2,6,23,0.06)]";
  const hoverDepth =
    "transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-blue-300/60";

  const sections = [
    {
      title: "Modern Classrooms",
      desc: "Smart boards, high-speed internet, acoustic panels, and ergonomic seating for immersive learning.",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Central Library",
      desc: "100,000+ books & journals, digital repositories, reading lounges, 24×7 research carrels.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Olympic-Size Swimming Pool",
      desc: "International-standard pool with professional coaching and dedicated fitness hours.",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sports Stadium",
      desc: "10,000-seater arena, cricket ground, basketball & tennis courts for intra & inter-university events.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Student Hostels",
      desc: "Secure, comfortable living with in-house dining, study lounges, recreation rooms and Wi-Fi.",
      img: "https://images.unsplash.com/photo-1598300187398-5d8a1bb1d1f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cafeteria & Food Court",
      desc: "Multi-cuisine menus, hygienic kitchens, and vibrant hangout spots between lectures.",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb8?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <main className="bg-white text-gray-900 pt-24 relative">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Campus Tour
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
            Explore world-class facilities designed for learning, growth, and
            innovation—right here at our university.
          </p>

          {/* Quick Facts */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Wi-Fi Campus", v: "1 Gbps", Icon: Wifi },
              { k: "Safety", v: "24×7", Icon: ShieldCheck },
              { k: "Green Cover", v: "40%+", Icon: Trees },
              { k: "Bicycle-Friendly", v: "Yes", Icon: Bike },
            ].map(({ k, v, Icon }) => (
              <div
                key={k}
                className={`border border-white/20 bg-white/10 backdrop-blur-xl text-white px-6 py-5 ${hoverDepth}`}
              >
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold">
                  <Icon className="h-6 w-6" /> {v}
                </div>
                <div className="text-sm opacity-90 mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FACILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-blue-800 text-sm font-semibold">
            <BookOpen className="h-4 w-4" />
            Explore Facilities
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
            Learn. Train. Live. Thrive.
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {sections.map((sec, idx) => (
            <article
              key={sec.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch`}
            >
              {/* Image */}
              <div className={`${idx % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className={`${glassLight} ${hoverDepth} h-full`}>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    loading="lazy"
                    className="w-full h-[320px] md:h-[360px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className={`${glassLight} ${hoverDepth} h-full p-6 flex flex-col`}>
                  <h3 className="text-2xl font-semibold text-blue-900">{sec.title}</h3>
                  <p className="text-gray-700 mt-3">{sec.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-2 bg-blue-700/90 px-4 py-2 text-sm text-white hover:bg-blue-800"
                    >
                      View Photos <ChevronRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#map"
                      className="inline-flex items-center gap-2 border border-white/70 bg-white/60 backdrop-blur-md px-4 py-2 text-sm hover:bg-white/80"
                    >
                      <MapPin className="h-4 w-4 text-gray-800" />
                      Locate on Map
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 pb-14">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
            Explore Our Beautiful Campus
          </h3>
          <p className="text-gray-600 mt-2">
            A quick look at spaces where ideas, friendships, and futures grow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`${glassLight} ${hoverDepth} overflow-hidden cursor-pointer`}
              onClick={() => setFullscreenImg(img)}
            >
              <img
                src={img}
                alt={`Campus view ${i + 1}`}
                loading="lazy"
                className="object-cover h-48 w-full transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN IMAGE OVERLAY */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center cursor-zoom-out transition-all duration-300"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 scale-100 hover:scale-[1.02]"
          />
        </div>
      )}

      {/* AMENITIES STRIP */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: <Wifi className="h-5 w-5" />, label: "Campus Wi-Fi" },
            { icon: <Coffee className="h-5 w-5" />, label: "Cafés & Kiosks" },
            { icon: <ShieldCheck className="h-5 w-5" />, label: "24×7 Security" },
            { icon: <Trees className="h-5 w-5" />, label: "Green Zones" },
            { icon: <Bike className="h-5 w-5" />, label: "Bike-Friendly" },
            { icon: <MapPin className="h-5 w-5" />, label: "Easy Access" },
          ].map((a) => (
            <div key={a.label} className="flex items-center justify-center gap-2 text-sm text-gray-700">
              {a.icon}
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12" aria-labelledby="cta-heading">
        <div className={`${glassLight} ${hoverDepth} p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}>
          <div>
            <h4 id="cta-heading" className="text-xl font-semibold text-blue-900">
              Plan your visit or start your application
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              Join a guided campus tour or apply now to be part of our community.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="/apply" className="inline-flex items-center gap-2 bg-blue-700/90 px-5 py-3 text-sm text-white hover:bg-blue-800">
              Apply Now
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/70 bg-white/60 backdrop-blur-md px-5 py-3 text-sm hover:bg-white/80"
            >
              Download Prospectus
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
