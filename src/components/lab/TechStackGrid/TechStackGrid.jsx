'use client';
import React from 'react';
import TechIcon from '../TechIcon/TechIcon';
import './TechStackGrid.css';

const TechStackGrid = ({ techStack }) => {
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'ai-ml', name: 'AI/ML', icon: '🤖' },
    { id: 'devops', name: 'DevOps', icon: '🚀' },
    { id: 'database', name: 'Database', icon: '💾' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
  ];

  // Group tech stack by category
  const groupedTech = categories.reduce((acc, category) => {
    const techs = techStack.filter(tech => 
      tech.category.toLowerCase() === category.id.toLowerCase() ||
      tech.category.toLowerCase() === category.name.toLowerCase()
    );
    if (techs.length > 0) {
      acc[category.id] = {
        ...category,
        technologies: techs
      };
    }
    return acc;
  }, {});

  return (
    <div className="tech-stack-grid-container">
      {Object.values(groupedTech).map((category) => (
        <div key={category.id} className="tech-category-section">
          {/* Category Header */}
          <div className="tech-category-header">
            <span className="category-icon">{category.icon}</span>
            <h3 className="category-title">{category.name}</h3>
            <span className="category-count">{category.technologies.length}</span>
          </div>

          {/* Tech Icons Grid */}
          <div className="tech-icons-grid">
            {category.technologies.map((tech) => (
              <TechIcon
                key={tech.id}
                tech={tech}
                category={category.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackGrid;
