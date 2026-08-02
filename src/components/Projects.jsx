import React, { useRef } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Projects = () => {
  const projectsRef = useRef(null);
  const isVisible = useIntersectionObserver(projectsRef);

  const projects = [
    // Enterprise security projects (lead)
    {
      title: 'WAF Patch Automation Tool',
      subtitle: 'RPA / Browser Automation',
      description:
        'Built a headless browser automation tool using Node.js and Playwright to eliminate manual patch requests across a large fleet of WAF-protected domains. Handles session persistence, virtualized-dropdown domain discovery, and keep-alive logic for long-running jobs, with full CSV audit logging.',
      techStack: ['Node.js', 'Playwright', 'JavaScript'],
      date: 'Jan 2026',
      isEnterprise: true,
      note: 'Enterprise Project — Details on Request',
    },
    {
      title: 'VAPT Assessment Portal',
      subtitle: 'Enterprise Security Workflow Platform',
      description:
        'Architected a full-stack security assessment platform replacing manual spreadsheet-based workflows, cutting report generation time from hours to minutes across five assessment types. Integrated an internal LLM gateway for AI-assisted vulnerability scoring (CVSS/CWSS) and remediation writeups, with a compliance-grade audit trail and SLA tracking dashboard.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'BullMQ', 'Redis', 'Docker'],
      date: 'Mar 2026',
      isEnterprise: true,
      note: 'Enterprise Project — Details on Request',
    },
    {
      title: 'AWS Vulnerability Comparison Dashboard',
      subtitle: 'Security Intelligence Dashboard',
      description:
        'Built a dashboard that ingests large AWS vulnerability scan exports and diffs them to surface new, resolved, and persistent findings with age tracking. Handles rendering of very large datasets via virtualization, with automated email notifications to resource owners via Microsoft Graph API.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'SheetJS', 'TanStack Virtual', 'Zustand', 'Microsoft Graph API'],
      date: 'Feb 2026',
      isEnterprise: true,
      note: 'Enterprise Project — Details on Request',
    },
    // Personal / open-source projects
    {
      title: 'Gemini AI Summarizer',
      subtitle: 'Chrome Extension',
      description:
        'Chrome Extension using Google Gemini API for AI-powered summarization of articles and research papers. Features dark mode, text-to-speech, and one-click export.',
      techStack: ['JavaScript (ES6+)', 'Chrome Extension APIs', 'Google Gemini API', 'HTML5', 'CSS3'],
      date: 'Aug 2025',
      repoLink: 'https://github.com/h-adarsh/Gemini-AI-Summarizer',
    },
    {
      title: 'Arcane Pass CLI',
      subtitle: 'Serverless Password Manager',
      description:
        'Engineered a serverless CLI password manager with AES-256 encryption for secure credential storage. Features include rapid terminal-based access, local-first architecture, and developer-optimized commands for seamless integration into coding workflows.',
      techStack: ['Node.js', 'CLI', 'AES-256', 'Serverless'],
      date: 'Sep 2025',
      repoLink: 'https://github.com/h-adarsh/arcane-pass-cli',
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
      repoLink: 'https://github.com/h-adarsh/snip.ly',
    },
    {
      title: 'CurrenSync',
      subtitle: 'Live Currency Converter',
      description:
        'Developed a real-time currency converter integrating third-party REST APIs for live exchange rates across multiple currencies. Implemented asynchronous data fetching with useEffect hook and conditional rendering to provide smooth loading states and handle API latency gracefully.',
      techStack: ['React.js', 'REST APIs', 'JavaScript (ES6+)', 'Tailwind CSS'],
      date: 'Dec 2024',
      liveLink: 'https://currensync.pages.dev/',
      repoLink: 'https://github.com/h-adarsh/CurrenSync',
    },
    {
      title: 'NikeNest',
      subtitle: 'E-Commerce Landing Page',
      description:
        "Designed a modern e-commerce landing page showcasing Nike's premium shoe collection with responsive product grids, customer reviews, and service highlights. Leveraged React for component reusability, Vite for optimized build performance, and Tailwind CSS for clean, utility-first styling.",
      techStack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)'],
      date: 'Jan 2025',
      liveLink: 'https://nikenest.pages.dev/',
      repoLink: 'https://github.com/h-adarsh/NikeNest',
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-16 md:py-24 px-5 md:px-0 relative"
    >
      <div className="max-w-container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-h2 font-bold font-serif text-[#1E2124] mb-16 md:mb-24 transition-all duration-1000 ${
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
              className={`block bg-[#F2F3F3] rounded-2xl p-8 md:p-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group transform origin-center focus:outline-none focus-visible:outline-none ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="flex-1 min-h-[72px]">
                  <h3 className="text-2xl md:text-h4 font-bold font-serif text-[#1E2124] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-body-lg text-[#7A8088] font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 sm:ml-4">
                  {project.isEnterprise ? (
                    /* Enterprise badge — replaces GitHub icon for internal projects */
                    <span className="inline-flex items-center gap-2 bg-[#E9EAEA] text-[#4A4E54] px-3 py-1.5 rounded-lg text-sm font-medium border border-[#DCDEDE]">
                      <Lock size={14} aria-hidden="true" />
                      {project.note}
                    </span>
                  ) : (
                    <>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[#4A4E54] opacity-80 hover:text-[#4A7A8C] transition-colors duration-300"
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
                        className="inline-flex items-center gap-2 text-[#4A4E54] opacity-70 hover:text-[#4A7A8C] transition-colors duration-300"
                        aria-label={`Open ${project.title} GitHub repository`}
                      >
                        <Github size={18} aria-hidden="true" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              <p className="text-body text-[#4A4E54] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={tech}
                    className="inline-block bg-[#E9EAEA] text-[#4A7A8C] px-3 py-1 rounded-2xl text-sm font-medium hover:bg-[#4A7A8C] hover:text-white transition-all duration-300 animate-glow"
                    style={{
                      animationDelay: `${0.3 + idx * 0.05}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-sm text-[#7A8088]">{project.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
