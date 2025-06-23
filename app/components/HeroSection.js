import { FaLaptopCode } from "react-icons/fa";

export default function HeroSection({ onGetStarted }) {
  return (
    <header className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-orange-900 text-white py-20 overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <div className="mb-8 animate-bounce">
          <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
            <FaLaptopCode className="h-10 w-10 text-orange-500" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-400 animate-pulse">
          Limited Time Offer: Professional Websites At Affordable Rates
        </h1>
        <h2 className="text-xl md:text-3xl text-center mb-8 font-light text-orange-100">
          Developed by Us. Defined as A Brand
        </h2>
        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl text-gray-300 leading-relaxed">
          Beautiful, responsive websites custom-built for your brand starting at
          just ₹2500. Your vision, our expertise
        </p>
        <button
          onClick={onGetStarted}
          className="group bg-orange-600 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 font-bold py-4 px-10 rounded-full transition-all duration-500 flex items-center shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 border border-orange-500"
        >
          Get Started
          <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </header>
  );
}
