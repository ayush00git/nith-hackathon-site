export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Address Section */}
          <div className="md:col-span-1">
             <img
                src="/nith-logo.png"
                alt="NITH logo"
                className="w-3xl"
              />
            
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">NIT Hamirpur</p>
              <p>Anu </p>
              <p>Himachal Pradesh, India</p>
            </div>
            
            <div className="mt-6">
              <a 
                href="mailto:nith.ac.in" 
                className="text-sm hover:text-white transition-colors"
              >
                contact@nith.mail.in
              </a>
            </div>
            
            {/* Underline */}
            <div className="mt-4 w-full h-px bg-blue-600"></div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b-2 border-blue-600 inline-block">
              Useful Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accomodation
                </a>
              </li>
            </ul>
          </div>

          {/* Committee */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b-2 border-blue-600 inline-block">
              Committee
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Problem Statements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b-2 border-blue-600 inline-block">
              Contact
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            Copyright All Right Reserved 2025, NIT Hamirpur
          </p>
        </div>
      </div>
    </footer>
  );
}