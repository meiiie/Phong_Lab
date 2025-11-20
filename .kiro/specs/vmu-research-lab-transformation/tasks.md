# Implementation Plan - VMU Student Research Lab Transformation

## Overview

This implementation plan breaks down the transformation of the VMU 70th Anniversary website into a Neo-futuristic Student Research Lab landing page into discrete, manageable coding tasks. Each task builds incrementally on previous work, ensuring a smooth development process with no orphaned code.

## Task List

- [x] 1. Setup Neo-futuristic Theme System



  - Create new theme file with dark color palette, neon accents, and design tokens
  - Update CSS variables for Neo-futuristic aesthetic
  - _Requirements: 1.1, 1.2, 1.3_



- [ ] 1.1 Create lab-theme.css with Neo-futuristic color system
  - Define dark background colors (#0a0e27, #151b3d, #1e2749)
  - Define neon accent colors (cyan #00d4ff, purple #b24bf3, pink #ff2e97, green #00ff88)
  - Create gradient definitions and glow effects
  - Define opacity variants for all accent colors


  - _Requirements: 1.1, 1.2_

- [ ] 1.2 Update typography system for modern tech aesthetic
  - Import modern fonts (Inter, Space Grotesk, JetBrains Mono)
  - Define fluid typography scale using clamp()


  - Update font weights and line heights
  - Create utility classes for text styles
  - _Requirements: 1.5_

- [x] 1.3 Create spacing, border-radius, and shadow systems


  - Define consistent spacing scale (4px to 96px)
  - Create border-radius tokens (sm to full)
  - Define shadow system including neon shadows



  - Create transition timing tokens
  - _Requirements: 1.3_

- [x] 1.4 Update globals.css to integrate new theme


  - Import lab-theme.css
  - Update body background to dark theme
  - Apply new color variables to existing elements
  - Add reduced motion support
  - _Requirements: 1.1, 1.2, 13.5_

- [x] 2. Transform Homepage Hero Section


  - Replace anniversary hero with research lab hero featuring particle effects and modern layout
  - Implement 3D animations and text reveals
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 2.1 Create ParticleCanvas component
  - Implement HTML5 Canvas with particle system

  - Create particle generation and animation logic
  - Add mouse interaction (attraction/repulsion)
  - Implement connection lines between nearby particles
  - Optimize for 60fps performance
  - Add mobile optimization (reduced particle count)
  - _Requirements: 3.2, 10.1, 10.4, 11.3_



- [ ] 2.2 Create HeroLab component
  - Build hero layout with full viewport height
  - Integrate ParticleCanvas as background
  - Add gradient overlay for text readability
  - Implement floating geometric shapes
  - Create glowing grid pattern overlay
  - _Requirements: 3.1, 3.2, 3.4_

- [ ] 2.3 Implement hero text animations with GSAP
  - Create text reveal animation using SplitType
  - Implement staggered character/word animations
  - Add fade-in and slide-up effects
  - Create CTA button pulse animation
  - Add scroll indicator bounce animation
  - _Requirements: 3.5, 10.1, 10.2_

- [ ] 2.4 Update hero content and CTAs
  - Replace "VIMARU 70 năm" with "VMU Student Research Lab"
  - Add lab tagline and mission statement
  - Update CTA buttons ("Explore Research", "Join Lab")
  - Remove countdown timer and anniversary references
  - _Requirements: 2.3, 3.1, 3.3_

- [x] 3. Create Research Projects Data Structure



  - Define data models and create sample research projects data
  - Setup data files for easy content management
  - _Requirements: 2.1, 2.4, 14.1, 14.2_



- [ ] 3.1 Create research-projects.js data file
  - Define research project data model with all fields
  - Create 6-8 sample research projects covering different areas
  - Include project metadata (title, description, status, dates)
  - Add tech stack, team members, and outcomes
  - Include image paths and links


  - _Requirements: 2.1, 2.4, 14.1_

- [ ] 3.2 Create team-members.js data file
  - Define team member data model
  - Create sample team members (director, advisors, students, alumni)


  - Include profile info, research interests, and skills
  - Add social links and achievements
  - _Requirements: 6.1, 6.2, 14.1_

- [x] 3.3 Create publications.js data file


  - Define publication data model
  - Create sample publications (conferences, journals, theses)
  - Include authors, venue, year, and abstract

  - Add DOI, PDF links, and citation info
  - _Requirements: 7.1, 7.2, 14.1_

- [x] 3.4 Create tech-stack.js data file


  - Define technology data model
  - Create comprehensive tech stack list
  - Organize by categories (Frontend, Backend, AI/ML, DevOps, Hardware)
  - Include logos, descriptions, and learning resources
  - _Requirements: 8.1, 8.2, 8.4_

- [ ] 4. Build Research Projects Showcase Section
  - Create interactive project grid with filtering and animations
  - Replace timeline section with projects showcase
  - _Requirements: 2.1, 2.2, 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 4.1 Create ProjectCard component
  - Build card layout with thumbnail and overlay
  - Add project title, description, and research area
  - Display tech stack badges
  - Add status indicator (ongoing/completed)
  - Implement neon border on hover
  - _Requirements: 5.1, 5.2, 5.5_

- [ ] 4.2 Implement ProjectCard hover animations
  - Create GSAP hover timeline with scale and glow


  - Add thumbnail zoom effect
  - Implement smooth transitions
  - Optimize for touch devices
  - _Requirements: 5.4, 10.4, 11.4_

- [ ] 4.3 Create ResearchFilter component
  - Build filter UI with tabs for research areas
  - Add status toggle (ongoing/completed)
  - Create year dropdown filter
  - Implement search input
  - Style with Neo-futuristic design
  - _Requirements: 2.5, 5.3_




- [ ] 4.4 Create ProjectsGrid component
  - Build responsive grid layout (3/2/1 columns)
  - Integrate ProjectCard components
  - Implement filtering logic

  - Add empty state for no results
  - Create loading state
  - _Requirements: 5.1, 5.3, 11.1, 11.2_



- [ ] 4.5 Implement scroll-triggered animations for projects
  - Add fade-in animation on scroll
  - Implement stagger effect for cards
  - Use GSAP ScrollTrigger
  - Optimize for mobile performance
  - _Requirements: 10.1, 10.2, 11.3_

- [ ] 4.6 Replace Timeline section with ProjectsGrid
  - Remove existing Timeline component from homepage
  - Integrate ProjectsGrid in its place
  - Update section styling and spacing
  - Add section header and description
  - _Requirements: 2.1, 2.3_



- [ ] 5. Build Team Members Section
  - Create interactive team member profiles with role-based organization
  - Implement profile cards with animations
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 5.1 Create TeamMemberCard component
  - Build card with hexagonal/circular profile photo
  - Add name, role, and research interests
  - Display social/contact icons
  - Implement card flip animation on hover
  - Style with Neo-futuristic theme


  - _Requirements: 6.1, 6.2, 6.3_

- [ ] 5.2 Implement TeamMemberCard animations
  - Create 3D flip animation with GSAP
  - Add profile photo scale and glow on hover
  - Implement smooth transitions
  - Add touch support for mobile
  - _Requirements: 6.3, 10.4, 11.4_

- [ ] 5.3 Create TeamGrid component
  - Build responsive grid (4/2/1 columns)
  - Organize members by role hierarchy
  - Integrate TeamMemberCard components
  - Add role section headers
  - Implement alphabetical sorting within roles
  - _Requirements: 6.1, 6.4, 11.1, 11.2_

- [ ] 5.4 Implement scroll-triggered animations for team
  - Add stagger reveal animation on scroll
  - Use GSAP ScrollTrigger
  - Optimize for performance
  - _Requirements: 10.1, 10.2_

- [x] 5.5 Add TeamGrid to homepage



  - Integrate TeamGrid component
  - Add section header ("Our Team")
  - Style section with dark background
  - Add "Join Our Team" CTA
  - _Requirements: 6.1, 6.5_

- [ ] 6. Build Technology Stack Display
  - Create visual tech stack showcase with categories and animations
  - Display technologies used in the lab
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 6.1 Create TechIcon component


  - Build icon container with logo image
  - Add technology name label
  - Implement hover tooltip with description
  - Add glow effect on hover
  - Style with Neo-futuristic theme
  - _Requirements: 8.1, 8.2_

- [ ] 6.2 Implement TechIcon animations
  - Create float-in animation on scroll
  - Add hover scale, rotate, and glow effects
  - Implement pulsing animation for featured tech
  - Optimize for performance
  - _Requirements: 8.1, 10.4_



- [ ] 6.3 Create TechStackGrid component
  - Build categorized layout (Frontend, Backend, AI/ML, DevOps, Hardware)
  - Integrate TechIcon components
  - Add category headers with icons
  - Implement responsive grid
  - Add color-coding by category
  - _Requirements: 8.1, 8.4, 11.1_

- [ ] 6.4 Implement scroll-triggered animations for tech stack
  - Add stagger reveal by category
  - Use GSAP ScrollTrigger



  - Create wave effect across icons
  - _Requirements: 10.1, 10.2_

- [ ] 6.5 Add TechStackGrid to homepage
  - Integrate TechStackGrid component
  - Add section header ("Technologies We Use")
  - Style section with gradient background
  - Add link to resources page
  - _Requirements: 8.1, 8.5_




- [ ] 7. Update Navigation System
  - Transform navigation to reflect research lab structure
  - Update menu items and styling
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 7.1 Update TopBar component with new menu items
  - Replace anniversary menu items with lab sections
  - Update menu: Home, About, Research, Team, Publications, Resources, Contact
  - Update logo to lab logo
  - Keep sticky header functionality
  - _Requirements: 4.1, 4.3_

- [ ] 7.2 Apply Neo-futuristic styling to navigation
  - Update background to transparent with blur
  - Add neon underline for active/hover states
  - Implement glowing logo effect
  - Update colors to match dark theme
  - _Requirements: 4.2_

- [ ] 7.3 Update mobile menu styling
  - Apply dark theme to mobile overlay
  - Update hamburger icon styling
  - Add neon accents to menu items
  - Ensure touch-friendly targets
  - _Requirements: 4.4, 11.4_

- [ ] 7.4 Implement navigation animations
  - Add logo glow pulse animation
  - Create menu items slide-in stagger
  - Implement active indicator slide animation
  - Add scroll hide/show header behavior
  - _Requirements: 4.2, 10.1_

- [ ] 8. Create About Lab Page
  - Build dedicated page explaining lab mission, vision, and history
  - Replace "gioi-thieu" page content
  - _Requirements: 2.2_

- [ ] 8.1 Create About page layout
  - Build page structure with sections
  - Add hero section with lab overview
  - Create mission and vision sections
  - Add lab history timeline
  - Include facilities and equipment section
  - _Requirements: 2.2_

- [ ] 8.2 Implement About page animations
  - Add scroll-triggered section reveals
  - Implement text animations
  - Create image fade-ins
  - _Requirements: 10.1, 10.2_

- [ ] 8.3 Update content for research lab context
  - Write lab mission statement
  - Define research focus areas
  - Describe lab facilities
  - Add lab establishment history
  - _Requirements: 2.2_

- [ ] 9. Create Research Projects Page
  - Build dedicated page for detailed project showcase
  - Replace "su-kien" page
  - _Requirements: 2.1, 2.2, 5.1, 5.2, 5.3_

- [ ] 9.1 Create Research page layout
  - Build page with ProjectsGrid component
  - Add page hero with description
  - Integrate ResearchFilter component
  - Add pagination or infinite scroll
  - _Requirements: 2.1, 5.1, 5.3_

- [ ] 9.2 Create ProjectDetail modal or page
  - Build detailed project view
  - Display full project information
  - Show project images gallery
  - List team members with links
  - Add related publications
  - Include GitHub and demo links
  - _Requirements: 5.2_

- [ ] 9.3 Implement project detail animations
  - Add modal/page transition animations
  - Create image gallery transitions
  - Implement smooth scrolling within detail view
  - _Requirements: 10.1, 10.2_

- [ ] 10. Create Team Page
  - Build dedicated page for team member profiles
  - Replace "tam-nhin" page
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 10.1 Create Team page layout
  - Build page with TeamGrid component
  - Add page hero with team description
  - Organize by role sections
  - Add filter/search functionality
  - _Requirements: 6.1, 6.4_

- [ ] 10.2 Create MemberDetail modal or page
  - Build detailed member profile view
  - Display full bio and research interests
  - Show member's projects
  - List publications
  - Include skills and achievements
  - Add contact information
  - _Requirements: 6.2_

- [ ] 10.3 Implement member detail animations
  - Add modal/page transition animations
  - Create profile image animations
  - Implement smooth content reveals
  - _Requirements: 10.1, 10.2_

- [ ] 11. Create Publications Page
  - Build dedicated page for research publications
  - Replace "thu-vien" page
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 11.1 Create PublicationCard component
  - Build card with publication info
  - Display title, authors, venue, year
  - Add abstract preview
  - Include PDF and external links
  - Show citation count
  - _Requirements: 7.1, 7.2_

- [ ] 11.2 Create PublicationsGrid component
  - Build chronological list layout
  - Integrate PublicationCard components
  - Add year grouping
  - Implement filter by type (conference, journal, thesis)
  - Add search functionality
  - _Requirements: 7.1, 7.3_

- [ ] 11.3 Implement citation formatting
  - Add citation format selector (APA, IEEE, BibTeX)
  - Create copy-to-clipboard functionality
  - Display formatted citations
  - _Requirements: 7.5_

- [ ] 11.4 Create Publications page layout
  - Build page with PublicationsGrid
  - Add page hero with description
  - Integrate filters and search
  - Add achievements section
  - _Requirements: 7.1, 7.3, 7.4_

- [ ] 11.5 Implement publications animations
  - Add scroll-triggered card reveals
  - Create stagger animations
  - Implement smooth transitions
  - _Requirements: 10.1, 10.2_

- [ ] 12. Create Resources Page
  - Build page for learning materials and lab resources
  - New page for lab documentation
  - _Requirements: 8.3, 8.5_

- [ ] 12.1 Create ResourceCard component
  - Build card for resource items
  - Display resource title and description
  - Add resource type icon
  - Include download/external link
  - _Requirements: 8.3, 8.5_

- [ ] 12.2 Create Resources page layout
  - Build page with categorized resources
  - Add TechStackGrid component
  - Include learning materials section
  - Add lab guidelines and templates
  - Create documentation links section
  - _Requirements: 8.3, 8.5_

- [ ] 12.3 Implement resources animations
  - Add scroll-triggered reveals
  - Create hover effects
  - Implement smooth transitions
  - _Requirements: 10.1, 10.4_

- [ ] 13. Create Contact & Join Page
  - Build page for contact information and lab recruitment
  - Replace "tham-gia" page
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 13.1 Create ContactForm component
  - Build form with name, email, student ID, major, message fields
  - Implement form validation
  - Add submit functionality
  - Display success/error messages
  - Style with Neo-futuristic theme
  - _Requirements: 9.1, 9.2_

- [ ] 13.2 Create ApplicationForm component
  - Build application form for prospective members
  - Add fields: personal info, skills, interests, portfolio links
  - Implement file upload for CV/resume
  - Add form validation
  - Create submit functionality
  - _Requirements: 9.3, 9.5_

- [ ] 13.3 Create Contact page layout
  - Build page with contact information
  - Add ContactForm component
  - Include lab location map
  - Display email, social media, office hours
  - Add "Join Us" section with ApplicationForm
  - _Requirements: 9.1, 9.3, 9.4_

- [ ] 13.4 Implement contact page animations
  - Add form field animations
  - Create submit button effects
  - Implement success message animations
  - _Requirements: 10.1, 10.4_

- [ ] 14. Update Footer
  - Transform footer to reflect research lab branding
  - Update links and information
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 14.1 Update Footer component content
  - Replace anniversary content with lab info
  - Update sections: About, Quick Links, Contact, Social Media
  - Add lab logo and VMU branding
  - Update copyright information
  - _Requirements: 15.1, 15.2_

- [ ] 14.2 Apply Neo-futuristic styling to footer
  - Update background to dark theme
  - Add neon accents to links
  - Implement hover effects
  - Update typography
  - _Requirements: 15.1_

- [ ] 14.3 Add legal links to footer
  - Create Privacy Policy link
  - Add Terms of Use link
  - Include Accessibility Statement link
  - _Requirements: 15.3_

- [ ] 14.4 Implement footer responsive design
  - Stack sections vertically on mobile
  - Add collapsible accordions for mobile
  - Ensure touch-friendly links
  - _Requirements: 15.4, 11.4_

- [ ] 14.5 Add "Back to Top" button
  - Create floating button
  - Implement smooth scroll to top
  - Add show/hide on scroll behavior
  - Style with Neo-futuristic theme
  - _Requirements: 15.5_

- [ ] 15. Remove Anniversary-Specific Content
  - Clean up all 70th anniversary references and components
  - Ensure no orphaned code
  - _Requirements: 2.3_

- [ ] 15.1 Remove anniversary components
  - Delete CountdownTimer component
  - Remove AnniversaryProgram component
  - Clean up anniversary-specific sections
  - _Requirements: 2.3_

- [ ] 15.2 Remove anniversary data files
  - Delete vmu-timeline-data.js
  - Remove anniversary images from public folder
  - Clean up unused assets
  - _Requirements: 2.3_

- [ ] 15.3 Update remaining pages
  - Remove anniversary content from all pages
  - Update page titles and descriptions
  - Clean up unused routes
  - _Requirements: 2.3_

- [ ] 16. Implement Performance Optimizations
  - Optimize loading speed and animation performance
  - Ensure 60fps animations
  - _Requirements: 10.1, 10.2, 10.3, 11.3, 12.1, 12.4_

- [ ] 16.1 Implement code splitting
  - Add dynamic imports for heavy components
  - Lazy load ParticleCanvas
  - Lazy load modals and detail views
  - _Requirements: 12.1, 12.4_

- [ ] 16.2 Optimize images
  - Convert images to WebP format
  - Implement lazy loading
  - Add blur placeholders
  - Optimize image sizes
  - _Requirements: 11.5, 12.1_

- [ ] 16.3 Optimize GSAP animations
  - Configure GSAP for performance
  - Use will-change sparingly
  - Implement animation cleanup
  - Reduce animation complexity on mobile
  - _Requirements: 10.1, 10.2, 11.3_

- [ ] 16.4 Implement caching strategies
  - Configure Next.js caching
  - Add service worker for offline support
  - Implement browser caching headers
  - _Requirements: 12.1, 12.4_

- [ ] 17. Implement SEO Optimizations
  - Add meta tags, structured data, and sitemap
  - Ensure search engine discoverability
  - _Requirements: 12.2, 12.5_

- [ ] 17.1 Add meta tags to all pages
  - Create metadata for each page
  - Add Open Graph tags
  - Include Twitter Card tags
  - Add keywords and descriptions
  - _Requirements: 12.2_

- [ ] 17.2 Implement structured data
  - Add JSON-LD for ResearchOrganization
  - Include structured data for projects
  - Add structured data for team members
  - Include structured data for publications
  - _Requirements: 12.2_

- [ ] 17.3 Generate dynamic sitemap
  - Create sitemap.xml with all pages
  - Include dynamic routes (projects, team, publications)
  - Update robots.txt
  - _Requirements: 12.5_

- [ ] 18. Implement Accessibility Features
  - Ensure WCAG 2.1 AA compliance
  - Add keyboard navigation and screen reader support
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [ ] 18.1 Add semantic HTML and ARIA labels
  - Use semantic HTML5 elements
  - Add ARIA labels to interactive components
  - Include ARIA roles where needed
  - Add alt text to all images
  - _Requirements: 13.1, 13.4_

- [ ] 18.2 Implement keyboard navigation
  - Ensure all interactive elements are keyboard accessible
  - Add visible focus indicators
  - Implement logical tab order
  - Add keyboard shortcuts for common actions
  - _Requirements: 13.2_

- [ ] 18.3 Ensure color contrast compliance
  - Audit all text for WCAG AA contrast ratios
  - Update colors if needed
  - Test with contrast checking tools
  - _Requirements: 13.3_

- [ ] 18.4 Add reduced motion support
  - Implement prefers-reduced-motion media query
  - Provide alternative non-animated experiences
  - Test with reduced motion enabled
  - _Requirements: 13.5_

- [ ] 19. Testing and Quality Assurance
  - Comprehensive testing across browsers and devices
  - Performance and accessibility audits
  - _Requirements: All_

- [ ] 19.1 Cross-browser testing
  - Test on Chrome, Firefox, Safari, Edge
  - Test on mobile browsers (iOS Safari, Chrome Mobile)
  - Fix browser-specific issues
  - _Requirements: 11.1, 11.2_

- [ ] 19.2 Responsive design testing
  - Test on various screen sizes (320px - 2560px)
  - Test on physical devices (phones, tablets, desktops)
  - Fix layout issues
  - _Requirements: 11.1, 11.2, 11.4_

- [ ] 19.3 Performance audit
  - Run Lighthouse audits
  - Achieve Performance score > 90
  - Optimize based on audit results
  - _Requirements: 12.1, 12.4_

- [ ] 19.4 Accessibility audit
  - Run automated accessibility tests
  - Manual keyboard navigation testing
  - Screen reader testing
  - Fix accessibility issues
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [ ] 19.5 SEO audit
  - Verify meta tags on all pages
  - Test structured data with Google Rich Results Test
  - Verify sitemap and robots.txt
  - _Requirements: 12.2, 12.5_

- [ ] 20. Documentation and Deployment
  - Create documentation for content management
  - Deploy to production
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 20.1 Create content management documentation
  - Document data file structure
  - Provide examples for adding projects, members, publications
  - Create style guide for content
  - _Requirements: 14.1, 14.2, 14.5_

- [ ] 20.2 Setup CI/CD pipeline
  - Configure automatic deployment
  - Setup build and test automation
  - Configure environment variables
  - _Requirements: 14.4_

- [ ] 20.3 Deploy to production
  - Deploy to Vercel/Netlify
  - Configure custom domain
  - Setup SSL certificate
  - Test production deployment
  - _Requirements: 14.4_

- [ ] 20.4 Create README and project documentation
  - Update README with lab information
  - Document development setup
  - Add contribution guidelines
  - Include deployment instructions
  - _Requirements: 14.5_

## Implementation Notes

### Development Approach
- **Incremental Development**: Each task builds on previous work
- **Component-First**: Build reusable components before pages
- **Data-Driven**: Setup data structures early for easy content management
- **Mobile-First**: Design and test for mobile throughout development
- **Performance-Conscious**: Optimize as you build, not as an afterthought

### Testing Strategy
- Test each component as it's built
- Verify animations on multiple devices
- Check accessibility with each new feature
- Run performance audits regularly

### Content Management
- All content in data files (JS/JSON)
- Easy to update without code changes
- Clear documentation for non-technical updates
- Version controlled for change tracking

### Deployment Strategy
- Continuous deployment from main branch
- Staging environment for testing
- Production deployment after QA approval
- Rollback plan for issues

## Summary

This implementation plan provides 20 major tasks with 80+ sub-tasks, covering the complete transformation from VMU 70th Anniversary website to Neo-futuristic Student Research Lab landing page. Each task is actionable, references specific requirements, and builds incrementally toward the final product.

The plan prioritizes:
1. **Theme and visual transformation** (Tasks 1-2)
2. **Data structure setup** (Task 3)
3. **Core components** (Tasks 4-6)
4. **Navigation and pages** (Tasks 7-13)
5. **Polish and optimization** (Tasks 14-18)
6. **Testing and deployment** (Tasks 19-20)

All tasks are designed to be executed by a coding agent with clear objectives and no ambiguity.
