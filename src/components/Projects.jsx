import React, { useRef } from 'react';
import { Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Projects = () => {
  const projectsRef = useRef(null);
  const isVisible = useIntersectionObserver(projectsRef);

  const projects = [
    {
      title: 'Gemini AI Summarizer',
      subtitle: 'Chrome Extension',
      description:
        'Instantly summarize articles, research papers, and websites with this AI-powered Chrome Extension using Google\'s Gemini API.',
      techStack: ['JavaScript (ES6+)', 'Chrome Extension APIs', 'Google Gemini API', 'HTML5', 'CSS3'],
      date: 'Aug 2025',
      link: 'https://github.com/adarshsingh-1/Gemini-AI-Summarizer',
    },
    {
      title: 'Arcane Pass CLI',
      subtitle: 'Serverless Password Manager',
      description:
        'Built a serverless password manager CLI focused on secure storage, fast access, and developer-friendly workflows.',
      techStack: ['Node.js', 'CLI', 'Serverless'],
      date: 'Sep 2025',
      link: 'https://github.com/adarshsingh-1/arcane-pass-cli',
    },
    {
      title: 'LinkShort',
      subtitle: 'URL Shortener Application',
      description:
        'Developed a clean and responsive web application to transform long URLs into shortened, shareable links, featuring a minimalist UI for a fast and intuitive user experience. Implemented a client-side script in vanilla JavaScript with one-click "copy to clipboard" feature for seamless sharing.',
      techStack: ['HTML', 'CSS', 'Vanilla JS', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
      date: 'Aug 2025',
      link: 'https://github.com/adarshsingh-1/LinkShort',
    },
    {
      title: 'CurrenSync',
      subtitle: 'Live Currency Converter',
      description:
        'Built a real-time currency converter that consumes a third-party RESTful API to fetch live exchange rates for accurate and instant multi-currency conversion. Managed asynchronous API calls using useEffect and implemented conditional rendering to handle loading states and API latency smoothly.',
      techStack: ['React.js', 'External REST API', 'Tailwind CSS'],
      date: 'Dec 2024',
      link: 'https://github.com/adarshsingh-1/CurrenSync',
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 md:py-32 px-5 md:px-0 relative"
    >
      <div className="max-w-container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-h2 font-bold font-serif text-[#2C2416] mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}
        >
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-lg">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`block no-underline bg-[#F0EBE0] rounded-2xl p-8 md:p-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer transform origin-center focus:outline-none focus-visible:outline-none ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-h4 font-bold font-serif text-[#2C2416] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-body-lg text-[#8B8276] font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center ml-4 flex-shrink-0">
                  <Github
                    size={20}
                    className="text-[#5C5246] opacity-70 group-hover:text-[#D4845C] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p className="text-body text-[#5C5246] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={tech}
                    className="inline-block bg-[#E8E3D5] text-[#D4845C] px-3 py-1 rounded-2xl text-sm font-medium hover:bg-[#D4845C] hover:text-white transition-all duration-300 animate-glow"
                    style={{
                      animationDelay: `${0.3 + idx * 0.05}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-sm text-[#8B8276]">{project.date}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
