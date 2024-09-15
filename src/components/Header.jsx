import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/DesertPortal.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'events', 'contact'];
      let currentSection = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-full">
          <div className="flex items-center gap-5 space-x-2">
            <img src={logo} alt="MLSC Logo" className="w-10 h-10" />
            <div className="text-2xl font-semibold tracking-wide text-white">MLSC</div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            {['home', 'about', 'team', 'events', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`hover:text-blue-300 ${
                  activeSection === section ? 'border-b-2 border-white' : ''
                } transition-colors duration-200`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Join Us
            </button>
          </nav>
        </div>

        <div
          className={`fixed inset-0 z-20 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'bg-black bg-opacity-50 opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 w-3/4 max-w-xs bg-blue-600 h-full shadow-lg p-6 z-30 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={30} />
            </button>
            <nav className="flex flex-col gap-5 space-y-4 mt-8">
              {['home', 'about', 'team', 'events', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`hover:text-blue-300 text-xl ${
                    activeSection === section ? 'border-b-2 border-white' : ''
                  } transition-colors duration-200`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
