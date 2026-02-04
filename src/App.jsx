import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import LoadingSpinner from './components/LoadingSpinner';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Easter egg - 5 clicks on logo
  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      setShowEasterEgg(true);
      setClickCount(0);
      setTimeout(() => setShowEasterEgg(false), 4000);
    }

    setTimeout(() => setClickCount(0), 2000);
  };

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let position = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
          setShowEasterEgg(true);
          position = 0;
          setTimeout(() => setShowEasterEgg(false), 4000);
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E3D5]">
      <LoadingSpinner isVisible={isLoading} />
      <ProgressBar />
      <Navigation />

      {/* Skip to main content link */}
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#D4845C] focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      {/* Main Content */}
      <main className="md:mr-20">
        <Hero />
        <Projects />
        <Blog />
        <Experience />
        <Contact />
      </main>

      {/* Logo for Easter Egg */}
      <button
        onClick={handleLogoClick}
        className="hidden"
        aria-label="App logo"
        title="Try clicking me 5 times!"
      />

      {/* Easter Egg Message */}
      {showEasterEgg && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D4845C] text-white px-8 py-6 rounded-2xl text-2xl font-bold z-50 animate-bounce">
          🎉 Nice! You found the easter egg! 🎉
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#DDD8C8] py-8 text-center text-[#5C5246] md:mr-20">
        <p className="text-body">
          © 2026 Adarsh Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
