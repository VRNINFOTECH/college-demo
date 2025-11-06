import React, { useMemo, useState, useEffect, useRef } from "react";
import { Search, ChevronDown, BookOpen, GraduationCap, Layers, FileDown, ArrowRight, Filter, X, TrendingUp, Award, Users, Clock } from "lucide-react";

const DATA = {
  undergraduate: {
    highlight: [
      { code: "btech", title: "B.Tech", duration: "4 Years", type: "Engineering", tag: "UG", popular: true },
      { code: "bca", title: "BCA", duration: "3 Years", type: "Technology", tag: "UG", popular: true },
      { code: "bsc", title: "B.Sc", duration: "3 Years", type: "Science", tag: "UG" },
      { code: "bba", title: "BBA", duration: "3 Years", type: "Management", tag: "UG" },
      { code: "ba", title: "BA", duration: "3 Years", type: "Arts", tag: "UG" },
      { code: "bcom", title: "B.Com", duration: "3 Years", type: "Commerce", tag: "UG" },
    ],
    btechBranches: [
      "Computer Science & Engineering (CSE)",
      "CSE (Data Science)",
      "CSE (AI & ML)",
      "Information Science & Engineering (ISE)",
      "Electronics & Communication Engineering (ECE)",
      "Electrical & Electronics Engineering (EEE)",
      "Mechanical Engineering (ME)",
      "Civil Engineering (CE)",
      "Mechatronics Engineering",
      "Biomedical Engineering",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Cyber Security",
      "Internet of Things (IoT)",
    ],
    others: [
      { title: "B.Design (Communication/UX)", duration: "4 Years" },
      { title: "B.Pharm", duration: "4 Years" },
      { title: "BHM (Hotel Management)", duration: "4 Years" },
      { title: "B.Ed", duration: "2 Years" }
    ]
  },
  postgraduate: {
    programs: [
      { title: "M.Tech in Computer Science & Engineering", duration: "2 Years" },
      { title: "M.Tech in Data Science", duration: "2 Years" },
      { title: "M.Tech in VLSI & Embedded Systems", duration: "2 Years" },
      { title: "M.Tech in Structural Engineering", duration: "2 Years" },
      { title: "MBA (General/Finance/Marketing/HR/Business Analytics)", duration: "2 Years" },
      { title: "MCA", duration: "2 Years" },
      { title: "M.Sc (Physics/Chemistry/Mathematics/CS)", duration: "2 Years" },
      { title: "MA (Economics/English/Psychology)", duration: "2 Years" },
      { title: "M.Pharm", duration: "2 Years" },
    ]
  },
  doctoral: {
    areas: [
      "Computer Science & Engineering",
      "Electronics & Communication",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Management",
      "Commerce",
      "Basic Sciences",
      "Humanities & Social Sciences",
      "Pharmacy",
    ]
  },
  diplomas: {
    programs: [
      { title: "PG Diploma in AI & ML", duration: "1 Year" },
      { title: "PG Diploma in Cyber Security", duration: "1 Year" },
      { title: "Diploma in Data Analytics", duration: "1 Year" },
      { title: "Certificate in UI/UX Design", duration: "6 Months" },
      { title: "Certificate in Embedded Systems", duration: "6 Months" },
    ]
  }
};

const FILTERS = [
  { key: "engineering", label: "Engineering", icon: Layers },
  { key: "technology", label: "Technology", icon: BookOpen },
  { key: "management", label: "Management", icon: TrendingUp },
  { key: "science", label: "Science", icon: Award },
  { key: "arts", label: "Arts", icon: Users },
];

