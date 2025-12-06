import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );
        observers[key].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const setSectionRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* About Hackathon Title */}
        <div
          ref={setSectionRef('title')}
          className={`transition-all duration-1000 ${
            visibleSections.title
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Hackathon
          </h1>
        </div>

        {/* First Paragraph */}
        <div
          ref={setSectionRef('para1')}
          className={`transition-all duration-1000 delay-100 ${
            visibleSections.para1
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Hackathon Under Information Security Education Awareness (ISEA) on
            theme Mobile Device and Application Security at NIT Hamirpur. The main
            objective is to identify Talent, Innovative Ideas and Technological
            Solutions and to establish linkages with Individuals, Industry,
            Start-ups and Educational Institutions.
          </p>
        </div>

        {/* Second Paragraph */}
        <div
          ref={setSectionRef('para2')}
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.para2
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Information Security Education and Awareness (ISEA) is an initiative
            of Ministry of Electronics and Information Technology (MeitY),
            Government of India for generating human resources in the area of
            Information Security and creating general awareness on Cyber
            Hygiene/Cyber Security among the masses.
          </p>
        </div>

        {/* Objectives Title */}
        <div
          ref={setSectionRef('objectives-title')}
          className={`transition-all duration-1000 ${
            visibleSections['objectives-title']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8">
            Hackathon Objectives
          </h2>
        </div>

        {/* Objectives List */}
        <div className="space-y-8">
          {[
            {
              key: 'obj1',
              title: 'Enhance Awareness',
              desc: 'Educate participants on mobile device security threats and best practices.',
            },
            {
              key: 'obj2',
              title: 'Encourage Innovation',
              desc: 'Foster innovative solutions to counter mobile security vulnerabilities.',
            },
            {
              key: 'obj3',
              title: 'Skill Development',
              desc: 'Provide a platform for participants to enhance their technical skills in mobile security and ethical hacking.',
            },
            {
              key: 'obj4',
              title: 'Industry Collaboration',
              desc: 'Facilitate knowledge exchange between academia, industry experts, and cybersecurity professionals.',
            },
            {
              key: 'obj5',
              title: 'Prototype Development',
              desc: 'Encourage the creation of proof-of-concept solutions that can be further developed into robust security applications.',
            },
          ].map((obj, idx) => (
            <div
              key={obj.key}
              ref={setSectionRef(obj.key)}
              className={`transition-all duration-1000 ${
                visibleSections[obj.key]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="border-l-4 border-[#33110E]/50 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}