"use client";
import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetStarted = () => {
    setShowContactForm(true);
    setTimeout(() => {
      document
        .getElementById("contact-us")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection onGetStarted={handleGetStarted} />
      <PricingSection />
      <AboutSection />

      {showContactForm && (
        <section id="contact-form" className="py-16 bg-slate-800">
          <div className="container mx-auto px-6 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
              Let's Get Started
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-700 text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-700 text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-700 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-700 text-white"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
}
