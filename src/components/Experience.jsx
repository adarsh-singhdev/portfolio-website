import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Experience = () => {
  const experienceRef = useRef(null);
  const isVisible = useIntersectionObserver(experienceRef);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'C', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'RESTful APIs'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Linux', 'Postman', 'VS Code', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Teamwork', 'Adaptability', 'Quick Learner'],
    },
  ];

  const experience = [
    {
      date: 'Jan 2026 – Present',
      title: 'Intern in InfoSec Dept',
      institution: 'Titan Company Limited (On-Site - Bangalore)',
      detail: 'Working on information security initiatives and cybersecurity protocols. I collaborate closely with the EDR team to design and build security dashboards and automation workflows. My work includes:',
      bullets: [
        'Developed an AppTrana automation to reduce manual activity for Swyftcomply requests and automate downloading reports for each application.',
        'Created an endpoint vulnerability dashboard for improved visibility and tracking.',
        'Built a desktop workflow using Power Automate to automate routine processes and reduce manual effort.'
      ]
    },
  ];

  const timeline = [
    {
      date: 'Aug 2022 – Present',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science and Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      detail: 'CGPA: 7.1',
    },
    {
      date: 'Mar 2021 – May 2022',
      title: 'Intermediate PCM',
      institution: 'H.M Education Centre, Hooghly, West Bengal',
      detail: 'Percentage: 65.2%',
    },
    {
      date: 'Mar 2019 – May 2020',
      title: 'Matriculation',
      institution: 'H.M Education Centre, Hooghly, West Bengal',
      detail: 'Percentage: 81.2%',
    },
  ];

  const certifications = [
    'Oracle Cloud Infrastructure 2025 Generative AI Professional by Oracle (Oct 2025)',
    'Oracle Cloud Infrastructure 2025 Certified Developer Professional by Oracle (Sep 2025)',
    'Full-Stack Web Developer by LinkedIn Learning (Aug 2025)',
    'Data Structures and Algorithms - Self-Paced by GeeksforGeeks (Jul 2024)',
    'Generative AI for Everyone (Jan 2024)',
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-16 md:py-24 relative"
    >
      <div className="my-10 px-6 max-w-2xl mx-auto text-center min-h-[80px] flex flex-col items-center justify-center">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-h2 font-bold font-serif text-[#2C2416] mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}
        >
          Experience & Skills
        </h2>

        {/* Experience Section */}
        <div className="mb-16 md:mb-2xl">
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-12 text-center">
            Experience
          </h3>

          <div className="flex flex-col items-center w-full">
            {experience.map((entry, idx) => (
              <div
                key={entry.title}
                className={`bg-[#F0EBE0] rounded-2xl p-6 md:p-8 shadow-md mb-8 transition-all duration-1000 max-w-2xl w-full mx-auto ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
              >
                <p className="text-[#D4845C] font-semibold text-lg mb-2">{entry.date}</p>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#2C2416] mb-2">
                  {entry.title}
                </h3>
                <p className="text-lg md:text-xl text-[#5C5246] font-medium mb-4">
                  {entry.institution}
                </p>
                <p className="text-base md:text-lg text-[#8B8276] mb-4">
                  {entry.detail}
                </p>
                {entry.bullets && (
                  <ul className="list-disc pl-5 text-base md:text-lg text-[#8B8276] space-y-2 text-left">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 md:mb-2xl">
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-12">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIdx) => (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.3 + categoryIdx * 0.1}s` }}
              >
                <h4 className="text-lg md:text-h4 font-semibold font-serif text-[#2C2416] mb-6">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className="inline-block bg-[#D4845C] text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-[#C57549] transition-all duration-300 hover:shadow-md"
                      style={{
                        animationDelay: `${0.3 + skillIdx * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16 md:mb-2xl">
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-8 md:mb-12">
            Education
          </h3>

          <div className="relative">
            {/* Vertical Line (desktop only) */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-[#D4845C]" />

            <div className="flex flex-col gap-6 md:gap-8">
              {timeline.map((entry, idx) => (
                <div
                  key={entry.title}
                  className={`block md:flex gap-0 md:gap-6 transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  {/* Timeline Dot (desktop only) */}
                  <div className="hidden md:relative md:flex-shrink-0 md:block">
                    <div className="w-4 h-4 bg-[#D4845C] rounded-full mt-2 hover:w-6 hover:h-6 hover:mt-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#F0EBE0] rounded-xl p-4 sm:p-6 md:p-lg mx-2 md:mx-0">
                    <p className="text-sm text-[#D4845C] font-semibold mb-2">{entry.date}</p>
                    <h4 className="text-base sm:text-lg md:text-h4 font-bold font-serif text-[#2C2416] mb-1">
                      {entry.title}
                    </h4>
                    {entry.subtitle && (
                      <p className="text-sm sm:text-base text-[#8B8276] mb-2">{entry.subtitle}</p>
                    )}
                    <p className="text-sm sm:text-base text-[#5C5246] mb-2">{entry.institution}</p>
                    <p className="text-xs sm:text-sm text-[#8B8276] font-medium">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-8">
            Certifications
          </h3>

          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-4 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <span className="text-[#D4845C] text-lg font-bold mt-1">•</span>
                <span className="text-body text-[#5C5246]">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
