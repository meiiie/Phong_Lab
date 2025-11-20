'use client';
import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsGrid.css';

const ProjectsGrid = ({ 
  projects, 
  filterOptions = {},
  columns = { desktop: 3, tablet: 2, mobile: 1 }
}) => {
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const areaMatch = selectedArea === 'all' || project.researchArea === selectedArea;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return areaMatch && statusMatch;
  });

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    // TODO: Open modal or navigate to detail page
  };

  return (
    <div className="projects-grid-container">
      {/* Filters */}
      {filterOptions.areas && (
        <div className="projects-filters">
          <div className="filter-group">
            <label className="filter-label">Lĩnh vực:</label>
            <div className="filter-tabs">
              <button
                className={`filter-tab ${selectedArea === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedArea('all')}
              >
                Tất cả
              </button>
              {filterOptions.areas.map(area => (
                <button
                  key={area}
                  className={`filter-tab ${selectedArea === area ? 'active' : ''}`}
                  onClick={() => setSelectedArea(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {filterOptions.statuses && (
            <div className="filter-group">
              <label className="filter-label">Trạng thái:</label>
              <div className="filter-tabs">
                <button
                  className={`filter-tab ${selectedStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedStatus('all')}
                >
                  Tất cả
                </button>
                {filterOptions.statuses.map(status => (
                  <button
                    key={status}
                    className={`filter-tab ${selectedStatus === status ? 'active' : ''}`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status === 'ongoing' ? 'Đang thực hiện' : 'Hoàn thành'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="projects-results">
        <p>{filteredProjects.length} dự án</p>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div 
          className="projects-grid"
          style={{
            '--columns-desktop': columns.desktop,
            '--columns-tablet': columns.tablet,
            '--columns-mobile': columns.mobile
          }}
        >
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      ) : (
        <div className="projects-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <h3>Không tìm thấy dự án</h3>
          <p>Thử thay đổi bộ lọc để xem thêm dự án khác</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
