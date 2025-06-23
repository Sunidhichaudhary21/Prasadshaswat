import {
  FaComments,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaClipboardList,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const name = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const projectType = document.getElementById("project-type").value;
      const budget = document.getElementById("budget").value;
      const timeline = document.getElementById("timeline").value;
      const requirements = document.getElementById("requirements").value;
      const additionalInfo =
        document.getElementById("additional-info").value || "None provided";

      const message = encodeURIComponent(
        `*New Website Project Inquiry*\n\n` +
          `*Name:* ${name}\n` +
          `*Email:* ${email}\n` +
          `*Phone:* ${phone}\n\n` +
          `*Project Details:*\n` +
          `Type: ${projectType}\n` +
          `Budget: ${budget}\n` +
          `Timeline: ${timeline}\n\n` +
          `*Requirements:*\n${requirements}\n\n` +
          `*Additional Info:*\n${additionalInfo}`
      );

      window.open(`https://wa.me/917096021708?text=${message}`, "_blank");
    } else {
      form.reportValidity();
    }
  };

  return (
    <section
      id="contact-us"
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <FaComments className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below with your project details and we'll get back
            to you within 24 hours
          </p>
        </div>

        <form
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          id="whatsapp-form"
          onSubmit={handleSubmit}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
            <h3 className="text-2xl font-bold text-center">
              Project Details Form
            </h3>
            <p className="text-center text-indigo-100 mt-2">
              Tell us about your dream website
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <FaUser className="h-5 w-5 mr-2 text-indigo-600" />
                Personal Information
              </h4>

              <div className="mb-6">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="91XXXXXXXXXX"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-indigo-300 bg-white shadow-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <FaBuilding className="h-5 w-5 mr-2 text-purple-600" />
                Project Specifications
              </h4>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Type of Project <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="project-type"
                      defaultValue=""
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white appearance-none transition-all duration-300 hover:border-purple-300 shadow-sm text-gray-700"
                      required
                    >
                      <option value="" disabled>
                        Select your project type
                      </option>
                      <option value="Personal Website">Personal Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Blog">Blog</option>
                      <option value="Other">
                        Other (Please specify in requirements)
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                      <svg
                        className="fill-current h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        defaultValue=""
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white appearance-none transition-all duration-300 hover:border-purple-300 shadow-sm"
                        required
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        <option value="2,500 - 5,000">₹2,500 - ₹5,000</option>
                        <option value="5,000 - 10,000">₹5,000 - ₹10,000</option>
                        <option value="10,000 - 20,000">
                          ₹10,000 - ₹20,000
                        </option>
                        <option value="20,000+">₹20,000+</option>
                        <option value="Not Sure">
                          Not Sure / Need Consultation
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                        <svg
                          className="fill-current h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="timeline"
                        defaultValue=""
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white appearance-none transition-all duration-300 hover:border-purple-300 shadow-sm"
                        required
                      >
                        <option value="" disabled>
                          Select timeline
                        </option>
                        <option value="Urgent (< 1 week)">
                          Urgent (less than 1 week)
                        </option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                        <svg
                          className="fill-current h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <FaClipboardList className="h-5 w-5 mr-2 text-green-600" />
                Project Requirements
              </h4>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Detailed Requirements{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    rows="5"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300 bg-white shadow-sm resize-none"
                    placeholder="Please describe your project requirements, features needed, design preferences, and any specific functionality you want..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="additional-info"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additional-info"
                    rows="3"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-green-300 bg-white shadow-sm resize-none"
                    placeholder="Any other details, inspiration websites, questions, or special requests..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-2xl">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="terms"
                    className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-2 border-gray-300 rounded transition-all duration-200"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to share my information for project discussion
                  </label>
                  <p className="text-gray-500 text-sm mt-1">
                    Your information is kept confidential and only used to
                    discuss your project requirements.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
              >
                <FaWhatsapp className="h-6 w-6 mr-3" />
                Send Project Details via WhatsApp
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  ⚡ Instant response • 🔒 Secure & confidential • 💬 Direct
                  communication
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
