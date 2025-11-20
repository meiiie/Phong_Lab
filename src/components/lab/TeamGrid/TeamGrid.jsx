'use client';
import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import TeamCarousel from '../TeamCarousel/TeamCarousel';
import './TeamGrid.css';

const TeamGrid = ({ 
  members, 
  groupByRole = true,
  columns = { desktop: 4, tablet: 2, mobile: 1 }
}) => {
  const roleOrder = ["Lab Director", "Faculty Advisor", "Student Researcher", "Research Member", "Alumni"];
  
  const roleLabels = {
    "Lab Director": "Giám đốc Lab",
    "Faculty Advisor": "Giảng viên Hướng dẫn",
    "Student Researcher": "Thành viên Nghiên cứu",
    "Research Member": "Thành viên Nghiên cứu",
    "Alumni": "Cựu thành viên"
  };

  const handleMemberClick = (member) => {
    console.log('Member clicked:', member);
    // TODO: Open modal or navigate to detail page
  };

  // Group members by role
  const groupedMembers = groupByRole
    ? roleOrder.reduce((acc, role) => {
        const roleMembers = members
          .filter(m => m.role === role)
          .sort((a, b) => a.name.localeCompare(b.name, 'vi'));
        
        if (roleMembers.length > 0) {
          acc[role] = roleMembers;
        }
        return acc;
      }, {})
    : { all: members };

  // Combine Student Researcher and Research Member into one group
  const researchMembers = [
    ...(groupedMembers["Student Researcher"] || []),
    ...(groupedMembers["Research Member"] || [])
  ];

  return (
    <div className="team-grid-container">
      {groupByRole ? (
        <>
          {/* Lab Director and Faculty Advisor - Grid Layout */}
          {["Lab Director", "Faculty Advisor"].map((role) => {
            const roleMembers = groupedMembers[role];
            if (!roleMembers || roleMembers.length === 0) return null;

            return (
              <div key={role} className="team-role-section">
                <div className="team-role-header-wrapper">
                  <h3 className="team-role-header">{roleLabels[role]}</h3>
                </div>
                <div 
                  className="team-grid"
                  style={{
                    '--columns-desktop': Math.min(roleMembers.length, 2),
                    '--columns-tablet': 2,
                    '--columns-mobile': 1
                  }}
                >
                  {roleMembers.map(member => (
                    <TeamMemberCard
                      key={member.id}
                      member={member}
                      onClick={handleMemberClick}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Research Members - Carousel Layout */}
          {researchMembers.length > 0 && (
            <div className="team-role-section">
              <div className="team-role-header-wrapper">
                <h3 className="team-role-header">Thành viên Nghiên cứu</h3>
                <p className="team-role-description">
                  Đội ngũ sinh viên tài năng đang nghiên cứu và phát triển các dự án công nghệ
                </p>
              </div>
              <TeamCarousel
                members={researchMembers}
                onMemberClick={handleMemberClick}
              />
            </div>
          )}

          {/* Alumni - Grid Layout */}
          {groupedMembers["Alumni"] && groupedMembers["Alumni"].length > 0 && (
            <div className="team-role-section">
              <div className="team-role-header-wrapper">
                <h3 className="team-role-header">{roleLabels["Alumni"]}</h3>
              </div>
              <div 
                className="team-grid"
                style={{
                  '--columns-desktop': columns.desktop,
                  '--columns-tablet': columns.tablet,
                  '--columns-mobile': columns.mobile
                }}
              >
                {groupedMembers["Alumni"].map(member => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    onClick={handleMemberClick}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div 
          className="team-grid"
          style={{
            '--columns-desktop': columns.desktop,
            '--columns-tablet': columns.tablet,
            '--columns-mobile': columns.mobile
          }}
        >
          {members.map(member => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onClick={handleMemberClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamGrid;
