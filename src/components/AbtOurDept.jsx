import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child animation by 0.2s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const AbtOurDept = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl font-serif">
            About The Institute
          </h2>
          <div className="w-24 h-1 bg-[#33110E] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          
          {/* 1. Main Content: Split Layout (Institute + CSE Dept) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: NIT Hamirpur Context */}
            <motion.div variants={itemVariants} className="prose prose-lg text-slate-600">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-[#33110E] pl-4">
                Our Heritage
              </h3>
              <p className="leading-relaxed">
                Located in the Hamirpur district of Himachal Pradesh, <span className="font-semibold text-slate-800">NIT Hamirpur</span> enjoys 
                a really scenic environment and pleasant weather. Established in the year 
                1986 as REC Hamirpur, it has been declared as the <span className="italic">Institute of National Importance</span> under the Act of Parliament, 2007.
              </p>
            </motion.div>

            {/* Right Column: CSE Dept Context */}
            <motion.div variants={itemVariants} className="prose prose-lg text-slate-600">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-[#33110E] pl-4">
                Department of CSE
              </h3>
              <p className="leading-relaxed">
                Established in 1989, the <span className="font-semibold text-slate-800">Department of Computer Science & Engineering</span> has an excellent 
                and rich history and an outstanding record of contributions to the profession 
                and community. The Department is well recognized for excellence in facilities 
                and teaching.
              </p>
            </motion.div>
          </div>

          {/* 2. Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            
            {/* Vision Card (Takes up 1/3) */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#33110E] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              {/* Decorative circle in background */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  {/* Eye Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold font-serif">Our Vision</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  "To build a vibrant multicultural learning environment founded on value-based academic principles, where in all involved shall contribute effectively, efficiently and responsibly to the national and global community."
                </p>
              </div>
            </motion.div>

            {/* Mission Card (Takes up 2/3) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                {/* Target Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#33110E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">Mission</h3>
              </div>
              
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "To achieve academic excellence in engineering, technology and science by imparting quality and value-based education.",
                  "To inspire our students to become responsible citizens and competent professionals with high ethical values.",
                  "To meet the expectations of technical human resource at national and international level."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#33110E]/10 mt-1">
                      <svg className="h-4 w-4 text-[#33110E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-4 text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AbtOurDept;