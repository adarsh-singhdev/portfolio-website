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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-0 pb-20 md:pb-0">
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
