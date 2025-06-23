import {
  FaUsers,
  FaLinkedin,
  FaGithub,
  FaStar,
  FaAward,
  FaCode,
  FaPalette,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl mb-8 shadow-lg">
            <FaUsers className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-700 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "Passionate developers dedicated to bringing your digital vision to
            life with cutting-edge technology and creative excellence." Our team
            combines expertise in web development, design, and user experience
            to deliver stunning, high-performance websites that not only look
            amazing but perform flawlessly. "With a focus on quality and
            customer satisfaction, we transform ideas into reality, ensuring
            your online presence stands out."
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Prasad Shaswat Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-slate-700 rounded-3xl p-8 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-orange-900 to-orange-800 rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/api/placeholder/160/160"
                      alt="Prasad Shaswat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                    <FaAward className="w-3 h-3" />
                    Founder
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-200 mb-2">
                    Prasad Shaswat
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FaCode className="w-4 h-4" />
                    Founder & Web Developer
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    With 4 years of web development experience, Prasad's mission
                    is to make professional web presence accessible to everyone.
                    Specializing in modern frameworks and user-centric design.
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                    <span className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-700">
                      React
                    </span>
                    <span className="bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-700">
                      Node.js
                    </span>
                    <span className="bg-purple-900 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-700">
                      Next.js
                    </span>
                    <span className="bg-yellow-900 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium border border-yellow-700">
                      JavaScript
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/shaswat-prasad-14b147266/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/shaswat2031"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-8 pt-8 border-t border-slate-600">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">4+</div>
                    <div className="text-sm text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">
                      50+
                    </div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunidhi Chaudhary Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-slate-700 rounded-3xl p-8 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-orange-900 to-orange-800 rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/api/placeholder/160/160"
                      alt="Sunidhi Chaudhary"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                    <FaAward className="w-3 h-3" />
                    Co-founder
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-200 mb-2">
                    Sunidhi Chaudhary
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FaPalette className="w-4 h-4" />
                    Co-founder & UI/UX Designer
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Sunidhi brings creative vision and design expertise to our
                    projects, ensuring each website is not just functional but
                    visually stunning. Expert in UI/UX design and brand
                    identity.
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                    <span className="bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium border border-pink-200">
                      UI/UX
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                      Figma
                    </span>
                    <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200">
                      Adobe XD
                    </span>
                    <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200">
                      Design Systems
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/Sunidhichaudhary21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-8 pt-8 border-t border-slate-600">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">3+</div>
                    <div className="text-sm text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">
                      40+
                    </div>
                    <div className="text-sm text-gray-400">Designs</div>
                  </div>
                  <div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work with our amazing team?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your project and bring your vision to life
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
