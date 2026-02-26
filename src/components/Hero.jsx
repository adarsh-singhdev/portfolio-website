import React, { useEffect, useState } from 'react';

const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
];

// QuoteRotator removed. Quote logic will be integrated directly in Hero.

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
            className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover border-4 border-[#F0EBE0] shadow-lg"
            loading="eager"
          />
        </div>

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
          Full-Stack Developer & Computer Science Engineering Student<br />
          I’m learning how to build modern web applications, focusing on creating intuitive user interfaces and dependable backend systems.<br />
          I’m also interested in AI and love exploring new technologies to improve my skills.<br />
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
                <p className="text-[#3D3427] text-base md:text-lg italic leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <span className="mt-2 block text-sm text-[#8C7B6B] font-medium tracking-wide">
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