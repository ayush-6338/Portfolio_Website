import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background style on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle active section highlight
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,195,0,0.1)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white transition-colors duration-300 hover:text-[#FFC300] tracking-wide"
        >
          Ayush<span className="text-[#FFC300]">Raj</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase font-semibold transition-all duration-300 relative group ${
                activeSection === link.href.substring(1)
                  ? 'text-[#FFC300]'
                  : 'text-gray-300 hover:text-[#FFC300]'
              }`}
            >
              {link.name}
              {/* Highlight underline animation */}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#FFC300] transition-all duration-300 ease-out ${
                  activeSection === link.href.substring(1)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#FFC300] focus:outline-none transition-colors duration-300 z-50"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end relative">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${
                isOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${
                isOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            ></span>
            <span
              className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${
                isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-[#FFC300]/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-6 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold tracking-wider uppercase transition-colors duration-300 w-fit ${
                activeSection === link.href.substring(1)
                  ? 'text-[#FFC300]'
                  : 'text-gray-300 hover:text-[#FFC300]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
