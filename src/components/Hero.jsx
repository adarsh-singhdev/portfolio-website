import React, { useEffect, useState } from 'react';

const quotes = [
  // Security quotes
  { text: "Security is always excessive until it's not enough.", author: "Robbie Sinclair" },
  { text: "The only truly secure system is one that is powered off, cast in a block of concrete, and sealed in a lead-lined room.", author: "Gene Spafford" },
  { text: "Defenders think in lists. Attackers think in graphs.", author: "John Lambert" },
  { text: "There are only two types of companies: those that have been hacked, and those that will be.", author: "Robert Mueller" },
  { text: "Complexity is the worst enemy of security.", author: "Bruce Schneier" },
  // Dev quotes (retained)
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Fade-in effect for quote
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <div className="my-10 px-6 max-w-2xl mx-auto text-center min-h-[80px] flex flex-col items-center justify-center">

        {/* Profile Image */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <img
            src="/adarshpp.jpg"
            alt="Adarsh Singh"
            className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover border-4 border-[#F2F3F3] shadow-lg"
            loading="eager"
          />
        </div>

        {/* Hero Name */}
        <h1
          className={`text-5xl md:text-h1 font-bold text-[#1E2124] mb-8 font-serif transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Adarsh Singh
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-[28px] font-serif text-[#1E2124] mb-12 leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Security Engineer & Full-Stack Developer<br />
          Building security tools, automation workflows, and full-stack platforms
          for enterprise InfoSec teams.<br />
          Currently specializing in application security, vulnerability management,
          and security operations tooling.<br />
        </p>

        {/* Random Quote Section */}
        <div className="my-10 px-6 max-w-2xl mx-auto text-center min-h-[80px] flex flex-col items-center justify-center">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {quote && (
              <>
                <p className="text-[#2A2E32] text-base md:text-lg italic leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <span className="mt-2 block text-sm text-[#7A8088] font-medium tracking-wide">
                  — {quote.author}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;