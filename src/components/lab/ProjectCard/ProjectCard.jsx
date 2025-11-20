'use client';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const statusColors = {
    ongoing: '#0074D9',
    completed: '#00A896',
    planning: '#8b95a1'
  };

  const statusLabels = {
    ongoing: 'Đang thực hiện',
    completed: 'Hoàn thành',
    planning: 'Đang lên kế hoạch'
  };

  return (
    <div className="project-card" onClick={() => onClick && onClick(project)}>
      {/* Thumbnail */}
      <div className="project-card-thumbnail">
        <div className="project-card-image-placeholder">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        
        {/* Status Badge */}
        <div 
          className="project-card-status"
          style={{ backgroundColor: statusColors[project.status] }}
        >
          {statusLabels[project.status]}
        </div>
      </div>

      {/* Content */}
      <div className="project-card-content">
        {/* Research Area Tag */}
        <div className="project-card-area">{project.researchArea}</div>

        {/* Title */}
        <h3 className="project-card-title">{project.title}</h3>

        {/* Description */}
        <p className="project-card-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-card-tech">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-card-tech-badge">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="project-card-tech-more">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="project-card-footer">
          <div className="project-card-team">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <span>{project.teamMembers.length} thành viên</span>
          </div>
          
          <button className="project-card-link">
            Xem chi tiết
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
