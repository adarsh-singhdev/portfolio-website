import React, { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useHooks';

const Contact = () => {
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef);
  const [emailCopied, setEmailCopied] = useState(false);

  const contactCards = [
    {
      label: 'Email',
      value: 'adarsh042021@outlook.com',
      icon: Mail,
      action: 'mailto:adarsh042021@outlook.com',
    },
    {
      label: 'Phone',
      value: '+91 7439473588',
      icon: Phone,
      action: 'tel:+917439473588',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/adarsh-singh-/',
      icon: Linkedin,
      action: 'https://www.linkedin.com/in/adarsh-singh-/',
    },
    {
      label: 'GitHub',
      value: 'github.com/adarsh-singhdev',
      icon: Github,
      action: 'https://github.com/adarsh-singhdev',
    },
  ];

  const handleEmailClick = () => {
    navigator.clipboard.writeText('adarsh042021@outlook.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-16 md:py-24 px-5 md:px-0 relative mb-12 md:mb-0"
    >
      <div className="max-w-container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-5xl md:text-[56px] font-bold font-serif text-[#2C2416] mb-8 text-center transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
          }`}
        >
          Get in Touch
        </h2>

        {/* Description */}
        <p
          className={`text-body md:text-body-lg text-[#5C5246] text-center mb-16 md:mb-2xl max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          I'm currently available for full-time opportunities and freelance projects in full-stack
          development. Whether you have a project in mind or just want to connect, feel free to reach
          out. Let's build something amazing together!
        </p>

        {/* Contact Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 md:mb-2xl max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          {contactCards.map((card, idx) => (
            <a
              key={card.label}
              href={card.action}
              target={card.action.startsWith('http') ? '_blank' : undefined}
              rel={card.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`bg-[#F0EBE0] rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group transform ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              aria-label={card.label}
            >
              <card.icon size={28} className="text-[#D4845C] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-[#8B8276]">{card.label}</p>
                <p className="text-body font-medium text-[#2C2416] truncate group-hover:text-[#D4845C] transition-colors duration-300">
                  {card.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Email CTA Button */}
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={handleEmailClick}
            className={`flex items-center gap-3 bg-[#2C2416] hover:bg-[#D4845C] text-white px-12 py-4 rounded-lg transition-all duration-300 hover:scale-105 group ${
              emailCopied ? 'bg-[#4CAF50]' : ''
            }`}
          >
            <Mail size={20} className="group-hover:animate-pulse" />
            <span className="font-semibold">{emailCopied ? 'Email Copied!' : 'Email Me'}</span>
            {emailCopied && <span className="text-lg">✓</span>}
          </button>

          {/* Decorative Quote */}
          <p className="text-body md:text-body-lg text-[#5C5246] italic font-serif text-center mt-4">
            Engineered with care, powered by React
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
