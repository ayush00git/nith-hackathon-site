import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // CHANGED: Background to #33110E, text to light slate for readability
    <footer className="bg-[#33110E] border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Logo Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Ensure your logo PNG has a transparent background */}
              <img
                src="/nith-logo.png"
                alt="NITH logo"
                className="h-16 w-auto object-contain" 
              />
            </div>
            {/* CHANGED: Text color to slate-300 (light gray) */}
            <p className="text-slate-300 max-w-sm leading-relaxed">
              NIT Hamirpur's premier Grand Challenge. Fostering innovation, 
              technology, and excellence in the student community.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            {/* CHANGED: Heading to White */}
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Accommodation', 'Registrations', 'Problem Statements'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`} 
                    // CHANGED: Base text slate-300, Hover text White
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {/* CHANGED: Arrow color to White */}
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-white">
                       &rarr;
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            {/* CHANGED: Heading to White */}
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                {/* CHANGED: Icon color to White/80 */}
                <svg className="w-5 h-5 mt-1 mr-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>NIT Hamirpur,<br/>Himachal Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:contact@nith.ac.in" className="hover:text-white transition-colors">contact@nith.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* CHANGED: Border to transparent white */}
        <div className="border-t border-white/10 my-8"></div>

        {/* 4. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} Grand Challenge. All rights reserved.</p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="font-medium">
              {/* CHANGED: Accent text to White */}
              Developed by <span className="text-white font-bold">Ayush and Aryan</span>
            </span>

            <motion.a 
              href=" https://github.com/ayush00git/nith-hackathon-site" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              // CHANGED: Github icon hover to White
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Github Repository"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;