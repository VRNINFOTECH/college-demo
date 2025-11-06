import React, { useState } from "react";
import { 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  BookOpen, 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  ChevronDown,
  Send
} from "lucide-react";

// All available programs
const PROGRAMS = {
  undergraduate: [
    "B.Tech - Computer Science & Engineering (CSE)",
    "B.Tech - CSE (Data Science)",
    "B.Tech - CSE (AI & ML)",
    "B.Tech - Information Science & Engineering (ISE)",
    "B.Tech - Electronics & Communication Engineering (ECE)",
    "B.Tech - Electrical & Electronics Engineering (EEE)",
    "B.Tech - Mechanical Engineering (ME)",
    "B.Tech - Civil Engineering (CE)",
    "B.Tech - Mechatronics Engineering",
    "B.Tech - Biomedical Engineering",
    "B.Tech - Aerospace Engineering",
    "B.Tech - Chemical Engineering",
    "B.Tech - Cyber Security",
    "B.Tech - Internet of Things (IoT)",
    "BCA - Bachelor of Computer Applications",
    "B.Sc - Bachelor of Science",
    "BBA - Bachelor of Business Administration",
    "BA - Bachelor of Arts",
    "B.Com - Bachelor of Commerce",
    "B.Design - Communication Design",
    "B.Design - UX Design",
    "B.Pharm - Bachelor of Pharmacy",
    "BHM - Bachelor of Hotel Management",
    "B.Ed - Bachelor of Education"
  ],
  postgraduate: [
    "M.Tech - Computer Science & Engineering",
    "M.Tech - Data Science",
    "M.Tech - VLSI & Embedded Systems",
    "M.Tech - Structural Engineering",
    "MBA - General",
    "MBA - Finance",
    "MBA - Marketing",
    "MBA - Human Resources",
    "MBA - Business Analytics",
    "MCA - Master of Computer Applications",
    "M.Sc - Physics",
    "M.Sc - Chemistry",
    "M.Sc - Mathematics",
    "M.Sc - Computer Science",
    "MA - Economics",
    "MA - English",
    "MA - Psychology",
    "M.Pharm - Master of Pharmacy"
  ],
  doctoral: [
    "Ph.D - Computer Science & Engineering",
    "Ph.D - Electronics & Communication",
    "Ph.D - Electrical Engineering",
    "Ph.D - Mechanical Engineering",
    "Ph.D - Civil Engineering",
    "Ph.D - Management",
    "Ph.D - Commerce",
    "Ph.D - Basic Sciences",
    "Ph.D - Humanities & Social Sciences",
    "Ph.D - Pharmacy"
  ],
  diploma: [
    "PG Diploma - AI & ML",
    "PG Diploma - Cyber Security",
    "Diploma - Data Analytics",
    "Certificate - UI/UX Design",
    "Certificate - Embedded Systems"
  ]
};

