'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [youthDropdownOpen, setYouthDropdownOpen] = useState(false);
  const [adultDropdownOpen, setAdultDropdownOpen] = useState(false);

  return (
    <header className="bg-cricket-blue-dark text-white sticky top-0 z-50 shadow-lg">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cricket-gold rounded-full flex items-center justify-center font-bold text-xl">
              HCCA
            </div>
            <span className="text-xl md:text-2xl font-bold hidden sm:block">
              Hill Country Cricket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-cricket-gold transition-colors">
              Home
            </Link>

            {/* Youth Cricket Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setYouthDropdownOpen(true)}
              onMouseLeave={() => setYouthDropdownOpen(false)}
            >
              <button className="hover:text-cricket-gold transition-colors flex items-center">
                Youth Cricket
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {youthDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-cricket-blue-dark rounded-lg shadow-xl py-2">
                  <Link
                    href="/youth-cricket"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/youth-cricket/facilities"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Facilities
                  </Link>
                  <Link
                    href="/youth-cricket/infrastructure"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Infrastructure
                  </Link>
                  <Link
                    href="/youth-cricket/curriculums"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Curriculums
                  </Link>
                  <Link
                    href="/youth-cricket/coaches"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Coaches
                  </Link>
                  <Link
                    href="/youth-cricket/teams"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Teams
                  </Link>
                </div>
              )}
            </div>

            {/* Adult Cricket Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAdultDropdownOpen(true)}
              onMouseLeave={() => setAdultDropdownOpen(false)}
            >
              <button className="hover:text-cricket-gold transition-colors flex items-center">
                Adult Cricket
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {adultDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-cricket-blue-dark rounded-lg shadow-xl py-2">
                  <Link
                    href="/adult-cricket"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/adult-cricket/apcl-plate"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    APCL Plate
                  </Link>
                  <Link
                    href="/adult-cricket/apcl-elite"
                    className="block px-4 py-2 hover:bg-cricket-gold hover:text-white transition-colors"
                  >
                    APCL Elite
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/teams"
              className="hover:text-cricket-gold transition-colors"
            >
              All Teams
            </Link>

            <Link
              href="/contact-registration"
              className="btn-primary"
            >
              Contact & Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-cricket-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                className="block py-2 w-full text-left hover:text-cricket-gold transition-colors"
                onClick={() => setYouthDropdownOpen(!youthDropdownOpen)}
              >
                Youth Cricket
              </button>
              {youthDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/youth-cricket"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/youth-cricket/facilities"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Facilities
                  </Link>
                  <Link
                    href="/youth-cricket/infrastructure"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Infrastructure
                  </Link>
                  <Link
                    href="/youth-cricket/curriculums"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Curriculums
                  </Link>
                  <Link
                    href="/youth-cricket/coaches"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Coaches
                  </Link>
                  <Link
                    href="/youth-cricket/teams"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Teams
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                className="block py-2 w-full text-left hover:text-cricket-gold transition-colors"
                onClick={() => setAdultDropdownOpen(!adultDropdownOpen)}
              >
                Adult Cricket
              </button>
              {adultDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/adult-cricket"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/adult-cricket/apcl-plate"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    APCL Plate
                  </Link>
                  <Link
                    href="/adult-cricket/apcl-elite"
                    className="block py-1 text-sm hover:text-cricket-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    APCL Elite
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/teams"
              className="block py-2 hover:text-cricket-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Teams
            </Link>
            <Link
              href="/contact-registration"
              className="block py-2 mt-4 text-center btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact & Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
