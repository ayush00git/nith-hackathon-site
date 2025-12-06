import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SimpleCarousel from './Carousel';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child element appearing
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const carouselVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 } 
  },
};

const Typewriter = ({ words, staticText }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    // Changed to motion.div to accept animation props from parent
    <motion.div 
      variants={itemVariants}
      className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mt-6 mb-2"
    >
      <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tight text-slate-900 text-center px-4 leading-tight">
        {staticText}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
          {`${words[index].substring(0, subIndex)}`}
        </span>
        <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-cyan-600 ml-1`}>
          |
        </span>
      </h1>
    </motion.div>
  );
};

export default function HeroSection() {
  const words = ["inspires", "impacts", "solves"];

  return (
    <>
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-cyan-100 selection:text-cyan-900">      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_3px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_40%_at_50%_30%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main Content Wrapper with Animation Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Date Badge */}
        <motion.div 
          variants={itemVariants}
          className='border-2 py-1.5 px-5 border-[#5FDB2D] bg-[#5FDB2D]/50 rounded-full'
        >
          <button className='text-sm font-mono font-semibold text-slate-900'>
            From 1 May to 5 May
          </button>
        </motion.div>

        {/* Title (Animated inside component via props) */}
        <Typewriter words={words} staticText="Build something that" />

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 text-lg md:text-xl max-w-2xl text-center mb-10 px-6 font-medium leading-relaxed"
        >
          Join the community of innovators and creators turning ideas into reality.
          Your journey to making a difference starts here.
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group cursor-pointer relative inline-flex items-center mb-24 justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-slate-900 border border-slate-900 rounded-full hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 focus:ring-offset-white overflow-hidden"
        >          
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 group-hover:opacity-100"></div>
          <span className="relative flex items-center gap-2">
            Register Now
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.button>
      </motion.div>

      {/* Carousel - Animated independently to slide up from bottom */}
      <motion.div 
        variants={carouselVariants}
        initial="hidden"
        animate="visible"
        className="absolute left-0 right-0 bottom-0 flex justify-center pointer-events-auto"
      >
        <SimpleCarousel />
      </motion.div>
    </div>
    </>
  );
}