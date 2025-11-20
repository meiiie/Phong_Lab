'use client';
import React, { useState } from 'react';
import './TechIcon.css';

const TechIcon = ({ tech, category }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const categoryColors = {
    frontend: '#0074D9',
    backend: '#00A896',
    'ai-ml': '#003B73',
    devops: '#4D9DE0',
    hardware: '#8b95a1',
    database: '#0074D9',
    mobile: '#00A896'
  };

  const iconColor = categoryColors[category] || '#1a232c';

  return (
    <div 
      className="tech-icon"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ '--icon-color': iconColor }}
    >
      <div className="tech-icon-container">
        {/* Icon placeholder - in production, use actual tech logos */}
        <div className="tech-icon-image">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </div>
      </div>

      {/* Tech name label */}
      <div className="tech-icon-label">
        {tech.name}
      </div>

      {/* Tooltip with description */}
      {showTooltip && tech.description && (
        <div className="tech-icon-tooltip">
          <div className="tooltip-content">
            <strong>{tech.name}</strong>
            <p>{tech.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechIcon;
