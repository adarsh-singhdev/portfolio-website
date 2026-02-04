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
      institution: 'Titan Company Limited',
      detail: 'Working on information security initiatives and cybersecurity protocols',
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
      className="py-20 md:py-32 px-5 md:px-0 relative"
    >
      <div className="max-w-container mx-auto">
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
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-12">
            Experience
          </h3>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-[#D4845C]" />

            <div className="space-y-8">
              {experience.map((entry, idx) => (
                <div
                  key={entry.title}
                  className={`flex gap-6 transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-[#D4845C] rounded-full mt-2 hidden md:block hover:w-6 hover:h-6 hover:mt-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#F0EBE0] rounded-xl p-6 md:p-lg">
                    <p className="text-sm text-[#D4845C] font-semibold mb-2">{entry.date}</p>
                    <h4 className="text-lg md:text-h4 font-bold font-serif text-[#2C2416] mb-1">
                      {entry.title}
                    </h4>
                    {entry.subtitle && (
                      <p className="text-body text-[#8B8276] mb-2">{entry.subtitle}</p>
                    )}
                    <p className="text-body text-[#5C5246] mb-2">{entry.institution}</p>
                    <p className="text-sm text-[#8B8276] font-medium">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#2C2416] mb-12">
            Education
          </h3>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-[#D4845C]" />

            <div className="space-y-8">
              {timeline.map((entry, idx) => (
                <div
                  key={entry.title}
                  className={`flex gap-6 transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-[#D4845C] rounded-full mt-2 hidden md:block hover:w-6 hover:h-6 hover:mt-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#F0EBE0] rounded-xl p-6 md:p-lg">
                    <p className="text-sm text-[#D4845C] font-semibold mb-2">{entry.date}</p>
                    <h4 className="text-lg md:text-h4 font-bold font-serif text-[#2C2416] mb-1">
                      {entry.title}
                    </h4>
                    {entry.subtitle && (
                      <p className="text-body text-[#8B8276] mb-2">{entry.subtitle}</p>
                    )}
                    <p className="text-body text-[#5C5246] mb-2">{entry.institution}</p>
                    <p className="text-sm text-[#8B8276] font-medium">{entry.detail}</p>
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