export default function Academics() {
  const [tab, setTab] = useState("undergraduate");
  const [q, setQ] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target)) setShowResults(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleChip = (key) => {
    setActiveFilters((prev) => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };

  const flatSearch = useMemo(() => {
    const bucket = [];
    const text = q.trim().toLowerCase();

    DATA.undergraduate.highlight.forEach(p => bucket.push({ ...p, section: "Undergraduate", title: p.title }));
    DATA.undergraduate.btechBranches.forEach(title => bucket.push({ title, section: "B.Tech Branch" }));
    DATA.undergraduate.others.forEach(p => bucket.push({ ...p, section: "Undergraduate", title: p.title }));
    DATA.postgraduate.programs.forEach(p => bucket.push({ ...p, section: "Postgraduate", title: p.title }));
    DATA.doctoral.areas.forEach(title => bucket.push({ title, section: "Doctoral (Ph.D)" }));
    DATA.diplomas.programs.forEach(p => bucket.push({ ...p, section: "Diploma/Certificate", title: p.title }));

    let filtered = bucket;
    if (activeFilters.length) {
      filtered = filtered.filter(item => {
        const t = (item.title || "").toLowerCase();
        return (
          (activeFilters.includes("engineering") && t.includes("engineer")) ||
          (activeFilters.includes("technology") && (t.includes("tech") || t.includes("computer") || t.includes("cs"))) ||
          (activeFilters.includes("management") && (t.includes("mba") || t.includes("management") || t.includes("commerce") || t.includes("bba"))) ||
          (activeFilters.includes("science") && (t.includes("science") || t.includes("physics") || t.includes("chemistry") || t.includes("mathematics"))) ||
          (activeFilters.includes("arts") && (t.includes("arts") || t.includes("design") || t.includes("english")))
        );
      });
    }

    if (!text) return filtered;
    return filtered.filter(item => (item.title || "").toLowerCase().includes(text));
  }, [q, activeFilters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero with animated gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-28 pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Stats bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award size={18} />
              <span className="text-sm font-medium">100+ Programs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users size={18} />
              <span className="text-sm font-medium">15,000+ Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp size={18} />
              <span className="text-sm font-medium">95% Placement Rate</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Academics & Programs
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mb-8">
            Explore world-class programs designed to transform your passion into expertise
          </p>

          {/* Enhanced Search */}
          <div className="max-w-3xl">
            <div className="relative" ref={resultsRef}>
              <label htmlFor="programSearch" className="sr-only">Search programs</label>
              <div className="relative group">
                <input
                  id="programSearch"
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setShowResults(true); }}
                  onFocus={() => setShowResults(true)}
                  placeholder='Try "Data Science", "MBA", "Computer Science"...'
                  className="w-full h-16 rounded-2xl pl-14 pr-32 text-gray-900 placeholder:text-gray-400 outline-none shadow-2xl focus:ring-4 focus:ring-white/30 transition-all group-hover:shadow-xl"
                  aria-autocomplete="list"
                  aria-expanded={showResults}
                  role="combobox"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} aria-hidden="true" />
                {q && (
                  <button
                    onClick={() => { setQ(""); setShowResults(false); }}
                    className="absolute right-28 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={20} />
                  </button>
                )}
                <button
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all"
                  onClick={() => setShowResults(true)}
                >
                  Search
                </button>
              </div>

              {showResults && q && (
                <div role="listbox" className="absolute z-20 mt-3 w-full bg-white rounded-2xl shadow-2xl max-h-96 overflow-auto border border-gray-100">
                  {flatSearch.length ? (
                    flatSearch.map((item, i) => (
                      <a key={i} href="#" className="block px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 focus:bg-blue-50 focus:outline-none border-b last:border-b-0 transition-all group">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">{item.title}</div>
                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1">
                                <BookOpen size={12} />
                                {item.section}
                              </span>
                              {item.duration && (
                                <span className="inline-flex items-center gap-1">
                                  <Clock size={12} />
                                  {item.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" size={18} />
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="px-5 py-8 text-center">
                      <div className="text-gray-400 mb-2">
                        <Search size={32} className="mx-auto opacity-50" />
                      </div>
                      <div className="text-gray-600 font-medium">No matching programs found</div>
                      <div className="text-sm text-gray-500 mt-1">Try adjusting your search terms</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Enhanced Filter chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm text-white/90 font-medium">
                <Filter size={16}/> Filter by:
              </span>
              {FILTERS.map(f => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.key}
                    onClick={() => toggleChip(f.key)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/40 ${
                      activeFilters.includes(f.key) 
                        ? "bg-white text-blue-700 border-white shadow-lg scale-105" 
                        : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
                    }`}
                    aria-pressed={activeFilters.includes(f.key)}
                  >
                    <span className="flex items-center gap-1.5">
                      <Icon size={14} />
                      {f.label}
                    </span>
                  </button>
                );
              })}
              {activeFilters.length > 0 && (
                <button 
                  onClick={() => setActiveFilters([])} 
                  className="ml-2 text-sm text-white/90 hover:text-white underline hover:no-underline font-medium"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#apply" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <GraduationCap size={20} />
                Apply Now
              </a>
              <a 
                href="#download" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                <FileDown size={18} /> Download Prospectus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {[
              { key: "undergraduate", label: "Undergraduate", icon: BookOpen },
              { key: "postgraduate", label: "Postgraduate", icon: GraduationCap },
              { key: "doctoral", label: "Doctoral (Ph.D)", icon: Award },
              { key: "diplomas", label: "Diplomas & Certificates", icon: Layers },
            ].map(t => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    tab === t.key 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }`}
                  aria-current={tab === t.key ? "page" : undefined}
                >
                  <Icon size={16} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-fadeIn">
          {tab === "undergraduate" && <Undergraduate />}
          {tab === "postgraduate" && <Postgraduate />}
          {tab === "doctoral" && <Doctoral />}
          {tab === "diplomas" && <Diplomas />}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{children}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
}

function Card({ title, children, tag, href, popular }) {
  return (
    <a 
      href={href || "#"} 
      className="group relative rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 block focus:outline-none focus:ring-4 focus:ring-blue-300 hover:-translate-y-1 overflow-hidden"
    >
      {popular && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            <TrendingUp size={12} />
            Popular
          </span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</div>
            {tag && (
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Clock size={14} />
                {tag}
              </div>
            )}
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <ArrowRight className="text-blue-600 group-hover:text-white transition-colors group-hover:translate-x-0.5" size={18} />
          </div>
        </div>
        {children}
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </a>
  );
}

function UnderGraduateHighlight() {
  return (
    <>
      <SectionTitle subtitle="Popular undergraduate degrees to kickstart your career journey">
        Undergraduate Highlights
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.undergraduate.highlight.map((p) => (
          <Card 
            key={p.code} 
            title={p.title} 
            tag={`${p.type} • ${p.duration}`} 
            href={`#/programs/${p.code}`}
            popular={p.popular}
          />
        ))}
      </div>
    </>
  );
}

function BTechBranches() {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white shadow-lg overflow-hidden">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Layers size={22} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900 text-left">B.Tech Engineering Branches</div>
            <div className="text-sm text-gray-600">14 specialized branches available</div>
          </div>
        </div>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""} text-gray-400`} size={22} aria-hidden="true" />
      </button>
      {open && (
        <div className="px-6 pb-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DATA.undergraduate.btechBranches.map((b) => (
              <div 
                key={b} 
                className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="group-hover:text-blue-600 transition-colors">{b}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Undergraduate() {
  return (
    <div className="space-y-12">
      <UnderGraduateHighlight />
      <BTechBranches />
      <div>
        <SectionTitle>Other Undergraduate Degrees</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.undergraduate.others.map((p) => (
            <Card key={p.title} title={p.title} tag={`Duration • ${p.duration}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Postgraduate() {
  return (
    <div>
      <SectionTitle subtitle="Advance your career with specialized master's programs">
        Postgraduate Programs
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.postgraduate.programs.map((p) => (
          <Card key={p.title} title={p.title} tag={`Duration • ${p.duration}`} />
        ))}
      </div>
    </div>
  );
}

function Doctoral() {
  return (
    <div>
      <SectionTitle subtitle="Join cutting-edge research in diverse disciplines">
        Doctoral Programs (Ph.D)
      </SectionTitle>
      <div className="rounded-2xl border-2 border-gray-200 bg-white shadow-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {DATA.doctoral.areas.map((a) => (
            <div 
              key={a} 
              className="px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
            >
              {a}
            </div>
          ))}
        </div>
        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <Award className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Admission Process:</span> Ph.D admissions are conducted through entrance examinations and interviews as per University norms. Research proposals are evaluated by expert committees.
          </div>
        </div>
      </div>
    </div>
  );
}

function Diplomas() {
  return (
    <div>
      <SectionTitle subtitle="Short-term programs for skill enhancement">
        Diplomas & Certificates
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.diplomas.programs.map((p) => (
          <Card key={p.title} title={p.title} tag={`Duration • ${p.duration}`} />
        ))}
      </div>
    </div>
  );
}

// Add custom styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);