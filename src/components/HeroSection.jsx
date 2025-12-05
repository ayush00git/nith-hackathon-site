import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingStrings = [
    "24-Hour Hackathon",
    "Turn Ideas Into Reality",
    "Collaborate & Solve Real Problems",
    "Win Exciting Prizes"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentString = typingStrings[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentString.length) {
        setDisplayText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % typingStrings.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex]);

  // Particle animation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#334341] opacity-20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10vh) translateX(${Math.random() * 100 - 50}px);
          }
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Logo/Badge */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-[#334341] rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#334341] text-center mb-6 tracking-tight">
          Innovate. Build. Compete.
        </h1>

        {/* Auto-typing text */}
        <div className="h-16 mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#334341] text-center font-medium">
            {displayText}
            <span className="inline-block w-1 h-8 md:h-10 bg-[#334341] ml-1 animate-pulse"></span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-4 bg-[#334341] text-white text-lg font-semibold rounded-lg hover:bg-[#2a3735] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Register Now
          </button>
          <button className="px-8 py-4 bg-white text-[#334341] text-lg font-semibold rounded-lg border-2 border-[#334341] hover:bg-[#334341] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Problem Statements
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl w-full">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#334341] mb-2">24</div>
            <div className="text-sm md:text-base text-[#334341] opacity-70">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#334341] mb-2">100+</div>
            <div className="text-sm md:text-base text-[#334341] opacity-70">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#334341] mb-2">$10K</div>
            <div className="text-sm md:text-base text-[#334341] opacity-70">In Prizes</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#334341] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#334341] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}