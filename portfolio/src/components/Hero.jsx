import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '../assets/profilePhoto.png';
import './Hero.css';

const Hero = () => {
  const cardRef = useRef(null);
  
  // 3D Tilt Effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degree rotation
      const rotateY = ((x - centerX) / centerX) * 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      card.style.transition = 'transform 0.5s ease-out';
    };
    
    const handleMouseEnter = () => {
      card.style.transition = 'none'; // Remove transition for smooth tracking
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-bg-glow"></div>
      
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <span className="hero-subtitle">Full Stack Developer</span>
          <h1 className="hero-title">
            Hi, I'm <span>Ayush</span><br/>
            <div className="text-[#FFC300] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-5 sm:mt-7 mb-4 h-[40px] sm:h-[50px] md:h-[60px] flex items-center justify-start md:justify-start">
              <TypeAnimation
                sequence={[
                  'Building Digital Experiences',
                  3000,
                  'Turning Ideas into Reality',
                  3000,
                  'Engineering Modern Web Apps',
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={20}
                deletionSpeed={30}
                className="inline-block"
              />
            </div>
          </h1>
          <p className="hero-description">
            Passionate about crafting scalable web applications with clean code and intuitive design.
            Driven to build smooth, efficient solutions that enhance real-world user experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card-container">
            <div className="card-ambient-glow"></div>
            
            <div className="hero-glass-card" ref={cardRef}>
              <div className="card-inner">
                <div className="developer-image-container">
                  <img src={profilePhoto} alt="Developer Profile" className="developer-image" />
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="tech-icon icon-1" title="React">
              <svg viewBox="-11.5 -10.23174 23 20.46348" fill="#61dafb">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </div>
            <div className="tech-icon icon-2" title="JavaScript">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect width="256" height="256" rx="32" fill="#F7DF1E" />
                <text x="226" y="226" fontFamily="Arial, Helvetica, sans-serif" fontSize="144" fontWeight="bold" fill="#000000" textAnchor="end">
                  JS
                </text>
              </svg>
            </div>
            <div className="tech-icon icon-3" title="Git">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect x="48" y="48" width="160" height="160" rx="32" fill="#F05032" transform="rotate(45 128 128)" />
                <line x1="98" y1="140" x2="158" y2="80" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
                <line x1="98" y1="176" x2="98" y2="80" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
                <circle cx="98" cy="176" r="18" fill="#FFFFFF" />
                <circle cx="98" cy="80" r="18" fill="#FFFFFF" />
                <circle cx="158" cy="80" r="18" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
