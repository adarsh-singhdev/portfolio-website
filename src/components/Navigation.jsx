import React from 'react';
import { Home, Code2, BookOpen, Briefcase, Mail } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'projects', label: 'Projects', icon: Code2, href: '#projects' },
    { id: 'blog', label: 'Blog', icon: BookOpen, href: '#blog' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Right Side */}
      <nav className="hidden md:flex fixed right-0 top-0 h-screen w-20 bg-[#DDD8C8] flex-col items-center justify-center z-50 border-l border-black border-opacity-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className="flex flex-col items-center justify-center py-8 w-full hover:bg-opacity-50 transition-all duration-300 group relative"
            aria-label={item.label}
          >
            <item.icon
              size={24}
              className="text-[#5C5246] group-hover:text-[#D4845C] transition-colors duration-300"
            />
            <span className="text-[10px] mt-2 text-[#5C5246] group-hover:text-[#D4845C] transition-colors duration-300">
              {item.label}
            </span>
            <div className="absolute left-0 w-1 h-8 bg-[#D4845C] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#DDD8C8] flex items-center justify-around border-t border-black border-opacity-10 z-40">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className="flex flex-col items-center justify-center gap-1 flex-1 hover:text-[#D4845C] transition-colors duration-300"
            aria-label={item.label}
          >
            <item.icon size={20} className="text-[#5C5246] hover:text-[#D4845C]" />
            <span className="text-[10px] text-[#5C5246]">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
