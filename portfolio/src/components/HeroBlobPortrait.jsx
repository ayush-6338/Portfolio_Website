import React from 'react';
import profilePhoto from '../assets/profile.jpeg';

const HeroBlobPortrait = () => {
  return (
    <div className="hero-portrait-shell">
      <div className="hero-blob-backdrop">
        <img
          src={profilePhoto}
          alt="Ayush portrait"
          className="developer-image"
        />
      </div>
    </div>
  );
};

export default HeroBlobPortrait;