const CATEGORIES = [
  { value: "undergraduate", label: "Undergraduate Programs" },
  { value: "postgraduate", label: "Postgraduate Programs" },
  { value: "doctoral", label: "Doctoral Programs (Ph.D)" },
  { value: "diploma", label: "Diploma & Certificate Programs" }
];

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    
    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Academic Information
    programCategory: "",
    program: "",
    previousQualification: "",
    percentage: "",
    graduationYear: "",
    
    // Additional
    howHeard: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be 10 digits";
      }
      if (!formData.dob) newErrors.dob = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }

    if (currentStep === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.pincode.trim()) {
        newErrors.pincode = "Pincode is required";
      } else if (!/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode = "Pincode must be 6 digits";
      }
    }

    if (currentStep === 3) {
      if (!formData.programCategory) newErrors.programCategory = "Program category is required";
      if (!formData.program) newErrors.program = "Program is required";
      if (!formData.previousQualification.trim()) newErrors.previousQualification = "Previous qualification is required";
      if (!formData.percentage.trim()) {
        newErrors.percentage = "Percentage is required";
      } else if (isNaN(formData.percentage) || formData.percentage < 0 || formData.percentage > 100) {
        newErrors.percentage = "Enter valid percentage (0-100)";
      }
      if (!formData.graduationYear) newErrors.graduationYear = "Graduation year is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Simulate submission
      console.log("Form Data:", formData);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const availablePrograms = formData.programCategory ? PROGRAMS[formData.programCategory] : [];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you, <span className="font-semibold text-gray-900">{formData.firstName} {formData.lastName}</span>
          </p>
          <p className="text-gray-600 mb-8">
            Your application for <span className="font-semibold text-blue-600">{formData.program}</span> has been received.
            We'll contact you at <span className="font-semibold">{formData.email}</span> within 2-3 business days.
          </p>
          
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Application Details
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Application ID:</span>
                <span className="font-mono font-semibold">APP{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between">
                <span>Program:</span>
                <span className="font-semibold">{formData.program}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-semibold">{formData.email}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Print Confirmation
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  firstName: "", lastName: "", email: "", phone: "", dob: "", gender: "",
                  address: "", city: "", state: "", pincode: "",
                  programCategory: "", program: "", previousQualification: "", percentage: "", graduationYear: "",
                  howHeard: "", message: ""
                });
              }}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
            <GraduationCap className="text-blue-600" size={24} />
            <span className="font-semibold text-gray-700">Admission Application</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Apply for Admission
          </h1>
          <p className="text-gray-600">Complete the form below to begin your journey with us</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center h-10 w-10 rounded-full font-semibold transition-all ${
                  step >= s 
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg" 
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                    step > s ? "bg-blue-600" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <span className={`font-medium ${step >= 1 ? "text-blue-600" : "text-gray-500"}`}>
              Personal Info
            </span>
            <span className={`font-medium ${step >= 2 ? "text-blue-600" : "text-gray-500"}`}>
              Address
            </span>
            <span className={`font-medium ${step >= 3 ? "text-blue-600" : "text-gray-500"}`}>
              Academic Info
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="text-blue-600" size={24} />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.firstName ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.lastName ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                      errors.email ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                      errors.phone ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => updateField("dob", e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
                        errors.dob ? "border-red-300" : "border-gray-200"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.dob && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.dob}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateField("gender", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.gender ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.gender}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} />
                Address Information
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address *
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.address ? "border-red-300" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                  rows={3}
                  placeholder="House no., Street, Locality"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.city ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter city"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.state ? "border-red-300" : "border-gray-200"
                      } focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white`}
                    >
                      <option value="">Select state</option>
                      {STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.state}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => updateField("pincode", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.pincode ? "border-red-300" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none transition-colors`}
                  placeholder="6-digit pincode"
                  maxLength={6}
                />
                {errors.pincode && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.pincode}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Academic Information */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-600" size={24} />
                Academic Information
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Program Category *
                </label>
                <div className="relative">
                  <select
                    value={formData.programCategory}
                    onChange={(e) => {
                      updateField("programCategory", e.target.value);
                      updateField("program", ""); // Reset program when category changes
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.programCategory ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white`}
                  >
                    <option value="">Select program category</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
                {errors.programCategory && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.programCategory}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Program *
                </label>
                <div className="relative">
                  <select
                    value={formData.program}
                    onChange={(e) => updateField("program", e.target.value)}
                    disabled={!formData.programCategory}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.program ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`}
                  >
                    <option value="">
                      {formData.programCategory ? "Select a program" : "Please select category first"}
                    </option>
                    {availablePrograms.map(prog => (
                      <option key={prog} value={prog}>{prog}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
                {errors.program && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.program}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Qualification *
                </label>
                <input
                  type="text"
                  value={formData.previousQualification}
                  onChange={(e) => updateField("previousQualification", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.previousQualification ? "border-red-300" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none transition-colors`}
                  placeholder="e.g., 12th/Higher Secondary, Bachelor's Degree"
                />
                {errors.previousQualification && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.previousQualification}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Percentage/CGPA *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.percentage}
                    onChange={(e) => updateField("percentage", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.percentage ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter percentage"
                    min="0"
                    max="100"
                  />
                  {errors.percentage && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.percentage}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year of Graduation *
                  </label>
                  <input
                    type="number"
                    value={formData.graduationYear}
                    onChange={(e) => updateField("graduationYear", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.graduationYear ? "border-red-300" : "border-gray-200"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="YYYY"
                    min="1990"
                    max="2030"
                  />
                  {errors.graduationYear && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.graduationYear}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  value={formData.howHeard}
                  onChange={(e) => updateField("howHeard", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="website">University Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="education-fair">Education Fair</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="Tell us about your academic interests, career goals, or any questions..."
                />
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Required Documents (To be submitted later):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Recent passport-size photograph</li>
                      <li>Previous academic transcripts/mark sheets</li>
                      <li>Transfer certificate (if applicable)</li>
                      <li>ID proof (Aadhar/Passport)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <ChevronDown size={20} className="rotate-90" />
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 ml-auto"
              >
                Next Step
                <ChevronDown size={20} className="-rotate-90" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 ml-auto"
              >
                <Send size={20} />
                Submit Application
              </button>
            )}
          </div>

          {/* Required Fields Note */}
          <p className="text-sm text-gray-500 text-center mt-4">
            * Required fields must be filled
          </p>
        </form>

        {/* Contact Support */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact our admissions team at{" "}
            <a href="mailto:admissions@university.edu" className="text-blue-600 hover:underline font-semibold">
              admissions@university.edu
            </a>
            {" "}or call{" "}
            <a href="tel:+911234567890" className="text-blue-600 hover:underline font-semibold">
              +91 123 456 7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}