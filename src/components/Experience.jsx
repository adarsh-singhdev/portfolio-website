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
      title: 'AppTrana WAF Automation',
      institution: 'Titan Company Limited | Security Intern, InfoSec Department, Onsite, Bengaluru',
      detail: 'Node.js, Playwright, JavaScript',
      bullets: [
        'Built a headless browser RPA tool using Node.js and Playwright with a persistent SSO-aware Edge profile, automatically iterating through 170+ WAF-protected domains to request SwiftComply patches and download vulnerability reports.',
        'Engineered scroll-to-load domain discovery for virtualized dropdowns, a keep-alive mechanism to prevent session timeout during long runs, and CSV audit logging with monthly folder organization for operational traceability.'
      ]
    },
    {
      date: 'Jan 2026 – Present',
      title: 'VAPT Assessment Portal',
      institution: 'Titan Company Limited | Security Intern, InfoSec Department, Onsite, Bengaluru',
      detail: 'React, TypeScript, Node.js, Express, Prisma, MySQL, BullMQ, Redis, Docker',
      bullets: [
        'Architected a full-stack enterprise security portal that replaced manual Excel workflows, cutting report generation from 7–8 hours to under 1 hour across 5 assessment types with a 4-step guided submission wizard and a 14-table normalized data model.',
        'Integrated Titan’s enterprise LLM gateway with Generate, Regenerate, and Re-score modes to auto-populate CVSS, CWSS, and CSES scores, CWE identifiers, severity ratings, and remediation narratives from analyst-uploaded PoCs.',
        'Implemented a compliance-grade vulnerability lifecycle backed by an append-only MySQL trigger-enforced audit table, async PDF generation via BullMQ and Puppeteer, SLA breach tracking, a governance risk heatmap, and executive dashboards.'
      ]
    },
    {
      date: 'Jan 2026 – Present',
      title: 'AWS Vulnerability Comparison Dashboard',
      institution: 'Titan Company Limited | Security Intern, InfoSec Department, Onsite, Bengaluru',
      detail: 'React, TypeScript, Node.js, Express, SheetJS, TanStack Virtual, Zustand, Microsoft Graph API, Azure AD OAuth2',
      bullets: [
        'Built a full-stack security intelligence dashboard that ingests two AWS vulnerability scan Excel reports via server-side SheetJS parsing with column normalization, then runs a custom FindingArn-based diffing algorithm to categorize findings into New, Resolved, Persistent, and All Current.',
        'Engineered a virtualized React frontend for 300,000+ row datasets, Recharts KPI charts for severity distribution, per-tab Excel export, and Zustand for global state management.',
        'Integrated Microsoft Graph API with Azure AD OAuth2 client credentials flow to automate per-account HTML email notifications to cloud resource owners with a Mail Log view for tracking delivery history.'
      ]
    },
    {
      date: 'Jan 2026 – Present',
      title: 'EDR Coverage Dashboard',
      institution: 'Titan Company Limited | Security Intern, InfoSec Department, Onsite, Bengaluru',
      detail: 'React, TypeScript, Python, FastAPI, APScheduler, Redis, TanStack Query, Docker',
      bullets: [
        'Architected a FastAPI backend with APScheduler running 5 async background jobs to poll Trend Micro Cloud One, Deep Security Manager, AWS Config Aggregator, and OCI Compute through a pluggable Redis/in-memory cache layer.',
        'Engineered a 3-tier reconciliation engine classifying 1000+ cloud instances as MANAGED, UNMANAGED, UNKNOWN, or STOPPED with per-provider coverage percentages, duplicate detection, and on-demand PAM server validation via CSV upload.',
        'Built a React frontend with TanStack Query across 8 views, including KPI cards, OS distribution, scan coverage, and provider comparison charts, with real-time filtering, CSV export, and a staleness indicator, fully containerized with Docker Compose.'
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
          className={`text-4xl md:text-h2 font-bold font-serif text-[#1E2124] mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}
        >
          Experience & Skills
        </h2>

        {/* Experience Section */}
        <div className="mb-16 md:mb-2xl">
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#1E2124] mb-12 text-center">
            Experience
          </h3>

          <div className="flex flex-col items-center w-full">
            {experience.map((entry, idx) => (
              <div
                key={entry.title}
                className={`bg-[#F2F3F3] rounded-2xl p-6 md:p-8 shadow-md mb-8 transition-all duration-1000 max-w-2xl w-full mx-auto ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
              >
                <p className="text-[#4A7A8C] font-semibold text-lg mb-2">{entry.date}</p>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#1E2124] mb-2">
                  {entry.title}
                </h3>
                <p className="text-lg md:text-xl text-[#4A4E54] font-medium mb-4">
                  {entry.institution}
                </p>
                <p className="text-base md:text-lg text-[#7A8088] mb-4">
                  {entry.detail}
                </p>
                {entry.bullets && (
                  <ul className="list-disc pl-5 text-base md:text-lg text-[#7A8088] space-y-2 text-left">
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
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#1E2124] mb-12">
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
                <h4 className="text-lg md:text-h4 font-semibold font-serif text-[#1E2124] mb-6">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className="inline-block bg-[#4A7A8C] text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-[#3A6A7C] transition-all duration-300 hover:shadow-md"
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
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#1E2124] mb-8 md:mb-12">
            Education
          </h3>

          <div className="relative">
            {/* Vertical Line (desktop only) */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-[#4A7A8C]" />

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
                    <div className="w-4 h-4 bg-[#4A7A8C] rounded-full mt-2 hover:w-6 hover:h-6 hover:mt-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#F2F3F3] rounded-xl p-4 sm:p-6 md:p-lg mx-2 md:mx-0">
                    <p className="text-sm text-[#4A7A8C] font-semibold mb-2">{entry.date}</p>
                    <h4 className="text-base sm:text-lg md:text-h4 font-bold font-serif text-[#1E2124] mb-1">
                      {entry.title}
                    </h4>
                    {entry.subtitle && (
                      <p className="text-sm sm:text-base text-[#7A8088] mb-2">{entry.subtitle}</p>
                    )}
                    <p className="text-sm sm:text-base text-[#4A4E54] mb-2">{entry.institution}</p>
                    <p className="text-xs sm:text-sm text-[#7A8088] font-medium">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-h3 font-bold font-serif text-[#1E2124] mb-8">
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
                <span className="text-[#4A7A8C] text-lg font-bold mt-1">•</span>
                <span className="text-body text-[#4A4E54]">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
