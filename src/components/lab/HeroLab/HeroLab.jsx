'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import AnimatedButton from '@/components/AnimatedButton/AnimatedButton';
import './HeroLab.css';

const HeroLab = ({
  title = "VMU Student Research Lab",
  tagline = "Innovating Tomorrow's Technology",
  mission = "Empowering IT students through cutting-edge research",
  ctaLabel = "Explore Research",
  ctaLink = "/research",
  ctaSecondaryLabel = "Join Lab",
  ctaSecondaryLink = "/contact",
  particleCount = 100,
  particleColor = "#00d4ff",
  showPreloader = false
}) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const missionRef = useRef(null);
  const ctaContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // No animations - display text immediately for reliability
  const renderTitle = () => {
    // Split title by space to create line breaks
    const parts = title.split(' ');
    const midPoint = Math.ceil(parts.length / 2);
    const line1 = parts.slice(0, midPoint).join(' ');
    const line2 = parts.slice(midPoint).join(' ');
    
    return (
      <h1 className="hero-lab-title" ref={titleRef}>
        <span className="hero-lab-title-line">{line1}</span>
        <span className="hero-lab-title-line hero-lab-title-gradient">{line2}</span>
      </h1>
    );
  };

  return (
    <section className="hero-lab" ref={heroRef}>
      {/* Particle Background */}
      <ParticleCanvas
        particleCount={particleCount}
        particleColor={particleColor}
        connectionDistance={100}
        mouseInteraction={true}
        parallaxIntensity={0.3}
      />

      {/* Gradient Overlay */}
      <div className="hero-lab-overlay"></div>

      {/* Floating Geometric Shapes */}
      <div className="hero-lab-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      {/* Grid Pattern */}
      <div className="hero-lab-grid"></div>

      {/* Content */}
      <div className="hero-lab-content">
        {/* Logo Container (Antigravity Style) */}
        <div className="hero-lab-logo" ref={taglineRef}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="3"></circle>
              <line x1="12" y1="22" x2="12" y2="8"></line>
              <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
            </svg>
          </div>
          <div className="logo-text">{tagline}</div>
        </div>

        <div className="hero-lab-text">
          {renderTitle()}
          
          <p className="hero-lab-mission" ref={missionRef}>
            {mission}
          </p>
          
          <div className="hero-lab-cta" ref={ctaContainerRef}>
            <AnimatedButton
              label={ctaLabel}
              route={ctaLink}
              animateOnScroll={false}
              delay={0}
            />
            {ctaSecondaryLabel && (
              <AnimatedButton
                label={ctaSecondaryLabel}
                route={ctaSecondaryLink}
                animateOnScroll={false}
                delay={0}
                secondary={true}
              />
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-lab-scroll-indicator" ref={scrollIndicatorRef}>
          <div className="scroll-indicator-line"></div>
          <span className="scroll-indicator-text">Cuộn để khám phá</span>
          <svg 
            className="scroll-indicator-arrow" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroLab;
