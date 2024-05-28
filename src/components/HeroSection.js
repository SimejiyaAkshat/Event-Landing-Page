import React from 'react';
import './HeroSection.css';
import herobg from './herobg.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={herobg} alt="hero"/>
      <div className="overlay"></div>
      <h1>Welcome to Our Event</h1>
      <p>Join us for an unforgettable experience</p>
    </div>
  );
};

export default HeroSection;
