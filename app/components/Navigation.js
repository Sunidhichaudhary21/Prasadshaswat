"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            PS Web Services
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-orange-500"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <Link
              href="/"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
