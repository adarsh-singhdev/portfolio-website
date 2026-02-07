import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Projects = () => {
  const projectsRef = useRef(null);
  const isVisible = useIntersectionObserver(projectsRef);

  const projects = [
    {
      title: 'Gemini AI Summarizer',
      subtitle: 'Chrome Extension',
      description:
        'Chrome Extension using Google Gemini API for AI-powered summarization of articles and research papers. Features dark mode, text-to-speech, and one-click export.',
      techStack: ['JavaScript (ES6+)', 'Chrome Extension APIs', 'Google Gemini API', 'HTML5', 'CSS3'],
      date: 'Aug 2025',
      repoLink: 'https://github.com/adarshsingh-1/Gemini-AI-Summarizer',
    },
    {
      title: 'Arcane Pass CLI',
      subtitle: 'Serverless Password Manager',
      description:
        'Engineered a serverless CLI password manager with AES-256 encryption for secure credential storage. Features include rapid terminal-based access, local-first architecture, and developer-optimized commands for seamless integration into coding workflows.',
      techStack: ['Node.js', 'CLI', 'Serverless'],
      date: 'Sep 2025',
      repoLink: 'https://github.com/adarshsingh-1/arcane-pass-cli',
    },
    {
      title: 'CurrenSync',
      subtitle: 'Live Currency Converter',
      description:
        'Developed a real-time currency converter integrating third-party REST APIs for live exchange rates across multiple currencies. Implemented asynchronous data fetching with useEffect hook and conditional rendering to provide smooth loading states and handle API latency gracefully.',
      techStack: ['React.js', 'External REST API', 'Tailwind CSS'],
      date: 'Dec 2024',
      liveLink: 'https://currensync.pages.dev/',
      repoLink: 'https://github.com/adarshsingh-1/CurrenSync',
    },
    {
      title: 'NikeNest',
      subtitle: 'E-Commerce Landing Page',
      description:
        "Designed a modern e-commerce landing page showcasing Nike's premium shoe collection with responsive product grids, customer reviews, and service highlights. Leveraged React for component reusability, Vite for optimized build performance, and Tailwind CSS for clean, utility-first styling.",
      techStack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)'],
      date: 'Jan 2025',
      liveLink: 'https://nikenest.pages.dev/',
      repoLink: 'https://github.com/adarshsingh-1/NikeNest',
    },
    {
      title: 'Snip.ly',
      subtitle: 'Full-Stack URL Shortener',
      description:
        'Engineered a production-ready URL shortener with JWT authentication, real-time click analytics, and Open Graph link previews. Deployed on Cloudflare Workers with D1 database for edge performance, featuring a responsive dashboard with dark mode and comprehensive link management.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Cloudflare Workers',
        'Cloudflare D1',
        'Tailwind CSS',
      ],
      date: 'Feb 2025',
      liveLink: 'https://snip-ly.pages.dev/',
      repoLink: 'https://github.com/adarshsingh-1/snip.ly',
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-24 md:py-36 px-5 md:px-0 relative"
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
            <div
              key={project.title}
              className={`block bg-[#F0EBE0] rounded-2xl p-8 md:p-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group transform origin-center focus:outline-none focus-visible:outline-none ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 min-h-[72px]">
                  <h3 className="text-2xl md:text-h4 font-bold font-serif text-[#2C2416] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-body-lg text-[#8B8276] font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#5C5246] opacity-80 hover:text-[#D4845C] transition-colors duration-300"
                      aria-label={`Open ${project.title} live site`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  )}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#5C5246] opacity-70 hover:text-[#D4845C] transition-colors duration-300"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    <Github size={18} aria-hidden="true" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
