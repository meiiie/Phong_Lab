'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import './TeamCarousel.css';

const TeamCarousel = ({ members, onMemberClick }) => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const draggableInstance = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !trackRef.current) return;

    gsap.registerPlugin(Draggable);

    // Calculate card width + gap
    const cardWidth = 320; // Width of each card
    const gap = 24; // Gap between cards
    const totalWidth = (cardWidth + gap) * members.length;

    // Create draggable instance
    draggableInstance.current = Draggable.create(trackRef.current, {
      type: "x",
      bounds: {
        minX: -(totalWidth - carouselRef.current.offsetWidth),
        maxX: 0
      },
      inertia: true,
      snap: {
        x: (value) => {
          const index = Math.round(-value / (cardWidth + gap));
          setCurrentIndex(Math.max(0, Math.min(index, members.length - 1)));
          return -index * (cardWidth + gap);
        }
      },
      onDragEnd: function() {
        const index = Math.round(-this.x / (cardWidth + gap));
        setCurrentIndex(Math.max(0, Math.min(index, members.length - 1)));
      }
    })[0];

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, [isClient, members.length]);

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;

    const cardWidth = 320;
    const gap = 24;
    const targetX = -index * (cardWidth + gap);

    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: () => {
        if (draggableInstance.current) {
          draggableInstance.current.update();
        }
      }
    });

    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(members.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <div className="team-carousel">
      <div className="team-carousel-container" ref={carouselRef}>
        <div className="team-carousel-track" ref={trackRef}>
          {members.map((member) => (
            <div key={member.id} className="team-carousel-item">
              <TeamMemberCard
                member={member}
                onClick={onMemberClick}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="team-carousel-controls">
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous member"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {members.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-btn carousel-btn-next"
          onClick={handleNext}
          disabled={currentIndex === members.length - 1}
          aria-label="Next member"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className="carousel-counter">
        <span className="counter-current">{currentIndex + 1}</span>
        <span className="counter-separator">/</span>
        <span className="counter-total">{members.length}</span>
      </div>
    </div>
  );
};

export default TeamCarousel;
