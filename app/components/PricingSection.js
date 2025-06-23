import {
  FaGlobe,
  FaMobile,
  FaSearch,
  FaRocket,
  FaBolt,
  FaLock,
  FaSlidersH,
  FaCode,
  FaTools,
  FaRedo,
} from "react-icons/fa";

export default function PricingSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-slate-700">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
              Basic Package - ₹2,500
            </h2>
            <p className="text-center text-orange-100 mt-2">
              Everything you need to get started
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="group flex items-start p-4 rounded-xl hover:bg-slate-700 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 mb-1">
                      One-page professional website with modern design
                    </p>
                    <p className="text-sm bg-green-900 text-green-300 px-2 py-1 rounded-full inline-block">
                      Included
                    </p>
                  </div>
                </div>

                <div className="group flex items-start p-4 rounded-xl hover:bg-slate-700 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaMobile className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 mb-1">
                      Fully responsive design for all devices
                    </p>
                    <p className="text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded-full inline-block">
                      Mobile-friendly
                    </p>
                  </div>
                </div>

                <div className="group flex items-start p-4 rounded-xl hover:bg-slate-700 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaSearch className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 mb-1">
                      Up to 5 custom content sections tailored to your needs
                    </p>
                    <p className="text-sm bg-purple-900 text-purple-300 px-2 py-1 rounded-full inline-block">
                      Personalized
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700 p-6 rounded-2xl border border-slate-600">
                  <h3 className="font-bold text-lg text-gray-200 mb-6 flex items-center">
                    <FaGlobe className="h-6 w-6 mr-2 text-orange-500" />
                    Hosting & Technical
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaRocket className="text-xl text-orange-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-200">
                          Free deployment to GitHub + Vercel
                        </p>
                        <p className="text-sm text-gray-400">No hosting fees</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FaBolt className="text-xl text-orange-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-200">
                          Lightning-fast performance with next-gen optimization
                        </p>
                        <p className="text-sm text-gray-400">SEO-friendly</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FaLock className="text-xl text-orange-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-200">
                          HTTPS security and basic SEO setup
                        </p>
                        <p className="text-sm text-gray-400">Secure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-slate-700 p-8 rounded-2xl border-l-4 border-orange-500">
              <h3 className="font-bold text-xl text-gray-200 mb-8 flex items-center">
                <FaSlidersH className="h-6 w-6 mr-2 text-orange-500" />
                Optional Add-ons
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-600">
                  <div className="flex items-start">
                    <FaCode className="text-2xl text-orange-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-200 mb-2">
                        Full source code access
                      </p>
                      <p className="text-lg font-bold text-orange-500">₹699</p>
                      <p className="text-sm text-gray-400">Developer option</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-600">
                  <div className="flex items-start">
                    <FaTools className="text-2xl text-orange-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-200 mb-2">
                        Complete setup with domain & email configuration
                      </p>
                      <p className="text-lg font-bold text-orange-500">₹799</p>
                      <p className="text-sm text-gray-400">Hassle-free</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-600">
                  <div className="flex items-start">
                    <FaRedo className="text-2xl text-orange-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-200 mb-2">
                        Free revisions within first 7 days of delivery
                      </p>
                      <p className="text-lg font-bold text-green-500">FREE</p>
                      <p className="text-sm text-gray-400">
                        Satisfaction guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
