import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    title: "Grand Challenge Launch",
    date: "25th March 2025",
    status: "completed",
  },
  {
    id: 2,
    title: "Last Date for Registration of Team and submission of idea",
    date: "02nd May 2025",
    status: "upcoming",
  },
  {
    id: 3,
    title: "First Round of Evaluation",
    date: "May 2025",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Last date for Submission after the First Round of Evaluation",
    date: "June 2025",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Second Round of Evaluation (Demo/PoC)",
    date: "July 2025",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Last Date of Submission of Final Product (After Second Evaluation)",
    date: "August 2025",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Result for Grand Finale Teams",
    date: "August 2025",
    status: "upcoming",
  },
  {
    id: 8,
    title: "Grand Finale",
    date: "September 2025",
    status: "upcoming",
  },
  {
    id: 9,
    title: "Awards Ceremony",
    date: "To be announced",
    status: "tba",
  },
];

const TimelineItem = ({ data, isLast }) => {
  return (
    <motion.div
      // 1. Initial State: Invisible and shifted down 20px
      initial={{ opacity: 0, y: 20 }}
      // 2. Animate to: Visible and back to original position when in view
      whileInView={{ opacity: 1, y: 0 }}
      // 3. Viewport settings: Trigger when margin is reached, only run once
      viewport={{ once: true, margin: "-50px" }}
      // 4. Smooth spring transition
      transition={{ duration: 0.5, ease: "easeOut" }}
      
      className="relative flex items-start group font-sans"
    >
      {/* The Vertical Connector Line */}
      {!isLast && (
        <div
          className="absolute top-0 left-4 -ml-[2px] h-full w-1 bg-slate-200 group-hover:bg-[#33110E]/20 transition-colors duration-300"
          aria-hidden="true"
        ></div>
      )}

      {/* The Node/Dot */}
      <div className={`
        absolute top-1 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white 
        border-4 border-[#33110E] shadow-sm z-10 
        group-hover:scale-110 transition-transform duration-300
      `}>
        <div className="h-2.5 w-2.5 rounded-full bg-[#33110E]"></div>
      </div>

      {/* The Content Card */}
      <div className="ml-12 mb-8 w-full">
        <div className="relative flex flex-col bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
           {/* Decorative arrow */}
           <div className="absolute top-2 -left-2 w-4 h-4 bg-white border-t border-l border-slate-100 transform -rotate-45"></div>
           
          {/* Date Tag */}
          <span className={`inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full w-fit
            ${data.status === 'tba' 
              ? 'bg-slate-100 text-slate-600' 
              : 'bg-[#33110E]/10 text-[#33110E]' 
            }`}>
            {data.date}
          </span>
          
          {/* Event Title */}
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            {data.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Event Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600">
                Follow the journey of the Grand Challenge from launch to the finale.
            </p>
        </motion.div>

        <div className="relative mt-10">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              data={item} 
              isLast={index === timelineData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;