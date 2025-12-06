import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    'Home',
    'Problem Statements',
    'Registration',
    'Accommodation',
    'Contact'
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#33110E] text-white shadow-xl">
      {/* Top Bar */}
      {/* <div className="bg-[#44201C] border-b border-[#5A2A25]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center">
          <div className="flex items-center gap-2 text-[#F2D5C4] text-sm">
            <Mail className="w-4 h-4" />
            <span className="font-light">contact@hackathon2024.edu</span>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className="bg-[#3E1714] bg-opacity-60 backdrop-blur-md shadow-lg border-b border-[#5A2A25]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Flex Container for Logo (Left) and Nav/Toggle (Right) */}
          <div className="flex items-center justify-between py-4">
            
            {/* LEFT SIDE: Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/nith-logo.png"
                alt="NITH logo"
                className="w-124" // Ensure this width fits your layout; might need adjustment on mobile
              />
            </div>

            {/* RIGHT SIDE: Desktop Links */}
            {/* Moved inside the flex container to sit on the right side */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-[#F5D7C8] text-md font-medium tracking-wide rounded-lg transition-all duration-300 hover:text-white hover:bg-[#5A2A25] hover:shadow-md"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE: Mobile Toggle (Visible only on mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#E3AFA0] hover:bg-[#4A1C18] rounded-lg transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Links Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 pt-2 space-y-1 border-t border-[#5A2A25] mt-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-[#F5D7C8] rounded-lg transition hover:bg-[#4A1C18] hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}