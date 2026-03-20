import React, { useRef, useEffect } from 'react';
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
            Building Digital Experiences
          </h1>
          <p className="hero-description">
            I specialize in building scalable, modern web applications with cutting-edge technologies. 
            Focused on clean code, intuitive design, and creating seamless user interactions.
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
              <svg viewBox="0 0 256 256" fill="#F7DF1E">
                <rect width="256" height="256" fill="#F7DF1E" rx="30"/>
                <path d="M67.312 213.932c19.59 0 34.82-9.615 44.25-24.512l-21.5-12.272c-5.11 7.74-11.66 12.38-21.734 12.38-10.435 0-16.14-5.694-16.14-17.76V113.805H24.38v60.91c0 24.33 13.96 39.217 42.932 39.217zM189.65 214.394c34.393 0 54.062-18.17 54.062-52.093 0-32.99-19.34-45.724-43.08-53.515-15.65-5.148-23.75-8.45-23.75-16.5 0-6.9 6.22-11.63 17.58-11.63 12.33 0 20.3 5.4 25.47 15.64l21.91-13.43c-8.7-18.42-25.03-27.14-47.53-27.14-29.58 0-46.75 16.5-46.75 42.93 0 31.06 19.34 43.14 44.59 51.52 14.65 4.86 22.25 9.07 22.25 18 0 8.08-7 13.56-19.55 13.56-16.96 0-26.73-8.08-33.15-21.84l-23.01 13.06c10.45 23.47 31.25 41.43 71.01 41.43z" fill="#000000"/>
              </svg>
            </div>
            <div className="tech-icon icon-3" title="Git">
              <svg viewBox="0 0 128 128" fill="#F1502F">
                <path fill="#e24329" d="M62.593 2.05L2.095 62.548a8.552 8.552 0 0 0 0 12.094l64.332 64.333a8.55 8.55 0 0 0 12.093 0l60.498-60.498a4.276 4.276 0 0 0 0-6.047L74.686 2.05a8.554 8.554 0 0 0-12.093 0z"/>
                <path fill="#fca326" d="M62.593 2.05L2.095 62.548a8.552 8.552 0 0 0 0 12.094l64.332 64.333a8.55 8.55 0 0 0 12.093 0A8.535 8.535 0 0 0 81.36 137a8.528 8.528 0 0 0 2.802 1.942L62.593 2.05z"/>
                <path fill="#fca326" d="M127.35 68.614l-42.3-42.3L62.72 48.643l18.442 18.44 2.898-2.898a8.537 8.537 0 1 1 12.072 12.07l-2.897 2.898 3.513 14.12 1.704.425a8.54 8.54 0 1 1-2.457 11.83 8.534 8.534 0 0 1 2.457-11.83L62.593 2.05a8.55 8.55 0 0 1-12.093 0"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
