'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 text-gray-900 font-semibold text-lg">
              <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
              <span>Untitled UI</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center gap-1">
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="hidden sm:block text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#signup"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Sign up
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="block text-gray-700 hover:text-gray-900 font-medium">Home</Link></li>
              <li><Link href="#products" className="block text-gray-700 hover:text-gray-900 font-medium">Products</Link></li>
              <li><Link href="#resources" className="block text-gray-700 hover:text-gray-900 font-medium">Resources</Link></li>
              <li><Link href="#pricing" className="block text-gray-700 hover:text-gray-900 font-medium">Pricing</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
