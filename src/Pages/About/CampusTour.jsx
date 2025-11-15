import React, { useState, useEffect, useRef } from "react";
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
  const pageRef = useRef(null);

  const glassLight =
    "border border-white/60 bg-white/60 backdrop-blur-xl text-gray-900 shadow-[0_8px_24px_rgba(2,6,23,0.06)]";
  const hoverDepth =
    "transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-blue-300/60";

  const sections = [
    {
      title: "Modern Classrooms",
      desc: "Smart boards, high-speed internet, acoustic panels, and ergonomic seating for immersive learning.",
      img: "https://www.dialeducation.com/assets/images/gallery/gallery_1592573916.jpeg",
    },
    {
      title: "Central Library",
      desc: "100,000+ books & journals, digital repositories, reading lounges, 24×7 research carrels.",
      img: "https://gdcbhikiyasain.in/wp-content/uploads/2023/07/bhikiysainlibrary.jpg",
    },
    {
      title: "Olympic-Size Swimming Pool",
      desc: "International-standard pool with professional coaching and dedicated fitness hours.",
      img: "https://www.plymouthcollege.com/wp-content/uploads/2025/05/Swimming-Pool-scaled.jpg",
    },
    {
      title: "Sports Stadium",
      desc: "10,000-seater arena, cricket ground, basketball & tennis courts for intra & inter-university events.",
      img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/02/Pictures/jln-stadium_48614e22-a0e9-11e6-8b09-4d35dc1d77aa.jpg",
    },
    {
      title: "Student Hostels",
      desc: "Secure, comfortable living with in-house dining, study lounges, recreation rooms and Wi-Fi.",
      img: "https://media.istockphoto.com/id/1251719415/photo/empty-room-for-a-cheap-hostel-with-bunk-beds.jpg?s=612x612&w=0&k=20&c=t6Je0myW4SThQMPOqaN_JG58_mK5wGBvjgkWYAR8kKU=",
    },
    {
      title: "Cafeteria & Food Court",
      desc: "Multi-cuisine menus, hygienic kitchens, and vibrant hangout spots between lectures.",
      img: "https://cdn.britannica.com/80/147280-050-B07C1E01/cafeteria-Bangalore-India.jpg",
    },
  ];

  const gallery = [
    "https://www.dialeducation.com/assets/images/gallery/gallery_1592573916.jpeg",
    "https://cdn.britannica.com/80/147280-050-B07C1E01/cafeteria-Bangalore-India.jpg",
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/02/Pictures/jln-stadium_48614e22-a0e9-11e6-8b09-4d35dc1d77aa.jpg",
    "https://www.plymouthcollege.com/wp-content/uploads/2025/05/Swimming-Pool-scaled.jpg",
    "https://gdcbhikiyasain.in/wp-content/uploads/2023/07/bhikiysainlibrary.jpg",
    "https://www.shutterstock.com/image-photo/sports-facilities-public-school-north-600nw-2466908815.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95gPbzOR5z8OpkCkIXKh4Mp555YnVZiLw1Q&s",
    "https://www.accurate.in/engg/img/sports/sports.webp",
  ];

  // Fade-in observer for elements with `.fade-item` and images with `.fade-img`
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // If user prefers reduced motion, reveal everything immediately.
      Array.from(root.querySelectorAll(".fade-item, .fade-img")).forEach((el) => {
        el.classList.remove("opacity-0", "translate-y-6", "scale-95");
        el.classList.add("opacity-100", "translate-y-0", "scale-100");
        el.style.transitionDelay = "";
      });
      return;
    }

    const items = Array.from(root.querySelectorAll(".fade-item, .fade-img"));
    // stagger: 75ms
    items.forEach((el, idx) => {
      el.classList.add("opacity-0", "translate-y-6");
      // images also get slight scale
      if (el.classList.contains("fade-img")) el.classList.add("scale-95");
      el.style.transitionDelay = `${idx * 75}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.remove("scale-95");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-white text-gray-900 pt-24 relative" ref={pageRef}>
      {/* styles for fade and image reveal */}
      <style>{`
        /* base fade-item transition */
        .fade-item, .fade-img {
          transition-property: opacity, transform;
          transition-duration: 650ms;
          transition-timing-function: cubic-bezier(.2,.9,.2,1);
        }

        /* helpers */
        .opacity-0 { opacity: 0 !important; }
        .opacity-100 { opacity: 1 !important; }
        .translate-y-6 { transform: translateY(1.5rem) !important; }
        .translate-y-0 { transform: translateY(0) !important; }
        .scale-95 { transform: scale(0.96) !important; }
        .scale-100 { transform: scale(1) !important; }

        /* when both translate and scale exist, combine transforms (only for browsers without tailwind composing) */
        /* reduced motion respected */
        @media (prefers-reduced-motion: reduce) {
          .fade-item, .fade-img { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "url(https://curlytales.com/wp-content/uploads/2020/09/SSN.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight fade-item">
            Campus Tour
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl fade-item">
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
            ].map(({ k, v, Icon }, i) => (
              <div
                key={k}
                className={`border border-white/20 bg-white/10 backdrop-blur-xl text-white px-6 py-5 ${hoverDepth} fade-item`}
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
          <p className="inline-flex items-center gap-2 text-blue-800 text-sm font-semibold fade-item">
            <BookOpen className="h-4 w-4" />
            Explore Facilities
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-2 fade-item">
            Learn. Train. Live. Thrive.
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {sections.map((sec, idx) => (
            <article
              key={sec.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              {/* Image */}
              <div className={`${idx % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className={`${glassLight} ${hoverDepth} h-full fade-item`}>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    loading="lazy"
                    className="w-full h-[320px] md:h-[360px] object-cover fade-img"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className={`${glassLight} ${hoverDepth} h-full p-6 flex flex-col fade-item`}>
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 fade-item">
            Explore Our Beautiful Campus
          </h3>
          <p className="text-gray-600 mt-2 fade-item">
            A quick look at spaces where ideas, friendships, and futures grow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`${glassLight} ${hoverDepth} overflow-hidden cursor-pointer fade-item`}
              onClick={() => setFullscreenImg(img)}
            >
              <img
                src={img}
                alt={`Campus view ${i + 1}`}
                loading="lazy"
                className="object-cover h-48 w-full transition-transform duration-500 hover:scale-110 fade-img"
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
            <div key={a.label} className="flex items-center justify-center gap-2 text-sm text-gray-700 fade-item">
              {a.icon}
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12" aria-labelledby="cta-heading">
        <div className={`${glassLight} ${hoverDepth} p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 fade-item`}>
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
