import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/adarshsingh-1',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adarsh-singh-/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      url: 'mailto:adarsh042021@outlook.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      url: 'tel:+917439473588',
      icon: Phone,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-0 pb-20 md:pb-0 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: '180px 180px',
        }}
        aria-hidden="true"
      />
      <div className="max-w-container mx-auto px-5 md:px-0 text-center">
        {/* Hero Name */}
        <h1
          className={`text-5xl md:text-h1 font-bold text-[#2C2416] mb-8 font-serif transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Adarsh Singh
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-[28px] font-serif text-[#2C2416] mb-12 leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Full-Stack Developer & Problem Solver
          <br />
          I build scalable web applications with modern technologies and clean, efficient code.
        </p>

        <div
          className={`mb-10 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="/Adarsh_Singh_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2C2416] text-white font-medium hover:bg-[#D4845C] transition-all duration-300 hover:scale-105"
          >
            <span aria-hidden="true">📄</span>
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#5C5246] hover:text-[#D4845C] text-sm md:text-base font-medium transition-colors duration-300 flex items-center gap-2"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              aria-label={link.label}
            >
              <link.icon size={18} />
              <span>{link.label}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4845C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
